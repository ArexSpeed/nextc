import { conversation } from 'models';

export const getAll = ({ userId }) =>
  conversation.findMany({
    where: {
      users: {
        some: {
          userId
        }
      }
    },
    include: {
      users: {
        include: {
          user: true
        }
      },
      messages: {
        include: {
          user: true
        }
      }
    }
  });

// users: some -> wyszukuje relacje wsrod konwersacji gdzie choc jeden ma id wybranego usera
// include wyciaga nie tylko konwersacje ale takze relacje do tej konwersacji
