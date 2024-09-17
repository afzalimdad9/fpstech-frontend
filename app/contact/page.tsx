"use client"; // <===== REQUIRED
import React from "react";
import Link from "@/node_modules/next/link";
import { Fragment, SetStateAction, useState } from "react";



//import { useRouter } from "@/node_modules/next/navigation";

export default function Contact() {
  //const router = useRouter();
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState<any>([]);
  const [search, setSearch] = useState('d-none');
  const [loading, setLoading] = useState(false);

  const [uname, setName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");



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

  ///Submit contact form

  const contactSubmit = async (e: any) => {
    e.preventDefault();
    //console.log("contact form submittd");
    //alert("Contact form submitted successfully.");
    try {
      //let contactAPI = 'http://localhost:1000/contact_save';
      let contactAPI = process.env.NEXT_PUBLIC_BACKEND_URL + '/contact_save';
      let response = await fetch(contactAPI, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({ uname, email, country, contact, message })
      });
      console.log("Response", response);
      if (response) {
        alert('Contact form submitted successfully.');
        setName("");
        setEmail("");
        setContact("");
        setCountry("");
        setMessage("");
      }

    } catch (error) {
      console.error('Error submitting form:', error);
    }


  }


  return <>
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
                <Link href="/about">ABOUT</Link>
              </li>
              <li>
                <Link className="active" href="/contact">CONTACT</Link>
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
        <section className="about_section contact_sec">
          <div className="container">
            <div className="abt_card">
              <h2>Get In Touch</h2>
              <p className="top_sub">We are at your disposal 7 days a week!</p>
              <div className="row">
                <div className="col-xl-4 col-lg-5 col-md-6">
                  <div className="left_sec">
                    <ul className="dtl">
                      <li>
                        <h6>
                          <i className="fa-solid fa-house me-2" />
                          Store Location
                        </h6>
                        <p>
                          321/1, Udhyog Nagar, Nemawar Road, Indore, Madhya
                          Pradesh INDIA – 452020
                        </p>
                      </li>
                      <li>
                        <h6>
                          <i className="fa-solid fa-phone me-2" />
                          Phone Number
                        </h6>
                        <p>+91 9826255524</p>
                      </li>
                      <li>
                        <h6>
                          <i className="fa-solid fa-envelope me-2" />
                          Email Us
                        </h6>
                        <p>info@fpstechnologies.in</p>
                        <p>sales@fpstechnologies.in</p>
                      </li>
                    </ul>
                    <div className="dtl_box">
                      <div className="profile_sec">
                        <div className="img_box">
                          <img src="./images/contact-pic.png" alt="" />
                        </div>
                        <div className="deta_box">
                          <h6>Need help?</h6>
                          <p>Call our product expert</p>
                          <h6>+91 9826255524</h6>
                        </div>
                      </div>
                      <div className="bottom_sec">
                        <button className="button_2 comm_btn_2">
                          <i className="fa-regular fa-comments" /> Chat With Us
                        </button>
                        <p>Mondays – Sundays</p>
                        <p>7am – 11pm IST | 4am – 8pm IST</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-8 col-lg-7 col-md-6">
                  <div className="right_sec">
                    <h3>We Would Love To Hear From You.</h3>
                    <p>
                      Your email address will not be published. Required fields
                      are marked *
                    </p>
                    <form name="contactForm" id="contactForm" onSubmit={contactSubmit}>
                      <div className="form_sec">
                        <label htmlFor="">Name</label>
                        <input type="text" name="uname" id="uname" value={uname}
                          onChange={(e) => {
                            setName(e.target.value)
                          }} required />
                        <label htmlFor="">Email</label>
                        <input type="email" value={email} name="email" id="email" onChange={(e) => { setEmail(e.target.value) }} required />
                        <label htmlFor="">Country</label>
                        <select name="country" value={country} id="country" onChange={(e) => {
                          setCountry(e.target.value)
                        }} required>
                          <option value="">– Please choose an option –</option>
                          <option value="Afghanistan (+93)">
                            Afghanistan (+93)
                          </option>
                          <option value="Albania (+355)">Albania (+355)</option>
                          <option value="Algeria (+213)">Algeria (+213)</option>
                          <option value="American Samoa (+1-684)">
                            American Samoa (+1-684)
                          </option>
                          <option value="Andorra (+376)">Andorra (+376)</option>
                          <option value="Angola (+244)">Angola (+244)</option>
                          <option value="Anguilla (+1-264)">
                            Anguilla (+1-264)
                          </option>
                          <option value="Antarctica (+672)">
                            Antarctica (+672)
                          </option>
                          <option value="Antigua and Barbuda (+1-268)">
                            Antigua and Barbuda (+1-268)
                          </option>
                          <option value="Argentina (+54)">Argentina (+54)</option>
                          <option value="Armenia (+374)">Armenia (+374)</option>
                          <option value="Aruba (+297)">Aruba (+297)</option>
                          <option value="Australia (+61)">Australia (+61)</option>
                          <option value="Austria (+43)">Austria (+43)</option>
                          <option value="Azerbaijan (+994)">
                            Azerbaijan (+994)
                          </option>
                          <option value="Bahamas (+1-242)">Bahamas (+1-242)</option>
                          <option value="Bahrain (+973)">Bahrain (+973)</option>
                          <option value="Bangladesh (+880)">
                            Bangladesh (+880)
                          </option>
                          <option value="Barbados (+1-246)">
                            Barbados (+1-246)
                          </option>
                          <option value="Belarus (+375)">Belarus (+375)</option>
                          <option value="Belgium (+32)">Belgium (+32)</option>
                          <option value="Belize (+501)">Belize (+501)</option>
                          <option value="Benin (+229)">Benin (+229)</option>
                          <option value="Bermuda (+1-441)">Bermuda (+1-441)</option>
                          <option value="Bhutan (+975)">Bhutan (+975)</option>
                          <option value="Bolivia (+591)">Bolivia (+591)</option>
                          <option value="Bosnia and Herzegovina (+387)">
                            Bosnia and Herzegovina (+387)
                          </option>
                          <option value="Botswana (+267)">Botswana (+267)</option>
                          <option value="Brazil (+55)">Brazil (+55)</option>
                          <option value="British Indian Ocean Territory (+246)">
                            British Indian Ocean Territory (+246)
                          </option>
                          <option value="British Virgin Islands (+1-284)">
                            British Virgin Islands (+1-284)
                          </option>
                          <option value="Brunei (+673)">Brunei (+673)</option>
                          <option value="Bulgaria (+359)">Bulgaria (+359)</option>
                          <option value="Burkina Faso (+226)">
                            Burkina Faso (+226)
                          </option>
                          <option value="Burundi (+257)">Burundi (+257)</option>
                          <option value="Cambodia (+855)">Cambodia (+855)</option>
                          <option value="Cameroon (+237)">Cameroon (+237)</option>
                          <option value="Canada (+1)">Canada (+1)</option>
                          <option value="Cape Verde (+238)">
                            Cape Verde (+238)
                          </option>
                          <option value="Cayman Islands (+1-345)">
                            Cayman Islands (+1-345)
                          </option>
                          <option value="Central African Republic (+236)">
                            Central African Republic (+236)
                          </option>
                          <option value="Chad (+235)">Chad (+235)</option>
                          <option value="Chile (+56)">Chile (+56)</option>
                          <option value="China (+86)">China (+86)</option>
                          <option value="Christmas Island (+61)">
                            Christmas Island (+61)
                          </option>
                          <option value="Cocos Islands (+61)">
                            Cocos Islands (+61)
                          </option>
                          <option value="Colombia (+57)">Colombia (+57)</option>
                          <option value="Comoros (+269)">Comoros (+269)</option>
                          <option value="Cook Islands (+682)">
                            Cook Islands (+682)
                          </option>
                          <option value="Costa Rica (+506)">
                            Costa Rica (+506)
                          </option>
                          <option value="Croatia (+385)">Croatia (+385)</option>
                          <option value="Cuba (+53)">Cuba (+53)</option>
                          <option value="Curacao (+599)">Curacao (+599)</option>
                          <option value="Cyprus (+357)">Cyprus (+357)</option>
                          <option value="Czech Republic (+420)">
                            Czech Republic (+420)
                          </option>
                          <option value="Democratic Republic of the Congo (+243)">
                            Democratic Republic of the Congo (+243)
                          </option>
                          <option value="Denmark (+45)">Denmark (+45)</option>
                          <option value="Djibouti (+253)">Djibouti (+253)</option>
                          <option value="Dominica (+1-767)">
                            Dominica (+1-767)
                          </option>
                          <option value="Dominican Republic (+1-809, 1-829, 1-849)">
                            Dominican Republic (+1-809, 1-829, 1-849)
                          </option>
                          <option value="East Timor (+670)">
                            East Timor (+670)
                          </option>
                          <option value="Ecuador (+593)">Ecuador (+593)</option>
                          <option value="Egypt (+20)">Egypt (+20)</option>
                          <option value="El Salvador (+503)">
                            El Salvador (+503)
                          </option>
                          <option value="Equatorial Guinea (+240)">
                            Equatorial Guinea (+240)
                          </option>
                          <option value="Eritrea (+291)">Eritrea (+291)</option>
                          <option value="Estonia (+372)">Estonia (+372)</option>
                          <option value="Ethiopia (+251)">Ethiopia (+251)</option>
                          <option value="Falkland Islands (+500)">
                            Falkland Islands (+500)
                          </option>
                          <option value="Faroe Islands (+298)">
                            Faroe Islands (+298)
                          </option>
                          <option value="Fiji (+679)">Fiji (+679)</option>
                          <option value="Finland (+358)">Finland (+358)</option>
                          <option value="France (+33)">France (+33)</option>
                          <option value="French Polynesia (+689)">
                            French Polynesia (+689)
                          </option>
                          <option value="Gabon (+241)">Gabon (+241)</option>
                          <option value="Gambia (+220)">Gambia (+220)</option>
                          <option value="Georgia (+995)">Georgia (+995)</option>
                          <option value="Germany (+49)">Germany (+49)</option>
                          <option value="Ghana (+233)">Ghana (+233)</option>
                          <option value="Gibraltar (+350)">Gibraltar (+350)</option>
                          <option value="Greece (+30)">Greece (+30)</option>
                          <option value="Greenland (+299)">Greenland (+299)</option>
                          <option value="Grenada (+1-473)">Grenada (+1-473)</option>
                          <option value="Guam (+1-671)">Guam (+1-671)</option>
                          <option value="Guatemala (+502)">Guatemala (+502)</option>
                          <option value="Guernsey (+44-1481)">
                            Guernsey (+44-1481)
                          </option>
                          <option value="Guinea (+224)">Guinea (+224)</option>
                          <option value="Guinea-Bissau (+245)">
                            Guinea-Bissau (+245)
                          </option>
                          <option value="Guyana (+592)">Guyana (+592)</option>
                          <option value="Haiti (+509)">Haiti (+509)</option>
                          <option value="Honduras (+504)">Honduras (+504)</option>
                          <option value="Hong Kong (+852)">Hong Kong (+852)</option>
                          <option value="Hungary (+36)">Hungary (+36)</option>
                          <option value="Iceland (+354)">Iceland (+354)</option>
                          <option value="India (+91)">India (+91)</option>
                          <option value="Indonesia (+62)">Indonesia (+62)</option>
                          <option value="Iran (+98)">Iran (+98)</option>
                          <option value="Iraq (+964)">Iraq (+964)</option>
                          <option value="Ireland (+353)">Ireland (+353)</option>
                          <option value="Isle of Man (+44-1624)">
                            Isle of Man (+44-1624)
                          </option>
                          <option value="Israel (+972)">Israel (+972)</option>
                          <option value="Italy (+39)">Italy (+39)</option>
                          <option value="Ivory Coast (+225)">
                            Ivory Coast (+225)
                          </option>
                          <option value="Jamaica (+1-876)">Jamaica (+1-876)</option>
                          <option value="Japan (+81)">Japan (+81)</option>
                          <option value="Jersey (+44-1534)">
                            Jersey (+44-1534)
                          </option>
                          <option value="Jordan (+962)">Jordan (+962)</option>
                          <option value="Kazakhstan (+7)">Kazakhstan (+7)</option>
                          <option value="Kenya (+254)">Kenya (+254)</option>
                          <option value="Kiribati (+686)">Kiribati (+686)</option>
                          <option value="Kosovo (+383)">Kosovo (+383)</option>
                          <option value="Kuwait (+965)">Kuwait (+965)</option>
                          <option value="Kyrgyzstan (+996)">
                            Kyrgyzstan (+996)
                          </option>
                          <option value="Laos (+856)">Laos (+856)</option>
                          <option value="Latvia (+371)">Latvia (+371)</option>
                          <option value="Lebanon (+961)">Lebanon (+961)</option>
                          <option value="Lesotho (+266)">Lesotho (+266)</option>
                          <option value="Liberia (+231)">Liberia (+231)</option>
                          <option value="Libya (+218)">Libya (+218)</option>
                          <option value="Liechtenstein (+423)">
                            Liechtenstein (+423)
                          </option>
                          <option value="Lithuania (+370)">Lithuania (+370)</option>
                          <option value="Luxembourg (+352)">
                            Luxembourg (+352)
                          </option>
                          <option value="Macau (+853)">Macau (+853)</option>
                          <option value="Macedonia (+389)">Macedonia (+389)</option>
                          <option value="Madagascar (+261)">
                            Madagascar (+261)
                          </option>
                          <option value="Malawi (+265)">Malawi (+265)</option>
                          <option value="Malaysia (+60)">Malaysia (+60)</option>
                          <option value="Maldives (+960)">Maldives (+960)</option>
                          <option value="Mali (+223)">Mali (+223)</option>
                          <option value="Malta (+356)">Malta (+356)</option>
                          <option value="Marshall Islands (+692)">
                            Marshall Islands (+692)
                          </option>
                          <option value="Mauritania (+222)">
                            Mauritania (+222)
                          </option>
                          <option value="Mauritius (+230)">Mauritius (+230)</option>
                          <option value="Mayotte (+262)">Mayotte (+262)</option>
                          <option value="Mexico (+52)">Mexico (+52)</option>
                          <option value="Micronesia (+691)">
                            Micronesia (+691)
                          </option>
                          <option value="Moldova (+373)">Moldova (+373)</option>
                          <option value="Monaco (+377)">Monaco (+377)</option>
                          <option value="Mongolia (+976)">Mongolia (+976)</option>
                          <option value="Montenegro (+382)">
                            Montenegro (+382)
                          </option>
                          <option value="Montserrat (+1-664)">
                            Montserrat (+1-664)
                          </option>
                          <option value="Morocco (+212)">Morocco (+212)</option>
                          <option value="Mozambique (+258)">
                            Mozambique (+258)
                          </option>
                          <option value="Myanmar (+95)">Myanmar (+95)</option>
                          <option value="Namibia (+264)">Namibia (+264)</option>
                          <option value="Nauru (+674)">Nauru (+674)</option>
                          <option value="Nepal (+977)">Nepal (+977)</option>
                          <option value="Netherlands (+31)">
                            Netherlands (+31)
                          </option>
                          <option value="Netherlands Antilles (+599)">
                            Netherlands Antilles (+599)
                          </option>
                          <option value="New Caledonia (+687)">
                            New Caledonia (+687)
                          </option>
                          <option value="New Zealand (+64)">
                            New Zealand (+64)
                          </option>
                          <option value="Nicaragua (+505)">Nicaragua (+505)</option>
                          <option value="Niger (+227)">Niger (+227)</option>
                          <option value="Nigeria (+234)">Nigeria (+234)</option>
                          <option value="Niue (+683)">Niue (+683)</option>
                          <option value="North Korea (+850)">
                            North Korea (+850)
                          </option>
                          <option value="Northern Mariana Islands (+1-670)">
                            Northern Mariana Islands (+1-670)
                          </option>
                          <option value="Norway (+47)">Norway (+47)</option>
                          <option value="Oman (+968)">Oman (+968)</option>
                          <option value="Pakistan (+92)">Pakistan (+92)</option>
                          <option value="Palau (+680)">Palau (+680)</option>
                          <option value="Palestine (+970)">Palestine (+970)</option>
                          <option value="Panama (+507)">Panama (+507)</option>
                          <option value="Papua New Guinea (+675)">
                            Papua New Guinea (+675)
                          </option>
                          <option value="Paraguay (+595)">Paraguay (+595)</option>
                          <option value="Peru (+51)">Peru (+51)</option>
                          <option value="Philippines (+63)">
                            Philippines (+63)
                          </option>
                          <option value="Pitcairn (+64)">Pitcairn (+64)</option>
                          <option value="Poland (+48)">Poland (+48)</option>
                          <option value="Portugal (+351)">Portugal (+351)</option>
                          <option value="Puerto Rico (+1-787, 1-939)">
                            Puerto Rico (+1-787, 1-939)
                          </option>
                          <option value="Qatar (+974)">Qatar (+974)</option>
                          <option value="Republic of the Congo (+242)">
                            Republic of the Congo (+242)
                          </option>
                          <option value="Reunion (+262)">Reunion (+262)</option>
                          <option value="Romania (+40)">Romania (+40)</option>
                          <option value="Russia (+7)">Russia (+7)</option>
                          <option value="Rwanda (+250)">Rwanda (+250)</option>
                          <option value="Saint Barthelemy (+590)">
                            Saint Barthelemy (+590)
                          </option>
                          <option value="Saint Helena (+290)">
                            Saint Helena (+290)
                          </option>
                          <option value="Saint Kitts and Nevis (+1-869)">
                            Saint Kitts and Nevis (+1-869)
                          </option>
                          <option value="Saint Lucia (+1-758)">
                            Saint Lucia (+1-758)
                          </option>
                          <option value="Saint Martin (+590)">
                            Saint Martin (+590)
                          </option>
                          <option value="Saint Pierre and Miquelon (+508)">
                            Saint Pierre and Miquelon (+508)
                          </option>
                          <option value="Saint Vincent and the Grenadines (+1-784)">
                            Saint Vincent and the Grenadines (+1-784)
                          </option>
                          <option value="Samoa (+685)">Samoa (+685)</option>
                          <option value="San Marino (+378)">
                            San Marino (+378)
                          </option>
                          <option value="Sao Tome and Principe (+239)">
                            Sao Tome and Principe (+239)
                          </option>
                          <option value="Saudi Arabia (+966)">
                            Saudi Arabia (+966)
                          </option>
                          <option value="Senegal (+221)">Senegal (+221)</option>
                          <option value="Serbia (+381)">Serbia (+381)</option>
                          <option value="Seychelles (+248)">
                            Seychelles (+248)
                          </option>
                          <option value="Sierra Leone (+232)">
                            Sierra Leone (+232)
                          </option>
                          <option value="Singapore (+65)">Singapore (+65)</option>
                          <option value="Sint Maarten (+1-721)">
                            Sint Maarten (+1-721)
                          </option>
                          <option value="Slovakia (+421)">Slovakia (+421)</option>
                          <option value="Slovenia (+386)">Slovenia (+386)</option>
                          <option value="Solomon Islands (+677)">
                            Solomon Islands (+677)
                          </option>
                          <option value="Somalia (+252)">Somalia (+252)</option>
                          <option value="South Africa (+27)">
                            South Africa (+27)
                          </option>
                          <option value="South Korea (+82)">
                            South Korea (+82)
                          </option>
                          <option value="South Sudan (+211)">
                            South Sudan (+211)
                          </option>
                          <option value="Spain (+34)">Spain (+34)</option>
                          <option value="Sri Lanka (+94)">Sri Lanka (+94)</option>
                          <option value="Sudan (+249)">Sudan (+249)</option>
                          <option value="Suriname (+597)">Suriname (+597)</option>
                          <option value="Svalbard and Jan Mayen (+47)">
                            Svalbard and Jan Mayen (+47)
                          </option>
                          <option value="Swaziland (+268)">Swaziland (+268)</option>
                          <option value="Sweden (+46)">Sweden (+46)</option>
                          <option value="Switzerland (+41)">
                            Switzerland (+41)
                          </option>
                          <option value="Syria (+963)">Syria (+963)</option>
                          <option value="Taiwan (+886)">Taiwan (+886)</option>
                          <option value="Tajikistan (+992)">
                            Tajikistan (+992)
                          </option>
                          <option value="Tanzania (+255)">Tanzania (+255)</option>
                          <option value="Thailand (+66)">Thailand (+66)</option>
                          <option value="Togo (+228)">Togo (+228)</option>
                          <option value="Tokelau (+690)">Tokelau (+690)</option>
                          <option value="Tonga (+676)">Tonga (+676)</option>
                          <option value="Trinidad and Tobago (+1-868)">
                            Trinidad and Tobago (+1-868)
                          </option>
                          <option value="Tunisia (+216)">Tunisia (+216)</option>
                          <option value="Turkey (+90)">Turkey (+90)</option>
                          <option value="Turkmenistan (+993)">
                            Turkmenistan (+993)
                          </option>
                          <option value="Turks and Caicos Islands (+1-649)">
                            Turks and Caicos Islands (+1-649)
                          </option>
                          <option value="Tuvalu (+688)">Tuvalu (+688)</option>
                          <option value="U.S. Virgin Islands (+1-340)">
                            U.S. Virgin Islands (+1-340)
                          </option>
                          <option value="Uganda (+256)">Uganda (+256)</option>
                          <option value="Ukraine (+380)">Ukraine (+380)</option>
                          <option value="United Arab Emirates (+971)">
                            United Arab Emirates (+971)
                          </option>
                          <option value="United Kingdom (+44)">
                            United Kingdom (+44)
                          </option>
                          <option value="United States (+1)">
                            United States (+1)
                          </option>
                          <option value="Uruguay (+598)">Uruguay (+598)</option>
                          <option value="Uzbekistan (+998)">
                            Uzbekistan (+998)
                          </option>
                          <option value="Vanuatu (+678)">Vanuatu (+678)</option>
                          <option value="Vatican (+379)">Vatican (+379)</option>
                          <option value="Venezuela (+58)">Venezuela (+58)</option>
                          <option value="Vietnam (+84)">Vietnam (+84)</option>
                          <option value="Wallis and Futuna (+681)">
                            Wallis and Futuna (+681)
                          </option>
                          <option value="Western Sahara (+212)">
                            Western Sahara (+212)
                          </option>
                          <option value="Yemen (+967)">Yemen (+967)</option>
                          <option value="Zambia (+260)">Zambia (+260)</option>
                          <option value="Zimbabwe (+263)">Zimbabwe (+263)</option>
                        </select>
                        <label htmlFor="">Contact Number</label>
                        <input type="number" maxLength={10} value={contact} onChange={(e) => {
                          setContact(e.target.value);
                        }} required />
                        <label htmlFor="">Message</label>
                        <textarea
                          name=""
                          id=""
                          value={message}
                          cols={30}
                          rows={5}
                          defaultValue={""}
                          onChange={(e) => {
                            setMessage(e.target.value);
                          }}

                          required
                        />
                        {/* <input type="text" placeholder="Captcha" /> */}
                        <button className="button_2 comm_btn_2">Send</button>
                      </div>
                    </form>
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
              <input type="number" name="" id="" />
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
}