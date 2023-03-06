import React from 'react';
import CatalogFilters from "./CatalogFilters";
import CatalogList from "./CatalogList/CatalogList";

const CatalogPostsSection = () => {
    return (
        <div className='catalog__posts__section'>
            <CatalogFilters/>
            <CatalogList/>
        </div>
    );
};

export default CatalogPostsSection;