import React from 'react';
import CatalogTags from "../components/Catalog/CatalogTags";
import CatalogPostsSection from "../components/Catalog/CatalogPostsSection";
import PageContainer from "../components/PageContainer";
import banner from '../img/catalog-banner.png';

const Catalog = () => {
    return (
        <div className='catalog'>
            <div className="catalog__banner">
                <img className='catalog__banner' src={banner} alt="banner"/>
            </div>
            <PageContainer>
                <CatalogTags/>
                <CatalogPostsSection/>
            </PageContainer>
        </div>
    );
};

export default Catalog;