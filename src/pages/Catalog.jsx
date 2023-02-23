import React from 'react';
import CatalogTags from "../components/Catalog/CatalogTags";
import CatalogPostsSection from "../components/Catalog/CatalogPostsSection";

const Catalog = () => {
    return (
        <div className='catalog'>
            <CatalogTags/>
            <CatalogPostsSection/>
        </div>
    );
};

export default Catalog;