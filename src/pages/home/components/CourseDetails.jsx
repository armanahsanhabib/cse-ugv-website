import "../css/course-details-section.css";

const CourseCard = () => {
    return (
        <div className="course_card">
            card here
        </div>
    );
}

const CourseDetails = () => {
    return (
        <div className="course_details_section">
            <div className="container">
                <h2 className="section_title">1st Semester Course Details</h2>
                <div className="course_card_container">
                    <CourseCard />
                </div>
            </div>
        </div>
    );
}

export default CourseDetails; 