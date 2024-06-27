import './App.css';
import Explore from './components/explore/Explore';
import FeaturedCollections from './components/featured-collections/FeaturedCollections';
import Hero from './components/hero/Hero';
import LeaderBorad from './components/leaderboard/LeaderBorad';
import Navbar from './components/navbar/Navbar';
import TrendingArt from './components/trending-art/TrendingArt';

function App() {

  return (
    <>
    <Navbar />
    <Hero />
    <TrendingArt />
    <FeaturedCollections />
    <LeaderBorad />
    <Explore />
    </>
  )
}

export default App
