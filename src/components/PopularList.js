import { useEffect, useState } from "react";
import ListaTracks from "./ListaTracks";

function PopularList() {
  const [tracks, setTracks] = useState(null);
  const [tracksListos, setTracksListos] = useState(false);

  useEffect(() => {
    fetch("http://192.168.0.15/dimfrozty/api/test/prueba.php", {
      method: "POST",
    })
      .then((r) => r.json())
      .then((data) => {
        setTracks(data);
        setTracksListos(true);
      });
  }, []);

  if (tracksListos) {
    return (
      <section className="popularList">
        <div className="columna">
          <div className="fila titulo">
            <h2>Popular Tracks</h2>
          </div>

          <div className="fila lista">
            <ListaTracks tracks={tracks} />
          </div>
        </div>
      </section>
    );
  }
}

export default PopularList;
