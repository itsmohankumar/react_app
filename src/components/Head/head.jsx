import React from "react"
import TypeWriterEffect from 'react-typewriter-effect';
import '../../App.css'

const head = () => {
  return (
    <>
    <header class="masthead">

    <div class="video-background">
  <div class="video-foreground">
    <iframe src="https://www.youtube.com/embed/ShbC5yVqOdI?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=1" frameborder="0" ></iframe>
  </div>
</div>
            <div class="container px-4 px-lg-5 h-100">
                <div class="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
                    <div class="col-lg-8 align-self-end">
                    <TypeWriterEffect
        textStyle={{
          fontFamily: 'Helvetica, Sans-serif',
          color: '#FFFFFF',
          fontWeight: 600,
          fontSize: '4em',
        }}
        startDelay={2000}
        cursorColor="#FFFFFF"
        multiText={[
          'We are automation', 'We are Creative', 'We are developer'
        ]}
        loop={true}
        nextTextDelay={1000}
        typeSpeed={40}
      />
                    </div>
                    <div class="col-lg-8 align-self-baseline">
                        <p class="text-white-75 mb-5">Your ideas with our industries</p>
                    </div>
                </div>
            </div>
        </header>
    </>
  )
}

export default head