import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';
import MarkerManager from '../../util/marker_manger';
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";

const MapWrapper = ReactMapboxGl({
    accessToken: "pk.eyJ1IjoiamV5b3VuZzciLCJhIjoiY2psOWtuaWx6MXBkbTNycWthMmxnOW0xMiJ9.M9PIOVFgxrcS_mVJ3mo7jw"
});
class Map extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        // this.props.show == "true" ? this.props.fetchHome(this.props.homeId) : this.props.fetchHomes();


    }

    componentWillReceiveProps() {
        this.props.homes.forEach(this.addHome);
    }

    componentDidUpdate() {
        this.MarkerManager.updateMarkers(this.props.homes);
    }




    render() {

        return (
            <div className="map-top-container">
                <MapWrapper
                    style="mapbox://styles/mapbox/streets-v9"
                    containerStyle={{
                        height: "100vh",
                        width: "100vw",
                        marginTop: '-15px',

                    }}>
                    <Layer
                        type="symbol"
                        id="marker"
                        layout={{ "icon-image": "marker-15" }}>
                        <Feature coordinates={[-0.481747846041145, 51.3233379650232]}/>
                    </Layer>
                </MapWrapper>
            </div>
        );
    }
}

export default withRouter(Map);