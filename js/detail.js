/**
 * Created by Administrator on 2015/5/16.
 */

$(document).ready(function() {
    var data = [
        {
            title : "System",
            details : [
                "Maximize PV self-consumption",
                "UPS fuction in case of grid outage",
                "Loading shifting",
                "Demand charge management",
                "Load management"
            ]
        },
        {
            title : "Battery Box",
            details : [
                "Compatible for both new installation and retrofit systems (both AC/DC coupling)",
                "Modular battery module design, easy to extend",
                "Each battery module possesses independent BMS, flexible operation"
            ]
        },
        {
            title : "Battery",
            details : [
                "Lithium Iron phosphate, the safest",
                "Premium power battery cells manufactured by one of top 5 worldwide",
                "BMS design: 3 levels of software protection + 2 levels of redundant hardware protection",
                "EMS design: Extra protections implemented in the system integration"
            ]
        }
    ]
// alert("s");
    $(".menu-item").click(function() {
        var index;
        index = $(this).attr("flag");

        //还原颜色
        $(".menu-item").css("background-color", "#f1f1f1");
        $(".menu-name").css("color", "#a9a9a9");
        $(".menu-name").css("color", "#a9a9a9");
        $(".arrow").css("color", "#f1f1f1");
        $(".arrow").css("background-color", "#f1f1f1");
        //设置click颜色
        $(this).css("background-color", "#f7b128");
        $(this).children(".menu-name").css("color", "#fff");
        $(this).children(".arrow").css("color", "#fff");
        $(this).children(".arrow").css("background-color", "#a9a9a9");

        $(".detail").empty();
        for (var i = 0; i < data[index].details.length; i++) {
            var li = '<li>' + data[index].details[i] + '</li>'
            $(".detail").append(li);
        }
        $(".title").text(data[index].title);
    });



})