import React from 'react'
import Navbar from '../components/Navbar'
import ConceptVideos from '../Sections/HomePage/ConceptVideos'
import NumberBar from '../Sections/HomePage/NumberBar'

const Home = () => {
  return (
    <div>
      <Navbar />
      <section className="hero-section">
        <div className="container text-b">
          <h2>Concept Videos</h2>
          <p>Select a video</p>
        </div>
        <div className="container-fluid videos" style={{ maxWidth: "1500px" }}>
          <div className="row">
            <div className="col-1 order-2 order-md-1 d-flex align-items-center justify-content-center">
              <div class="swiper-button-prev " id="prev">
                <i className="fas fa-angle-left border border-3 p-2 rounded-circle text-black-50"></i>
              </div>
            </div>
            <div className="col-12 order-1 order-md-2 col-md-10">
              <ConceptVideos />
            </div>
            <div className="col-1 order-3 ms-auto ms-md-0 order-md-3 d-flex align-items-center justify-content-center">
              <div class="swiper-button-next" id="next">
                <i className="fas fa-angle-right border border-3 p-2 rounded-circle text-black-50"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-two">
        <div>
          <div className="container text-b">
            <h2>Live Classes</h2>
            <p>Select a number</p>
          </div>
          <div className="container">
            <NumberBar />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
