let date = new Date();

const week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

//Selecting HTML elements by id or class
const dt = document.getElementById('date');
const dateli = document.getElementsByClassName('dates');
const prev_btn = document.getElementById('prev');
const next_btn = document.getElementById('next');

//  Arrow function for rander dates , current date on calender
const put_date = () => {
        let curdt = date.getDate(),
                curday = date.getDay(),
                curmon = date.getMonth(),
                curyr = date.getFullYear();

        const firstdate=new Date(curyr,curmon,1).getDay();
        // console.log(firstdate.getMonth(),firstdate.getDate());
        const lastdate = new Date(curyr, curmon + 1, 0).getDate();
        const prevdate = new Date(curyr, curmon, 0).getDate();
        const lastdateday=new Date(curyr,curmon,lastdate).getDay();
        // console.log(lastdate,nextmonthdate);
        // const first = new Date(curyr, curmon, 1).getDate();
        // console.log(first);

        let li = "";
        // console.log(date);

        dt.innerHTML = months[curmon] + " " + curyr;

        // putting previous month dates in starting empty box
        for (let i = firstdate; i > 0; i--) {
                li += "<li class='inactive'>" + (prevdate - i + 1) + "</li>"
        }

        // putting current month dates
        for (let i = 1; i <= lastdate; i++) {
                if (i == new Date().getDate() && curmon==new Date().getMonth() && curyr==new Date().getFullYear()){
                        li += "<li class='today'>" + i + "</li>";
                }
                else
                        li += "<li>" + i + "</li>";
        }

        // putting next month dates in ending empty box
        for(let i=lastdateday;i<6;i++)
        {
                li += "<li class='inactive'>" + (i-lastdateday+1) + "</li>";
        }
        dateli[0].innerHTML = li;
}

// Turning on the prev and next button

prev_btn.addEventListener('click', () => {
        date.setDate(1)
        date.setMonth(date.getMonth() - 1);
        console.log(date.getDate(),date.getMonth());
        put_date();
})
next_btn.addEventListener('click', () => {
        date.setDate(1)
        date.setMonth(date.getMonth() + 1);
        console.log(date.getDate(),date.getMonth());
        put_date();
})

put_date();


