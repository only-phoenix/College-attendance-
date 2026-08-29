/* =========================================================
   TIMETABLE
========================================================= */

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
            teacher: "Karan Bhalla",
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


/* =========================================================
   TIMETABLE DISPLAY
========================================================= */

function displayTimetable() {

    const container =
        document.getElementById("timetable");

    if (!container) return;

    container.innerHTML = "";

    for (const day in timetable) {

        const section =
            document.createElement("div");

        section.className =
            "day-section";

        section.innerHTML = `
            <h3>${day}</h3>

            <table>

                <thead>

                    <tr>
                        <th>S.No.</th>
                        <th>Time</th>
                        <th>Subject</th>
                        <th>Type</th>
                        <th>Teacher</th>
                        <th>Room</th>
                    </tr>

                </thead>

                <tbody></tbody>

            </table>
        `;

        const tbody =
            section.querySelector("tbody");

        timetable[day].forEach((lecture, index) => {

            const row =
                document.createElement("tr");

            row.innerHTML = `
                <td>${index + 1}</td>
                <td>${lecture.start} - ${lecture.end}</td>
                <td>${lecture.subject}</td>
                <td>${lecture.type}</td>
                <td>${lecture.teacher}</td>
                <td>${lecture.room}</td>
            `;

            tbody.appendChild(row);
        });

        container.appendChild(section);
    }
}


/* =========================================================
   PAGE NAVIGATION
========================================================= */

function showPage(pageId) {

    document
        .querySelectorAll(".page")
        .forEach(page => {
            page.classList.add("hidden");
        });

    const page =
        document.getElementById(pageId);

    if (page) {
        page.classList.remove("hidden");
    }
}


/* =========================================================
   CALENDAR VARIABLES
========================================================= */

let currentMonth =
    new Date().getMonth();

let currentYear =
    new Date().getFullYear();

let selectedDay = null;
let selectedMonth = null;
let selectedYear = null;


const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];


/* =========================================================
   CALENDAR
========================================================= */

function displayCalendar() {

    const calendar =
        document.getElementById("calendar");

    const monthYear =
        document.getElementById("monthYear");

    if (!calendar || !monthYear) return;

    calendar.innerHTML = "";

    monthYear.textContent =
        `${monthNames[currentMonth]} ${currentYear}`;


    let firstDay =
        new Date(
            currentYear,
            currentMonth,
            1
        ).getDay();

    firstDay =
        firstDay === 0
            ? 6
            : firstDay - 1;


    const daysInMonth =
        new Date(
            currentYear,
            currentMonth + 1,
            0
        ).getDate();


    /* Empty cells */

    for (let i = 0; i < firstDay; i++) {

        const empty =
            document.createElement("div");

        empty.className = "empty";

        calendar.appendChild(empty);
    }


    /* Dates */

    for (let day = 1; day <= daysInMonth; day++) {

        const date =
            document.createElement("div");

        date.className = "date";

        date.textContent = day;


        /* Today */

        const today = new Date();

        if (
            day === today.getDate() &&
            currentMonth === today.getMonth() &&
            currentYear === today.getFullYear()
        ) {
            date.classList.add("today");
        }


        /* Selected */

        if (
            day === selectedDay &&
            currentMonth === selectedMonth &&
            currentYear === selectedYear
        ) {
            date.classList.add("selected");
        }


        /* Attendance exists */

        const key =
            createDateKey(
                currentYear,
                currentMonth,
                day
            );

        const saved =
            getAttendanceData();

        if (saved[key]) {

            date.classList.add(
                "has-attendance"
            );
        }


        date.onclick = function () {

            selectDate(
                day,
                currentMonth,
                currentYear
            );

        };


        calendar.appendChild(date);
    }
}


/* =========================================================
   MONTH CHANGE
========================================================= */

function changeMonth(direction) {

    currentMonth += direction;

    if (currentMonth < 0) {

        currentMonth = 11;
        currentYear--;
    }

    if (currentMonth > 11) {

        currentMonth = 0;
        currentYear++;
    }

    displayCalendar();
}


/* =========================================================
   SELECT DATE
========================================================= */

function selectDate(day, month, year) {

    selectedDay = day;
    selectedMonth = month;
    selectedYear = year;


    const date =
        new Date(
            year,
            month,
            day
        );

    const weekday =
        weekdays[date.getDay()];


    const selectedDate =
        document.getElementById(
            "selectedDate"
        );

    selectedDate.textContent =
        `📅 ${weekday}, ${day} ${monthNames[month]} ${year}`;


    displayCalendar();


    displayDailyAttendance(
        day,
        month,
        year,
        weekday
    );
}


