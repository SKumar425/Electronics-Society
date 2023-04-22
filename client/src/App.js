import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";
import AccountCreated from "./pages/AccountCreated";
import Announcements from "./pages/Announcements";
import Home from "./pages/Home";
import Trending from "./pages/Trending";
import Community from "./pages/Community";
import Join from "./pages/Join";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PostProject from "./pages/PostProject";
import Profile from "./pages/Profile";
import SingleAnnouncement from "./pages/SingleAnnouncement";
import Team from "./pages/Team";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <div className="App bg-screenBg font-poppins">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/announcements/:slug">
            <SingleAnnouncement />
            <Footer />
          </Route>
          <Route path="/announcements">
            <Announcements />
            <Footer />
          </Route>
          <Route path="/team">
            <Team />
            <Footer />
          </Route>
          <Route path="/join">
            <Join />
            <Footer />
          </Route>
          <Route path="/contact">
            <Contact />
            <Footer/>
          </Route>
          <Route path="/about">
            <About />
            <Footer/>
          </Route>
          <Route path="/account-created">
            <AccountCreated />
          </Route>
          <Route path="/user/:username">
            <Profile />
            <Footer />
          </Route>
          <Route path="/" component={Home} exact />
          <Route path="/trending" component={Trending} exact/>
          <Route path="/community" component={Community} exact/>
          <Route parh="/post-problem" component={PostProject} exact/>
        </Switch>
        <ToastContainer />
      </BrowserRouter>
    </div>
  );
};

export default App;
