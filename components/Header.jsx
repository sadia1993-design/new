import React,{memo} from "react";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg " style={{ padding: "24px 0" ,position:'fixed', width: '100%', backgroundColor: '#fff' , zIndex: '9999', borderBottom: '1px solid #0c266c' }}>
        <div className="container">
          <Link className="navbar-brand" href="/">
            <Image
              src="/images/logo.png"
              alt="Picture of the author"
              width={158}
              height={36}
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto header-menu">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Personal
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Business
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Business Payment
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                    Business Account
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Corporate Card
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Expense Management
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Company
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Help
                </a>
              </li>
            </ul>

            {/* action button */}
            <ul className="list-unstyled ms-4 action">
              <li>
                <a href="">
                  <button
                    type="button"
                    style={{
                      border: "0",
                      background: "none",
                      color: "#0c266c",
                      fontSize: "18px",
                      fontWeight: "600",
                    }}
                  >
                    Login
                  </button>
                  <button type="button" className={styles.bgColor}>
                    Sign Up
                    <FaArrowRight  />
                  </button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default memo(Header);
