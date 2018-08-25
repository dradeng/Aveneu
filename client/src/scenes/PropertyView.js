import React from 'react';
import LoggedInComponent from '../components/LoggedInComponent/LoggedInComponent';
import Navbar from '../components/Navbar/Navbar';
import SignUpModal from '../components/SignUp/SignUpModal';
import SplitSearch from '../components/Search/SplitSearch';
import { connect } from 'react-redux';
import SignInModal from "../components/SignIn/SignInModal";

const styles = {
    image: {
        minHeight: 100 + 'vh',
        display: 'absolute',
        alignItems: 'center',
        zIndex: 0,
        overflowX: 'hidden',


    },
    container: {
        fontFamily: 'myriad-arabic',
        overflowX: 'hidden',
        overflowY: 'hidden',
        minHeight: 100 + 'vh',
        height: 'auto',
        padding: '.5rem',
        marginBottom: '10%',
        width: '100%',
    },
    content: {
        flexDirection: 'row',
        display: 'flex',
        width: '100'+'%',
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
                <div className="container-fluid" style={styles.content}>
                    <div  className="col-sm-5">

                    <h3> Find your new place </h3>

                    </div>
                    <div  className="col-sm-5">

                    </div>
                </div>
            <SplitSearch/>


        </div>
    );

}


export default LoggedInComponent(PropertyView);
