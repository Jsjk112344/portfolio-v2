import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";

export const Portfolio = () => {
  const featuredProject = dataportfolio.find(p => p.featured);
  const otherProjects = dataportfolio.filter(p => !p.featured);

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Portfolio </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>

        {/* Featured Project - Ducket */}
        {featuredProject && (
          <div className="featured-project mb-5">
            <div className="featured-badge">Featured Startup</div>
            <div className="featured-grid">
              <div className="featured-image">
                <img src={featuredProject.img} alt={featuredProject.title} />
              </div>
              <div className="featured-content">
                <h2 className="featured-title">{featuredProject.title}</h2>
                <p className="featured-description">{featuredProject.description}</p>
                <div className="featured-tech">
                  <span className="tech-label">Built with:</span>
                  {featuredProject.tech?.map((icon, idx) => (
                    <img
                      key={idx}
                      src={
                        icon.customSrc
                          ? icon.customSrc
                          : `https://cdn.simpleicons.org/${icon.name}`
                      }
                      alt={icon.name}
                      title={icon.name}
                      className="tech-icon"
                    />
                  ))}
                </div>
                <a href={featuredProject.link} className="featured-btn">
                  View Project Details
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Other Projects Grid */}
        <h3 className="other-projects-title mb-4">Other Projects</h3>
        <div className="mb-5 po_items_ho">
          {otherProjects.map((data, i) => (
            <div className="po_item" key={i}>
              <div className="project-name">{data.title}</div>
              <div className="image-wrapper">
                <div className="image-container">
                  <img src={data.img} alt={data.title || `Project ${i + 1}`} />
                  <div className="content">
                    <p>{data.description}</p>
                    <a href={data.link}>View Project</a>
                  </div>
                </div>
              </div>
              <div className="tech-icons">
                <span className="tech-label">Built with:</span>
                {data.tech?.map((icon, idx) => (
                  <img
                    key={idx}
                    src={
                      icon.customSrc
                        ? icon.customSrc
                        : `https://cdn.simpleicons.org/${icon.name}`
                    }
                    alt={icon.name}
                    title={icon.name}
                    className="tech-icon"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </HelmetProvider>
  );
};
