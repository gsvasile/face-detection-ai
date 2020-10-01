import React from 'react';
import styled from 'styled-components';

export default ({ onRouteChange, isSignedIn }) => {
    if (isSignedIn) {
        return (
            <Navigation>
                <NavLink onClick={() => onRouteChange('signout')}>{'Sign out'}</NavLink>
            </Navigation>
        );
    } else {
        return (
            <Navigation>
                <NavLink onClick={() => onRouteChange('signin')}>{'Sign In'}</NavLink>
                <NavLink onClick={() => onRouteChange('register')}>{'Register'}</NavLink>
            </Navigation>
        );
    }
}

const Navigation = styled.nav.attrs({
    className: 'flex ju'
})`
    display: flex;
    justify-content: flex-end;
`;

const NavLink = styled.p.attrs({
    className: 'f3 link dim black underline pa3 pointer'
})``;