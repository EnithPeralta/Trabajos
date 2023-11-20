import React from 'react';
import SeriesComponent from '../components/SeriesComponent';
import Loki from '../imagenes/loki.webp';
import What from '../imagenes/what.jpg';
import Wanda from '../imagenes/wanda.jpg';
import Falcon from '../imagenes/falcon.jpeg';

const SeriesPage = () => {
  return (
    <div className="d-flex justify-content-around mt-5 gap-3">
        <SeriesComponent name="Loki" description="After the events of Avengers: EndgameLoki, the God of Deception, finds himself in a new timeline where he must confront an organization that monitors reality." img={Loki} estado="Complete series" episodios=": 6 episodes" duracion="40-50 min" año="2021"/>
        <SeriesComponent name="What If...?" description="An animated series that explores alternate events in the Marvel universe, featuring unique, non-canonical stories that explore what would have happened if certain events occurred differently." img={What} estado="Complete series" episodios="9 episodes" duracion="30-35min" año="2021"/>
        <SeriesComponent name="WandaVision" description=" Wanda Maximoff and Vision, two superheroes with seemingly idyllic lives, begin to suspect that nothing is as it seems in their suburb, triggering strange events." img={Wanda} estado="Complete series" episodios="9 episodes" duracion="30-40min" año="2021"/>
        <SeriesComponent name="The Falcon and The Winter Soldier" description=" After the events of Avengers: Endgame, Sam Wilson and Bucky Barnes join forces in a global adventure that tests their skills and endurance." img={Falcon} estado="Complete series" episodios="6 episodes" duracion="45-55min" año="2021"/>
    </div>
  );
}
export default SeriesPage;