export const Months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export const FormatDate = (date: Date, longMonth?: boolean) => `${date.toLocaleString('default', { month: longMonth ? 'long' : 'short' })} ${date.getFullYear()}`;

export const GetSelectFormattedMonths = (date?: Date, excludeYear?: boolean, shortMonth?: boolean) => {
    var date = date ? date : new Date();
    return Months.slice(date.getMonth() + 1).concat(Months.slice(0, date.getMonth() + 1)).reverse().map((month, n, months) => {
        if (n > months.indexOf(Months[0])) {
            return `${shortMonth ? month.substring(0, 3) : month}${excludeYear ? "" : ` ${date.getFullYear() - 1}`}`;
        }
        return `${shortMonth ? month.substring(0, 3) : month}${excludeYear ? "" : ` ${date.getFullYear()}`}`;
    });
}