import React,{memo} from "react";
import styles from "@/styles/Home.module.css";
import { FaArrowRight } from "react-icons/fa";

function Subscribe() {
  return (
    <>
      <div className="container mb-100">
        <div className="row">
          <div className="col-lg-10 offset-lg-1 col-sm-12">
            <div
              className={styles.subscribe}
              style={{
                minHeight: "305px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                color: "#fff",
              }}
            >
              <h3 className="">Subscribe to Our Newsletter</h3>
              <form>
                <div className="input-group mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your Email Address"
                    aria-label="Enter your email"
                    aria-describedby="subscribe-btn"
                  />
                  <button
                    
                    type="submit"
                    className={styles.subscribebtn}
                  >
                    <FaArrowRight />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default memo(Subscribe);
