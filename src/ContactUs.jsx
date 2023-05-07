import React from "react";
import Nave from "./Nave";
const ContactUs = () => {
  return (
    <>
  
 <section className="sec-back-contact">
    <div className="form-1">
       <form action="">
        <h4 lang="ar">راسلني علي الجيميل </h4>
        <p>ادخل الاسم </p>
         <input type="text" placeholder="Name"/>
         <p>ادخل الايميل</p>
         <input type="email" placeholder="ُEmail"/>
         <p>ادخل الرساله</p>
        < input type="text" placeholder="Message"/>
        <input id="sub" type="submit" />
       </form>
    </div>
    <div className="contact-sochial">
<h2>او تواصل معي من هنا </h2>
<div>
<ul className="all-ul2">
                <p>
                  <a href="https://www.facebook.com/med.oo.3956/" target="_blank">
                    <i class="fa-brands fa-facebook-f"></i>
                  </a>
                </p>
                <p>
                  <a href="https://www.instagram.com/mohamed.abdellaziz/" target="_blank" >
                    <i class="fa-brands fa-instagram"></i>
                  </a>
                </p>
              </ul>

              <div class="all-w">
              <a href="https://wa.me/201068331194" class="elementor-button-link elementor-button elementor-size-lg" role="button">
                          <span class="elementor-button-content-wrapper">
                          <span class="elementor-button-icon elementor-align-icon-right">
                              <i class="fa-brands fa-whatsapp"></i>		</span>
                          <span class="elementor-button-text">راسلنا</span>
                        </span>
                        </a>
                      
          </div>
</div>

    </div>
 </section>
   
    </>
  );
};

export default ContactUs;
