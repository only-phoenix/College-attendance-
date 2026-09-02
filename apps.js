/* =========================================================
   COLLEGE ATTENDANCE WEBSITE
   COMPLETE APP.JS
========================================================= */


/* =========================================================
   1. TIMETABLE
========================================================= */
            const timetable = {
    Monday: [
        {
            time: "08:30 - 09:30",
            subject: "MATH II",
            type: "Lecture",
            teacher: "Ms. Shreya",
            room: "F113"
        },
        {
            time: "09:30 - 10:30",
            subject: "PROFESSIONAL ENGLISH COMMUNICATION",
            type: "Lecture",
            teacher: "Ms. Manjot Kaur",
            room: "F113"
        },
        {
            time: "10:30 - 11:30",
            subject: "BASIC ELECTRICAL AND ELECTRONICS ENGINEERING",
            type: "Lecture",
            teacher: "Er. Harminder Kaur Aulakh (EC)",
            room: "F113"
        },
        {
            time: "11:30 - 12:30",
            subject: "CHEMISTRY",
            type: "Lecture",
            teacher: "Ms. Mandeep Kaur",
            room: "F113"
        },
        {
            time: "12:30 - 13:30",
            subject: "BREAK / FREE PERIOD",
            type: "Break",
            teacher: "",
            room: ""
        },
        {
            time: "13:30 - 14:30",
            subject: "MATH II",
            type: "Tutorial",
            teacher: "Ms. Shreya",
            room: "F106"
        },
        {
            time: "14:30 - 15:30",
            subject: "BREAK / FREE PERIOD",
            type: "Break",
            teacher: "",
            room: ""
        }
    ],

    Tuesday: [
        {
            time: "08:30 - 09:30",
            subject: "BREAK / FREE PERIOD",
            type: "Break",
            teacher: "",
            room: ""
        },
        {
            time: "09:30 - 10:30",
            subject: "BREAK / FREE PERIOD",
            type: "Break",
            teacher: "",
            room: ""
        },
        {
            time: "10:30 - 11:30",
            subject: "BASIC ELECTRICAL AND ELECTRONICS ENGINEERING",
            type: "Lecture",
            teacher: "Er. Harminder Kaur Aulakh (EC)",
            room: "G6"
        },
        {
            time: "11:30 - 12:30",
            subject: "BREAK / FREE PERIOD",
            type: "Break",
            teacher: "",
            room: ""
        },
        {
            time: "12:30 - 13:30",
            subject: "BASIC ELECTRICAL AND ELECTRONICS ENGINEERING",
            type: "Tutorial",
            teacher: "Er. Harminder Kaur Aulakh (EC)",
            room: "F106"
        },
        {
            time: "13:30 - 14:30",
            subject: "BASIC ELECTRICAL AND ELECTRONICS ENGINEERING",
            type: "Practical",
            teacher: "Er. Kamalpreet Kaur (EC)",
            room: "PE LAB (BEE LAB 2)"
        },
        {
            time: "14:30 - 15:30",
            subject: "BREAK / FREE PERIOD",
            type: "Break",
            teacher: "",
            room: ""
        }
    ],

    Wednesday: [
        {
            time: "08:30 - 09:30",
            subject: "BREAK / FREE PERIOD",
            type: "Break",
            teacher: "",
            room: ""
        },
        {
            time: "09:30 - 10:30",
            subject: "BREAK / FREE PERIOD",
            type: "Break",
            teacher: "",
            room: ""
        },
        {
            time: "10:30 - 11:30",
            subject: "BASIC ELECTRICAL AND ELECTRONICS ENGINEERING",
            type: "Lecture",
            teacher: "Er. Harminder Kaur Aulakh (EC)",
            room: "F107"
        },
        {
            time: "11:30 - 12:30",
            subject: "BREAK / FREE PERIOD",
            type: "Break",
            teacher: "",
            room: ""
        },
        {
            time: "12:30 - 13:30",
            subject: "PROGRAMMING FOR PROBLEM SOLVING",
            type: "Practical",
            teacher: "Er. Jaswant Singh Taur",
            room: "OS LAB, CSE DEPT"
        },
        {
            time: "13:30 - 14:30",
            subject: "BREAK / FREE PERIOD",
            type: "Break",
            teacher: "",
            room: ""
        },
        {
            time: "14:30 - 15:30",
            subject: "BREAK / FREE PERIOD",
            type: "Break",
            teacher: "",
            room: ""
        }
    ],

    Thursday: [
        {
            time: "08:30 - 09:30",
            subject: "PROFESSIONAL ENGLISH COMMUNICATION",
            type: "Lecture",
            teacher: "Ms. Manjot Kaur",
            room: "S205"
        },
        {
            time: "09:30 - 10:30",
            subject: "MATH II",
            type: "Lecture",
            teacher: "Ms. Shreya",
            room: "S205"
        },
        {
            time: "10:30 - 11:30",
            subject: "CHEMISTRY",
            type: "Lecture",
            teacher: "Ms. Mandeep Kaur",
            room: "S205"
        },
        {
            time: "11:30 - 12:30",
            subject: "BREAK / FREE PERIOD",
            type: "Break",
            teacher: "",
            room: ""
        },
        {
            time: "12:30 - 13:30",
            subject: "CHEMISTRY",
            type: "Practical",
            teacher: "Karan Bhalla",
            room: "CHEM LAB 1"
        },
        {
            time: "13:30 - 14:30",
            subject: "BREAK / FREE PERIOD",
            type: "Break",
            teacher: "",
            room: ""
        },
        {
            time: "14:30 - 15:30",
            subject: "MENTORING CLASS & PROFESSIONAL DEVELOPMENT",
            type: "Class",
            teacher: "Er. Goldendeep Kaur, Er. Kuljit Kaur",
            room: "CSA1, CSA2"
        }
    ],

    Friday: [
        {
            time: "08:30 - 09:30",
            subject: "MATH II",
            type: "Lecture",
            teacher: "Ms. Shreya",
            room: "F108"
        },
        {
            time: "09:30 - 10:30",
            subject: "PROFESSIONAL ENGLISH COMMUNICATION",
            type: "Lecture",
            teacher: "Ms. Manjot Kaur",
            room: "F108"
        },
        {
            time: "10:30 - 11:30",
            subject: "PROGRAMMING FOR PROBLEM SOLVING",
            type: "Practical",
            teacher: "Er. Jaswant Singh Taur",
            room: "R LAB, CSE DEPT"
        },
        {
            time: "11:30 - 12:30",
            subject: "BREAK / FREE PERIOD",
            type: "Break",
            teacher: "",
            room: ""
        },
        {
            time: "12:30 - 13:30",
            subject: "BREAK / FREE PERIOD",
            type: "Break",
            teacher: "",
            room: ""
        },
        {
            time: "13:30 - 14:30",
            subject: "CHEMISTRY",
            type: "Lecture",
            teacher: "Ms. Mandeep Kaur",
            room: "F106"
        },
        {
            time: "14:30 - 15:30",
            subject: "PROFESSIONAL ENGLISH COMMUNICATION",
            type: "Practical",
            teacher: "Ms. Nisha",
            room: "W/S SEMINAR HALL"
        }
    ]
};


