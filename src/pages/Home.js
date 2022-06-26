import './Home.css';
import Equipment from '../components/Equipment';
import {useState} from 'react';

export default function Home() {

    return (
        <div className="main">
        <div className="heroDiv">
            <img src="https://i.ibb.co/zQwVTGc/logo1.jpg"
                    alt="hero"
                    className="hero-image"
                    height="10"
                    width="100"
            />
        </div>
        <img src="https://i.ibb.co/T4TfS94/Whats-App-Image-2022-06-21-at-12-00-40-PM-1.jpg"
            alt="banner"
            width="100%"
            className="banner"
        />
        <div className="unique">
            <h2><u>What makes us UNIQUE?</u></h2><br />
            <h3>Ideal for working professionals</h3>
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
            </table>
        </div>
            <br />
            <h3 className="unique2">All the equipment you need</h3>
            <Equipment />
            <div className="download">
                <h2>Download the app</h2>
                <h2>Book your gym session now!</h2>
                <img src="https://i.ibb.co/Fhfnvf9/The-Gym-Pod-App.png" alt="app" height="300" width="300" />
            </div>
            <br /><br />
        </div>
    )
}