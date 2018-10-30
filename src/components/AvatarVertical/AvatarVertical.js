import React from 'react';

import './AvatarVertical.css';
import Image from '../ProfileImg/ProfileImg';

const AvatarVertical = props => (

    <div className="box-vertical">
        <div className="img row justify-center">
            <Image />
        </div>

        <div className="name column justify-center">
            <p>Raul Granados</p>
        </div>
    </div>
);

export default AvatarVertical;