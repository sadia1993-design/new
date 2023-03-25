import React,{memo} from "react";
import Image from "next/image";
import styles from '@/styles/Home.module.css'
import fontsize from '@/styles/Fontsize.module.css'
import colors from '@/styles/Colors.module.css'

function Payment() {
  return (
    <>
      <section className={styles.payment} id="payment-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 col-md-8 offset-md-2 col-sm-12">
              <div className="text-center mb-5 mobile">
                <p className={`h5 mb-4 ${styles.greenText}`}>High speeds. Low fees. No hassle.</p>
                <h1 className={`text-white mb-4 fw-bolder  ${fontsize.fontSize57} `}>
                  All Your Payments In <br />
                  One Place
                </h1>
                <p className={`text-white w-50 m-auto ${fontsize.fontSize18}`}>
                  Get used to low fees and great exchange rates on international
                  money transfers.Expand your business worldwide
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className={styles.payment_module}>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className={` bg-white rounded-3 text-center px-5 py-5 ${styles.pay_wrapper} `}>
              <Image
                  src="/images/solution-icon/icon1 (1).png"
                  alt="Picture of the author"
                  width={100}
                  height={100}
                />
                <p className={` h5 fw-bold my-4  ${colors.title} `}>Payments</p>
                <p className={`   ${colors.title} `}>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit posuere
                  vel venenatis, eu sit massa. Volutpat massa rhoncus odio.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
            <div className={` bg-white rounded-3 text-center px-5 py-5 ${styles.pay_wrapper} `}>
            <Image
                  src="/images/solution-icon/icon1 (2).png"
                  alt="Picture of the author"
                  width={100}
                  height={100}
                />
                <p className={` h5 fw-bold my-4   ${colors.title} `}>Collections</p>
                <p className={`   ${colors.title} `}>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit posuere
                  vel venenatis, eu sit massa. Volutpat massa rhoncus odio.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
            <div className={` bg-white rounded-3 text-center px-5 py-5 ${styles.pay_wrapper} `}>
            <Image
                  src="/images/solution-icon/icon1 (3).png"
                  alt="Picture of the author"
                  width={100}
                  height={100}
                />
                <p className={` h5 fw-bold  my-4  ${colors.title} `}>Conversions</p>
                <p className={`   ${colors.title} `}>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit posuere
                  vel venenatis, eu sit massa. Volutpat massa rhoncus odio.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
            <div className={` bg-white rounded-3 text-center px-5 py-5 ${styles.pay_wrapper} `}>
            <Image
                  src="/images/solution-icon/icon1 (4).png"
                  alt="Picture of the author"
                  width={100}
                  height={100}
                />
                <p className={` h5 fw-bold my-4   ${colors.title} `}>Global Account</p>
                <p className={`   ${colors.title} `}>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit posuere
                  vel venenatis, eu sit massa. Volutpat massa rhoncus odio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default memo(Payment);
