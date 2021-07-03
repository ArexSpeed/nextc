import { conversation } from 'models';

export const getAll = ({ userId, page = 0, perPage = 7, searchTerm }) => {
  let filters = {};
  if (searchTerm) {
    filters = {
      ...filters,
      messages: {
        some: {
          content: {
            contains: searchTerm,
            mode: 'insensitive'
          }
        }
      }
    };
  }
  return conversation.findMany({
    where: {
      users: {
        some: {
          userId
        }
      },
      ...filters
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
    },
    orderBy: {
      id: 'desc'
    },
    skip: page * perPage,
    take: perPage
  });
};

// users: some -> wyszukuje relacje wsrod konwersacji gdzie choc jeden ma id wybranego usera
// include wyciaga nie tylko konwersacje ale takze relacje do tej konwersacji
