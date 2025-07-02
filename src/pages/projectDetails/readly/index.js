import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import "./style.css";

import readlyImage from '../../../assets/projectImages/readly.png';
import javaLogo from '../../../assets/images/javaimage.svg';

export const ReadlyProject = () => {
  const projectData = {
    title: "Readly",
    subtitle: "Book Logging & Reading Tracker API",
    overview: "Readly is a lightweight backend system built with Spring Boot for logging books, tracking reading progress, and storing personal reading insights. Designed as a learning project, it features clean RESTful APIs and a modular architecture suitable for extension or integration with frontend clients.",

    motivation: {
      title: "Why I Built Readly",
      content: "I created Readly as a personal project to learn Spring Boot and gain hands-on experience building RESTful APIs in Java. I also wanted a lightweight tool to log and track the books I was reading — something simpler than spreadsheets or bloated reading apps. Readly became a way for me to explore backend development while solving a problem I actually faced."
    },

    technologies: [
      { 
        name: "Java", 
        icon: "java", 
        customSrc: javaLogo,
        description: "Main backend language for business logic and API development" 
      },
      { 
        name: "Spring Boot", 
        icon: "spring", 
        description: "Java framework for building production-ready REST APIs quickly" 
      },
      { 
        name: "Maven", 
        icon: "apachemaven", 
        description: "Dependency management and project build tool" 
      },
      { 
        name: "PostgreSQL", 
        icon: "postgresql", 
        description: "Relational database for storing book and user data" 
      },
      { 
        name: "JSON", 
        icon: "json", 
        description: "Data format used for API communication" 
      },
      { 
        name: "Git & GitHub", 
        icon: "git", 
        description: "Version control and code collaboration" 
      }
    ],

    features: [
      {
        title: "Book CRUD API",
        description: "Users can create, update, delete, and retrieve book entries with fields like title, author, genre, and notes.",
        icon: "📘",
        technical: "Spring Boot REST Controllers, DTOs, and service-layer architecture"
      },
      {
        title: "Reading Status Tracker",
        description: "Track books by status: reading, completed, on-hold, or dropped. Easily query books by status.",
        icon: "📊",
        technical: "Enum mapping, filtering via query params"
      },
      {
        title: "User Profiles & History",
        description: "Each user has their own list of books and reading history, stored with timestamps and notes.",
        icon: "👤",
        technical: "Relational mapping with JPA, entity relationships"
      },
      {
        title: "Flexible Search & Filter",
        description: "Search by author, genre, or keywords in book titles and descriptions.",
        icon: "🔍",
        technical: "Custom JPA queries and pagination"
      },
      {
        title: "RESTful API Design",
        description: "All routes follow REST best practices with consistent endpoint design and HTTP status usage.",
        icon: "🔗",
        technical: "REST conventions, exception handling, and HTTP semantics"
      },
      {
        title: "Database Integration",
        description: "Uses PostgreSQL for persistent storage with schema migration support and relational structure.",
        icon: "🗄️",
        technical: "JPA, Spring Data Repositories, and database seeding"
      }
    ],

    challenges: [
      {
        title: "Learning Spring Boot from Scratch",
        description: "As my first real Spring Boot project, understanding how to structure controllers, services, and repositories took time.",
        solution: "Followed documentation and built modular features one at a time to internalize the architecture"
      },
      {
        title: "Relational Mapping with JPA",
        description: "Configuring entity relationships (OneToMany, ManyToOne) caused errors like infinite recursion and lazy loading bugs.",
        solution: "Used DTOs and `@JsonIgnore` to manage entity exposure and prevent circular references"
      },
      {
        title: "Input Validation",
        description: "Needed to ensure users couldn't submit blank or malformed book data via POST/PUT requests.",
        solution: "Added `@Valid`, custom error messages, and centralized exception handlers"
      },
      {
        title: "Database Schema Design",
        description: "Designing a schema that was flexible enough for multiple users but still simple for local deployment.",
        solution: "Kept schema minimal, used normalized structure with room for future expansion (e.g., reviews, tags)"
      }
    ],

    technicalHighlights: {
      title: "Technical Implementation Highlights",
      details: [
        {
          category: "RESTful Architecture",
          description: "Well-structured endpoints using layered architecture: controller → service → repository"
        },
        {
          category: "Entity Management",
          description: "JPA-based model design with DTOs to separate logic and reduce coupling"
        },
        {
          category: "Error Handling",
          description: "Global exception handler with consistent JSON response formatting for all API errors"
        },
        {
          category: "Testability",
          description: "Unit tests for service layer using Mockito and JUnit to ensure logic correctness"
        }
      ]
    },

    links: {
      github: "https://github.com/Jsjk112344/readly.git",
      demo: "#",
      documentation: "#"
    }
  };

  return (
    <HelmetProvider>
      <div className="project-page">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Readly - Book logging API</title>
          <meta name="description" content="Readly: A lightweight API for logging and tracking your reading habits." />
        </Helmet>

        {/* Hero Section */}
        <section className="project-hero">
          <div className="container">
            <div className="hero-grid">
              <div className="hero-content">
                <h1 className="project-title glow-text color_pr">{projectData.title}</h1>
                <p className="project-subtitle color_sec">{projectData.subtitle}</p>
                <p className="project-overview">{projectData.overview}</p>

                <div className="hero-buttons">
                  <a href={projectData.links.github} className="portfolio-btn" target="_blank" rel="noopener noreferrer">
                    View on GitHub
                  </a>
                </div>
              </div>
              <div className="hero-image-container">
                <div className="hero-image neon-border pulse">
                  <img src={readlyImage} alt="Readly Interface" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Motivation Section */}
        <section className="project-section bg_cream">
          <div className="container">
            <div className="section-content-wrapper">
              <h2 className="section-title color_pr">{projectData.motivation.title}</h2>
              <div className="section-content">
                <p>{projectData.motivation.content}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="project-section">
          <div className="container">
            <h2 className="section-title color_pr text-center">Technologies & Tools</h2>
            <div className="tech-grid">
              {projectData.technologies.map((tech, index) => (
                <div key={index} className="tech-card bg_cream neon-border">
                  <img 
                    src={tech.customSrc ? tech.customSrc : `https://cdn.simpleicons.org/${tech.icon}`} 
                    alt={tech.name}
                    className="tech-card-icon"
                  />
                  <h4 className="tech-card-title color_sec">{tech.name}</h4>
                  <p className="tech-card-description">{tech.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="project-section bg_cream">
          <div className="container">
            <h2 className="section-title color_pr text-center">Key Features & Implementation</h2>
            <div className="features-grid">
              {projectData.features.map((feature, index) => (
                <div key={index} className="feature-card bg_accent">
                  <div className="feature-icon">{feature.icon}</div>
                  <h4 className="feature-title color_sec">{feature.title}</h4>
                  <p className="feature-description">{feature.description}</p>
                  <div className="feature-technical color_sec">{feature.technical}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Challenges Section */}
        <section className="project-section">
          <div className="container">
            <div className="challenges-wrapper">
              <h2 className="section-title color_pr text-center">Technical Challenges & Solutions</h2>
              <div className="challenges-list">
                {projectData.challenges.map((challenge, index) => (
                  <div key={index} className="challenge-item bg_cream">
                    <h4 className="challenge-title color_sec">{challenge.title}</h4>
                    <p className="challenge-description">{challenge.description}</p>
                    <div className="challenge-solution bg_accent">
                      <strong>Solution:</strong> {challenge.solution}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Technical Highlights Section */}
        <section className="project-section">
          <div className="container">
            <div className="technical-wrapper">
              <h2 className="section-title color_pr text-center">{projectData.technicalHighlights.title}</h2>
              <div className="technical-grid">
                {projectData.technicalHighlights.details.map((detail, index) => (
                  <div key={index} className="technical-card bg_cream">
                    <div className="technical-category color_sec">{detail.category}</div>
                    <div className="technical-description">{detail.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="project-cta">
          <div className="container">
            <div className="cta-content">
              <h2 className="cta-title color_pr">Interested in the project?</h2>
              <p className="cta-description">
                Explore the complete source code, documentation, and implementation details on GitHub.
              </p>
              <div className="cta-buttons">
                <a href={projectData.links.github} className="portfolio-btn" target="_blank" rel="noopener noreferrer">
                  View Source Code
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </HelmetProvider>
  );
};
