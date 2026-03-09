import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { meta } from "../../../content_option";
import "./style.css";

import boopImage from '../../../assets/projectImages/boop.svg';

export const BoopProject = () => {
  const projectData = {
    title: "Boop",
    subtitle: "Real-World Exploration App with NFC Check-ins & Social Discovery",
    overview: "Boop is a mobile application designed for real-world exploration with NFC check-in capabilities. Users discover locations, perform check-ins (called 'boops') at places, collect stamps, earn achievement badges, and connect with friends through a social layer. Built with Expo and React Native, powered by Supabase with PostGIS for geospatial queries.",

    motivation: {
      title: "Why I Built Boop",
      content: "I wanted to create an app that encourages people to explore the world around them in a fun and social way. Traditional location-based apps focus on reviews or navigation, but few gamify the experience of simply showing up and discovering new places. Boop bridges that gap by turning real-world exploration into a collectible, social experience — think Pokémon GO meets a passport stamp book. By combining NFC check-ins, stamp collections, and a friend activity feed, Boop motivates users to get out, explore, and share their adventures with friends."
    },

    technologies: [
      {
        name: "React Native",
        icon: "react",
        description: "Cross-platform mobile development with Expo 54 for native iOS and Android apps"
      },
      {
        name: "TypeScript",
        icon: "typescript",
        description: "Type-safe development with strict typing across the entire codebase"
      },
      {
        name: "Supabase",
        icon: "supabase",
        description: "Backend-as-a-Service with PostgreSQL, authentication, and real-time subscriptions"
      },
      {
        name: "PostGIS",
        icon: "postgresql",
        description: "Geospatial database extension for location-based discovery and proximity searches"
      },
      {
        name: "TanStack Query",
        icon: "reactquery",
        description: "Server state management with caching, background refetching, and optimistic updates"
      },
      {
        name: "Zustand",
        icon: "npm",
        description: "Lightweight client state management for UI state and user preferences"
      }
    ],

    features: [
      {
        title: "Location Discovery",
        description: "Interactive map interface with real-time location browsing powered by PostGIS geospatial search. Users can explore nearby venues, filter by category, and discover hidden gems in their area.",
        icon: "🗺️",
        technical: "React Native Maps, PostGIS spatial queries, geolocation services"
      },
      {
        title: "Check-in System ('Boops')",
        description: "Users can check in at locations with photos, captions, and optional participant tags. Supports both NFC-based and proximity-based check-ins for flexible usage at venues.",
        icon: "📍",
        technical: "NFC integration, camera API, multi-participant tagging system"
      },
      {
        title: "Passport & Stamp Collection",
        description: "Digital passport system where users automatically earn location-specific stamps on their first visit. Collectible stamps create a visual record of places explored, motivating continued discovery.",
        icon: "📘",
        technical: "Relational stamp system, first-visit detection, collection tracking"
      },
      {
        title: "Achievement Badges",
        description: "Badge system tied to user activities and milestones. Earn badges for exploring different categories, reaching check-in streaks, and completing location-based challenges.",
        icon: "🏅",
        technical: "Event-driven badge evaluation, progress tracking, milestone calculations"
      },
      {
        title: "Social & Friends",
        description: "Friend system with pending, accepted, and blocked statuses. Activity feed showing friend boops in real-time, enabling social discovery and shared exploration experiences.",
        icon: "👥",
        technical: "Friendship state machine, real-time feed with Supabase subscriptions"
      },
      {
        title: "Multi-User Boops",
        description: "Support for group check-ins with multiple participants. Tag friends who are with you at a location, creating shared memories and collaborative exploration records.",
        icon: "👫",
        technical: "Multi-participant boop system, user tagging, shared activity records"
      }
    ],

    challenges: [
      {
        title: "Geospatial Query Performance",
        description: "Implementing efficient location-based search across potentially thousands of venues required careful optimization of spatial queries to maintain responsive map interactions.",
        solution: "Leveraged PostGIS spatial indexes and bounding box queries with Supabase RPC functions for sub-second location discovery"
      },
      {
        title: "Real-time Social Feed",
        description: "Building a responsive activity feed that updates in real-time as friends check in at locations, while managing subscription lifecycle and preventing memory leaks.",
        solution: "Implemented Supabase Realtime subscriptions with TanStack Query for intelligent caching and automatic refetching"
      },
      {
        title: "Offline-First Architecture",
        description: "Users exploring new areas may have unreliable connectivity. The app needed to handle check-ins and stamp collection gracefully even without network access.",
        solution: "Used Zustand for optimistic local state updates with background sync when connectivity returns, combined with React Query's retry mechanisms"
      },
      {
        title: "NFC Check-in Reliability",
        description: "NFC hardware varies significantly across Android devices, making consistent check-in experiences challenging to deliver across the device ecosystem.",
        solution: "Implemented fallback proximity-based check-ins alongside NFC, with graceful degradation and clear user feedback for each method"
      }
    ],

    technicalHighlights: {
      title: "Technical Implementation Highlights",
      details: [
        {
          category: "State Architecture",
          description: "Dual state management with TanStack React Query for server state and Zustand for client state, ensuring clear separation of concerns"
        },
        {
          category: "Database Design",
          description: "Relational PostgreSQL schema with PostGIS extensions, supporting profiles, locations, boops, stamps, badges, and friendships"
        },
        {
          category: "Mobile UX",
          description: "Smooth animations with Moti and Reanimated 4, file-based routing with Expo Router, and NativeWind for Tailwind-style styling"
        },
        {
          category: "Form Handling",
          description: "React Hook Form with Zod validation for type-safe form management across check-in flows and profile editing"
        }
      ]
    },

    links: {
      github: "#",
    }
  };

  return (
    <HelmetProvider>
      <div className="project-page">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Boop - Real-World Exploration App | {meta.title}</title>
          <meta name="description" content="Boop: A mobile app for real-world exploration with NFC check-ins, stamp collections, achievement badges, and social discovery." />
        </Helmet>

        {/* Hero Section */}
        <section className="project-hero">
          <div className="container">
            <div className="hero-grid">
              <div className="hero-content">
                <h1 className="project-title">{projectData.title}</h1>
                <p className="project-subtitle">{projectData.subtitle}</p>
                <p className="project-overview">{projectData.overview}</p>

                <div className="hero-buttons">
                  <a href={projectData.links.github} className="portfolio-btn" target="_blank" rel="noopener noreferrer">
                    View on GitHub
                  </a>
                </div>
              </div>
              <div className="hero-image-container">
                <div className="hero-image">
                  <img src={boopImage} alt="Boop Mobile App Interface" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Motivation Section */}
        <section className="project-section">
          <div className="container">
            <div className="section-content-wrapper">
              <h2 className="section-title">{projectData.motivation.title}</h2>
              <div className="section-content">
                <p>{projectData.motivation.content}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="project-section">
          <div className="container">
            <h2 className="section-title text-center">Technologies & Tools</h2>
            <div className="tech-grid">
              {projectData.technologies.map((tech, index) => (
                <div key={index} className="tech-card">
                  <img
                    src={`https://cdn.simpleicons.org/${tech.icon}`}
                    alt={tech.name}
                    className="tech-card-icon"
                  />
                  <h4 className="tech-card-title">{tech.name}</h4>
                  <p className="tech-card-description">{tech.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="project-section">
          <div className="container">
            <h2 className="section-title text-center">Key Features & Implementation</h2>
            <div className="features-grid">
              {projectData.features.map((feature, index) => (
                <div key={index} className="feature-card">
                  <div className="feature-icon">{feature.icon}</div>
                  <h4 className="feature-title">{feature.title}</h4>
                  <p className="feature-description">{feature.description}</p>
                  <div className="feature-technical">{feature.technical}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Challenges Section */}
        <section className="project-section">
          <div className="container">
            <div className="challenges-wrapper">
              <h2 className="section-title text-center">Technical Challenges & Solutions</h2>
              <div className="challenges-list">
                {projectData.challenges.map((challenge, index) => (
                  <div key={index} className="challenge-item">
                    <h4 className="challenge-title">{challenge.title}</h4>
                    <p className="challenge-description">{challenge.description}</p>
                    <div className="challenge-solution">
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
              <h2 className="section-title text-center">{projectData.technicalHighlights.title}</h2>
              <div className="technical-grid">
                {projectData.technicalHighlights.details.map((detail, index) => (
                  <div key={index} className="technical-card">
                    <div className="technical-category">{detail.category}</div>
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
              <h2 className="cta-title">Interested in the project?</h2>
              <p className="cta-description">
                Explore the complete source code, documentation, and implementation details on GitHub.
              </p>
              <div className="cta-buttons">
                <a href={projectData.links.github} className="btn-primary" target="_blank" rel="noopener noreferrer">
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
