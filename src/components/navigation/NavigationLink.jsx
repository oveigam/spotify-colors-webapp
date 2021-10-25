import { motion } from "framer-motion";
import { useHistory, useLocation } from "react-router-dom";
import styles from '../../styles/Navigation.module.scss'
import useTheme from './../../hooks/useTheme';

const variants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 }
        }
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 }
        }
    }
};

const NavigationLink = (props) => {
    const { Icon, to } = props

    const theme = useTheme()

    const history = useHistory()
    const location = useLocation()

    const active = location?.pathname === to

    return (
        <motion.li
            variants={variants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => history.push(to)}
            style={{
                color: active ? theme.primary : theme.text,
                fontWeight: active && 'bold'
            }}
        >
            <Icon className={styles.linkIcon} size={40} />
            <span className={styles.linkText}>{props.children}</span>
        </motion.li>
    );
};

export default NavigationLink