import './Blog.css';

export default function Blog() {
    return (
        <div className="blog">
            <h1 className="title"><u><i>Blog</i></u></h1>
            <article>
                <h2 className="article-title">&#127881;GRAND OPENING&#127881;</h2>
                <img src="https://i.ibb.co/kgvW1mW/Whats-App-Image-2022-06-21-at-7-56-46-PM-2.jpg" alt="shopfront" />
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
                <p style={{textAlign: "right"}}><i><u>23 June 2022</u></i></p>
            </article>
        </div>
    )
}