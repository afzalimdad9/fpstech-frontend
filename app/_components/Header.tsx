"use client";
import React from "react";
import Link from "@/node_modules/next/link";
import { useState, SetStateAction } from "react";
import Router from "@/node_modules/next/router";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState<any>([]);
  const [search, setSearch] = useState('d-none');
  const [loading, setLoading] = useState(false);

  const [inputSearch, setInputSearchVal] = useState('');

  const showSearchbox = () => {
    setIsOpen((isOpen) => !isOpen);
    setInputSearchVal('');

  }

  console.log("CHECK")
  const handleClick = () => {
    //setIsOpen((isOpen) => isOpen);
    setIsOpen(false);
  }


  const hidePlist = () => {
    //console.log("prduct clicked");
    setIsOpen(false);
    setSearch('d-none');
    //setInputSearchVal('');

  }

  const autocomplete = async (query: SetStateAction<string>) => {
    setInputSearchVal(query);
    setLoading(true);
    setQuery(query);
    //console.log("Query value", query);
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
    //setInputSearchVal(query);

  };

  //console.log("All data", searchResults.length);



  return (
    <>
      <div className="header_top">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <p>Hi! Welcome to FPS online store.</p>
            </div>
            <div className="col-md-8">
              <div className="header-social d-flex justify-content-end align-items-center">
                <ul className="nav_ul">
                  <li>
                    <Link href="/">HOME</Link>
                  </li>
                  <li>
                    <Link href="/faq">FAQ</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact Us</Link>
                  </li>
                </ul>
                {/* <ul className="log_ul">
                  <li>
                    <a className="open_sign" href="javascript:void(0)">
                      Sign In
                    </a>
                  </li>
                  <li>or</li>
                  <li>
                    <a className="open_sign" href="javascript:void(0)">
                      Register
                    </a>
                  </li>
                </ul> */}
              </div>
            </div>
          </div>
          {/* <div className="login_card">
            <div className="login-form-head">
              <span className="login-form-title">Sign in</span>
              <span className="pull-right">
                <a className="register-link" href="#" title="Register">
                  Create an Account
                </a>
              </span>
            </div>
            <div className="form_body">
              <label htmlFor="">
                Username or email <span>*</span>
              </label>
              <input type="text" placeholder="Username" />
              <label htmlFor="">
                Password <span>*</span>
              </label>
              <input type="text" placeholder="Password" />
              <button className="login_btn">Login</button>
            </div>
          </div> */}
        </div>
      </div>
      {/* Top heaqder  */}
      {/* Mobile menu start  */}
      <div className="mob_menu d-none">
        <div className="container">
          <div className="row">
            <div className="col-4">
              <a href="https://wa.me/919826255524?text=Hello!" target="_blank">
                <div className="menu_box">
                  <i className="fa-brands fa-whatsapp" />
                  <span>Chat</span>
                </div>
              </a>
            </div>
            <div className="col-4">
              {/* <a href="javascript:void(0)">
                <div className="menu_box" id="mob_search">
                  <i className="fa-solid fa-magnifying-glass" />
                  <span>Search</span>
                </div>
              </a> */}

              <Link onClick={showSearchbox} href={""}>
                <div className="menu_box" id="mob_search">
                  <i className="fa-solid fa-magnifying-glass" />
                  <span>Search</span>
                </div>
              </Link>

            </div>
            <div className="col-4">
              <Link href="/contact">
                <div className="menu_box end">
                  <i className="fa-regular fa-envelope-open" />
                  <span>Contact</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile menu end  */}
      {/* Mobile search start */}


      <div className="mob_search" style={{ display: isOpen ? 'block' : 'none' }}>
        <div className="container">
          <div className="row">
            <div className="search_box" style={{ display: isOpen ? 'block' : 'none' }}>
              <input type="text" name="searchprod" id="searchprod" value={inputSearch} placeholder="Search products..."
                onChange={(event) => autocomplete(event.target.value)

                } />

              {loading ? <div className="loader"></div> : <i className="fa-solid fa-magnifying-glass" />}

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
                          onClick={hidePlist}
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

              <span className="close_btn">
                <i className="fa-regular fa-circle-xmark" onClick={handleClick} />
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="backDrop" style={{ display: isOpen ? 'block' : 'none' }}></div>
    </>

  )
}

export default Header;