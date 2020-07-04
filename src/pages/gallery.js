import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Gallery } from "gatsby-theme-gallery"
import {Container, Row, Col} from "react-bootstrap"

const GalleryPage = () => (
  <Layout>
    <SEO title="Галерия" />

    <section className="py-100 bg-white">
      <Container>
        <Row>
          <Col md={12}>
            <Gallery />
          </Col>
        </Row>
      </Container>
    </section>

  </Layout>
)

export default GalleryPage