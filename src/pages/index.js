import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import CImage from "../components/careImage"
import SImage from "../components/sportImage"
import SEO from "../components/seo"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
// import Button from "react-bootstrap/Button"
import scrollTo from "gatsby-plugin-smoothscroll"
import funSVG from "../images/fun.svg"
import fileZayavlenie from "../files/zaqvlenie.pdf"

const IndexPage = () => (
  <Layout>
    <SEO title="Начало" />

    <div className="landing-bg">
          <svg width="1055" height="816" viewBox="0 0 1055 816" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g>
                  <path d="M980.117 43.3561C760.753 -143.171 438.958 -230.934 239.552 -191.871C37.5016 -131.657 -150.987 30.648 -198.323 233.977C-220.924 430.654 -15.0365 823.752 416.185 815.052C642.884 797.994 829.155 556.2 979.094 367.028C1083.57 228.178 1074.02 133.933 980.117 43.3561Z" fill="#FFFAF0"/>
              </g>
          </svg>
      </div>
    <section className="landing d-flex align-items-center justify-content-center pt-80">
        <Container className="mw-1200 px-3">
            <Row className="align-items-center justify-content-center">
                <Col md={12} lg={{ span: 8, order:12 }} >
                    <div className="mx-auto" style={{ maxWidth: `550px` }}>
                        <Image />
                    </div>
                </Col>
                <Col md={12} lg={{ span: 4, order:1 }} className="text-center text-lg-left">
                    <h1 className="mt-5 mt-lg-0">
                        <span className="play">Игра</span>,
                        <span className="learn"> Обучение</span>
                        <br/> и
                        <span className="fun"> Развлечение.</span>
                    </h1>
                    <p className="px-4 pl-lg-0 pr-lg-5 mb-lg-4">Ние ще добавим и малко магия в живота на малчуганите</p>
                    <a href={fileZayavlenie} target="_blank" rel="noreferrer" className="btn btn-sign-up bg-green">Запиши се</a>
                    <div onClick={() => scrollTo('#more')} onKeyDown={() => scrollTo('#more')} role="button" tabIndex={0} className="mt-2 mt-lg-0 ml-lg-4 d-block d-lg-inline-block">Виж още</div>
                </Col>
            </Row>
        </Container>
    </section>

    <section id="more" className="pt-80 pb-40 pb-lg-80">
        <Container className="mw-1200">
            <Row data-sal="slide-up" data-sal-duration="1000">
                <Col sm={12}>
                    <div className="text-center mb-40">
                        <h2 className="text-primary font-weight-bold">Нашите услуги</h2>
                        <p>Всички грижи за вашето дете</p>
                    </div>
                </Col>
                <Col sm={12} md={4} className="text-center px-lg-20">
                    <div className="image-wrapper mb-3">
                        <svg width="100" height="98" viewBox="0 0 100 98" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M62.2 4.01755C61.2 4.01755 60.3 4.11555 59.4 4.31155C58.8 3.33155 57.3 1.76355 54.5 1.76355C52.9 1.76355 51.8 2.35155 50.9 3.13555C50.7 3.03755 50.4 2.93955 50 2.93955C49.6 2.93955 49.4 3.03755 49.1 3.13555C48.3 2.35155 47.1 1.76355 45.5 1.76355C42.7 1.76355 41.3 3.33155 40.6 4.31155C39.7 4.11555 38.7 4.01755 37.8 4.01755C33.2 4.01755 30.2 8.03555 30.2 11.8576C30.2 13.2296 30.6 14.4056 31.4 15.2876C32 15.9736 33.2 16.8556 35.1 16.8556C35.6 16.8556 36.2 16.6596 36.9 16.4636C39.2 15.6796 43.1 14.3076 48 18.6196V23.7156C41.4 24.1076 33.8 26.9496 33.8 40.9636C33.8 45.5696 36.8 59.9756 39.6 71.1476C45.9 96.3336 48.3 96.3336 50 96.3336C51.7 96.3336 54 96.3336 60.3 71.1476C63.1 59.8776 66.1 45.5696 66.1 40.9636C66.1 40.5716 66.1 40.2776 66.1 39.8856C65.7 26.7536 58.8 24.1076 52 23.7156V18.6196C56.9 14.4056 60.8 15.6796 63.1 16.5616C63.8 16.8556 64.4 16.9536 64.9 16.9536C66.9 16.9536 68 16.0716 68.6 15.3856C69.4 14.5036 69.8 13.3276 69.8 11.9556C69.8 8.03555 66.7 4.01755 62.2 4.01755ZM54.5 3.72355C55.9 3.72355 56.8 4.31155 57.3 4.89955C55.2 5.68355 53.4 6.76155 52 7.74155V4.89955C52.6 4.31155 53.4 3.72355 54.5 3.72355ZM45.5 3.72355C46.6 3.72355 47.4 4.31155 48 4.89955V7.74155C46.6 6.76155 44.7 5.58555 42.7 4.89955C43.2 4.31155 44.1 3.72355 45.5 3.72355ZM41 12.7396C38.8 12.7396 37 13.3276 35.9 13.7196C35.6 13.8176 35.2 14.0136 35.1 14.0136C34.5 14.0136 34 13.8176 33.7 13.5236C33.4 13.1316 33.2 12.6416 33.2 11.9556C33.2 9.89755 34.8 7.05555 37.8 7.05555C42.2 7.05555 46.3 10.0936 48 11.6616V15.0916C45.4 13.2296 43 12.7396 41 12.7396ZM62 37.9256H50C48.9 37.9256 48 38.8076 48 39.8856C48 40.9636 48.9 41.8456 50 41.8456H62.1C61.9 45.4716 60.4 53.2136 58.5 61.7396H50C48.9 61.7396 48 62.6216 48 63.6996C48 64.7776 48.9 65.6596 50 65.6596H57.5C55 76.3416 51.9 87.2196 50 91.2376C48.8 88.7876 47.1 83.4956 45.3 77.2236H48.7C49.8 77.2236 50.7 76.3416 50.7 75.2636C50.7 74.1856 49.8 73.3036 48.7 73.3036H44.2C42.5 66.9336 40.9 59.9756 39.7 54.0956H48.6C49.7 54.0956 50.6 53.2136 50.6 52.1356C50.6 51.0576 49.7 50.1756 48.6 50.1756H38.9C38.2 46.0596 37.7 42.7276 37.7 40.9636C37.7 29.7916 42.4 27.5376 49.9 27.5376C56.7 27.5376 61.1 29.3996 62 37.9256ZM66.3 13.4256C66 13.8176 65.5 13.9156 65 13.9156C64.9 13.9156 64.5 13.7196 64.1 13.6216C62 12.9356 57.4 11.3676 52 14.7976V11.3676C53.7 9.89755 57.8 6.85955 62.2 6.85955C65.2 6.85955 66.8 9.70155 66.8 11.7596C66.8 12.5436 66.6 13.0336 66.3 13.4256Z" fill="#F0770E"/>
                        </svg>
                    </div>
                    <h3>Храна</h3>
                    <p className="mb-40">
                        Храненето е едно от най-важните неща за правилното
                        израстване на вашето дете и ние ще се погрижим
                        те да получат най-добрата храна.
                    </p>
                </Col>
                <Col sm={12} md={4} className="text-center px-lg-20">
                    <div className="image-wrapper mb-3">
                        <svg width="100" height="98" viewBox="0 0 100 98" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M50 13.3271C48.9 13.3271 48 12.4451 48 11.3671V2.5471C48 1.4691 48.9 0.587097 50 0.587097C51.1 0.587097 52 1.4691 52 2.5471V11.3671C52 12.4451 51.1 13.3271 50 13.3271Z" fill="#D71614"/>
                            <path d="M94.4 49.196H85.4C84.3 49.196 83.4 48.314 83.4 47.236C83.4 46.158 84.3 45.276 85.4 45.276H94.4C95.5 45.276 96.4 46.158 96.4 47.236C96.4 48.314 95.5 49.196 94.4 49.196Z" fill="#D71614"/>
                            <path d="M50 19.11C35.6 19.11 22.2 31.458 21.4 45.472C20.9 53.508 24 61.446 29.9 67.032C32.6 69.58 34.1 73.402 34.1 77.322V77.714V85.162V88.004C34.1 93.198 38.4 97.412 43.7 97.412H56.2C61.5 97.412 65.8 93.198 65.8 88.004V77.42C65.8 73.5 67.5 69.678 70.5 66.64C75.7 61.348 78.6 54.39 78.6 47.138C78.6 30.87 66.6 19.11 50 19.11ZM61.9 79.674V83.202H38.1V79.674H61.9ZM56.3 93.492H43.8C40.7 93.492 38.2 91.042 38.2 88.004V87.122H62V88.004C61.9 91.042 59.4 93.492 56.3 93.492ZM67.7 63.896C64.4 67.228 62.4 71.344 62 75.754H38C37.6 71.344 35.7 67.228 32.7 64.288C27.7 59.388 25 52.626 25.4 45.668C26.1 33.81 37.8 23.03 50 23.03C64.3 23.03 74.6 33.124 74.6 47.138C74.6 53.41 72.2 59.388 67.7 63.896Z" fill="#D71614"/>
                            <path d="M14.6 49.196H5.6C4.5 49.196 3.6 48.314 3.6 47.236C3.6 46.158 4.5 45.276 5.6 45.276H14.6C15.7 45.276 16.6 46.158 16.6 47.236C16.6 48.314 15.7 49.196 14.6 49.196Z" fill="#D71614"/>
                            <path d="M67.8 18.424C67.3 18.424 66.8 18.228 66.4 17.836C65.6 17.052 65.6 15.876 66.4 15.092L72.8 8.81999C73.6 8.03599 74.8 8.03599 75.6 8.81999C76.4 9.60399 76.4 10.78 75.6 11.564L69.2 17.836C68.9 18.228 68.3 18.424 67.8 18.424Z" fill="#D71614"/>
                            <path d="M80.7 31.262C80 31.262 79.4 30.968 79 30.38C78.4 29.498 78.7 28.224 79.6 27.636L87.2 22.932C88.1 22.344 89.4 22.638 90 23.52C90.6 24.402 90.3 25.676 89.4 26.264L81.8 30.968C81.4 31.164 81 31.262 80.7 31.262Z" fill="#D71614"/>
                            <path d="M33.2 18.424C32.7 18.424 32.2 18.228 31.8 17.836L25.4 11.564C24.6 10.78 24.6 9.60399 25.4 8.81999C26.2 8.03599 27.4 8.03599 28.2 8.81999L34.6 15.092C35.4 15.876 35.4 17.052 34.6 17.836C34.2 18.228 33.7 18.424 33.2 18.424Z" fill="#D71614"/>
                            <path d="M19.6 31.262C19.2 31.262 18.8 31.164 18.5 30.968L11 26.068C10.1 25.48 9.8 24.206 10.4 23.324C11 22.442 12.3 22.148 13.2 22.736L20.7 27.636C21.6 28.224 21.9 29.498 21.3 30.38C20.8 30.968 20.2 31.262 19.6 31.262Z" fill="#D71614"/>
                        </svg>
                    </div>
                    <h3>Обучение</h3>
                    <p className="mb-40">
                        Предучилищното образование полага основите за учене
                        като осигурява физическото, езиковото, социалното,
                        емоционалното и творческо развитие на децата.
                    </p>
                </Col>
                <Col sm={12} md={4} className="text-center px-lg-20">
                    <div className="image-wrapper mb-3">
                        <img src={funSVG} alt="Fun icon" />
                    </div>
                    <h3>Развлечения</h3>
                    <p className="mb-40">
                        Работата по всички образователни направления се осъществява,
                        чрез похватите на игровата дейност. Песни, танци,
                        куклени театри и етюди, игри на открито са част от развлеченията.
                    </p>
                </Col>
            </Row>
        </Container>
    </section>

    <section id="care" className="care py-40 py-lg-120">
        <Container className="mw-1200">
            <Row>
                <Col sm={12} lg={6} data-sal="slide-up" data-sal-duration="1000">
                    <div className="mx-auto mb-40" style={{ maxWidth: `550px` }}>
                        <CImage />
                    </div>
                </Col>
                <Col sm={12} lg={6} className="pl-lg-40" data-sal="slide-up" data-sal-duration="1000">
                    <h2>Кратка история</h2>
                    <h5 className="mb-20 mb-lg-40">55 години грижа и любов за децата</h5>
                    <p>
                        ДГ № 4 е обединение на три сгради, както следва:
                        „Пролет“ с адрес гр. Димитровград ул. „Капитан Петко войвода“ №
                        19. Открита през 1984 година. „Радост“ с адрес гр. Димитровград ул. „Хр. Смирненски“ № 1.
                        Открита през 1977 година. С. Черногорово с адрес ул. „Крайречна“ № 5. Открита през 1986
                        година. От септември 2017 година директор на ДГ № 4, е Тонка
                        Александрова.
                    </p>
                    <Row>
                        <Col xs={6} className="pr-0">
                            <ul>
                                <li>3 Филиала</li>
                                <li>Над 20 учители</li>
                                <li>10 групи за деца</li>
                            </ul>
                        </Col>
                        <Col xs={6} className="pl-0">
                            <ul>
                                <li>Отопляем басейн</li>
                                <li>Зала за физкултура</li>
                                <li>Парк с площадка</li>
                            </ul>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    </section>

    <section id="fun" className="care py-40 py-lg-120">
          <Container className="mw-1200">
              <Row>
                  <Col sm={12} lg={{ span: 6, order: 12 }} data-sal="slide-up" data-sal-duration="1000">
                      <div className="mx-auto mb-40" style={{ maxWidth: `550px` }}>
                          <SImage />
                      </div>
                  </Col>
                  <Col sm={12} lg={{ span: 6, order: 1 }} data-sal="slide-up" data-sal-duration="1000">
                      <h2>Спорт и изкуство</h2>
                      <h5 className="mb-20 mb-lg-40">Забавление и радост</h5>
                      <p>
                          Имаме физкултурна зала,в която малчуганите могат да играят над 7
                          вида спорт, от които футбол, танци, народна топка. Отопляем
                          басейн, в който децата могат да плуват и да играят забавни игри.
                          Освен това запознаваме децата с чуждите езици. Преподаваме и
                          поддържаме интереса им към английският език.
                      </p>
                      <Row>
                          <Col xs={6} className="pr-0">
                              <ul>
                                  <li>3 Филиала</li>
                                  <li>Над 20 учители</li>
                                  <li>10 групи за деца</li>
                              </ul>
                          </Col>
                          <Col xs={6} className="pl-0">
                              <ul>
                                  <li>Отопляем басейн</li>
                                  <li>Зала за физкултура</li>
                                  <li>Парк с площадка</li>
                              </ul>
                          </Col>
                      </Row>
                  </Col>
              </Row>
          </Container>
      </section>

    <section id="news" className="py-80 py-lg-120">
        <Container className="mw-1200">
            <Row>
                <Col sm={12} lg={6} data-sal="slide-up" data-sal-duration="1000">
                    <div className="mx-auto" style={{ maxWidth: `400px` }}>
                        <Image />
                    </div>
                    <h2 className="mt-20">Новина номер 1</h2>
                    <p>Текст с размер до 30 символа. Текст с размер до 30 символа. Текст с размер до 30 символа.
                        Текст с размер до 30 символа.
                        Текст с размер до 30 символа.
                        Текст с размер до 30 символа.
                    </p>
                </Col>
                <Col sm={12} lg={6} data-sal="slide-up" data-sal-duration="1000">
                    <Row>
                        <Col sm={12} className="d-flex flex-column flex-lg-row mt-20 mt-lg-0">
                            <div className="m-auto" style={{ width: `230px` }}>
                                <Image />
                            </div>
                            <div className="pl-lg-40" style={{ 'flex-shrink': `2`}}>
                                <h2>Новина номер 2</h2>
                                <p>Текст с размер до 30 символа. Текст с размер до 30 символа. Текст с размер до 30 символа.
                                    Текст с размер до 30 символа.
                                    Текст с размер до 30 символа.
                                </p>
                            </div>
                        </Col>
                        <Col sm={12} className="d-flex flex-column flex-lg-row mt-20 mt-lg-0">
                            <div className="m-auto" style={{ width: `230px` }}>
                                <Image />
                            </div>
                            <div className="pl-lg-40" style={{ 'flex-shrink': `2`}}>
                                <h2>Новина номер 3</h2>
                                <p>Текст с размер до 30 символа. Текст с размер до 30 символа. Текст с размер до 30 символа.
                                    Текст с размер до 30 символа.
                                    Текст с размер до 30 символа.
                                </p>
                            </div>
                        </Col>
                        <Col sm={12} className="d-flex flex-column flex-lg-row mt-20 mt-lg-0">
                            <div className="m-auto" style={{ width: `230px` }}>
                                <Image />
                            </div>
                            <div className="pl-lg-40" style={{ 'flex-shrink': `2`}}>
                                <h2>Новина номер 4</h2>
                                <p>Текст с размер до 30 символа. Текст с размер до 30 символа. Текст с размер до 30 символа.
                                    Текст с размер до 30 символа.
                                    Текст с размер до 30 символа.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    </section>

    <section className="bg-beige py-40 py-lg-80"  data-sal="slide-up" data-sal-duration="1000">
          <Container>
              <Row>
                  <Col sm={12}>
                      <div className={"text-center"}>
                          <h2 className="text-dark-purple">Запишете детето си сега</h2>
                          <h5>Детска градина №4</h5>
                          <a href={fileZayavlenie} target="_blank" rel="noreferrer" className="btn btn-sign-up bg-dark-orange text-white mt-20">Заявление</a>
                      </div>
                  </Col>
              </Row>
          </Container>
      </section>

  </Layout>
)

export default IndexPage
