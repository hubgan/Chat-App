import React from 'react'

export default function Navbar() {
    return (
        <div>
            <div className="navbar bg-primary text-primary-content">
                <div className="w-full mx-10 flex justify-between">
                    <a className="btn btn-ghost normal-case text-xl">ChatApp</a>
                    <button className="text-lg">Logout</button>
                </div>
            </div>
        </div>
    );
}
