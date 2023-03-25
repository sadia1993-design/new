import React, { useState } from "react";
import Head from "next/head";
import styles from "@/styles/About.module.css";
import Image from "next/image";
import Social from "@/components/Social";
import LocationBox from "@/components/LocationBox";
import { Modal, ModalBody,  ModalHeader } from "reactstrap";

function About() {
  const [modal, setModal] = useState(false);
  return (
    <>
      <Head>
        <title>Paylio - About</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="shortcut icon"
          href="/images/favicon.ico"
          type="image/x-icon"
        />
      </Head>

      <main>
        {/* banner area */}
        <section id={styles["about"]}>
          <div className="container">
            <div className="row">
              <div className="col-lg-10 offset-lg-1 ">
                <div className={`${styles.banner_content} text-center`}>
                  <p>Built for entrepreneurs, by entrepreneurs</p>
                  <h1>
                    The platform built to help businesses achieve their
                    ambitions faster
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* image overlay */}
        <section id={styles["image_overlay"]}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12 ">
                <div className={`${styles.image_content} text-center`}>
                  <div className={styles.video_wrapper}>
                    <Image
                      src="/images/about-popup.png"
                      alt="abt"
                      width={1280}
                      height={600}
                      className={styles.videoWrapImage}
                      priority
                    />
                    <div className={styles.popupIcon}>
                      <Modal
                        size="xl"
                        style={{ top: "150px" }}
                        isOpen={modal}
                        toggle={() => {
                          setModal(!modal);
                        }}
                      >
                        <ModalHeader
                          toggle={() => {
                            setModal(!modal);
                          }}
                        ></ModalHeader>
                        <ModalBody>
                          <iframe
                            width="100%"
                            height="600"
                            src="https://www.youtube.com/embed/tgbNymZ7vqY"
                          ></iframe>
                        </ModalBody>
                        
                      </Modal>
                      <Image
                        src="/images/popup-icon.png"
                        alt="abt"
                        width={30}
                        height={30}
                        className={styles.popupImage}
                        onClick={() => {
                          setModal(true);
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* feature icon */}
        <section id="feature-area" className="mt-lg-5 pt-lg-5">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className={styles.feature_list}>
                  <div className={styles.image_thumb}>
                    <Image
                      src="/images/about/stats-info-icon-1.png"
                      alt="abt"
                      width={30}
                      height={30}
                      className={styles.star1}
                      priority
                    />
                  </div>
                  <p>2000+ employees & 100+ nationalities</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className={styles.feature_list}>
                  <div className={styles.image_thumb}>
                    <Image
                      src="/images/about/stats-info-icon-2.png"
                      alt="abt"
                      width={30}
                      height={30}
                      className={styles.star1}
                      priority
                    />
                  </div>
                  <p>27+ offices around the world</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className={styles.feature_list}>
                  <div className={styles.image_thumb}>
                    <Image
                      src="/images/about/stats-info-icon-3.png"
                      alt="abt"
                      width={30}
                      height={30}
                      className={styles.star1}
                      priority
                    />
                  </div>
                  <p>€303.6 BN billion in processed volume in 2020</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* values section */}
        <section id={styles["value_section"]} className="  pt-lg-5 mt-lg-5 ">
          <div className="container">
            <div className="row ">
              <div className="col-lg-8 offset-lg-2 ">
                <div
                  className={` text-center  sectiontitle ${styles.sectiontitle} `}
                >
                  <h3>Our values</h3>
                  <h1 className="mb-4">
                    The values that drive everything we do
                  </h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur imp adipiscing elit
                    justo aliquet elit sed
                  </p>
                </div>
              </div>
            </div>

            <div className="row mt-5 pt-lg-4">
              <div className="col-lg-6">
                <div className={styles.explotion_box_wrap}>
                  {/* .box */}
                  <div className="box d-flex">
                    <div className={styles.icon_thumb}>
                      <Image
                        src="/images/about/icon/values-icon-1.png"
                        alt="abt"
                        width={80}
                        height={80}
                        className={styles.star1}
                        priority
                      />
                    </div>
                    <div className={styles.icon_content}>
                      <h3>Innovation</h3>
                      <p>
                        Lorem ipsum dolor sit amet consectetur imp adipiscing
                        elit justo aliquet elit sed convallisolo neque aliquam
                        elementum dolr.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className={styles.explotion_box_wrap}>
                  {/* .box */}
                  <div className="box d-flex  ">
                    <div className={styles.icon_thumb}>
                      <Image
                        src="/images/about/icon/values-icon-2.png"
                        alt="abt"
                        width={80}
                        height={80}
                        className={styles.star1}
                        priority
                      />
                    </div>
                    <div className={styles.icon_content}>
                      <h3>Accountability</h3>
                      <p>
                        Lorem ipsum dolor sit amet consectetur imp adipiscing
                        elit justo aliquet elit sed convallisolo neque aliquam
                        elementum dolr.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className={styles.explotion_box_wrap}>
                  {/* .box */}
                  <div className="box d-flex">
                    <div className={styles.icon_thumb}>
                      <Image
                        src="/images/about/icon/values-icon-3.png"
                        alt="abt"
                        width={80}
                        height={80}
                        className={styles.star1}
                        priority
                      />
                    </div>
                    <div className={styles.icon_content}>
                      <h3>Commitment</h3>
                      <p>
                        Lorem ipsum dolor sit amet consectetur imp adipiscing
                        elit justo aliquet elit sed convallisolo neque aliquam
                        elementum dolr.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className={styles.explotion_box_wrap}>
                  {/* .box */}
                  <div className="box d-flex">
                    <div className={styles.icon_thumb}>
                      <Image
                        src="/images/about/icon/values-icon-4.png"
                        alt="abt"
                        width={80}
                        height={80}
                        className={styles.star1}
                        priority
                      />
                    </div>
                    <div className={styles.icon_content}>
                      <h3>Team Work</h3>
                      <p>
                        Lorem ipsum dolor sit amet consectetur imp adipiscing
                        elit justo aliquet elit sed convallisolo neque aliquam
                        elementum dolr.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* team section */}
        <section id={styles["team_section"]} className="  pt-lg-5 mt-lg-5 ">
          <div className="container">
            <div className="row ">
              <div className="col-lg-8 offset-lg-2 ">
                <div
                  className={` text-center  sectiontitle ${styles.sectiontitle} `}
                >
                  <h3>Our team</h3>
                  <h1 className="mb-4">The amazing team behind our company</h1>
                  <p>
                    We are a team of entrepreneurs, payment specialists and
                    blockchain enthusiasts.
                  </p>
                </div>
              </div>
            </div>

            <div className="row mt-5 pt-lg-4">
              <div className="col-lg-4">
                <div className={styles.team_box_wrap}>
                  {/* .box */}
                  <div className={styles.box}>
                    <div className={styles.team_thumb}>
                      <Image
                        src="/images/about/team/team-image-1.png"
                        alt="abt"
                        width={276}
                        height={255}
                        className={styles.team_img}
                        priority
                      />
                    </div>
                    <div className={` ${styles.team_content}`}>
                      <h5>Emily Ellis</h5>
                      <p>CEO &amp; Co-founder</p>
                      <Social
                        style={{ justifyContent: "justify-content-center" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className={styles.team_box_wrap}>
                  {/* .box */}
                  <div className={styles.box}>
                    <div className={styles.team_thumb}>
                      <Image
                        src="/images/about/team/team-image-2.png"
                        alt="abt"
                        width={276}
                        height={255}
                        className={styles.team_img}
                        priority
                      />
                    </div>
                    <div className={` ${styles.team_content}`}>
                      <h5>Leo Nunez</h5>
                      <p>VP of Product</p>
                      <Social
                        style={{ justifyContent: "justify-content-center" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className={styles.team_box_wrap}>
                  {/* .box */}
                  <div className={styles.box}>
                    <div className={styles.team_thumb}>
                      <Image
                        src="/images/about/team/team-image-3.png"
                        alt="abt"
                        width={276}
                        height={255}
                        className={styles.team_img}
                        priority
                      />
                    </div>
                    <div className={` ${styles.team_content}`}>
                      <h5>Ken Moss</h5>
                      <p>Head of Marketing</p>
                      <Social
                        style={{ justifyContent: "justify-content-center" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className={styles.team_box_wrap}>
                  {/* .box */}
                  <div className={styles.box}>
                    <div className={styles.team_thumb}>
                      <Image
                        src="/images/about/team/team-image-4.png"
                        alt="abt"
                        width={276}
                        height={255}
                        className={styles.team_img}
                        priority
                      />
                    </div>
                    <div className={` ${styles.team_content}`}>
                      <h5>Teri Wise</h5>
                      <p>Creative Director</p>
                      <Social
                        style={{ justifyContent: "justify-content-center" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className={styles.team_box_wrap}>
                  {/* .box */}
                  <div className={styles.box}>
                    <div className={styles.team_thumb}>
                      <Image
                        src="/images/about/team/team-image-5.png"
                        alt="abt"
                        width={276}
                        height={255}
                        className={styles.team_img}
                        priority
                      />
                    </div>
                    <div className={` ${styles.team_content}`}>
                      <h5>Billy Roy</h5>
                      <p>VP of Infrastructure</p>
                      <Social
                        style={{ justifyContent: "justify-content-center" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className={styles.team_box_wrap}>
                  {/* .box */}
                  <div className={styles.box}>
                    <div className={styles.team_thumb}>
                      <Image
                        src="/images/about/team/team-image-6.png"
                        alt="abt"
                        width={276}
                        height={255}
                        className={styles.team_img}
                        priority
                      />
                    </div>
                    <div className={` ${styles.team_content}`}>
                      <h5>Emily Ellis</h5>
                      <p>CEO &amp; Co-founder</p>
                      <Social
                        style={{ justifyContent: "justify-content-center" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* location */}
        <section id={styles["location_section"]} className="  pt-lg-5 mt-lg-5 ">
          <div className="container">
            <div className="row ">
              <div className="col-lg-8 offset-lg-2 ">
                <div
                  className={` text-center  sectiontitle ${styles.sectiontitle} `}
                >
                  <h3>Our offices</h3>
                  <h1 className="mb-4">
                    Come and visit our offices around the world
                  </h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit diam
                    malesuada nisl enim phasellus condimentum.
                  </p>
                </div>
              </div>
            </div>

            <div className="row mt-5 pt-3">
              <LocationBox
                src="/images/about/location/location-icon-1.png"
                name="San Francisco"
                email="sanfrancisco@paylio.com"
                phone="(415) 931 - 1616"
                color="#ff97ae"
              />
              <LocationBox
                src="/images/about/location/location-icon-2.png"
                name="New York
"
                color="#5d6df9"
                email="newyork@paylio.com"
                phone="(415) 931 - 1616"
              />
              <LocationBox
                src="/images/about/location/location-icon-3.png"
                name="San Francisco"
                email="london@paylio.com"
                phone="(415) 931 - 1616"
                color="#f8d180"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default About;