export function MoviesPage() {
  return (
    <main>
        <div id="carouselExampleCaptions" className="carousel slide">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="https://www.soccerbible.com/media/164483/tiempolux1-min.jpg" className="d-block w-100"/>
              <div className="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>Some representative placeholder content for the first slide.</p>
              </div>
            </div>
            <div className="carousel-item" id="img_2">
              <img src="https://www.soccerbible.com/media/164680/under-armour-2-min.jpg" className="d-block w-100 h-100" alt="..."/>
              <div className="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>Some representative placeholder content for the second slide.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="https://www.soccerbible.com/media/164369/pumaunlimited1-min.jpg" className="d-block w-100" alt="..."/>
              <div className="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>Some representative placeholder content for the third slide.</p>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <br />
        <br />

        <div className="row g-0 bg-body-secondary position-relative">
          <div className="col-md-6 mb-md-0 p-md-4">
            <img src="https://assets.goal.com/images/v3/blt390ed636ef40b589/Classic_Teams_Italy_2006.jpg?auto=webp&format=pjpg&width=3840&quality=60" className="w-100" alt="..."/>
          </div>
          <div className="col-md-6 p-4 ps-md-0">
            <h5 className="mt-0">Columns with stretched link</h5>
            <p>Another instance of placeholder content for this other custom component. It is intended to mimic what some real-world content would look like, and we are using it here to give the component a bit of body and size.</p>
            <a href="#" className="stretched-link">Go somewhere</a>
          </div>
        </div>
        <br />
        <br />

        <div className="row g-0 bg-body-secondary position-relative">
          <div className="col-md-6 p-4 ps-md-0">
            <h5 className="mt-0">Columns with stretched link</h5>
            <p>Another instance of placeholder content for this other custom component. It is intended to mimic what some real-world content would look like, and we are using it here to give the component a bit of body and size.</p>
            <a href="#" className="stretched-link">Go somewhere</a>
          </div>
          <div className="col-md-6 mb-md-0 p-md-4">
            <img src="https://assets.goal.com/images/v3/blt0212852c89977a72/Classic_Teams_Spain_2010.jpg?auto=webp&format=pjpg&width=3840&quality=60" className="w-100" alt="..."/>
          </div>
        </div>
        <br />
        <br />
        
        <div className="row g-0 bg-body-secondary position-relative">
          <div className="col-md-6 mb-md-0 p-md-4">
            <img src="https://media.npr.org/assets/img/2022/12/18/gettyimages-1450109553_wide-345ea7ecb67023c6fbf5d8eb96b2bf5cf836c9f8.jpg?s=1400&c=100&f=jpeg" className="w-100" alt="..."/>
          </div>
          <div className="col-md-6 p-4 ps-md-0">
            <h5 className="mt-0">Columns with stretched link</h5>
            <p>Another instance of placeholder content for this other custom component. It is intended to mimic what some real-world content would look like, and we are using it here to give the component a bit of body and size.</p>
            <a href="#" className="stretched-link">Go somewhere</a>
          </div>
        </div>
    </main>
  );
}