/* =========================================================
   2. GENERAL INFORMATION
========================================================= */

const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

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
   3. PAGE NAVIGATION
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

    /*
       Refresh calculator whenever it is opened.
    */

    if (pageId === "calculatorPage") {
        calculateSubjectAttendance();
    }
}


/* =========================================================
   4. DISPLAY TIMETABLE
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

        timetable[day].forEach(
            (lecture, index) => {

                const row =
                    document.createElement("tr");

                row.innerHTML = `

                    <td>${index + 1}</td>

                    <td>
                        ${lecture.start} -
                        ${lecture.end}
                    </td>

                    <td>
                        ${lecture.subject}
                    </td>

                    <td>
                        ${lecture.type}
                    </td>

                    <td>
                        ${lecture.teacher}
                    </td>

                    <td>
                        ${lecture.room}
                    </td>
                `;

                tbody.appendChild(row);
            }
        );

        container.appendChild(section);
    }
}


/* =========================================================
   5. CALENDAR VARIABLES
========================================================= */

let currentMonth =
    new Date().getMonth();

let currentYear =
    new Date().getFullYear();

let selectedDay = null;
let selectedMonth = null;
let selectedYear = null;


/* =========================================================
   6. STORAGE
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

    } catch (error) {

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
   7. DATE KEY
========================================================= */

