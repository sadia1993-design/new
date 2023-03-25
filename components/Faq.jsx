import React,{memo} from "react";
import styles from "@/styles/Home.module.css";

function Faq() {
  return (
    <>
      <section className={`  py-lg-2  ${styles.faq_area}`} >
        <div className="container px-lg-5 ">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 col-sm-12">
              <div className={` text-center  pt-lg-5  testimonial-mb`} style={{ marginBottom: '53px'}}>
                <h3 className={styles.howSubTitle} >Frequently Asked Questions</h3>
                <h1 className={styles.howTitle}>
                  If you got questions we
                  <br /> have answer
                </h1>
                <p>We have a list of frequently asked questions about us</p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6 col-sm-12">
              <div className="faqWrap">
                {/* faq */}
                <div className="accordion" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        How to send money online?
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit
                        posuere vel venenatis, eu sit massa. Volutpat massa
                        rhoncus odio feugiat tellus elit massa sed ullamcorper a
                        in.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        How much are money transfer fees?
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit
                        posuere vel venenatis, eu sit massa. Volutpat massa
                        rhoncus odio feugiat tellus elit massa sed ullamcorper a
                        in.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        How to use Paylio?
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit
                        posuere vel venenatis, eu sit massa. Volutpat massa
                        rhoncus odio feugiat tellus elit massa sed ullamcorper a
                        in.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingfour">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapsefour"
                        aria-expanded="false"
                        aria-controls="collapsefour"
                      >
                        How does Paylio protect your money?
                      </button>
                    </h2>
                    <div
                      id="collapsefour"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingfour"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit
                        posuere vel venenatis, eu sit massa. Volutpat massa
                        rhoncus odio feugiat tellus elit massa sed ullamcorper a
                        in.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingfive">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapsefive"
                        aria-expanded="false"
                        aria-controls="collapsefive"
                      >
                        What is the fastest way to send money abroad?
                      </button>
                    </h2>
                    <div
                      id="collapsefive"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingfive"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit
                        posuere vel venenatis, eu sit massa. Volutpat massa
                        rhoncus odio feugiat tellus elit massa sed ullamcorper a
                        in.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12">
              <div className="faqWrap">
                {/* faq */}
                <div className="accordion" id="accordionExampleTwo">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingsix">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapsesix"
                        aria-expanded="false"
                        aria-controls="collapsesix"
                      >
                        How much money can I send?
                      </button>
                    </h2>
                    <div
                      id="collapsesix"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingsix"
                      data-bs-parent="#accordionExampleTwo"
                    >
                      <div className="accordion-body">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit
                        posuere vel venenatis, eu sit massa. Volutpat massa
                        rhoncus odio feugiat tellus elit massa sed ullamcorper a
                        in.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingseven">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseseven"
                        aria-expanded="false"
                        aria-controls="collapseseven"
                      >
                        Are money transfer apps safe?
                      </button>
                    </h2>
                    <div
                      id="collapseseven"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingseven"
                      data-bs-parent="#accordionExampleTwo"
                    >
                      <div className="accordion-body">
                      Lorem ipsum dolor sit amet consectetur adipiscing elit posuere vel venenatis, eu sit massa. Volutpat massa rhoncus odio feugiat tellus elit massa sed ullamcorper a in.
                      </div>
                    </div>
                  </div>
                  
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingeight">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseeight"
                        aria-expanded="false"
                        aria-controls="collapseeight"
                      >
                        Which currency can I send?
                      </button>
                    </h2>
                    <div
                      id="collapseeight"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingeight"
                      data-bs-parent="#accordionExampleTwo"
                    >
                      <div className="accordion-body">
                      Lorem ipsum dolor sit amet consectetur adipiscing elit posuere vel venenatis, eu sit massa. Volutpat massa rhoncus odio feugiat tellus elit massa sed ullamcorper a in.
                      </div>
                    </div>
                  </div>
                  
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingnine">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapsenine"
                        aria-expanded="false"
                        aria-controls="collapsenine"
                      >
                        Cancel transaction
                      </button>
                    </h2>
                    <div
                      id="collapsenine"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingnine"
                      data-bs-parent="#accordionExampleTwo"
                    >
                      <div className="accordion-body">
                      Lorem ipsum dolor sit amet consectetur adipiscing elit posuere vel venenatis, eu sit massa. Volutpat massa rhoncus odio feugiat tellus elit massa sed ullamcorper a in.
                      </div>
                    </div>
                  </div>                   
              
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingten">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseten"
                        aria-expanded="false"
                        aria-controls="collapseten"
                      >
                        Can I send multiple payments?
                      </button>
                    </h2>
                    <div
                      id="collapseten"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingten"
                      data-bs-parent="#accordionExampleTwo"
                    >
                      <div className="accordion-body">
                      Lorem ipsum dolor sit amet consectetur adipiscing elit posuere vel venenatis, eu sit massa. Volutpat massa rhoncus odio feugiat tellus elit massa sed ullamcorper a in.
                      </div>
                    </div>
                  </div>
                </div>
                   
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default memo(Faq);
