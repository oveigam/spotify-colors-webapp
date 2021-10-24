import { createContext, useCallback, useState } from "react";
import { darkTheme, lightTheme } from "../util/themes";

const themeContext = createContext()

export default themeContext

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(darkTheme)
    const [themedStyle, setThemedStyle] = useState({
        backgroundColor: darkTheme.surface1,
        color: darkTheme.text
    })

    const changeTheme = useCallback(() => {
        if (theme === darkTheme) {
            setTheme(lightTheme)
            setThemedStyle({
                backgroundColor: lightTheme.surface1,
                color: lightTheme.text
            })
        } else {
            setTheme(darkTheme)
            setThemedStyle({
                backgroundColor: darkTheme.surface1,
                color: darkTheme.text
            })
        }
    }, [theme, setTheme, setThemedStyle])

    return (
        <themeContext.Provider value={{ theme, themedStyle, changeTheme }}>
            {children}
        </themeContext.Provider>
    );
}