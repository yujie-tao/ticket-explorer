var inputList = [];

function passInSearch(response){
    var res = response;
    var key = Object.keys(res)[0];
    inputList = res[key];
    console.log(inputList[0]);
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
        console.log("Here is the info put into the searchFlight(): "+ inputList);
        searchFlight(inputList);
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
            var sThisVal = $(this).attr('id');
            cList += sThisVal;
        }
    });
}


function sortByPriceAsc() {
    $('#result btn btn-link').sort(function(r1, r2) {
        return r1.price_paid - r2.price_paid;
    });
}

function sortByPriceDesc() {
    $('#result btn btn-link').sort(function(r1, r2) {
        return r2.childNodes - r1.pricing;
    });
}

function sortByTimeAsc() {

}

function sortByTimeDesc() {

}




function clearResultBox(){
    $('#resultBox').empty();
}