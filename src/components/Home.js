import Header from './Header';
import Footer from './Footer';
import MainBanner from './MainBanner';
import PopularList from './PopularList';

const content = {
  'bannerImage':'http://localhost/dimfrozty/src/img/bannerImage.png'
}

const Home = () => {
  return (
    <div className="frozty">
      <Header/>
      <main>
        <MainBanner content={content}/>
        <PopularList/>
      </main>
      <Footer/>
    </div>
  );
}

export default Home;
