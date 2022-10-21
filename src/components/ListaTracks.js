function ListaTracks(props) {
  const tracks = props.tracks;
  return (
    <ul className="trackList">
      {tracks.map((track)=>(
        <li className="track">
          <div className="contTrack">
            <div className="cover">
              <img src={track.coverSrc} alt="DimFrozty Cover"/>
            </div>
            <div className="fila title">
              <h3>{track.title}</h3>
            </div>
            <div className="fila author">
              <p>{track.author}</p>
            </div>
            <div className="fila bpm">
              <p>{track.bpm + ' BPM'}</p>
            </div>
            <div className="fila duration">
              <p>{track.duration}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default ListaTracks