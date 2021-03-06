import React from 'react';
import styled from 'styled-components';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Form from './components/Form/Form';
import './App.css';


const particlesOptions = {
    particles: {
        number: {
            value: 150,
            density: {
                enable: true,
                value_area: 800,
            },
        },
        size: {
            value: 3,
        },
    },
    interactivity: {
        events: {
            onhover: {
                enable: true,
                mode: 'repulse',
            },
        },
    },
};

const resetUser = {
    id: '',
    name: '',
    email: '',
    entries: 0,
    joined: ''
};

export default () => {
    const [input, setInput] = React.useState('');
    const [imageUrl, setImageUrl] = React.useState('');
    const [box, setBox] = React.useState({});
    const [route, setRoute] = React.useState('signin');
    const [isSignedIn, setIsSignedIn] = React.useState(false);
    const [user, setUser] = React.useState(resetUser);

    const resetToInitialState = () => {
        setInput('');
        setImageUrl('');
        setBox({});
        setRoute('signin');
        setIsSignedIn(false);
        setUser(resetUser);
    }

    const loadUser = (data) => {
        setUser({
            id: data.id,
            name: data.name,
            email: data.email,
            entries: data.entries,
            joined: data.joined
        })
    }

    const calculateFaceLoctaion = (data) => {
        const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
        const image = document.getElementById('inputImage');
        const width = Number(image.width);
        const height = Number(image.height);
        return {
            leftCol: clarifaiFace.left_col * width,
            topRow: clarifaiFace.top_row * height,
            rightCol: width - (clarifaiFace.right_col * width),
            bottomRow: height - (clarifaiFace.bottom_row * height)
        }
    }

    const displayFaceBox = (box) => {
        setBox(box);
    }

    const onInputChange = (event) => setInput(event.target.value);
    const onButtonSubmit = () => {
        setImageUrl(input);
        fetch('https://gentle-mesa-91050.herokuapp.com/imageurl', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                input: input,
            })
        })
            .then(response => response.json())
            .then(response => {
                if (response) {
                    fetch('https://gentle-mesa-91050.herokuapp.com/image', {
                        method: 'put',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            id: user.id,
                        })
                    })
                        .then(response => response.json())
                        .then(count => {
                            setUser(Object.assign(user, { entries: count }));
                            loadUser(user);
                        })
                        .catch(console.log);
                }
                displayFaceBox(calculateFaceLoctaion(response))
            })
            .catch(err => console.log(err))
    };

    const onRouteChange = (route) => {
        if (route === 'signout') {
            resetToInitialState();
        } else if (route === 'home') {
            setIsSignedIn(true);
        }
        setRoute(route);
    }

    return (
        <div className="App">
            <ParticlesContainer params={particlesOptions} />
            <Navigation onRouteChange={onRouteChange} isSignedIn={isSignedIn} />
            {route === 'home'
                ?
                <React.Fragment>
                    <Logo />
                    <Rank
                        userName={user.name}
                        userEntries={user.entries}
                    />
                    <ImageLinkForm
                        onInputChange={onInputChange}
                        onButtonSubmit={onButtonSubmit}
                    />
                    <FaceRecognition box={box} inputImage={imageUrl} />
                </React.Fragment>
                :
                <Form
                    onRouteChange={onRouteChange}
                    signIn={(route === 'signin') || (route === 'signout') ? true : false}
                    loadUser={loadUser}
                />
            }
        </div>
    );
}

const ParticlesContainer = styled(Particles).attrs({
    className: 'fixed cover',
})`
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
`;
