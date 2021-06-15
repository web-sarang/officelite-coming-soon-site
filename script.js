const countdown = () => {
    const countDate = new Date ("August 01, 2021 00:00:00").getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    //How the A does time work?
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    //Calculate the thing 
    let textDay = Math.floor(gap / day);
    let textHour = Math.floor((gap % day) / hour);
    let textMinute = Math.floor((gap % hour) / minute);
    let textSecond = Math.floor((gap % minute) / second);

    
    if (textDay < 10) {textDae = "0" + textDay;}
    else textDay;
    if (textHour < 10) {textHour = "0" + textHour;}
    else textHour;
    if (textMinute < 10) {textMinute = "0" + textMinute;}
    else textMinute;
    if (textSecond < 10) {textSecond = "0" + textSecond;}
    else textSecond;

    document.querySelector(".day").innerText = textDay;
    document.querySelector(".hour").innerText = textHour;
    document.querySelector(".minute").innerText = textMinute;
    document.querySelector(".second").innerText = textSecond;  
    
}; 

setInterval(countdown, 1000);