import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/homepage/homepage.components";
import ShopPage from "./Pages/shop/shop.component";
import SignInAndSignUpPage from "./Pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Header from "./Components/Header/header-component";
import { auth , createUserProfileDocument} from "./firebase/firebase.utils";


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser : null
    }
  }

   unsubscribeFromAuth = null;

  componentDidMount() {

    this.unsubscribeFromAuth = auth.onAuthStateChanged( async user => {
      createUserProfileDocument(user); //storing the data of the user into the firestore
      //next is to think about storing data into the state of the component of our app
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth ();
  }

  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
