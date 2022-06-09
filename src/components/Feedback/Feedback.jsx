import React from "react"
import '../../App.css'
import './Feedback.css'

const Feedback = () => {
  return (
    <>
     <section class="masthead" id='contact'>
          <div class="container-fluid h-100 w-100 bg-success">
          <div class="row gx-4 gx-lg-5">
            <div class="col-md-6 col-lg-6 col-xl-6">
              <div class='company-basic-item-wrapper mt-5'>
                <h4 class='text-white'>We Always Here To Help You</h4>
                <h4 class='text-white'>Contact Us Now</h4>
                <div class='company-item text-white'>
                  <i class='bi bi-envelope' aria-hidden='true'></i>
                  <p class='ml-3'>info@spksystems.in</p>
                </div>
                <div class='company-item text-white'>
                  <i class='bi bi-telephone-fill' aria-hidden='true'></i>
                  <div class='ml-3'> +91 93844 67779</div>
                </div>
                <h5 class='text-white mt-3'>Connect With Us On</h5>
                <div class='company-item text-white mt-2'>
                  <i class='bi bi-facebook' aria-hidden='true'></i>
                  <i class='bi bi-twitter ml-3' aria-hidden='true'></i>
                  <i class='bi bi-youtube ml-3' aria-hidden='true'></i>
                </div>
              </div>
              </div>
              <div class="col-md-6 col-lg-6 col-xl-6">
                <div class='container-form'>
                <form class='form-wapper'>
                  <div class="mt-3">
                    <label>Name</label>
                    <input type="email" class="form-control"  placeholder="Name" />
                  </div>
                 <div class="mt-3">
                    <label>Email </label>
                    <input type="email" class="form-control"  placeholder="Email" />
                  </div>
                 <div class="mt-3">
                    <label>Mobile Number</label>
                    <input type="number" class="form-control"  placeholder="Number" />
                 </div>
                 <div class="mt-3">
                    <label>Service</label>
                    <input type="number" class="form-control"  placeholder="Service" />
                 </div>
                 <div class="mt-3">
                    <p>What is your project type?</p>
                    <p>| Website | App | Software | Digital Marketing</p>      
                 </div>
                 <div class="mt-3">
                    <label>Message</label><br />
                    <textarea class="form-control" placeholder='Message' rows='3'></textarea>
                 </div>
                 <div class="mt-3">
                   <button class='form-control bg-success text-white' type='button'>send</button>
                 </div>
                 <br />
              </form>
                </div>

              </div>
              </div>
            
            </div>
            </section>
     
    </>
  )
}

export default Feedback