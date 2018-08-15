import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import ReactModal from 'react-modal';
ReactModal.defaultStyles.content.width = 400;
ReactModal.defaultStyles.content.height = 500;
ReactModal.defaultStyles.content.top = '50%';
ReactModal.defaultStyles.content.left= '50%';
ReactModal.defaultStyles.content.transform ='translate(-50%, -50%)';
ReactModal.defaultStyles.content.top = '50%';


/*
const propTypes = {
    signIn: PropTypes.func.isRequired,
    // forgotPassword: PropTypes.func.isRequired,
};
*/
const mapDispatchToProps = dispatch => ({
    onHideSignIn: () =>
        dispatch({ type: 'CLOSE_SIGNIN_MODAL'}),

});

const styles = {
    container: {
        flex: 1,
    },
    label: {
        fontFamily: 'Proxima Nova',
        color: '#424747',
        fontSize: 1 + 'em',
        paddingTop: 10,
    },
    input: {
        width: '90%',
        // flexBasis: 30 + 'px',
        paddingLeft: 1 + 'em',
        marginBottom: '.5em',
        borderRadius: 2,
    },
    halfinput: {
        width: '42.5%',
        // flexBasis: 30 + 'px',
        paddingLeft: 1 + 'em',
        marginBottom: '.5em',
        borderRadius: 2,
    },
    button: {
        width: '90%',
        paddingLeft: 1 + 'em',
        borderRadius: 2,
        marginBottom: '.5em',
        color: 'white',
        backgroundColor: 'black',
    },
    showEmptyFieldMessage: {
        fontFamily: 'Proxima Nova',
        color: '#FF5C49',
        fontSize: 1.2 + 'em',
        padding: 5,
    },
    formItem: {
        position: 'relative',
        width: 100 + '%',
        flexDirection: 'row',
        justifyContent: 'center',
        display: 'flex',

    },
    icon: {
        position: 'absolute',
        top: 12,
        left: 20,
        width: 30,
        height: 30,
    },
};

class SignInModal extends React.Component {
    constructor(props) {
        super(props);

        // Bindings
        this.handleInputChange = this.handleInputChange.bind(this);
        this.signIn  = () => this.props.onHideSignIn();

        // Initial state
        this.state = {
            email: '',
            password: '',
            firstname: '',
            lastname: '',
            open: false,
            showEmptyFieldMessage: false,
        };
    }

    signIn(submitEvent = null, dispatch) {
        console.log('hello');

    }
    componentWillMount() {
        ReactModal.setAppElement('body');
    }
    handleInputChange(event) {
        const { name, value } = event.target;

        this.setState({
            [name]: value,
        });
    }

    render() {
        console.log(this.props);
        return (
            <ReactModal isOpen={this.props.showModal} style={styles.container} >
                <div >
                <h2 style={{textAlign: 'center', width: '100%',marginBottom: '10%'}}>
                    Welcome back
                </h2>
                </div>
                <div style={styles.formItem}>
                    <input
                        type="email"
                        name="email"
                        className="form-control"

                        placeholder="name@email.com"
                        style={styles.input}
                        value={this.state.email}
                        onChange={this.handleInputChange}
                    />
                </div>
                <div style={styles.formItem}>
                    <input
                        type="password"
                        name="password"
                        className="form-control"
                        placeholder="********"
                        style={styles.input}
                        value={this.state.password}
                        onChange={this.handleInputChange}
                    />
                </div>
                <div>
                    {this.state.showEmptyFieldMessage && (
                        <span style={styles.showEmptyFieldMessage}>
							Please fill in empty fields
						</span>
                    )}
                </div>
                <div style={styles.formItem}>
                    <button
                        style={styles.button}
                        onClick={this.signIn}
                        className="form-control"
                    >
                        {' '}
                        Sign In{' '}
                    </button>
                </div>

            </ReactModal>
        );
    }
}

//SignIn.propTypes = propTypes;
const mapStateToProps = state => {
    return {
        showSignIn: state.appStatus.showSignIn,
    };
};
export default connect(mapStateToProps,mapDispatchToProps)(SignInModal);
