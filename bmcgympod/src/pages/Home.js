import './Home.css';
import Equipment from '../components/Equipment';

export default function Home() {
    return (
        <>
        <div className="heroDiv">
            <img src="https://i.ibb.co/zQwVTGc/logo1.jpg"
                    alt="hero image"
                    className="hero-image"
                    height="10"
                    width="100"
            />
        </div>
        <h1>The Gym Pod @ 163 Bukit Merah Central</h1>
        <p>(Above Bukit Merah Central Food Centre)</p><br />
        <img src="https://www.thegympod.com/wp-content/uploads/2021/06/DSC08227.jpg"
                    alt="location"
                    className="location"
            /><br />
            <h2><u>What makes us UNIQUE?</u></h2><br />
            <h3>1. Ideal for working professionals</h3>
            <table className="schedule">
                <tr>
                    <th>Variation 1: Before Work</th>
                    <th>Variation 2: After Work</th>
                    <th>Variation 3: During Lunch</th>
                </tr>
                <tr>
                    <td className="variations">
                        <b>07:00AM</b>&nbsp;&nbsp;&nbsp;<span className="workout">Work out</span><br />
                        <b>07:30AM</b>&nbsp;&nbsp;&nbsp;<span className="workout">Work out</span><br />
                        <b>08:00AM</b>&nbsp;&nbsp;&nbsp;Cool down & Clean up<br />
                        <b>08:30AM</b>&nbsp;&nbsp;&nbsp;Enjoy breakfast<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;@ Bukit Merah Food Centre<br />
                        <b>09:00AM</b>&nbsp;&nbsp;&nbsp;Time to work<br />
                    </td>
                    <td className="variations">
                        <b>05:00PM</b>&nbsp;&nbsp;&nbsp;End work<br />
                        <b>05:30PM</b>&nbsp;&nbsp;&nbsp;<span className="workout">Work out</span><br />
                        <b>06:00PM</b>&nbsp;&nbsp;&nbsp;<span className="workout">Work out</span><br />
                        <b>06:30PM</b>&nbsp;&nbsp;&nbsp;Enjoy dinner<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;@ Bukit Merah Food Centre<br />
                    </td>
                    <td className="variations">
                        <b>09:00AM</b>&nbsp;&nbsp;&nbsp;Time to work<br />
                        <b>12:00NN</b>&nbsp;&nbsp;&nbsp;<span className="workout">Work out</span><br />
                        <b>12:30PM</b>&nbsp;&nbsp;&nbsp;Enjoy Lunch<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;@ Bukit Merah Food Centre<br />
                        <b>05:00PM</b>&nbsp;&nbsp;&nbsp;End work<br />
                    </td>
                </tr>
            </table><br />
            <h3 className="unique2">2. All the equipment you need</h3>
            <Equipment />
            <h3>3. We keep you safe by keeping it clean!</h3>
            <img src="https://i.ibb.co/nwcbvKS/Picture2.jpg" alt="cleaning" height="200" width="220"/>
            <img src="https://i.ibb.co/0Kms9ny/Untitled.jpg" alt="pest control" height="200" width="180"/>
            <img src="https://i.ibb.co/C6257LQ/Untitled2.jpg" alt="high touch point" height="200" width="200"/>
            <h4 className="cleaning">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Daily Cleaning&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Pest Control&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Focused Sanitization</h4>
        </>
    )
}