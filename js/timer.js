CountDownDate1 = new Date("May 7, 2023 21:00:00").getTime();
        CountDownDate2 = new Date("July 17, 2023 22:30:00").getTime();
        CountDownDate3 = new Date("August 31, 2023 21:00:00").getTime();
        
        const Dates=[CountDownDate1,CountDownDate2,CountDownDate3];
        const day=["days1","days2","days3"];
        const hour=["hours1","hours2","hours3"];
        const minute=["minutes1","minutes2","minutes3"];
        const second=["seconds1","seconds2","seconds3"];
        id=0;
        
        var x = setInterval(function(){
            
            var now = new Date().getTime();
            var distance = Dates[id] - now;

            var days = Math.floor(distance/(1000*60*60*24));
            var hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));
            var minutes = Math.floor((distance%(1000*60*60))/(1000*60));
            var seconds = Math.floor((distance%(1000*60))/(1000));
            

            document.getElementById(day[id]).innerHTML=days;
            document.getElementById(hour[id]).innerHTML=hours;
            document.getElementById(minute[id]).innerHTML=minutes;
            document.getElementById(second[id]).innerHTML=seconds;
            //console.log(id);
            id++;
            if (id==3){id=0}
        },100);