export class DiningLocation {
    constructor(name, hours) {
        this.name = name;
        this.hours = hours;
    }
}

export class Hours {
    constructor(day, startHour, endHour) {
        this.day = day;
        this.startHour = startHour;
        this.endHour = endHour;
    }
}