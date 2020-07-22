import React from 'react';
import './collection-item.styles.scss';

const CollectionItem = ({id, name, price, imageUrl}) =>(
    
        <div className='collection-item'>
        <div className='image'
        style={{backgroundImage: `url(${imageUrl})`}}
        >
        <div>
        <button>ADD TO CART</button>
        </div>
        </div>
        <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
        </div>

        </div>

    
)

export default CollectionItem;