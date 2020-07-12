import React from 'react';
import {Route} from 'react-router-dom';
import {IonApp, IonRouterOutlet} from '@ionic/react';
import {IonReactRouter} from '@ionic/react-router';
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';
/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
/* Theme variables */
import './shared/theme/variables.css';
import './shared/theme/styles.css'
import Home from "./Home/home";
import Tour from "./Tour/Tour";
import {useSelector} from "react-redux";
import {AppState} from "./shared/store";
import Auth from "./Auth/Auth";

const App: React.FC = () => {
  const isLogged:boolean = useSelector(
    (state: AppState) => state.intro
  );
  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          {/*<Route path="/" exact={true} render={() => isLogged? <Home/>: <Tour/>}/>
          <Route path="/auth" exact={true} component={Auth}/>*/}
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  )
};

export default App;