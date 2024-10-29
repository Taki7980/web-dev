import { ResourcesLearn } from "@/components/shared/ResourcesLearn/ResourcesLearn";
import ClayInTeam from "@/components/shared/ClayInTeam/ClayInTeam";
import Hero from "@/components/shared/Hero/Hero";
import Program from "@/components/shared/Program/Program";
import SalesForce from "@/components/shared/SalesForce/SalesForce";
import CustomerReview from "@/components/shared/CustomerReview/CustomerReview";
import CampaingHero from "@/components/shared/CampaingHero/CampaingHero";
import Marketing from "@/components/shared/Marketing/Marketing";
import SmoothScroll from "@/components/ui/smoothScroll";
import CmrResearch from "@/components/shared/CMRresearch/CmrResearch";

export default function Home() {
	return (
		<SmoothScroll>
			<Hero />
			<Marketing />
			<CmrResearch/>
			<Program />
			<SalesForce />
			<ClayInTeam />
			<CustomerReview />
			<ResourcesLearn />
			<CampaingHero />
		</SmoothScroll>
	);
}
