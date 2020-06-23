var dataArray = [];
$(document).ready(function(){
    $.getJSON("https://api.covid19api.com/summary",function(data){
        for(i=0;i<data.Countries.length;i++){
            dataArray.push({
                country: data.Countries[i].Country,
                newConfirmed: data.Countries[i].NewConfirmed,
                totalConfirmed: data.Countries[i].TotalConfirmed,
                newDeaths: data.Countries[i].NewDeaths,
                totalDeaths: data.Countries[i].TotalDeaths,
                newRecovered: data.Countries[i].NewRecovered,
                totalRecovered: data.Countries[i].TotalRecovered,
                date: convertDate(data.Countries[i].Date)
            });
        }
        for(i=0;i<dataArray.length;i++){
            var row = `
                <tr>
                    <td>${dataArray[i].country}</td>
                    <td>${numberWithCommas(dataArray[i].newConfirmed)}</td>
                    <td>${numberWithCommas(dataArray[i].totalConfirmed)}</td>
                    <td>${numberWithCommas(dataArray[i].newDeaths)}</td>
                    <td>${numberWithCommas(dataArray[i].totalDeaths)}</td>
                    <td>${numberWithCommas(dataArray[i].newRecovered)}</td>
                    <td>${numberWithCommas(dataArray[i].totalRecovered)}</td>
                    <td>${dataArray[i].date}</td>
                </tr>
            `;
            $(row).appendTo('#my-table');
        }
        $('.cases').append(numberWithCommas(data.Global.TotalConfirmed));
        $('.deaths').append(numberWithCommas(data.Global.TotalDeaths));
        $('.recovered').append(numberWithCommas(data.Global.TotalRecovered));

        for(i=0;i<dataArray.length;i++){
            var row = `
                <tr>
                    <td>${dataArray[i].country}</td>
                    <td>${dataArray[i].newConfirmed}</td>
                    <td>${dataArray[i].totalConfirmed}</td>
                    <td>${dataArray[i].newDeaths}</td>
                    <td>${dataArray[i].totalDeaths}</td>
                    <td>${dataArray[i].newRecovered}</td>
                    <td>${dataArray[i].totalRecovered}</td>
                    <td>${dataArray[i].date}</td>
                </tr>
            `;
            $(row).appendTo('#my-table1');
        }

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
    $('#country').click(function(){
        dataArray.sort(compareCountry);
        $("#my-table").empty();
        for(i=0;i<dataArray.length;i++){
            var row = `
                <tr>
                    <td>${dataArray[i].country}</td>
                    <td>${numberWithCommas(dataArray[i].newConfirmed)}</td>
                    <td>${numberWithCommas(dataArray[i].totalConfirmed)}</td>
                    <td>${numberWithCommas(dataArray[i].newDeaths)}</td>
                    <td>${numberWithCommas(dataArray[i].totalDeaths)}</td>
                    <td>${numberWithCommas(dataArray[i].newRecovered)}</td>
                    <td>${numberWithCommas(dataArray[i].totalRecovered)}</td>
                    <td>${dataArray[i].date}</td>
                </tr>
            `;
            $(row).appendTo('#my-table');
        }
    });
    $('#totalConfirmed').click(function(){
        dataArray.sort(compareTotalConfirmed);
        $("#my-table").empty();
        for(i=0;i<dataArray.length;i++){
            var row = `
                <tr>
                    <td>${dataArray[i].country}</td>
                    <td>${numberWithCommas(dataArray[i].newConfirmed)}</td>
                    <td>${numberWithCommas(dataArray[i].totalConfirmed)}</td>
                    <td>${numberWithCommas(dataArray[i].newDeaths)}</td>
                    <td>${numberWithCommas(dataArray[i].totalDeaths)}</td>
                    <td>${numberWithCommas(dataArray[i].newRecovered)}</td>
                    <td>${numberWithCommas(dataArray[i].totalRecovered)}</td>
                    <td>${dataArray[i].date}</td>
                </tr>
            `;
            $(row).appendTo('#my-table');
        }
    });
    $('#totalDeaths').click(function(){
        dataArray.sort(compareTotalDeaths);
        $("#my-table").empty();
        for(i=0;i<dataArray.length;i++){
            var row = `
                <tr>
                    <td>${dataArray[i].country}</td>
                    <td>${numberWithCommas(dataArray[i].newConfirmed)}</td>
                    <td>${numberWithCommas(dataArray[i].totalConfirmed)}</td>
                    <td>${numberWithCommas(dataArray[i].newDeaths)}</td>
                    <td>${numberWithCommas(dataArray[i].totalDeaths)}</td>
                    <td>${numberWithCommas(dataArray[i].newRecovered)}</td>
                    <td>${numberWithCommas(dataArray[i].totalRecovered)}</td>
                    <td>${dataArray[i].date}</td>
                </tr>
            `;
            $(row).appendTo('#my-table');
        }
    });
    $('#totalRecovered').click(function(){
        dataArray.sort(compareTotalRecovered);
        $("#my-table").empty();
        for(i=0;i<dataArray.length;i++){
            var row = `
                <tr>
                    <td>${dataArray[i].country}</td>
                    <td>${numberWithCommas(dataArray[i].newConfirmed)}</td>
                    <td>${numberWithCommas(dataArray[i].totalConfirmed)}</td>
                    <td>${numberWithCommas(dataArray[i].newDeaths)}</td>
                    <td>${numberWithCommas(dataArray[i].totalDeaths)}</td>
                    <td>${numberWithCommas(dataArray[i].newRecovered)}</td>
                    <td>${numberWithCommas(dataArray[i].totalRecovered)}</td>
                    <td>${dataArray[i].date}</td>
                </tr>
            `;
            $(row).appendTo('#my-table');
        }
    });
})

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

function compareTotalConfirmed(a, b) {
    const A = a.totalConfirmed;
    const B = b.totalConfirmed;
  
    let comparison = 0;
    if (A > B) {
      comparison = 1;
    } else if (A < B) {
      comparison = -1;
    }
    return comparison*-1;
}

function compareTotalDeaths(a, b) {
    const A = a.totalDeaths;
    const B = b.totalDeaths;
  
    let comparison = 0;
    if (A > B) {
      comparison = 1;
    } else if (A < B) {
      comparison = -1;
    }
    return comparison*-1;
}

function compareTotalRecovered(a, b) {
    const A = a.totalRecovered;
    const B = b.totalRecovered;
  
    let comparison = 0;
    if (A > B) {
      comparison = 1;
    } else if (A < B) {
      comparison = -1;
    }
    return comparison*-1;
}

function compareCountry(a, b) {
    const A = a.country.toUpperCase();
    const B = b.country.toUpperCase();
  
    let comparison = 0;
    if (A > B) {
      comparison = 1;
    } else if (A < B) {
      comparison = -1;
    }
    return comparison;
}