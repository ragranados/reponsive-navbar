import React from 'react';

import './AvatarHorizontal.css';
import Image from '../ProfileImg/ProfileImg';

const AvatarHorizontal = props => (

    <div className="box row justify-arr">
        <div className = "img">
            <a href = "/"> <Image/> </a>
        </div>

        <div className="name column justify-center">
            <p>Raul Granados</p>
        </div>
    </div>
);

export default AvatarHorizontal;