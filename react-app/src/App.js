import './App.css';
import { useState } from 'react';

function App() {
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');
    const [err, setErr] = useState('');
    const submitData = (e) => {
        e.preventDefault();
        fetch('http://127.0.0.1:7000/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        })
            .then(res => {
                console.log(res)
            })
    }

    return (
        <div className="App container mt-5">
            <form>
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
                <button onClick={submitData} type="submit" className="btn btn-primary mt-3">Submit</button>
            </form>
        </div>
    );
}

export default App;
