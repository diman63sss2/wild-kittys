import React from 'react';
import CatalogTags from "../components/catalog/CatalogTags";
import CatalogPostsSection from "../components/catalog/CatalogPostsSection";

const Catalog = () => {
    return (
        <div className='catalog'>
            <CatalogTags/>
            <CatalogPostsSection/>
        </div>
    );
};

export default Catalog;