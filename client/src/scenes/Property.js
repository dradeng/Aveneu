import React from 'react';
import LoggedInComponent from '../components/LoggedInComponent/LoggedInComponent';
import PropertyView from '../components/PropertyView/PropertyView';
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
        backgroundColor:'#f7f7f7',
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
    },
    searchHeader: {
        backgroundColor: '#FFFFFF',
        width: '100%',
        top: 0,
        padding: 5,
    },

}
function Property() {

    return (
        <div  style={styles.container}>
            <PropertyView/>
        </div>
    );

}


export default LoggedInComponent(Property);
