import React from 'react'
import { UserAuth } from '../context/authContext'

export default function Message({ message }) {
    const { currentUser } = UserAuth();

    return (
        <div>
            <div className={`chat ${message.uid === currentUser.uid ? "chat-end" : "chat-start"}`}>
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <img src={message.avatar} alt="profile avatar" />
                    </div>
                </div>
                <div className="chat-header">{message.name}</div>
                <div className="chat-bubble">{message.message}</div>
            </div>
        </div>
    );
}
