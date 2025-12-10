import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function PrintSectionTitle() {
  return (
    <Card className="rounded-[120px] rounded-br-none rounded-tl-none bw-full bg-[linear-gradient(268deg,#DE0147_44.5%,#5E001E_109.19%)] items-center justify-center py-8">
      <h3 className="font-semibold md:text-5xl text-2xl text-background uppercase">Trabalhos para impressões</h3>
      <p className="md:text-2xl text-lg font-normal">Alguns trabalhos para impressões</p>

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