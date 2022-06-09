import React from "react"
import '../../App.css'
import './count.css'

import { IconContext } from "react-icons";
import { FaUsers } from "react-icons/fa";
import { FaRegBuilding } from "react-icons/fa";
import { FaSearchLocation } from "react-icons/fa";
import { FaUsersCog } from "react-icons/fa";

const count = () => {
  return (
    <>
    <div id="cards_landscape_wrap-2">
        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                    <a href="">
                        <div class="card-flyer">
                            <div class="text-box">
                            <IconContext.Provider
                                value={{ color: '#E75480', size: '50px' }}>
                                <div>
                                    <FaUsers />
                                    <h1>500+</h1>
                                    <h3>Happy Clients</h3>
                                </div>
                                </IconContext.Provider>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                    <a href="">
                        <div class="card-flyer">
                            <div class="text-box">
                            <IconContext.Provider
                                value={{ color: 'Green', size: '50px' }}>
                                <div>
                                <FaRegBuilding />
                                <h1>2+</h1>
                                <h3>Years in Business</h3>
                                </div>
                                </IconContext.Provider>
                             
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                    <a href="">
                        <div class="card-flyer">
                            <div class="text-box">
                            <IconContext.Provider
                                value={{ color: '#E75480', size: '50px' }}>
                                <div>
                                <FaSearchLocation />
                                <h1>4</h1>
                                <h3>Global Locations</h3>
                                </div>
                                </IconContext.Provider>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                    <a href="">
                        <div class="card-flyer">
                            <div class="text-box">
                            <IconContext.Provider
                                value={{ color: '#8B0000', size: '50px' }}>
                                <div>
                                <FaUsersCog />
                                <h1>50+</h1>
                                <h3>Verified Reviews</h3>
                                </div>
                                </IconContext.Provider>
                               
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>

    </>
  )
}

export default count

