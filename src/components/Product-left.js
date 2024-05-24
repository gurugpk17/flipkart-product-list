import React from "react";
import data from "./spec.json";

export default function ProductLeft() {
    return (
        <div className="Product-left">
            <div className="Product-left-header">
                <h4>Filters</h4>
            </div>
            <hr className="horizontal-line" />
            <div className="categories-path">
                <h4>CATEGORIES</h4>
                <h5 style={{ display: "flex", alignItems: "center", gap: '5px', marginLeft: '5%', color: "grey", marginTop: '-2%' }}>
                    <i className="fa fa-angle-left"></i>
                    <button className="link-button">Computers</button>
                </h5>
                <h5 style={{ marginLeft: '9%', marginTop: '-2%' }}>Laptops</h5>
            </div>
            <hr className="horizontal-line" />
            <div className="price">
                <h4>PRICE</h4>
                <div className="limits">
                    <input type="text" placeholder="Min" /> to
                    <input type="text" placeholder="Max" />
                </div>
            </div>
            <hr className="horizontal-line" />
            {data.map((spec, index) => (
                <div key={index}>
                    <div className="specs">
                        <h4>{spec.spec}</h4>
                        <i className="fa fa-angle-right"></i>
                    </div>
                    <hr className="horizontal-line" />
                </div>
            ))}
        </div>
    );
}
