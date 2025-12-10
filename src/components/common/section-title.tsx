import { GradientText } from "./gradient-text-";
import { ShimmerText } from "./shimmer-text";

interface IProps {
  title: string;
  subtitle: string;
}

export function SectionTitle({ subtitle, title }: IProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <ShimmerText text={title} className="uppercase" />
      {/* <GradientText
        className="text-4xl md:text-5xl font-bold uppercase"
        animationDuration={2}
      > 
        {title}
      </GradientText> */}
      <p className="md:text-2xl text-lg text-foreground">{subtitle}</p>
    </div>
  )
}