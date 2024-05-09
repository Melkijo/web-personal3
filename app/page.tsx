"use client";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import ParallaxText from "@/components/Parallax";
import heroCarousel1 from "@/assets/hero-carousel-1.png";
import heroCarousel2 from "@/assets/hero-carousel-2.png";
import heroCarousel3 from "@/assets/hero-carousel-3.png";
import heroCarousel4 from "@/assets/hero-carousel-4.png";
import aboutPhoto from "@/assets/about-photo.png";
import aboutPhoto2 from "@/assets/about-photo-2.png";

import portfolio1 from "@/assets/portfolio-3.png";
import portfolio2 from "@/assets/portfolio-2.png";
// import cv from "@/assets/CV-2024-Melki-Jonathan-Andara.pdf";
// import cv from "@/public/cv-2024-melki-jonathan-andara.pdf";

import quotesIcon from "@/assets/quotes-icon.png";
import hero1 from "@/assets/hero-1.png";
import hero2 from "@/assets/hero-2.png";
import hero3 from "@/assets/hero-3.png";
import hero4 from "@/assets/hero-4.png";
import herobg1 from "@/assets/hero-bg-1.png";
import herobg2 from "@/assets/hero-bg-2.png";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { useRef } from "react";
import { useInView } from "framer-motion";
import {
  BehanceIcon,
  DribbbleIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
} from "@/components/icon";

