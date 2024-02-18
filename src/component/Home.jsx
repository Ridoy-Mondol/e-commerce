import HeroSection from "./HeroSection";
import HomeProducts from "./HomeProducts";
import Service from "./Service";
import Trusted from "./Trusted";
const Home = () => {
  const deviceType = window.innerWidth > 464 ? 'desktop' : 'mobile';
    return (
        <div className="overflow-x-hidden">
          <HeroSection 
          heading="RIDOY SHOP"/>
          <HomeProducts />
          <Service />
          <Trusted deviceType = {deviceType} />
        </div>
    )
}
export default Home;