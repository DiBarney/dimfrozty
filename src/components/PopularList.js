import ListaTracks from './ListaTracks';
import tracks from '../data/tracks'

function PopularList() {
  return (
    <section className="popularList">
        <div className="columna">
            <div className="fila titulo">
                <h2>Popular Tracks</h2>
            </div>

            <div className="fila lista">
                <ListaTracks tracks={tracks}/>
            </div>
        </div>
    </section>
  )
}

export default PopularList