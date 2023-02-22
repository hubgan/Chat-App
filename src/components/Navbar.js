import React from 'react'
import { UserAuth } from '../context/authContext';

export default function Navbar() {
    const { currentUser, logout } = UserAuth();

    const handleLogout = async () => {
        try {
            await logout();
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <div className="navbar fixed z-10 bg-primary text-primary-content">
                <div className="w-full mx-10 flex justify-between">
                    <button className="btn btn-ghost normal-case text-xl">ChatApp</button>
                    {currentUser && <button onClick={handleLogout} className="text-lg">Logout</button>}
                </div>
            </div>
        </div>
    );
}
