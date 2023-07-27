import Icon from "/react.svg";
import Skeleton from "../components/Skeleton";

const slides = [200, 300, 400, 500, 600];

type Props = {};

export default function HomePage({ }: Props) {
  return (
    <div className="overflow-x-hidden">
      <h1 className="logo text-[72px] py-4">{"This \n is my \n Study book"}</h1>
      <img src={Icon} alt="My SVG" width={150} className="my-4 animate-pulse" />
      <Skeleton />

      <div className="w-full flex gap-5 overflow-x-scroll snap-x snap-mandatory">
        {slides.map((slide) => (
          <div
            key={slide}
            className={`h-32 w-full bg-emerald-600 flex-shrink-0 snap-center flex flex-col items-center justify-start`}
          />
        ))}
      </div>
    </div>
  );
}
