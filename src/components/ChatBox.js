import React from 'react'

// components
import Message from './Message';

const messages = [
    {
        id: 1,
        message: "Hello!",
        name: "User 1"
    },
    {
        id: 2,
        message: "Hi!",
        name: "User 2"
    }
];

export default function ChatBox() {
    return (
        <div className="pb-44 pt-20 container mx-auto max-w-4xl">
            {messages.map((message) => (
                <Message key={message.id} message={message} />
            ))}
        </div>
    );
}
