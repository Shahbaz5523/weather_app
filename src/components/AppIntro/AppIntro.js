import './style.css';

export default function AppIntro() {
    return (
        <div>
        <div className="weathercontainer">
            <div className="header">
                <span>Daily</span>
                <span>Weather</span>
            </div>
            <h1>Weather App</h1>
            <img src="img/men.svg" alt="illustration missing" />
        </div>
            <div className="footer">
                <button>Check Todays Weather</button>
                <p>Copyright &copy; 2021 All Right Reservied.</p>
            </div>
        </div>
    )
}
