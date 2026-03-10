import croserNumeric from "@/assets/croser-numeric.webp";
import croserTypo from "@/assets/croser-typo.webp";
import croserImg from "@/assets/croser.webp";
import pietroColorLogo from "@/assets/pietro-color-logo.webp";
import pietroLogoGrid from "@/assets/pietro-logo-grid.svg";
import pietroWhiteLogo from "@/assets/pietro-white-logo.webp";

export function LogoExplanation() {
  return (
    <div className="flex md:flex-row flex-col justify-between py-10">
      <div className="flex flex-col items-center justify-between mb-14">
        <div className="flex flex-col md:gap-16 gap-6 items-center">
          <img src={pietroWhiteLogo} alt="Logo Pietro Branco" />

          <div className="flex flex-col gap-4 items-center">
            <p className="text-xl">tipografia do logo</p>
            <div className="w-60 h-px bg-muted-foreground" />
          </div>
        </div>

        <div className="flex md:flex-row flex-col gap-8 md:gap-32 max-md:mt-10 max-md:mx-16">
          <img src={croserImg} alt="Logo Croser" />

          <div className="flex flex-col gap-4">
            <img src={croserTypo} alt="Tipografia Croser" />
            <img src={croserNumeric} alt="Numerais Croser" />
          </div>
        </div>
      </div>

      <div className="flex flex-col md:gap-16 gap-6 items-center">
        <img src={pietroColorLogo} alt="Logo Pietro Colorido" />

        <div className="flex flex-col gap-4 items-center justify-center">
          <p className="text-xl">sistema de grid para logo</p>
          <div className="w-60 h-px bg-muted-foreground" />
        </div>

        <div className="flex gap-32">
          <img src={pietroLogoGrid} alt="Grid do Logo Pietro" />
        </div>
      </div>
    </div>
  )
}