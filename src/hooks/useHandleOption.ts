import { useLocation, useNavigate, useParams } from "react-router-dom";
import { formatRouteName } from "../helpers";

const useHandleOption = () => {
  const { pathname } = useLocation();
  const { id } = useParams();
  const navigate = useNavigate();

  const handleOption = (opt: string, parent: string) => {
    const isEnCours = pathname.endsWith("en-cours");
    const isArchives = pathname.endsWith("archives");
    const isOnFicheClient = pathname.includes(id as string);
    const isSameDropDown = pathname.includes(formatRouteName(parent!));
    const isNotSameDropDown = !pathname.includes(formatRouteName(parent!));

    const formattedOption = opt
      .replace(" ", "-")
      .replace(/é/i, "e")
      .toLowerCase();

    if (
      (isEnCours &&
        formattedOption === "en-cours" &&
        pathname.includes(formatRouteName(parent!))) ||
      (isArchives &&
        formattedOption === "archives" &&
        pathname.includes(formatRouteName(parent!))) ||
      isOnFicheClient
    )
      return;

    const newPath = isNotSameDropDown
      ? `/dashboard/${formatRouteName(parent!)}/${formattedOption}`
      : isSameDropDown
      ? `${pathname}/${formattedOption}`
      : "";
    const replacedPath = `${pathname.replace(
      /(en-cours|archives)$/,
      formattedOption
    )}`;
    navigate(
      (isEnCours && isSameDropDown) || (isArchives && isSameDropDown)
        ? replacedPath
        : newPath
    );
  };
  return handleOption;
};

export default useHandleOption;
