var eventData = [
    {"date":"2019-08-01","badge":false,"title":"Example 1"},
    {
        "date":"2019-08-02",
        "badge":true,
        "title":"Tonight",
        "body":"<p class=\"lead\">Party<\/p><p>Like it's 1999.<\/p>",
        "footer":"At Paisley Park",
        "classname":"purple-event",
        modal: true
    },
];
$(function(){
    $("#myCalendar").zabuto_calendar({
        language: "pt",
        year: 2019,
        nav_icon: {
            prev: '<i class="fa fa-chevron-left fa-lg"></i>',
            next: '<i class="fa fa-chevron-right fa-lg"></i>'
        },
        data: eventData
        //ajax: {
        //  url: "../gateway/getJSON.php?f=show_data&id=5",
        //  modal: true
        //}
    });
});