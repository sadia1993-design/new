import React,{memo} from "react";
import Image from "next/image";
import colors from '@/styles/Colors.module.css'
import Link from "next/link";

function Footer() {
  return (
    <>
      <footer className={` pt-150 ${colors.navy} `} id="footer-area">
        <div className="container">
          <div className="footer-top py-4">
            <div className="row align-items-lg-center ">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="footer-widget">
                  <ul className="list-unstyled  d-flex">
                    <li>
                      <Link href="/About">About Us</Link>
                    </li>
                    <li>
                      <a href="">Support</a>
                    </li>
                    <li>
                      <a href="">Fees</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="footer-widget ">
                  <ul className="list-unstyled d-flex justify-content-lg-end pt-sm-3 pt-lg-0">
                    <li>
                      <a href=""  style={{ backgroundColor: '#254398',width: '30px', height:'30px', display:'inlineBlock', lineHeight: '30px', textAlign:'center', borderRadius: '100%' }}>
                          <Image src="/images/icon/facebook.png"  alt="facebook" width={30} height={30} />
                      </a>
                    </li>
                    <li>
                      <a href=""  style={{ backgroundColor: '#037fae',width: '30px', height:'30px', display:'inlineBlock', lineHeight: '30px', textAlign:'center', borderRadius: '100%' }}>
                      <Image src="/images/icon/linkedin.png"  alt="linkedin"  width={30} height={30}/>
                      </a>
                    </li>
                    <li>
                      <a href=""  style={{ backgroundColor: '#55adf4',width: '30px', height:'30px', display:'inlineBlock', lineHeight: '30px', textAlign:'center', borderRadius: '100%' }}>
                      <Image src="/images/icon/instagram.png"  alt="instagram"  width={30} height={30} />
                      </a>
                    </li>
                    <li>
                      <a href="" style={{ backgroundColor: '#55adf4',width: '30px', height:'30px', display:'inlineBlock', lineHeight: '30px', textAlign:'center', borderRadius: '100%' }}>
                      <Image src="/images/icon/twitter.png" alt="twitter"  width={30} height={30} />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom border-top-1 py-4">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="footer-widget mobile-copy ">
                  <p className="text-white fw-bolder  ">Copyright © 2023 Paylio. All Rights Reserved.</p>
                </div>
              </div> 
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="footer-widget">
                  <ul className="list-unstyled  d-flex justify-content-lg-end ">
                    <li>
                      <a href="">Terms</a>
                    </li>
                    <li>
                      <a href="">Privacy</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default memo(Footer);
