import React from 'react';
import styled from 'styled-components';

export default ({ inputImage, box }) => {
    return (
        <FaceRecognition>
            <ImageContainer>
                <Image id='inputImage' alt='' src={inputImage} width='500px' height='auto' />
                <FaceBox style={{ top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol }}></FaceBox>
            </ImageContainer>
        </FaceRecognition>
    );
};

const FaceRecognition = styled.div.attrs({
    className: 'center ma',
})``;

const ImageContainer = styled.div.attrs({
    className: 'absolute mt2'
})``;

const FaceBox = styled.div.attrs({
    className: 'absolute center flex-wrap pointer'
})`
    box-shadow: 0 0 0 3px #149df2 inset;
`;

const Image = styled.img.attrs({
    className: '',
})``;
