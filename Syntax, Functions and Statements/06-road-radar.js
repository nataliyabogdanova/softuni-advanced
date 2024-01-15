function roadRadar(speed, area) {
    let speedLimits = {
        motorway: 130,
        interstate: 90,
        city: 50,
        residential: 20
    }

    if (speed <= speedLimits[area]) {
        console.log(`Driving ${speed} km/h in a ${speedLimits[area]} zone`);
    } else {
        let speedOver = speed - speedLimits[area];
        let status = '';
        if (speedOver <= 20) status = 'speeding';
        else if (speedOver <= 40) status = 'excessive speeding';
        else status = 'reckless driving';

        console.log(`The speed is ${speedOver} km/h faster than the allowed speed of ${speedLimits[area]} - ${status}`);
    }
}
roadRadar(200, 'motorway')