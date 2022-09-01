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

/* Check if the phone number matches a formatted number and return the number without formatting. */
export const unformatPhoneNumber = (number) => {
    const fs = number.replace(/\D/g, "").match(/(\d{1})(\d{3})(\d{3})(\d{4})/);

    return fs[0];
};

export function formatPhoneNumber(value) {
    // formatted string
    const fs = value.replace(/\D/g, "").match(/(\d{1})(\d{3})(\d{3})(\d{4})/);

    /* If the string formats properly, return it */
    if (fs) {
        return `+${fs[1]} (${fs[2]}) ${fs[3]} - ${fs[4]}`;
    }
    return "";
}
