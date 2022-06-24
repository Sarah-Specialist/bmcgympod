import './HowTo.css';

export default function HowTo() {

    return (
        <div className="how-to">
            <h1 className="title"><u><i>How To</i></u></h1>
                <a href="https://gympodexperience.netlify.app/get-started">
                    <div className="sub-navigation">
                    <h2>Get Started</h2>
                    </div>
                </a>
                <a href="https://gympodexperience.netlify.app/book-appointment">
                    <div className="sub-navigation">
                    <h2>Book an appointment</h2>
                    </div>
                </a>
                <a href="https://gympodexperience.netlify.app/access-pod">
                    <div className="sub-navigation">
                    <h2>Access the pod</h2>
                    </div>
                </a>
                <a href="https://gympodexperience.netlify.app/get-fit">
                    <div className="sub-navigation">
                    <h2>Get Fit</h2>
                    </div>
                </a>
                <a href="https://gympodexperience.netlify.app/end-session">
                    <div className="sub-navigation">
                    <h2>End session</h2>
                    </div>
                </a>
                <a href="https://gympodexperience.netlify.app/save-money">
                    <div className="sub-navigation">
                    <h2>Save Money</h2>
                    </div>
                </a>
        </div>
    )
}