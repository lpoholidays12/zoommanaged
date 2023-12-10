import style from './packageCards.module.scss';



const PackageCards = (props) => {
    const { category, imagePath, title, durationInDays, journey, inclusions, startingPrice } = props
    return (
        <div className={style.card}>
            <div className={style.thumbnail}>
                <img src={imagePath} alt="" />
            </div>
            <p className={style.package_title}>{title}</p>
            <p className={style.package_duration}>{durationInDays} Days</p>
            <ul className={style.sessions}>
                {
                    journey.map((places, k) => (
                        <li key={k}>
                            <div className={style.place}>{places}</div>
                        </li>
                    ))
                }
            </ul>
            <ul className={style.lists + " mt-3"}>
                <li className={style.list}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <g strokeWidth={0} id="SVGRepo_bgCarrier" />
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            id="SVGRepo_tracerCarrier"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                            <path
                                fill="#000"
                                d="M21.5821 5.54289C21.9726 5.93342 21.9726 6.56658 21.5821 6.95711L10.2526 18.2867C9.86452 18.6747 9.23627 18.6775 8.84475 18.293L2.29929 11.8644C1.90527 11.4774 1.89956 10.8443 2.28655 10.4503C2.67354 10.0562 3.30668 10.0505 3.70071 10.4375L9.53911 16.1717L20.1679 5.54289C20.5584 5.15237 21.1916 5.15237 21.5821 5.54289Z"
                                clipRule="evenodd"
                                fillRule="evenodd"
                            />
                        </g>
                    </svg>
                    <span> Meals </span>
                </li>
                <li className={style.list}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <g strokeWidth={0} id="SVGRepo_bgCarrier" />
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            id="SVGRepo_tracerCarrier"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                            <path
                                fill="#000"
                                d="M21.5821 5.54289C21.9726 5.93342 21.9726 6.56658 21.5821 6.95711L10.2526 18.2867C9.86452 18.6747 9.23627 18.6775 8.84475 18.293L2.29929 11.8644C1.90527 11.4774 1.89956 10.8443 2.28655 10.4503C2.67354 10.0562 3.30668 10.0505 3.70071 10.4375L9.53911 16.1717L20.1679 5.54289C20.5584 5.15237 21.1916 5.15237 21.5821 5.54289Z"
                                clipRule="evenodd"
                                fillRule="evenodd"
                            />
                        </g>
                    </svg>
                    <span> Hotels </span>
                </li>
                <li className={style.list}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <g strokeWidth={0} id="SVGRepo_bgCarrier" />
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            id="SVGRepo_tracerCarrier"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                            <path
                                fill="#000"
                                d="M21.5821 5.54289C21.9726 5.93342 21.9726 6.56658 21.5821 6.95711L10.2526 18.2867C9.86452 18.6747 9.23627 18.6775 8.84475 18.293L2.29929 11.8644C1.90527 11.4774 1.89956 10.8443 2.28655 10.4503C2.67354 10.0562 3.30668 10.0505 3.70071 10.4375L9.53911 16.1717L20.1679 5.54289C20.5584 5.15237 21.1916 5.15237 21.5821 5.54289Z"
                                clipRule="evenodd"
                                fillRule="evenodd"
                            />
                        </g>
                    </svg>
                    <span> Sight Seeing </span>
                </li>
            </ul>
            <a className={style.action} href="/package-details">
                ₹ 1,25,000
            </a>
        </div>
    );
}

export default PackageCards;