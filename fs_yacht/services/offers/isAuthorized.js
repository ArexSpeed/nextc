const isAuthorized = (offer, session) => {
  if (!session) return false;
  if (session.user.role === 'admin') return true;
  if (offer.users[0] === session.user.id) return true;
  //zwrocic domyslnie false
  return false;
};

export default isAuthorized;
