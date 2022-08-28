import styles from "./jobCards.module.css";

function JobCard(props) {
    return (
        <div className={styles.container}>
            <div className={styles.leftColumn}>
                <h3 className={styles.titlePadding}>
                    <a
                        href={props.link}
                        target="_blank"
                        className={styles.companyName}
                    >
                        {props.company}
                    </a>
                </h3>
                <p className={styles.title}>{props.jobTitle}</p>
                <p className={styles.duration}>{props.duration}</p>
            </div>
            <p className={styles.description}>{props.description}</p>
        </div>
    );
}

export default JobCard;
