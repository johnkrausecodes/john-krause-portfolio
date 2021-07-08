import React from 'react'

import styles from './Header.module.css';

const Header = () => {
    return (
        <div className={styles.header}>
            <h1>John Krause</h1>
            <p>Web Developer, Writer, and Data Guy</p>
        </div>
    );
};

export default Header;