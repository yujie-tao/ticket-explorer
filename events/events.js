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
        if (ticInput.length == 0){
            return ;
        }

        clearResultBox();
        namedEntityExtractor(ticInput);
        setTimeout( function(){searchFlight(inputList[0], inputList[1], inputList[2])}, 1000);
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
    $('#resultBox').empty();
}


function updateBookedTicket(temp) {
    var ticId = $(temp).attr('id').split('-')[1];
    var fName = $(temp).find('#book-fname-' + ticId).val();
    var mName = $(temp).find('#book-mname-' + ticId).val();
    var lName = $(temp).find('#book-lname-' + ticId).val();
    var gender= $(temp).find('#book-gender-' + ticId).val();
    var age   = $(temp).find('#book-age-' + ticId).val();
    var email = $(temp).find('#book-email-' + ticId).val();

    if (fName.length == 0 || lName.length == 0 || gender.length == 0 || age.length == 0 || email.length == 0) {
        alert("Insufficient Information!");
        return ;
    } else if (email.indexOf('@') == -1) {
        alert("Invalid Email Address");
        return ;
    }


    //retrieve the itinerary id and update both itinerary and ticket tables
    getTicket(function(response){
        var itrId = response.itinerary_id;
        var comCode = makeid();

        updateTicket(fName, mName, lName, age, gender, ticId);
        updateItinerary(itrId, email, comCode);

        alert('Purchase successful!');
        $(temp).parent().fadeOut(300, function() { $(temp).parent().remove(); });

        }, { ticket_id : ticId } )


}


function createSoldTicket(temp){
    var fName = $(temp).find('#sell-fname').val();
    var mName = $(temp).find('#sell-mname').val();
    var lName = $(temp).find('#sell-lname').val();
    var gender= $(temp).find('#sell-gender').val();
    var age   = $(temp).find('#sell-age').val();
    var email = $(temp).find('#sell-email').val();

    var airline = $(temp).find('#sell-aname').val();
    var fliNum = $(temp).find('#sell-fnum').val();
    var comCode = $(temp).find('#sell-comCode').val();
    var depAt = $(temp).find('#sell-dePort').val();
    var arrAt = $(temp).find('#sell-arrPort').val();
    var sellPrice = $(temp).find('#sell-price').val();
    var deTime = $(temp).find('#sell-deTime').val();
    var deDate = $(temp).find('#sell-deDate').val();
    var arrTime = $(temp).find('#sell-arrTime').val();
    var arrDate = $(temp).find('#sell-arrDate').val();

    if (ticId.length == 0) {
        alert("insufficient information!");
        return ;
    }

    createItinerary(comCode, email);


}

//https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
//for randomly generating confirmation code
function makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 7; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}