import React from "react"
import Webkit from '../../assets/webkit.png'
import Human from '../../assets/human.jpg'
import '../../App.css'
import './TechnologyStack.css'

const TechnologyStack = () => {
  return (
    <>
      <section class="page-section bg-white" >
          <div class="container  justify-content-center">
            <h2 class="text-center mt-0">Our Team Expertise in Various Technology</h2><br />
            <p class="text-center ">Our work on the project includes Graphic Design, website development, software development, testing, support, and maintenance. We know well and work on a daily basis with a number of technologies and programming languages, such as...</p>
          </div>
          </section>
          <div class='container-fluid bg-white'>
          <section class="masthead">
          <div class="container-fluid">
            <div class='img-weblit'>
              <img class="img-fluid w-100 h-100" src={Webkit} alt="..." />
            </div>
            </div>
            </section>
           
         <section class="mt-5" >
          <div class="container justify-content-center">
            <h5 class="text-center mt-0 text-primary">Easy Solutions For All Difficult IT Problems, Keep Business Safe & Ensure High Availability.</h5><br />
            <h2 class="text-center">Our Recognitions</h2>
          </div>
          </section>

        
        <section class="mt-5 bg-white" id="services">
            <div class="container px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-lg-4 col-md-6 cus-card bg-gray">
                        <div class="mt-3">
                            <div class="img-human"><img class="img-fluid" src={Human} alt="..." /> </div>                            
                            <p class="text-muted font-text">Anytime to need support, SPK system have gotten to it swiftly, there is no doubt someone is always available to help you out, It's really made it easy to start making my business come alive !</p>
                            <div class='star-rating gap-3'>
                              <i class='bi bi-star-fill' aria-hidden='true'></i>
                              <i class='bi bi-star-fill' aria-hidden='true'></i>
                              <i class='bi bi-star-fill' aria-hidden='true'></i>
                              <i class='bi bi-star-fill' aria-hidden='true'></i>
                              <i class='bi bi-star-fill' aria-hidden='true'></i>
                            </div>
                            <p>Bathresh</p>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 cus-card">
                        <div class="mt-3">
                         <div class="img-human"><img class="img-fluid" src={Human} alt="..." /> </div>
                            <p class="text-muted font-text">We have been hearing wonderful things from everybody about the website. Thank you team for giving us exactly what we wanted and doing your best in making it all come together. It was an absolute pleasure working with you.</p>
                            <div class='star-rating gap-3'>
                              <i class='bi bi-star-fill' aria-hidden='true'></i>
                              <i class='bi bi-star-fill' aria-hidden='true'></i>
                              <i class='bi bi-star-fill' aria-hidden='true'></i>
                              <i class='bi bi-star-fill' aria-hidden='true'></i>
                              <i class='bi bi-star-fill' aria-hidden='true'></i>
                            </div>
                            <p>Krishna Moorthi</p>
                         </div>
                    </div>
                    <div class="col-lg-4 col-md-6 cus-card bg-gray">
                        <div class="mt-3">
                        <div class="img-human"><img class="img-fluid" src={Human} alt="..." /> </div>
                            <p class="text-muted font-text">Our experience working with SPK Systems has been nothing Short of amazing. They have helped us develop a strong online presence which helps our business go from strength to strength</p>
                            <div class='star-rating gap-3'>
                              <i class='bi bi-star-fill' aria-hidden='true'></i>
                              <i class='bi bi-star-fill' aria-hidden='true'></i>
                              <i class='bi bi-star-fill' aria-hidden='true'></i>
                              <i class='bi bi-star-fill' aria-hidden='true'></i>
                              <i class='bi bi-star-fill' aria-hidden='true'></i>
                            </div>
                            <p>Krishna kumar</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
    </>
  )
}

export default TechnologyStack