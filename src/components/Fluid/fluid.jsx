import React from "react"
import { IconContext } from "react-icons";
import { FaLaptop } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { FaRegClone } from "react-icons/fa";
import { FaGoogleWallet } from "react-icons/fa";
import '../../App.css'

const Fluided = () => {
  return (
    <>
       <section id="services">
        <div class="bg-white px-4 px-lg-5" >
                <div class="row gx-4 gx-lg-5">
                    <div class="col-lg-6 col-md-6 back-image text-center">
                        <div class="mt-5 font-custom">
                            <h6 className="cus-pad">ABOUT SPK SYSTEMS</h6>
                            <h2 className="cus-pad">Leading Software Development Company</h2>
                            <h6 className="cus-pad">SPK Systems is the complete services web development and company for Software Development in India that takes a holistic view of various perspectives. We believe in the power of positive emotion and being unique in the market. Further, we also understand the technology and its role in propagating a cause. With this, we integrate every element into our strategy to create a proposition that brings an incredible distinction to the business.</h6>
                        </div>
                    </div>
                    <div class="col-lg-6 custom-padding-one col-md-6 text-center">
                    <div class="bg-white px-4">
                <div class="row gx-10 gx-lg-10">
                    <div class="col-lg-6 col-md-6 custom-padding text-center">
                        <div class="mt-5">
                        <IconContext.Provider
                                value={{ color: 'Green', size: '110px' }}>
                                <div>
                                    <FaLaptop />
                                    <h2 className="font-custom-one" style={{color:"Green", fontWeight:600}}>Website Design</h2>
                                    <h6>We are the Best Web design and Development Company in India function around aligning every element of a useful website and creating a fully functional website for your company.</h6>
                                </div>
                                </IconContext.Provider>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 text-center">
                    <div class="mt-5">
                        <IconContext.Provider
                                value={{ color: 'Green', size: '110px' }}>
                                <div>
                                    <FaCode />
                                    <h2 className="font-custom-one" style={{color:"Green", fontWeight:600}}>Software Development</h2>
                                    <h6>We are the Best Web design and Development Company in India function around aligning every element of a useful website and creating a fully functional website for your company.</h6>
                                </div>
                                </IconContext.Provider>
                        </div>
                    </div>
                </div>
                <div class="row gx-10 gx-lg-10">
                    <div class="col-lg-6 col-md-6 custom-padding text-center">
                    <div class="mt-5">
                        <IconContext.Provider
                                value={{ color: 'Green', size: '110px' }}>
                                <div>
                                    <FaRegClone />
                                    <h2 className="font-custom-one" style={{color:"Green", fontWeight:600}}>Digital Marketing</h2>
                                    <h6>We are the Best Web design and Development Company in India function around aligning every element of a useful website and creating a fully functional website for your company.</h6>
                                </div>
                                </IconContext.Provider>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 text-center">
                    <div class="mt-5">
                        <IconContext.Provider
                                value={{ color: 'Green', size: '110px' }}>
                                <div>
                                    <FaGoogleWallet />
                                    <h2 className="font-custom-one" style={{color:"Green", fontWeight:600}}>SEO</h2>
                                    <h6>We are the Best Web design and Development Company in India function around aligning every element of a useful website and creating a fully functional website for your company.</h6>
                                </div>
                                </IconContext.Provider>
                        </div>
                    </div>
                </div>
            </div>
                    </div>
                </div>
            </div>
            </section>
    </>
  )
}

export default Fluided

