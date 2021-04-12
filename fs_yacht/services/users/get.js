import airDB from 'services/airtableClient';

const get = async () => {
  const users = await airDB('users')
    .select({
      sort: [{ field: 'email' }]
    })
    .firstPage();

  return users.map((user) => user.fields);
};

export default get;
