"use client"; // <===== REQUIRED
import React from "react";
import Link from "@/node_modules/next/link";
import { Fragment, SetStateAction, useState } from "react";
const Disclaimer = () => {

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
                  <a className="active" href="/">
                    HOME
                  </a>
                </li>
                <li>
                  <a href="/about">ABOUT</a>
                </li>
                <li>
                  <a href="/contact">CONTACT</a>
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
          <section className="about_section PP_sec disc">
            <div className="container">
              <h2>Disclaimer – FPS Technologies</h2>
              <ul>
                <li>
                  fpstechnologies.in (“Website”) is a web-portal, owned and operated
                  by Fluid Power System Technologies, (“proprietorship”) for all kind
                  spare parts and does not own or control any machine make or spare
                  parts brand.
                </li>
                <li>
                  All Machine Make, Mark, Model, Part Numbers, Submodel, Modification,
                  Variants names are respective trademarks of OEM’s (“Original
                  Equipment Manufacturer”) and shop.fpstechnologies.in has no relation
                  to them.
                </li>
                <li>
                  The proprietorship neither endorses any aftermarket or replacement
                  parts nor claims any such part as genuine or OEM authorised. The
                  proprietorship is the facilitator for all kind of spare parts sales
                  and not acting on behalf of the OEM and/or supplier.
                </li>
                <li>
                  The&nbsp;proprietorship is not officially appointed by any OEM to
                  sell Online (if not otherwise specifically mentioned). FPS
                  Technologies facilitate routing sales of spares from the appointed
                  officials to end users / customers.
                </li>
                <li>
                  All Machines images, logos on this site are the property of their
                  respective owners. We do not hold any copyright in regards to these
                  pictures. These pictures have been collected from different public
                  sources including various websites, considered to be in public
                  domain. If any one has any objection to display of any picture,
                  image or text it may be brought to our notice by sending an email
                  (contact us) and the disputed media will be removed immediately,
                  after verification of the claim.
                </li>
                <li>
                  The proprietorship through its Website and Application (collectively
                  “Platform”) offers to customer goods of relevant pages randomly,
                  sorted or filtered by customer’s choice. No goods are intentionally
                  prioritised in search results otherwise it will be stated clearly.
                  It is on the sole discretion of the user to decide and opt for any
                  kind of goods.
                </li>
                <li>
                  The proprietorship while eager to provide best services and
                  implement best practices has no responsibility for third party
                  action or behavior (of the vendor, customs, logistics provider or
                  customer etc.), including price change or delivery delay.
                </li>
                <li>
                  The proprietorship is using the standard technology available to
                  meet the objective, provided by third parties. The proprietorship is
                  not liable for any problems or technical malfunction of any
                  telephone network or lines, computer online systems, servers or
                  providers, computer equipment, software, technical problems or
                  traffic congestion on the Internet/Mobile network or at any website,
                  or any combination thereof, including any injury or damage to
                  participants or any other person’s computer related to or resulting
                  from using the Platform.
                </li>
                <li>
                  The proprietorship is not liable for incorrect information provided
                  by any producer or Seller or collected from other open resources or
                  the way it was used by the Visitor or Buyer.
                </li>
                <li>
                  Value Added Services are provided by Shop.fpstechnologies.in for the
                  benefit of customers by associating with other companies. All
                  products supplied by Shop.fpstechnologies.in “as it is” as per
                  Seller’s/manufacturer’s terms and conditions and
                  Shop.fpstechnologies.in acts as “enabler” of that products or
                  services.
                </li>
                <li>
                  FPS Technologies accepts payments from, Bank Transfer, international
                  cards through various Payment Gateways. Any belay in transfer,
                  blocked transfer will not be considered under our scope of
                  resolution. Buyer has to resolve by its own, we do not have control
                  over Payment transfer procedures through various portals and
                  Financial Institutions. Delivery can be done on having successful
                  reception of Payments.
                </li>
              </ul>
              <h2 className="mt-3">Recommendations</h2>
              <ul>
                <li>
                  FPS Technologies may recommend some aftermarket or replacement
                  machine part&nbsp;via automatic selection based on data given by
                  data providers. Spare part recommended, Should be checked via mail
                  or other source of communication before dispatch. No claim after
                  dispatch is admissible if item Is wrong or not as per buyer’s
                  choice.
                </li>
                <li>
                  Platform is not responsible for wrong identification made by buyer
                  and manufacturer is not liable to take product sold back.
                </li>
                <li>
                  Anybody is welcomed to contribute by sending feedback about any
                  mistakes found: missing configuration of equipments, compatibility
                  of spare parts or wrong description etc.
                </li>
              </ul>
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

export default Disclaimer;