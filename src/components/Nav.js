import React from "react";
import Logo from "../images/logo1.png"
import Profile from "../images/profile.png" 
import Supercoin from "../images/supercoin.svg" 
import Search from "../images/search.png" 
import Cart from "../images/cart.png" 
import Seller from "../images/Store.png" 
import Dots from "../images/vertical-dots.png" 
import Fkplus from "../images/fkplus.svg" 
import Giftcard from "../images/giftcard.svg" 
import Wishlist from "../images/wishlist.svg" 
import Coupons from "../images/coupons.svg" 
import Download from "../images/download.svg" 
import Orders from "../images/orders.svg" 
import Helpcenter from "../images/helpcenter.svg" 
import Logout from "../images/logout.svg" 
import Advertise from "../images/advertise.svg" 
import Notification from "../images/notification.svg" 

export default function Home() {
    return (
        <div className="nav-body">
            <header className="navbar">
                <img src={Logo} className="logo" alt="logo"/>
                <div className="search">
                    <button type="submit" className="search-button"><img className="srchlogo" src={Search} alt="srchlogo"/></button>
                    <input type="text" className="input-box" placeholder="Search for Products, Brands, and More" name="search"/>
                </div>
                <div className="acc-det">
                    <div className="profile1">
                        <button className="profile">
                            <img src={Profile} className="profile-logo" alt="profile"/>
                            <h3>Account</h3>
                            <i className="fa fa-angle-down"></i>
                        </button>
                        <div className="subnav-content">
                            <a className="sub-profile" href="#none">
                                <img src={Profile} className="sub-profile-logos" alt="profile"/>
                                <h3>My Account</h3>
                            </a>
                            <a className="sub-profile" href="#none">
                                <img src={Supercoin} className="sub-profile-logos" alt="supercoin"/>
                                <h3>Super coin Zone</h3>
                            </a>
                            <a className="sub-profile" href="#none">
                                <img src={Fkplus} className="sub-profile-logos" alt="fkplus"/>
                                <h3>Flipkart plus zone</h3>
                            </a>
                            <a className="sub-profile" href="#none">
                                <img src={Orders} className="sub-profile-logos" alt="orders"/>
                                <h3>Orders</h3>
                            </a>
                            <a className="sub-profile" href="#none">
                                <img src={Wishlist} className="sub-profile-logos" alt="wishlist"/>
                                <h3>Wishlist</h3>
                            </a>
                            <a className="sub-profile" href="#none">
                                <img src={Coupons} className="sub-profile-logos" alt="coupons"/>
                                <h3>Coupons</h3>
                            </a>
                            <a className="sub-profile" href="#none">
                                <img src={Giftcard} className="sub-profile-logos" alt="giftcard"/>
                                <h3>Gifts</h3>
                            </a>
                            <a className="sub-profile" href="#none">
                                <img src={Notification} className="sub-profile-logos" alt="notification"/>
                                <h3>Notification</h3>
                            </a>
                            <a className="sub-profile" href="#none">
                                <img src={Logout} className="sub-profile-logos" alt="logout"/>
                                <h3>Logout</h3>
                            </a>
                        </div>  
                    </div>
                    <button className="cart">
                        <img src={Cart} className="cart-logo" alt="cart"/>
                        <h3>Cart</h3>
                    </button>
                    <button className="seller">
                        <img src={Seller} className="seller-logo" alt="seller"/>
                        <h3>Become a seller</h3>
                    </button>
                    <div className="dots1">
                        <button className="dots">
                            <img src={Dots} className="dots-logo" alt="dots"/>
                        </button>
                        <div className="dots-sub-content">
                            <a className="sub-profile" href="#none">
                                <img src={Notification} className="sub-profile-logos" alt="notification"/>
                                <h3>Notification preferences</h3>
                            </a>
                            <a className="sub-profile" href="#none">
                                <img src={Helpcenter} className="sub-profile-logos" alt="helpcenter"/>
                                <h3>24x7 Customer Care</h3>
                            </a>
                            <a className="sub-profile" href="#none">
                                <img src={Advertise} className="sub-profile-logos" alt="advertise"/>
                                <h3>Advertise</h3>
                            </a>
                            <a className="sub-profile" href="#none">
                                <img src={Download} className="sub-profile-logos" alt="download"/>
                                <h3>Download App</h3>
                            </a>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}
