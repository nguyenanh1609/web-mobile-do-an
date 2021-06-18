import './header.css';
function Header() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-md-12 col-sm-12">
                    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="https://cdn.tgdd.vn/2021/05/banner/euro-oppo-830-300-830x300.png" className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="https://cdn.tgdd.vn/2021/06/banner/830-300-830x300-6.png" className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="https://cdn.tgdd.vn/2021/06/banner/830-300-830x300-1.png" className="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true" />
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true" />
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-12">
                    <img src="https://cdn.tgdd.vn/2021/06/banner/die%CC%A3%CC%82nthoaidesk-340x340-2.jpg" alt="" />
                </div>
            </div>
        </div>






    );
}

export default Header;