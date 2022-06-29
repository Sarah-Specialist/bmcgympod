import './Blog.css';
import Socials from '../components/Socials';

export default function Blog() {
    return (
        <div className="blog">
            <h1 className="title"><u><i>Blog</i></u></h1>
            <article>
            <h2 className="article-title">&#128680;EXCLUSIVE PROMOTION&#128680;</h2>
            <img src="https://i.ibb.co/9cwp0H6/grab-voucher.jpg" alt="$5 grab promo" />
            <h2 style={{fontSize: 28}}><u>From 1 July to 14 July</u></h2>
            <h3 style={{lineHeight:0.5}}>1. Complete <u>5</u> (30-minute) gym sessions</h3>
            <p style={{lineHeight:0.5}}>(Yes, they can be consecutive!)</p><br />
            <span>
                <img src="https://i.ibb.co/RzBwch9/Smart-mirror.jpg" alt="smart mirror 1" height="200" width="200" />
                <img src="https://i.ibb.co/RzBwch9/Smart-mirror.jpg" alt="smart mirror 1" height="200" width="200" />
                <img src="https://i.ibb.co/RzBwch9/Smart-mirror.jpg" alt="smart mirror 1" height="200" width="200" />
                <img src="https://i.ibb.co/RzBwch9/Smart-mirror.jpg" alt="smart mirror 1" height="200" width="200" />
                <img src="https://i.ibb.co/RzBwch9/Smart-mirror.jpg" alt="smart mirror 1" height="200" width="200" />
            </span>
            <h3>2. Send 5 photos of the PTX Smart Mirror (with name, date & time)</h3> 
            <h3 style={{lineHeight:0.5}}>to <u>gympodexperience@gmail.com</u></h3><br />
            <h3>3. Enjoy your FREE grab voucher!</h3><br />

            <p>*Please note that the grab voucher will only be awarded to the person whose name is on the PTX Smart Mirror</p>
            <p style={{lineHeight:0.5}}>Do remember to book using the same account, and send it to us using the same person's email</p><br />

            <h2 className="promo-title"><i>GET FIT & GET REWARDED</i></h2>
            <a href="https://apps.apple.com/sg/app/the-gym-pod/id1422481975"><img src="https://i.ibb.co/Fhfnvf9/The-Gym-Pod-App.png" alt="app" height="200" width="200" /></a>
            <p>Download the app & Book your gym session now!</p>            
            <br />
            <Socials />
            <p>Follow us on social media so that you won't miss our exclusive promotions!</p>
            <br />
            </article>
            <hr />
            <article>
                <h2 className="article-title">&#127881;GRAND OPENING&#127881;</h2>
                <img src="https://i.ibb.co/kgvW1mW/Whats-App-Image-2022-06-21-at-7-56-46-PM-2.jpg" 
                alt="shopfront"
                height="500"
                width="700"
                className="article-img"
                 />
                <p>Opening on <strong>June 25</strong>, <strong>The Gym Pod @ 163 Bukit Merah Central</strong> welcomes people from all walks of life to improve their health by<br /> exercising in comfort! 
                You can start booking your gym sessions today!
                Are you a first time user? Head over to the Promotions page for your 50% discount!</p>
                    <p>So, what is The Gym Pod about? </p>
                    <p>
                        <u>Key features of The Gym Pod include:</u><br />
                        - 24/7 access<br />
                        - personal gym (complete privacy)<br />
                        - invite only your friends<br />
                        - no waiting to use equipment<br />
                        - go maskless without worry<br />
                        - blast your work out music<br />
                        - pay only when you want to use it<br />
                    </p>
                <p>Interested? Book your gym session on The Gym Pod app now!</p>
                <p style={{textAlign: "right"}}><i><u>23 June 2022</u></i></p><br />
            </article>
        </div>
    )
}