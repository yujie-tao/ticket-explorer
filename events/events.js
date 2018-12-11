var inputList = [];



function passInSearch(response){
    var res = response;
    var key = Object.keys(res)[0];
    inputList = res[key];
    inputList[2] = inputList[2].split("T")[0];
    //console.log(inputList);
}


$( document ).ready(function() {
    $('body').on('click', 'submit', (e)=>{
        e.preventDefault();
    });

    //listen to search bar input
    $('#ticketSearchButton').on('click', ()=> {
        var ticInput = document.getElementById("ticketSearch").value;
        if (ticInput.length == 0){
            return ;
        }

        clearResultBox();
        namedEntityExtractor(ticInput);

        searchFlight(inputList[0], inputList[1], inputList[2]);
    });


    //listen to radio event
    $(document).on('click', 'input:radio', ()=> {
        updateRadioFilters();
    });


    //listen to checkbox event
    $(document).on('click', 'input:checkbox', ()=> {
        updateCheckboxFilters();
    });


    //listen to booking requests
    $(document).on( "click", ".book-submit",function() {
        console.log($(this));
    });

});


function updateRadioFilters() {
    $('input[type=radio]').each(function () {
        if(this.checked) {
            var r = $(this).attr('id');
            if (r == "priceAsc"){
                sortByPriceAsc();
            } else if (r == "priceDesc") {
                sortByPriceDesc();
            } else if (r == "timeAsc") {
                sortByTimeAsc();
            } else if (r == "timeDesc") {
                sortByTimeDesc();
            }
        }
    });
}


function updateCheckboxFilters() {
    var cList = [];
    $('input[type=checkbox]').each(function () {
        if(this.checked) {
            var cThisVal = $(this).attr('id');
            cList.push(cThisVal);
        }
    });
    //console.log(cList);
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

            //checking each flight to match airline filter
            if (cList.indexOf(airline) > -1){
                flag = true;
            } else if (cList.indexOf(airline) == -1 && cList.indexOf('Other') > -1){
                flag = true;
            }

            if(flag == false) {
                $(this).hide();
            } else if (flag == true) {
                $(this).show();
            }
        });
    }
}


function clearResultBox(){
    $('#resultBox').empty();
}


function updateBookedTicket() {


}