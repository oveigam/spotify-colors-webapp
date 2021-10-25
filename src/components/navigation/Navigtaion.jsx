import { motion } from "framer-motion";
import { RiHome2Line, RiAlbumLine, RiPlayListLine } from "react-icons/ri";
import { MdOutlineRecordVoiceOver, MdOutlineDashboardCustomize } from "react-icons/md";
import NavigationLink from "./NavigationLink";

const variants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
        transition: { staggerChildren: 0.02, staggerDirection: -1 }
    }
};

const Navigation = () => (
    <motion.ul variants={variants}>
        <NavigationLink to="/" Icon={RiHome2Line}>Inicio</NavigationLink>
        <NavigationLink to="/playlists" Icon={RiPlayListLine}>Playlists</NavigationLink>
        <NavigationLink to="/artists" Icon={MdOutlineRecordVoiceOver}>Artistas</NavigationLink>
        <NavigationLink to="/albums" Icon={RiAlbumLine}>Álbumes</NavigationLink>
        <NavigationLink to="/customize" Icon={MdOutlineDashboardCustomize}>Personalizar</NavigationLink>
    </motion.ul>
);

export default Navigation