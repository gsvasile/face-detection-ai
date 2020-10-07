import React from 'react';
import styled from 'styled-components';

export default ({ onRouteChange, signIn, loadUser }) => {

    const [signInEmail, setSignInEmail] = React.useState('');
    const [signInPassword, setSignInPassword] = React.useState('');
    const [name, setName] = React.useState('');


    const signInAPICall = () => {
        fetch('http://localhost:3001/signin', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: signInEmail,
                password: signInPassword
            })
        })
            .then(response => response.json())
            .then(user => {
                if (user.id) {
                    loadUser(user);
                    onRouteChange('home');
                }
            });
    }

    const registerAPICall = () => {
        fetch('http://localhost:3001/register', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: signInEmail,
                password: signInPassword,
                name: name
            })
        })
            .then(response => response.json())
            .then(user => {
                if (user.id) {
                    loadUser(user);
                    onRouteChange('home');
                }
            });
    }

    const onEmailchange = (event) => {
        setSignInEmail(event.target.value);
    }

    const onPasswordChange = (event) => {
        setSignInPassword(event.target.value);
    }

    const onNameChange = (event) => {
        setName(event.target.value);
    }

    const onSubmitSignIn = () => {
        signIn ? signInAPICall() : registerAPICall();
    };

    return (
        <FormContainer>
            <FormWrapper>
                <Form>
                    <FieldSet id={signIn ? 'sign_up' : 'register'}>
                        <FieldHeader>{signIn ? 'Sign In' : 'Register'}</FieldHeader>
                        {!signIn
                            ?
                            <TopInputContainer>
                                <FieldInputLabel htmlFor='name'>{'Name'}</FieldInputLabel>
                                <FieldInput
                                    onChange={onNameChange}
                                    type='text'
                                    name='name'
                                    id='name'
                                />
                            </TopInputContainer>
                            :
                            <span />
                        }
                        <TopInputContainer>
                            <FieldInputLabel htmlFor='email-address'>{'Email'}</FieldInputLabel>
                            <FieldInput
                                onChange={onEmailchange}
                                type='email'
                                name='email-address'
                                id='email-address'
                            />
                        </TopInputContainer>
                        <PasswordInputContainer>
                            <FieldInputLabel htmlFor='password'>{'Password'}</FieldInputLabel>
                            <FieldInput
                                onChange={onPasswordChange}
                                type='password'
                                name='password'
                                id='password'
                            />
                        </PasswordInputContainer>
                    </FieldSet>
                    <SubmitInputContainer>
                        <SubmitInput
                            type='submit'
                            value={signIn ? 'Sign in' : 'Register'}
                            onClick={onSubmitSignIn}
                        />
                    </SubmitInputContainer>
                    {signIn
                        ?
                        <RegisterLinkContainer>
                            <RegisterRoute onClick={() => onRouteChange('register')}>{'Register'}</RegisterRoute>
                        </RegisterLinkContainer>
                        :
                        <span />
                    }
                </Form>
            </FormWrapper>
        </FormContainer>
    );
};

const FormContainer = styled.article.attrs({
    className: 'br-pill ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-3 center bg-black-10'
})``;

const FormWrapper = styled.main.attrs({
    className: 'pa4 black-80'
})``;

const Form = styled.div.attrs({
    className: 'measure'
})``;

const FieldSet = styled.fieldset.attrs({
    className: 'ba b--transparent ph0 mh0'
})``;

const FieldHeader = styled.legend.attrs({
    className: 'f1 fw6 ph0 mh0'
})``;

const TopInputContainer = styled.div.attrs({
    className: 'mt3'
})``;

const PasswordInputContainer = styled.div.attrs({
    className: 'mv3'
})``;

const FieldInputLabel = styled.label.attrs({
    className: 'db fw6 lh-copy f6'
})``;

const FieldInput = styled.input.attrs({
    className: 'pa2 input-reset ba b--black bg-transparent hover-bg-black hover-white w-100'
})``;

const SubmitInputContainer = styled.div.attrs({
    className: ''
})``;

const SubmitInput = styled.input.attrs({
    className: 'b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib'
})``;

const RegisterLinkContainer = styled.div.attrs({
    className: 'lh-copy mt3'
})``;

const RegisterRoute = styled.div.attrs({
    className: 'f6 link dim black db pointer'
})``;


