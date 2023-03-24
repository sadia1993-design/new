import React,{memo} from "react";
import Image from "next/image";

function Social(props) {
  return (
    <>
      <ul className={` list-unstyled d-flex  pt-sm-3 pt-lg-0 ${props.style.justifyContent}`}>
        <li>
          <a
            href=""
            style={{
              backgroundColor: "#254398",
              width: "30px",
              height: "30px",
              display: "inlineBlock",
              lineHeight: "30px",
              textAlign: "center",
              borderRadius: "100%",
            }}
          >
            <Image
              src="/images/icon/facebook.png"
              alt="facebook"
              width={30}
              height={30}
            />
          </a>
        </li>
        <li>
          <a
            href=""
            style={{
              backgroundColor: "#037fae",
              width: "30px",
              height: "30px",
              display: "inlineBlock",
              lineHeight: "30px",
              textAlign: "center",
              borderRadius: "100%",
            }}
          >
            <Image
              src="/images/icon/linkedin.png"
              alt="linkedin"
              width={30}
              height={30}
            />
          </a>
        </li>
        <li>
          <a
            href=""
            style={{
              backgroundColor: "#55adf4",
              width: "30px",
              height: "30px",
              display: "inlineBlock",
              lineHeight: "30px",
              textAlign: "center",
              borderRadius: "100%",
            }}
          >
            <Image
              src="/images/icon/instagram.png"
              alt="instagram"
              width={30}
              height={30}
            />
          </a>
        </li>
        <li>
          <a
            href=""
            style={{
              backgroundColor: "#55adf4",
              width: "30px",
              height: "30px",
              display: "inlineBlock",
              lineHeight: "30px",
              textAlign: "center",
              borderRadius: "100%",
            }}
          >
            <Image
              src="/images/icon/twitter.png"
              alt="twitter"
              width={30}
              height={30}
            />
          </a>
        </li>
      </ul>
    </>
  );
}

export default memo(Social);
