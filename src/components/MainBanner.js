import bannerVideo from "../media/Dim_webBanner.mp4";

const MainBanner = () => {
  return (
    <section className="sectionBanner MainBanner" id="sectionBanner">
      <div className="contVideo">
        <video muted autoPlay loop>
          <source src={bannerVideo} type="video/mp4" />
        </video>
      </div>

      <div className="columna colTitle">
        <div className="bannerTitle">
          <h1>
            Exclusive hip-hop and trap instrumentals. Your next hit is waiting
            for you
          </h1>
        </div>
        <div className="bannerSub">
          <p>Each of them made with love - DimFrozty</p>
        </div>
      </div>
      <div className="columna colSpacing"></div>
    </section>
  );
};

export default MainBanner;
