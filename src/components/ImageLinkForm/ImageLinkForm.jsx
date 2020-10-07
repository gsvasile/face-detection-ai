import React from 'react'
import styled from 'styled-components'

export default ({ onInputChange, onButtonSubmit }) => {
    return (
        <ImageLinkForm>
            <FormHeader>
                {
                    'This Magic Brain will detect faces in your pictures. Give it a try!'
                }
            </FormHeader>
            <FormWrapper>
                <FormBox>
                    <Input type="tex" onChange={onInputChange} />
                    <DetectButton onClick={onButtonSubmit}>
                        {'Detect'}
                    </DetectButton>
                </FormBox>
            </FormWrapper>
        </ImageLinkForm>
    )
}

const ImageLinkForm = styled.div.attrs({
    className: '',
})``

const FormHeader = styled.p.attrs({
    className: 'f3',
})``

const FormWrapper = styled.div.attrs({
    className: 'center',
})``

const FormBox = styled.div.attrs({
    className: 'center pa4 br3 shadow-5',
})`
    width: 700px;
    background: radial-gradient(circle farthest-side at 0% 50%, #fb1 23.5%, rgba(240, 166, 17, 0) 0 ) 21px 30px,
        radial-gradient(circle farthest-side at 0% 50%, #b71 24%, rgba(240, 166, 17, 0) 0 ) 19px 30px,
        linear-gradient( #fb1 14%, rgba(240, 166, 17, 0) 0, rgba(240, 166, 17, 0) 85%, #fb1 0 ) 0 0,
        linear-gradient(150deg, #fb1 24%, #b71 0, #b71 26%, rgba(240, 166, 17, 0) 0, rgba(240, 166, 17, 0) 74%, #b71 0, #b71 76%, #fb1 0) 0 0,
        linear-gradient(30deg, #fb1 24%, #b71 0, #b71 26%, rgba(240, 166, 17, 0) 0, rgba(240, 166, 17, 0) 74%, #b71 0, #b71 76%, #fb1 0 ) 0 0,
        linear-gradient(90deg, #b71 2%, #fb1 0, #fb1 98%, #b71 0%) 0 0 #fb1;
    background-size: 40px 60px;
`;

const Input = styled.input.attrs({
    className: 'f4 pa2 w-70 center',
})``

const DetectButton = styled.button.attrs({
    className: 'w-30 grow f4 link ph3 pv2 dib white bg-light-purple',
})``
