import React,{memo} from 'react'
import styles from "@/styles/Home.module.css";

function Features() {
  return (
    <>
       <div className="container">
        <div className={styles.featureAll}>
        <div className="row">
            <div className="col-lg-3 col-6">
                <div className={`text-center ${styles.featureBox}`}>
                    <p className={styles.featureIcon} >50+</p>
                    <p className={styles.featureText} >Supported Currencies</p>
                </div>

            </div>
            <div className="col-lg-3 col-6 ">
            <div className={`text-center ${styles.featureBox}`}>
                    <p className={styles.featureIcon} >100+</p>
                    <p className={styles.featureText}>Available Countries</p>
                </div>
            </div>
            <div className="col-lg-3 col-6">
            <div className={`text-center ${styles.featureBox}`}>
                    <p className={styles.featureIcon} >70+</p>
                    <p className={styles.featureText} >Payment Methods</p>
                </div>
            </div>
            <div className="col-lg-3 col-6">
            <div className={`text-center ${styles.featureBox}`}>
                    <p className={styles.featureIcon} >7/24+</p>
                    <p className={styles.featureText}>Support Team</p>
                </div>
            </div>
            </div>
        </div>
       </div>
    </>
  )
}

export default memo(Features)