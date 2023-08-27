const formatRouteName = (str: string) => {
  const length = str.split(" ").length;
  const firstWord =
    length === 1
      ? str.split(" ")[0].toLowerCase()
      : str.split(" ")[length - 1].toLowerCase();

  return firstWord;
};

export default formatRouteName;
