import React from "react";
import {IonButton, IonCol, IonContent, IonGrid, IonImg, IonRow} from "@ionic/react";
import './Auth.css';
import logo from '../shared/assets/img/logo/logo-primary.svg';

const Auth: React.FC = () => {
  return (
    <IonContent>
      <IonGrid>
        <IonRow className="logo-row">
          <IonCol className="flex-center ion-text-center">
            <IonImg src={logo} alt="Logo" className="auth-img"/>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol className="flex-center ion-text-center">
            <IonButton
              color="primary"
              className="clottie-button"
              shape="round"
              routerLink="/sign-up">
              Registrarme
            </IonButton>
            <IonButton
              color="primary"
              className="clottie-button"
              shape="round"
              routerLink="/login">
              Ya tengo una cuenta
            </IonButton>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonContent>
  )
};

export default Auth;