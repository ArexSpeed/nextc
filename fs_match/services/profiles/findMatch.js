import { user, filter as filterModel, profileCheck } from 'models';

const checkedIds = async (userId) => {
  const profiles = await profileCheck.findMany({
    where: {
      userId
    },
    select: {
      targetId: true
    }
  });

  return profiles.map((p) => p.targetId); // tablica profili sprawdzonych
};

export const findMatch = async ({ userId }) => {
  console.log(userId, 'id in filter');
  const filter = await filterModel.findUnique({
    where: {
      userId
    }
  });
  console.log(filter, 'filter');
  if (!filter) {
    return null; //w przypadku throw Error wykazywalo bledy i blokowalo apke
  }

  const ids = await checkedIds(userId); //odfiltrowanie juz sprawdzonych, czyli szukanie tylko po nowych userach
  // .findFirst - zwraca pierwszy znaleziony rekord
  const profile = await user.findFirst({
    where: {
      skill: filter.skill,
      timezone: filter.timezone,
      NOT: {
        id: { in: ids }
      }
    }
  });

  return profile;
};
