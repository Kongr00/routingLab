import React, {useEffect} from 'react';
import {useMetatags} from "../../hooks/useMetatags.js";

const HomePage = () => {

    useMetatags('Home Page title is here', 'Home page descriptions metatag changing')

    return (
        <div>
            Home page
        </div>
    );
};

export default HomePage;