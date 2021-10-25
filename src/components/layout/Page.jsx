
import Radium from 'radium';
import useStyles from './../../hooks/useStyles';

const Page = (props) => {
    const styles = useStyles()

    return (
        <div style={[
            {
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                ...styles
            },
            props.center && {
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