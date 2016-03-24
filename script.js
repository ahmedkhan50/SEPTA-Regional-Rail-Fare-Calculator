var clickcount=0;

function size(){
clickcount++;
    if(clickcount%2!=0) {
        document.getElementById("first").style.height = '850px';
        document.getElementById("second").style.height = '800px';
    }
    else if(clickcount%2==0){

          document.getElementById("first").style.height='750px';
          document.getElementById("second").style.height='720px';
    }
}

function clear(){

    document.getElementById("result").innerHTML='$'+' '+ '0';
}

function calculate() {

    var zone = document.getElementById("des").value;
    var when = document.getElementById("des1").value;
    var radio='';
    var options=document.getElementsByName('option');
    for (var i = 0; i < options.length; i++) {

        if (options[i].checked) {
            radio = options[i].value;
        }
    }
    var ridecount = document.getElementById("ridecount").value;
    var zone1=0;
    var fare=0;
    switch(zone){
        case 'zone1':
            zone1=0;
            if(when==='weekday' && radio==='Advance'){
                fare=0;
            }
            else if(when==='weekday' && radio==='Onboard'){
                fare=1;
            }
            else if(when==='evening/weekend' && radio==='Advance'){
                fare=2;
            }
            else if(when==='evening/weekend' && radio==='Onboard'){
                fare=3;
            }
            else if(when==='anytime' && radio==='Advance'){
                fare=4;
            }
            else if(when==='anytime' && radio==='Onboard'){
                fare='';
                alert('No Ticket Available For That Option');
                document.getElementById("result").innerHTML='$'+' '+ '0';
            }
            else{
                fare='';
                document.getElementById("result").innerHTML='$'+' '+ '0';
            }
            break;
        case 'zone2':
            zone1=1;
            if(when==='weekday' && radio==='Advance'){
                fare=0;
            }
            else if(when==='weekday' && radio==='Onboard'){
                fare=1;
            }
            else if(when==='evening/weekend' && radio==='Advance'){
                fare=2;
            }
            else if(when==='evening/weekend' && radio==='Onboard'){
                fare=3;
            }
            else if(when==='anytime' && radio==='Advance'){
                fare=4;
            }
            else if(when==='anytime' && radio==='Onboard'){
                fare='';
                alert('No Ticket Available For That Option');
                document.getElementById("result").innerHTML='$'+' '+ '0';
            }
            else{
                fare='';
                document.getElementById("result").innerHTML='$'+' '+ '0';
            }
            break;
        case 'zone3':
            zone1=2;
            if(when==='weekday' && radio==='Advance'){
                fare=0;
            }
            else if(when==='weekday' && radio==='Onboard'){
                fare=1;
            }
            else if(when==='evening/weekend' && radio==='Advance'){
                fare=2;
            }
            else if(when==='evening/weekend' && radio==='Onboard'){
                fare=3;
            }
            else if(when==='anytime' && radio==='Advance'){
                fare=4;
            }
            else if(when==='anytime' && radio==='Onboard'){
                fare='';
                alert('No Ticket Available For That Option');
                document.getElementById("result").innerHTML='$'+' '+ '0';
            }
            else{
                fare='';
                document.getElementById("result").innerHTML='$'+' '+ '0';
            }
            break;
        case 'zone4':
            zone1=3;
            if(when==='weekday' && radio==='Advance'){
                fare=0;
            }
            else if(when==='weekday' && radio==='Onboard'){
                fare=1;
            }
            else if(when==='evening/weekend' && radio==='Advance'){
                fare=2;
            }
            else if(when==='evening/weekend' && radio==='Onboard'){
                fare=3;
            }
            else if(when==='anytime' && radio==='Advance'){
                fare=4;
            }
            else if(when==='anytime' && radio==='Onboard'){
                fare='';
                alert('No Ticket Available For That Option');
                document.getElementById("result").innerHTML='$'+' '+ '0';
            }
            else{
                fare='';
                document.getElementById("result").innerHTML='$'+' '+ '0';
            }
            break;
        case 'zone5':
            zone1=4;
            if(when==='weekday' && radio==='Advance'){
                fare=0;
            }
            else if(when==='weekday' && radio==='Onboard'){
                fare=1;
            }
            else if(when==='evening/weekend' && radio==='Advance'){
                fare=2;
            }
            else if(when==='evening/weekend' && radio==='Onboard'){
                fare=3;
            }
            else if(when==='anytime' && radio==='Advance'){
                fare=4;
            }
            else if(when==='anytime' && radio==='Onboard'){
                fare='';
                alert('No Ticket Available For That Option');
                document.getElementById("result").innerHTML='$'+' '+ '0';
            }
            else{
                fare='';
                document.getElementById("result").innerHTML='$'+' '+ '0';
            }
            break;

        default:
            zone1='';
            document.getElementById("result").innerHTML='$'+' '+ '0';
            alert('Please Select The Zone Of Travel');
    }

    $(document).ready(function () {

        $.getJSON('fares.json',function(result){

            $.each(result, function (i,field) {

                $("#result").html('$'+' '+result.zones[zone1].fares[fare].price*ridecount);

            });

        });

    });

}