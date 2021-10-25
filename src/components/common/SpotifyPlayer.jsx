import Color from "color";
import { useContext } from "react";
import SpotifyWebPlayer from "react-spotify-web-playback";
import authContext from './../../contexts/authContext';
import useTheme from './../../hooks/useTheme';

const SpotifyPlayer = () => {
    const { accessToken } = useContext(authContext)
    const theme = useTheme()

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
                token={accessToken}
                showSaveIcon
            />
        </div>
    );
}

export default SpotifyPlayer;