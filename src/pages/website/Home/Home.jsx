import FeaturedProduct from "./FeaturedProduct";
import TrendyCollection from "./TrendyCollection";
import Hero from "./Hero";
import Testimonials from "./Testimonial";
import BestSellers from "./Best-seller";
import SeasonalCollection from "./Season-collection";
import UpcomingCollection from "./Upcoming";
import FeaturesSection from "./Feature";


const Home = () => {
  return (
    <>
    <Hero />
     <FeaturedProduct />
     <FeaturesSection />
     <SeasonalCollection />
     <UpcomingCollection />
      <TrendyCollection />
      <Testimonials />
      <BestSellers />
    </>
  );
};

export default Home;