function createDateKey(
    year,
    month,
    day
) {

    return `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}


/* =========================================================
   8. CALENDAR
========================================================= */

function displayCalendar() {

    const calendar =
        document.getElementById("calendar");

    const monthYear =
        document.getElementById("monthYear");

    if (!calendar || !monthYear) {
        return;
    }

    calendar.innerHTML = "";

    monthYear.textContent =
        `${monthNames[currentMonth]} ${currentYear}`;


    /*
       Find first day of month.

       JavaScript:
       Sunday = 0
       Monday = 1
       ...

       Our calendar:
       Monday = first column
    */

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


    /*
       Empty spaces
    */

    for (
        let i = 0;
        i < firstDay;
        i++
    ) {

        const empty =
            document.createElement("div");

        empty.className =
            "empty";

        calendar.appendChild(empty);
    }


    /*
       Dates
    */

    const attendance =
        getAttendanceData();


    for (
        let day = 1;
        day <= daysInMonth;
        day++
    ) {

        const date =
            document.createElement("div");

        date.className =
            "date";

        date.textContent =
            day;


        /*
           Today's date
        */

        const today =
            new Date();


        if (
            day === today.getDate() &&
            currentMonth === today.getMonth() &&
            currentYear === today.getFullYear()
        ) {

            date.classList.add(
                "today"
            );

        }


        /*
           Selected date
        */

        if (
            day === selectedDay &&
            currentMonth === selectedMonth &&
            currentYear === selectedYear
        ) {

            date.classList.add(
                "selected"
            );

        }


        /*
           Show that attendance
           has been recorded.
        */

        const dateKey =
            createDateKey(
                currentYear,
                currentMonth,
                day
            );


        if (
            attendance[dateKey]
        ) {

            date.classList.add(
                "has-attendance"
            );

        }


        /*
           Click date
        */

        date.onclick =
            function () {

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
   9. CHANGE MONTH
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
   10. SELECT DATE
========================================================= */

function selectDate(
    day,
    month,
    year
) {

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


    if (selectedDate) {

        selectedDate.textContent =
            `📅 ${weekday}, ${day} ${monthNames[month]} ${year}`;

    }


    displayCalendar();


    displayDailyAttendance(
        day,
        month,
        year,
        weekday
    );
}


/* =========================================================
   11. GET SELECTED WEEKDAY
========================================================= */

function getSelectedWeekday() {

    if (
        selectedDay === null ||
        selectedMonth === null ||
        selectedYear === null
    ) {

        return null;

    }


    const date =
        new Date(
            selectedYear,
            selectedMonth,
            selectedDay
        );


    return weekdays[
        date.getDay()
    ];
}


/* =========================================================
   12. DAILY ATTENDANCE
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


    if (!container) {
        return;
    }


    container.innerHTML = "";


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


    /*
       HOLIDAY
    */

    if (
        dayData.holiday === true
    ) {

        container.innerHTML = `

            <div class="no-classes">

                <h3>
                    🏖️ Holiday / No Class
                </h3>

                <p>
                    This date has been marked
                    as a holiday.
                </p>

                <button
                    class="remove-holiday-btn"
                    onclick="removeHoliday('${dateKey}')"
                >
                    ↩️ Remove Holiday
                </button>

            </div>

        `;

        return;
    }


    /*
       WEEKEND / NO TIMETABLE
    */

    if (!timetable[weekday]) {

        container.innerHTML = `

            <div class="no-classes">

                <h3>
                    📚 No Classes
                </h3>

                <p>
                    There are no lectures
                    scheduled for ${weekday}.
                </p>

                <button
                    class="holiday-btn"
                    onclick="markHoliday('${dateKey}')"
                >
                    🏖️ Mark as Holiday
                </button>

            </div>

        `;

        return;
    }


    /*
       Heading
    */

    const heading =
        document.createElement("h2");

    heading.className =
        "attendance-day-heading";

    heading.textContent =
        `${weekday}'s Lectures`;

    container.appendChild(
        heading
    );


    /*
       Holiday button
    */

    const holidayButton =
        document.createElement("button");

    holidayButton.className =
        "holiday-btn";

    holidayButton.textContent =
        "🏖️ Mark Entire Day as Holiday";

    holidayButton.onclick =
        function () {

            markHoliday(dateKey);

        };


    container.appendChild(
        holidayButton
    );


    /*
       Current attendance counts
    */

    let present = 0;
    let absent = 0;


    /*
       Create lecture cards
    */

    timetable[weekday].forEach(
        (lecture, index) => {

            const lectureId =
                `lecture-${index}`;


            const currentStatus =
                dayData[lectureId] || "";


            if (
                currentStatus === "P"
            ) {

                present++;

            }


            if (
                currentStatus === "A"
            ) {

                absent++;

            }


            const card =
                document.createElement("div");

            card.className =
                "attendance-card";


            card.innerHTML = `

                <div class="lecture-time">
                    ${lecture.start}
                    -
                    ${lecture.end}
                </div>


                <div class="lecture-subject">
                    ${lecture.subject}
                </div>


                <div class="lecture-details">
                    ${lecture.type}
                    •
                    ${lecture.teacher}
                    •
                    ${lecture.room}
                </div>


                <div class="attendance-options">

                    <button
                        class="
                            attendance-btn
                            present-btn
                            ${currentStatus === "P"
                                ? "active"
                                : ""}
                        "
                        onclick="
                            markAttendance(
                                '${dateKey}',
                                '${lectureId}',
                                'P'
                            )
                        "
                    >
                        ✓ Present
                    </button>


                    <button
                        class="
                            attendance-btn
                            absent-btn
                            ${currentStatus === "A"
                                ? "active"
                                : ""}
                        "
                        onclick="
                            markAttendance(
                                '${dateKey}',
                                '${lectureId}',
                                'A'
                            )
                        "
                    >
                        ✕ Absent
                    </button>

                </div>

            `;


            container.appendChild(
                card
            );

        }
    );


    /*
       Daily summary
    */

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
                ✓ Present:
                <strong>${present}</strong>
            </span>

            <span>
                ✕ Absent:
                <strong>${absent}</strong>
            </span>

            <span>
                Total:
                <strong>${total}</strong>
            </span>

        </div>

    `;


    container.appendChild(
        summary
    );
}


/* =========================================================
   13. MARK PRESENT / ABSENT
========================================================= */

function markAttendance(
    dateKey,
    lectureId,
    status
) {

    const data =
        getAttendanceData();


    /*
       If this date was previously
       a holiday, remove holiday status.
    */

    if (!data[dateKey]) {

        data[dateKey] = {};

    }


    data[dateKey].holiday =
        false;


    /*
       Clicking the same button again
       removes the selection.
    */

    if (
        data[dateKey][lectureId] === status
    ) {

        delete data[dateKey][lectureId];

    }

    else {

        data[dateKey][lectureId] =
            status;

    }


    saveAttendanceData(data);


    /*
       Refresh current date
    */

    if (
        selectedDay !== null
    ) {

        displayDailyAttendance(
            selectedDay,
            selectedMonth,
            selectedYear,
            getSelectedWeekday()
        );

    }


    displayCalendar();


    /*
       If calculator page is open,
       refresh it too.
    */

    calculateSubjectAttendance();
}


/* =========================================================
   14. MARK HOLIDAY
========================================================= */

function markHoliday(dateKey) {

    const data =
        getAttendanceData();


    /*
       Confirm before marking.
    */

    const confirmed =
        confirm(
            "Mark this entire day as a holiday? All attendance marked for this date will be cleared."
        );


    if (!confirmed) {
        return;
    }


    data[dateKey] = {
        holiday: true
    };


    saveAttendanceData(data);


    /*
       Refresh
    */

    displayDailyAttendance(
        selectedDay,
        selectedMonth,
        selectedYear,
        getSelectedWeekday()
    );


    displayCalendar();


    calculateSubjectAttendance();
}


/* =========================================================
   15. REMOVE HOLIDAY
========================================================= */

function removeHoliday(dateKey) {

    const data =
        getAttendanceData();


    delete data[dateKey];


    saveAttendanceData(data);


    displayDailyAttendance(
        selectedDay,
        selectedMonth,
        selectedYear,
        getSelectedWeekday()
    );


    displayCalendar();


    calculateSubjectAttendance();
}


/* =========================================================
   16. SUBJECT-WISE CALCULATOR
========================================================= */

function calculateSubjectAttendance() {

    const calculator =
        document.getElementById(
            "attendanceCalculator"
        );


    if (!calculator) {
        return;
    }


    calculator.innerHTML = "";


    const attendance =
        getAttendanceData();


    /*
       Create every subject
       from timetable.
    */

    const subjects = {};


    for (
        const day in timetable
    ) {

        timetable[day].forEach(
            lecture => {

                const subject =
                    lecture.subject;


                if (
                    !subjects[subject]
                ) {

                    subjects[subject] = {

                        present: 0,

                        total: 0

                    };

                }

            }
        );

    }


    /*
       Read saved attendance.
    */

    for (
        const dateKey in attendance
    ) {

        const dayAttendance =
            attendance[dateKey];


        /*
           Ignore holidays.
        */

        if (
            dayAttendance.holiday === true
        ) {

            continue;

        }


        /*
           Get weekday.
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
            weekdays[
                date.getDay()
            ];


        if (
            !timetable[weekday]
        ) {

            continue;

        }


        /*
           Count P/A.
        */

        timetable[weekday].forEach(
            (lecture, index) => {

                const lectureId =
                    `lecture-${index}`;


                const status =
                    dayAttendance[
                        lectureId
                    ];


                if (
                    status === "P" ||
                    status === "A"
                ) {

                    const subject =
                        lecture.subject;


                    subjects[
                        subject
                    ].total++;


                    if (
                        status === "P"
                    ) {

                        subjects[
                            subject
                        ].present++;

                    }

                }

            }
        );

    }


    /*
       Overall attendance
    */

    let overallPresent = 0;

    let overallTotal = 0;


    for (
        const subject in subjects
    ) {

        overallPresent +=
            subjects[subject].present;


        overallTotal +=
            subjects[subject].total;

    }


    let overallPercentage = 0;


    if (
        overallTotal > 0
    ) {

        overallPercentage =
            (
                overallPresent /
                overallTotal
            ) * 100;

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
            ${overallPresent}
            Present out of
            ${overallTotal}
            marked classes
        </div>

    `;


    calculator.appendChild(
        overallCard
    );


    /*
       Subject cards
    */

    for (
        const subject in subjects
    ) {

        const present =
            subjects[subject].present;


        const total =
            subjects[subject].total;


        let percentage = 0;


        if (
            total > 0
        ) {

            percentage =
                (
                    present /
                    total
                ) * 100;

        }


        /*
           Status
        */

        let statusText;

        let statusClass;


        if (
            total === 0
        ) {

            statusText =
                "No attendance recorded";

            statusClass =
                "status-none";

        }

        else if (
            percentage >= 80
        ) {

            statusText =
                "🟢 Safe";

            statusClass =
                "status-safe";

        }

        else if (
            percentage >= 75
        ) {

            statusText =
                "🟡 Above minimum";

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
           Smart advice
        */

        let advice = "";


        if (
            total === 0
        ) {

            advice = `

                <div class="
                    attendance-advice
                    safe-advice
                ">

                    Mark your attendance
                    to start calculating.

                </div>

            `;

        }


        else if (
            percentage < 75
        ) {

            /*
               Number of classes that
               must be attended to reach 75%.
            */

            let needed = 0;


            while (
                (
                    (present + needed) /
                    (total + needed)
                ) < 0.75
            ) {

                needed++;


                /*
                   Safety limit.
                */

                if (
                    needed > 1000
                ) {

                    break;

                }

            }


            advice = `

                <div class="
                    attendance-advice
                    danger-advice
                ">

                    📈 Attend your next
                    <strong>
                        ${needed}
                    </strong>
                    class${needed === 1
                        ? ""
                        : "es"}
                    to reach
                    <strong>75%</strong>.

                </div>

            `;

        }


        else {

            /*
               Number of classes that can
               be missed while staying >=75%.
            */

            let canMiss = 0;


            while (
                (
                    present /
                    (total + canMiss + 1)
                ) >= 0.75
            ) {

                canMiss++;


                /*
                   Safety limit.
                */

                if (
                    canMiss > 1000
                ) {

                    break;

                }

            }


            if (
                canMiss === 0
            ) {

                advice = `

                    <div class="
                        attendance-advice
                        warning-advice
                    ">

                        ⚠️ You cannot miss
                        another class without
                        going below 75%.

                    </div>

                `;

            }

            else {

                advice = `

                    <div class="
                        attendance-advice
                        safe-advice
                    ">

                        🛡️ You can miss
                        <strong>
                            ${canMiss}
                        </strong>
                        more class${canMiss === 1
                            ? ""
                            : "es"}
                        and stay at or
                        above 75%.

                    </div>

                `;

            }

        }


        /*
           Subject card
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
                ${present}
                Present /
                ${total}
                marked
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


            ${advice}

        `;


        calculator.appendChild(
            card
        );

    }

}


/* =========================================================
   17. START WEBSITE
========================================================= */

displayTimetable();

displayCalendar();
