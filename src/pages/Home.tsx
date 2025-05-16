import { IonContent, IonHeader, IonInput,IonButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';
import { useState } from 'react';
const Home: React.FC = () => {
  const [lado, setLado] = useState (0);
  const [area, setArea] = useState <number | null> (null);
  const CalcQuad = () =>{
    setArea(lado * lado)
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Cálculo da área do Quadrado</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        
        <IonInput onIonChange={(e) => setLado(parseFloat(e.detail.value!)) } label="Digite o valor de um Lado do quadrado" placeholder="Digite o valor"></IonInput>
        <IonButton onClick={CalcQuad} color="success">Calcular</IonButton>
        <h2>  O valor da área é: {area}</h2>


      </IonContent>
    </IonPage>
  );
};

export default Home;
