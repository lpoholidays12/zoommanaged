import PackageCards from "../../../components/Common/PackageCards";
import Navbar from "../../../components/Navbar";
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from "react";

let packageData = [
    {
        id: 1,
        category: "European",
        imagePath: "/images/paris.jpg",
        title: "European Elegance",
        durationInDays: 11,
        journey: [
            "paris", "belgium", "amsterdam", "germany"
        ],
        inclusions: [
            "meals", "hotels", "sight seeing"
        ],
        startingPrice: 125000
    },
    {
        id: 2,
        category: "European",
        imagePath: "/images/paris.jpg",
        title: "European Elegance",
        durationInDays: 11,
        journey: [
            "paris", "belgium", "amsterdam", "germany"
        ],
        inclusions: [
            "meals", "hotels", "sight seeing"
        ],
        startingPrice: 125000
    },
    {
        id: 3,
        category: "Asian",
        imagePath: "/images/paris.jpg",
        title: "European Elegance",
        durationInDays: 11,
        journey: [
            "paris", "belgium", "amsterdam", "germany"
        ],
        inclusions: [
            "meals", "hotels", "sight seeing"
        ],
        startingPrice: 125000
    }

]

const Packages = () => {

    const location = useLocation();
    const [filter, setFilter] = useState('');

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const filterValue = searchParams.get('filter') || '';
        setFilter(filterValue);
        console.log("filtererrr", filter, filterValue)
    }, [location.search]);

    const filteredPackages = packageData.filter(item =>
        filter === '' || item.category.toLowerCase() === filter.toLowerCase()
    );

    const handleFilterChange = (e) => {
        setFilter(e.target.value);
    };


    return (
        <>
            <Navbar />
            <section className="package_section">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="title blue">
                                <h3>{filter.toUpperCase()} Packages</h3>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="filter_section">
                                <p>Filter</p>
                                <div className="form-select">
                                    <select
                                        name="filter"
                                        id="filter"
                                        value={filter}
                                        onChange={handleFilterChange}
                                    >
                                        <option value="" >All</option>
                                        <option value="Asian" >Asia</option>
                                        <option value="European">Europe</option>
                                        <option value="International" >International</option>
                                        <option value="Domestic" >Domestic</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    {filteredPackages.length > 0 ? (
                        <div className="row mt-5">
                            {filteredPackages.map((item, i) => (
                                <div key={i} className="col-lg-4 col-md-6 col-sm-12">
                                    <PackageCards {...item} />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="mt-5">
                           <p> No packages available for the selected category.</p>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}

export default Packages;