import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <section className="landing">
        <Container className="min-h-100">
            <Row>
                <Col>
                    <h1>
                        <span className="play">Игра</span>,
                        <span className="learn"> Обучение</span>
                        <br/> и
                        <span className="fun"> Развлечение.</span>
                    </h1>
                </Col>
                <Col>

                </Col>
            </Row>
        </Container>
    </section>

    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page two.</Link>
    <br/>
    <Link to="/about">Go to about.</Link>
  </Layout>
)

export default IndexPage
