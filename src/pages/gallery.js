import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Gallery } from "gatsby-theme-gallery"
import {Container, Row, Col} from "react-bootstrap"

const GalleryPage = () => (
  <Layout>
    <SEO title="Галерия" />

    <section className="pt-120 text-center">
      <h1 className="text-success">Добре Дошли в нашата детска градина!</h1>
      <p>
        Тук може да разгледате снимки от любими мероприятия <br/>
        и различни кътчета от детската градина.
      </p>
    </section>

    <section className="py-100 bg-white">
      <Container>
        <Row>
          <Col md={12} className="px-100">
            <Gallery />
          </Col>
        </Row>
      </Container>
    </section>

  </Layout>
)

export default GalleryPage