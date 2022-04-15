import './GetFit.css';
import Equipment from '../components/Equipment';
import Socials from '../components/Socials'

export default function GetFit() {
    return (
        <div className="get-fit">
            <h1>Get Fit with us!</h1>
            <h2>Continue your usual routine with our amazing equipment</h2>
            <Equipment />
            <h2>Don't have your own routine to follow?</h2>
            <h2>No worries! Watch our curated videos for all levels of intensities!</h2>
            <span>
                <img src="https://i.ibb.co/8sXx2Lb/IMG-8370.jpg"
                    alt="videos"
                    height="350"
                    width="250"
                    style={{marginRight: 50}}
                />
                <img src="https://i.ibb.co/Jqdvjhn/IMG-8371.jpg"
                alt="more videos"
                height="350"
                width="250"
                style={{marginLeft: 50}}
                />
            </span>
            <h2>Use the Smart Mirror to guide you</h2>
            <img src="https://www.astreem.com/wp-content/uploads/2021/07/Screenshot-2021-05-24-at-4.01.09-PM-scaled.jpg"
                alt="smart mirror"
                height="350"
                width="400"
            />
            <h2>Get advice and share with the BMC community</h2>
            <Socials />
        </div>
        
    )
}