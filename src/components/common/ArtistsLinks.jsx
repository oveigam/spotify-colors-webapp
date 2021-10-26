import { useHistory } from 'react-router';
import styles from '../../styles/Items.module.scss'

const ArtistsLinks = ({ artists, style }) => {
    const history = useHistory()

    return (
        <div className={styles.artistsLinks} style={style}>
            {
                artists.map((artist, i) => (
                    <span key={artist.id} >
                        <span className={styles.name} onClick={() => history.push(`/artists/${artist.id}`)} >{artist.name}</span>
                        {i !== artists.length - 1 && <span>,&nbsp;</span>}
                    </span>
                ))
            }
        </div>
    );
}

export default ArtistsLinks;