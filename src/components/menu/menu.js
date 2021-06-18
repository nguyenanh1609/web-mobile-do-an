import './menu.css';
function Menu() {
    return (
        <nav className="navbar navbar-expand-lg navbar__color bg">
            <div className="container">
                <a className="navbar-brand" href="#">PaoPeo</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"><i class="bi bi-list"></i></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Trang Chủ</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><i class="bi bi-phone"> </i>Điện Thoại</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><i class="bi bi-laptop"> </i>LapTop</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><i class="bi bi-tablet-landscape"> </i>Tablet</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="bi bi-headphones"> </i>Phụ Kiện
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#"><i class="bi bi-laptop"> </i>LapTop</a></li>
                                <li><a className="dropdown-item" href="#"><i class="bi bi-tablet-landscape"> </i>Tablet</a></li>
                                <li><a className="dropdown-item" href="#"><i class="bi bi-headphones"> </i>Phụ Kiện</a></li>
                                <li><a className="dropdown-item" href="#"><i class="bi bi-watch"> </i>Đồng Hồ</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Máy cũ</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><i class="bi bi-watch"> </i>Đồng Hồ</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Tin Tức</a>
                        </li>

                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2 input__search" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-dark me-4" type="submit">Search</button>
                        <label className="cart"><i class="bi bi-cart"></i></label>
                    </form>
                    
                </div>
            </div>
        </nav>

    );
}

export default Menu;