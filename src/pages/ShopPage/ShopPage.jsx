import React, {useEffect} from 'react';
import {useMetatags} from "../../hooks/useMetatags.js";

const ShopPage = () => {
    useMetatags('Shop Page title is here', 'Shop page descriptions metatag changing')
    return (
        <div>
            Shop Page
        </div>
    );
};

export default ShopPage;