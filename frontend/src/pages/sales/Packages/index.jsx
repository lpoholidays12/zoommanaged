import PackageCards from "../../../components/Common/PackageCards";

let packageData = [
    {
        id: 1,
        category: "Europe",
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
        category: "Europe",
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
        category: "Europe",
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
    return (
        
        <section className="package_section">
            <div className="container">
                <div className="row">
                    {packageData.map((item, i) => (
                        <div key={i} className="col-lg-4 col-md-6 col-sm-12">
                            <PackageCards {...item} />
                        </div>
                    ))
                    }
                </div>
            </div>
        </section>
    );
}

export default Packages;