import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function PrintSectionTitle() {
  return (
    <Card className="rounded-[60px] rounded-br-none rounded-tl-none md:rounded-[120px] md:rounded-br-none md:rounded-tl-none w-full bg-[linear-gradient(268deg,#DE0147_44.5%,#5E001E_109.19%)] items-center justify-center md:py-8 py-4 md:gap-6 gap-2">
      <h3 className="font-semibold md:text-5xl text-2xl text-background uppercase text-center pr-10 leading-none md:leading-normal">Trabalhos para impressões</h3>
      <p className="md:text-2xl text-base font-normal">Alguns trabalhos para impressões</p>

      <div className="flex gap-4">
        <Button
          className="bg-transparent border border-white"
          asChild
        >
          <a href="">
            Instagram
          </a>
        </Button>

        <Button
          variant="secondary"
          className="shadow-2xl"
          asChild
        >
          <a href="">
            Behance
          </a>
        </Button>
      </div>
    </Card>
  )
}