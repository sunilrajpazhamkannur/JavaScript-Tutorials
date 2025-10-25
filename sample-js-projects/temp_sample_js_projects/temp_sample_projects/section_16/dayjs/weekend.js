export function isWeekend(day) {
    return (day.format('dddd') === 'Saturday' || day.format('dddd') === 'Sunday');
}

export default isWeekend;