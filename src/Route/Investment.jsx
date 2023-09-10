
const Investment = () => {
    return(
        <div className="investment-mother">
              <div className="home-container2">
        <span data-aos="fade-down"> 
          <h1>Our Investment Plans</h1>
        </span>
        <div className="homecontainer2-inner">
          <div className="home-box2">
            <i className="fa-solid fa-cube"></i>
            <span data-aos="fade-up">
              <h3>Tier-1</h3>
              <p>6% return on investment after 3 days</p>
              <p>Maximum deposit = $500</p>
              <p>Minimum deposit = $14,999</p>
            </span>
          </div>
          <div className="home-box2">
            <i class="fa-solid fa-coins"></i>
            <span data-aos="fade-down">
              <h3>Tier-2</h3>
              <p>28% return on investment after 7 days</p>
              <p>Maximum deposit = $15,000</p>
              <p>Minimum deposit = $79,999</p>
            </span>
          </div>
          <div className="home-box2">
            <i class="fa-solid fa-layer-group"></i>
            <span data-aos="fade-up">
              <h3>Tier-3</h3>
              <p>6% return on investment after 3 days</p>
              <p>Maximum deposit = $80,000</p>
              <p>Minimum deposit = $2,500,000</p>
            </span>
          </div>
        </div>
      </div>
        </div>
    )
};
export default Investment;