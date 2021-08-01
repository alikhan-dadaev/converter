import React from 'react';
import {NavLink} from "react-router-dom";
import styles from './header.module.css'

function HeaderNav (props) {
    return (
        <div>
            <div className={styles.nav}>
                <div className={styles.course}>
                    <NavLink
                        exact to="/"
                        activeClassName={styles.selected}
                        className={styles.navLink}>
                        Курс валют
                    </NavLink>
                </div>
                <div className={styles.converter}>
                    <NavLink
                        to="/converter"
                        activeClassName={styles.selected}
                        className={styles.navLink}>
                        Конвертер
                    </NavLink>

                </div>

            </div>
        </div>
    );
}

export default HeaderNav;