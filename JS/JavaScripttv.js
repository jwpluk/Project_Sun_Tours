function startTime() {
    var vandaag = new Date();
    var maanden = new Array('Januari','Februari','Maart','April','Mei','Juni','Juli','Augustus','September','Oktober','November','December');
    var weekdag = new Array('Zondag','Maandag','Dinsdag','Woensdag','Donderdag','Vrijdag','Zaterdag');
    
    var dag = vandaag.getDay();
    var datum = vandaag.getDate();
    var maand = vandaag.getMonth();
    var jaar = vandaag.getFullYear();
    
    var hour = vandaag.getHours();
    var min = vandaag.getMinutes();
    var sec = vandaag.getSeconds();
    
    min = checkTime(min);
    sec = checkTime(sec);
    
    document.getElementById('txt').innerHTML = weekdag[dag] + " " + maanden[maand] + " " + datum + " " + jaar + "<br>" + hour + ":" + min + ":" + sec;
    var t = setTimeout(startTime, 500);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

function confirmInput() {
    fname = document.forms[0].fname.value;
    alert("Welkom " + fname);
}