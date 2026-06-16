import FeaturedProduct from "./FeaturedProduct";
import TrendyCollection from "./TrendyCollection";
import Hero from "./Hero";
import Testimonials from "./Testimonial";
import BestSellers from "./Best-seller";
import SeasonalCollection from "./Season-collection";
import UpcomingCollection from "./Upcoming";
import FeaturesSection from "./Feature";
import RecentlyViewed from "../../../components/product/RecentlyViewed";
import RecommendedProducts from "../../../components/product/RecommendedProducts";
import Newsletter from "../../../components/common/Newsletter";

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedProduct />
      <FeaturesSection />
      <SeasonalCollection />
      <UpcomingCollection />
      <TrendyCollection />
      <BestSellers />
      <Testimonials />
      <RecentlyViewed />
      <RecommendedProducts />
      <Newsletter />
    </>
  );
};

export default Home;
