import React from 'react';
import styled from 'styled-components';

export default () => {
    return (
        <Rank>
            <UserGreet>{'G-FUNK!!!!!! You rank be...'}</UserGreet>
            <RankNumber>{'#5'}</RankNumber>
        </Rank>
    );
};

const Rank = styled.div.attrs({
    className: '',
})``;

const UserGreet = styled.div.attrs({
    className: 'white f3',
})``;

const RankNumber = styled.div.attrs({
    className: 'white f1',
})``;
