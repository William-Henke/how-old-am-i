let currentDate = new Date();
let birthday = document.getElementById('birthday');
let submit = document.getElementById('submit');
submit.addEventListener('click', showAge);

function showAge() {
    let BDay = document.getElementById('birthday').value;
    let date = new Date(BDay);
    // console.log('date', date);
    let timeElapsed = currentDate - date;
    let days = Math.floor(timeElapsed / 1000 / 60 / 60/ 24);
    let age = document.getElementById('age');
    age.innerHTML = ('You have lived for ' + days + ' days.');
    document.getElementById('stage1').style.display = "none";
    document.getElementById('stage2').style.display = "block";
}