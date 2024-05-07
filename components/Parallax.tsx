import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";
import { wrap } from "@motionone/utils";
import heroCarousel1 from "@/assets/hero-carousel-1.png";
import heroCarousel2 from "@/assets/hero-carousel-2.png";
import heroCarousel3 from "@/assets/hero-carousel-3.png";
import heroCarousel4 from "@/assets/hero-carousel-4.png";

interface ParallaxProps {
  baseVelocity: number;
}
function Parallax({ baseVelocity = 100 }: ParallaxProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(0, -115, v)}%`);
  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 500);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });
  return (
    <div className="mx-auto overflow-hidden mb-5 max-w-[1520px]">
      <motion.div className="flex gap-5" style={{ x }}>
        <Image
          src={heroCarousel1}
          alt="carousel"
          className="basis-8/12 md:basis-1/4"
        />
        <Image
          src={heroCarousel2}
          alt="carousel"
          className="basis-8/12 md:basis-1/4"
        />
        <Image
          src={heroCarousel3}
          alt="carousel"
          className="basis-8/12 md:basis-1/4"
        />
        <Image
          src={heroCarousel4}
          alt="carousel"
          className="basis-8/12 md:basis-1/4"
        />
        <Image
          src={heroCarousel1}
          alt="carousel"
          className="basis-8/12 md:basis-1/4"
        />
        <Image
          src={heroCarousel2}
          alt="carousel"
          className="basis-8/12 md:basis-1/4"
        />
        <Image
          src={heroCarousel3}
          alt="carousel"
          className="basis-8/12 md:basis-1/4"
        />
        <Image
          src={heroCarousel4}
          alt="carousel"
          className="basis-8/12 md:basis-1/4"
        />
        <Image
          src={heroCarousel1}
          alt="carousel"
          className="basis-8/12 md:basis-1/4"
        />
        <Image
          src={heroCarousel2}
          alt="carousel"
          className="basis-8/12 md:basis-1/4"
        />
        <Image
          src={heroCarousel3}
          alt="carousel"
          className="basis-8/12 md:basis-1/4"
        />
        <Image
          src={heroCarousel4}
          alt="carousel"
          className="basis-8/12 md:basis-1/4"
        />
      </motion.div>
    </div>
  );
}

export default Parallax;
