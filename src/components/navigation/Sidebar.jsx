import { motion, useCycle } from "framer-motion";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import useTheme from '../../hooks/useTheme';
import styles from '../../styles/Navigation.module.scss';
import SidebarToggle from './SidebarToggle';
import Navigation from './Navigtaion';

const sidebar = {
    open: (height = 1000) => ({
        clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
        transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2
        }
    }),
    closed: {
        clipPath: "circle(30px at 40px 40px)",
        transition: {
            type: "spring",
            stiffness: 400,
            damping: 40
        }
    },
    hovered: {
        clipPath: "circle(33px at 40px 40px)",
        transition: {
            type: "spring",
            stiffness: 400,
            damping: 40
        }
    }
};

const Sidebar = (props) => {
    const theme = useTheme()

    const [isOpen, toggleOpen] = useCycle(false, true);
    const [isHovering, setIsHovering] = useState(false)

    const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' })

    return (
        <motion.nav
            className={styles.sidebar}
            initial={false}
            animate={isOpen || isDesktop ? "open" : isHovering ? "hovered" : "closed"}
        >
            <motion.div
                className={styles.sidebarBackground}
                style={{ backgroundColor: isOpen || isDesktop ? theme.surface2 : theme.text }}
                variants={sidebar}
                custom={props.height}
            />
            <Navigation />
            {
                !isDesktop &&
                <SidebarToggle
                    toggle={toggleOpen}
                    setHovering={setIsHovering}
                    color={isOpen ? theme.text : theme.surface1}
                />
            }
        </motion.nav>
    );
}

export default Sidebar;