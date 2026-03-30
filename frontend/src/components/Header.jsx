const Header = () => {
    const headerStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.1)', // Blanco semitransparente
        backdropFilter: 'blur(10px)', // Efecto de desenfoque
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        padding: '10px 40px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 1000,
        boxSizing: 'border-box'
    };

    const navListStyle = {
        display: 'flex',
        listStyle: 'none',
        gap: '30px',
        margin: 0,
        padding: 0
    };

    const logoStyle = {
        margin: 0,
        fontSize: '1.5rem',
        fontWeight: 'bold',
        color: 'white'
    };

    const linkStyle = {
        color: 'white',
        textDecoration: 'none',
        cursor: 'pointer',
        fontSize: '0.9rem'
    };

    return (
        <header style={headerStyle}>
            <h1 style={logoStyle}>G-E</h1>
            <nav>
                <ul style={navListStyle}>
                    <li style={linkStyle}>Inicio</li>
                    <li style={linkStyle}>Reportes</li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;