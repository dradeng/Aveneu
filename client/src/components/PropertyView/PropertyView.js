import React from 'react';
import Map from '../Map/Map';
import {withRouter} from 'react-router';

const styles = {
    mainContent: {
        width: '100%',
        display: 'flex',
        color: 'rgb(72, 72, 72) !important',
        padding: '25px 0 0 0',

    },
    rightContent: {
        display: 'flex',
        flexWrap: 'wrap',
        width: '45%', // margin: 0 0 0 80px;
    },
    leftContent: {
        height: '100%',
        display: 'flex',
        justifyContent: 'flex-end',
        flexWrap: 'wrap',
        width: '55%',
    },
    photoContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        height: '50vh',
    },
    reviewsContainer: {
        width: '65%',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent:'center',
        borderBottom: '1px solid #EBEBEB',
    },
    amenitiesContainer: {
        width: '65%',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        borderBottom: '1px solid #EBEBEB',
        margin: '0 0 24px 0'

},
    photo: {
        maxWidth: '100%',
        flexShrink: 0,
        minWidth: '100%',
        minHeight: '100%',
    },
    details: {
        display: 'block',
        width: '65%',
    },
    map: {
        display: 'block',
        width: '65%',
    },
    headlineInfo: {
        display: 'flex',
    },
    cityInfo: {
        width: '85%',

    },


}
class PropertyView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            num_guests: 1,
            check_in_date: "",
            check_out_date: ""
        };
    }

    componentDidMount() {
      //  this.props.fetchHome(this.props.homeId);
        // this.props.fetchReservation(this.props.homeId);
    }



    render() {
       // if (!this.props.home) return null;
       // let { home, homeId, fetchHome } = this.props;

        return (
            <div style={{height: '100vh',
                overflow: 'auto',}}>
                <div style={styles.photoContainer}>
                    <img style={styles.photo} src={"https://i.ytimg.com/vi/9-dIdFXeFhs/maxresdefault.jpg"}/>
                </div>
                <div style={styles.mainContent}>
                    <div style={styles.leftContent}>
                        <div style={styles.details}>
                            <div style={styles.headlineInfo}>
                                <div style={styles.cityInfo}>
                                    <div style={{fontSize: 30, fontWeight: 600, paddingBottom: 8,}}>
                                        Jacob's home
                                    </div>
                                    <div className="home-show-city">
                                        Cincinnati
                                    </div>
                                </div>
                                <div className="host-photo-container">
                                    <div className="host-photo">

                                    </div>
                                </div>
                            </div>
                            <div style={{display: 'flex',padding: 0}}>
                                <div style={{padding: '10px 8px 20px 0'}}>
                                    <span><i className="fas fa-users fa-xs"></i></span>
                                    <span> 2 guests</span>
                                </div>
                                <div  style={{padding: '10px 8px 20px 0'}}>
                                    <span><i className="fas fa-door-open fa-xs"></i></span>
                                    <span>2 rooms</span>
                                </div>
                                <div  style={{padding: '10px 8px 20px 0'}}>
                                    <span><i className="fas fa-bed fa-xs"></i></span>
                                    <span>2 beds</span>
                                </div>
                                <div  style={{padding: '10px 8px 20px 0'}}>
                                    <span><i className="fas fa-bath fa-xs"></i></span>
                                    <span>2 baths</span>
                                </div>
                            </div>
                            <div className="home-show-description">
                                <div className="text">
                                    Cool spot
                                </div>
                                <div className="read-more">
                                    <span>Read more about the space </span>
                                    &nbsp;
                                    <i className="fas fa-angle-down"></i>
                                </div>
                                <div className="contact-host">
                                    <span>Contact host</span>
                                </div>
                            </div>
                        </div>
                        <div style={styles.amenitiesContainer}>
                            <div className="label-container">
                                <div>
                                    <span>Amenities</span>
                                </div>
                            </div>
                            <div className="amenities">
                                <ul>
                                    <div className="list-container">
                                        <div className="icon-container">
                                            <i className="fas fa-wifi fa-xs"></i>
                                        </div>
                                        <li>Wifi</li>
                                    </div>
                                    <div className="list-container">
                                        <div className="icon-container">
                                            <i className="fas fa-utensils fa-xs"></i>
                                        </div>
                                        <li>Kitchen</li>
                                    </div>
                                    <div className="list-container">
                                        <div className="icon-container">
                                            <i className="fas fa-tshirt fa-xs"></i>
                                        </div>
                                        <li>Washer</li>
                                    </div>
                                </ul>
                            </div>
                            <div className="amenities">
                                <ul>
                                    <div className="list-container">
                                        <div className="icon-container">
                                            <i className="fas fa-car fa-xs"></i>
                                        </div>
                                        <li>Parking</li>
                                    </div>
                                    <div className="list-container">
                                        <div className="icon-container">
                                            <i className="fas fa-tv fa-xs"></i>
                                        </div>
                                        <li>TV</li>
                                    </div>
                                    <div className="list-container">
                                        <div className="icon-container">
                                            <i className="fas fa-thermometer-half fa-xs"></i>
                                        </div>
                                        <li>Heating</li>
                                    </div>
                                </ul>
                            </div>
                        </div>
                        <div style={styles.reviewsContainer}>
                            <div className="review-button-container">
                            </div>
                        </div>
                        <div style={styles.map}>
                            <Map styles={{height: '40vh',display: 'flex'}}
                            />
                        </div>
                    </div>
                    <div style={styles.rightContent}>
                        <div className="reservation-container">
                            <div className="price-container">
                                <div className="price">
                                    <div className="value">
                                        $1000
                                    </div>
                                    <div className="word">
                                        &nbsp; per night
                                    </div>
                                </div>
                                <div className="stars">
                                    <i className="fas fa-star fa-xs"></i>
                                    <i className="fas fa-star fa-xs"></i>
                                    <i className="fas fa-star fa-xs"></i>
                                    <i className="fas fa-star fa-xs"></i>
                                    <i className="fas fa-star fa-xs"></i>
                                    <div className="review-count">
                                        &nbsp; 217
                                    </div>
                                </div>
                            </div>
                            <form >
                                <div className="date-container">
                                    <div className="date-label">
                                        <div>
                                            <span>Dates</span>
                                        </div>
                                    </div>
                                    <div className="calendar-input">
                                        <input type="date" />
                                        <input type="date" />
                                    </div>
                                </div>
                                <div className="guest-container">
                                    <div className="guest-label">
                                        <div>
                                            <span>Guests</span>
                                        </div>
                                    </div>
                                    <div className="guest-input">
                                        <select >
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                            <option>6</option>
                                            <option>7</option>
                                            <option>8</option>
                                            <option>9</option>
                                            <option>10</option>
                                            <option>11</option>
                                            <option>12</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="button-container">
                                    <button type="submit">Book</button>
                                </div>
                            </form>
                            <div className="additional-info">
                                <span className="notice">You won't be charged yet</span>
                                <span className="disclaimer-1">This home is on people’s minds.</span>
                                <span className="disclaimer-2">It’s been viewed 500+ times in the past week.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PropertyView;