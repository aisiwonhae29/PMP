var utcnow = new Date().getTime();
var KoreaTimeDiff = 1000*60*60*9;
var today = new Date(utcnow + KoreaTimeDiff);
var year = today.getFullYear();
var month = today.getMonth()+1;

let timeline_array = [];
let timeline_el;
for(let i=0; i<10; i++){
    let tl_mon = month-i;
    let tl_yr = year;

    if(tl_mon<1){
        tl_mon  =   tl_mon+12;
        tl_yr   =   tl_yr-1;
    }
    if(tl_mon<10){
        tl_mon= '0'+tl_mon;
    }

    timeline_el =`${tl_yr}.${tl_mon}`
    timeline_array.splice(0,0,timeline_el);
} 