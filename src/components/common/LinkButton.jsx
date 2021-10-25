// import color from 'color';
import Color from 'color';
import { motion } from 'framer-motion';
import { darkTheme, lightTheme } from '../../util/themes';
import useTheme from '../../hooks/useTheme';

const LinkButton = (props) => {
    const theme = useTheme()

    const color = Color(props.color ? props.color : theme.primary)
    const textColor = color.isDark() ? darkTheme.text : lightTheme.text

    const style = props.style ? { backgroundColor: color, color: textColor, ...props.style, } : { backgroundColor: color, color: textColor }

    return (
        <motion.a
            className="boton-link"
            draggable="false"
            {...props}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: .95 }}
            style={style}
        >
            {props.children}
        </motion.a>
    )
}

export default LinkButton;