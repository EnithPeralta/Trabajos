import React from 'react';
import CardComponent from '../components/CardComponent';
import Piratas from '../imagenes/piratas.jpeg';
import Word from '../imagenes/piratesworld.jpg';
import Indiana from '../imagenes/indiana.jpeg';
import Libro from '../imagenes/selva.jpeg';


const AventuraPage = () => {
  return (
    <div className="d-flex justify-content-around mt-5 gap-3">
      <CardComponent name="Pirates of the Caribbean: The Curse of the Black Pearl" description="Captain Jack Sparrow seeks to recover his ship, the Black Pearl, and faces a pirate curse as he crosses paths with young Will Turner in an exciting maritime adventure." img={Piratas} datetime="2003 2h 23min" genus="Adventure, Fantasy, Action."/>
      <CardComponent name="Pirates of the Caribbean: At the end of the world" description="Jack Sparrow and his allies embark on a mission to rescue Captain Barbossa and engage Lord Cutler Beckett in an epic battle for control of the seas." img={Word} datetime="2007 2h 49min" genus="Adventure, Fantasy, Action."/>
      <CardComponent name="Indiana Jones: Raiders of the Lost Ark" description="Archaeologist Indiana Jones embarks on a dangerous quest to find the Ark of the Covenant before the Nazis do, facing deadly traps and relentless enemies." img={Indiana} datetime="1981 1h 55min" genus="Adventure, Fantasy, Action."/>
      <CardComponent name="The Jungle Book" description="Based on Rudyard Kipling's classic story, it follows the adventures of Mowgli, a boy raised by wolves, as he embarks on a dangerous and exciting journey through the jungle, confronting wild animals and discovering his true place in the world." img={Libro} datetime="2016 1h 46min" genus="Adventure, Fantasy, Action." />
    </div>
  );
}
export default AventuraPage;