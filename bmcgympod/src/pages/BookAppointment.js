import './BookAppointment.css'

export default function BookAppointment() {
    return (
        <div className="book-appointment">
            <h1>Book your appointment!</h1>
            <h2>Step One: Find The Gym Pod @ Bukit Merah Central &</h2>
            <h2>tap the &#10084; to save your favourite pod</h2>
            <img src="https://i.ibb.co/sjS5Lzy/IMG-8363.jpg"
                alt="favourite"
                height="350"
                width="250"
            />
            <h2>Step Two: Select your gym sessions</h2>
            <img src="https://i.ibb.co/nLNDHJC/IMG-8359.jpg"
                alt="survey page"
                height="350"
                width="250"
            />
            <h2>Step Three: Confirm your booking details and proceed</h2>
            <img src="https://i0.wp.com/financeandtoast.com/wp-content/uploads/2020/09/IMG_2944.jpg?resize=175%2C300&ssl=1"
                    alt="order details"
                height="350"
                width="250"
                style={{marginRight: 50}}
            />
        </div>
    )
}