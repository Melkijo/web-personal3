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
export default function Page() {
  return (
    <>
      <Navbar />
      <div className="px-5 md:px-60 flex flex-col items-center">
        <div className="flex flex-col md:flex-row gap-7 mb-20 w-full">
          <Image src={aboutPhoto} alt="Mejo" />
          <div className="w-full md:w-[500px] mt-3 md:mt-10">
            <h1 className="font-display text-3xl md:text-4xl mb-5">
              Hi it's me again 👋
            </h1>

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
              <span className="underline underline-offset-2">Dribbble</span>,
              and <span className="underline underline-offset-2">Behance</span>.
            </p>
            <p>
              Feel free to react out for collaborations or just a friendly
              hello! 🙌
            </p>
            <div className="flex items-center gap-4 md:gap-6  mt-6">
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
        <div className="flex flex-col items-start justify-start w-full mb-12 md:mb-20">
          <h1 className="font-display text-4xl mb-10">Experience</h1>

          {experienceData.map((experience) => (
            <Experience key={experience.place} {...experience} />
          ))}
        </div>
        <div className="flex flex-col items-start justify-start w-full mb-20">
          <h1 className="font-display text-4xl mb-10">Certificates</h1>

          <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
            {certificates.map((certificate) => (
              <Certificate key={certificate.title} {...certificate} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
