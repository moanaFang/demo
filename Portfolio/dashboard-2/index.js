// nav
const active = document.querySelectorAll('header > nav li');
let activeState = false;
let preActive = 0;
for (let i=0; i<active.length; i++) {
    active[i].addEventListener('click', function() {
        active[preActive].style.backgroundColor = 'transparent';
        active[i].style.backgroundColor = '#E3DFEF';
        active[i].style.borderRadius = '30% 0 0 30%';
        active[i].style.clipPath = 'polygon(0 15%, 90% 15%, 100% 0%, 100% 100%, 90% 85%, 0 85%)';
        preActive = i;
    });
}

// main-calendar-mothes
const monthes = document.querySelectorAll('.monthes')[0];
let temp = '';
const monthesArr = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
for(let i = 0; i < monthesArr.length; i++) {
    temp += `
            <li>
                <span>${monthesArr[i]}</span> 
                <div class="selectMonthEvent"></div>
            </li>
            `;
}
monthes.innerHTML = temp;
const selectMonthEvent = document.querySelectorAll('.selectMonthEvent');

let selectMonth = {
    temp: [0, ''],
    changeBackground(i) {
        for (let j = 0; j <= i; j++) {
            selectMonthEvent[j].style.backgroundColor = "#554A86";
        }
        if (this.temp[0] > i) {
            for (let k = i + 1; k <= this.temp[0]; k++) {
                selectMonthEvent[k].style.backgroundColor = "#D5D4D5";
            }
        }
        this.temp[0] = i;
        this.everyMonthOfDays();
    },
    everyMonthOfDays() {
        let month = new Date(2021, this.temp[0]).getMonth() + 1;
        let firstDate = new Date(2021, this.temp[0]).getDate();
        let lastDate = new Date(2021, this.temp[0] + 1, 0).getDate();
        let dayStart = new Date(2021, this.temp[0]).getDay();
        const weekArr = ['日', '一', '二', '三', '四', '五', '六']
        const days = document.querySelectorAll('.days')[0];
        let count = 0;
        this.temp[1] = '';
        for (let l = 0; l < weekArr.length; l++) {
            this.temp[1] += `<li>${weekArr[l]}</li>`;
        }
        for (let m = 0; m < dayStart; m++) {
            this.temp[1] += '<li></li>';
        }
        count = dayStart;
        for (let n = 1; n <= lastDate; n++) {
            if (count % 7 === 0) {
                this.temp[1] += '<br>';
            }
            this.temp[1] += `<li>${n}</li>`;
            count++;
        }
        days.innerHTML = this.temp[1];
    }
}
for(let i = 0; i < selectMonthEvent.length; i++) {
    selectMonthEvent[i].addEventListener('mouseenter', selectMonth.changeBackground.bind(selectMonth, i))
}

