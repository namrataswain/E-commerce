import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect} from 'react-redux';
import CollectionOverview from "../../Components/collection-overview/collection-overview.component";
import CollectionPage from "../collection/collection.component";
import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils';
import { updateCollections} from '../../redux/shop/shop.actions';

class ShopPage extends Component {


  componentDidMount() {

   const {updateCollections} = this.props;
  const collectionRef = firestore.collection('Collections');
  collectionRef.onSnapshot(async snapshot =>{
    const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
    updateCollections(collectionsMap)
  })  //if the items are updated or it renders for the first time use onSnapshot 
  }

  render() {
    const {match} = this.props;
    return(
      <div className="shop-page">
      <Route exact path={`${match.path}/`} component={CollectionOverview} />

      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
    )
    
  }
}

const mapDispatchToProps = dispatch =>({
 updateCollections : collectionsMap => dispatch(updateCollections(collectionsMap))
})
export default connect(null, mapDispatchToProps)(ShopPage);
