const timetable = {
    Monday: [
        {
            start: "08:30",
            end: "09:30",
            subject: "Math II",
            type: "Lecture",
            teacher: "Shreya Gupta",
            room: "F113"
        },
        {
            start: "09:30",
            end: "10:30",
            subject: "Professional English Communication",
            type: "Lecture",
            teacher: "Manjot Kaur",
            room: "F113"
        },
        {
            start: "10:30",
            end: "11:30",
            subject: "Basic Electrical and Electronics Engineering",
            type: "Lecture",
            teacher: "Harminder Kaur Aulakh (EC)",
            room: "F113"
        },
        {
            start: "11:30",
            end: "12:30",
            subject: "Chemistry",
            type: "Lecture",
            teacher: "Mandeep Kaur",
            room: "F113"
        }
    ],

    Tuesday: [
        {
            start: "09:30",
            end: "10:30",
            subject: "Math II",
            type: "Lecture",
            teacher: "Shreya Gupta",
            room: "F102 (Automobile Block)"
        },
        {
            start: "10:30",
            end: "11:30",
            subject: "Basic Electrical and Electronics Engineering",
            type: "Lecture",
            teacher: "Harminder Kaur Aulakh (EC)",
            room: "F102 (Automobile Block)"
        },
        {
            start: "12:30",
            end: "13:30",
            subject: "Basic Electrical and Electronics Engineering",
            type: "Tutorial",
            teacher: "Harminder Kaur Aulakh (EC)",
            room: "F106"
        },
        {
            start: "13:30",
            end: "14:30",
            subject: "Basic Electrical and Electronics Engineering",
            type: "Practical",
            teacher: "Kamalpreet Kaur (EC)",
            room: "BEE Lab 2"
        }
    ],

    Wednesday: [
        {
            start: "09:30",
            end: "10:30",
            subject: "Chemistry",
            type: "Lecture",
            teacher: "Mandeep Kaur",
            room: "F107"
        },
        {
            start: "10:30",
            end: "11:30",
            subject: "Basic Electrical and Electronics Engineering",
            type: "Lecture",
            teacher: "Harminder Kaur Aulakh (EC)",
            room: "F107"
        },
        {
            start: "12:30",
            end: "13:30",
            subject: "Programming for Problem Solving",
            type: "Practical",
            teacher: "Er. Jaswant Singh Taur",
            room: "SL-I Lab"
        }
    ],

    Thursday: [
        {
            start: "08:30",
            end: "09:30",
            subject: "Professional English Communication",
            type: "Lecture",
            teacher: "Manjot Kaur",
            room: "S205"
        },
        {
            start: "09:30",
            end: "10:30",
            subject: "Math II",
            type: "Lecture",
            teacher: "Shreya Gupta",
            room: "S205"
        },
        {
            start: "10:30",
            end: "11:30",
            subject: "Chemistry",
            type: "Lecture",
            teacher: "Mandeep Kaur",
            room: "S205"
        },
        {
            start: "12:30",
            end: "13:30",
            subject: "Chemistry",
            type: "Practical",
            teacher: "Mandeep Kaur",
            room: "Chem Lab 1"
        },
        {
            start: "14:30",
            end: "15:30",
            subject: "Mentoring Class & Professional Development",
            type: "Practical",
            teacher: "Nisha",
            room: "W/S Seminar Hall"
        }
    ],

    Friday: [
        {
            start: "09:30",
            end: "10:30",
            subject: "Professional English Communication",
            type: "Lecture",
            teacher: "Manjot Kaur",
            room: "F108"
        },
        {
            start: "10:30",
            end: "12:30",
            subject: "Programming for Problem Solving",
            type: "Practical",
            teacher: "Er. Jaswant Singh Taur",
            room: "R Lab, CSE Dept"
        },
        {
            start: "13:30",
            end: "14:30",
            subject: "Math II",
            type: "Tutorial",
            teacher: "Shreya Gupta",
            room: "F106"
        },
        {
            start: "14:30",
            end: "15:30",
            subject: "Professional English Communication",
            type: "Practical",
            teacher: "Nisha",
            room: "W/S Seminar Hall"
        }
    ]
};


// Find today's day
function showToday() {

    const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];

    const today = days[new Date().getDay()];
    const lectures = timetable[today] || [];

    console.log("Today:", today);
    console.log("Lectures:", lectures);
}

showToday();
