import Color from "color";
import { useContext } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import SpotifyWebPlayer from "react-spotify-web-playback";
import { changePlayingStatus, setReady } from "../../store/slices/playerSlice";
import authContext from './../../contexts/authContext';
import useTheme from './../../hooks/useTheme';

const SpotifyPlayer = () => {
    const { accessToken } = useContext(authContext)

    const theme = useTheme()
    const dispatch = useDispatch()

    const { queue, isPlaying, isReady } = useSelector(state => state.player)

    return (
        <div style={{ zIndex: 10 }}>
            <SpotifyWebPlayer
                styles={{
                    height: 80,
                    activeColor: theme.primary,
                    bgColor: theme.surface2,
                    color: theme.text,
                    loaderColor: theme.primary,
                    trackNameColor: theme.text,
                    trackArtistColor: theme.text + '55',
                    sliderColor: theme.primary,
                    sliderHandleColor: Color(theme.primary).darken(0.1).hex(),
                    sliderHeight: 5,
                }}
                name="Spotify Colors"
                token={accessToken}
                showSaveIcon
                uris={queue}
                play={isPlaying}
                callback={state => {
                    if (!isReady && state.status === 'READY') {
                        dispatch(setReady())
                    }
                    if (state.isPlaying !== isPlaying) {
                        dispatch(changePlayingStatus(state.isPlaying))
                    }
                }}
            />
        </div>
    );
}

export default SpotifyPlayer;