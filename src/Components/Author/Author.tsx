import styles from './Author.module.css';

function Author() {
    return (
        <div className={styles.authorContainer}>
            <h2 className={styles.authorHeading}>About author</h2>
            <p className={styles.authorDescription}>
                This project is made by a Codelex student - Laura.<br />
                Bonus task is not added, as one little monster was not letting the author sleep for five nights in the row.<br />
                Therefore it is a miracle, that the project with main tasks has been submitted only 7 days late.<br />
                Or submitted at all.<br />
                At one moment, author already had lost all hope...<br />
                For those, who are interested, how does the monster look like ↓
            </p>
            <img src="/src/assets/monster.jpeg" alt="monster" width="300" className={styles.monster} />
        </div>
    )
}

export default Author;