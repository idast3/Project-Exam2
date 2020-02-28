import React from 'react';
import MessageList from "./MessageList"



export default function AdminMessages() {
    return (
      <div className="AdminMessages">

          <h1>Inbox</h1>
        <p>Contact form messages will appear here </p>

        <MessageList />


      </div>
    );
}
