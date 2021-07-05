import './App.css';
import { useState } from 'react';

function App() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');
    const [err, setErr] = useState('');
    const [mode, setMode] = useState('login');
    const signIn = (e) => {
        e.preventDefault();
        fetch('http://localhost:7000/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        })
            .then(res => {
                console.log(res)
            })
    }
    const signUp = (e) => {
        e.preventDefault();
        fetch('http://localhost:7000/api/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, password })
        })
            .then(res => {
                console.log(res)
            })
    }

    return (
        <div className="App container mt-5">
            <nav className="nav">
                <h2 onClick={() => setMode('login')} className={mode === 'login' ? 'active' : ''}>Sign In</h2>
                <h2 onClick={() => setMode('register')} className={mode === 'register' ? 'active' : ''}>Sign Up</h2>
            </nav>
            <form>
                <div style={{display: mode === 'register' ? 'block' : 'none'}} className="mb-3">
                    <label className="form-label">Name</label>
                    <input onInput={e => setName(e.target.value)} type="text" className="form-control"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input onInput={e => setEmail(e.target.value)} type="email" className="form-control"
                           id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input onInput={e => setPass(e.target.value)} type="password" className="form-control"
                           id="exampleInputPassword1"/>
                </div>
                <span className="error">{}</span>
                {mode === 'register'
                    ? <button onClick={signUp} type="submit" className="btn btn-primary mt-3">Create</button>
                    : <button onClick={signIn} type="submit" className="btn btn-primary mt-3">Sign In</button>}

            </form>
        </div>
    );
}

export default App;
