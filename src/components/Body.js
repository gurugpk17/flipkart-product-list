import React from 'react';

export default function Body() {
    return (
        <div className="Body">
            <div className="categories1">
                <button className="categories">
                    <h3>Grocery </h3>
                </button>
            </div>
            <div className="categories2">
                <button className="categories">
                    <h3>Mobiles </h3>
                </button>
            </div>
            <div className="categories1">
                <button className="categories">
                    <h3>
                        Fashion <i className="fa fa-angle-down"></i>
                    </h3>
                </button>
                <div className="cate-sub-content">
                    <a className="sub-cate" href="#" alt="Fashion">
                        <h3>Men's Wear </h3>
                        <i className="fa fa-angle-right"></i>
                    </a>
                    <div className="sub-cate2">
                        <h4>More in Men's Wear</h4>
                        <a href="#" alt="All">
                            <h3>All</h3>
                        </a>
                        <a href="#" alt="Men's Formals">
                            <h3>Men's Formals</h3>
                        </a>
                        <a href="#" alt="Men's Casuals">
                            <h3>Men's Casuals</h3>
                        </a>
                    </div>
                    <a className="sub-cate" href="#" alt="Fashion">
                        <h3>Women's Wear</h3>
                        <i className="fa fa-angle-right"></i>
                    </a>
                    <a className="sub-cate" href="#" alt="Fashion">
                        <h3>Kid's Wear</h3>
                        <i className="fa fa-angle-right"></i>
                    </a>
                </div>
            </div>
            <div className="categories1">
                <button className="categories">
                    <h3>
                        Electronics <i className="fa fa-angle-down"></i>
                    </h3>
                </button>
                <div className="cate-sub-content">
                    <a className="sub-cate" href="#" alt="Electronics">
                        <h3>My Account</h3>
                        <i className="fa fa-angle-right"></i>
                    </a>
                    <a className="sub-cate" href="#" alt="Electronics">
                        <h3>Super coin Zone</h3>
                        <i className="fa fa-angle-right"></i>
                    </a>
                </div>
            </div>
            <div className="categories1">
                <button className="categories">
                    <h3>
                        Home & Furniture <i className="fa fa-angle-down"></i>
                    </h3>
                </button>
                <div className="cate-sub-content">
                    <a className="sub-cate" href="#" alt="Home & Furniture">
                        <h3>My Account</h3>
                        <i className="fa fa-angle-right"></i>
                    </a>
                    <a className="sub-cate" href="#" alt="Home & Furniture">
                        <h3>Super coin Zone</h3>
                        <i className="fa fa-angle-right"></i>
                    </a>
                </div>
            </div>
            <div className="categories1">
                <button className="categories">
                    <h3>Appliances </h3>
                </button>
            </div>
            <div className="categories1">
                <button className="categories">
                    <h3>Travel </h3>
                </button>
            </div>
            <div className="categories1">
                <button className="categories">
                    <h3>
                        Beauty, Toys & More <i className="fa fa-angle-down"></i>
                    </h3>
                </button>
                <div className="cate-sub-content">
                    <a className="sub-cate" href="#" alt="Beauty, Toys & More">
                        <h3>My Account</h3>
                        <i className="fa fa-angle-right"></i>
                    </a>
                    <a className="sub-cate" href="#" alt="Beauty, Toys & More">
                        <h3>Super coin Zone</h3>
                        <i className="fa fa-angle-right"></i>
                    </a>
                </div>
            </div>
            <div className="categories1">
                <button className="categories">
                    <h3>
                        Two Wheelers <i className="fa fa-angle-down"></i>
                    </h3>
                </button>
                <div className="cate-sub-content">
                    <a className="sub-cate" href="#" alt="Two Wheelers">
                        <h3>My Account</h3>
                        <i className="fa fa-angle-right"></i>
                    </a>
                    <a className="sub-cate" href="#" alt="Two Wheelers">
                        <h3>Super coin Zone</h3>
                        <i className="fa fa-angle-right"></i>
                    </a>
                </div>
            </div>
        </div>
    );
}