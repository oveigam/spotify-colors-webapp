import { useEffect } from 'react';
import { useState } from 'react';
import useSpotify from './../hooks/useSpotify';
import styles from '../styles/Items.module.scss'
import Item from './../components/common/Item';

const ArtistsPage = () => {
    const spotify = useSpotify()

    const [favoritedArtists, setFavoritedArtists] = useState([])

    useEffect(() => {
        spotify.getFollowedArtists({ limit: 50 })
            .then(data => {
                // TODO loadMore (recupera maximo 50), el objeto respuesta body.artists viene un cursor que se puede enviar en la siguiente request, 
                // guardarle en una ref y usar la posicion del scroll para cargar mas
                const { items } = data.body.artists
                setFavoritedArtists(items.map((artist) => {
                    return ({
                        id: artist.id,
                        name: artist.name,
                        images: {
                            large: artist.images[0].url,
                            medium: artist.images[1].url,
                            small: artist.images[2].url
                        },
                        uri: artist.uri,
                        genres: artist.genres.join(', '),
                        followers: Number(artist.followers.total).toLocaleString()
                    })
                }))
            })
    }, [spotify])

    return (
        <div className={styles.list}>
            {
                favoritedArtists.map((item) => <Item key={item.id} {...item} />)
            }
        </div>
    );
}

export default ArtistsPage;