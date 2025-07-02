import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { meta } from "../../../content_option";
import "./style.css";

// Import your project images - replace these paths with your actual image paths
import cafeConnectImage from '../../../assets/projectImages/cafeconnect.png';
import architectureDiagram from '../../../assets/project-details/cafeconnect-architecture.png';
import welcomeScreen from '../../../assets/project-details/cafeconnect-welcome.png';
import staffManagement from '../../../assets/project-details/cafeconnect-staff.png';

import javaLogo from '../../../assets/images/javaimage.svg';
import javafxLogo from '../../../assets/images/javafxlogo.png'; 

export const CafeConnectProject = () => {
  const projectData = {
    title: "CaféConnect",
    subtitle: "Comprehensive Café Management System - From Beans to Business",
    overview: "CaféConnect is a streamlined desktop application designed to help café owners manage customers, staff, and drink menus efficiently. Built with Java and JavaFX, it provides both command-line interface (CLI) and graphical user interface (GUI) capabilities for fast-paced café environments, featuring advanced customer loyalty tracking, staff management, and inventory control.",
    
    motivation: {
      title: "Why I Built CaféConnect",
      content: "As a Computer Science student, I constantly seek to find ways to make daily processes more efficient. Having been a barista in a cafe myself, I recognized the need for efficient business management systems in the hospitality industry. Many small café owners struggle with managing customer relationships, staff scheduling, and inventory tracking using disconnected tools. CaféConnect addresses these pain points by providing an integrated solution that combines the speed of command-line operations with the intuitiveness of a graphical interface. The goal was to create a system that café owners could learn quickly and use efficiently during busy periods, while maintaining comprehensive data tracking for business insights."
    },
    
    technologies: [
      { 
        name: "Java", 
        icon: "java", 
        customSrc: javaLogo,
        description: "Core programming language using OOP principles and design patterns" 
      },
      { 
        name: "JavaFX", 
        icon: "javafx", 
        customSrc: javafxLogo,
        description: "Modern UI framework for rich desktop application interfaces" 
      },
      { 
        name: "Jackson", 
        icon: "json", 
        description: "JSON processing library for data serialization and persistence" 
      },
      { 
        name: "JUnit 5", 
        icon: "junit5", 
        description: "Testing framework for comprehensive unit and integration testing" 
      },
      { 
        name: "Gradle", 
        icon: "gradle", 
        description: "Build automation tool for dependency management and deployment" 
      },
      { 
        name: "Git & GitHub", 
        icon: "git", 
        description: "Version control with collaborative development workflow" 
      }
    ],
    
    features: [
      {
        title: "Comprehensive Customer Management",
        description: "Complete customer lifecycle management with detailed profiles including contact information, reward points tracking, visit history, favorite items, and total spending analytics. Supports both detailed commands and quick shortcuts for efficient data entry.",
        icon: "👥",
        technical: "Observer pattern for UI updates, JSON serialization for persistence, command pattern for operations"
      },
      {
        title: "Advanced Staff Management", 
        description: "Full employee management system tracking staff details, roles, shift timings, working hours, and performance ratings. Includes validation for staff IDs and comprehensive staff search capabilities.",
        icon: "👨‍💼",
        technical: "Inheritance hierarchy with Person base class, Builder pattern for object creation"
      },
      {
        title: "Intelligent Drink Catalog",
        description: "Dynamic menu management with categorized drink offerings, pricing controls, and inventory tracking. Integrates seamlessly with customer purchase tracking and loyalty point calculations.",
        icon: "☕",
        technical: "Model-View-Controller architecture with automated price validation and category management"
      },
      {
        title: "Smart Loyalty Points System",
        description: "Automated reward points calculation (10 points per dollar spent) with flexible redemption options (100 points = $1 value). Tracks customer visit frequency and spending patterns for business analytics.",
        icon: "🎯",
        technical: "Business logic layer with mathematical calculations and transaction validation"
      },
      {
        title: "Dual Interface Design",
        description: "Hybrid CLI/GUI interface allowing power users to use fast command-line operations while providing intuitive graphical elements for visual data management. Features tabbed navigation and real-time result display.",
        icon: "💻",
        technical: "Command pattern implementation with parser chain, JavaFX FXML layouts"
      },
      {
        title: "Robust Data Persistence",
        description: "Multi-file JSON storage system with automatic backup and recovery mechanisms. Handles corrupted files gracefully and maintains data integrity across application restarts.",
        icon: "💾",
        technical: "Storage abstraction layer with Jackson JSON adapters and error handling"
      }
    ],
    
    architecture: {
      title: "Software Architecture & Design Patterns",
      description: "CaféConnect follows a modular architecture with clear separation of concerns",
      components: [
        {
          name: "UI Component",
          description: "JavaFX-based interface with welcome screen, tabbed navigation, and command input handling",
          technologies: ["JavaFX", "FXML", "Observer Pattern"]
        },
        {
          name: "Logic Component", 
          description: "Command parsing and execution engine using command pattern for extensible operations",
          technologies: ["Command Pattern", "Parser Chain", "Validation Layer"]
        },
        {
          name: "Model Component",
          description: "Data entities with inheritance hierarchy and business logic for café operations",
          technologies: ["OOP Inheritance", "Builder Pattern", "Data Validation"]
        },
        {
          name: "Storage Component",
          description: "JSON-based persistence with multi-file storage and backup mechanisms",
          technologies: ["Jackson JSON", "File I/O", "Data Adapters"]
        }
      ]
    },
    
    challenges: [
      {
        title: "Command-Line Interface Design",
        description: "Creating an intuitive CLI that café owners could learn quickly while maintaining powerful functionality. The challenge was balancing simplicity with comprehensive feature coverage.",
        solution: "Implemented command aliases (ca for customeradd), parameter validation with clear error messages, and quick shortcuts (qca C001:John:123456) for common operations"
      },
      {
        title: "Data Integrity & Validation",
        description: "Ensuring data consistency across customer IDs, staff IDs, and drink names while preventing duplicate entries and maintaining referential integrity between purchases and menu items.",
        solution: "Built comprehensive validation layer with unique constraints, cross-reference checking, and graceful error handling with user-friendly feedback"
      },
      {
        title: "Dual Interface Synchronization",
        description: "Maintaining synchronization between CLI operations and GUI updates, ensuring that command-line actions immediately reflect in the graphical interface without conflicts.",
        solution: "Implemented Observer pattern with real-time UI updates and centralized model management to ensure consistent state across interfaces"
      },
      {
        title: "Scalable Architecture Design",
        description: "Designing a modular system that could handle growing data sets while maintaining performance and allowing for future feature additions without major refactoring.",
        solution: "Applied SOLID principles with clear component separation, used design patterns like Command and Builder, and implemented efficient data structures for optimal performance"
      }
    ],
    
    results: {
      title: "Development Outcomes & Impact",
      metrics: [
        { label: "Lines of Code", value: "~15,000 LOC" },
        { label: "Test Coverage", value: ">80%" },
        { label: "Features Implemented", value: "25+ commands" },
        { label: "Design Patterns Used", value: "8 patterns" },
        { label: "Performance Target", value: "<1s response time" },
        { label: "Data Capacity", value: "1000+ entries" }
      ],
      feedback: "CaféConnect successfully demonstrates advanced software engineering principles through its clean architecture, comprehensive testing, and user-centered design. The project received positive evaluation for its practical applicability and technical implementation quality.",
      keyAchievements: [
        "Successfully implemented all required features with additional enhancements",
        "Achieved comprehensive test coverage with unit and integration testing",
        "Demonstrated mastery of object-oriented programming and design patterns",
        "Created intuitive dual-interface system balancing efficiency and usability",
        "Built robust data persistence system with backup and recovery capabilities"
      ]
    },
    links: {
      github: "https://github.com/AY2425S2-CS2103T-T08-3/tp.git",
      documentation: "https://ay2425s2-cs2103t-t08-3.github.io/tp/index.html",
      userGuide: "https://ay2425s2-cs2103t-t08-3.github.io/tp/UserGuide.html",
      developerGuide: "https://ay2425s2-cs2103t-t08-3.github.io/tp/DeveloperGuide.html"
    }
  };

  return (
    <HelmetProvider>
      <div className="project-page">
        <Helmet>
          <meta charSet="utf-8" />
          <title>CaféConnect - Comprehensive Café Management System | {meta.title}</title>
          <meta name="description" content="CaféConnect: A comprehensive Java-based café management system combining CLI efficiency with GUI usability for customer, staff, and inventory management." />
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
                  <a href={projectData.links.documentation} className="portfolio-btn" target="_blank" rel="noopener noreferrer">
                    Documentation
                  </a>
                </div>
              </div>
              <div className="hero-image-container">
                <div className="hero-image neon-border pulse">
                  <img src={cafeConnectImage} alt="CaféConnect Desktop Application" />
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
            <h2 className="section-title color_pr text-center">Technologies & Frameworks</h2>
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
            <h2 className="section-title color_pr text-center">Core Features & Capabilities</h2>
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

        {/* Architecture Section */}
        <section className="project-section">
          <div className="container">
            <div className="architecture-wrapper">
              <h2 className="section-title color_pr text-center">{projectData.architecture.title}</h2>
              <p className="architecture-description text-center">{projectData.architecture.description}</p>
              <div className="architecture-grid">
                {projectData.architecture.components.map((component, index) => (
                  <div key={index} className="architecture-card bg_cream neon-border">
                    <h4 className="architecture-name color_sec">{component.name}</h4>
                    <p className="architecture-desc">{component.description}</p>
                    <div className="architecture-tech">
                      {component.technologies.map((tech, idx) => (
                        <span key={idx} className="tech-tag color_pr">{tech}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
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

        {/* Results Section */}
        <section className="project-section">
          <div className="container">
            <div className="results-wrapper">
              <h2 className="section-title color_pr text-center">{projectData.results.title}</h2>
              <div className="results-metrics">
                {projectData.results.metrics.map((metric, index) => (
                  <div key={index} className="metric-card bg_cream neon-border">
                    <div className="metric-value color_pr glow-text">{metric.value}</div>
                    <div className="metric-label color_sec">{metric.label}</div>
                  </div>
                ))}
              </div>
              <div className="results-feedback bg_cream">
                <p>{projectData.results.feedback}</p>
              </div>
              <div className="key-achievements">
                <h4 className="color_sec">Key Achievements:</h4>
                <ul className="achievements-list">
                  {projectData.results.keyAchievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Media Gallery Section */}
        <section className="project-section">
          <div className="container">
            <h2 className="section-title color_pr text-center">Application Screenshots</h2>
            <div className="media-gallery">
              <div className="gallery-item">
                <img src={welcomeScreen} alt="CaféConnect Welcome Screen" className="gallery-image" />
                <div className="gallery-caption color_pr">Welcome Screen Interface</div>
              </div>
              <div className="gallery-item">
                <img src={staffManagement} alt="Staff Management Interface" className="gallery-image" />
                <div className="gallery-caption color_pr">Staff Management System</div>
              </div>
              <div className="gallery-item">
                <img src={architectureDiagram} alt="Architecture Diagram" className="gallery-image" />
                <div className="gallery-caption color_pr">Software Architecture Overview</div>
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
                <a href={projectData.links.userGuide} className="portfolio-btn">
                  User Guide
                </a>
                <a href={projectData.links.developerGuide} className="portfolio-btn">
                  Developer Guide
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </HelmetProvider>
  );
};