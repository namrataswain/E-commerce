import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectShopCollections} from '../../redux/shop/shop.selectors';

import CollectionPreview from '../../Components/collection-preview/collection-preview.component';

const ShopPage = ({collections}) => (
        
         <div className='shop-page'>
          <h1>Collections</h1>
        {
           collections.map(({id, ...otherCollectionProps}) => (
              <CollectionPreview key={id} {...otherCollectionProps} />
            ))
        } 
         
         </div>
)

const mapStateToProps = createStructuredSelector({
    collections : selectShopCollections
})

export default connect( mapStateToProps)( ShopPage);