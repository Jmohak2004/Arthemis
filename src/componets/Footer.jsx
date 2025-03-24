import React from 'react';
const Footer = () => {
    const footerStyle = {
        backgroundColor: '#2d3748',
        color: 'white',
        padding: '2rem 0',
    };

    const containerStyle = {
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: '2rem',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1rem',
    };

    const sectionStyle = {
        marginBottom: '1rem',
    };

    const headingStyle = {
        fontSize: '1.125rem',
        fontWeight: '600',
        marginBottom: '1rem',
    };

    const textStyle = {
        fontSize: '0.875rem',
        lineHeight: '1.5',
    };

    const linkStyle = {
        fontSize: '0.875rem',
        textDecoration: 'none',
        color: 'white',
        transition: 'color 0.3s',
    };

    const linkHoverStyle = {
        textDecoration: 'underline',
    };

    const footerBottomStyle = {
        textAlign: 'center',
        marginTop: '2rem',
        borderTop: '1px solid #4a5568',
        paddingTop: '1rem',
    };

    return (
        <footer style={footerStyle}>
            <div style={containerStyle}>
                <div style={sectionStyle}>
                    <h4 style={headingStyle}>About Us</h4>
                    <p style={textStyle}>
                        Welcome to Book Haven, your one-stop shop for books and art. Explore our collection and find your next favorite read or masterpiece.
                    </p>
                </div>
                <div style={sectionStyle}>
                    <h4 style={headingStyle}>Quick Links</h4>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li>
                            <a
                                href="/about"
                                style={linkStyle}
                                onMouseOver={(e) => (e.target.style.textDecoration = 'underline')}
                                onMouseOut={(e) => (e.target.style.textDecoration = 'none')}
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href="/shop"
                                style={linkStyle}
                                onMouseOver={(e) => (e.target.style.textDecoration = 'underline')}
                                onMouseOut={(e) => (e.target.style.textDecoration = 'none')}
                            >
                                Shop
                            </a>
                        </li>
                        <li>
                            <a
                                href="/contact"
                                style={linkStyle}
                                onMouseOver={(e) => (e.target.style.textDecoration = 'underline')}
                                onMouseOut={(e) => (e.target.style.textDecoration = 'none')}
                            >
                                Contact
                            </a>
                        </li>
                        <li>
                            <a
                                href="/faq"
                                style={linkStyle}
                                onMouseOver={(e) => (e.target.style.textDecoration = 'underline')}
                                onMouseOut={(e) => (e.target.style.textDecoration = 'none')}
                            >
                                FAQ
                            </a>
                        </li>
                    </ul>
                </div>
                <div style={sectionStyle}>
                    <h4 style={headingStyle}>Contact Us</h4>
                    <p style={textStyle}>Email: support@bookhaven.com</p>
                    <p style={textStyle}>Phone: +1 (555) 123-4567</p>
                    <p style={textStyle}>Address: 123 Book St, Library City, BK 56789</p>
                </div>
            </div>
            <div style={footerBottomStyle}>
                <p style={textStyle}>&copy; {new Date().getFullYear()} Book Haven. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
