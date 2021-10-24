
import Radium from 'radium';
import useStyles from './../../hooks/useStyles';

const Page = (props) => {
    const styles = useStyles()

    return (
        <div style={[
            {
                minHeight: '100vh',
                ...styles
            },
            props.center && {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            },
            props.overflow && { overflow: 'hidden' }
        ]}>
            {props.children}
        </div>
    );
}

export default Radium(Page);