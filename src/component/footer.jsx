import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <Fragment>
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 mb-3">
                            <p className="footer-title">Sandika</p>
                            <ul className="footer-links">
                                <li><a href="https://www.yogyaonline.co.id/profil-kami">Profil</a></li>
                                <li><a href="https://www.yogyaonline.co.id/hubungi-kami">Hubungi Kami</a></li>
                                <li><a href="https://bit.ly/pageyoldobelbonus2020" target="_blank" rel="noopener">Dobel Bonus&nbsp;Plus!</a></li>
                                <li><a href="https://www.yogyaonline.co.id/yogyaonlineblog">Blog</a></li>
                                <li><a href="https://bit.ly/yolnewsupdate" target="_blank" rel="noopener">News</a></li>
                            </ul>
                        </div>
                        <div className="col-md-2 mb-3">
                            <p className="footer-title">Kebijakan</p>
                            <ul className="footer-links">
                                <li><a href="https://www.yogyaonline.co.id/profil-kami">Membership</a></li>
                            </ul>
                        </div>
                        <div className="col-md-2 mb-3">
                            <p className="footer-title">Bantuan</p>
                            <ul className="footer-links">
                                <li><a href="https://www.yogyaonline.co.id/cara-belanja">Cara Belanja</a></li>
                                <li><a href="https://www.yogyaonline.co.id/faq">FAQ</a></li>
                                <li><a href="https://www.yogyaonline.co.id/pembayaran">Pembayaran</a></li>
                                <li><a href="https://www.yogyaonline.co.id/pengiriman">Pengiriman</a></li>
                                <li><a href="https://www.yogyaonline.co.id/pengembalian">Pengembalian</a></li>
                            </ul>
                        </div>
                        <div className="col-md-5 mb-3">
                            <p className="footer-title">Newsletter</p>
                            <form className="form subscribe mb-3">
                                <div className="form-row justify-content-center">
                                    <div className="form-group col-8">
                                        <input type="email" className="form-control" id="uEmail" aria-describedby="uEmail" placeholder="Masukkan alamat email Anda..."/>
                                        {/* <small className="form-text text-muted">Masukan tanggal checkin yang diinginkan.</small> */}
                                    </div>
                                    <div className="form-group col-4">
                                        <button type="submit" className="btn btn-block">Cari</button>
                                    </div>
                                </div>
                            </form>
                            <p className="footer-title">Follow Us</p>
                            <ul className="footer-social-links">
                                <li><a href="https://www.yogyaonline.co.id/cara-belanja"><FontAwesomeIcon icon={faFacebookF}/></a></li>
                                <li><a href="https://www.yogyaonline.co.id/faq"><FontAwesomeIcon icon={faInstagram}/></a></li>
                                <li><a href="https://www.yogyaonline.co.id/pembayaran"><FontAwesomeIcon icon={faTwitter}/></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Footer;
