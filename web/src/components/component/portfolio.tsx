/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { X, Github } from "lucide-react";
import SectionWithAnimation from "../common/SectionWithAnimation";
import { createForm } from "@/services/apiServices";

export function Component() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState("");

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await createForm(
        formData.email,
        formData.subject,
        formData.message
      );
      setFormStatus("Thank you! Your message has been sent successfully.");
      setFormData({ email: "", subject: "", message: "" });
    } catch (error: any) {
      setFormStatus(
        `Oops! There was an issue sending your message, ${error.message}`
      );
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {" "}
      {/* Use min-h-screen for full height */}
      <header
        id="top"
        className="w-full border-b border-muted flex items-center justify-between px-4 md:px-6 h-16"
      >
        <Link href="#hero" className="flex items-center gap-2" prefetch={false}>
          <MountainIcon className="h-6 w-6" />
          <span className="text-lg font-semibold">John Doe</span>
        </Link>
        {/* Hamburger menu button for mobile */}
        <button
          onClick={toggleMenu}
          className="md:hidden focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
        {/* Sidebar menu for mobile */}
        <nav
          className={`fixed inset-y-0 left-0 z-50 bg-background w-full h-1/3 md:hidden transform transition-transform ease-in-out duration-300 ${
            menuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="flex items-center justify-between px-4 py-2">
            <Link
              href="#top"
              className="text-sm font-medium"
              onClick={toggleMenu}
              prefetch={false}
            >
              <X className="h-6 w-6" />
            </Link>
            <button
              onClick={toggleMenu}
              className="focus:outline-none"
              aria-label="Close Menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="flex flex-col items-center justify-center h-2/3">
            <Link
              href="#about"
              className="text-sm font-medium py-2 hover:underline"
              onClick={toggleMenu}
              prefetch={false}
            >
              About
            </Link>
            <Link
              href="#experience"
              className="text-sm font-medium py-2 hover:underline"
              onClick={toggleMenu}
              prefetch={false}
            >
              Experience
            </Link>
            <Link
              href="#projects"
              className="text-sm font-medium py-2 hover:underline"
              onClick={toggleMenu}
              prefetch={false}
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium py-2 hover:underline"
              onClick={toggleMenu}
              prefetch={false}
            >
              Contact
            </Link>
          </div>
        </nav>
        {/* Menu items for larger screens */}
        <nav className="hidden md:flex items-center gap-4">
          <Link
            href="#hero"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Home
          </Link>
          <Link
            href="#about"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            About
          </Link>
          <Link
            href="#experience"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Experience
          </Link>
          <Link
            href="#projects"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Projects
          </Link>
          <Link
            href="#contact"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Contact
          </Link>
        </nav>
      </header>
      {/* Hero section */}
      <SectionWithAnimation
        id="hero"
        className="w-full py-12 md:py-24 lg:py-32"
      >
        <div className="container px-4 md:px-6 flex flex-col items-center text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary">
            John Doe
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground">
            Full-Stack Web Developer & Software Engineer
          </p>
          <p className="max-w-[700px] text-primary-foreground">
            I'm a passionate full-stack web developer and software engineer with
            a strong background in building scalable and user-friendly
            applications.
          </p>
          <div className="flex gap-4">
            <Link
              href="https://github.com/Khalil-Bchir"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
              target="_blank"
            >
              <Github className="h-5 w-5 mr-2" />
              My GitHub
            </Link>      {/* Replace the Link with YOUR GITHUB LINK */}
            <Link
              href="#contact"
              className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Contact Me
            </Link>
          </div>
        </div>
      </SectionWithAnimation>
      {/* about section */}
      <SectionWithAnimation
        id="about"
        className="w-full py-12 md:py-24 lg:py-32"
      >
        <div className="container px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">About Me</h2>
            <p>
              I'm a full-stack web developer and software engineer with over 5
              years of experience in the industry. I specialize in building
              scalable and user-friendly web applications using a variety of
              technologies, including React, Node.js, and MongoDB.
            </p>
            <p>
              Throughout my career, I've worked on a diverse range of projects,
              from small business websites to large-scale enterprise
              applications. I am passionate about staying up-to-date with the
              latest industry trends and technologies and am always eager to
              learn new skills and tackle new challenges.
            </p>
          </div>
          <div className="relative rounded-lg overflow-hidden flex justify-center">
            <img
              src="about.jpg"
              width="600"
              height="400"
              alt="About Me"
              className="w-full h-full object-cover transition-all hover:scale-105"
            />
            <div className="absolute inset-0 bg-secondary opacity-50" />
          </div>
        </div>
      </SectionWithAnimation>
      {/* experience section */}
      <SectionWithAnimation
        id="experience"
        className="bg-muted w-full py-12 md:py-24 lg:py-32"
      >
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-8">Experience</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-background rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold">Full-Stack Developer</h3>
              <p className="text-muted-foreground">
                Acme Inc. | 2019 - Present
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>
                  Developed and maintained complex web applications using React,
                  Node.js, and MongoDB.
                </li>
                <li>
                  Collaborated with cross-functional teams to design and
                  implement new features and improvements.
                </li>
                <li>
                  Implemented robust testing frameworks and CI/CD pipelines to
                  ensure code quality and reliability.
                </li>
              </ul>
            </div>
            <div className="bg-background rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold">
                Software Engineer Intern
              </h3>
              <p className="text-muted-foreground">
                Globex Corp. | 2018 - 2019
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>
                  Contributed to the development of a large-scale enterprise
                  application using Angular and .NET Core.
                </li>
                <li>
                  Participated in agile development processes, including sprint
                  planning, code reviews, and retrospectives.
                </li>
                <li>
                  Gained experience in working with cloud-based infrastructure
                  and deployment pipelines.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </SectionWithAnimation>
      {/* projects section */}
      <SectionWithAnimation
        id="projects"
        className="w-full py-12 md:py-24 lg:py-32"
      >
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-8">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-background rounded-lg shadow-sm">
              <img
                src="project 1.jpg"
                width="600"
                height="400"
                alt="Project 1"
                className="rounded-t-lg object-cover w-full h-48 transition-all hover:scale-105"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold">Project 1</h3>
                <p className="text-muted-foreground mb-4">
                  A full-stack web application for managing customer
                  relationships.
                </p>
                <div className="flex flex-col md:flex-row justify-between items-center">
                  <div className="flex gap-2 mb-2 md:mb-0 md:mr-2">
                    <Badge>React</Badge>
                    <Badge>Node.js</Badge>
                    <Badge>MongoDB</Badge>
                  </div>
                  <Link href="#" target="_blank">
                    <Button className="md:inline-block">Check It</Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="bg-background rounded-lg shadow-sm">
              <img
                src="project 2.jpg"
                width="600"
                height="400"
                alt="Project 2"
                className="rounded-t-lg object-cover w-full h-48 transition-all hover:scale-105"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold">Project 2</h3>
                <p className="text-muted-foreground mb-4">
                  A full-stack web application for managing customer
                  relationships.
                </p>
                <div className="flex flex-col md:flex-row justify-between items-center">
                  <div className="flex gap-2 mb-2 md:mb-0 md:mr-2">
                    <Badge>React</Badge>
                    <Badge>Node.js</Badge>
                    <Badge>MongoDB</Badge>
                  </div>
                  <Link href="#" target="_blank">
                    <Button className="md:inline-block">Check It</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWithAnimation>
      {/* form section */}
      <SectionWithAnimation
        id="contact"
        className="bg-muted w-full py-12 md:py-24 lg:py-32"
      >
        <div className="container px-4 md:px-6 max-w-md mx-auto">
          <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
          <form className="grid gap-4" onSubmit={handleSubmit}>
            <Input
              type="email"
              placeholder="Email"
              name="email"
              className="w-full"
              value={formData.email}
              onChange={handleInputChange}
            />
            <Input
              type="text"
              placeholder="Subject"
              name="subject"
              className="w-full"
              value={formData.subject}
              onChange={handleInputChange}
            />
            <Textarea
              placeholder="Message"
              name="message"
              className="w-full"
              rows={5}
              value={formData.message}
              onChange={handleInputChange}
            />
            <Button type="submit" className="w-full">
              Submit
            </Button>
          </form>
          {formStatus && <p className="mt-4 text-center">{formStatus}</p>}
        </div>
      </SectionWithAnimation>
      <footer className="w-full bg-muted py-6 mt-auto">
        <div className="container px-4 md:px-6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-muted-foreground">
            &copy; 2024 John Doe. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/mailing" className="text-sm text-muted-foreground">
              Inbox
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

function MountainIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
