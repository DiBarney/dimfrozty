import Header from "./Header";
import Footer from "./Footer";
import MainBanner from "./MainBanner";
import PopularList from "./PopularList";

const Home = () => {
  return (
    <div className="frozty">
      <Header />
      <main>
        <MainBanner />
        <PopularList />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
