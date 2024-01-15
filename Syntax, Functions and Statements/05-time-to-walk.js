function timeToWalk(steps, footTrack, speed){

    let footTrackInKm = footTrack / 1000;
    let totalDistance = steps * footTrackInKm;
    let walkingTimeHours = totalDistance / speed;
    let breaks = Math.floor(totalDistance / 0.5);
    let breakTimeMinutes = breaks;
    let totalTimeMinutes = walkingTimeHours * 60 + breakTimeMinutes;

    let hours = Math.floor(totalTimeMinutes / 60);
    let minutes = Math.floor(totalTimeMinutes % 60);
    let seconds = Math.round((totalTimeMinutes % 1) * 60);

    console.log(`${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`);
}
timeToWalk(4000, 0.60, 5)