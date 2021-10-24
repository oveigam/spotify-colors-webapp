import { useContext } from "react";
import themeContext from "../contexts/themeContext";

const useStyles = () => {
    const { themedStyle } = useContext(themeContext)
    return themedStyle;
}

export default useStyles;