
// import './Signin.css';

// const SignIn= () => {
//     return (
//     <div className="signin">
//     <h2>Sign In</h2>
//     <form>
//     <input type="email" placeholder="Email" />
//     <input type="password" placeholder="Password" />
//     <button type="submit">Sign In</button>
//     </form>
//     </div>
//     );
// };
// export default SignIn;
import './Signin.css';
import React, { useState } from 'react';

const SigninPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSignin = (e) => {
        e.preventDefault();

        // Retrieve sign-up data from local storage
        const signupData = JSON.parse(localStorage.getItem('signupData'));

        // Check if entered email and password match the stored data
        if (signupData && email === signupData.email && password === signupData.password) {
            // Successful sign-in
            // Redirect to desired page or perform necessary actions
            window.alert('Sign-in successful!');
        } else {
            // Invalid credentials
            setErrorMessage('Invalid email or password');
        }

        // Reset the form fields
        setEmail('');
        setPassword('');
    };

    return (
        <div className="container" id='con'>
            <h1>Sign In</h1>
            <form onSubmit={handleSignin}>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        className="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Sign In</button>
                {errorMessage && <p className="text-danger mt-3">{errorMessage}</p>}
            </form>
        </div>
    );
};

export default SigninPage;


