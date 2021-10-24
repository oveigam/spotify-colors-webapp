import { useContext } from "react";
import themeContext from './../contexts/themeContext';

const useTheme = () => {
    const { theme } = useContext(themeContext)
    return theme;
}

export default useTheme;