/* =========================================================
   DATE KEY
========================================================= */

function createDateKey(year, month, day) {

    return `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}


/* =========================================================
   LOCAL STORAGE
========================================================= */

function getAttendanceData() {

    const saved =
        localStorage.getItem(
            "collegeAttendance"
        );

    if (!saved) {
        return {};
    }

    try {
        return JSON.parse(saved);
    }

    catch {
        return {};
    }
}


function saveAttendanceData(data) {

    localStorage.setItem(
        "collegeAttendance",
        JSON.stringify(data)
    );
}


/* =========================================================
   DAILY ATTENDANCE
========================================================= */

function displayDailyAttendance(
    day,
    month,
    year,
    weekday
) {

    const container =
        document.getElementById(
            "dailyAttendance"
        );

    if (!container) return;

    container.innerHTML = "";


    /* Heading */

    const heading =
        document.createElement("h2");

    heading.className =
        "attendance-day-heading";

    heading.textContent =
        `${weekday}'s Lectures`;

    container.appendChild(heading);


    /* Weekend / no classes */

    if (!timetable[weekday]) {

        const noClasses =
            document.createElement("div");

        noClasses.className =
            "no-classes";

        noClasses.innerHTML = `
            <h3>📚 No Classes</h3>

            <p>
                There are no lectures scheduled
                for ${weekday}.
            </p>
        `;

        container.appendChild(noClasses);

        return;
    }


    const dateKey =
        createDateKey(
            year,
            month,
            day
        );


    const attendance =
        getAttendanceData();


    const dayData =
        attendance[dateKey] || {};


    let present = 0;
    let absent = 0;


    /* Create lecture cards */

    timetable[weekday].forEach(
        (lecture, index) => {

            const lectureId =
                `lecture-${index}`;


            const currentStatus =
                dayData[lectureId] || "";


            if (currentStatus === "P") {
                present++;
            }

            if (currentStatus === "A") {
                absent++;
            }


            const card =
                document.createElement("div");

            card.className =
                "attendance-card";


            card.innerHTML = `

                <div class="lecture-time">
                    ${lecture.start} - ${lecture.end}
                </div>

                <div class="lecture-subject">
                    ${lecture.subject}
                </div>

                <div class="lecture-details">
                    ${lecture.type}
                    • ${lecture.teacher}
                    • ${lecture.room}
                </div>


                <div class="attendance-options">

                    <button
                        class="attendance-btn present-btn
                        ${currentStatus === "P" ? "active" : ""}"
                        onclick="markAttendance(
                            '${dateKey}',
                            '${lectureId}',
                            'P'
                        )"
                    >
                        ✓ Present
                    </button>


                    <button
                        class="attendance-btn absent-btn
                        ${currentStatus === "A" ? "active" : ""}"
                        onclick="markAttendance(
                            '${dateKey}',
                            '${lectureId}',
                            'A'
                        )"
                    >
                        ✕ Absent
                    </button>

                </div>
            `;


            container.appendChild(card);
        }
    );


    /* Summary */

    const total =
        timetable[weekday].length;


    const summary =
        document.createElement("div");

    summary.className =
        "attendance-summary";


    summary.innerHTML = `

        <div class="attendance-summary-title">
            Today's Attendance
        </div>

        <div class="attendance-summary-stats">

            <span>
                ✓ Present: <strong>${present}</strong>
            </span>

            <span>
                ✕ Absent: <strong>${absent}</strong>
            </span>

            <span>
                Total: <strong>${total}</strong>
            </span>

        </div>
    `;


    container.appendChild(summary);
}


/* =========================================================
   MARK PRESENT / ABSENT
========================================================= */

function markAttendance(
    dateKey,
    lectureId,
    status
) {

    const data =
        getAttendanceData();


    if (!data[dateKey]) {
        data[dateKey] = {};
    }


    /*
       Clicking the same button again
       removes the selection.
    */

    if (
        data[dateKey][lectureId] === status
    ) {

        delete data[dateKey][lectureId];

    } else {

        data[dateKey][lectureId] =
            status;
    }


    saveAttendanceData(data);


    /* Reload selected date */

    displayDailyAttendance(
        selectedDay,
        selectedMonth,
        selectedYear,
        getSelectedWeekday()
    );


    /* Update calendar */

    displayCalendar();
}


/* =========================================================
   SELECTED WEEKDAY
========================================================= */

