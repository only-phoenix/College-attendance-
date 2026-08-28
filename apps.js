const timetable = {
    Monday: [],
    Tuesday: [],
    Wednesday: [],
    Thursday: [],
    Friday: [],
    Saturday: []
};

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
