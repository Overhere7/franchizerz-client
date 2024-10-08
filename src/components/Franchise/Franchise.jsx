import FranchiseData from "../FranchiseData/FranchiseData"
import Reviews from "../Reviews/Reviews"
import Menu from "../MenuCard/Menu"
import FranchiseGallery from "../BrandGallery/franchiseGallery"
import PricingSection from "../PricingSection/PricingSection"
import AboutTheBrand from "../AboutTheBrand/AboutTheBrand"
import FranchizerzWhy from "../FranchizerzWhy/FranchizerzWhy"

import FeedbackCard from "../Feedback/Feedback"

const Franchise = ({ franchise }) =>  {
	return (
	<>
		<div style={{ backgroundColor: "black", margin: "0", padding: "0" }}>
			<FranchiseData franchise={franchise} />
			<AboutTheBrand />
			<FranchizerzWhy />
			<PricingSection />
			<Menu menuPhotos={franchise.menuPhotos} />
			<FranchiseGallery galleryPhotos={franchise.brandGalleryPhotos} />

		<Reviews reviews={franchise.reviews} />
		</div>

		<FeedbackCard/>
  
	</>
)
}

export default Franchise
