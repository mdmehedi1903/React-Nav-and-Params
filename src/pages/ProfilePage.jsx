import React from 'react';
import {useParams} from 'react-router-dom';

const ProfilePage = () => {
    let {youtubeID, facebookID} = useParams();
    return (
        <div>
                        <h1>Profile Page</h1>
                        <p>Youtube: {youtubeID}</p>
                        <p>Facebook: {facebookID}</p>

        </div>
    );
};

export default ProfilePage;