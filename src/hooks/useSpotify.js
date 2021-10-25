import SpotifyWebApi from "spotify-web-api-node";

const spotifyApi = new SpotifyWebApi({
    clientId: process.env.REACT_APP_SPOTIFY_CLIENT_ID
})

const useSpotify = () => {
    return spotifyApi;
}

export default useSpotify;