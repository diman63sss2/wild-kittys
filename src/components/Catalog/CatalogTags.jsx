import React from 'react';

const CatalogTags = () => {
    const tags = [
        {
            name: '16 тысяч лет'
        },
        {
            name: '18 тысяч лет'
        },
        {
            name: '21+ тысяч лет'
        },
        {
            name: 'Близняшки'
        },
        {
            name: 'Досочки'
        },
        {
            name: 'Коровки'
        },
        {
            name: 'Цундере'
        },
        {
            name: 'Милфы'
        }
        ];
    return (
        <div className='catalog__tags'>
            {
                tags.map((el)=>
                    <div key={el.name} className="catalog__tag">
                        {el.name}
                    </div>
                )
            }
        </div>
    );
};

export default CatalogTags;