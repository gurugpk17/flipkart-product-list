import React from 'react';
import Wishlist from "../images/heart.png";
import Star from "../images/star.png";
import Data from './products.json';

export default function ProductRight() {
    return (
        <div className="Product-right">
            <div className="product-right-header">
                <a className="path" href="#">
                    <h6>Home
                        <i className="fa fa-angle-right"></i>
                        Computers
                        <i className="fa fa-angle-right"></i>
                        Laptops
                    </h6>
                </a>
                <h4 className="results-number">Showing 1 - 24 of 77 results for "laptops"</h4>
                <a className="product-filter" href="#">
                    <h4>Sort By</h4>
                    <h4 style={{ color: "#2874F0" }}>Relevance</h4>
                    <h4>Popularity</h4>
                    <h4>Price - Low to High</h4>
                    <h4>Price - High to Low</h4>
                    <h4>Newest First</h4>
                </a>
            </div>
            <hr className="horizontal-line" />
            {Data.map((data, index) => (
                <div key={index}>
                    <div className="product-list">
                        <div className="product-image">
                            <img className="wishlist-png" src={Wishlist} alt="Wishlist" />
                            <img className="product-png" src={data.imgUrl} alt="product" />
                            <div className="checkbox">
                                <input type="checkbox" />
                                <label>Add to Compare</label>
                            </div>
                        </div>
                        <div className="product-desc">
                            <h6>Sponsored</h6>
                            <h3>{data.title}</h3>
                            <div className="rating">
                                <h5>{data.rating}</h5>
                                <img src={Star} className="star" alt="Star" />
                            </div>
                            {data.properties.map((element, propIndex) => (
                                <div className="spec" key={propIndex}>
                                    <li>{element}</li>
                                </div>
                            ))}
                        </div>
                        <div className="product-price">
                            <h2>{data.price}</h2>
                            <h6 style={{ color: "grey", paddingBottom: '5%' }}>17% off</h6>
                            <h6>Free delivery by <span>28th May</span></h6>
                            <h6>No Cost EMI</h6>
                            <h6 style={{ color: "green", fontWeight: 700 }}>Save extra with combo offers</h6>
                            <h6>Upto ₹14,650 Off on Exchange</h6>
                        </div>
                    </div>
                    <hr className="horizontal-line" />
                </div>
            ))}
        </div>
    );
}
