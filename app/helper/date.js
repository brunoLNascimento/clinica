const moment = require("moment");

const Format = {
    YMD: "YYYY-MM-DD",
    YMDHMS: "YYYY-MM-DD HH:mm:ss",
    HHMMSS: "HH:mm:ss",
    ADD: '25'
};

module.exports = {
    dateNowFormat(){
        return moment().format(Format.YMDHMS);
    },
    
    dateformat(time){
        //return moment(time, Format.YMD)
        return moment(new Date(time)).format(Format.YMD);
    },

    timeFormat(time){
        return moment(time, 'h:mm a').format(Format.HHMMSS);
       
    },

    addMinuteFormat(time){
        return moment(time, 'h:mm a').add(Format.ADD, 'minutes').format(Format.HHMMSS);
    },
};