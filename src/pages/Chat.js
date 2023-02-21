import React from 'react'

// components
import ChatBox from '../components/ChatBox';
import ChatSendMessage from '../components/ChatSendMessage';

export default function Chat() {
    return (
        <div>
            <ChatBox />
            <ChatSendMessage />
        </div>
    );
}
