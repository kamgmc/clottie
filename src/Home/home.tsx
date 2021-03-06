import {IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs} from "@ionic/react";
import {Redirect, Route} from "react-router-dom";
import Tab1 from "../pages/Tab1";
import Tab2 from "../pages/Tab2";
import Tab3 from "../pages/Tab3";
import {ellipse, square, triangle} from "ionicons/icons";
import React from "react";
import {IonReactRouter} from "@ionic/react-router";


const Home: React.FC = () => (
  <IonReactRouter>
    <IonTabs>
      <IonRouterOutlet>
        <Route path="/tab1" component={Tab1} exact={true}/>
        <Route path="/tab2" component={Tab2} exact={true}/>
        <Route path="/tab3" component={Tab3}/>
        <Route path="/" render={() => <Redirect to="/tab1"/>} exact={true}/>
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="tab1" href="/tab1">
          <IonIcon icon={triangle}/>
          <IonLabel>Tab 1</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab2" href="/tab2">
          <IonIcon icon={ellipse}/>
          <IonLabel>Tab 2</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab3" href="/tab3">
          <IonIcon icon={square}/>
          <IonLabel>Tab 3</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  </IonReactRouter>
);

export default Home;