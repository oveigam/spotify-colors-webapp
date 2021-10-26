import { motion } from "framer-motion";
import { RiHome2Line, RiAlbumLine, RiPlayListLine } from "react-icons/ri";
import { MdOutlineRecordVoiceOver, MdOutlineDashboardCustomize, MdMusicNote } from "react-icons/md";
import NavigationLink from "./NavigationLink";

const variants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
        transition: { staggerChildren: 0.02, staggerDirection: -1 }
    }
};

const Navigation = (props) => (
    <motion.ul variants={variants}>
        <NavigationLink to="/" toggleOpen={props.toggleOpen} Icon={RiHome2Line}>Inicio</NavigationLink>
        <NavigationLink to="/playlists" toggleOpen={props.toggleOpen} Icon={RiPlayListLine}>Playlists</NavigationLink>
        <NavigationLink to="/artists" toggleOpen={props.toggleOpen} Icon={MdOutlineRecordVoiceOver}>Artistas</NavigationLink>
        <NavigationLink to="/albums" toggleOpen={props.toggleOpen} Icon={RiAlbumLine}>Álbumes</NavigationLink>
        <NavigationLink to="/songs" toggleOpen={props.toggleOpen} Icon={MdMusicNote}>Canciones</NavigationLink>
        <NavigationLink to="/customize" toggleOpen={props.toggleOpen} Icon={MdOutlineDashboardCustomize}>Personalizar</NavigationLink>
    </motion.ul>
);

export default Navigation