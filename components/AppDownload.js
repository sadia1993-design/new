import React,{memo} from "react";
import Image from "next/image";
import colors from "../styles/colors.module.css";
import fontsize from "../styles/fontsize.module.css";

function AppDownload() {
  return (
    <>
      <section className="mb-5" id="">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="image_wrapper">
              <Image
                  src="/images/app-download-img.png"
                  alt="Picture of the author"
                  width={600}
                  height={650}
                />
              </div>
            </div>
            <div className="col-lg-6  col-md-12 ">
              <div
                className={`d-flex flex-column align-items-left justify-content-center h-100 down-content`}
              >
                <p
                  className={`fw-bolder ${colors.purple} ${fontsize.fontSize18}`}
                >
                  App Download
                </p>
                <h1
                  className={`${colors.title} fw-bolder ${fontsize.fontSize57}`}
                >
                  Fast, Secure Money Transfers
                </h1>
                <p className={` ${colors.title} ${fontsize.fontSize18} py-3`}>
                  Access your account via your mobile phone. View balance,
                  transfer funds, view transactions wherever you are.
                </p>
                <ul className="list-unstyled " style={{ marginBottom: "30px" }}>
                  <li style={{ marginBottom: "15px" }}>
                    <div className="checkWrap d-flex">
                      <Image
                        src="/images/check.png"
                        alt="Picture of the author"
                        width={24}
                        height={24}
                      />
                      <p className="ms-3">Login with fingerprint or Face ID.</p>
                    </div>
                  </li>
                  <li style={{ marginBottom: "15px" }}>
                    <div className="checkWrap d-flex">
                      <Image
                        src="/images/check.png"
                        alt="Picture of the author"
                        width={24}
                        height={24}
                      />
                      <p className="ms-3">Simple few Taps to send money</p>
                    </div>
                  </li>
                  <li style={{ marginBottom: "15px" }}>
                    <div className="checkWrap d-flex">
                      <Image
                        src="/images/check.png"
                        alt="Picture of the author"
                        width={24}
                        height={24}
                      />
                      <p className="ms-3">View transaction history.</p>
                    </div>
                  </li>
                  <li>
                    <div className="checkWrap d-flex">
                      <Image
                        src="/images/check.png"
                        alt="Picture of the author"
                        width={24}
                        height={24}
                      />
                      <p className="ms-3">Get instant App notifications.</p>
                    </div>
                  </li>
                </ul>

                {/* download button */}
                <div className="customBtn">
                  <a href="">
                    <Image
                      src="/images/google-play-btn.png"
                      alt="google-play"
                      width={140}
                      height={48}
                    />
                  </a>
                  <a href="">
                    <Image
                      src="/images/apple-btn.png"
                      alt="google-play"
                      width={140}
                      height={48}
                      className=" mx-3 "
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default memo(AppDownload);
