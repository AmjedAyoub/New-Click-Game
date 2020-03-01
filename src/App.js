import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./pages/main";
// import Title from "./components/Title";
// import friends from "./friends.json";

  // Map over this.state.friends and render a FriendCard component for each friend object
  function App() {

    return (      
    <Router>       
      <Route exact path="/" component={Main} />
      </Router>
    );
  }

export default App;
