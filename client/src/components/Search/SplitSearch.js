import React from 'react';
import PropertyThumbnail from '../PropertyThumbnail/PropertyThumbnail.js';
import Map from '../Map/Map.js';
const styles = {
    leftHalf: {
        width: '50 %',
        height: '100vh',
        overflow: 'auto',
        },
    rightHalf: {
        float: 'right',
        padding: '20px 0 0 0',
        height: '90%',
        width: '40%',
    },
    propertyContainer: {
        width: '100%',
        height: 'auto',
        display: 'flex',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
    },
    map: {
        width: '100%',
        height: '87vh',
    }

};

class SplitSearch extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        // if(this.props.homes === null) return (<div>Loading...</div>);

        return (
            <div style={{display: 'flex',
                padding: '0 13px 13px 13px'}}>
                <div style={styles.leftHalf}>
                    <div style={styles.propertyContainer}>
                    <PropertyThumbnail/>
                    <PropertyThumbnail/>
                        <PropertyThumbnail/>
                        <PropertyThumbnail/>
                        <PropertyThumbnail/>
                        <PropertyThumbnail/>
                        <PropertyThumbnail/>
                        <PropertyThumbnail/>
                    </div>

                </div>
                <div style={styles.rightHalf} >
                    <Map style={styles.map}/>
                </div>
            </div>
        );
    }

}

export default SplitSearch;