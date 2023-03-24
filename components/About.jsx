import React,{memo} from "react";
import Image from "next/image";
import styles from '@styles/Home.module.css'

function About() {
  
  return (
    <>
      <section id={styles['about']}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 ">
              <div className="text-center" style={{ marginBottom: '53px'}}>
                <h3 className={styles.abtSubTitle}>Send money in a heartbeat</h3>
                <h1 className={styles.abtTitle}>The World At Your <br/> Fingertips</h1>
                <p>
                  Sign up to start saving on international money transfers and
                  currency exchange.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6 ">
              <div className={styles.image_wrapper}>
                <Image
                  src="/images/about.png"
                  alt="Picture of the author"
                  width={948}
                  className={styles.abt_img}
                  height={666}
                  priority
                />
              </div>
            </div>
            <div className="col-lg-6 ">
              <div className={styles.feature_details}>
                {/* .single box */}
                <div className={styles.singlebox}>
                <Image
                  src="/images/about-icon/1 (3).png"
                  alt="Picture of the author"
                  width={100}
                  height={67}
                />
                  <p className=" h5 fw-bold ">Peace of Mind</p>
                  <p className={styles.fontSize18}>Lorem ipsum dolor sit amet consectetur adipiscing elit posuere vel venenatis, eu sit massa. Volutpat massa rhoncus odio.</p>
                </div>

                {/* .single box */}
                <div className={styles.singlebox}>
                <Image
                  src="/images/about-icon/1 (2).png"
                  alt="Picture of the author"
                  width={70}
                  height={68}
                />
                  <p className=" h5 fw-bold ">Business-Ready</p>
                  <p className={styles.fontSize18}>Lorem ipsum dolor sit amet consectetur adipiscing elit posuere vel venenatis, eu sit massa. Volutpat massa rhoncus odio.</p>
                </div>


                {/* .single box */}
                <div className={styles.singlebox}>
                <Image
                  src="/images/about-icon/1 (1).png"
                  alt="Picture of the author"
                  width={67}
                  height={65}
                />
                  <p className=" h5 fw-bold ">100% Transparent</p>
                  <p className={styles.fontSize18}>Lorem ipsum dolor sit amet consectetur adipiscing elit posuere vel venenatis, eu sit massa. Volutpat massa rhoncus odio.</p>
                </div>

                {/* .single box */}
                <div className={styles.singlebox}>
                <Image
                  src="/images/about-icon/1 (4).png"
                  alt="Picture of the author"
                  width={71}
                  height={66}
                />
                  <p className=" h5 fw-bold ">International Network</p>
                  <p className={styles.fontSize18}>Lorem ipsum dolor sit amet consectetur adipiscing elit posuere vel venenatis, eu sit massa. Volutpat massa rhoncus odio.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default memo(About);
