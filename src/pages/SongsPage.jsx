import { useEffect } from 'react';
import { useState } from 'react';
import useSpotify from './../hooks/useSpotify';
import styles from '../styles/Items.module.scss'
import Item from './../components/common/Item';

const SongsPage = () => {
    const spotify = useSpotify()

    const [favoritedSongs, setFavoritedSongs] = useState([])

    useEffect(() => {
        spotify.getMySavedTracks({ limit: 50 })
            .then(data => {
                // TODO loadMore (recupera maximo 50)
                const { items } = data.body
                setFavoritedSongs(items.map(({ track }) => {
                    return ({
                        id: track.id,
                        name: track.name,
                        artists: track.artists.map(artist => ({
                            id: artist.id,
                            name: artist.name,
                            uri: artist.uri
                        })),
                        images: {
                            large: track.album.images[0].url,
                            medium: track.album.images[1].url,
                            small: track.album.images[2].url
                        },
                        uri: track.uri
                    })
                }))
            })
    }, [spotify])

    return (
        <div className={styles.list}>
            {
                favoritedSongs.map((item) => <Item key={item.id} {...item} />)
            }
        </div>
    );
}

export default SongsPage;