export default function Home() {
  const ref = useRef(null);

  const year = new Date().getFullYear();
  return (
    <>
      <div className="hero-section relative bg-secondary h-auto md:h-[90vh] ">
        <Navbar />
        <Image
          className="absolute top-0 left-0 z-0 hidden md:block"
          src={herobg1}
          alt="mejo hero"
        />
        <Image
          className="absolute top-0 right-0"
          src={herobg2}
          alt="mejo hero"
        />
        <Image
          className="absolute hidden right-40 top-40 md:block"
          src={hero1}
          alt="mejo hero"
        />
        <Image
          className="absolute hidden left-20 top-44 md:block"
          src={hero2}
          alt="mejo hero"
        />

        <Image
          className="absolute hidden right-52 bottom-20 md:block"
          src={hero3}
          alt="mejo hero"
        />
        <Image
          className="absolute hidden bottom-14 left-40 md:block"
          src={hero4}
          alt="mejo hero"
        />

        <div
          ref={ref}
          className="relative z-10 flex flex-col items-center justify-start px-5 pb-20 md:px-40 pt-14 md:pt-20"
        >
          <div className="w-fit h-fit rounded-full bg-gradient-to-r mb-4 from-green-200 to-blue-500 p-0.5 hidden md:block">
            <div className="w-full h-full  flex py-2.5 px-6 rounded-full gap-2 items-center justify-center bg-secondary  ">
              <div className="min-w-3.5 min-h-3.5 bg-primary border border-white rounded-full"></div>
              <p className="text-xs md:text-sm ">I'm Available </p>
            </div>
          </div>

          <h1 className="font-display text-4xl md:text-[56px] text-left md:text-center w-full md:w-[1050px] mb-4 leading-relaxed md:leading-normal">
            Hello! I’m Mejo, a{" "}
            <span className="underline underline-offset-8">
              <Link href="#">Web Developer</Link>
            </span>{" "}
            with strong{" "}
            <span className="underline underline-offset-8">
              <Link href="">UI skills</Link>
            </span>{" "}
            and solid{" "}
            <span className="underline underline-offset-8">
              <Link href="">UX thinking</Link>
            </span>
          </h1>
          <div className="flex justify-start md:justify-center w-full gap-5 mt-5">
            <Button>Let's Connect</Button>
            <Button variant="ghost">Learn more</Button>
          </div>
        </div>
      </div>

      {/* <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 1000,
            jump: false,
            stopOnInteraction: false,
            stopOnMouseEnter: true,
          }),
        ]}
        className="w-full bg-gradient-to-b from-secondary to-background"
      >
        <CarouselContent>
          <CarouselItem className="basis-8/12 md:basis-1/4">
            <Image src={heroCarousel1} alt="carousel" />
          </CarouselItem>
          <CarouselItem className="basis-8/12 md:basis-1/4">
            <Image src={heroCarousel2} alt="carousel" />
          </CarouselItem>
          <CarouselItem className="basis-8/12 md:basis-1/4">
            <Image src={heroCarousel1} alt="carousel" />
          </CarouselItem>
          <CarouselItem className="basis-8/12 md:basis-1/4">
            <Image src={heroCarousel2} alt="carousel" />
          </CarouselItem>
          <CarouselItem className="basis-8/12 md:basis-1/4">
            <Image src={heroCarousel3} alt="carousel" />
          </CarouselItem>
          <CarouselItem className="basis-8/12 md:basis-1/4">
            <Image src={heroCarousel1} alt="carousel" />
          </CarouselItem>
          <CarouselItem className="basis-8/12 md:basis-1/4">
            <Image src={heroCarousel4} alt="carousel" />
          </CarouselItem>
          <CarouselItem className="basis-8/12 md:basis-1/4">
            <Image src={heroCarousel2} alt="carousel" />
          </CarouselItem>
        </CarouselContent>
      </Carousel> */}
      <div className="bg-gradient-to-b from-secondary to-background">
        <ParallaxText baseVelocity={5} />
        <ParallaxText baseVelocity={-5} />
      </div>

      <hr />

      <div id="about" className="max-w-full md:max-w-[1520px] mx-auto">
        <div className="flex flex-col w-full gap-6 px-5 py-20 md:flex-row md:gap-12 md:px-20">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 2000,
                jump: true,
              }),
            ]}
            className="w-full md:w-1/3"
          >
            <CarouselContent>
              <CarouselItem>
                <Image
                  src={aboutPhoto}
                  alt="about photo"
                  className="rounded-xl"
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  src={aboutPhoto2}
                  alt="about photo"
                  className="rounded-xl"
                />
              </CarouselItem>
            </CarouselContent>
          </Carousel>

          <div className="w-full md:w-[480px] text-base md:text-lg flex flex-col gap-4 pt-2">
            <p className="font-bold ">
              Hello!, I’m Mejo, a Web developer based in Indonesia , background
              in Informatic Engineering from{" "}
              <span className="underline underline-offset-2">
                <Link href="https://unram.ac.id/en/" target="_blank">
                  Mataram University.
                </Link>
              </span>{" "}
            </p>
            <p>
              I’ve been work in a small agency, innovation center and comunity.
              working with group of team to create easy, usable and data-driven
              products.
            </p>
            <p>
              With a strong focus on UI and UX, I specialize in creating
              experiences that seamlessly connect business strategy with
              customer needs. I showcase my work on social platforms such as{" "}
              <span className="underline underline-offset-2">Instagram</span>,{" "}
              <span className="underline underline-offset-2">Dribbble</span>,{" "}
              and <span className="underline underline-offset-2">Behance</span>.
            </p>
            <p>
              Feel free to react out for collaborations or just a friendly
              hello! 🙌
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="mb-4">
              <h3 className="mb-2 text-2xl font-display">Experience</h3>
              <div className="mb-4 w-full md:w-[400px] bg-white h-[1px]" />
              <div className="flex flex-col gap-4">
                <div>
                  <small>November 2023 - February 2024</small>
                  <p className="text-lg">
                    Technology specialize, Web dev{" "}
                    <span className="text-sm font-bold">/ Scube Center</span>
                  </p>
                </div>
                <div>
                  <small>April 2023 - June 2023</small>
                  <p className="text-lg">
                    Product manager, Frontend web dev{" "}
                    <span className="text-sm font-bold">
                      {" "}
                      / Alterra Academy (Capstone project)
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-4">
              <h3 className="mb-2 text-2xl font-display">Interest</h3>
              <div className="mb-4 w-full md:w-[400px] bg-white h-[1px]" />

              <p className="text-lg">
                Web development, Web3, UI Design, Product Design
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-2xl font-display">Resume</h3>
              <div className="mb-4 w-full md:w-[400px] bg-white h-[1px]" />

              <Link
                href="https://firebasestorage.googleapis.com/v0/b/blogpost-229a5.appspot.com/o/CV_2024_Melki%20Jonathan%20Andara_2.pdf?alt=media&token=a18f32e2-b39e-491d-bebf-e1fc45deab03"
                target="_blank"
                rel="noreferrer"
              >
                <Button>Download</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div id="quotes" className="px-5 bg-primary py-14 md:px-40">
        <div className="max-w-[1520px] mx-auto flex items-start justify-center gap-4">
          <Image
            src={quotesIcon}
            alt="mejo's quote"
            className="max-w-14 md:max-w-fit"
          />
          <p className="text-base text-foreground md:text-lg">
            I don't settle for just making things look pretty, I want users to
            have an experience that feels effortless and engaging.
          </p>
        </div>
      </div>
      <div className="bg-[#373B4C] rounded-b-[40px] md:rounded-b-[80px] ">
        <div
          id="portfolio"
          className="w-full max-w-[1520px] mx-auto text-base md:text-lg px-5 md:px-20 flex flex-col gap-20 md:gap-36 py-20 "
        >
          <div
            // ref={ref}
            className="flex flex-col items-center gap-8 md:flex-row md:gap-12"
          >
            <Image
              //   style={{
              //     transform: isInView ? "none" : "translateX(-200px)",
              //     opacity: isInView ? 1 : 0,
              //     transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              //   }}
              src={portfolio1}
              alt="portfolio1"
              className="w-full md:w-1/2 rounded-xl"
            />
            <div className="w-full">
              <h3 className="font-display text-4xl md:text-[48px] mb-4 md:mb-8 leading-normal">
                Scube Center
              </h3>
              <p className="font-light leading-7">
                S-CUBE Center means 3S, which are SNU, Samick, and
                Sustainability. S-Cube is an innovation center that focuses on
                developing sustainable social empowerment programs in
                technology, education, business, and others.
              </p>
              <div className="flex gap-8 mt-4 mb-6">
                <div>
                  <h5 className="mb-1 text-xl font-bold">Tools</h5>
                  <p>Nextjs, react, tailwind, figma</p>
                </div>
                <div>
                  <h5 className="mb-1 text-xl font-bold">Duration</h5>
                  <p>2 Month</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="https://scube.unram.ac.id/" target="_blank">
                  <Button>Live Preview</Button>
                </Link>
                <Button variant="outline">Study Case</Button>
                <Link
                  href="https://github.com/Melkijo/scube-web"
                  target="_blank"
                >
                  <Button variant="outline">Github</Button>
                </Link>
              </div>
            </div>
          </div>
          <div
            // ref={ref}
            className="flex flex-col items-center gap-8 md:flex-row-reverse md:gap-12"
          >
            <Image
              //   style={{
              //     transform: isInView ? "none" : "translateX(200px)",
              //     opacity: isInView ? 1 : 0,
              //     transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              //   }}
              src={portfolio2}
              alt="portfolio1"
              className="w-full md:w-1/2 rounded-xl"
            />
            <div className="w-full">
              <h3 className="font-display text-4xl md:text-[48px] mb-4 md:mb-8 leading-snug">
                UKM Oikumene
              </h3>
              <p className="font-light leading-7">
                Ukm Oikumene is a Catholic Christian religious organization that
                operates within the University of Mataram. This organization was
                founded with the main aim of becoming a forum for Catholic
                Christian students and students on campus, where they can unite
                in worship together and strengthen their spiritual ties.
              </p>
              <div className="flex gap-8 mt-4 mb-6">
                <div>
                  <h5 className="mb-1 text-xl font-bold">Tools</h5>
                  <p>Nextjs, react, tailwind, figma</p>
                </div>
                <div>
                  <h5 className="mb-1 text-xl font-bold">Duration</h5>
                  <p>2 Month</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="https://ukm-oikumene.vercel.app/" target="_blank">
                  <Button>Live Preview</Button>
                </Link>
                <Link
                  href="https://www.behance.net/gallery/191387851/UKM-Oikumene-Website-Design"
                  target="_blank"
                >
                  <Button variant="outline">Study Case</Button>
                </Link>
                <Link
                  href="https://github.com/Melkijo/oikumene-web"
                  target="_blank"
                >
                  <Button variant="outline">Github</Button>
                </Link>
              </div>
            </div>
          </div>

          <div
            // ref={ref}
            className="flex flex-col items-center gap-8 md:flex-row md:gap-12"
          >
            <Image
              //   style={{
              //     transform: isInView ? "none" : "translateX(-200px)",
              //     opacity: isInView ? 1 : 0,
              //     transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              //   }}
              src={portfolio1}
              alt="portfolio1"
              className="w-full md:w-1/2 rounded-xl"
            />
            <div className="w-full">
              <h3 className="font-display text-4xl md:text-[48px] mb-4 md:mb-8">
                Lagoonbay
              </h3>
              <p className="font-light leading-7">
                Lagoonbay For Tomorrow is an integrated residential area that
                offers exclusive villas and a plaza. With an aesthetic beach
                resort design, this area is strategically located and centrally
                located in the popular tourist destination Lombok Beach.
              </p>
              <div className="flex gap-8 mt-4 mb-6">
                <div>
                  <h5 className="mb-1 text-xl font-bold">Tools</h5>
                  <p>Wordpress, Elementor</p>
                </div>
                <div>
                  <h5 className="mb-1 text-xl font-bold">Duration</h5>
                  <p>2 Month</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="https://www.lagoonbay.id/" target="_blank">
                  <Button>Live Preview</Button>
                </Link>
                <Button variant="outline">Study Case</Button>
                <Button variant="outline" disabled>
                  Github
                </Button>
              </div>
            </div>
          </div>
          <div
            // ref={ref}
            className="flex flex-col items-center gap-8 md:flex-row-reverse md:gap-12"
          >
            <Image
              //   style={{
              //     transform: isInView ? "none" : "translateX(200px)",
              //     opacity: isInView ? 1 : 0,
              //     transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              //   }}
              src={portfolio1}
              alt="portfolio1"
              className="w-full md:w-1/2 rounded-xl"
            />
            <div className="w-full">
              <h3 className="font-display text-4xl md:text-[48px] mb-4 md:mb-8 ">
                BeasiswaKita
              </h3>
              <p className="font-light leading-7">
                We are an educational start-up that operates in the field of
                providing scholarship information. Our vision is to provide
                equal opportunities for everyone to access better education
                through the dissemination of accurate and reliable scholarship
                information.
              </p>
              <div className="flex gap-8 mt-4 mb-6">
                <div>
                  <h5 className="mb-1 text-xl font-bold">Tools</h5>
                  <p>React, tailwind, figma</p>
                </div>
                <div>
                  <h5 className="mb-1 text-xl font-bold">Duration</h5>
                  <p>2 Weeks</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="https://beasiswakita.vercel.app/" target="_blank">
                  <Button>Live Preview</Button>
                </Link>
                <Button variant="outline">Study Case</Button>
                <Button variant="outline">Github</Button>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-display text-4xl md:text-[48px] mb-12 text-center">
              Other work
            </h3>
            <div className="block md:flex justify-center">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-7">
                <Link
                  href="https://www.instagram.com/uimejo/"
                  target="_blank"
                  className=" w-full md:w-[200px]   h-[170px] md:h-[200px] flex justify-center items-center bg-gradient-to-tr from-[#b966ef] via-[#fd1d1d] to-[#fcb045] rounded-2xl"
                >
                  <InstagramIcon width={60} height={60} />
                </Link>
                <Link
                  href="https://dribbble.com/melkijo"
                  target="_blank"
                  className=" w-full md:w-[200px] h-[170px] md:h-[200px] flex justify-center items-center bg-[#EB528D] rounded-2xl"
                >
                  <DribbbleIcon width={60} height={60} />
                </Link>
                <Link
                  href="https://www.behance.net/jonathanandaraa"
                  target="_blank"
                  className=" w-full md:w-[200px] h-[170px] md:h-[200px] flex justify-center items-center bg-[#053EFF] rounded-2xl"
                >
                  <BehanceIcon width={60} height={60} />
                </Link>
                <Link
                  href="https://github.com/Melkijo"
                  target="_blank"
                  className=" w-full md:w-[200px] h-[175px] md:h-[200px] flex justify-center items-center bg-[#24292E] rounded-2xl"
                >
                  <GithubIcon width={90} height={90} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="footer"
        className="w-full md:max-w-[1520px] mx-auto px-5 py-10 md:px-20"
      >
        <h1 className="font-display text-6xl md:text-[100px] leading-snug">
          Let's get in touch!
        </h1>
        <p className="w-full md:w-1/2 text-lg md:text-xl leading-relaxed md:leading-[32px] pt-5 font-light">
          I'd love to hear from you and explore collaboration, answer your
          questions, or simply chat.
        </p>

        <div className="flex flex-row items-start gap-6 my-8 md:gap-10 md:items-center">
          <div className="flex items-center gap-4 md:gap-8 ">
            <Link href="https://www.instagram.com/uimejo/" target="_blank">
              <InstagramIcon width={32} height={32} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/melki-jonathan/"
              target="_blank"
            >
              <LinkedinIcon width={32} height={32} />
            </Link>
          </div>
          <Link href="mailto:melkijonathan2@gmail.com" target="_blank">
            <div className="py-2 border border-white rounded-full md:py-2 px-7 md:px-9 w-fit h-fit">
              <p className="text-lg md:text-xl">hello@mejo.co</p>
            </div>
          </Link>
        </div>
        <div className="w-full h-0.5 bg-white"></div>
        <div className="flex justify-start mt-6 md:justify-end">
          <p>&copy; {year} Build with 💖 by Mejo</p>
        </div>
      </div>
    </>
  );
}
