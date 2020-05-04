var date = new Date();
var year = date.getFullYear();
var month = date.getMonth();
var table = '';
var youbi = new Array('日','月','火','水','木','金','土');
var firstDay = new Date(year, month, 1);
var endDay = new Date(year, month + 1, 0).getDate();
var firstYoubi = firstDay.getDay();
var firstflg = 0;
var dayCnt = 1;

for(weekCnt=0; weekCnt<8; weekCnt++){
    table = table + '<tr>';
    for(i=0; i<7; i++){
        if(weekCnt===0){
            table = table + '<th>'+ youbi[i] + '</th>';
        }else if(firstYoubi===i && firstflg===0){
            dayCnt = 1
            firstflg = 1
            table = table + '<td>'+ dayCnt + '</td>';
        }else{
            if(firstflg===0 || dayCnt > endDay){
                table = table + '<td>'+ "" + '</td>';
            }else{
                table = table + '<td>'+ dayCnt + '</td>';
            }   
        }
        dayCnt = dayCnt + 1
        
    }
    table = table + '</tr>';
}


document.getElementById('js-year').innerHTML = year;
document.getElementById('js-month').innerHTML = month + 1;
document.getElementById('js-table').innerHTML = table;