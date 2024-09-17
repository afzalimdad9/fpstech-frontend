"use client";
import React, { useEffect } from "react";
import Link from "@/node_modules/next/link";
import { Fragment, SetStateAction, useState } from "react";
import { useSearchParams } from "@/node_modules/next/navigation";
import Image from "@/node_modules/next/image";

import Pagination from "../_components/Paginations";


const Producttag = () => {

  const params = useSearchParams();
  console.log("All params", params);

  const getTagName = params.get("tagname");
  console.log("Params Value", getTagName);
  const getPageName: any = params.get("page");
  console.log("Page Number", getPageName);

  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState<any>([]);
  const [search, setSearch] = useState('d-none');
  const [tagProductList, setProductTaglist] = useState<any>([]);
  const [showview, setGridView] = useState('grid');
  const [loading, setLoading] = useState(false);


  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const [totalPages, setTotalPages] = useState<any>(0);

  const handleNextPage = () => {
    setPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePreviousPage = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const autocomplete = async (query: SetStateAction<string>) => {
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

  };

  //console.log("All data", searchResults.length);

  ///Get product list according to Category wise.
  const prodList = async (tagname: any, page: number, limit: number) => {
    //console.log("Tag name", tagname);
    setLoading(true);
    if (tagname) {
      setProductTaglist(
        //await (await fetch("http://localhost:1000/tag-product-list?tagname=" + tagname)).json()
        //await (await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + "/tag-product-list?tagname=" + tagname)).json()
        await (await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + `/tag-product-list_new?tagname=${tagname}&page=${page}&limit=12`)).json()

      );
    }
    setLoading(false);
  }

  console.log("All Tag product list", tagProductList?.items);

  const showGridView = () => {
    console.log("Grid view clicked");
    setGridView('grid');
  }

  const showListView = () => {
    console.log("List view is clicked");
    setGridView('list');
  }

  useEffect(() => {
    prodList(getTagName, getPageName, limit)
  }, [getTagName, getPageName, limit])



  ///Fileter records
  const filterData = async (event: any) => {
    let selectedValue = event.target.value;
    console.log("Select value", selectedValue);
    console.log("Get Cat name", getTagName);
    if (selectedValue) {
      setProductTaglist(
        //await (await fetch("http://localhost:1000/tagfilter-cat-product-list?tagname=" + getTagName +'&filterVal='+selectedValue)).json()
        await (await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + "/tagfilter-cat-product-list?tagname=" + getTagName + '&filterVal=' + selectedValue)).json()

      );
    }

  }


  ////Show per page data
  const showPerpageData = async (event: any) => {
    //alert("hello");
    let perPagefilter = event.target.value;
    console.log("Per pgae", perPagefilter);
    if (perPagefilter) {
      setProductTaglist(
        //await (await fetch("http://localhost:1000/tagperpage-cat-product-list?tagname=" + getTagName +'&perpage='+perPagefilter)).json()
        await (await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + "/tagperpage-cat-product-list?tagname=" + getTagName + '&perpage=' + perPagefilter)).json()

      );
    }
  }



  return <>
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
                <i className="fa-solid fa-magnifying-glass" />
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
                          key={item._id}>
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
        </div>
      </div>
    </div>

    {loading ? (
      <div className="loadercatg">
        <div className="spinner"></div>
        Loading...
      </div>) : ""}

    <main className="bg_grey pt-5">
      <section className="listing_sec">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              {/* <p className="top_p">Buy {getCatName} Online</p> */}
              <div className="filter_bar">
                <div className="left">
                  {/* icons  */}
                  <button className="" onClick={showGridView}>
                    <img src="images/grid.svg" alt="" />
                  </button>
                  <button className="ms-1" onClick={showListView}>
                    <img src="images/list.svg" alt="" />
                  </button>
                  {/* icons  */}
                  <span>Showing 1-12 of {tagProductList?.totalItems} results</span>
                </div>

                <div className="right">
                  {/* <select
                name="orderby"
                className="orderby"
                aria-label="Shop order"
                onChange={filterData}
              >
                <option value="menu_order">
                  Default sorting
                </option>
                <option value="rating">Sort by average rating</option>
                <option value="latest">Sort by latest</option>
                <option value="lowtoheigh">Sort by price: low to high</option>
                <option value="hightolow">Sort by price: high to low</option>
              </select> */}
                  <label htmlFor="">show</label>
                  <select name="per_page" className="per_page" onChange={showPerpageData}>
                    <option value="">Select</option>
                    <option value="6">6</option>
                    <option value="9">9</option>
                    <option value="12">12</option>
                    <option value="15">15</option>
                    <option value="18">18</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              {/* <div id="products" className="grid-view"> */}
              <div id="products" className={`${showview}-view`}>
                {tagProductList?.items?.length > 0 && tagProductList?.items.map((item: any, index: any) => (
                  <div className="product" key={item._id}>
                    <Link
                      href={{
                        pathname: `/products`,
                        query: {
                          product: item.product_url,
                          prodId: item._id
                        },
                      }}
                      key={item._id}>
                      <div className="img_box">
                        {/* <img src="./images/product_fps-online.png" alt="Product 1" /> */}
                        <Image src={item.product_image} alt="" width={500} height={500} />
                      </div>
                    </Link>
                    <div className="product_caption text-start">
                      <Link href={{
                        pathname: `/products`,
                        query: {
                          product: item.product_url,
                          prodId: item._id
                        },
                      }}></Link>
                      <h3>
                        <a href="#"></a>
                        <Link href={{
                          pathname: `/products`,
                          query: {
                            product: item.product_url,
                            prodId: item._id
                          },
                        }}>{item.product_name}</Link>
                      </h3>
                      <div className="posted_in">
                        <Link href={{
                          pathname: `/products`,
                          query: {
                            product: item.product_url,
                            prodId: item._id
                          },
                        }}>{getTagName}</Link>
                      </div>
                      <div className="short_description">
                        <p>
                          {item.product_desc}
                        </p>
                      </div>
                      <Link href={{
                        pathname: `/products`,
                        query: {
                          product: item.product_url,
                          prodId: item._id
                        },
                      }}><button className="comm_btn_3 button_3">READ MORE</button></Link>
                    </div>
                  </div>
                ))}



              </div>
            </div>
          </div>
          <div className="row">
            <div className="com-md-12">
              <nav className="woocommerce-pagination">
                <ul className="page-numbers">

                  {/* <button onClick={handlePreviousPage} disabled={page === 1}>
             Previous
            </button> */}

                  <Pagination currentPage={tagProductList.page} totalPages={tagProductList.totalPages} param1={getTagName} />

                  {/* <button onClick={handleNextPage} disabled={page === totalPages}>
              Next
            </button> */}



                  {/* <li>
                <span aria-current="page" className="page-numbers current">
                  1
                </span>
              </li>
              <li>
                <a className="page-numbers" href="#">
                  2
                </a>
              </li>
              <li>
                <a className="page-numbers" href="#">
                  3
                </a>
              </li>
              <li>
                <a className="page-numbers" href="#">
                  4
                </a>
              </li>
              <li>
                <a className="page-numbers" href="#">
                  ...
                </a>
              </li>
              <li>
                <a className="page-numbers" href="#">
                  25
                </a>
              </li>
              <li>
                <a className="page-numbers" href="#">
                  26
                </a>
              </li>
              <li>
                <a className="page-numbers" href="#">
                  27
                </a>
              </li>
              <li>
                <a className="next page-numbers" href="#">
                  <i className="fa-solid fa-arrow-right" />
                </a>
              </li> */}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>
      <section className="shop_bot">
        <div className="container">
          <div className="row flex-wrap">
            <div className="sec_box">
              <h6>Worldwide delivery</h6>
              <p>
                Delivery of goods all over the world with Multiple Shipping Options.
              </p>
            </div>
            <div className="sec_box">
              <h6>Genuine Products</h6>
              <p>Guaranteed product quality.</p>
            </div>
            <div className="sec_box">
              <h6>Fastest Service</h6>
              <p>Fast Service with, Instant Support</p>
            </div>
            <div className="sec_box">
              <h6>24/7 Support</h6>
              <p>Our live chat support is available 24/7</p>
            </div>
            <div className="sec_box">
              <h6>Secure Payments</h6>
              <p>Secure Payment with Multiple Payment Options</p>
            </div>
          </div>
        </div>
      </section>
    </main>

  </>
}
export default Producttag