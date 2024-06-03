import { Link } from "react-router-dom";

export function SplashScreen () {
    return (
        <div className="splash-screen">
            <h1>Splash Screen</h1>
            <Link to='./loginPage' style={
                {textDecoration: 'none',
                color: 'black',
                fontWeight: 'bold',
                fontSize: '20px',
                padding: '10px',
                margin: '10px',
                border: '1px solid black',
                borderRadius: '10px',
                cursor: 'pointer'
            }
            }>Login</Link>
        </div>
    )
}