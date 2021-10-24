// import color from 'color';
import Color from 'color';
import { motion } from 'framer-motion';
import { darkTheme, lightTheme } from '../../util/themes';
import useTheme from './../../hooks/useTheme';

const Button = (props) => {
    const theme = useTheme()

    const color = Color(props.color ? props.color : theme.primary)
    const textColor = color.isDark() ? darkTheme.text : lightTheme.text

    const style = props.style ? { backgroundColor: color, color: textColor, ...props.style, } : { backgroundColor: color, color: textColor }

    return (
        <motion.button
            className="boton"
            {...props}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: .95 }}
            style={style}
        >
            {props.children}
        </motion.button>
    )
}

export default Button;