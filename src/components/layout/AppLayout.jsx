import SpotifyPlayer from "../common/SpotifyPlayer";
import Page from "./Page";
import styles from '../../styles/Navigation.module.scss'
import Sidebar from "../navigation/Sidebar";
import useDimensions from './../../hooks/useDimensions';
import { motion, useCycle } from "framer-motion";
import { useMediaQuery } from "react-responsive";

const AppLayout = ({ children }) => {
    const [ref, { height }] = useDimensions()
    const [isSidebarOpen, toggleSidebarOpen] = useCycle(false, true);

    const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' })
    const hasBackdrop = isSidebarOpen && !isDesktop

    return (
        <Page overflow>
            <Sidebar height={height} isOpen={isSidebarOpen} toggleOpen={toggleSidebarOpen} />
            <div
                ref={ref}
                className={styles.appContent}
                style={{
                    flexGrow: 1,
                    overflowY: 'auto',
                }}
            >
                {children}
            </div>
            <SpotifyPlayer />
            {
                hasBackdrop &&
                <motion.div
                    className={styles.backdrop}
                    onClick={toggleSidebarOpen}
                    initial={{ clipPath: "circle(0px at 100% 70%)" }}
                    animate={{ clipPath: `circle(${height * 2 || 1000}px at 100% 70%)` }}
                    transition={{ type: 'spring', stiffness: 35 }}
                />
            }
        </Page>
    );
}

export default AppLayout;