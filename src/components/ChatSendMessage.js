import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import React, { useState } from 'react'
import { UserAuth } from '../context/authContext';
import { db } from '../firebase';

export default function ChatSendMessage() {
    const [value, setValue] = useState("");
    const { currentUser } = UserAuth();

    const handleSendMessage = async (e) => {
        e.preventDefault();

        if (value.trim() === "") {
            alert("Enter valid message");
            return;
        }

        try {
            const { uid, displayName, photoURL } = currentUser;
            await addDoc(collection(db, 'messages'), {
                message: value,
                name: displayName,
                avatar: photoURL,
                createdAt: serverTimestamp(),
                uid: uid
            })
        } catch (error) {
            console.log(error);
        }

        setValue("");
    }

    return (
        <div className="bg-base-300 fixed bottom-0 w-full py-10 shadow-lg">
            <form onSubmit={handleSendMessage} className="container mx-auto px-2 max-w-4xl flex justify-between">
                <input value={value} onChange={(e) => setValue(e.target.value)} className="input w-full focus:outline-none bg-gray-100 rounded-r-none" type="text" />
                <button type="submit" className="w-auto bg-gray-500 text-white rounded-r-lg px-5 text-sm">Send</button>
            </form>
        </div>
    );
}
