import React from 'react';
import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';


const propTypes = {
    statusBarItem: PropTypes.shape({
        name: PropTypes.string,
        icon: PropTypes.string,
        path: PropTypes.string,
        key: PropTypes.string,
    }).isRequired,
};

const styles = {
    container: {
        minWidth: 16 + 'em',
        display: 'flex',
        textDecoration: 'none',
        color: 'rgb(66, 71, 71)',
        fill: 'rgb(66, 71, 71)',
    },
    activeStyle: {
        color: '#0ebc78',
        fill: '#0ebc78',
    },
    icon: {
        display: 'inline-block',
    },
    label: {
        display: 'inline-block',
        minWidth: 12 + 'em',
        textAlign: 'right',
        lineHeight: 50 + 'px',
        fontSize: 20,
    },
};

function MenuDropdownItem({ menuItem, onClick }) {
    const { path, name, icon } = menuItem;

    return (
        <NavLink
            exact
            style={styles.container}
            activeStyle={styles.activeStyle}
            onClick={onClick}
            to={path}
        >
            <span style={styles.label}>{name}</span>
        </NavLink>
    );
}

MenuDropdownItem.propTypes = propTypes;

export default MenuDropdownItem;
