import Navbar from "../../../components/Navbar";


const PackageDetails = () => {
    return (
        <>
            <Navbar />
            <section className="package_details">
                <div className="container">
                    <div className="row  align-items-center">
                        <div className="col-md-7">
                            <div className="title mb-1">
                                <h2>European Elegance </h2>
                                <p className="package_duration mt-0">11 Days</p>
                            </div>
                            <ul className="lists my-3">
                                <li>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <g strokeWidth={0} id="SVGRepo_bgCarrier" />
                                        <g
                                            strokeLinejoin="round"
                                            strokeLinecap="round"
                                            id="SVGRepo_tracerCarrier"
                                        ></g>
                                        <g id="SVGRepo_iconCarrier">
                                            <path
                                                fill="green"
                                                d="M21.5821 5.54289C21.9726 5.93342 21.9726 6.56658 21.5821 6.95711L10.2526 18.2867C9.86452 18.6747 9.23627 18.6775 8.84475 18.293L2.29929 11.8644C1.90527 11.4774 1.89956 10.8443 2.28655 10.4503C2.67354 10.0562 3.30668 10.0505 3.70071 10.4375L9.53911 16.1717L20.1679 5.54289C20.5584 5.15237 21.1916 5.15237 21.5821 5.54289Z"
                                                clipRule="evenodd"
                                                fillRule="evenodd"
                                            />
                                        </g>
                                    </svg>
                                    <span> Meals </span>
                                </li>
                                <li>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <g strokeWidth={0} id="SVGRepo_bgCarrier" />
                                        <g
                                            strokeLinejoin="round"
                                            strokeLinecap="round"
                                            id="SVGRepo_tracerCarrier"
                                        ></g>
                                        <g id="SVGRepo_iconCarrier">
                                            <path
                                                fill="green"
                                                d="M21.5821 5.54289C21.9726 5.93342 21.9726 6.56658 21.5821 6.95711L10.2526 18.2867C9.86452 18.6747 9.23627 18.6775 8.84475 18.293L2.29929 11.8644C1.90527 11.4774 1.89956 10.8443 2.28655 10.4503C2.67354 10.0562 3.30668 10.0505 3.70071 10.4375L9.53911 16.1717L20.1679 5.54289C20.5584 5.15237 21.1916 5.15237 21.5821 5.54289Z"
                                                clipRule="evenodd"
                                                fillRule="evenodd"
                                            />
                                        </g>
                                    </svg>
                                    <span> Hotels </span>
                                </li>
                                <li>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <g strokeWidth={0} id="SVGRepo_bgCarrier" />
                                        <g
                                            strokeLinejoin="round"
                                            strokeLinecap="round"
                                            id="SVGRepo_tracerCarrier"
                                        ></g>
                                        <g id="SVGRepo_iconCarrier">
                                            <path
                                                fill="green"
                                                d="M21.5821 5.54289C21.9726 5.93342 21.9726 6.56658 21.5821 6.95711L10.2526 18.2867C9.86452 18.6747 9.23627 18.6775 8.84475 18.293L2.29929 11.8644C1.90527 11.4774 1.89956 10.8443 2.28655 10.4503C2.67354 10.0562 3.30668 10.0505 3.70071 10.4375L9.53911 16.1717L20.1679 5.54289C20.5584 5.15237 21.1916 5.15237 21.5821 5.54289Z"
                                                clipRule="evenodd"
                                                fillRule="evenodd"
                                            />
                                        </g>
                                    </svg>
                                    <span> Sight Seeing </span>
                                </li>
                            </ul>
                            <div className="product_images">
                                <img src="/images/germany.jpg" alt="" srcSet="" />
                            </div>
                            <div className="package_features">
                                <div className="row">
                                    <div className="col-4">
                                        <div className="package_features_card">
                                            <img src="/images/analysis.png" alt="" />
                                            <p>Overview</p>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="package_features_card">
                                            <img src="/images/hotel.png" alt="" />
                                            <p>Hotels</p>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="package_features_card">
                                            <img src="/images/booking.png" alt="" />
                                            <p>Bookings</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 ">
                            <div className="package_pricing ">
                                <p>STARTING PRICE</p>
                                <h3>
                                    <b> ₹ 1,25,000 </b>
                                </h3>
                                <small>per person</small>
                            </div>
                            <ul className="sessions my-4 ">
                                <li>
                                    <div className="place">Paris</div>
                                </li>
                                <li>
                                    <div className="place">Belgium</div>
                                </li>
                                <li>
                                    <div className="place">Amsterdam</div>
                                </li>
                                <li>
                                    <div className="place">Germany</div>
                                </li>
                            </ul>
                            <p className="package_description ">
                                Get a chance to explore the best travel packages from India to Europe
                                with our prodigious European elegance package of 10 nights &amp; 11
                                days starting with INR 1,15,000 per person. It's not only a trip but a
                                trip with delicious breakfast lunch and meal included. Also with
                                beautiful sightseeing like Atomium, Grand Palace, Heritage City of
                                Amsterdam, Cheese Factory, Royal Palace and many more to surprise you.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>

    );
}

export default PackageDetails;