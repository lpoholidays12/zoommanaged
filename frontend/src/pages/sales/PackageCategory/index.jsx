import './category.scss';

const PackageCategory = () => {
    return (
        <section className="package_category">
            <div className="container">
                <div className="title blue mb-4">
                    <h3>Select a Category</h3>
                </div>
                <div className="row">
                    <div className="col-sm-12 col-md-6 mb-3">   
                        <a
                            className="web_link"
                            href="/packages?filter=european"
                        >
                            <h2>Europe Package</h2>
                            <img
                                src="/images/europe.jpg"
                                loading="lazy"
                                alt="Star grazing at Rohtang"
                            />
                        </a>

                    </div>
                    <div className="col-sm-12 col-md-6 mb-3">
                        <a
                            className="web_link"
                            href="/packages?filter=international"
                        >
                            <h2>International Package</h2>
                            <img
                                src="/images/turkey.jpg"
                                loading="lazy"
                                alt="Star grazing at Rohtang"
                            />
                        </a>

                    </div>
                    <div className="col-sm-12 col-md-6 mb-3">
                        <a
                            className="web_link"
                            href="/packages?filter=domestic"
                        >
                            <h2>Domestic Package</h2>
                            <img
                                src="/images/ladakh.jpg"
                                loading="lazy"
                                alt="Star grazing at Rohtang"
                            />
                        </a>

                    </div>
                    <div className="col-sm-12 col-md-6 mb-3">
                        <a
                            className="web_link"
                            href="/packages?filter=asian"
                        >
                            <h2>Asian Package</h2>
                            <img
                                src="/images/dubai.jpg"
                                loading="lazy"
                                alt="Star grazing at Rohtang"
                            />
                        </a>

                    </div>
                </div>
            </div>
        </section>

    );
}

export default PackageCategory;