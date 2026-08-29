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
function displayTimetable() {

    const timetableContainer = document.getElementById("timetable");

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

displayTimetable();
// ===== PAGE NAVIGATION =====

function showPage(pageId) {

    const pages = document.querySelectorAll(".page");

    pages.forEach(page => {
        page.classList.add("hidden");
    });

    document.getElementById(pageId).classList.remove("hidden");
}
// ===== CALENDAR =====

let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

function displayCalendar() {

    const calendar = document.getElementById("calendar");
    const monthYear = document.getElementById("monthYear");

    calendar.innerHTML = "";

    const monthNames = [
        "January", "February", "March",
        "April", "May", "June",
        "July", "August", "September",
        "October", "November", "December"
    ];

    monthYear.textContent = `${monthNames[currentMonth]} ${currentYear}`;

    // First day of month
    let firstDay = new Date(currentYear, currentMonth, 1).getDay();

    // Convert Sunday = 0 to Monday = 0
    firstDay = firstDay === 0 ? 6 : firstDay - 1;

    // Number of days
    const daysInMonth = new Date(
        currentYear,
        currentMonth + 1,
        0
    ).getDate();

    // Empty spaces before first day
    for (let i = 0; i < firstDay; i++) {

        const empty = document.createElement("div");
        empty.className = "empty";

        calendar.appendChild(empty);
    }

    // Dates
    for (let day = 1; day <= daysInMonth; day++) {

        const dateButton = document.createElement("div");

        dateButton.className = "date";
        dateButton.textContent = day;

        dateButton.onclick = function () {
            selectDate(day);
        };

        // Highlight today
        const today = new Date();

        if (
            day === today.getDate() &&
            currentMonth === today.getMonth() &&
            currentYear === today.getFullYear()
        ) {
            dateButton.classList.add("today");
        }

        calendar.appendChild(dateButton);
    }
}


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


function selectDate(day) {

    const selectedDate = document.getElementById("selectedDate");

    const monthNames = [
        "January", "February", "March",
        "April", "May", "June",
        "July", "August", "September",
        "October", "November", "December"
    ];

    selectedDate.textContent =
        `📅 Selected date: ${day} ${monthNames[currentMonth]} ${currentYear}`;
}


// Start calendar
displayCalendar();
