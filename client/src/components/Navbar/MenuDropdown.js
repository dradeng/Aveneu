import React from 'react';
import MenuDropdownItem from './MenuDropdownItem';


// @NOTE: we are re-using the NavItem component here with a few css overrides in MenuBar.css
// @TODO: signout icon is missing yet
// @TODO: /signout is no working scene yet

const styles = {
    container: {
        position: 'absolute',
        width: '20%',
        zIndex: 150,
        right: 10,
    },
    roundedContainer: {
        background: 'white',
        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 3px 146px 30px',
        borderRadius: 5,
        position: 'relative',
    },
    arrow: {
        position: 'absolute',
        top: -10,
        right: 20,
    },
};

const MenuBarItems = [
    {
        name: 'Personal settings',
        icon: 'SETTINGS',
        path: '/settings',
        key: 'settings_nav_item',
    },
    {
        name: 'Sign out',
        icon: 'SIGN_OUT',
        path: '/login',
        key: 'signout_nav_item',
    },
];

const defaultProps = {
    style: {},
};

function MenuBarDropdown({ style, signOut }) {
    return (
        <div style={styles.container} className="Menu-Bar-Dropdown">
            <div style={styles.roundedContainer}>
                <i style={styles.arrow} className="Arrow-Up" />
                <MenuDropdownItem
                    key={MenuBarItems[0].name}
                    menuItem={MenuBarItems[0]}
                />
                <MenuDropdownItem
                    key={MenuBarItems[1].name}
                    menuItem={MenuBarItems[1]}
                    onClick={() => signOut()}
                />
            </div>
        </div>
    );
}

MenuBarDropdown.defaultProps = defaultProps;

/*
const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = {
    signOut,
};
*/

//export default connect(mapStateToProps, mapDispatchToProps)(MenuBarDropdown);
export default  MenuBarDropdown;
