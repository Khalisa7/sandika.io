/**
 * ==============================================
 * @category   CategoryName
 * @package    PackageName
 * @author     Sendika
 * @copyright  2020 Sendika Indonesia
 * @version    1.0
 * ==============================================
 */

 
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { Tabs, Tabs_Nav, Tabs_NavLink, Tabs_ContentWrapper, Tabs_ContentChildren } from '@src/component/tabs'

function Home(props){

    return(
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-9 home-dashboard">
                    <div className="page-title my-4">
                        <h3>Dashboard</h3>
                    </div>
                    <div className="profile-silluet">
                        <div className="media">
                            <div className="initial-box">
                                <h1>HS</h1>
                            </div>
                            <div className="media-body">
                                <h5 className="mt-0">Herlina Sunaryanto</h5>
                                <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. </p>
                                <br/>
                                <p>
                                    <span className="mr-2"><FontAwesomeIcon icon={faEnvelope} className="fa-fw mr-2" />sunaryanto@icube.us</span>
                                    <span className="mr-2"><FontAwesomeIcon icon={faPhone} className="fa-fw mr-2" />098765434567</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <Tabs className="employee-profile">
                        <Tabs_Nav>
                            <Tabs_NavLink>Data Karyawan</Tabs_NavLink>
                        </Tabs_Nav>
                        <Tabs_ContentWrapper id="employee-profile">
                            <Tabs_ContentChildren active={1}>
                                <div className="row">
                                    <div className="col-3"><p>Nomor Induk Pegawai</p></div>
                                    <div className="col-9"><p>Icube - 34567898765467</p></div>
                                </div>
                                <div className="row">
                                    <div className="col-3"><p>Nama</p></div>
                                    <div className="col-9"><p>Herlina Sunaryanto</p></div>
                                </div>
                                <div className="row">
                                    <div className="col-3"><p>Email</p></div>
                                    <div className="col-9"><p>sunaryanto@icube.us</p></div>
                                </div>
                                <div className="row">
                                    <div className="col-3"><p>Status Kontrak</p></div>
                                    <div className="col-9"><p>Internship</p></div>
                                </div>
                                <div className="row">
                                    <div className="col-3"><p>Tanggal Kontrak</p></div>
                                    <div className="col-9"><p>20 Januari 2017</p></div>
                                </div>
                            </Tabs_ContentChildren>
                        </Tabs_ContentWrapper>
                    </Tabs>
                </div>
            </div>
        </div>
    )
}

export default Home