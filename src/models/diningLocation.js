export class DiningLocation {
    constructor(name) {
        this.name = name;
        this.hours = []
    }

    addHours(hours) {
        this.hours.push(hours)
    }
}

export class Hours {
    constructor(day, startHour, endHour) {
        this.day = day;
        this.startHour = startHour;
        this.endHour = endHour;
    }
}