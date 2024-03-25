export function doesRefreshNeeded(selectedCalendar) {
    return (selectedCalendar.year === new Date().getFullYear() && selectedCalendar.month === new Date().getMonth())
}