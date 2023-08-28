const formatRouteName = (str: string) => {
  const length = str.split(" ").length;
  const firstWord =
    length === 1
      ? str.split(" ")[0].toLowerCase().replace("é", "e")
      : str.split(" ")[length - 1].toLowerCase().replace("é", "e");

  return firstWord;
};

export default formatRouteName;
