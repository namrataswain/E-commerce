import React from 'react';
import { connect} from 'react-redux';
import {selectCollection} from '../../redux/shop/shop.selectors';

import './collection.styles.scss';

//match property is available when the component is wrapped using Route from the react-route library
const CollectionPage = ({collection }) => {
    console.log(collection);
    return(
    <div className='collection-page'>
    <h2> Category page</h2>
    </div>
);
};

const mapStateToProps = (state, ownProps) => ({
    collection : selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);