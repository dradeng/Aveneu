import React from 'react';
import { withRouter } from 'react-router';

const styles = {
    container: {
        width: '45%',
        height: 'auto',
        margin: '10px',
        backgroundColor: 'white',
        boxShadow:'0 3px 6px 0 rgba(0, 0, 0, 0.16)',
        cursor: 'pointer',
    },
    photoContainer: {
        width: '100%',
        borderRadius: '4px',
    },
    photo: {
        maxWidth:'100%',
        height: 'auto',
    },
    details: {
        display: 'block',
        color: 'rgb(72, 72, 72) !important',
        padding: 10,
    },
    rooms: {
        color: 'rgb(72, 72, 72) !important',
        fontSize: '12px',
        letterSpacing: 'normal !important',

    },
    name: {
        fontSize: '16px !important',
        lineHeight: '22px !important',
        letterSpacing: 'normal !important',
        fontWeight: '800 !important',

        margin: '0 0 3px 0',
    },
    price: {
        fontSize: '14px !important',
        lineHeight: '18px !important',
        letterSpacing: 'normal !important',
        margin: '0 0 5px 0',

    }
}
class PropertyThumbnail extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let { home } = this.props;

        return (
            <div style={styles.container} >
                <div style={styles.photoContainer}>
                   <img style={styles.photo} src="https://i.ytimg.com/vi/9-dIdFXeFhs/maxresdefault.jpg"/>
                </div>
                <div style={styles.details}>
                    <div  style={styles.rooms}>
                        1 ROOMS
                    </div>
                    <div style={styles.name}>
                        <h1>Jacob </h1>
                    </div>
                    <div style={styles.price}>
                        $10 per night
                    </div>

                </div>
            </div>
        );
    }
}

export default PropertyThumbnail;