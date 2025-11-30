import { Header, type NavigationSection } from "@/components/header";
import HeroSection from "@/components/hero-section";
import ImageCollage from "@/components/image-collage";

const navigationData: NavigationSection[] = [
	{
		title: 'Sobre',
		href: '#'
	},
	{
		title: 'Serviços',
		href: '#'
	},
	{
		title: 'Feedback',
		href: '#'
	},
	{
		title: 'Contato',
		href: '#'
	}
]

export function Home() {



	return (
		<div className="min-h-svh w-full bg-background">
			<Header navigationData={navigationData} />

			<main className="flex flex-col">
				<HeroSection />
			</main>

			{/* <ImageCollage /> */}


		</div>
	)
}