function findDay(month, day, year) {
    const date = new Date(year, month - 1, day);
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return daysOfWeek[date.getDay()];
}

// Example usage:
console.log(findDay(8, 5, 2015)); // Output: Wednesday

