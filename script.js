var ip;
function get_ip() {
    query = document.getElementById('input_tex')
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": `http://ip-api.com/json/${query}`,
        "method": "GET"
    };
    $.ajax(settings).done(function (response) {
        console.log(response);
        $("#region").append(response.regionName);
        $("#country").append(response.country);
        $("#timezone").append(response.region);
        $("#item_city").append(response.city);
        $("#IP").append(response.ip);
    });
};