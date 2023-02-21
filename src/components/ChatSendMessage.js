import React, { useState } from 'react'

export default function ChatSendMessage() {
    const [value, setValue] = useState("");

    const handleSendMessage = (e) => {
        e.preventDefault();
        console.log(value);
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
