import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  dataabout,
  meta,
  resume,
  resumeDownloadLink,
  certifications,
  skills,
  experience,
} from "../../content_option";

export const About = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">About me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">{dataabout.title}</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p>{dataabout.aboutme}</p>
            </div>
          </Col>
        </Row>
        <Row className=" sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Resume</h3>
          </Col>
          <Col lg="7">

        
        <table className="table caption-top">
          <tbody>
             {resume.map((entry, index) => (
              entry.description && (
                <tr key={index}>
                  <td scope="row">{entry.description}</td>
                  <td>{entry.where}</td>
                  <td>{entry.date}</td>
                </tr>
              )
            ))}
          </tbody>
        </table>
            <a
              href={resumeDownloadLink}
              download
              className="btn btn-primary mt-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume
            </a>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Certifications</h3>
          </Col>
          <Col lg="7">
            <div className="cert-grid">
              {certifications.map((cert, index) => (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={index}
                  className="cert-badge"
                >
                  <img
                    src={cert.img}
                    alt={cert.name}
                    title={cert.name}
                    className="cert-img"
                  />
                </a>
              ))}
            </div>
          </Col>
        </Row>

        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Skills</h3>
          </Col>
          <Col lg="7">
            <div className="skills-grid">
              {skills.map((data, i) => (
                <div key={i} className="skill-item">
                  <img
                    src={`https://cdn.simpleicons.org/${data.icon.replace('simpleicons:', '')}`}
                    alt={data.name}
                    style={{ width: 48, height: 48, marginBottom: 8 }}
                  />
                  <div className="skill-name">{data.name}</div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Experience</h3>
          </Col>
          <Col lg="7">
            {experience.map((data, i) => (
              <div className="service_ py-4" key={i}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <h5 className="service__title" style={{ margin: 0 }}>{data.title}</h5>
                  <span className="service_period" style={{ marginLeft: "1rem"}}>{data.period}</span>
                </div>
                {data.company && <div className="service_company">{data.company}</div>}
                <p className="service_desc">{data.description}</p>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
