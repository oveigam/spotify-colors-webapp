import Color from "color";
import { motion } from "framer-motion";
import { useState } from "react";
import styles from '../../styles/Items.module.scss';
import ArtistsLinks from "./ArtistsLinks";
import useTheme from './../../hooks/useTheme';
import PlayButton from "./PlayButton";

const Item = ({ name, artists, images, uri, genres, followers }) => {
    const theme = useTheme()

    const [hovering, setHovering] = useState(false)

    return (
        <motion.div
            className={styles.item}
            style={{ backgroundColor: hovering ? Color(theme.surface2).alpha(0.7) : theme.surface2 }}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
        >
            <div className="relative" style={{ paddingBottom: '100%', overflow: "hidden" }}>
                <img
                    src={images.medium}
                    alt={`${name}}`}
                    draggable={false}
                    height={200}
                />
                <PlayButton className={styles.play} uri={uri} isVisible={hovering} />
            </div>
            <h4 title={name}>{name}</h4>
            {
                artists &&
                <ArtistsLinks artists={artists} />
            }
            {
                followers &&
                <span className={styles.followers}>{followers} followers</span>
            }
        </motion.div>
    );
}

export default Item;