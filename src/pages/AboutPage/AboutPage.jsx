import React, {useEffect} from 'react';
import {useMetatags} from "../../hooks/useMetatags.js";

const AboutPage = () => {
    useMetatags('About us Page title is here', 'About us page descriptions metatag changing')
    return (
        <div>
            About Page
        </div>
    );
};

export default AboutPage;