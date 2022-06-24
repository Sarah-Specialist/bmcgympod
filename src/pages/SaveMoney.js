import './SaveMoney.css'

export default function SaveMoney() {
    return (
        <div className="save-money">
            <h1>Save money</h1>
            <h2>1. Look out for ongoing exclusive promotions on the "Promotions" page</h2>
            <div className="sub-navigation">
                <a href="https://gympodexperience.netlify.app/promotions">Promotions</a>
            </div>
            <h2>2. Invite a friend and split the cost</h2>
            <p>$9.50 for one pax</p>
            <p>$11.00 for two pax = $5.50 per pax</p>
            <h2>3. Opt for non-peak gym sessions</h2>
            <p>Between 12mn to 7am, $7.50 per pax</p>
            <h2>4. Join our subscription plan</h2>
            <h3>1-month plan: $18.08/month or 3-month plan: $41.41/3 months</h3>
            <p>- Members pricing for first 6 sessions</p>
            <p>- 20% discount for sessions 7-12 for the month</p>
            <p>- 30% discount for 13+ session for the month</p>
            <p>Priority booking of 30 days in advance</p>
        </div>
    )
}