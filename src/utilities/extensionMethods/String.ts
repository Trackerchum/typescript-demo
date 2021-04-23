declare global {
    interface String {
        isNumeric(): boolean;
    }
}

String.prototype.isNumeric = function (this: string) {
    return /^\d+$/.test(this);
}

export { }