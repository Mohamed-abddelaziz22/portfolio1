import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import soch from "./images/coding.png";
import soch1 from "./images/19362653.jpg";
import soch2 from "./images/digital-campaign.png";
const Services = () => {
  return (
    <>
      <section className="all-main-Services1">
        <Container>
          <Row className="all-main-ser">
            <h2>الخدمات التي أقدمها</h2>
            <Col lg={4}>
              <img src={soch} alt="" />
              <h3>Static Websites</h3>
              <p>
                تصميم موقعك الالكتروني بسيط ومتوافق مع جميع الشاشات باستخدام
                HTML CSS
              </p>
            </Col>
            <Col lg={4}>
              <img id="imgdinamic" src={soch1} alt="" />
              <h3>Dynamic Websites</h3>
              <p>
                تصميم موقعك الالكتروني ديناميك ورائع وراقي باستخدام HTML CSS
                JAVASCRIBT
              </p>
            </Col>
            <Col lg={4}>
              <img id="imgmarkting" src={soch2} alt="" />
              <h3>Google Ads</h3>
              <p>سوف اقدم لك خدمة اعلانات جوجل لتظهر في محركات البحث الاوله</p>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="all-main3">
        <div className="div-h3-p-butt">
          <h3>طوّر أعمالك من خلال موقع احترافي متجاوب مع جميع الشاشات</h3>
          <p>هل أنت مستعد لتصميم موقعك الالكتروني معي ؟</p>
          <button>تواصل معي</button>
        </div>
      </section>
    </>
  );
};

export default Services;
