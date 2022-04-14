import './Home.css';

export default function Home() {
    return (
        <>
            <img src="https://www.thegympod.com/wp-content/uploads/2021/06/DSC08227.jpg"
                    alt="hero image"
                    className="hero-image"
            /><br />
            <h1>The Gym Pod @ Bukit Merah Central</h1>
            <h2>What makes us UNIQUE?</h2>
            <h3>Ideal for working professionals</h3>
            <table className="schedule">
                <tr>
                    <th>Variation 1</th>
                    <th>Variation 2</th>
                    <th>Variation 3</th>
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
            </table>
            <h3>More Equipment</h3>
            <div className="equipment">
                <div>
                    <img src="https://i.ibb.co/BqT1qKn/gp-bike.jpg" alt="exercise bike" />
                    <img src="https://i.ibb.co/JRz18nb/gp-chin-up.jpg" alt="chin up bar" />
                    <img src="https://i.ibb.co/XDFt48H/gp-cross-trainer.jpg" alt="cross trainer" />
                    <img src="https://i.ibb.co/SBQTKPn/gp-dumbbells.jpg" alt="dumb bells" />
                    <img src="https://i.ibb.co/cxq2qfV/gp-exercise-mat.jpg" alt="exercise mat" />
                    <img src="https://i.ibb.co/kXy179D/gp-ez-bar.jpg" alt="E Z bar" />
                </div>
                <div>
                    <img src="https://i.ibb.co/ns82tYz/gp-power-rack.jpg" alt="power rack" />
                    <img src="https://i.ibb.co/47krg7r/gp-resistance-band.jpg" alt="resistance band" />
                    <img src="https://i.ibb.co/k8CMN2x/gp-smart-mirror.jpg" alt="smart mirror" />
                    <img src="https://i.ibb.co/C5trMgV/gp-treadmill.jpg" alt="treadmill" />
                    <img src="https://i.ibb.co/bFrHqcN/gp-weight-plates.jpg" alt="weight plates" />
                </div>
                
            </div>
        </>
    )
}