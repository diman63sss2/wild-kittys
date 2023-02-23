import React from 'react';

const CatalogFilters = () => {
    return (
        <div className='catalog__filters'>
            <input className='catalog__filter__search' type="text" placeholder='поиск по названию'/>
            <div className='catalog__filters__container'>
                <select name="" id="">
                    <option disabled value="">Сортировать по</option>
                    <option value="">По названию</option>
                    <option value="">По возрасту</option>
                </select>
                <button className='catalog__filter__reset'>
                    Сброс
                </button>
            </div>
        </div>
    );
};

export default CatalogFilters;