import "../css/notice-section.css";

const notice = "Tommorow SCSE-106 Class will held in Building-2 at 8:00 AM.";

const NoticeSection = () => {
    return (
        <div className="notice_section">
            <div className="container">
                <h3>Notice Board</h3>
                <p>{notice}</p>
            </div>
        </div>
    );
}

export default NoticeSection; 