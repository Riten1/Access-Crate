export const getProfilePictureAlternative = (title: string | undefined) => {
  if (!title) {
    return "";
  }

  return `${title?.split(" ")?.[0]?.charAt(0)?.toLocaleUpperCase()}${title?.split(" ")?.pop()?.charAt(0)?.toUpperCase()}`;
};
