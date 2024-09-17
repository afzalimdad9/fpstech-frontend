"use client"; // <===== REQUIRED
import React from "react";
import DemoSlider from "./_components/DemoSlider";
import Footer from "./_components/Footer";
import Link from "@/node_modules/next/link";

import { Fragment, SetStateAction, useState } from "react";


export default function Home() {
  const [selected, setSelected] = useState();
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState<any>([]);
  const [search, setSearch] = useState("d-none");

  const [loading, setLoading] = useState(false);

  const autocomplete = async (query: SetStateAction<string>) => {
    setLoading(true);
    setQuery(query);
    console.log("Query value", query);
    if (query) {
      setSearchResults(
        await (
          await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + "/pdetails?name=" + query)
        ).json()
        //await (await fetch("https://fpstech.siswork.com:3001/pdetails?name=" + query)).json()
      );
      setSearch("d-flex");

    } else {
      setSearchResults([]);
      setSearch("d-none");

    }

    setLoading(false);

  };

  console.log("All data", searchResults.length);
  console.log("Loader value", loading);

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
                  {/* <a href="index.html"> */}
                  <Link href="/">
                    <img src="images/logo.png" alt="" />
                  </Link>
                </div>
              </div>
              <div className="col-lg-6 search_bx">
                <div className="header_search">
                  <div className="search_box">
                    <input
                      type="text"
                      placeholder="Search products…"
                      onChange={(event) => autocomplete(event.target.value)}
                    />
                    {/* {loading && } */}
                    {loading ? <div className="loader"></div> : <i className="fa-solid fa-magnifying-glass" />}

                  </div>

                  {searchResults &&
                    searchResults.length === 0 &&
                    query !== "" ? (
                    <div
                      className={`${search} justify-content-start align-item-center search_bot card p-2 mt-2`}
                    >
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
                  <Link className="active" href="/">
                    HOME
                  </Link>
                </li>
                <li>
                  <Link href="/about">ABOUT</Link>
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
        <main>
          <section className="hero">
            <div className="container">
              <div className="row">
                <div className="swiper-container swiper-hero">
                  <DemoSlider data={[]} />
                </div>
              </div>
            </div>
          </section>
          {/* Hero section end */}
          {/* shop section start */}
          <section className="shop_sec">
            <div className="container">
              <div className="row">
                <div className="col-xl-6 p-0">
                  <div className="img_box">
                    <div
                      className="innr_box"
                      style={{ backgroundImage: "url(./images/h1-img9.jpg)" }}
                    />
                  </div>
                </div>
                <div className="col-xl-6 p-lg-0">
                  <div className="con_box">
                    <h2>
                      Looking For Mining, Construction, Farm, Handling, Power
                      Generating Equipment Spares ?
                    </h2>
                    <h6>
                      You are at right place, browse various brands and makes.
                    </h6>
                    <p>
                      With over 5,00,000 parts available in stock is the Worlds
                      Number 1 Supplier for Spares and Components. We offer
                      service parts at very competitive prices with fastest
                      delivery across the world.
                    </p>
                    <ul>
                      <li>
                        <a href="#"> Multiple Payment Options</a>
                      </li>
                      <li>
                        <a href="#">Multiple Shipping Options</a>
                      </li>
                      <li>
                        <a href="#">Delivery of spares all over the world</a>
                      </li>
                    </ul>
                    <button className="comm_btn button">shop now</button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* shop section end */}
          {/* customer section start */}
          <section className="customer">
            <div className="container">
              <div className="row">
                <div className="line" />
              </div>
              <div className="row_rev">
                <div className="rev_card">
                  <h2>Worldwide delivery</h2>
                  <p>
                    Delivery of goods all over <br />
                    the world
                  </p>
                </div>
                <div className="rev_card">
                  <h2>Satisfied or Refunded</h2>
                  <p>
                    Guaranteed product quality <br />
                    and warranty
                  </p>
                </div>
                <div className="rev_card">
                  <img src="images/cart.png" alt="" />
                  <h2>Great prices and quality</h2>
                  <p>
                    More than 10 million of different <br />
                    car parts
                  </p>
                </div>
                <div className="rev_card">
                  <h2>Top-Notch Support</h2>
                  <p>
                    Our live chat support is available <br />
                    Monday through Saturday
                  </p>
                </div>
                <div className="rev_card">
                  <h2>Secure Payments</h2>
                  <p>
                    Your payment information is <br />
                    processed securely
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* customer section end */}
        </main>
      </div>


    </>
  );
}
function getDetails(_id: any): void {
  throw new Error("Function not implemented.");
}
