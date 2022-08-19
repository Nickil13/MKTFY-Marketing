export const formatDate = (date) => {
    const [year, month, day] = date.split("-");
    const months = [
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
        "December",
    ];
    let formattedMonth = month;
    if (formattedMonth[0] === "0") {
        formattedMonth = months[formattedMonth[1] - 1];
    }
    let formattedDay = day.slice(0, 2);

    return `${formattedMonth} ${formattedDay}, ${year}`;
};
