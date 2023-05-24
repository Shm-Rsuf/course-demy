import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const AboutPage = () => {
  return (
    <div className="wrapper my-10 min-h-screen lg:w-3/4">
      <h2 className="text-4xl text-center text-teal-400 font-semibold capitalize">
        about me
      </h2>
      <div className="about-me-container my-10 flex flex-col lg:flex-row lg:gap-20 gap-10">
        <div className="about-me-left flex flex-col items-center gap-5 lg:w-2/5 lg:h-[80vh] bg-gray-200 p-2 rounded-md shadow-lg">
          <div className="about-img">
            <Image
              src="https://images.pexels.com/photos/5926389/pexels-photo-5926389.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="developer-image"
              width={320}
              height={320}
              className="w-28 h-28 rounded-full"
            />
          </div>
          <h2 className="text-4xl text-teal-400 font-bold">Hello, I'm Usuf</h2>
          <p className="w-8/12 text-justify">
            I'm a front-end developer, bridging design and technology to create
            engaging digital experiences. Always exploring new technologies.
          </p>

          <div className="socials-links flex justify-center items-center gap-3 mt-10 text-2xl">
            <Link
              className="text-blue-600 hover:text-blue-700 duration-300"
              href="https://www.facebook.com/shmUsuf15"
              target="_blank"
            >
              <span>
                <FaFacebook />
              </span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/shm-usuf/"
              target="_blank"
              className="text-blue-700 hover:text-blue-800 duration-300"
            >
              <span>
                <FaLinkedin />
              </span>
            </Link>
            <Link
              href="https://github.com/Shm-Rsuf"
              target="_blank"
              className="text-gray-900 hover:text-gray-800 duration-300"
            >
              <span>
                <FaGithub />
              </span>
            </Link>
            <Link
              href="https://twitter.com/shm_usuf"
              target="_blank"
              className="text-teal-400 hover:text-teal-500 duration-300"
            >
              <span>
                <FaTwitter />
              </span>
            </Link>
          </div>
        </div>
        <div className="about-me-right flex justify-evenly flex-col gap-5 lg:w-2/4">
          <div className="text-lg text-justify flex flex-col gap-5">
            <p>
              I am a proficient Front-End-Developer with expertise in creating
              dynamic and user-friendly websites and applications. I have a
              great experience with JavaScript, React, Next, and creative design
              with Tailwind. I am able to create efficient, clean code that
              delivers unique outcomes. In addition to my technical expertise.
            </p>
            <p>
              I am also a creative mind with a keen eye for design, enabling me
              to create outstanding and visually appealing web applications.
              With my passion for excellence and dedication to achieving
              success, I am confident that I would be an asset to any team.
            </p>
          </div>

          <Button
            href="https://drive.google.com/drive/u/0/my-drive"
            placeholder="View Resume"
            color="primary"
            size="default"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
