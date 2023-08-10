import { useState } from "react";
import { useUserContext } from "../context/UserContext";
export default function LoginForm() {
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [submitResult, setSubmitResult] = useState('');

    const { currentUser, handleUpdateUser, isUserLoggedIn } = useUserContext();

    const handleLoginFormSubmit = (e) => {
        e.preventDefault();
        if (userPassword.length < 5) {
            setSubmitResult('Password must be at least 5 chars long');
        } else if (userPassword === userEmail) {
            setSubmitResult('Password must not match email address');
        } else if(userEmail === "test@gmail.com" && userPassword === "test123") {
            /*the hardcoded userEmail and userPassword values are for demo purpose only. Never hardcode username/passwords in real apps*/
            setSubmitResult('Successful login.');
            handleUpdateUser({ email: userEmail }); // context function
        }
        else {
            setSubmitResult('Invalid username of password');
        }
        console.log("isUserLoggedIn()", isUserLoggedIn());
    }

    const handleLogout = () => {
        handleUpdateUser({});
        setUserEmail("");
        setUserPassword("");
    }

    let loginFormJsx = (
        <div>
            <h1>Sign in</h1>
            <input type="email" onChange={(e)=>{setUserEmail(e.target.value)}} /> <br/>
            <input type="password" onChange={(e)=>{setUserPassword(e.target.value)}} /> <br/>
            <button onClick={(e) => handleLoginFormSubmit(e)}>Sign in</button>
            <br/>
            <span>{submitResult}</span>
        </div>
    );

    let welcomeJsx = (
        <div>
            <p>Welcome {currentUser.email}!</p>
            <button onClick={() => handleLogout()}>Log Out</button>
            <br/>
        </div>
    );

    if (isUserLoggedIn()) 
        return ( welcomeJsx );
    else 
        return ( loginFormJsx );

}