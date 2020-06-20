$.getJSON("https://api.covid19api.com/summary",function(data){
    for(i=0;i<data.Countries.length;i++){
        var row = `
            <tr>
                <td>${data.Countries[i].Country}</td>
                <td>${data.Countries[i].NewConfirmed}</td>
                <td>${data.Countries[i].TotalConfirmed}</td>
                <td>${data.Countries[i].NewDeaths}</td>
                <td>${data.Countries[i].TotalDeaths}</td>
                <td>${data.Countries[i].NewRecovered}</td>
                <td>${data.Countries[i].TotalRecovered}</td>
                <td>${convertDate(data.Countries[i].Date)}</td>
            </tr>
        `;
        $(row).appendTo('#my-table');
    }
    $('.cases').append(data.Global.TotalConfirmed);
    $('.deaths').append(data.Global.TotalDeaths);
    $('.recovered').append(data.Global.TotalRecovered);
})

//convert date to dd/MM/YYYY
function convertDate(str){
    var date = str.substring(0,10);
    var myDate = date.split("-");
    return myDate[2]+"/"+myDate[1]+"/"+myDate[0];
}