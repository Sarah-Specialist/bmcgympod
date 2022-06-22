import './Socials.css';

export default function Socials() {
    return (
        <span className="socials">
            <a href="https://www.facebook.com/Gym-Pod-Experience-115585061160023">
                <img src="https://buffer.com/library/content/images/library/wp-content/uploads/2016/03/FB-f-Logo__blue_144.png"
                    alt="facebook"
                    className="facebook"
                    style={{height: 30, width: 30}}
                    />
            </a>
            <a href="https://www.instagram.com/gympodexp/">
                <img src="https://www.edigitalagency.com.au/wp-content/uploads/instagram-logo-svg-vector-for-print.svg"
                    alt="instagram"
                    className="instagram"
                    style={{height: 30, width: 30}}
                    />
            </a>
            <a href="https://twitter.com/GymPodExp">
                <img src="https://cdn-icons-png.flaticon.com/512/124/124021.png"
                    alt="twitter"
                    className="twitter"
                    style={{height: 30, width: 30}}
                    />
            </a>
            <a href="#">
                <img src="https://seeklogo.com/images/T/tiktok-share-icon-black-logo-29FFD062A0-seeklogo.com.png"
                    alt="tik tok"
                    className="tiktok"
                    style={{height: 30, width: 30, backgroundColor: "white"}}
                    />
            </a>
        </span>
    )
}