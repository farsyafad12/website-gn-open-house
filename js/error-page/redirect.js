const timer = document.getElementById('countdown');
timer.textContent = " dalam 7 detik";
function startCountdown() {
    let count = 7;
    const interval = setInterval(() => {
        timer.textContent = " dalam " + count + " detik";
        count--;
        if (count < 0) {
            clearInterval(interval);
            timer.innerHTML = ". Jika Anda Tidak Dialihkan, <a href='https://ahnaf.farsyafad.tech'>Klik Disini</a>";
            redirect()
        }
    }, 1000);
}
function redirect() {
    window.location.href = "https://farsyafad.tech/ahnaf";
}
startCountdown();