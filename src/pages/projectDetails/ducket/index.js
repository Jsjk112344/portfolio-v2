import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { meta } from "../../../content_option";
import "./style.css";

import ducketImage from '../../../assets/projectImages/ducket.png';

export const DucketProject = () => {
  const projectData = {
    title: "Ducket",
    subtitle: "Blockchain-Based NFT Ticketing Platform - Co-Founded Startup",
    overview: "Ducket is a full-stack NFT ticketing platform built on Polygon that combats ticket scalping through enforced resale price caps via smart contracts. The platform features hybrid payment options (Stripe and crypto wallets), dynamic QR validation, and a multi-tenant architecture serving buyers, organizers, admins, and event scanners from a single codebase.",

    motivation: {
      title: "Why I Built Ducket",
      content: "The live events industry is plagued by ticket scalping, where bots and resellers buy tickets in bulk and resell them at exorbitant markups. Fans miss out on events they love, and artists lose control over pricing. As a co-founder of Ducket, I set out to solve this problem using blockchain technology. By minting tickets as NFTs with smart contract-enforced resale price caps, we created a system where tickets can be freely transferred but never sold above a fair price. This approach protects fans while still allowing legitimate resale, bringing transparency and fairness to event ticketing."
    },

    technologies: [
      {
        name: "React",
        icon: "react",
        description: "Frontend framework with Vite for fast development and optimized production builds"
      },
      {
        name: "TypeScript",
        icon: "typescript",
        description: "Full type safety across frontend, backend, and smart contract interactions"
      },
      {
        name: "Solidity",
        icon: "solidity",
        description: "Smart contract development for ERC-1155 NFT tickets with price cap enforcement"
      },
      {
        name: "Supabase",
        icon: "supabase",
        description: "PostgreSQL backend with 67 Edge Functions, authentication, and real-time subscriptions"
      },
      {
        name: "Stripe",
        icon: "stripe",
        description: "Payment processing with Stripe Connect for organizer payouts and ticket purchases"
      },
      {
        name: "Polygon",
        icon: "polygon",
        description: "Layer 2 blockchain for low-cost, fast NFT minting and ticket transactions"
      }
    ],

    features: [
      {
        title: "NFT Ticket Minting",
        description: "ERC-1155 smart contracts enable flexible ticket tiers with different properties, prices, and supply limits. Each ticket is a unique, verifiable NFT on the Polygon blockchain.",
        icon: "🎫",
        technical: "Solidity smart contracts, Hardhat development, RainbowKit + Wagmi wallet integration"
      },
      {
        title: "Price-Capped Resale",
        description: "Smart contract-enforced maximum resale prices prevent ticket scalping at the protocol level. Tickets can be freely transferred but never sold above the organizer-set price cap.",
        icon: "🛡️",
        technical: "On-chain price validation, resale marketplace with enforced caps, waitlist system"
      },
      {
        title: "Hybrid Payments",
        description: "Support for both traditional credit card payments via Stripe and cryptocurrency wallet payments. Users can purchase tickets regardless of their crypto experience.",
        icon: "💳",
        technical: "Stripe Connect integration, RainbowKit wallet connection, payment queue processing"
      },
      {
        title: "Dynamic QR Validation",
        description: "Rotating QR codes for ticket validation prevent screenshot fraud. Event scanners verify tickets in real-time with anti-tampering mechanisms.",
        icon: "📱",
        technical: "QR code generation and rotation, real-time validation API, scanner session management"
      },
      {
        title: "Multi-Tenant Architecture",
        description: "Single codebase serving four distinct interfaces: buyer app for ticket purchases, organizer dashboard for event management, admin panel for platform oversight, and scanner app for event entry.",
        icon: "🏗️",
        technical: "Role-based routing, shared component library, per-tenant configuration"
      },
      {
        title: "Real-Time Ticket Availability",
        description: "Live ticket availability updates using Supabase Realtime subscriptions. Users see instant updates when tickets sell out or become available through resale.",
        icon: "⚡",
        technical: "Supabase Realtime channels, optimistic UI updates, reservation system with timeouts"
      }
    ],

    challenges: [
      {
        title: "Smart Contract Security",
        description: "Handling real money and NFT assets required bulletproof smart contract logic. A single vulnerability could lead to financial loss or ticket fraud.",
        solution: "Comprehensive testing with Hardhat including unit and integration tests, OpenZeppelin contract patterns, and careful access control implementation"
      },
      {
        title: "Payment Flow Complexity",
        description: "Supporting both fiat (Stripe) and crypto payments while maintaining consistent ticket state across blockchain confirmations and webhook callbacks.",
        solution: "Implemented a robust payment queue system with Supabase Edge Functions, idempotent webhook handlers, and transaction state machines"
      },
      {
        title: "QR Code Anti-Fraud",
        description: "Static QR codes are vulnerable to screenshot sharing, allowing unauthorized entry to events. The validation system needed to prevent this while remaining fast for event entry.",
        solution: "Dynamic QR codes with server-side rotation, time-based validation tokens, and real-time scanner session tracking"
      },
      {
        title: "Multi-Tenant Deployment",
        description: "Serving four distinct applications from a single codebase while maintaining clean separation of concerns, routing, and per-tenant feature flags.",
        solution: "Vite multi-entry configuration with shared component library, feature flag system, and role-based authentication context"
      }
    ],

    technicalHighlights: {
      title: "Technical Implementation Highlights",
      details: [
        {
          category: "Blockchain Integration",
          description: "ERC-1155 smart contracts on Polygon with RainbowKit wallet connection, Wagmi hooks, and automated minting pipelines"
        },
        {
          category: "Backend Architecture",
          description: "67 Supabase Edge Functions handling payments, ticketing, QR management, blockchain operations, and community features"
        },
        {
          category: "Testing Strategy",
          description: "Vitest for unit/integration testing, Playwright for E2E testing, and Hardhat for smart contract testing"
        },
        {
          category: "UI/UX Design",
          description: "Tailwind CSS with shadcn/ui component library built on Radix UI primitives for accessible, consistent interfaces"
        }
      ]
    },

    links: {
      website: "https://ducket.io",
    }
  };

  return (
    <HelmetProvider>
      <div className="project-page">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Ducket - Blockchain NFT Ticketing Platform | {meta.title}</title>
          <meta name="description" content="Ducket: A full-stack NFT ticketing platform on Polygon with enforced resale price caps, hybrid payments, and multi-tenant architecture." />
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
                  <a href={projectData.links.website} className="portfolio-btn" target="_blank" rel="noopener noreferrer">
                    View Website
                  </a>
                </div>
              </div>
              <div className="hero-image-container">
                <div className="hero-image">
                  <img src={ducketImage} alt="Ducket Ticketing Platform" />
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
                <a href={projectData.links.website} className="portfolio-btn" target="_blank" rel="noopener noreferrer">
                  Visit ducket.io
                </a>
              </div>
            </div>
          </div>
        </section>

      </div>
    </HelmetProvider>
  );
};
