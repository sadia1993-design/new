import React,{memo} from "react";
import styles from "@/styles/Home.module.css";

function Banner() {

  return (
    <>
      <section className={styles.bannerarea} style={{ paddingTop: '156px', borderTop: '1px solid #6c6ea6', paddingBottom: '250px'}}>
        <div className="container h-100 ">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className={` banner-content d-flex flex-column align-items-left justify-content-center h-100  `}>
                <p style={{ fontSize: '24px' , color: '#4743c9', fontWeight: '600', lineHeight: '31px'}}>Trusted by over 3M customers</p>
                <h1 style={{ fontSize: '76px' , color: '#0c266c', fontWeight: '700', lineHeight: '99px'}}> 
                  Pay Anyone, <br />
                  Anywhere
                </h1>
                <p style={{ fontSize: '24px' , color: '#0c266c', fontWeight: '400', lineHeight: '36px'}}>
                  Quickly and easily send, receive and request money online with
                  Paylio. Get a customised solution to fit your business needs.
                </p>
                <div className="bannerBtn" style={{ marginTop: '40px'}}>
                  <a href="" style={{ fontSize: '18px' , textDecoration: 'none' ,backgroundColor: '#4743c9' ,color: '#fff', fontWeight: '600', padding: '13px 30px' , borderRadius: '10px', marginRight: '20px'}}>Open Account</a>
                  <a href="" style={{ fontSize: '18px' , textDecoration: 'none' , border: '1px solid #4743c9' ,color: '#4743c9', fontWeight: '600', padding: '13px 30px' , borderRadius: '10px'}}>See How Works</a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className={styles.bannerform}>
                <form action="#" method="post">
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">
                      Message
                    </label>
                    <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      rows="5"
                      required
                    ></textarea>
                  </div>
                  <button type="submit"  style={{ display: 'block', background: '#4b23c2', color:'#fff' , border: '0', width: '100%', padding: '10px 0', borderRadius: '10px'}}>
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default memo(Banner);
