'use strict';
const { sanitizeEntity, finder } = require('strapi-utils');
const stripe = require('stripe')(process.env.STRIPE_SK);

//dollar amount to cents
const fromDecimalToInt = (number) => parseInt(number * 100);

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async find(ctx) {
    const { user } = ctx.state; //This is the magic user
    let entities 
    if(ctx.query._q) {
      entities = await strapi.services.order.search({...ctx.query, user: user.id});
    } else {
      entities = await strapi.services.order.find({...ctx.query, user: user.id});
    }
    //filter only orders which are belong to user
    return entities.map(entity => sanitizeEntity(entity, { model: strapi.models.order }));
  },
  async findOne(ctx) {
    const { id } = ctx.params;
    const { user } = ctx.state;

    const entity = await strapi.services.order.findOne( { id, user: user.id });
    return sanitizeEntity(entity, { model: strapi.models.order });
  },

  //stripe controller
  async create(ctx) {
    const { product } = ctx.request.body

    if(!product) {
      return ctx.throw(400, 'Please specify a oroduct');
    }

    const realProduct = await strapi.services.product.findOne({ id: product.id })
    if(!realProduct) {
      return ctx.throw(404, 'No product with such id')
    }

    const { user } = ctx.state

    const BASE_URL = ctx.request.headers.origin || 'http://localhost:3000'

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      customer_email: user.email,
      mode: 'payment',
      success_url: `${BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: BASE_URL,
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: realProduct.name
            },
            unit_amout: fromDecimalToInt(realProduct.price)
          },
          quantity: 1
        }
      ]
    })
    //Create the order
    const newOrder = await strapi.services.order.create({
      user: user.id,
      product: realProduct.id,
      total: realProduct.price,
      status: 'unpaid',
      checkout_session: session.id
    })
    return { id: session.id }
  }

};
