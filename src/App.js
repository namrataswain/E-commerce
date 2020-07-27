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

    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      // createUserProfileDocument(user); //storing the data of the user into the firestore
      // //next is to think about storing data into the state of the component of our app
      

      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => { //listens to the userRef and get the first state of the userRef
          this.setState({ //setState is asynchronous
            currentUser :{
              id : snapShot.id,
              ...snapShot.data()
              }
          })
          
        })  ;       
      }
      else {
        this.setState({currentUser : userAuth})
      }


    }
    )
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth ();
  }

  render() {
    return (
      <div className="App">
        <Header  />
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
