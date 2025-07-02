import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";

export const Portfolio = () => {
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
        <div className="mb-5 po_items_ho">
          {dataportfolio.map((data, i) => (
            <div className="po_item" key={i}>
              {/* Project name header - Top cell */}
              <div className="project-name">{data.title}</div>
              
              {/* Image wrapper - Middle cell */}
              <div className="image-wrapper">
                <div className="image-container">
                  <img src={data.img} alt={data.title || `Project ${i + 1}`} />
                  <div className="content">
                    <p>{data.description}</p>
                    <a href={data.link}>View Project</a>
                  </div>
                </div>
              </div>
              
              {/* Tech stack - Bottom cell */}
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