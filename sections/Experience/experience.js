import JobCard from "../../components/JobCards/jobCards";
import { experiencesInfo } from "./copy";
import utilStyles from "../../shared/styles/utils.module.css";

export default function Experience() {
    console.log(experiencesInfo);
    const experiences = experiencesInfo.map((experienceInfo, index) => {
        return (
            <JobCard
                key={index}
                company={experienceInfo.company}
                jobTitle={experienceInfo.jobTitle}
                description={experienceInfo.description}
                duration={experienceInfo.duration}
                link={experienceInfo.link}
            ></JobCard>
        );
    });

    return (
        <section className={utilStyles.section}>
            <h2>Experience</h2>
            {experiences}
        </section>
    );
}
