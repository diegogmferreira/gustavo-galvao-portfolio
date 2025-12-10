import { SwiperCarousel } from "./print-carousel";
import { PrintSectionTitle } from "./print-section-title";

import deliveryImg from "@/assets/printed-works/delivery.svg";
import retroRockImg from "@/assets/printed-works/retro-rock-show.svg";
import rodeoShow from "@/assets/printed-works/rodeo-show.svg";
import teenageCult from "@/assets/printed-works/teenage-cult.svg";
import womenDay from "@/assets/printed-works/women-days.svg";

export function PrintSection() {
  const images = [
    {
      src: womenDay,
      alt: "Cartaz Farmácia",
    },
    {
      src: teenageCult,
      alt: "Cartaz Culto",
    },
    {
      src: rodeoShow,
      alt: "Cartaz Rodeio",
    },
    {
      src: deliveryImg,
      alt: "Cartaz Delivery",
    },
    {
      src: retroRockImg,
      alt: "Cartaz Festa",
    },
  ];


  return (
    <section className="w-full max-w-7xl mx-auto px-10 space-y-32">
      <PrintSectionTitle />

      <div className="flex w-full mx-auto items-center justify-center">
        <SwiperCarousel
          images={images}
          showPagination={true}
          // showNavigation={true}
          loop={true}
          autoplay={true}
          spaceBetween={60}
        />
      </div>
    </section>
  )
}