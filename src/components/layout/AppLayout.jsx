import SpotifyPlayer from "../common/SpotifyPlayer";
import Page from "./Page";
import styles from '../../styles/Navigation.module.scss'
import Sidebar from "../navigation/Sidebar";
import useDimensions from './../../hooks/useDimensions';

const AppLayout = ({ children }) => {
    const [ref, { height }] = useDimensions()

    return (
        <Page overflow>
            <Sidebar height={height} />
            <div ref={ref} className={styles.appContent} style={{ flexGrow: 1, overflowY: 'auto' }}>
                {children}
            </div>
            <SpotifyPlayer />
        </Page>
    );
}

export default AppLayout;