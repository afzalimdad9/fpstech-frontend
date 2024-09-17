"use client"; // <===== REQUIRED
import React from "react";
import Link from "@/node_modules/next/link";
import { Fragment, SetStateAction, useState } from "react";

const Privacy = () => {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState<any>([]);
  const [search, setSearch] = useState('d-none');
  const [loading, setLoading] = useState(false);

  const autocomplete = async (query: SetStateAction<string>) => {
    setLoading(true);
    setQuery(query);
    console.log("Query value", query);
    if (query) {
      setSearchResults(
        await (await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + "/pdetails?name=" + query)).json()
        //await (await fetch("http://localhost:1000/pdetails?name=" + query)).json()
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
    <React.Fragment>
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
                  <Link className="active" href="/">HOME</Link>
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
        <main className="bg_grey">
          {/* About card section  */}
          <section
            className="pp_banner"
            style={{ backgroundImage: "url(./images/3240987-1070x510-3.jpg)" }}
          ></section>
          <section className="about_section PP_sec">
            <div className="container">
              <h2>Fluid Power System Technologies Privacy Policy.</h2>
              <p>Last updated: 07-Nov-2023</p>
              <p>
                This Privacy Policy describes how Fluid Power System Technologies (the
                “Site”, “we”, “us”, or “our”) collects, uses, and discloses your
                personal information when you visit, use our services, or make a
                purchase from shop.fpstechnologies.in (the “Site”) or otherwise
                communicate with us (collectively, the “Services”). For purposes of
                this Privacy Policy, “you” and “your” means you as the user of the
                Services, whether you are a customer, website visitor, or another
                individual whose information we have collected pursuant to this
                Privacy Policy. Please read this Privacy Policy carefully. By using
                and accessing any of the Services, you agree to the collection, use,
                and disclosure of your information as described in this Privacy
                Policy. If you do not agree to this Privacy Policy, please do not use
                or access any of the Services. Changes to This Privacy Policy
              </p>
              <p>
                We may update this Privacy Policy from time to time, including to
                reflect changes to our practices or for other operational, legal, or
                regulatory reasons. We will post the revised Privacy Policy on the
                Site, update the “Last updated” date and take any other steps required
                by applicable law.
              </p>
              <h2>How We Collect and Use Your Personal Information</h2>
              <p>
                To provide the Services, we collect and have collected over the past
                12 months personal information about you from a variety of sources, as
                set out below. The information that we collect and use varies
                depending on how you interact with us. In addition to the specific
                uses set out below, we may use information we collect about you to
                communicate with you, provide the Services, comply with any applicable
                legal obligations, enforce any applicable terms of service, and to
                protect or defend the Services, our rights, and the rights of our
                users or others.
              </p>
              <h2>What Personal Information We Collect</h2>
              <p>
                The types of personal information we obtain about you depends on how
                you interact with our Site and use our Services. When we use the term
                “personal information”, we are referring to information that
                identifies, relates to, describes or can be associated with you. The
                following sections describe the categories and specific types of
                personal information we collect.
              </p>
              <p className="mb-0">Information We Collect Directly from You</p>
              <p className="mb-0">
                Information that you directly submit to us through our Services may
                include:
              </p>
              <ul>
                <li>
                  – Basic contact details including your name, address, phone number,
                  email.
                </li>
                <li>
                  – Order information including your name, billing address, shipping
                  address, payment confirmation, email address, phone number.
                </li>
                <li>
                  – Account information including your username, password, security
                  questions.
                </li>
                <li>
                  – Shopping information including the items you view, put in your
                  cart or add to your wishlist.
                </li>
                <li>
                  – Customer support information including the information you choose
                  to include in communications with us, for example, when sending a
                  message through the Services.
                </li>
              </ul>
              <p>
                Some features of the Services may require you to directly provide us
                with certain information about yourself. You may elect not to provide
                this information, but doing so may prevent you from using or accessing
                these features. <br />
                Information We Collect through Cookies
              </p>
            </div>
          </section>
          {/* About card section  */}
        </main>
      </div>
    </React.Fragment>
  )
}

export default Privacy