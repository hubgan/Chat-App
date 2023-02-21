import React from 'react'

export default function Message({ message }) {
    return (
        <div>
            <div className="chat chat-start">
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <img src="" alt="prifle image" />
                    </div>
                </div>
                <div className="chat-header">{message.name}</div>
                <div className="chat-bubble">{message.message}</div>
            </div>
        </div>
    );
}
