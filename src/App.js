import React, { Fragment, useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";

import NavDrawer from "./components/common/nav-drawer";
import Footer from "./components/common/footer.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { preloadAuth, useFirebaseApp } from "reactfire";
import {
  ThemeProvider,
  StyledEngineProvider,
  createTheme
} from "@mui/material/styles";

import HomePage from "./components/home-page.jsx";
import FormPage from "./components/form/form-page.jsx";
import GoogleMapsPage from "./components/google-map/google-map-page.jsx";
import AuthPage from "./components/auth/auth-page.jsx";
import MapboxPage from "./components/mapbox/mapbox-page.jsx";
import WebcamPage from "./components/webcam/webcam-page.jsx";
import GeolocationPage from "./components/geolocation/geolocation-page.jsx";
import LargeListsPage from "./components/large-lists/large-lists-page.jsx";

const theme = createTheme();

function App() {
  const firebaseApp = useFirebaseApp();

  useEffect(async () => {
    await preloadAuth({ firebaseApp });
  }, []);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Router>
          <CssBaseline />
          <NavDrawer
            pageContent={
              <Fragment>
                <Switch>
                  <Route exact path="/" component={HomePage} />
                  <Route path="/google-map-page" component={GoogleMapsPage} />
                  <Route path="/form-page" component={FormPage} />
                  <Route path="/auth" component={AuthPage} />
                  <Route path="/mapbox-page" component={MapboxPage} />
                  <Route path="/webcam-page" component={WebcamPage} />
                  <Route path="/geolocation-page" component={GeolocationPage} />
                  <Route path="/large-lists-page" component={LargeListsPage} />
                </Switch>

                <Footer />
              </Fragment>
            }
          />
        </Router>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
