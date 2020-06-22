$(document).ready(function(){
    $.getJSON("https://api.covid19api.com/summary",function(data){
        for(i=0;i<data.Countries.length;i++){
            var row = `
                <tr>
                    <td>${data.Countries[i].Country}</td>
                    <td>${numberWithCommas(data.Countries[i].NewConfirmed)}</td>
                    <td>${numberWithCommas(data.Countries[i].TotalConfirmed)}</td>
                    <td>${numberWithCommas(data.Countries[i].NewDeaths)}</td>
                    <td>${numberWithCommas(data.Countries[i].TotalDeaths)}</td>
                    <td>${numberWithCommas(data.Countries[i].NewRecovered)}</td>
                    <td>${numberWithCommas(data.Countries[i].TotalRecovered)}</td>
                    <td>${convertDate(data.Countries[i].Date)}</td>
                </tr>
            `;
            $(row).appendTo('#my-table');
        }
        $('.cases').append(numberWithCommas(data.Global.TotalConfirmed));
        $('.deaths').append(numberWithCommas(data.Global.TotalDeaths));
        $('.recovered').append(numberWithCommas(data.Global.TotalRecovered));
    })
    $('#info').click(function(event) {
        $('html, body').animate({
            scrollTop: $("#info_div").offset().top
        }, 1000);
   });
   $('#protect').click(function(event) {
    $('html, body').animate({
        scrollTop: $("#protect_div").offset().top
    }, 1000);
});
})

//convert date to dd/MM/YYYY
function convertDate(str){
    var date = str.substring(0,10);
    var myDate = date.split("-");
    return myDate[2]+"/"+myDate[1]+"/"+myDate[0];
}

function numberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
        x = x.replace(pattern, "$1,$2");
    return x;
}