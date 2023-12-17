export const getUsersWithPosts = (users, posts) => {
  if (!users) return [];
  if (!posts)
    return users.map((user) => {
      return { ...user, posts: [] };
    });

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

  const { street = '', suite = '', city = '', zipcode = '' } = addressData;
  return `${street}, ${suite}, ${city}, ${zipcode}`;
};

export function getTimeFromTimestamp(timestampString) {
  if (!timestampString) {
    return null;
  }

  const timestampDate = new Date(timestampString);

  // Extract the time zone offset from the timestamp string
  const offsetMatch = timestampString.match(/([+-]\d{2}:\d{2})$/);
  const timeZoneOffset = offsetMatch ? offsetMatch[0] : 'Z';

  // Format the time components with the extracted time zone offset
  const formattedTime = timestampDate.toLocaleTimeString('en', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZoneName: 'short',
    timeZone: timeZoneOffset,
  });

  // Split the formatted time to get individual components
  const [hours, minutes, seconds] = formattedTime.split(/[:\s]/);

  return {
    hours,
    minutes,
    seconds,
  };
}
