import React from 'react';
import cl from './ProfileMyProducts.module.css'
const GetVisible = (visible) => {
    if (visible==cl.nav) {
        visible=cl.nav__visible;
    }
    else{
        visible=cl.nav;
    }
    return visible;
};

export default GetVisible;