const markAsReadBtn = document.getElementById("mark-read");
const notis = document.getElementsByClassName("noti");
const unreadCounter = document.getElementById("unread-counter");


markAsReadBtn.onclick = function() {
    for (let i = 0; i < notis.length; i++) {
        notis[i].classList.add("read");
    }
    unreadCounter.innerText = "0";
};