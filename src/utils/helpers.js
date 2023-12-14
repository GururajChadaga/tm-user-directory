export const getUsersWithPosts = (users, posts) => {
  if (!users || !posts) return [];

  const postsByUserId = {};
  posts.forEach((post) => {
    const userId = post.userId;
    if (!postsByUserId[userId]) postsByUserId[userId] = [];
    postsByUserId[userId].push(post);
  });

  return users.map((user) => {
    return { ...user, posts: postsByUserId[user.id] ?? [] };
  });
};

export const getFormattedAddress = (addressData) => {
  if (!addressData) {
    return '';
  }

  const { street, suite, city, zipcode } = addressData;
  return `${street}, ${suite}, ${city}, ${zipcode}`;
};
