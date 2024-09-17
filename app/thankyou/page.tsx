"use client"; // <===== REQUIRED
import React from "react";
import Link from "@/node_modules/next/link";
import { useState, SetStateAction } from "react";

const Thankyou = () => {
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
            <div className="main-wrapper">
                {/* Header Start  */}
                <div id="header" className="section header-section header-section-05">
                    <div className="container">
                        {/* Header Wrap Start  */}
                        <div className="header-wrap">
                            <div className="col-lg-3 logo_bx">
                                <div className="header-logo">
                                    <a href="index.html">
                                        <img src="images/logo.png" alt="" />
                                    </a>
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

                        </div>
                    </div>
                </div>
                <main className="">
                    {/* About card section  */}
                    <section
                        className="pp_banner"
                        style={{ backgroundImage: "url(./images/3240987-1070x510-3.jpg)" }}
                    />
                    <section className="thank">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <h1 className="site-header__title">THANK YOU!</h1>
                                    <div className="icon">
                                        <i className="fa-solid fa-check" />
                                    </div>
                                    <p>
                                        Thanks a bunch for filling that out. We recieved your quote
                                        request succesfully. A Confirmation email has been sent to you. We
                                        will get back to you with the Quote. We really appreciate you
                                        giving us a moment of your time today. Thanks for being you.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* About card section  */}
                </main>
            </div>

        </>
    )
}
export default Thankyou;