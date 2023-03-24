import React,{memo} from "react";
import Image from "next/image";
import styles from '../styles/home.module.css'
import colors from '../styles/colors.module.css'


function HowWorks() {
  return (
    <>
      <section id={styles["howarea"]}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 col-sm-12">
              <div className="text-center" style={{ marginBottom: '53px'}}>
                <h3 className={styles.howSubTitle}>How it works?</h3>
                <h1 className={styles.howTitle}>Just few steps to start</h1>
                <p>It&apos;s easier than you think. Follow 3 simple easy steps</p>
              </div>
            </div>
          </div>

          <div className="row mt-3  ">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className={styles.singleItem}>
                <Image
                  src="/images/how-works/how-works-icon-1.png"
                  alt="Picture of the author"
                  width={51}
                  height={59}
                />
                  <p className={` h5 fw-bold  my-4  ${colors.title} `}>Register for free</p>
                  <p className={colors.title} >Simply sign up online for free and verify your identity</p>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className={styles.singleUpItem}>    
              <Image
                  src="/images/how-works/how-works-icon-2.png"
                  alt="Picture of the author"
                  width={60}
                  height={60}
                />
                  <p className={` h5 fw-bold  my-4  ${colors.title} `}>Set up your transfer</p>
                  <p className={`   ${colors.title} `}>Add a recipient&apos;s details and choose which currency ...</p>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className={styles.singleItem}>
              <Image
                  src="/images/how-works/how-works-icon-3.png"
                  alt="Picture of the author"
                  width={63}
                  height={58}
                />
                  <p className={` h5 fw-bold  my-4  ${colors.title} `}>Make your payment</p>
                  <p className={`   ${colors.title} `}>Send us your funds with a bank transfer and we&apos;ll notify..</p>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12" >
              <div className="">
              <Image
                  src="/images/how-works/how-works-icon-4.png"
                  alt="Picture of the author"
                  width={60}
                  height={60}
                />
                  <p className={` h5 fw-bold  my-4  ${colors.title} `}>You&apos;re all done!</p>
                  <p className={`   ${colors.title} `}>We inform you when the money has been sent and can also ...</p>
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default memo(HowWorks);
