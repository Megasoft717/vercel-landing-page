import FifthSection from "./FifthSection"
import FirstSection from "./FirstSection"
import FourthSection from "./FourthSection"
import SecondSection from "./SecondSection"
import ThirdSection from "./ThirdSection"

const FeatureSection = () => {
  return (
    <div className="max-w-270 w-full mb-16 border border-gallery">
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
        <FifthSection />
    </div>
  )
}

export default FeatureSection