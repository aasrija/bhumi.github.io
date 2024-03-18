import React from 'react';
import './Home.css';
import image1 from '/Users/aasrija/Documents/School/Projects/bhumi_gallery/bhumi/bhumi-web/src/images/bhumi_1.png';


function Home() {
    return (

        <div className='HomePic'>
            Welcome to Bhumi's Page!
        <img src={image1} alt='' />

        <p>This page is dedicated to my little baby cat Bhumi. A diary filled with albums of her!</p>
        </div>
    )
}

export default Home;