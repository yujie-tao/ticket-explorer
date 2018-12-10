var inputList = [];

function passInSearch(response){
    var res = response;
    var key = Object.keys(res)[0];
    inputList = res[key];
    inputList[2] = inputList[2].split("T")[0];
    console.log(inputList);
}

$( document ).ready(function() {
    //listen to search bar input
    $('#ticketSearchButton').on('click', ()=> {
        var ticInput = document.getElementById("ticketSearch").value;
        if (ticInput.length == 0){
            return ;
        }
        clearResultBox();
        //console.log(ticInput);
        namedEntityExtractor(ticInput);
        console.log("Here is the info put into the searchFlight(): "+ inputList[0] + inputList[1]+ inputList[2]);
        searchFlight(inputList[0], inputList[1], inputList[2]);
    });

    //listen to radio event
    $('.filter').on('click', 'input:radio', ()=> {
        updateRadioFilters();
    });

    // //listen to checkbox event
    $('.filter').on('click', 'input:checkbox', ()=> {
        updateCheckboxFilters();
    });
});


function updateRadioFilters() {
    $('input[type=radio]').each(function () {
        if(this.checked) {
            var r = $(this).attr('id');
            if (r == "priceAsc"){
                sortByPriceAsc();
            }
            else if (r == "priceDesc") {
                sortByPriceDesc();
            } else if (r == "timeAsc") {
                sortByTimeAsc();
            } else if (r == "timeDesc") {
                sortByTimeDesc();
            }
        }
    });
};


function updateCheckboxFilters() {
    var cList = [];
    $('input[type=checkbox]').each(function () {
        if(this.checked) {
            var cThisVal = $(this).attr('id');
            cList.push(cThisVal);
        }
    });
    console.log(cList);
    filterByAirline(cList);
}


function sortByPriceAsc() {
    $(".result").sort(function(a, b) {
        a = $(".pricing", a).text().slice(1, ".pricing".length);
        b = $(".pricing", b).text().slice(1, ".pricing".length);
        return a - b;
    }).appendTo(".resultBox");
}


function sortByPriceDesc() {
    $(".result").sort(function(a, b) {
        a = $(".pricing", a).text().slice(1, ".pricing".length);
        b = $(".pricing", b).text().slice(1, ".pricing".length);
        return b - a;
    }).appendTo(".resultBox");
}


function sortByTimeAsc() {
    $(".result").sort(function(a, b) {
        a = $(".time", a).text().split("-")[0];
        b = $(".time", b).text().split("-")[0];
        return a - b;
    }).appendTo(".resultBox");
}


function sortByTimeDesc() {
    $(".result").sort(function(a, b) {
        a = $(".time", a).text().split("-")[0];
        b = $(".time", b).text().split("-")[0];
        return b - a;
    }).appendTo(".resultBox");
}


function filterByAirline(cList){

    //if no filter show all options
    if(cList.length == 0){
        $(".result").show();
    } else {
        $(".result").each(function () {
            var airline = $(this).find(".flight").text();
            var flag = false;
            for (var i = 0; i< cList.length; i++){
                //checking each flight to match airline filter
                if (cList[i] == airline) {
                    flag = true;
                    $(this).show();
                    console.log("voila");
                    return ;
                }
            }
            $(this).hide();
        });
    }
}


function clearResultBox(){
    $('#resultBox').empty();
}