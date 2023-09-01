import { useSelector } from "react-redux";
import { RootState } from "../store";

const useAvatarLetter = () => {
  const { prénom } = useSelector((state: RootState) => state.user.user);
  const avatarLetter = prénom[0].toUpperCase();

  return avatarLetter;
};

export default useAvatarLetter;
