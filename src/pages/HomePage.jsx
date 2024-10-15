import React, { useEffect } from "react";
import { useFirebase } from '../context/Firebase'; 

const HomePage = () => {
  const { signinWithGoogle } = useFirebase(); // Get Google sign-in function from Firebase context

  useEffect(() => {
    document.body.style.opacity = 0;
    setTimeout(() => {
      document.body.style.transition = "opacity 1s ease-in-out";
      document.body.style.opacity = 1;
    }, 100);
  }, []);

  const handleProfileClick = () => {
    signinWithGoogle()
      .then((result) => {
        // Successfully signed in with Google
        console.log("User signed in:", result.user);
      })
      .catch((error) => {
        // Handle errors
        console.error("Google sign-in error:", error);
      });
  };

  return (
    <div className="outer">
    <div style={styles.container}>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Grenze+Gotisch:wght@100..900&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400&display=swap');

          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          @keyframes slideIn {
            from {
              transform: translateY(-50px);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }

          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% {
              transform: translateY(0);
            }
            40% {
              transform: translateY(-30px);
            }
            60% {
              transform: translateY(-15px);
            }
          }

          body {
            opacity: 0;
          }
        `}
      </style>

      <header style={styles.header}>
        <h1 style={styles.logo}>ASPIRANTS LABYRINTH</h1>
        <nav style={styles.nav}>
          <a style={styles.navLink} href="/">Home</a>
          <a style={styles.navLink} href="/dashboard">Dashboard</a>
          <a style={styles.navLink} href="/resources">Resources</a>
          <a style={styles.navLink} href="/tools">Tools</a>
          <div style={styles.profileIcon} onClick={handleProfileClick}>
            <img
              src="/profile-icon.png"
              alt="Profile"
              style={styles.profileImage}
            />
          </div>
        </nav>
      </header>

      <section style={styles.hero}>
        <div style={styles.heroText}>
          <h2 style={styles.heroTitle}>WELCOME TO THE JOURNEY</h2>
          <p style={styles.heroDescription}>
            The JEE journey goes beyond mastering formulas—it's a true test of mental endurance, resilience, and self-belief. Like a hero navigating the underworld, every aspirant faces their own Hydra of doubts, distractions, and pressure. This interactive experience captures the emotional highs and lows of JEE preparation, helping you reflect on the mental challenges that shape your success.
          </p>
          <p style={styles.heroDescription}>
            Remember, the road to success is not just about mastering academic concepts but also about developing a mindset that allows you to overcome every obstacle. The journey builds both knowledge and character.
          </p>
        </div>
        <img
          src="/Books.png"
          alt="Stack of books"
          style={styles.image}
        />
      </section>
    </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "'Arial', sans-serif",
    background: "linear-gradient(120deg, #F18C42 0%, #E05A22 25%, #D54818 50%, #8A2810 75%, #47140A 100%)",
    color: "#fff",
    minHeight: "100vh",
    padding: "20px",
    animation: "fadeIn 0.05s ease-in",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    borderBottom: "1px solid #ccc",
    animation: "slideIn 1.5s ease-in-out",
  },
  logo: {
    fontFamily: "Poppins, sans-serif",
    fontSize: "28px",
    fontWeight: 700,
    lineHeight: "42px",
    textAlign: "left",
  },
  nav: {
    display: "flex",
    alignItems: "center",
    gap: "60px",
    animation: "slideIn 1.5s ease-in-out",
  },
  navLink: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "26px",
    animation: "slideIn 2s ease-in-out",
  },
  profileIcon: {
    display: "flex",
    alignItems: "center",
    marginLeft: "20px",
    cursor: "pointer", // Add pointer cursor to indicate it's clickable
  },
  profileImage: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
  },
  hero: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "50px",
    padding: "20px",
    animation: "fadeIn 2s ease-in",
  },
  heroText: {
    maxWidth: "50%",
  },
  heroTitle: {
    fontFamily: "Grenze Gotisch, serif",
    fontSize: "80px",
    fontWeight: 400,
    lineHeight: "118.4px",
    textAlign: "left",
    animation: "slideIn 2.5s ease-in-out",
  },
  heroDescription: {
    fontFamily: "Inter, sans-serif",
    fontSize: "20px",
    fontWeight: 400,
    lineHeight: "24.2px",
    textAlign: "center",
    margin: "20px 0",
    animation: "fadeIn 2s ease-in",
  },
  image: {
    width: "1344px",
    height: "1078px",
    marginLeft: "20px",
    position: "absolute",
    top: "99px",
    left: "676px",
    animation: "fadeIn 2.5s ease-in-out",
  },
};

export default HomePage;