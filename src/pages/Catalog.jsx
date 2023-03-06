import React from 'react';
import CatalogTags from "../components/Catalog/CatalogTags";
import CatalogPostsSection from "../components/Catalog/CatalogPostsSection";
import PageContainer from "../components/PageContainer";

const Catalog = () => {
    return (
        <PageContainer>
            <div className='catalog'>
                <CatalogTags/>
                <CatalogPostsSection/>
            </div>
        </PageContainer>
    );
};

export default Catalog;