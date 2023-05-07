import React from "react";
import { Row, Container, Col } from "react-grid-system";
import pro from "./images/IMG_0827-removebg.png";
import pro3 from "./images/original-03674dd034369cc7394c6698f283f3a2.mp4";
import Nave from "./Nave";
import Form from "react-bootstrap/Form";
const Home = () => {
  // let i = 1
  // const namee ="محمد عبد العزيز | متخصص في برمجة المواقع"
  // const nampro = document.getElementById("nampro")

  // const test = () => { 
    
  //   nampro.innerText=namee.slice(0,i)
  //   i++
  
  // }
  // setInterval(test, 300)
  
  return (
   
    <>
      <main className="all-main">
        <Container>
          <Row>
            <Col lg={6} md={5} sm={6} className="main-img">
              <img id="pro" src={pro} alt="" />
            </Col>

            <Col lg={6} md={7} sm={6} className="main-h1-p-butt">
              <h1 id="nampro">محمد عبد العزيز | متخصص في برمجة المواقع</h1>
              <p>
                بخبرتي في هذا المجال يمكنني تصميم موقعك الخاص بشكل احترافي وبدقة
                عاليا ومتجاوب مع جميع الشاشات . ماذا تنتظر؟ لنتواصل
                ونبدأ العمل سوياً
              </p>
              <a href="#">
                <button >تواصل معي</button>
              </a>

              <ul className="all-ul">
                <li>
                  <a href="https://www.facebook.com/med.oo.3956/" target="_blank">
                    <i class="fa-brands fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/mohamed.abdellaziz/" target="_blank" >
                    <i class="fa-brands fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </main>

      <section className="section1">
        <Container>
          <Row>
            <Col lg={12} className="h1-main2">
              <h2 lang="ar"> المهارات التي امتاز فيها</h2>
            </Col>
            <Col lg={4} className="allmain2-p">
              <p>HTML</p>
            </Col>
            <Col lg={4} className="allmain2-p">
              <p>CSS</p>
            </Col>
            <Col lg={4} className="allmain2-p">
              <p>JAVASCRIBT</p>
            </Col>
            <Col lg={4} className="allmain2-p">
              <p>BOOTSTRAP</p>
            </Col>
            <Col lg={4} className="allmain2-p">
              <p>REACT JS</p>
            </Col>
            <Col lg={4} className="allmain2-p">
              <p>MEDIA QUERY</p>
            </Col>
          </Row>
        </Container>
      </section>
      <Container className="main-vidio-h3">
        <Row className="">
          <Col lg={8} md={9} sm={6} className="div-vedio-h3">
            <video autoPlay muted loop>
              <source src={pro3} />
            </video>
          </Col>
          <Col lg={4} md={3} sm={6} className="div-vedio-h3 ol-1">
            <h3>الموقع سيكون شامل التالي</h3>
            <ul>
              <ol>حجز دومين مجانا </ol>
              <ol>بريد الكتروني باسم نشاطك</ol>
              <ol>متوافق مع محركات البحث</ol>
              <ol>دعم فني مجاني</ol>
              <ol>متوافق مع شاشات الجوال</ol>
            </ul>
          </Col>
        </Row>
      </Container>
      <section className="all-main3">
        <div className="div-h3-p-butt">
          <h3>طوّر أعمالك من خلال موقع احترافي متجاوب مع جميع الشاشات</h3>
          <p>هل أنت مستعد لتصميم موقعك الالكتروني معي ؟</p>
          <button>تواصل معي</button>
        </div>
      </section>












     
      {/* <div className="features">
        <h3>كل التصاميم التي تحتاجها</h3>
        <h6>تصاميم جاهزة لتختار منها</h6>
        <div className="features-list">
          <div className="feature">
            <div className="content">
              <i className="fa-solid fa-earth-asia"></i>
              <h2>الخاصية الأولى</h2>
              <p>
                شرح الخاصية الأولى شرح الخاصية الأولى شرح الخاصية الأولى شرح
                الخاصية الأولى شرح الخاصية الأولى شرح الخاصية الأولى شرح الخاصية
              </p>
            </div>
            <img src="purple-website.jpg" alt="purple website" />
          </div>
          <div className="feature">
            <div className="content">
              <i className="fa-solid fa-earth-asia"></i>
              <h2>الخاصية الثانية</h2>
              <p>
                شرح الخاصية الثانية شرح الخاصية الثانية شرح الخاصية الثانية شرح
                الخاصية الثانية شرح الخاصية الثانية شرح الخاصية الثانية شرح
              </p>
            </div>
            <img src="purple-website.jpg" alt="purple website" />
          </div>
          <div className="feature">
            <div className="content">
              <i className="fa-solid fa-earth-asia"></i>
              <h2>الخاصية الثالثة</h2>
              <p>
                شرح الخاصية الثالثة شرح الخاصية الثالثة شرح الخاصية الثالثة شرح
                الخاصية الثالثة شرح الخاصية الثالثة شرح الخاصية الثالثة شرح
              </p>
            </div>
            <img src="purple-website.jpg" alt="purple website" />
          </div>
        </div> */}
      














      <div id="diag">
        <Form className="form1">
          <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="example@gmail.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
        </Form>
      </div>
    </>
  );
};

export default Home;
