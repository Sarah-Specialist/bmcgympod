import './Header.css';

export default function Header() {
    return (
        <div className="header">
            <img src="https://www.thegympod.com/wp-content/uploads/2020/06/The-Gym-Pod-Official-Logo-Yellow-on-Black-2.png"
            alt="logo"
            className="logo"
            style={{height: 80, width: 60, margin: 10}}/>
            <span className="socials">
                <a href="#">
                    <img src="https://buffer.com/library/content/images/library/wp-content/uploads/2016/03/FB-f-Logo__blue_144.png"
                    alt="facebook"
                    className="facebook"
                    style={{height: 30, width: 30}}
                    />
                </a>
                <a href="#">
                    <img src="https://www.edigitalagency.com.au/wp-content/uploads/instagram-logo-svg-vector-for-print.svg"
                    alt="instagram"
                    className="intragram"
                    style={{height: 30, width: 30}}
                    />
                </a>
                <a href="#">
                    <img src="https://cdn-icons-png.flaticon.com/512/124/124021.png"
                    alt="twitter"
                    className="twitter"
                    style={{height: 30, width: 30}}
                    />
                </a>
            </span>
            
        </div>
    )
}