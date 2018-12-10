$( document ).ready(function() {


    //listen to radio event
    $('.filter').on('click', 'input:radio', ()=> {
        updateFilters();
    });

    // //listen to checkbox event
    $('.filter').on('click', 'input:checkbox', ()=> {
        updateFilters();
    });

});


function updateFilters() {
    clearResultBox();
    var r = '';
    var cList = [];
    $('input[type=radio]').each(function () {
        if(this.checked) {
            var rThisVal = $(this).attr('id');
            r += rThisVal;
        }
    });
    $('input[type=checkbox]').each(function () {
        if(this.checked) {
            var sThisVal = $(this).attr('id');
            cList += sThisVal;
        }
    });
    console.log(r+ ' ' + cList);
    fillResultBox(r, cList);
};


function sortByID(){
    getAirlines(function(response) {
        response.sort(function(a, b){
            return a.id - b.id ;
        });
        console.log(response);
    });
};


function clearResultBox(){
    $('#resultBox').empty();
}


function fillResultBox(r, cList){
    if(r){
        if (r = 'priceAsc'){
            getAirlines(sortTicketsByPricePaidAsc(),{airline_name:cList});
        } else if (r = 'priceDesc'){
            getAirlines(sortTicketsByPricePaidDesc(),{airline_name:cList});
        } else if (r = 'timeAsc'){
            getAirlines(sortFlightsByDepartTimeAsc(),{airline_name:cList});
        } else if (r = 'timeDesc'){
            getAirlines(sortFlightsByDepartTimeDesc(),{airline_name:cList});
        }
    } else {
        getAirlines(_PrintResponse(),{airline_name:cList});
    }
}