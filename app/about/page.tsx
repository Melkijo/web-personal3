import Navbar from "@/components/Navbar";
import aboutPhoto from "@/assets/about-photo.png";
import Image from "next/image";
import Link from "next/link";
import { InstagramIcon, LinkedinIcon } from "@/components/icon";
import { Button } from "@/components/ui/button";
import Experience from "@/components/Experience";
import { experienceData } from "@/data/experienceData";
import Certificate from "@/components/Certificate";
import { certificates } from "@/data/certificateData";
import Footer from "@/components/Footer";
export default function Page() {
  return (
    <>
      <Navbar />

      <div className="max-w-[1520px] mx-auto relative">
        <div className="hidden fixed right-24 top-1/2">
          <div className="w-[120px]">
            <Link href="#about">
              <div className="flex w-full gap-4 justify-end">
                <div className="text-sm">about</div>
                <div className="flex flex-col justify-center items-center">
                  <div className="w-4 h-4 bg-primary rounded-full"></div>
                  <div className="w-0.5 h-12 bg-gray-700"></div>
                </div>
              </div>
            </Link>
            <Link href="#experience">
              <div className="flex gap-4 justify-end">
                <div className="text-sm">experiences</div>
                <div className="flex flex-col justify-center items-center">
                  <div className="w-4 h-4 border border-gray-500  rounded-full"></div>
                  <div className="w-0.5 h-12 bg-gray-700"></div>
                </div>
              </div>
            </Link>
            <Link href="#certificate">
              <div className="flex gap-4 justify-end">
                <div className="text-sm">certificates</div>
                <div className="flex flex-col justify-center items-center">
                  <div className="w-4 h-4 border border-gray-500 rounded-full"></div>
                  {/* <div className="w-1 h-8 bg-white"></div> */}
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="px-5 md:px-72 flex flex-col items-center">
          <div
            id="about"
            className="flex flex-col items-center md:flex-row gap-7 mb-20 w-full"
          >
            <Image src={aboutPhoto} alt="Mejo" />
            <div className="w-full md:w-[500px] mt-3 md:mt-0">
              <h1 className="font-display text-3xl md:text-4xl mb-5">
                Hi it's me again 👋
              </h1>
              <div className="flex flex-col gap-3">
                <p>
                  Clean code is great, but websites need a human touch. That's
                  me, Mejo, a self-taught web developer with a passion for
                  crafting beautiful and functional websites.
                </p>
                <p>
                  I specialize in React and Next.js, but I'm always hungry to
                  learn new tech and elevate my skills. Design is another love
                  of mine, and I thrive on creating user-friendly interfaces
                  that look stunning on any device. Let's build something
                  awesome together!
                </p>
                <p>
                  Interested in learning more about my work, or have a project
                  in mind? Feel free to reach out and connect with me on:
                </p>
              </div>
              <div className="flex items-center gap-4   mt-6">
                <Link href="https://www.instagram.com/uimejo/" target="_blank">
                  <InstagramIcon width={32} height={32} />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/melki-jonathan/"
                  target="_blank"
                >
                  <LinkedinIcon width={32} height={32} />
                </Link>
                <Link
                  href="https://firebasestorage.googleapis.com/v0/b/blogpost-229a5.appspot.com/o/CV_2024_Melki%20Jonathan%20Andara_2.pdf?alt=media&token=a18f32e2-b39e-491d-bebf-e1fc45deab03"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button>Resume</Button>
                </Link>
              </div>
            </div>
          </div>
          <div
            id="experience"
            className="flex flex-col items-start justify-start w-full mb-12 md:mb-12"
          >
            <h1 className="font-display text-4xl mb-10">Experiences</h1>

            {experienceData.map((experience) => (
              <Experience key={experience.place} {...experience} />
            ))}
          </div>
          <div
            id="certificate"
            className="flex flex-col items-start justify-start w-full mb-20"
          >
            <h1 className="font-display text-4xl mb-10">Certificates</h1>

            <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
              {certificates.map((certificate) => (
                <Certificate key={certificate.title} {...certificate} />
              ))}
            </div>
          </div>
        </div>
        <div className="px-5 md:px-20">
          <Footer />
        </div>
      </div>
    </>
  );
}
