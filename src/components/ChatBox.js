import React, { useEffect, useRef, useState } from 'react'
import { collection, query, onSnapshot, orderBy, limit } from "firebase/firestore";
import { db } from '../firebase'


// components
import Message from './Message';

export default function ChatBox() {
    const messagesEndRef = useRef();
    const [messages, setMessages] = useState([]);

    const scrollToBottom = () => {
        messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }

    useEffect(() => {
        scrollToBottom();
    }, [messages])

    useEffect(() => {
        const q = query(collection(db, "messages"), orderBy("createdAt"), limit(50));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const messages = [];

            querySnapshot.forEach((doc) => {
                messages.push({ ...doc.data(), id: doc.id });
            });
            console.log(messages);
            setMessages(messages);
        });

        return () => unsubscribe;
    }, [])

    return (
        <div className="pb-44 pt-20 container mx-auto max-w-4xl">
            {messages.map((message) => (
                <Message key={message.id} message={message} />
            ))}
            <div ref={messagesEndRef}></div>
        </div>
    );
}
