import React from 'react';

const PageContainer = ({children, classes}) => {
    let containerClasses = 'container';
    if(classes){
        containerClasses = containerClasses + ' ' + classes;
    }
    return (
        <div className={containerClasses}>
            {children}
        </div>
    );
};

export default PageContainer;