import { ResourcesLearn } from "@/components/shared/ResourcesLearn/ResourcesLearn";
import ClayInTeam from "@/components/shared/ClayInTeam/ClayInTeam";
import Hero from "@/components/shared/Hero/Hero";
import Program from "@/components/shared/Program/Program";
import SalesForce from "@/components/shared/SalesForce/SalesForce";
import CustomerReview from "@/components/shared/CustomerReview/CustomerReview";
import CampaingHero from "@/components/shared/CampaingHero/CampaingHero";

export default function Home() {
	return (
		<div className="w-full">
			<Hero />
			<ClayInTeam />
			<ResourcesLearn />
			<Program />
			<SalesForce />
			<CustomerReview />
			<CampaingHero/>
		</div>
	);
}
