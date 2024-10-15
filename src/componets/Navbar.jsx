const Navbar = () => {
    const styles = {
      header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px',
        backgroundColor: '#282c34',
        color: 'white',
      },
      logo: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
      },
      nav: {
        display: 'flex',
        gap: '15px',
      },
      navLink: {
        color: 'white',
        textDecoration: 'none',
        fontSize: '1rem',
        padding: '5px 10px',
      }
    };
  
    return (
      <header style={styles.header}>
        <h1 style={styles.logo}>ASPIRANTS LABYRINTH</h1>
        <nav style={styles.nav}>
          <a style={styles.navLink} href="/">Home</a>
          <a style={styles.navLink} href="/dashboard">Dashboard</a>
          <a style={styles.navLink} href="/resources">Resources</a>
          <a style={styles.navLink} href="/tools">Tools</a>
        </nav>
      </header>
    );
  };
  
  export default Navbar;