import CSE101_Banar from "../../../images/poster/cse101.JPG";
import CSE103_Banar from "../../../images/poster/cse103.JPG";
import CSE105_Banar from "../../../images/poster/cse105.JPG";
import CSE106_Banar from "../../../images/poster/cse106.JPG";
import MATHI1011_Banar from "../../../images/poster/mathI101.JPG";
import PHYS1014_Banar from "../../../images/poster/phys1014.JPG";
import PHYS1015_Banar from "../../../images/poster/phys1015.JPG";
import "../css/classes_section.css";

const classData = [
    {
        date: "3 January, 2023 - Tuesday",
        cards: [
            {
                banar: CSE106_Banar,
                subCode: "CSE-106",
                subName: "Electrical Circuits Lab",
                time: "8:00 AM - 12:00 PM",
                classInfo: "Multimeter and its uses.",
                classLink: "https://youtu.be/7bnIG2MV98k?t=95",
            },
            {
                banar: CSE105_Banar,
                subCode: "CSE-105",
                subName: "Electrical Circuits",
                time: "10:00 AM - 12:00 PM",
                classInfo: "Only Lab Class conducted from 8:00 AM - 12:00 PM",
                classLink: null,
            },
        ]
    },
    {
        date: "4 January, 2023 - Wednesday",
        cards: [
            {
                banar: CSE101_Banar,
                subCode: "CSE-101",
                subName: "Introduction to Computer & Programming",
                time: "8:00 AM - 9:00 AM",
                classInfo: "We introduced each other. Nothing was taught.",
                classLink: null,
            },
            {
                banar: CSE103_Banar,
                subCode: "CSE-103",
                subName: "Structured Programming",
                time: "9:00 AM - 10:00 AM",
                classInfo: "We introduced each other. And sir was late so he taught us barely nothing.",
                classLink: null,
            },
            {
                banar: PHYS1015_Banar,
                subCode: "PHYS-1015",
                subName: "Physics Lab",
                time: "10:00 AM - 12:00 PM",
                classInfo: "We introduced each other. Nothing was taught.",
                classLink: null,
            },
        ]
    },
    {
        date: "5 January, 2023 - Thursday",
        cards: [
            {
                banar: MATHI1011_Banar,
                subCode: "MATH1-1011",
                subName: "Mathematics-I",
                time: "8:00 AM - 9:00 AM",
                classInfo: "Class was cancelled!",
                classLink: null,
            },
            {
                banar: CSE101_Banar,
                subCode: "CSE-101",
                subName: "Introduction to Computer & Programming",
                time: "9:00 AM - 10:00 AM",
                classInfo: "Basic Computer peripherels were discussed but nothing to explain.",
                classLink: null,
            },
            {
                banar: PHYS1014_Banar,
                subCode: "PHYS-1014",
                subName: "Physics",
                time: "10:00 AM - 11:00 PM",
                classInfo: "Vector, Types of Vector, Unit Vector, Resaultant Vector and Dot Product of Vector.",
                classLink: "https://www.youtube.com/watch?v=vhg9CI9srDo",
            },
            {
                banar: CSE103_Banar,
                subCode: "CSE-103",
                subName: "Structured Programming",
                time: "11:00 AM - 12:00 PM",
                classInfo: "Basics of C Programming.",
                classLink: "https://www.youtube.com/watch?v=9hrHNthNmZk",
            },
        ]
    },
];

const ClassCard = (props) => {
    return (
        <div className="class_card">
            <div className="banar">
                <img src={props.banar} alt="CSE-101 banar" />
            </div>
            <div className="class_details">
                <div className="sub_code"><i className="fa-solid fa-code"></i> {props.subCode}</div>
                <div className="sub_name">
                    <span className="sub_icon">
                        <i className="fa-regular fa-book"></i>
                    </span>
                    <span className="subject">{props.subName}</span>
                </div>
                <div className="class_time">
                    <span className="time_icon">
                        <i className="fa-regular fa-clock"></i>
                    </span>
                    <span className="time">{props.time}</span>
                </div>
                <hr />
                <p className="info">{props.classInfo}</p>
                <div className="class_button">
                    {/* <a href={props.classLink} target="_blank" rel="noopener noreferrer">Class Link</a> */}
                    {(props.classLink == null) ? null : <a href={props.classLink} target="_blank" rel="noopener noreferrer">Class Link</a>}
                </div>
            </div>
        </div>
    );
}

const DailyClass = (props) => {
    return (
        <div className="daily_class">
            <div className="date"><i className="fa-solid fa-calendar-days"></i> {props.date} </div>
            <hr className="date_line" />
            <div className="class_card_container">{props.cards}</div>
        </div>
    );
}

const Classes = () => {
    return (
        <div className="classes_section">
            <div className="container">
                <h2 className="section_title">CSE First Semester Class Recap</h2>
                <div className="daily_class_container">
                    {
                        classData.map((i) => (
                            <DailyClass
                                date={i.date}
                                cards={i.cards.map((j) => (
                                    <ClassCard
                                        banar={j.banar}
                                        subCode={j.subCode}
                                        subName={j.subName}
                                        time={j.time}
                                        classInfo={j.classInfo}
                                        classLink={j.classLink}
                                    />
                                ))}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Classes;  