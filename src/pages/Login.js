import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/authContext';

export default function Login() {
    const { currentUser, signInWithGoogle } = UserAuth();

    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            await signInWithGoogle();
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if (currentUser) {
            navigate("/chat")
        }
    }, [currentUser, navigate])

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">Hello there</h1>
                    <p className="py-6">Join the conservation</p>
                    <button onClick={handleLogin} className="btn btn-primary">Login with Google</button>
                </div>
            </div>
        </div>
    );
}
