/* =========================================================
   TIMETABLE DATA
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


/* =========================================================
   DISPLAY FULL TIMETABLE
========================================================= */

function displayTimetable() {

    const timetableContainer = document.getElementById("timetable");

    if (!timetableContainer) return;

    timetableContainer.innerHTML = "";

    for (const day in timetable) {

        const daySection = document.createElement("div");
        daySection.className = "day-section";

        const dayHeading = document.createElement("h3");
        dayHeading.textContent = day;

        daySection.appendChild(dayHeading);

        const table = document.createElement("table");

        table.innerHTML = `
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
        `;

        const tbody = table.querySelector("tbody");

        timetable[day].forEach((lecture, index) => {

            const row = document.createElement("tr");

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

        daySection.appendChild(table);
        timetableContainer.appendChild(daySection);
    }
}


/* =========================================================
   PAGE NAVIGATION
========================================================= */

function showPage(pageId) {

    const pages = document.querySelectorAll(".page");

    pages.forEach(page => {
        page.classList.add("hidden");
    });

    const selectedPage = document.getElementById(pageId);

    if (selectedPage) {
        selectedPage.classList.remove("hidden");
    }
}


/* =========================================================
   CALENDAR
========================================================= */

let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

let selectedDay = null;
let selectedMonth = null;
let selectedYear = null;


/* Month names */

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


/* =========================================================
   DISPLAY CALENDAR
========================================================= */

function displayCalendar() {

    const calendar = document.getElementById("calendar");
    const monthYear = document.getElementById("monthYear");

    if (!calendar || !monthYear) return;

    calendar.innerHTML = "";

    monthYear.textContent =
        `${monthNames[currentMonth]} ${currentYear}`;


    /* First day of month */

    let firstDay =
        new Date(currentYear, currentMonth, 1).getDay();

    /*
       JavaScript:
       Sunday = 0
       Monday = 1

       We want:
       Monday = 0
       Tuesday = 1
       ...
       Sunday = 6
    */

    firstDay =
        firstDay === 0 ? 6 : firstDay - 1;


    /* Number of days */

    const daysInMonth =
        new Date(
            currentYear,
            currentMonth + 1,
            0
        ).getDate();


    /* Empty spaces */

    for (let i = 0; i < firstDay; i++) {

        const empty = document.createElement("div");

        empty.className = "empty";

        calendar.appendChild(empty);
    }


    /* Dates */

    for (let day = 1; day <= daysInMonth; day++) {

        const dateButton = document.createElement("div");

        dateButton.className = "date";
        dateButton.textContent = day;


        /* Today */

        const today = new Date();

        if (
            day === today.getDate() &&
            currentMonth === today.getMonth() &&
            currentYear === today.getFullYear()
        ) {
            dateButton.classList.add("today");
        }


        /* Previously selected date */

        if (
            day === selectedDay &&
            currentMonth === selectedMonth &&
            currentYear === selectedYear
        ) {
            dateButton.classList.add("selected");
        }


        /* Attendance already recorded */

        const dateKey =
            createDateKey(currentYear, currentMonth, day);

        const savedAttendance =
            getAttendanceData();

        if (savedAttendance[dateKey]) {

            const entries =
                Object.keys(savedAttendance[dateKey]);

            if (entries.length > 0) {
                dateButton.classList.add("has-attendance");
            }
        }


        /* Click date */

        dateButton.onclick = function () {
            selectDate(day);
        };


        calendar.appendChild(dateButton);
    }
}


/* =========================================================
   CHANGE MONTH
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
   CREATE UNIQUE DATE KEY
========================================================= */

function createDateKey(year, month, day) {

    const monthNumber =
        String(month + 1).padStart(2, "0");

    const dayNumber =
        String(day).padStart(2, "0");

    return `${year}-${monthNumber}-${dayNumber}`;
}


/* =========================================================
   GET SAVED ATTENDANCE
========================================================= */

function getAttendanceData() {

    const saved =
        localStorage.getItem("attendanceData");

    if (!saved) {
        return {};
    }

    try {
        return JSON.parse(saved);
    }

    catch (error) {
        return {};
    }
}


/* =========================================================
   SAVE ATTENDANCE
========================================================= */

function saveAttendanceData(data) {

    localStorage.setItem(
        "attendanceData",
        JSON.stringify(data)
    );
}


/* =========================================================
   GET WEEKDAY
========================================================= */

function getWeekday(year, month, day) {

    const date =
        new Date(year, month, day);

    const weekdays = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];

    return weekdays[date.getDay()];
}


/* =========================================================
   SELECT DATE
========================================================= */

function selectDate(day) {

    selectedDay = day;
    selectedMonth = currentMonth;
    selectedYear = currentYear;


    const selectedDate =
        document.getElementById("selectedDate");

    const weekday =
        getWeekday(
            selectedYear,
            selectedMonth,
            selectedDay
        );


    if (selectedDate) {

        selectedDate.textContent =
            `📅 ${weekday}, ${day} ${monthNames[selectedMonth]} ${selectedYear}`;
    }


    /* Redraw calendar so selected date becomes highlighted */

    displayCalendar();


    /* Show that day's lectures */

    displayDailyAttendance(
        selectedYear,
        selectedMonth,
        selectedDay
    );
}


/* =========================================================
   DAILY ATTENDANCE PANEL
========================================================= */

function displayDailyAttendance(year, month, day) {

    let attendanceSection =
        document.getElementById("dailyAttendance");


    /*
       If the HTML doesn't already contain
       dailyAttendance, create it automatically.
    */

    if (!attendanceSection) {

        attendanceSection =
            document.createElement("div");

        attendanceSection.id =
            "dailyAttendance";

        attendanceSection.className =
            "attendance-section";


        const selectedDate =
            document.getElementById("selectedDate");


        if (selectedDate) {

            selectedDate.parentNode.insertBefore(
                attendanceSection,
                selectedDate.nextSibling
            );

        } else {

            const calendarContainer =
                document.querySelector(".calendar-container");

            if (calendarContainer) {

                calendarContainer.appendChild(
                    attendanceSection
                );
            }
        }
    }


    attendanceSection.innerHTML = "";


    const weekday =
        getWeekday(year, month, day);


    /* Heading */

    const heading =
        document.createElement("h2");

    heading.textContent =
        `${weekday}'s Attendance`;

    heading.style.textAlign = "center";
    heading.style.color = "#1b4332";
    heading.style.marginBottom = "20px";

    attendanceSection.appendChild(heading);


    /* Weekend */

    if (!timetable[weekday]) {

        const noClass =
            document.createElement("div");

        noClass.className =
            "attendance-card";

        noClass.innerHTML = `
            <h3 style="text-align:center;">
                No classes scheduled
            </h3>

            <p style="text-align:center; color:#666;">
                There are no timetable entries for ${weekday}.
            </p>
        `;

        attendanceSection.appendChild(noClass);

        return;
    }


    /* Date key */

    const dateKey =
        createDateKey(year, month, day);


    const attendanceData =
        getAttendanceData();


    const dayAttendance =
        attendanceData[dateKey] || {};


    /* Lecture cards */

    timetable[weekday].forEach((lecture, index) => {

        const card =
            document.createElement("div");

        card.className =
            "attendance-card";


        const lectureId =
            `${dateKey}-${index}`;


        const currentStatus =
            dayAttendance[lectureId] || null;


        card.innerHTML = `

            <div style="
                display:flex;
                justify-content:space-between;
                align-items:flex-start;
                gap:10px;
            ">

                <div>

                    <div style="
                        font-size:13px;
                        color:#666;
                        font-weight:600;
                        margin-bottom:5px;
                    ">
                        ${lecture.start} - ${lecture.end}
                    </div>

                    <h3 style="
                        margin:0 0 6px 0;
                        color:#1b4332;
                    ">
                        ${lecture.subject}
                    </h3>

                    <div style="
                        font-size:13px;
                        color:#666;
                        line-height:1.5;
                    ">
                        ${lecture.type}
                        • ${lecture.teacher}
                        • ${lecture.room}
                    </div>

                </div>

            </div>


            <div style="
                display:flex;
                gap:10px;
                margin-top:15px;
            ">

                <button
                    class="attendance-option present-btn"
                    data-status="P"
                    style="
                        flex:1;
                        padding:12px;
                        border-radius:8px;
                        border:2px solid #1b4332;
                        background:${currentStatus === "P" ? "#1b4332" : "white"};
                        color:${currentStatus === "P" ? "white" : "#1b4332"};
                        font-weight:700;
                        font-size:15px;
                        cursor:pointer;
                    "
                >
                    ✓ Present
                </button>


                <button
                    class="attendance-option absent-btn"
                    data-status="A"
                    style="
                        flex:1;
                        padding:12px;
                        border-radius:8px;
                        border:2px solid #52796f;
                        background:${currentStatus === "A" ? "#52796f" : "white"};
                        color:${currentStatus === "A" ? "white" : "#52796f"};
                        font-weight:700;
                        font-size:15px;
                        cursor:pointer;
                    "
                >
                    ✕ Absent
                </button>

            </div>
        `;


        const buttons =
            card.querySelectorAll(".attendance-option");


        buttons.forEach(button => {

            button.addEventListener(
                "click",
                function () {

                    const status =
                        this.dataset.status;


                    /* Save */

                    const allAttendance =
                        getAttendanceData();


                    if (!allAttendance[dateKey]) {

                        allAttendance[dateKey] = {};
                    }


                    allAttendance[dateKey][lectureId] =
                        status;


                    saveAttendanceData(
                        allAttendance
                    );


                    /* Refresh panel */

                    displayDailyAttendance(
                        year,
                        month,
                        day
                    );


                    /* Update calendar dot */

                    displayCalendar();
                }
            );
        });


        attendanceSection.appendChild(card);
    });


    /* Summary */

    const summary =
        document.createElement("div");

    summary.className =
        "attendance-card";


    let presentCount = 0;
    let absentCount = 0;


    timetable[weekday].forEach((lecture, index) => {

        const lectureId =
            `${dateKey}-${index}`;

        if (dayAttendance[lectureId] === "P") {
            presentCount++;
        }

        if (dayAttendance[lectureId] === "A") {
            absentCount++;
        }
    });


    const total =
        timetable[weekday].length;


    summary.innerHTML = `

        <div style="
            text-align:center;
            color:#1b4332;
        ">

            <strong>Today's Summary</strong>

            <div style="
                display:flex;
                justify-content:center;
                gap:25px;
                margin-top:12px;
                font-size:14px;
            ">

                <span>
                    ✓ Present: <strong>${presentCount}</strong>
                </span>

                <span>
                    ✕ Absent: <strong>${absentCount}</strong>
                </span>

                <span>
                    Total: <strong>${total}</strong>
                </span>

            </div>

        </div>
    `;


    attendanceSection.appendChild(summary);
}


/* =========================================================
   START EVERYTHING
========================================================= */

displayTimetable();

displayCalendar();
