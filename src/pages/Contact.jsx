import React from "react";

const Contact = () => {
    const pageStyle = {
        fontFamily: "Arial, sans-serif",
        padding: "20px",
        backgroundColor: "#f9f9f9",
        color: "#333",
    };

    const formStyle = {
        maxWidth: "600px",
        margin: "0 auto",
        backgroundColor: "#fff",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    };

    const inputStyle = {
        width: "100%",
        padding: "10px",
        margin: "10px 0",
        border: "1px solid #ccc",
        borderRadius: "4px",
    };

    const buttonStyle = {
        backgroundColor: "#007bff",
        color: "#fff",
        padding: "10px 15px",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
    };

    const headerStyle = {
        textAlign: "center",
        marginBottom: "20px",
    };

    return (
        <div style={pageStyle}>
            <h1 style={headerStyle}>Contact Us</h1>
            <p style={{ textAlign: "center" }}>
                Have questions or need help? Fill out the form below and we'll get back
                to you as soon as possible.
            </p>
            <form style={formStyle}>
                <label>
                    Name:
                    <input type="text" placeholder="Your Name" style={inputStyle} />
                </label>
                <label>
                    Email:
                    <input type="email" placeholder="Your Email" style={inputStyle} />
                </label>
                <label>
                    Message:
                    <textarea
                        placeholder="Your Message"
                        rows="5"
                        style={{ ...inputStyle, resize: "none" }}
                    ></textarea>
                </label>
                <button type="submit" style={buttonStyle}>
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Contact;