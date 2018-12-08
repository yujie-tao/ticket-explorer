$( document ).ready(function() {
    //listen to search bar, create grid
    $('#ticSearchBut').on('click',()=>{
        //parse stuff

        //retrieve info

        //demonstrate 10 items on page
        // for(i = 0; i< 10; i++){
        //     createGrid("logourl","airline","flightNum",
        //     	"depTime","arrTime","duration",
        //     	"depPort","arrPort","price","id");
        // }
    });


    //listen to radio event
    $('.filter').on('click', 'input:radio', ()=> {
        updateRadioFilters();
    });

    //listen to checkbox event
    $('.filter').on('click', 'input:checkbox', ()=> {
        updateAirlineFilters();
    });

});


function updateRadioFilters() {
    var sList = "";
    $('input[type=radio]').each(function () {
        var sThisVal = (this.checked ? "1" : "0");
        sList += (sList == "" ? sThisVal : "," + sThisVal);
    });
    console.log(sList);
};


function updateAirlineFilters() {
    var sList = "";
    $('input[type=checkbox]').each(function () {
        var sThisVal = (this.checked ? "1" : "0");
        sList += (sList == "" ? sThisVal : "," + sThisVal);
    });
    console.log(sList);
};

function sortByID(){
    getAirlines(function(response) {
        response.sort(function(a, b){
            return a.id - b.id ;
        });
        console.log(response);
    });
};