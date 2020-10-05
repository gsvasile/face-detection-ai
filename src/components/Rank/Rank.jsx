import React from 'react';
import styled from 'styled-components';

export default ({ userName, userEntries }) =>
    <Rank>
        <UserGreet>{`${userName}!!!!!! Your rank is...`}</UserGreet>
        <RankNumber>{`#${userEntries}`}</RankNumber>
    </Rank>;

const Rank = styled.div.attrs({
    className: '',
})``;

const UserGreet = styled.div.attrs({
    className: 'white f3',
})``;

const RankNumber = styled.div.attrs({
    className: 'white f1',
})``;
