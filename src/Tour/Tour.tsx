import React from "react";
import {IonButton, IonCol, IonContent, IonGrid, IonImg, IonRow, IonSlide, IonSlides} from "@ionic/react";
import './Tour.css';
import slide1 from '../shared/assets/img/slides/slide-1.svg';
import slide2 from '../shared/assets/img/slides/slide-2.svg';
import slide3 from '../shared/assets/img/slides/slide-3.svg';
import slide4 from '../shared/assets/img/slides/slide-4.svg';
import slide5 from '../shared/assets/img/slides/slide-5.svg';

const Tour: React.FC = () => {
  const slideOpts = {
    initialSlide: 0,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    keyboard: {
      enabled: true
    }
  };

  return (
    <IonContent>
      <IonSlides pager={true} options={slideOpts}>
        <IonSlide className="clottie-slide">
          <h1 className="slide-title">Bienvenidx a Clottie</h1>
          <IonImg src={slide1} alt="Slide-1" className="slide-img"/>
          <p className="slide-description">Tu armario con infinidad de posibilidades</p>
        </IonSlide>
        <IonSlide className="clottie-slide">
          <br className="slide-title-offset"/>
          <IonImg src={slide2} alt="Slide-2" className="slide-img"/>
          <p className="slide-description">
            Busca ropa especial para alquilar de acuerdo a tus gustos e intereses
          </p>
        </IonSlide>
        <IonSlide className="clottie-slide">
          <br className="slide-title-offset"/>
          <IonImg src={slide3} alt="Slide-3" className="slide-img"/>
          <p className="slide-description">
            O colocar en alquiler ropa que ya no utilices tanto para apoyar la sostenibilidad
          </p>
        </IonSlide>
        <IonSlide className="clottie-slide">
          <br className="slide-title-offset"/>
          <IonImg src={slide4} alt="Slide-4" className="slide-img"/>
          <p className="slide-description">
            Llega a un acuerdo con el dueño de la prenda o la persona que quiere alquilar una de tus prendas
          </p>
        </IonSlide>
        <IonSlide className="clottie-slide">
          <br className="slide-title-offset"/>
          <IonImg src={slide5} alt="Slide-5" className="slide-img"/>
          <p className="slide-description">
            Viste como quieras y cuando quieras... ¡Apoya la moda sostenible!
          </p>
        </IonSlide>
      </IonSlides>
      <IonGrid>
        <IonRow>
          <IonCol size="12" className="ion-text-center">
            <IonButton
              color="primary"
              className="clottie-button"
              shape="round"
              routerLink="/auth"
              routerDirection="forward">Entrar</IonButton>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonContent>
  )
};

export default Tour;