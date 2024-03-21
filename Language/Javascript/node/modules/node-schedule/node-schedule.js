/**
 * * node schedule module
 * 
 * - working for 
 * - Every scheduled job in Node Schedule is represented by a 'Job' object.
 * - create jobs manually, then execute the schedule() method to apply a schedule, or use the convenience function scheduleJob().
 * 
 * # Job objects: EventEmitter, below lists are the following events
 * 
 * - run: events after each execution
 * - scheduled: event each time they're scheduled to run
 * - canceled:event when an invocation is canceled before it's executed.
 * - error
 * - success
 * 
 */

const schedule = require('node-schedule');

// # Cron_style schedule

function cron_style(){
    let job = schedule.scheduleJob('* * * * * *', function(){
        console.log('Im a cron stlye!!');
    })
}

// # Date-based Scheduling

let date = new Date(2012, 11, 21, 5, 30, 0); // 2012:11:21

function date_based(){
    let job = schedule.scheduleJob(date, function(){
        console.log('Im a Date_based style!!');
    })
}

// # Recurrence Rule Scheduling

function recurrence_based(){
    let rule = new schedule.RecurrenceRule();
    rule.second = [];
    for(let i=0; i<60; i++){
        rule.second.push(i);
    }
    // let rule2 = new schedule.RecurrenceRule();

    // rule2.dayOFWeek = [0, new schedule.Range(4, 6)];
    // rule2.hour = 17;
    // rule.minute = 0;

    let job = schedule.scheduleJob(rule, function() {
        
        console.log('Im a Recurrence style!!'+ ': ');
        
    });
}
recurrence_based();