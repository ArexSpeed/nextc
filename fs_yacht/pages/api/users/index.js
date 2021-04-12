import createdUser from 'services/users/create';
import getUsers from 'services/users/get';

export default async (req, res) => {
  switch (req.method) {
    case 'GET': {
      const users = await getUsers();
      res.status(200).json(users);

      break;
    }
    case 'POST': {
      try {
        const payload = req.body;
        const user = await createdUser(payload);

        res.status(200).json({ status: 'created', user });
      } catch (error) {
        res.status(422).json({ status: 'not_created', error: error.message });
        console.log(error);
      }
      break;
    }
    default:
      res.status(400);
  }
};
