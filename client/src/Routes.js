import React from 'react';

import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';

import { connect } from 'react-redux';
import Home from './scenes/Home';

const styles = {
    container: {
        height: 100 + '%',
        backgroundColor: '#f8f8f8',
        display: 'flex',
        alignItems: 'stretch',
    },
    mainContainer: {
        flex: 9,
        display: 'flex',
        flexDirection: 'row',
        width: 100 + '%',
    },
    pageContainer: {
        flex: 13,
    },
    navBar: {
        flex: 1,
    },
};

class Routes extends React.Component {
    componentWillMount() {
        //this.props.isLoggedIn(); @TODO: draden
       // this.redirect = this.redirect.bind(this);  @TODO: will redirect
    }
    /* todo: implement
    redirect(location) {
    }
    */

    render() {
        return (
            <Router>
                <div>
                    <Route path="/" exact component={Home} />
                    <Route path="/sublet/:id/" exact component={Home} />
                    <Route exact path="/login" component={Home} />
                </div>
            </Router>
        );
    }
}

const mapStateToProps = state => {
    return {
        loaded: state.loaded,
        loggedIn: state.loggedIn,
        buildingSelected: state.buildingSelected,
    };
};
/*
const mapDispatchToProps = {
    isLoggedIn, @TODO: Draden wire this baby up, provide a method to determine if a user is logged in
};
*/
export default connect(mapStateToProps, {})(Routes);
