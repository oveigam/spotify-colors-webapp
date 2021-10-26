
import { useEffect } from 'react';
import { useState } from 'react';
import useSpotify from './../hooks/useSpotify';
import styles from '../styles/Items.module.scss'
import Item from './../components/common/Item';

const AlbumsPage = () => {
    const spotify = useSpotify()

    const [favoriteAlbums, setFavoriteAlbums] = useState([])

    useEffect(() => {
        spotify.getMySavedAlbums()
            .then(data => {
                const items = data.body.items
                setFavoriteAlbums(items.map(({ album }) => {
                    return ({
                        id: album.id,
                        name: album.name,
                        type: album.album_type,
                        artists: album.artists.map(artist => ({
                            id: artist.id,
                            name: artist.name,
                            uri: artist.uri
                        })),
                        images: {
                            large: album.images[0].url,
                            medium: album.images[1].url,
                            small: album.images[2].url
                        },
                        uri: album.uri
                    })
                }))
            })
    }, [spotify])

    return (
        <div className={styles.list}>
            {
                favoriteAlbums.map((item) => <Item key={item.id} {...item} />)
            }
        </div>
    );
}

export default AlbumsPage;