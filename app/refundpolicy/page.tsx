"use client"; // <===== REQUIRED
import React from "react";
import Link from "@/node_modules/next/link";
import { Fragment, SetStateAction, useState } from "react";
const Refundpolicy = () => {

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
          />
          <section className="about_section PP_sec disc ref">
            <div className="container">
              <h2>This is a sample page.</h2>
              <h6>Overview</h6>
              <p>
                Our refund and returns policy lasts 30 days. If 30 days have passed
                since your purchase, we can’t offer you a full refund or exchange.{" "}
                <br />
                <br />
                To be eligible for a return, your item must be unused and in the same
                condition that you received it. It must also be in the original
                packaging. <br />
                <br />
                Several types of goods are exempt from being returned. Perishable
                goods such as food, flowers, newspapers or magazines cannot be
                returned. We also do not accept products that are intimate or sanitary
                goods, hazardous materials, or flammable liquids or gases.
              </p>
              <p>Additional non-returnable items:</p>
              <ul>
                <li>Gift cards</li>
                <li>Downloadable software products</li>
                <li>Some health and personal care items</li>
              </ul>
              <p>
                To complete your return, we require a receipt or proof of purchase.{" "}
                <br />
                <br />
                Please do not send your purchase back to the manufacturer.
              </p>
              <p>
                There are certain situations where only partial refunds are granted:
              </p>
              <ul>
                <li>Book with obvious signs of use</li>
                <li>
                  CD, DVD, VHS tape, software, video game, cassette tape, or vinyl
                  record that has been opened.
                </li>
                <li>
                  Any item not in its original condition, is damaged or missing parts
                  for reasons not due to our error.
                </li>
                <li>Any item that is returned more than 30 days after delivery</li>
              </ul>
              <h6>Refunds</h6>
              <p>
                Once your return is received and inspected, we will send you an email
                to notify you that we have received your returned item. We will also
                notify you of the approval or rejection of your refund.
                <br />
                <br />
                If you are approved, then your refund will be processed, and a credit
                will automatically be applied to your credit card or original method
                of payment, within a certain amount of days.
              </p>
              <h2>Late or missing refunds</h2>
              <p>
                If you haven’t received a refund yet, first check your bank account
                again. <br />
                Then contact your credit card company, it may take some time before
                your refund is officially posted.
                <br />
                Next contact your bank. There is often some processing time before a
                refund is posted.
                <br />
                If you’ve done all of this and you still have not received your refund
                yet, please contact us at info@fpstechnologies.in.
              </p>
              <h2>Sale items</h2>
              <p>
                Only regular priced items may be refunded. Sale items cannot be
                refunded.
              </p>
              <h6>Exchanges</h6>
              <p>
                We only replace items if they are defective or damaged. If you need to
                exchange it for the same item, send us an email at
                info@fpstechnologies.in and send your item to: 323/1 Udhyog Nagar,
                Nemawar Road Indore, M.P. India – 452020.
              </p>
              <h6>Gifts</h6>
              <p>
                If the item was marked as a gift when purchased and shipped directly
                to you, you’ll receive a gift credit for the value of your return.
                Once the returned item is received, a gift certificate will be mailed
                to you.
                <br />
                If the item wasn’t marked as a gift when purchased, or the gift giver
                had the order shipped to themselves to give to you later, we will send
                a refund to the gift giver and they will find out about your return.
              </p>
              <h6>Shipping returns</h6>
              <p>
                To return your product, you should mail your product to: 323/1 Udhyog
                Nagar, Nemawar Road Indore, M.P. India – 452020.
                <br />
                You will be responsible for paying for your own shipping costs for
                returning your item. Shipping costs are non-refundable. If you receive
                a refund, the cost of return shipping will be deducted from your
                refund.
                <br />
                Depending on where you live, the time it may take for your exchanged
                product to reach you may vary.
                <br />
                If you are returning more expensive items, you may consider using a
                trackable shipping service or purchasing shipping insurance. We don’t
                guarantee that we will receive your returned item.
              </p>
              <h6>Need help?</h6>
              <p>
                Contact us at info@fpstechnologies.in for questions related to refunds
                and returns.
              </p>
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

    </React.Fragment>
  )
}

export default Refundpolicy;