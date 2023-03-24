import React,{memo} from "react";
import colors from "../styles/colors.module.css";
import styles from "../styles/home.module.css";
import Carousel from "react-grid-carousel";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

function Testimonial() {
  return (
    <>

      <section
        className={` my-5 py-5 ${colors.lightPurple} `}
        id="testimonial-area"
      >
        <div className="container px-lg-5 ">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <div className={` text-center  pt-5  testimonial-mb`} style={{ marginBottom: '53px'}}>
                <h3 className={styles.howSubTitle}>Testimonials</h3>
                <h1 className={styles.howTitle}>
                  What Our Customers <br />
                  Say
                </h1>
                <p>
                  245m+ happy clients all around the world. Don’t just take our
                  word for it
                </p>
              </div>
            </div>
          </div>
          <div className="row pb-5 mb-5">
            <div className="col-lg-12">
              <div className="slideItem text-center">
                <Carousel
                  cols={2}
                  rows={1}
                  gap={30}
                  loop
                  responsiveLayout={[
                    { breakpoint: 1024, cols: 2, rows: 1, gap: 40, loop: true },
                    { breakpoint: 500, cols: 1, rows: 1, gap: 40, loop: true },
                  ]
                }
                >
                  <Carousel.Item >
                    <div className="starIcon">
                      <FaStar color="#e4ab19" size="24px" />
                      <FaStar color="#e4ab19" size="24px" />
                      <FaStar color="#e4ab19" size="24px" />
                      <FaStar color="#e4ab19" size="24px" />
                      <FaStar color="#e4ab19" size="24px" />
                    </div>
                    <h3
                      style={{
                        fontSize: "24px ",
                        fontWeight: "600",
                        lineHeight: "31px",
                        color: "#0c266c",
                        padding: "23px 0",
                      }}
                    >
                      Great Fast Reliable Service
                    </h3>
                    <p
                      style={{
                        fontSize: "24px ",
                        fontWeight: "400",
                        lineHeight: "36px",
                        color: "#0c266c",
                        marginBottom: "30px",
                      }}
                    >
                      Paylio has always been a reliable solution for my
                      business. I am very satisfied with their speedy service
                      and professional customer care. I highly recommend Paylio
                      to businesses with regular overseas payments.
                    </p>
                    <div className="profile-area d-flex align-items-center justify-content-center">
                      <div className="icon-area">
                        <Image
                          src="/images/team/testimonials-img-1.png"
                          alt="My Image"
                          width={60}
                          height={60}
                        />
                      </div>
                      <div className="text-area ms-4">
                        <h5
                          style={{
                            fontSize: "24px ",
                            fontWeight: "600",
                            lineHeight: "31px",
                            color: "#0c266c",
                            marginBottom: "0",
                          }}
                        >
                          Aspen Press
                        </h5>
                        <p
                          style={{
                            fontSize: "18px ",
                            fontWeight: "400",
                            lineHeight: "30px",
                            color: "#4743c9",
                          }}
                        >
                          Web Designer
                        </p>
                      </div>
                    </div>
                  </Carousel.Item>
                  <Carousel.Item>
                    <div className="starIcon">
                      <FaStar color="#e4ab19" size="24px" />
                      <FaStar color="#e4ab19" size="24px" />
                      <FaStar color="#e4ab19" size="24px" />
                      <FaStar color="#e4ab19" size="24px" />
                      <FaStar color="#e4ab19" size="24px" />
                    </div>
                    <h3
                      style={{
                        fontSize: "24px ",
                        fontWeight: "600",
                        lineHeight: "31px",
                        color: "#0c266c",
                        padding: "23px 0",
                      }}
                    >
                      Great Fast Reliable Service
                    </h3>
                    <p
                      style={{
                        fontSize: "24px ",
                        fontWeight: "400",
                        lineHeight: "36px",
                        color: "#0c266c",
                        marginBottom: "30px",
                      }}
                    >
                      Paylio has always been a reliable solution for my
                      business. I am very satisfied with their speedy service
                      and professional customer care. I highly recommend Paylio
                      to businesses with regular overseas payments.
                    </p>
                    <div className="profile-area d-flex align-items-center justify-content-center">
                      <div className="icon-area">
                        <Image
                          src="/images/team/testimonials-img-1.png"
                          alt="My Image"
                          width={60}
                          height={60}
                        />
                      </div>
                      <div className="text-area ms-4">
                        <h5
                          style={{
                            fontSize: "24px ",
                            fontWeight: "600",
                            lineHeight: "31px",
                            color: "#0c266c",
                            marginBottom: "0",
                          }}
                        >
                          Aspen Press
                        </h5>
                        <p
                          style={{
                            fontSize: "18px ",
                            fontWeight: "400",
                            lineHeight: "30px",
                            color: "#4743c9",
                          }}
                        >
                          Web Designer
                        </p>
                      </div>
                    </div>
                  </Carousel.Item>

                  <Carousel.Item>
                    <div className="starIcon">
                      <FaStar color="#e4ab19" size="24px" />
                      <FaStar color="#e4ab19" size="24px" />
                      <FaStar color="#e4ab19" size="24px" />
                      <FaStar color="#e4ab19" size="24px" />
                      <FaStar color="#e4ab19" size="24px" />
                    </div>
                    <h3
                      style={{
                        fontSize: "24px ",
                        fontWeight: "600",
                        lineHeight: "31px",
                        color: "#0c266c",
                        padding: "23px 0",
                      }}
                    >
                      Great Fast Reliable Service
                    </h3>
                    <p
                      style={{
                        fontSize: "24px ",
                        fontWeight: "400",
                        lineHeight: "36px",
                        color: "#0c266c",
                        marginBottom: "30px",
                      }}
                    >
                      Paylio has always been a reliable solution for my
                      business. I am very satisfied with their speedy service
                      and professional customer care. I highly recommend Paylio
                      to businesses with regular overseas payments.
                    </p>
                    <div className="profile-area d-flex align-items-center justify-content-center">
                      <div className="icon-area">
                        <Image
                          src="/images/team/testimonials-img-1.png"
                          alt="My Image"
                          width={60}
                          height={60}
                        />
                      </div>
                      <div className="text-area ms-4">
                        <h5
                          style={{
                            fontSize: "24px ",
                            fontWeight: "600",
                            lineHeight: "31px",
                            color: "#0c266c",
                            marginBottom: "0",
                          }}
                        >
                          Aspen Press
                        </h5>
                        <p
                          style={{
                            fontSize: "18px ",
                            fontWeight: "400",
                            lineHeight: "30px",
                            color: "#4743c9",
                          }}
                        >
                          Web Designer
                        </p>
                      </div>
                    </div>
                  </Carousel.Item>

                  <Carousel.Item>
                    <div className="starIcon">
                      <FaStar color="#e4ab19" size="24px" />
                      <FaStar color="#e4ab19" size="24px" />
                      <FaStar color="#e4ab19" size="24px" />
                      <FaStar color="#e4ab19" size="24px" />
                      <FaStar color="#e4ab19" size="24px" />
                    </div>
                    <h3
                      style={{
                        fontSize: "24px ",
                        fontWeight: "600",
                        lineHeight: "31px",
                        color: "#0c266c",
                        padding: "23px 0",
                      }}
                    >
                      Great Fast Reliable Service
                    </h3>
                    <p
                      style={{
                        fontSize: "24px ",
                        fontWeight: "400",
                        lineHeight: "36px",
                        color: "#0c266c",
                        marginBottom: "30px",
                      }}
                    >
                      Paylio has always been a reliable solution for my
                      business. I am very satisfied with their speedy service
                      and professional customer care. I highly recommend Paylio
                      to businesses with regular overseas payments.
                    </p>
                    <div className="profile-area d-flex align-items-center justify-content-center">
                      <div className="icon-area">
                        <Image
                          src="/images/team/testimonials-img-1.png"
                          alt="My Image"
                          width={60}
                          height={60}
                        />
                      </div>
                      <div className="text-area ms-4">
                        <h5
                          style={{
                            fontSize: "24px ",
                            fontWeight: "600",
                            lineHeight: "31px",
                            color: "#0c266c",
                            marginBottom: "0",
                          }}
                        >
                          Aspen Press
                        </h5>
                        <p
                          style={{
                            fontSize: "18px ",
                            fontWeight: "400",
                            lineHeight: "30px",
                            color: "#4743c9",
                          }}
                        >
                          Web Designer
                        </p>
                      </div>
                    </div>
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default memo(Testimonial);
