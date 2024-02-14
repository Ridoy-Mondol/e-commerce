import HeroSection from "./HeroSection";
import HomeProducts from "./HomeProducts";
import Service from "./Service";
import Trusted from "./Trusted";
const Home = () => {
  const deviceType = window.innerWidth > 464 ? 'desktop' : 'mobile';
    return (
        <>
          <HeroSection 
          heading="RIDOY SHOP"/>
          <HomeProducts />
          <Service />
          <Trusted deviceType = {deviceType} />
        </>
    )
}
export default Home;