import React,{memo} from 'react'
import styles from "../styles/home.module.css";

function Features() {
  return (
    <>
       <div className="container">
        <div className={styles.featureAll}>
        <div className="row">
            <div className="col-lg-3 col-6">
                <div className="text-center">
                    <p className='featureIcon' style={{fontWeight:'600', fontSize: '57px', lineHeight: '30px', color: '#4743c9' , marginBottom: '24px'}}>50+</p>
                    <p className='featureText' style={{fontWeight:'400', fontSize: '18px', lineHeight: '30px', color: '#0c266c' }}>Supported Currencies</p>
                </div>

            </div>
            <div className="col-lg-3 col-6 ">
            <div className="text-center">
                    <p className='featureIcon' style={{fontWeight:'600', fontSize: '57px', lineHeight: '30px', color: '#4743c9', marginBottom: '24px' }}>100+</p>
                    <p className='featureText' style={{fontWeight:'400', fontSize: '18px', lineHeight: '30px', color: '#0c266c' }}>Available Countries</p>
                </div>
            </div>
            <div className="col-lg-3 col-6">
            <div className="text-center">
                    <p className='featureIcon' style={{fontWeight:'600', fontSize: '57px', lineHeight: '30px', color: '#4743c9', marginBottom: '24px' }}>70+</p>
                    <p className='featureText' style={{fontWeight:'400', fontSize: '18px', lineHeight: '30px', color: '#0c266c' }}>Payment Methods</p>
                </div>
            </div>
            <div className="col-lg-3 col-6">
            <div className="text-center">
                    <p className='featureIcon' style={{fontWeight:'600', fontSize: '57px', lineHeight: '30px', color: '#4743c9' , marginBottom: '24px'}}>7/24+</p>
                    <p className='featureText' style={{fontWeight:'400', fontSize: '18px', lineHeight: '30px', color: '#0c266c' }}>Support Team</p>
                </div>
            </div>
            </div>
        </div>
       </div>
    </>
  )
}

export default memo(Features)