function getSelectedWeekday() {

    const date =
        new Date(
            selectedYear,
            selectedMonth,
            selectedDay
        );

    return weekdays[date.getDay()];
}


/* =========================================================
   START
========================================================= */

displayTimetable();

displayCalendar();
/* =========================================================
   ATTENDANCE CALCULATOR
========================================================= */

function calculateSubjectAttendance() {

    const calculator =
        document.getElementById("attendanceCalculator");

    if (!calculator) return;

    calculator.innerHTML = "";


    const attendance =
        getAttendanceData();


    /*
       Find all subjects from the timetable
    */

    const subjects = {};


    for (const day in timetable) {

        timetable[day].forEach(lecture => {

            const subject =
                lecture.subject;

            if (!subjects[subject]) {

                subjects[subject] = {
                    present: 0,
                    total: 0
                };

            }

        });
    }


    /*
       Go through every saved date
       and count P/A for each lecture.
    */

    for (const dateKey in attendance) {

        const dayAttendance =
            attendance[dateKey];


        /*
           Get the weekday from the date
        */

        const parts =
            dateKey.split("-");

        const year =
            Number(parts[0]);

        const month =
            Number(parts[1]) - 1;

        const day =
            Number(parts[2]);


        const date =
            new Date(
                year,
                month,
                day
            );


        const weekday =
            weekdays[date.getDay()];


        /*
           Skip dates with no timetable
        */

        if (!timetable[weekday]) {
            continue;
        }


        /*
           Count each lecture
        */

        timetable[weekday].forEach(
            (lecture, index) => {

                const lectureId =
                    `lecture-${index}`;


                const status =
                    dayAttendance[lectureId];


                /*
                   Only count lectures that
                   have actually been marked.
                */

                if (
                    status === "P" ||
                    status === "A"
                ) {

                    subjects[
                        lecture.subject
                    ].total++;


                    if (status === "P") {

                        subjects[
                            lecture.subject
                        ].present++;
                    }

                }

            }
        );

    }


    /*
       Calculate overall attendance
    */

    let overallPresent = 0;
    let overallTotal = 0;


    for (const subject in subjects) {

        overallPresent +=
            subjects[subject].present;

        overallTotal +=
            subjects[subject].total;
    }


    let overallPercentage = 0;


    if (overallTotal > 0) {

        overallPercentage =
            (overallPresent / overallTotal) * 100;
    }


    /*
       Overall card
    */

    const overallCard =
        document.createElement("div");

    overallCard.className =
        "overall-card";


    overallCard.innerHTML = `

        <div class="overall-title">
            Overall Attendance
        </div>

        <div class="overall-percentage">
            ${overallPercentage.toFixed(1)}%
        </div>

        <div class="overall-count">
            ${overallPresent} Present
            out of
            ${overallTotal} marked classes
        </div>

    `;


    calculator.appendChild(
        overallCard
    );


    /*
       Subject cards
    */

    for (const subject in subjects) {

        const present =
            subjects[subject].present;

        const total =
            subjects[subject].total;


        let percentage = 0;


        if (total > 0) {

            percentage =
                (present / total) * 100;
        }


        /*
           Decide status
        */

        let statusText;
        let statusClass;


        if (total === 0) {

            statusText =
                "No attendance recorded";

            statusClass =
                "status-none";

        }

        else if (percentage >= 80) {

            statusText =
                "🟢 Safe";

            statusClass =
                "status-safe";

        }

        else if (percentage >= 75) {

            statusText =
                "🟡 Warning";

            statusClass =
                "status-warning";

        }

        else {

            statusText =
                "🔴 Below 75%";

            statusClass =
                "status-danger";
        }


        /*
           Create card
        */

        const card =
            document.createElement("div");

        card.className =
            "subject-card";


        card.innerHTML = `

            <div class="subject-name">
                ${subject}
            </div>

            <div class="subject-count">
                ${present} Present
                / ${total} marked
            </div>

            <div class="subject-percentage">
                ${percentage.toFixed(1)}%
            </div>

            <div class="
                subject-status
                ${statusClass}
            ">
                ${statusText}
            </div>

        `;


        calculator.appendChild(card);
    }

}


/* =========================================================
   UPDATE CALCULATOR WHEN PAGE IS OPENED
========================================================= */

const originalShowPage =
    showPage;


showPage = function(pageId) {

    originalShowPage(pageId);


    if (pageId === "calculatorPage") {

        calculateSubjectAttendance();
    }

};
