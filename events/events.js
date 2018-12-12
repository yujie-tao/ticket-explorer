var inputList = [];



function passInSearch(response){
    var res = response;
    var key = Object.keys(res)[0];
    inputList = res[key];
    inputList[2] = inputList[2].split("T")[0];
    console.log(inputList);
}


$( document ).ready(function() {
    $('body').on('click', 'submit', (e)=>{
        e.preventDefault();
    });

    //listen to search bar input
    $('#ticketSearchButton').on('click', ()=> {
        var ticInput = document.getElementById("ticketSearch").value;
        if (ticInput.length === 0){
            return ;
        }

        clearResultBox();
        namedEntityExtractor(ticInput);
        // setInterval(function(){alert("Hello")},2000);
        setTimeout( function(){
            searchFlight(inputList[0], inputList[1], inputList[2])
        }, 1000);
        setTimeout(function(){
            if($( ".resultBox" ).find( ".result" ).length !== 0){ 
                console.log('createFilter')
                $('.noflight').remove();
                createFilter();
            }else{
                console.log('flightNotFound')
                flightNotFound();
            }
        },2000);
    
    
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
        updateBookedTicket($(this).parent());
    });


    //listen to selling requests
    $(document).on( "click", "#sell-submit",function() {
        createSoldTicket($(this).parent().parent());
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
    $('.resultBox').empty();
    $('.searchFilter').empty();
}


function updateBookedTicket(temp) {
    var ticId = $(temp).attr('id').split('-')[1];
    var fName = $(temp).find('#book-fname-' + ticId).val();
    var mName = $(temp).find('#book-mname-' + ticId).val();
    var lName = $(temp).find('#book-lname-' + ticId).val();
    var gender= $(temp).find('#book-gender-' + ticId).val();
    var age   = $(temp).find('#book-age-' + ticId).val();
    var email = $(temp).find('#book-email-' + ticId).val();
    $("#book-submit-28949").parent().find('#book-email-28949').val()


    //check if information are correct
    if (fName.length === 0 || lName.length === 0 || gender.length === 0 || age.length === 0 || email.length === 0) {
        alert("Insufficient Information!");
        return ;
    } else if (email.indexOf('@') === -1) {
        alert("Invalid Email Address");
        return ;
    }

    console.log(ticId);
    //retrieve the itinerary id and update both itinerary and ticket tables
    getTicket(function(response){
        if(response.length == 0){
            alert("Ticket does not exist");
            return;
        }
        var itrId = response.itinerary_id;
        var flag = 1;
        updateTicket(fName, mName, lName, age, gender, ticId, flag);
        updateItinerary(itrId, email);

        alert('Purchase successful!');
        $(temp).parent().fadeOut(300, function() { $(temp).parent().remove(); });

        }, ticId)


}


function createSoldTicket(temp){

    //vars for ticket
    var fName = $(temp).find('#sell-fname').val();
    var mName = $(temp).find('#sell-mname').val();
    var lName = $(temp).find('#sell-lname').val();
    var gender= $(temp).find('#sell-gender').val();
    var age   = $(temp).find('#sell-age').val();
    var price = $(temp).find('#sell-price').val();


    var airline = $(temp).find('#sell-aname').val();    //airline
    var fliNum = $(temp).find('#sell-fnum').val();      //flight
    var comCode = $(temp).find('#sell-comCode').val();  //itinerary
    var email = $(temp).find('#sell-email').val();      //itinerary
    var depAt = $(temp).find('#sell-dePort').val();     //airport
    var arrAt = $(temp).find('#sell-arrPort').val();    //airport
    var deTime = $(temp).find('#sell-deTime').val();    //flight
    var deDate = $(temp).find('#sell-deDate').val();    //flight
    var arrTime = $(temp).find('#sell-arrTime').val();  //flight
    var arrDate = $(temp).find('#sell-arrDate').val();  //flight

    // //check if information are correct
    // if (airline.length === 0 || fliNum.length === 0 || comCode.length === 0 || depAt.length === 0 || arrAt.length === 0 || price.length === 0
    //     || deTime.length === 0 || deDate.length === 0 || arrTime.length === 0 || arrDate.length === 0) {
    //     alert("Insufficient Flight Information!");
    //     return ;
    // }
    // if (fName.length === 0 || lName.length === 0 || gender.length === 0 || age.length === 0 || email.length === 0) {
    //     alert("Insufficient User Information!")
    // } else if (email.indexOf('@') === -1) {
    //     alert("Invalid Email Address");
    //     return ;
    // }

    //get airline_id
    getAirlines(function (response) {
        if(response.length == 0){
            alert("Airline does not exist");
            return;
        }
        var airId = response[0].id;
        getDepAirports(airId);
    }, {name: airline})

    //get departure_id
    function getDepAirports(airId){
        getAirports(function (response) {
            if(response.length == 0){
                alert("Dep Airport does not exist");
                return;
            }
            var depId = response[0].id;
            getArrAirports(airId, depId);
        }, {code: depAt})
    }


    //get arrival_id
    function getArrAirports(airId, depId){
        getAirports(function (response) {
            if(response.length == 0){
                alert("Arr Airport does not exist");
                return;
            }
            var arrId = response[0].id;
            console.log(airId, depId, arrId);
            getCorrectFlights(airId, depId, arrId);
        }, {code: arrAt})
    }

    //get flight_id
    function getCorrectFlights(airId, depId, arrId) {
        getFlights(function (response) {
            if(response.length == 0){
                alert("Flight does not exist");
                return;
            }
            for (let i = 0; i < response.length; i++) {
                let depAt = response[i].departs_at.split('T')[1].split('.')[0].split(':').splice(0,2).join(':');
                let arrAt =  response[i].arrives_at.split('T')[1].split('.')[0].split(':').splice(0,2).join(':');
                if (arrTime == arrAt && deTime == depAt && fliNum == response[i].number) {
                    var fliId = response[i].id;
                    console.log(fliId);
                    getCorrectInstance(fliId);
                }
            }
        }, {airline_id: airId, departure_id: depId, arrival_id: arrId});
    }


    //get instance_id
    function getCorrectInstance(fliId){
        getInstances(function (response) {
            if(response.length == 0){
                alert("Instance does not exist");
                return;
            }
            var insId = response[0].id;
            console.log("insID: "+ insId);
            createItinerary(comCode, email);
            getItineraryByComCode(comCode, email, insId);
        }, {flight_id: fliId, date: deDate})
    }


    //create itinerary entry and retrieve itrId
    function getItineraryByComCode(comCode, email, insId){
        getItineraries(function (response) {
            if(response.length == 0){
                alert("Itinerary does not exist");
                return;
            }
            var itrId = response[0].id;
            console.log(itrId);
            createTicket(fName, mName, lName, age, gender, price, insId, itrId);
            submitForm();
        }, {email: email, confirmation_code: comCode})
    }


}



