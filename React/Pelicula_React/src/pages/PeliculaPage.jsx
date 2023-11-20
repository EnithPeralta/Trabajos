import React from 'react';
import CardComponent from '../components/CardComponent';
import luca from '../imagenes/luca.jpeg';
import Aprendiz from '../imagenes/brujo.jpeg';
import Indiana from '../imagenes/indiana.jpeg';
import Olafs from '../imagenes/frozen.jpeg';

const PeliculaPage = () => {
  return (
    <div className="d-flex justify-content-around mt-5 gap-3">
        <CardComponent name="Luca" description="Set on the Italian coast, this film follows the story of a sea boy named Luca who experiences a summer full of adventure and friendship with a human friend, while hiding his true identity as a sea creature." img={luca} datetime="2021 1h 35min" genus="Animation, Adventure, Comedy, Fantasy"/>
        <CardComponent name="Sorcerer's Apprentice" description=" A young sorcerer's apprentice embarks on an adventure full of magic and danger when he accidentally unleashes dark forces and must find a way to control them to save the world." img={Aprendiz} datetime="2010 1h 49min" genus="Science Fiction, Adventure." />
        <CardComponent name="Indiana Jones: Raiders of the Lost Ark" description="Archaeologist Indiana Jones embarks on a dangerous quest to find the Ark of the Covenant before the Nazis do, facing deadly traps and relentless enemies." img={Indiana} datetime="1981 1h 55min" genus="Adventure, Fantasy, Action."/>
        <CardComponent name="Frozen: A Frozen Adventure" description=" Anna searches for her sister, Elsa, whose magical powers have plunged the kingdom into an eternal winter. A story of love, magic and courage." img={Olafs} datetime="2013 1h 42min" genus="Adventure, Fantasy, Action."/>
    </div>
  );
}
export default PeliculaPage;