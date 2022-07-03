import './Promotions.css';
import Welcome from '../components/Welcome'

export default function Promotions() {
    return (
        <>
            <div className="promotions">
            <h1 className="title"><u><i>Promotions</i></u></h1>
            <div>
                <img src="https://i.ibb.co/LSFCRN5/grab-promo.jpg" alt="grab promo" height="400" width="700" />
            </div><br />
            <div className="promotion1">
                <h2>Limited time only!</h2>
                <h3>From now till 4th July 2022, you can invite your friends <u>FOR FREE</u>!</h3>
                <p>Typically the pricing is as follows: $9.50 for 1 pax, $11.00 for 2 pax, $12.50 for 3 pax, and $15.00 for 4 pax.</p>
                <p>During this promotional period, you can workout as a group of 4 for the price of 1! ($9.50 per session)</p>
                <p><b>What are you waiting for? Invite your friends now!</b></p>
            </div>
                <Welcome />
            </div>
        </>
        
    )
}