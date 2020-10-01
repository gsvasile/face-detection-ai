import React from 'react';
import styled from 'styled-components';
import Tilt from 'react-tilt';
import brain from './brain.png';

export default () =>
    <Logo>
        <TiltLocal options={{ max: 55 }} style={{ height: 150, width: 150 }} >
            <InnerTilt className="Tilt-inner">
                <LogoImg alt='brain' src={brain} />
            </InnerTilt>
        </TiltLocal>
    </Logo>

const Logo = styled.div.attrs({
    className: 'ma4 mt0'
})``;

const TiltLocal = styled(Tilt).attrs({
    className: 'Tilt br2 shadow-2'
})`
    background: linear-gradient(89deg, #2238ff 0%, #a9eaf1 100%);
`;

const InnerTilt = styled.div.attrs({
    className: 'Tilt-inner pa3'
})``

const LogoImg = styled.img`
    padding-top: 20px;
`;