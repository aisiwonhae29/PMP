package com.example.basic.date;

import java.text.SimpleDateFormat;
import java.util.Date;

public class simpleDateFormatUse {
    public String getDate(){
        SimpleDateFormat ex = new SimpleDateFormat("yyyyMMdd24HHmmss");
        String date = ex.format(new Date());
        return date;
    }
}
