import { Link } from 'react-router-dom';
import styles from './Navigation.module.css';

function Navigation() {
    return (
        <div className={styles.navContainer}>
            <Link to="/">
                <h3>Project</h3>
            </Link>
            <h3>|</h3>
            <Link to="/movies">
                <h3>Movies</h3>
            </Link>
            <h3>|</h3>
            <Link to="/author">
                <h3>Author</h3>
            </Link>
        </div>
    )
}

export default Navigation;