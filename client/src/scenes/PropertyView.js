import React from 'react';
import LoggedInComponent from '../components/LoggedInComponent/LoggedInComponent';
import Navbar from '../components/Navbar/Navbar';
import SignUpModal from '../components/SignUp/SignUpModal';

import { connect } from 'react-redux';
import SignInModal from "../components/SignIn/SignInModal";

const styles = {
    image: {
        minHeight: 100 + 'vh',
        display: 'absolute',
        alignItems: 'center',
        zIndex: 0,
        justifyContent: 'center',
        backgroundSize: 'cover',

    },
    container: {
        fontFamily: 'myriad-arabic',
        overflow: 'auto',
        height: 'auto',
        padding: '.5rem',
        marginBottom: '10%',
        width: '100%',
    },
    content: {
        flexDirection: 'row',
        display: 'flex',
        width: '100'+'%',
        flex: 1,
    },
    thumnails: {
        width: '50%',
    },
    map: {
        width: '50%',
    }

}
function PropertyView() {

    return (
        <div style={styles.container}>
            <div style={styles.image}>
                <div className="container-fluid" style={styles.content}>
                    <div className="col-sm-7">
                    <h3> Find your new place </h3>
                        <h3> Find your new place </h3>

                    </div>
                    <div  className="col-sm-5">
                        <h3 style={{color: '#000000'}}> Find your new place </h3>
                        <h3> Find your new place </h3>

                    </div>
                </div>
            </div>
        </div>
    );

}


export default LoggedInComponent(PropertyView);
