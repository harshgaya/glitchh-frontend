import React from "react";
import AddGames from "./components/AddGames/AddGames";
import CreateByteUploadDialog from "./components/Dialogs/CreateByteUploadDialog";
import CreatePostUploadDialog from "./components/Dialogs/CreatePostUploadDialog";
import AboutUsPage from "./components/LandingPage/AboutUsPage";
import GlitchhForStaying from "./components/LandingPage/GlitchhForStaying";
import HangoutPage from "./components/LandingPage/HangoutPage";
import LandingPage from "./components/LandingPage/LandingPage";
import Lets_Connect_Page from "./components/LandingPage/Lets_Connect_Page";
import Navbar from "./components/NavBar/Navbar";
import Privacy_Security from "./components/Settings/Privacy_Security";

function App() {
  return (
    <React.Fragment>
      {/* <CreatePostUploadDialog /> */}
      {/* <LandingPage /> */}
      <Privacy_Security />
      {/* <AddGames /> */}

    </React.Fragment>
  );
}

export default App;
