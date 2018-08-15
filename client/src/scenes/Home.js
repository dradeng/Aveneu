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
        background: 'linear-gradient(rgba(255,255,255,0.3), rgba(255,255,255,0.3)), url(' + "https://i.redditmedia.com/9SxNVBakOD2zr4lRgfr1W3HZdPqiyaDjguUaCTVnPv4.jpg?s=20b4dd42c639281940522560d4b70067" + ') no-repeat center center'
    },
    container: {

    },
    content: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: '50%',
        transform: 'translate(-50%, -50%)',
    },

}
class Home extends React.Component {
    constructor(props) {
        super(props);
    }


    closeConfirmation() {
        this.setState({
            view: 'SignIn',
            confirmationClosed: true,
        });
    }


    render() {

        return (
            <div style={styles.container}>
                <div style={styles.image}>
                    <SignUpModal showModal={this.props.showSignUp}/>
                    <SignInModal showModal={this.props.showSignIn}/>
                    <Navbar />
                    <div style={styles.contetParent}>
                <div style={styles.content}>
                        <h3 style={{color: '#ffffff'}}> Find your new place </h3>

                        <input type="text" className="form-control" placeholder="Search for."/>

                </div>
                </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        firstLogin: state.appStatus.firstLogin,
        signUpSuccess: state.appStatus.signUpSuccess,
        passwordLink: state.appStatus.passwordLink,
        showSignUp: state.appStatus.showSignUp,
        showSignIn: state.appStatus.showSignIn,
    };
};

export default connect(mapStateToProps, {})(Home);
