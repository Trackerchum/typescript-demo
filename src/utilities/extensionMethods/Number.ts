declare global {
    interface Number {
        to2dp(): number;
        formatForCurrency(currency?: string): string;
    }
}

Number.prototype.to2dp = function (this: number) {
    return Math.round(this * 100) / 100;
}

Number.prototype.formatForCurrency = function (this: number, currency: string = "£") {
    var negative = this < 0;
    var fixed = Math.abs(this).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    var dpSplit = fixed.split(".");
    if (dpSplit.length === 2 && dpSplit[1].length === 1) {
        return negative ? `-${currency + fixed}0` : `${currency + fixed}0`;
    }
    return negative ? `-${currency + fixed}` : currency + fixed;
}

export { }