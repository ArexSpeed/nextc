import { user } from 'models';

export default async (req, res) => {
  //example of create
  /*
  await user.create({
    data: {
      email: 'artur@email.com',
      name: 'Arek',
      image: 'test.jpg'
    }
  });
  await user.update({
    where: {
      id: 3
    },
    data: {
      name: 'Artur'
    }
  });
  await user.delete({
    where: {
      id: 3
    }
  });
  */
  const allUsers = await user.findMany();

  res.status(200).json({ allUsers });
};
