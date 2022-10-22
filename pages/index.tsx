import type GetStaticProps from "next";
import Head from "next/head";
import Link from "next/link";

import About from "../components/About";
import ContactMe from "../components/ContactMe";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import WorkExperience from "../components/WorkExperience";

import { Experience, PageInfo, Project, Skill, Social } from "../typings";
import { fetchExperiences } from "../utils/fetchExperiences";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchProjects } from "../utils/fetchProjects";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchSocials } from "../utils/fetchSocials";

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

const Home = ({ pageInfo, experiences, projects, skills, socials }: Props) => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0 overflow-x-hidden scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#0099ff]">
      <Head>
        <title>David Forero - Portafolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* HEADER */}
      <Header socials={socials} />

      {/* HERO */}
      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </section>

      {/* ABOUT */}
      <section className="snap-center" id="about">
        <About pageInfo={pageInfo} />
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="snap-center">
        <WorkExperience experiences={experiences} />
      </section>

      {/* SKILL */}
      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>

      {/* PROJECTS */}
      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>

      {/* CONTAC ME */}
      <section id="contact" className="snap-start">
        <ContactMe />
      </section>

      {/* <footer className="sticky bottom-5">
        <div className="flex items-center justify-center">
          <Link href="#hero">
            <img
              src="https://scontent-mia3-2.xx.fbcdn.net/v/t1.6435-9/104495140_4221166977895288_4958381441344414260_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=174925&_nc_ohc=YwxPajK05YIAX9zwixL&_nc_ht=scontent-mia3-2.xx&oh=00_AT-vBJjgR4jNr8ZtTRlKPfi3AWRYJoDYY-2iCMgcwb4zLw&oe=6356C1DA"
              alt=""
              className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
            />
          </Link>
        </div>
      </footer> */}
    </div>
  );
};

export default Home;

export const getStaticProps = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },
  };
};
