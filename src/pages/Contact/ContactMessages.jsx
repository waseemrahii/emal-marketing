
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ContactMessages.css'; // Assuming you are using the same CSS file

const ContactMessages = () => {
  const [contactMessages, setContactMessages] = useState([]);

  useEffect(() => {
    const fetchContactMessages = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/contact/get');
        setContactMessages(response.data);
      } catch (error) {
        console.error('Error fetching contact messages:', error);
      }
    };

    fetchContactMessages();
  }, []);

  return (
    <div className="contact-messages-container" >
      <div className="card">
        <div className="container d-flex justify-content-between align-items-center p-3">
          <h3 className="heading fontweight">Contact Messages</h3>
        </div>
        <div className="card-body">
          <div className="table-responsive contact-messages-table">
            <table className="table table-bordered table-striped verticle-middle table-responsive-sm">
              <thead>
                <tr>
                  <th className="fontweight">Name</th>
                  <th className="fontweight">Phone</th>
                  <th className="fontweight">Email</th>
                  <th className="fontweight">Message</th>
                </tr>
              </thead>
              <tbody>
                {contactMessages.map((message, index) => (
                  <tr key={index}>
                    <td>{message.firstName} {message.lastName}</td>
                    <td>{message.phone}</td>
                    <td>{message.email}</td>
                    <td>{message.message}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMessages;
