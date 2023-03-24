import React,{memo} from "react";
import { FaLongArrowAltRight, FaEnvelope, FaMobile } from "react-icons/fa";
import Image from "next/image";
import styles from "@/styles/About.module.css";

function LocationBox(props) {
  return (
    <>
      <div className="col-lg-4 col-md-6 col-12">
        <div className={styles.location_box}>
          <div className="location_name d-lg-flex align-items-lg-center mb-4 ">
            <Image src={props.src} alt="dynamic image" width={64} height={64} />
            <h3 className=" mx-lg-4 fw-semibold mb-0 ">{props.name}</h3>
          </div>

          <div className={styles.contact_info}>
            <ul className=" px-0  ">
              <li className="d-flex">
                <FaEnvelope size={20} color={props.color} />
                <p className=" mx-lg-4  mb-0 fw-semibold ">{props.email}</p>
              </li>
              <li className="d-flex">
                <FaMobile size={20} color={props.color} />
                <p className=" mx-lg-4 fw-semibold mb-0 ">{props.phone}</p>
              </li>
            </ul>
          </div>

          <a href="" className={` text-decoration-none mt-4 fw-bold d-block ${styles.text_size}`}>View Location <FaLongArrowAltRight size={15}  /> </a>
        </div>
      </div>
    </>
  );
}

export default memo(LocationBox);
