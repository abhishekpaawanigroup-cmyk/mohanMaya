import Hero from './Hero'
import Products from './AllProduct'
import FAQSection from './FAQ'
import RecentlyViewed from '../../../components/product/RecentlyViewed'
import RecommendedProducts from '../../../components/product/RecommendedProducts'

const Shop = () => {
  return (
    <>
      <Hero />
      <Products />
      <RecentlyViewed />
      <RecommendedProducts title="Recommended For You" />
      <FAQSection />
    </>
  )
}

export default Shop
