import { Footer } from "@/components/footer";
import { Header, type NavigationSection } from "@/components/header";
import { HeroSection } from "@/pages/hero-section/hero-section";
import { ServicesSection } from "@/pages/services-section/services-section";
import { ContactSection } from "./contact/contact-section";
import { MattePaintingSection } from "./matte-painting/matte-painting-section";
import { PrintSection } from "./print-section/print-section";
import { SocialMediaService } from "./social-media/social-media";
import { TestimonialsSection } from "./testimonials/testimonials-section";

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

			<main className="flex flex-col lg:gap-40 md:gap-20 gap-10 ">
				<HeroSection />
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