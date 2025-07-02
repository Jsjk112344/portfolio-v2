import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import "./style.css";

// Import your project images - replace these paths with your actual image paths
import pathPilotImage from '../../../assets/projectImages/pathpilot.png';
import projectPoster from '../../../assets/project-details/pathpilot-poster.png';
// import userFlowDiagram from '../../assets/project-details/pathpilot-user-flow.jpg';
// import mapScreenshot from '../../assets/project-details/pathpilot-map.jpg';

export const PathPilotProject = () => {
  const projectData = {
    title: "PathPilot",
    subtitle: "Your Guide to Giving - Mobile Navigation App for Food Delivery Volunteers",
    overview: "PathPilot is a comprehensive mobile navigation app designed to assist food delivery volunteers with intelligent route planning using Google Maps API. The app addresses the critical challenge of volunteers being unfamiliar with delivery locations and provides an integrated solution for efficient meal delivery to beneficiaries through optimized routing, real-time navigation, and emergency support features.",
    
    motivation: {
      title: "Why I Built PathPilot",
      content: "During my active involvement in hall volunteering activities at NUS, I observed a recurring problem: volunteers delivering meals to the elderly often struggled with navigation and route efficiency. The current standard operating procedure involves charitable organizations providing volunteers with basic address lists, leaving them to figure out directions independently using consumer map applications. However, modern map apps like Google Maps don't support multi-location routing via public transport, forcing volunteers to manually compare up to 2 addresses at once to determine optimal paths. This inefficiency not only wastes valuable time but also leads to meals arriving cold and volunteers becoming discouraged. Recognizing this gap, I developed PathPilot as a comprehensive solution to streamline the volunteering process, reduce delivery times, and potentially attract more people to volunteer for such meaningful causes."
    },
    
    technologies: [
      { 
        name: "React Native", 
        icon: "react", 
        description: "Cross-platform mobile development framework for building native iOS and Android apps" 
      },
      { 
        name: "Firebase", 
        icon: "firebase", 
        description: "Backend-as-a-Service for authentication, real-time database, and cloud messaging" 
      },
      { 
        name: "Google Maps API", 
        icon: "googlemaps", 
        description: "Navigation services, route optimization, and real-time location tracking" 
      },
      { 
        name: "SQLite", 
        icon: "sqlite", 
        description: "Local database for offline trip storage and data persistence" 
      },
      { 
        name: "JavaScript ES6+", 
        icon: "javascript", 
        description: "Core programming language with modern async/await patterns" 
      },
      { 
        name: "Git & GitHub", 
        icon: "git", 
        description: "Version control with branching strategy and collaborative development" 
      }
    ],
    
    features: [
      {
        title: "Advanced Route Optimization",
        description: "Implements the Travelling Salesman Problem (TSP) algorithm with dynamic programming optimization to determine the most efficient delivery routes with multiple stops via public transport. Reduces time complexity from O(n!) to O(n² × 2ⁿ) using bitmasking techniques.",
        icon: "🗺️",
        technical: "TSP with Held-Karp algorithm, memoization, and asynchronous distance calculation"
      },
      {
        title: "Intelligent Trip Planning", 
        description: "Users can create, save, and manage delivery routes with persistent storage using SQLite database integration. Features trip history, route modification capabilities, and seamless data synchronization across sessions.",
        icon: "📋",
        technical: "SQLite CRUD operations, JSON serialization, and user authentication integration"
      },
      {
        title: "Real-time Live Navigation",
        description: "Provides turn-by-turn navigation with voice notifications to enable hands-free guidance during deliveries. Updates instructions based on user location and offers polyline visualization for current and complete routes.",
        icon: "🧭",
        technical: "Location services, text-to-speech API, and dynamic polyline rendering"
      },
      {
        title: "Emergency SOS System",
        description: "Comprehensive emergency assistance feature with SOS button, real-time chat support, and standard operating procedures for crisis situations. Includes automated emergency contact notification and location sharing.",
        icon: "🚨",
        technical: "Firebase Cloud Firestore, emergency contact APIs, and geolocation services"
      },
      {
        title: "Smart Task Management",
        description: "Excel integration for importing beneficiary information with automatic parsing and validation. Features task completion tracking, delivery status updates, and beneficiary special requirements management.",
        icon: "✅",
        technical: "SheetJS for Excel parsing, data validation, and local storage management"
      },
      {
        title: "Beneficiary Information Center",
        description: "Comprehensive database with advanced filtering capabilities for beneficiary organizations. Integrates Singapore's FoodConnect.gov data with search functionality and detailed organizational profiles.",
        icon: "👥",
        technical: "API integration, data filtering algorithms, and responsive UI components"
      }
    ],
    
    challenges: [
      {
        title: "Route Optimization Algorithm Complexity",
        description: "The core challenge was implementing an efficient TSP algorithm for multiple delivery stops while maintaining reasonable performance on mobile devices. The naive approach had O(n!) complexity, making it impractical for real-world use.",
        solution: "Implemented Held-Karp algorithm with bitmasking, memoization table, and asynchronous API calls to reduce complexity to O(n² × 2ⁿ)"
      },
      {
        title: "Real-time Location Tracking Balance",
        description: "Balancing accurate location updates with battery efficiency while providing consistent navigation instructions proved challenging. Initial implementations caused rapidly changing instructions that confused users.",
        solution: "Pre-calculated instruction checkpoints with location-based triggers and optimized polling intervals"
      },
      {
        title: "Google Maps API Limitations",
        description: "Google Maps API doesn't support multi-stop routing for public transport, requiring creative workarounds. Had to develop custom route calculation logic that breaks down multi-stop journeys into individual segments.",
        solution: "Custom route segmentation with individual API calls and intelligent route reconstruction"
      },
      {
        title: "Firebase Deployment Configuration",
        description: "Initial plans to use Expo Go for testing encountered significant configuration issues with native modules and dependencies. This required pivoting to Firebase App Distribution for APK deployment.",
        solution: "Migrated to Firebase App Distribution with automated build pipeline for stable deployment"
      }
    ],
    
    technicalHighlights: {
      title: "Technical Implementation Highlights",
      details: [
        {
          category: "Algorithm Design",
          description: "Custom TSP implementation with Held-Karp optimization and bitmasking for efficient route calculation"
        },
        {
          category: "Software Architecture", 
          description: "SOLID principles implementation with modular component design and dependency injection"
        },
        {
          category: "Testing Strategy",
          description: "Comprehensive testing including unit tests with Jest, integration testing, and user acceptance testing"
        },
        {
          category: "Development Practices",
          description: "Agile methodology with Git branching strategy, pull request workflows, and continuous integration"
        }
      ]
    },
    
    links: {
      github: "https://github.com/Jsjk112344/Orbital24PathPilot.git",
      demo: "#",
      documentation: "#"
    }
  };

  return (
    <HelmetProvider>
      <div className="project-page">
        <Helmet>
          <meta charSet="utf-8" />
          <title>PathPilot - Mobile Navigation for Food Delivery Volunteers </title>
          <meta name="description" content="PathPilot: A comprehensive mobile navigation app designed to streamline food delivery volunteering through intelligent route optimization and real-time guidance." />
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
                  <img src={pathPilotImage} alt="PathPilot Mobile App Interface" />
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
                    src={`https://cdn.simpleicons.org/${tech.icon}`} 
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

        {/* Media Gallery Section */}
        <section className="project-section bg_cream">
          <div className="container">
            <h2 className="section-title color_pr text-center">Project Gallery</h2>
            <div className="media-gallery">
              <div className="gallery-item">
                <img src={projectPoster} alt="PathPilot Project Poster" className="gallery-image" />
                <div className="gallery-caption color_pr">Project Overview Poster</div>
              </div>
              {/* <div className="gallery-item">
                <img src={userFlowDiagram} alt="User Flow Diagram" className="gallery-image" />
                <div className="gallery-caption color_pr">User Authentication Flow</div>
              </div>
              <div className="gallery-item">
                <img src={mapScreenshot} alt="Map Interface" className="gallery-image" />
                <div className="gallery-caption color_pr">Live Navigation Interface</div>
              </div> */}
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
                <a href={projectData.links.github} className="btn-primary" target="_blank" rel="noopener noreferrer">
                  View Source Code
                </a>
                {/* <a href={projectData.links.documentation} className="btn-accent">
                  Read Documentation
                </a> */}
              </div>
            </div>
          </div>
        </section>

      </div>
    </HelmetProvider>
  );
};