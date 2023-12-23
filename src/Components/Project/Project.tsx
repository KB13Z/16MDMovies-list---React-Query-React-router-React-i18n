import styles from './Project.module.css';

function Project() {
    return (
        <div className={styles.projectContainer}>
            <h2 className={styles.projectHeading}>About project</h2>
            <p className={styles.projectDescription}>
                This project is called 'Movies List'.<br/>
                It is an application, which consists of three sections.<br/>
                First section has information about project.<br/>
                Second section is a list of movies.<br/>
                Third section includes information about author of this project.<br/>
                Application is made using React, React Query, React Router and CSS modules.
            </p>
        </div>
    )
}

export default Project;