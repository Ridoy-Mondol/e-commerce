const Service = () => {
    return (
      <div>
        <h1 className="feature-heading text-center mt-5">
            Our Services
          </h1>
          <div className="margin"></div>
        <div className="d-flex justify-content-center py-5 card-parent-mobile">
          <div className="card border border-0 card-1">
          <div className="icon">
          <i class="fa-solid fa-truck"></i>
          </div>
          <p className="card-text">Super Fast and Free Delivery</p>
          </div>

          <div className="card card- border-0 mx-lg-4">
           <div className="card-2 card border-0 d-flex align-items-center
           justify-content-center">
            <div className="icon me-2">
           <i class="fa-solid fa-shield-halved"></i>
           </div>
           <span className="card-text">Non-contact Shipping</span>
           </div>

           <div className="card-2 card-3 card border-0 d-flex align-items-center
           justify-content-center">
            <div className="icon me-2">
            <i class="fa-solid fa-circle-dollar-to-slot"></i>
           </div>
           <span className="card-text">Money-back Guaranted</span>
           </div>
          </div>

          <div className="card card-1">
          <div className="icon">
          <i class="fa-regular fa-credit-card"></i>
          </div>
          <p className="card-text">Super Secure Payment System</p>
          </div>
        </div>
        </div>
    )
}
export default Service;