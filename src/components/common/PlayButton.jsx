
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { changeQueue, pause, play } from '../../store/slices/playerSlice';
import useTheme from './../../hooks/useTheme';

const animation = {
    hidden: {
        y: 25,
        opacity: 0,
        transition: {
            type: 'spring',
            stiffness: 110
        }
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            stiffness: 90
        }
    }
}

const PlayButton = (props) => {
    const { className, uri, isVisible } = props

    const theme = useTheme()

    const dispatch = useDispatch()
    const { isReady, queue, isPlaying } = useSelector(state => state.player)

    const isCurrentlyPlaying = queue[0] === uri

    const clickHandler = () => {
        if (!isCurrentlyPlaying) {
            dispatch(changeQueue(uri))
        } else {
            if (isPlaying) {
                dispatch(pause())
            } else {
                dispatch(play())
            }
        }
    }

    const icon = isCurrentlyPlaying && isPlaying ? 'M41.86 128V0H8.648v128h33.21zm77.491 0V0h-33.21v128h33.21z' : 'M119.351 64L8.65 0v128z'

    if (!isReady) return null
    return (
        <motion.div
            className={`${className} animation`}
            style={{
                backgroundColor: theme.primary,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 10,
                paddingLeft: isCurrentlyPlaying && isPlaying ? 10 : 12,
                paddingRight: isCurrentlyPlaying && isPlaying ? 10 : 8,
                borderRadius: '100%'
            }}
            initial={false}
            animate={isVisible || (isCurrentlyPlaying) ? "visible" : "hidden"}
            variants={animation}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: .95 }}
            onClick={clickHandler}
        >
            <svg preserveAspectRatio="xMidYMid" viewBox="0 0 128 128" width="1em">
                <path d={icon} fill="currentColor">
                </path>
            </svg>
        </motion.div>
    );
}

export default PlayButton;