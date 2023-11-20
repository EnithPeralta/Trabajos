import React from 'react';
import CardComponent from '../components/CardComponent';
import Tomorro from '../imagenes/tomorrowland.jpg';
import Carter from '../imagenes/john.jpg';
import Tron from '../imagenes/legacy.jpg';
import Aprendiz from '../imagenes/brujo.jpeg';


const CienciaPage = () => {
  return (
    <div className="d-flex justify-content-around mt-5 gap-3">
      <CardComponent name="Tomorrowland: The World of Tomorrow" description="A young woman joins an inventor on a mission to discover a mysterious place in a parallel dimension filled with advanced technology, seeking to change the fate of the world." img={Tomorro} datetime="2015 2h 10min" genus="Science Fiction, Adventure."/>
      <CardComponent name="John Carter" description="A Civil War veteran is mysteriously transported to Mars, where he discovers an alien world and becomes embroiled in an epic conflict between civilizations." img={Carter} datetime="2015 1h 35min" genus="Science Fiction, Adventure."/>
      <CardComponent name="Tron: Legacy" description="The son of a programmer enters a digital world to find his missing father, facing challenges and dangers in a virtual universe." img={Tron} datetime="2010 2h 7min" genus="Science Fiction, Adventure."/>
      <CardComponent name="Sorcerer's Apprentice" description=" A young sorcerer's apprentice embarks on an adventure full of magic and danger when he accidentally unleashes dark forces and must find a way to control them to save the world." img={Aprendiz} datetime="2010 1h 49min" genus="Science Fiction, Adventure." />
    </div>
  );
}
export default CienciaPage;