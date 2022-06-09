import React from "react"
import Pic1 from '../../assets/img/portfolio/thumbnails/1.jpg'
import '../../App.css'
import './Basic.css'

const Basic = () => {
  return (
    <>
     <section class="masthead" id='Industries'>
        <div class="container-fluid  bg-white h-100">
          <div class="row gx-4 gx-lg-5">
            <div class="col-md-6 col-lg-6 col-xl-6">
            <div class='cus-img'>
            <img class="img-fluid h-100" src={Pic1} alt="..." />
            </div>
            </div>
            <div class="col-md-6 col-lg-6 col-xl-6 cus-text bg-success">
              <h5>WHY CHOOSE US</h5>
              <h1>Your Success Is Our Reputation</h1>
              <h4>Strong Market Analysis</h4>
              <p>With a highly talented and creative team with an affordable digital marketing company in India, we use cutting-edge technologies and methods to boost your business brand and bring in more leads for your business.</p>
              <h4>Experience & Precision :</h4> 
              <p>As the best Website Development Company in India, SPK Systems provides high-quality, and affordable website development in India that converts your plan into reality and you got a high-end and unique Website as per your business requirements.</p>
              <h4>Experts About Business :</h4>
              <p>Your customer’s business software needs an extra edge! SPK Systems, Custom software services company in India have an extra broad spectrum of offering to suits your needs.</p>
              <button class='read-more' type='button'>Read more</button>
            </div>
          </div>
        </div>
        <div class="container-fluid  bg-gradien">
           <div class="row gx-4 gx-lg-5 px-4 px-lg-5 justify-content-center">
              <div class="col-md-6 col-lg-6 col-xl-6 text-center">
                  <h4 class='text-white mt-5'>How can you build your business</h4><br />
                  <button class='btn-cus-redien'>Let's Work Together</button>
              </div>
            <div class="col-md-6 col-lg-6 col-xl-6 text-center">
                  <h4 class='text-white mt-5'>Our people are our greastest assets</h4><br />
                  <button class='btn-cus-redien'>come Work with Us</button>
              </div>
          </div>
        </div>
        </section>
    </>
  )
}

export default Basic