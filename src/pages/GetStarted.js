import './GetStarted.css'

export default function GetStarted() {
    return (
        <div className="get-started">
            <h1>Get Started Today!</h1>
            <span>
            <h2>Step One: Download the app</h2>
            </span>
            <div>
            <span>
                <a href="https://apps.apple.com/sg/app/the-gym-pod/id1422481975">
                    <img src="https://www.thegympod.com/wp-content/uploads/2020/05/app-store-600x179.png" 
                        alt="download app on ios" 
                        height="80" width="250"
                        style={{marginRight: 20}}/>
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.gympod">
                    <img src="https://www.thegympod.com/wp-content/uploads/2020/05/play-store-600x179.png" 
                        alt="download app on andriod"
                        height="80" width="250" />
                </a>
            </span>
            </div><br /><br />
            <h2>Step Two: Create an account</h2>
            <img src="https://i.ibb.co/VHPDGhz/IMG-8358.jpg"
                alt="login page"
                height="350"
                width="250"
            />
            <h2>Step Three: Complete a simple survey</h2>
            <img src="https://i.ibb.co/nLNDHJC/IMG-8359.jpg"
                alt="survey page"
                height="350"
                width="250"
            />
            <h2>Step Four: Add a payment method for convenience</h2>
            <span>
                <img src="https://i.ibb.co/R0mPgJ4/IMG-8369.jpg"
                    alt="profile page"
                    height="350"
                    width="250"
                    style={{marginRight: 50}}
                />
                <img src="https://i.ibb.co/QDP3Wtw/IMG-8368.jpg"
                    alt="add credit card"
                    height="350"
                    width="250"
                    style={{marginLeft: 50}}
                />
            </span>
            <h2>#JustGetStarted</h2>
        </div>
    )
}