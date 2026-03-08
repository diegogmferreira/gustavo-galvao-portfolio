import croserNumeric from "@/assets/croser-numeric.png";
import croserTypo from "@/assets/croser-typo.png";
import croserImg from "@/assets/croser.svg";
import pietroColorLogo from "@/assets/pietro-color-logo.svg";
import pietroLogoGrid from "@/assets/pietro-logo-grid.svg";
import pietroWhiteLogo from "@/assets/pietro-white-logo.svg";

export function LogoExplanation() {
  return (
    <div className="flex md:flex-row flex-col justify-between py-10">
      <div className="flex flex-col items-center justify-between mb-14">
        <div className="flex flex-col md:gap-16 gap-6 items-center">
          <img src={pietroWhiteLogo} />

          <div className="flex flex-col gap-4 items-center">
            <p className="text-xl">tipografia do logo</p>
            <div className="w-60 h-px bg-muted-foreground" />
          </div>
        </div>

        <div className="flex md:flex-row flex-col gap-8 md:gap-32 max-md:mt-10 max-md:mx-16">
          <img src={croserImg} />

          <div className="flex flex-col gap-4">
            <img src={croserTypo} />
            <img src={croserNumeric} />
          </div>
        </div>
      </div>

      <div className="flex flex-col md:gap-16 gap-6 items-center">
        <img src={pietroColorLogo} />

        <div className="flex flex-col gap-4 items-center justify-center">
          <p className="text-xl">sistema de grid para logo</p>
          <div className="w-60 h-px bg-muted-foreground" />
        </div>

        <div className="flex gap-32">
          <img src={pietroLogoGrid} />
        </div>
      </div>
    </div>
  )
}