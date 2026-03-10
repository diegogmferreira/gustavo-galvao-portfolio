import { Preloader } from "@/components/common/preloader";
import { Footer } from "@/components/footer";
import { Header, type NavigationSection } from "@/components/header";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { HeroSection } from "@/pages/hero-section/hero-section";
import { ServicesSection } from "@/pages/services-section/services-section";
import { useState } from "react";
import { ContactSection } from "./contact/contact-section";
import { MattePaintingSection } from "./matte-painting/matte-painting-section";
import { PrintSection } from "./print-section/print-section";
import { SocialMediaService } from "./social-media/social-media";
import { TestimonialsSection } from "./testimonials/testimonials-section";

const navigationData: NavigationSection[] = [
	{
		title: 'Sobre',
		href: '#sobre'
	},
	{
		title: 'Serviços',
		href: '#servicos'
	},
	{
		title: 'Feedback',
		href: '#feedback'
	},
	{
		title: 'Contato',
		href: '#contato'
	}
]

export function Home() {
	const [isPreloaderDone, setIsPreloaderDone] = useState(true);

	return (
		<div className="min-h-svh w-full bg-background">
			{/* <Preloader onComplete={() => setIsPreloaderDone(true)} /> */}
			<Header navigationData={navigationData} />
			<ScrollProgress className="top-16 opacity-80" />

			<main className="flex flex-col md:gap-20 gap-10">
				<HeroSection isPreloaderDone={isPreloaderDone} />
				<ServicesSection />
				<SocialMediaService />
				<MattePaintingSection />
				<PrintSection />
				<TestimonialsSection />
				<ContactSection />
			</main>

			<Footer />
		</div>
	)
}