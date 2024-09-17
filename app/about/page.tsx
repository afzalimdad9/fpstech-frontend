"use client"; // <===== REQUIRED
import React from "react";
import Link from "@/node_modules/next/link";
import { Fragment, SetStateAction, useState } from "react";

import { useEffect } from 'react';
//import { useRouter } from 'next/router';
import { useRouter } from "@/node_modules/next/navigation";

export default function About() {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState<any>([]);
  const [search, setSearch] = useState('d-none');
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const autocomplete = async (query: SetStateAction<string>) => {
    setLoading(true);
    setQuery(query);
    console.log("Query value", query);
    if (query) {
      setSearchResults(
        await (await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + "/pdetails?name=" + query)).json()
        //await (await fetch("https://fpstech.siswork.com:3001/pdetails?name=" + query)).json()
      );
      setSearch('d-flex');
    } else {
      setSearchResults([]);
      setSearch('d-none');
    }

    setLoading(false);

  };

  console.log("All data", searchResults.length);




  return (
    <>
      <div className="main-wrapper">
        {/* Header Start  */}
        <div id="header" className="section header-section header-section-05">
          <div className="container">
            {/* Header Wrap Start  */}
            <div className="header-wrap">
              <div className="col-lg-3 logo_bx">
                <div className="header-logo">
                  <Link href="/">
                    <img src="images/logo.png" alt="" />
                  </Link>
                </div>
              </div>
              <div className="col-lg-6 search_bx">
                <div className="header_search">
                  <div className="search_box">
                    <input type="text" placeholder="Search products…" onChange={(event) => autocomplete(event.target.value)} />
                    {loading ? <div className="loader"></div> : <i className="fa-solid fa-magnifying-glass" />}

                  </div>

                  {searchResults &&
                    searchResults.length === 0 && query !== "" ? (
                    <div className={`${search} justify-content-start align-item-center search_bot card p-2 mt-2`}>
                      <p className="mb-0">Nothing found.</p>
                    </div>
                  ) : (
                    searchResults && (
                      <div className={`${search} justify-content-start align-item-center search_bot card p-2 mt-2`}>
                        <ul>
                          {searchResults.map((item: any, index: any) => (
                            <Link
                              href={{
                                pathname: `/products`,
                                query: {
                                  product: item.product_url,
                                  prodId: item._id
                                },
                              }}
                              className="w-100 mb-2"
                              key={item._id}
                            >
                              <li className="search_text">
                                {item.product_name}
                              </li>
                            </Link>
                          ))}
                        </ul>
                      </div>
                    )
                  )}



                </div>
              </div>

              <div className="col-lg-3 help_nav">
                <div
                  className="elementor-element elementor-element-286194b elementor-widget__width-auto elementor-hidden-tablet elementor-hidden-mobile_extra elementor-hidden-mobile elementor-widget elementor-widget-button-contact"
                  data-id="286194b"
                  data-element_type="widget"
                  data-widget_type="button-contact.default"
                >
                  <div className="elementor-widget-container">
                    <div className="elementor-button-contact-wrapper">
                      <div className="button-contact">
                        <i className="fa-solid fa-headphones" />
                        <span className="text">Help Center</span>
                        <i className="fa-solid fa-caret-down" />
                      </div>
                      <div className="content-contact">
                        <div className="content-header">
                          <div className="image">
                            <img
                              width={48}
                              height={48}
                              src="images/chat.svg"
                              className="attachment-full size-full wp-image-237"
                              alt=""
                              decoding="async"
                            />
                          </div>
                          <div className="right">
                            <div className="title">Need help?</div>
                            <div className="sub">
                              Call or Whatsapp our product expert
                            </div>
                            <div className="description">+91 9826255524</div>
                          </div>
                        </div>
                        <div className="content-footer">
                          <a className="button-footer" href="#">
                            <i className="fa-regular fa-comments" />
                            <span>chat with us</span>
                          </a>
                          <div className="title">Mondays - Sundays</div>
                          <div className="description">
                            7am - 11pm IST | 4am - 8pm IST
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            {/* Header Wrap End  */}
          </div>
        </div>
        {/* Header End */}
        <div className="hero">
          <div className="container">
            <div className="row">
              <div className="col-md-12" />
              <ul className="hero_nav d-lg-flex d-none">
                <li>
                  <Link href="/">HOME</Link>
                </li>
                <li>
                  <Link className="active" href="/about">ABOUT</Link>
                </li>
                <li>
                  <Link href="/contact">CONTACT</Link>
                </li>
              </ul>
              {/* <select name="" id="">
          <option value="">USD</option>
          <option value="">EURO</option>
          <option value="">CNY</option>
        </select> */}
            </div>
          </div>
        </div>
        <main className="bg_grey">
          {/* Hero section start */}
          <section
            className="abt_hero"
            style={{ backgroundImage: "url(./images/About_bg.png)" }}
          >
            <div className="container">
              <div className="row">
                <h2>About Us</h2>
              </div>
            </div>
          </section>
          {/* Hero section end */}
          {/* About card section  */}
          <section className="about_section">
            <div className="container">
              <div className="abt_card">
                <div className="sec_1">
                  <div className="row">
                    <div className="col-lg-8">
                      <div className="left">
                        <p className="top_sub">Welcome To Our Store.</p>
                        <h3>
                          Largest heavy equipment market <br />
                          place all over the world
                        </h3>
                        <div className="row">
                          <div className="col-md-6">
                            <p>
                              We are prominent online web store for quality and
                              genuine spares. We have clients at more that 150
                              countries. Our panel of experts includes technicians,
                              engineers, sales persons, accountants, packaging and
                              shipping professionals. <br />
                              <br />
                              We are collaborated with top most shipping services in
                              the world, whether is sea or air we do with great
                              passion and responsibility.
                              <br />
                              <br />
                              Over 1 million parts in our database and having stock of
                              most of them at our multiple warehouses across the
                              globe.
                            </p>
                            <button className="comm_btn_2 button_2">
                              <Link href="/contact">contact us</Link>
                            </button>
                          </div>
                          <div className="col-md-6">
                            <ul>
                              <li>
                                <div className="img_box">
                                  <img src="./images/badge.png" alt="" />
                                </div>
                                <div className="con_bx">
                                  <h6>Reliable &amp; Fully Insure</h6>
                                  <p>You can rely on us for your spare needs.</p>
                                </div>
                              </li>
                              <li>
                                <div className="img_box">
                                  <img src="./images/verified.png" alt="" />
                                </div>
                                <div className="con_bx">
                                  <h6>Trusted &amp; Experienced</h6>
                                  <p>Trusted and Experienced Panel of Experts</p>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="right">
                        <div className="img_bx">
                          <img src="./images/About.png" alt="" />
                        </div>
                        <div className="off_bx">
                          <div className="img_box">
                            <img src="./images/steering-wheel.png" alt="" />
                          </div>
                          <div className="con_bx">
                            <h6>10M</h6>
                            <p>Different Parts</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sec_2">
                  <p className="top_sub">Why Choose Us</p>
                  <h3>
                    Growing with a global creative <br />
                    community
                  </h3>
                  <div className="row">
                    <div className="col-md-4">
                      <h6>We are international company</h6>
                      <p>
                        Location of the office and warehouse at all global territory
                        brings us closer to many of our customers in Africa, Asia,
                        Europe and America.
                      </p>
                    </div>
                    <div className="col-md-4">
                      <h6>Individual Approach To Customers</h6>
                      <p>
                        We adapt to needs and demands of customers, offering
                        individual conditions, discounts and loyalty programmes
                        irrespective of volume of orders.
                      </p>
                    </div>
                    <div className="col-md-4">
                      <h6>Professional Customer Service</h6>
                      <p>
                        Customer service of our webshop is always glad to share their
                        professional knowledge and to prove customers with necessary
                        technical information and support.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="sec_2 gallery">
                  <p className="top_sub">Most Valuable Brands Are Available</p>
                  <h3>
                    We Offer Replacement Parts <br />
                    for leading brands
                  </h3>
                  <div className="gal_box">
                    <div className="row">
                      <div className="col-md-3 col-6">
                        <div className="img_bx">
                          <img
                            src="./images/JCB-Spares-Online-300x197-1.png"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-md-3 col-6">
                        <div className="img_bx">
                          <img src="./images/LT-300x187-1.png" alt="" />
                        </div>
                      </div>
                      <div className="col-md-3 col-6">
                        <div className="img_bx">
                          <img
                            src="./images/ESCORTS-SPARES-ONLINE-300x167-1.png"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-md-3 col-6">
                        <div className="img_bx">
                          <img src="./images/MACONS-SPARES-400x200-1.png" alt="" />
                        </div>
                      </div>
                      <div className="col-md-3 col-6">
                        <div className="img_bx">
                          <img
                            src="./images/Terex-SPARES-ONLINE-300x52-1.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-md-3 col-6">
                        <div className="img_bx">
                          <img src="./images/KOMATSU-SPARES-ONLINE.jpg" alt="" />
                        </div>
                      </div>
                      <div className="col-md-3 col-6">
                        <div className="img_bx">
                          <img
                            src="./images/MAHINDRA-SPARES-ONLINE-300x65-1.png"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-md-3 col-6">
                        <div className="img_bx">
                          <img
                            src="./images/HITACHI-SPARES-ONLINE-800x219-1.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-md-3 col-6">
                        <div className="img_bx">
                          <img
                            src="./images/HAMM-SPARES-ONLINE-800x159-1.png"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-md-3 col-6">
                        <div className="img_bx">
                          <img
                            src="./images/VOLVO-SPARES-ONLINE-150x150-1.png"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-md-3 col-6">
                        <div className="img_bx">
                          <img
                            src="./images/DOOSAN-SPARES-ONLINE-460x200-1.png"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-md-3 col-6">
                        <div className="img_bx">
                          <img
                            src="./images/ACE-SPARES-ONLINE-400x200-1.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sec_2 testimonial">
                  <div className="conatiner">
                    <div className="row">
                      <p className="top_sub">Testimonials</p>
                      <h3>
                        What do clients say <br /> about us
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* About card section  */}
        </main>

        {/* Modal */}
        <div
          className="modal fade q_modal"
          id="exampleModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <label htmlFor="">Name</label>
                <input type="text" />
                <label htmlFor="">Email</label>
                <input type="email" name="" id="" />
                <label htmlFor="">Country</label>
                <select id="country" name="country">
                  <option value="USA">USA</option>
                  <option value="Canada">Canada</option>
                  <option value="UK">UK</option>
                  <option value="Australia">Australia</option>
                </select>
                <label htmlFor="">Contact Number</label>
                <input type="tel" name="" id="" />
                <label htmlFor="">Message</label>
                <textarea name="" id="" cols={30} rows={5} defaultValue={""} />
              </div>
              <div className="modal-footer">
                <button type="button" className="button">
                  SEND
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

