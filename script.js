// function updateClock() {
//     const now = new Date();
//     let h = now.getHours().toString().padStart(2, '0');
//     let m = now.getMinutes().toString().padStart(2, '0');
//     let s = now.getSeconds().toString().padStart(2, '0');
//     document.getElementById('clock').textContent = `${h}:${m}:${s}`;
// }

// updateClock(); // Initial call
// setInterval(updateClock, 1000);


function updateClock() {
    const now = new Date();
    let h = now.getHours();
    let m = now.getMinutes().toString().padStart(2, '0');
    let s = now.getSeconds().toString().padStart(2, '0');
    let period = 'AM';

    if (h >= 12) {
        period = 'PM';
        if (h > 12) h -= 12;
    }
    if (h === 0) {
        h = 12;
    }

    h = h.toString().padStart(2, '0');
    document.getElementById('clock').textContent = `${h}:${m}:${s} ${period}`;
}

updateClock(); // Initial call
setInterval(updateClock, 1000);