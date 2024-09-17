"use client"; // <===== REQUIRED
import React from "react";
import Link from "@/node_modules/next/link";
import { Fragment, SetStateAction, useState } from "react";

const Faq = () => {
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
    <>

      {/* Mobile search end */}
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
          <section className="about_section PP_sec disc faq ref">
            <div className="container">
              <h6>
                Do You Have <br />
                Some Questions?
              </h6>
              <p className="top_sub">
                Welcome to your new go-to source for aftermarket auto <br />
                parts and accessories.
              </p>
              <div className="faq_card">
                <h2>Shipping Information</h2>
                <div className="row">
                  <div className="col-md-6">
                    <div className="accordion">
                      <div className="accordion__item">
                        <div className="accordion__title">
                          <div className="accordion__arrow fa-solid fa-plus">
                            <span className="accordion__arrow-item" />
                          </div>
                          <span className="accordion__title-text">
                            When Will My Order Ship?
                          </span>
                        </div>
                        <div className="accordion__content">
                          We’re always working to get your orders on their way to
                          you as quickly as we can. Most orders will be dispatched
                          within 2-4 business days, though there may be some delays
                          around sales and peak periods. You’ll get a notification
                          when your order has started its journey. Sometimes order
                          are processed through supply source factories needed some
                          extra time.
                        </div>
                      </div>
                      <div className="accordion__item">
                        <div className="accordion__title">
                          <div className="accordion__arrow fa-solid fa-plus">
                            <span className="accordion__arrow-item" />
                          </div>
                          <span className="accordion__title-text">
                            When Will My Order Arrive?
                          </span>
                        </div>
                        <div className="accordion__content">
                          Depending upon the Shipping Service you requested. Further
                          customs need some time to clear the cross border
                          paperwork. The customs have different time frames based on
                          the destination country rule and regulations.
                        </div>
                      </div>
                      <div className="accordion__item">
                        <div className="accordion__title">
                          <div className="accordion__arrow fa-solid fa-plus">
                            <span className="accordion__arrow-item" />
                          </div>
                          <span className="accordion__title-text">
                            Can You Leave My Order Outside My Door?
                          </span>
                        </div>
                        <div className="accordion__content">
                          We offer all, Door to Door, Port to Port Service.
                        </div>
                      </div>
                      <div className="accordion__item">
                        <div className="accordion__title">
                          <div className="accordion__arrow fa-solid fa-plus">
                            <span className="accordion__arrow-item" />
                          </div>
                          <span className="accordion__title-text">
                            Where Do You Ship To?
                          </span>
                        </div>
                        <div className="accordion__content">
                          We ship Worldwide expect few trade restricted countries.
                          Please contact our shipping team to know restricted
                          countries list.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="accordion">
                      <div className="accordion__item">
                        <div className="accordion__title">
                          <div className="accordion__arrow fa-solid fa-plus">
                            <span className="accordion__arrow-item" />
                          </div>
                          <span className="accordion__title-text">
                            I am Having Trouble With My Part, What Should I Do?
                          </span>
                        </div>
                        <div className="accordion__content">
                          Kindly assure correct part numbers and references before
                          order. Before dispatch check the part what you need. As
                          per applicable warrantee and Guarantee the Refund or
                          exchange will be Initiated. Kindly Confirm the Guarantee
                          Warrantee before ordering.
                        </div>
                      </div>
                      <div className="accordion__item">
                        <div className="accordion__title">
                          <div className="accordion__arrow fa-solid fa-plus">
                            <span className="accordion__arrow-item" />
                          </div>
                          <span className="accordion__title-text">
                            How Long Does It Take To Ship To Me?
                          </span>
                        </div>
                        <div className="accordion__content">
                          Stocked Items are Shipped Next Day, Items not in stock can
                          took 2-10 days depending the Item and Manufacturer.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="faq_card">
                <h2>Payments</h2>
                <div className="row">
                  <div className="col-md-12">
                    <div className="accordion">
                      <div className="accordion__item">
                        <div className="accordion__title">
                          <div className="accordion__arrow fa-solid fa-plus">
                            <span className="accordion__arrow-item" />
                          </div>
                          <span className="accordion__title-text">
                            What Payments Do You Accept?
                          </span>
                        </div>
                        <div className="accordion__content">
                          We accept Bank Transfers, Credit cards, Western Union,
                          International Wire Transfer.
                        </div>
                      </div>
                      <div className="accordion__item">
                        <div className="accordion__title">
                          <div className="accordion__arrow fa-solid fa-plus">
                            <span className="accordion__arrow-item" />
                          </div>
                          <span className="accordion__title-text">
                            How Long Does It Take To Process My Order After Payment.
                          </span>
                        </div>
                        <div className="accordion__content">
                          Depending on the Payment method order processing is done.
                          For Bank Transfer it took 3-5 days for Payment to arrive
                          us.
                          <br />
                          <br />
                          For Credit Card Payments we process order Immediately.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="faq_card">
                <h2>Warranty</h2>
                <div className="row">
                  <div className="col-md-12">
                    <div className="accordion">
                      <div className="accordion__item">
                        <div className="accordion__title">
                          <div className="accordion__arrow fa-solid fa-plus">
                            <span className="accordion__arrow-item" />
                          </div>
                          <span className="accordion__title-text">
                            What Is The Guarantee And Warrantee On Products Puchased
                            ?
                          </span>
                        </div>
                        <div className="accordion__content">
                          Depending on the Individual Product you are purchasing,
                          guarantee and warrantee policies are applicable. Kindly
                          check for every product you purchase. For more detail
                          contact our Sales Team.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <h6 className="my-5">
                Can’t Find What You Are <br />
                Looking For?
              </h6>
              <button className="button_2 comm_btn_2 faq_btn d-block mx-auto">
                email us
              </button>
            </div>
          </section>
          {/* About card section  */}
        </main>



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
export default Faq