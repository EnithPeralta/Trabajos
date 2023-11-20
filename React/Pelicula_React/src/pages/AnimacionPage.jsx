import React from 'react';
import CardComponent from '../components/CardComponent';
import Enca from '../imagenes/encanto.jpeg';
import Insi from '../imagenes/inside.jpeg';
import luca from '../imagenes/luca.jpeg';
import Vali from '../imagenes/valiente.jpeg';


const AnimacionPage = () => {
  return (
    <div className="d-flex justify-content-around mt-5 gap-3">
      <CardComponent name="Encanto" description="A magical story about a family with extraordinary gifts living in an enchanted place in Colombia. The main character, Mirabel, discovers her special role as she struggles to save her home from losing its magic." img={Enca} datetime="2021 1h 39min" genus="Animation, Adventure, Fantasy, Musical"/>
      <CardComponent name="Inside Out" description="An animated adventure that explores the emotions of a little girl named Riley through characters representing joy, sadness, fear, anger and disgust. The film follows how these emotions interact as Riley faces changes in her life." img={Insi} datetime="2015 1h 35min" genus="Animation, Adventure, Comedy, Drama, Fantasy."/>
      <CardComponent name="Luca" description="Set on the Italian coast, this film follows the story of a sea boy named Luca who experiences a summer full of adventure and friendship with a human friend, while hiding his true identity as a sea creature." img={luca} datetime="2021 1h 35min" genus="Animation, Adventure, Comedy, Fantasy"/>
      <CardComponent name="Valiente" description="A story set in Scotland, centered on Merida, a brave princess who defies an ancient tradition and embarks on a challenging journey to change her destiny. The film depicts her struggle for freedom and her relationship with her mother." img={Vali} datetime="2012 1h 40min" genus="Animation, Adventure, Fantasy, Comedy, Drama." />
    </div>
  );
}
export default AnimacionPage;