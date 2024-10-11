import Image from "next/image";
import styles from "./page.module.css";
import placeholderImg from "@/public/next.svg";
import cert1Img from "@/public/aws-cert-2.png";
import cert2Img from "@/public/aws-cert-1.svg";
import photoImg from "@/public/photo.jpeg";
import CarouselWrapper from "@/components/carousel-wrapper";
import { FaDribbble, FaFigma, FaGithub } from "react-icons/fa";
import { projectsData } from "@/project-info";
import { ComponentPropsWithoutRef } from "react";
import { markInDarkContainer, socialBtnFactory } from "@/components/social-bar";
import { externalLinkProps } from "@/external-link-props";
import AboutMe from "@/markdown/about-me.mdx";
import AboutMeCloud from "@/markdown/about-me-cloud-section.mdx";
import AboutMeFrontend from "@/markdown/about-me-frontend-section.mdx";
import ProjectsDescription from "@/markdown/projects.mdx";
import CTA from "@/markdown/cta.mdx";
import ExternalLink from "@/components/external-link";
import ContactForm from "@/components/contact-form";

export default function Home() {
  // Project section
  const projectItemFactory = (
    title: string,
    description: string,
    key?: string,
    imageProps?: ComponentPropsWithoutRef<typeof Image>,
    blogPostUrl?: string,
    demoUrl?: string,
    dribbbleUrl?: string,
    figmaUrl?: string,
    githubUrl?: string,
  ) => {
    return (
      <div key={key} className={styles.projectsCarouselItem}>
        {/* eslint-disable-next-line jsx-a11y/alt-text */}
        <Image
          src={placeholderImg}
          alt={"Placeholder image."}
          {...imageProps}
          width={800}
          height={600}
          className={styles.projectsCarouselImage}
        />
        <div className={styles.projectsCarouselCaption}>
          <h3>{title}</h3>
          <p>{description}</p>
          <div className={styles.projectsCarouselCaptionInner}>
            {markInDarkContainer(
              <div className={styles.iconBtnBar}>
                {dribbbleUrl
                  ? socialBtnFactory(
                      dribbbleUrl,
                      `View the ${title} project design on JT Ziolo's Dribbble profile.`,
                      FaDribbble,
                    )
                  : null}
                {figmaUrl
                  ? socialBtnFactory(
                      figmaUrl,
                      `View the ${title} project design page on Figma.`,
                      FaFigma,
                    )
                  : null}
                {githubUrl
                  ? socialBtnFactory(
                      githubUrl,
                      `Visit the GitHub repository for the ${title} project to access the source code.`,
                      FaGithub,
                    )
                  : null}
              </div>,
            )}
            {demoUrl || blogPostUrl ? (
              <div className={styles.projectLinkContainer}>
                {demoUrl ? (
                  <ExternalLink {...externalLinkProps} href={demoUrl}>
                    View Demo
                  </ExternalLink>
                ) : null}
                {blogPostUrl ? (
                  <ExternalLink {...externalLinkProps} href={blogPostUrl}>
                    Read Blog Post
                  </ExternalLink>
                ) : null}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    );
  };

  const projectCarouselContents = (
    <>
      {projectsData.map((item) => {
        return projectItemFactory(
          item.title,
          item.description,
          item.description,
          item.imageProps,
          item.blogPostUrl,
          item.demoUrl,
          item.dribbbleUrl,
          item.figmaUrl,
          item.githubUrl,
        );
      })}
    </>
  );

  // Page
  return (
    <main>
      <div id="about" className={styles.noSpacing}></div>
      <div className={`${styles.sectionContainer} sideMargins`}>
        <section className={styles.sectionAbout}>
          <article id="content">
            <h2>About Me</h2>
            <div className={styles.subsectionIntro}>
              <div>
                <AboutMe />
              </div>
              <Image
                src={photoImg}
                width={250}
                height={250}
                alt="Picture of JT Ziolo."
              />
            </div>
          </article>
          <article>
            <AboutMeFrontend />
          </article>
          <section className={styles.subsectionCerts}>
            <article>
              <AboutMeCloud />
            </article>
            <article>
              <Image
                src={cert1Img}
                width={150}
                height={150}
                alt="AWS-Certified SysOps Administrator Associate certification badge."
              />
              <Image
                src={cert2Img}
                width={150}
                height={150}
                alt="AWS-Certified Cloud Practitioner certification badge."
              />
            </article>
          </section>
        </section>
        <section id="projects" className={styles.sectionProjects}>
          <h2>Projects</h2>
          <h5>View examples of my work.</h5>
          <div className={styles.sectionProjectsContent}>
            <ProjectsDescription />
            <CarouselWrapper
              className={styles.projectsCarousel}
              scrollDistance="slide"
              showArrows="always"
              title="Portfolio project showcase in slideshow format."
            >
              {projectCarouselContents}
            </CarouselWrapper>
          </div>
        </section>
        <section id="contact" className={styles.sectionContact}>
          <article>
            <h2>Contact Me</h2>
            <CTA />
            <ContactForm />
          </article>
          {/* <Image
            src={placeholderImg}
            width={600}
            height={400}
            alt="Placeholder"
            style={{ backgroundColor: "black" }}
          /> */}
        </section>
      </div>
    </main>
  );
}
