import './Brands.css';
import { NavLink } from "react-router-dom";

const Brands = () => {
    return (
        <>
            <div className="navfixed">

                <div className="mainButton">
                    <div className="btn-group dropend all_btn">
                        <button type="button" className="btn brand_button" data-bs-toggle="dropdown" aria-expanded="false" style={{ fontSize: '20px', fontWeight: '500' }}>
                            HAPPY
                        </button>
                        <ul className="dropdown-menu">

                            <li>
                                <a className="dropdown-item" href="#">
                                    <NavLink to="/pants" className="dropdown-item" style={{ textDecoration: 'none', color: 'black' }}>HALF SUITS (2-8 YEARS)</NavLink>
                                </a>
                            </li>

                            <li>
                                <a className="dropdown-item" href="#">
                                    <NavLink to="/pants" className="dropdown-item" style={{ textDecoration: 'none', color: 'black' }}>FULL SUITS (2-8 YEARS)</NavLink>
                                </a>
                            </li>
                        </ul>
                    </div>




                    <div className="btn-group dropend all_btn">
                        <button type="button" className="btn brand_button" data-bs-toggle="dropdown" aria-expanded="false" style={{ fontSize: '20px', fontWeight: '500' }}>
                            BLESS
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item">HALF SUITS (1-3 YEARS)</a></li>

                            <li><a className="dropdown-item" href="#">FULL SUITS (1-3 YEARS)</a></li>

                        </ul>
                    </div>





                    <div className="btn-group dropend all_btn">
                        <button type="button" className="btn brand_button" data-bs-toggle="dropdown" aria-expanded="false" style={{ fontSize: '20px', fontWeight: '500' }}>
                            ENJOY
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">HALF SUITS (4-9 YEARS)</a></li>
                            <li><a className="dropdown-item" href="#">FULL SUITS (4-9 YEARS)</a></li>
                        </ul>
                    </div>
                    <div className="btn-group dropend all_btn">
                        <button type="button" className="btn brand_button" data-bs-toggle="dropdown" aria-expanded="false" style={{ fontSize: '20px', fontWeight: '500' }}>
                            HUNAR
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">HALF SUITS (0 YEARS)</a></li>
                            <li><a className="dropdown-item" href="#">FULL SUITS (0 YEARS)</a></li>
                        </ul>
                    </div>
                    <div className="btn-group dropend all_btn">
                        <button type="button" className="btn brand_button" data-bs-toggle="dropdown" aria-expanded="false" style={{ fontSize: '20px', fontWeight: '500' }}>
                            FUN
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">HALF SUITS (12-18 MONTHS)</a></li>
                            <li><a className="dropdown-item" href="#">FULL SUITS (12-18 MONTHS)</a></li>
                        </ul>
                    </div>
                    <div className="btn-group dropend all_btn">
                        <button type="button" className="btn brand_button" data-bs-toggle="dropdown" aria-expanded="false" style={{ fontSize: '20px', fontWeight: '500' }}>
                            LIL'BEE
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">HALF SUITS (1-3 YEARS)</a></li>
                            <li><a className="dropdown-item" href="#">FULL SUITS (1-3 YEARS)</a></li>
                        </ul>
                    </div>
                    <div className="btn-group dropend all_btn">
                        <button type="button" className="btn brand_button" data-bs-toggle="dropdown" aria-expanded="false" style={{ fontSize: '20px', fontWeight: '500' }}>
                            BLOKE
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">HALF T-Shirts (8-13 YEARS)</a></li>
                            <li><a className="dropdown-item" href="#">FULL T-Shirts (8-13 YEARS)</a></li>
                        </ul>
                    </div>
                </div>

            </div>


        </>
    )
}

export default Brands
