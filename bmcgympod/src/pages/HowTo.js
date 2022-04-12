import './HowTo.css';

export default function HowTo() {

    return (
        <div className="how-to">
            <h1 className="title">How To</h1>
            <a href="#" style={{textDecoration: 'none'}}>
                <div className="sub-navigation">
                    <h2>Get Started</h2>
                </div>
            </a>
            <a href="#" style={{textDecoration: 'none'}}>
                <div className="sub-navigation">
                    <h2>Book an appointment</h2>
                </div>
            </a>
            <a href="#" style={{textDecoration: 'none'}}>
                <div className="sub-navigation">
                    <h2>Access the pod</h2>
                </div>
            </a>
            <a href="#" style={{textDecoration: 'none'}}>
                <div className="sub-navigation">
                    <h2>Get Fit</h2>
                </div>
            </a>
            <a href="#" style={{textDecoration: 'none'}}>
                <div className="sub-navigation">
                    <h2>End session</h2>
                </div>
            </a>
            
        </div>
    )
}