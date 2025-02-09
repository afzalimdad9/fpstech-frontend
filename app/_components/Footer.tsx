import React from "react";
import Link from "@/node_modules/next/link";

const Footer = () => {
   return <React.Fragment>
      <div className="section footer-section footer-section-03">
        <div className="container">
          <div className="footer-widget-wrap">
            <div className="row">
              <div className="col-lg-3">
                <div className="f_logo">
                  <img
                    src="images/FPS_Online-min-e1687335636707-780x500-removebg-preview.png"
                    alt=""
                  />
                </div>
                <p>
                  FPS Technologies was established in 2017 to cater to the large
                  automotive market place in the world. And within a short period
                  of time we’ve established ourselves as the #1 online parts
                  store.
                </p>
                <div className="feed">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={48}
                    height={48}
                    viewBox="0 0 48 48"
                    fill="none"
                  >
                    <path
                      d="M44.5066 16.9202C43.7102 17.3258 42.8625 17.6219 41.9866 17.8002C42.429 19.1566 42.6584 20.5734 42.6666 22.0002C42.6362 24.0469 42.1808 26.065 41.3293 27.9265C40.4777 29.788 39.2486 31.4521 37.72 32.8135C37.5859 32.9378 37.4789 33.0884 37.4055 33.2558C37.3321 33.4233 37.2939 33.604 37.2933 33.7868V40.9068L31.4533 37.1868C31.2904 37.0839 31.1071 37.0174 30.916 36.9921C30.725 36.9668 30.5307 36.9832 30.3466 37.0402C28.2916 37.6784 26.1518 38.0021 24 38.0002C13.7066 38.0002 5.33329 30.8268 5.33329 22.0002C5.33329 13.1735 13.7066 6.00016 24 6.00016C26.054 5.99991 28.0973 6.2963 30.0666 6.88016C30.1498 5.99495 30.3516 5.12493 30.6666 4.2935C28.5006 3.66171 26.2563 3.33853 24 3.3335C12.24 3.3335 2.66663 11.7068 2.66663 22.0002C2.66663 32.2935 12.24 40.6668 24 40.6668C26.2002 40.6643 28.3895 40.3592 30.5066 39.7602L37.88 44.4535C38.0812 44.5826 38.3136 44.6553 38.5526 44.6638C38.7916 44.6723 39.0285 44.6163 39.2384 44.5018C39.4484 44.3873 39.6237 44.2184 39.7459 44.0128C39.8682 43.8073 39.9329 43.5727 39.9333 43.3335V34.3602C41.6016 32.7597 42.9329 30.8417 43.8489 28.7191C44.7648 26.5964 45.2468 24.3119 45.2666 22.0002C45.2812 20.2775 45.0248 18.5632 44.5066 16.9202Z"
                      fill="#555555"
                    />
                    <path
                      d="M14.6666 20.6668C14.313 20.6668 13.9739 20.8073 13.7238 21.0574C13.4738 21.3074 13.3333 21.6465 13.3333 22.0002C13.3333 22.3538 13.4738 22.6929 13.7238 22.943C13.9739 23.193 14.313 23.3335 14.6666 23.3335H33.3333C33.6869 23.3335 34.0261 23.193 34.2761 22.943C34.5261 22.6929 34.6666 22.3538 34.6666 22.0002C34.6666 21.6465 34.5261 21.3074 34.2761 21.0574C34.0261 20.8073 33.6869 20.6668 33.3333 20.6668H14.6666Z"
                      fill="#555555"
                    />
                    <path
                      d="M19 27.3335C18.6463 27.3335 18.3072 27.474 18.0571 27.724C17.8071 27.9741 17.6666 28.3132 17.6666 28.6668C17.6666 29.0205 17.8071 29.3596 18.0571 29.6096C18.3072 29.8597 18.6463 30.0002 19 30.0002H29C29.3536 30.0002 29.6927 29.8597 29.9428 29.6096C30.1928 29.3596 30.3333 29.0205 30.3333 28.6668C30.3333 28.3132 30.1928 27.9741 29.9428 27.724C29.6927 27.474 29.3536 27.3335 29 27.3335H19Z"
                      fill="#555555"
                    />
                    <path
                      d="M13.7066 15.3335C13.7066 15.6871 13.8471 16.0263 14.0971 16.2763C14.3472 16.5264 14.6863 16.6668 15.04 16.6668H32.96C33.182 16.6628 33.3996 16.6034 33.5928 16.4939C33.7861 16.3845 33.9489 16.2285 34.0666 16.0402C33.2825 15.4639 32.5863 14.7767 32 14.0002H15.04C14.6863 14.0002 14.3472 14.1406 14.0971 14.3907C13.8471 14.6407 13.7066 14.9799 13.7066 15.3335Z"
                      fill="#555555"
                    />
                    <path
                      d="M40 14.6668C43.6819 14.6668 46.6667 11.6821 46.6667 8.00016C46.6667 4.31826 43.6819 1.3335 40 1.3335C36.3181 1.3335 33.3334 4.31826 33.3334 8.00016C33.3334 11.6821 36.3181 14.6668 40 14.6668Z"
                      fill="#FFC122"
                    />
                  </svg>
                  <div className="txt_box">
                    <a href="#">Feedback</a>
                    <p>
                      Your comments help us <br />
                      improve our website
                    </p>
                    <a className="feed_link" href="#">
                      {" "}
                      Send Us Your Feedback{" "}
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-9 cus_col">
                <div className="row cus_row">
                  <div className="col-sm-4">
                    <div className="box">
                      <span>
                        <i className="fa-brands fa-whatsapp" /> whatsapp
                      </span>
                      <h4>+91 9826255524</h4>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="box">
                      <span>
                        <i className="fa-regular fa-envelope" /> EMAIL
                      </span>
                      <h4>info@fpstechnologies.in</h4>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="box">
                      <span>
                        <i className="fa-regular fa-clock" /> MON - FRI
                      </span>
                      <h4>9:00 - 18:00</h4>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-4">
                    <h2 className="f_head">QUICK LINKS</h2>
                    <ul>
                      <li>
                        <Link href="/privacy">Privacy Policy</Link>
                      </li>
                      <li>
                        <Link href="/about">Company Info</Link>
                      </li>
                      <li>
                        <Link href="/faq">FAQ</Link>
                      </li>
                      <li>
                        <Link href="/refundpolicy">Refund And Returns Policy</Link>
                      </li>
                      <li>
                        <Link href="/disclaimer">Disclaimer</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="copy_area">
            <div className="row">
              <div className="col-md-6">
                <p>
                  Copyright © 2017-2024&nbsp; <a href="#">FPS Technologies</a>.
                  All rights reserved.
                </p>
              </div>
              <div className="col-md-6">
                <div className="f_img">
                  <img src="./images/footer_img.png" alt="" className="ms-auto"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
   </React.Fragment>
}
export default Footer;