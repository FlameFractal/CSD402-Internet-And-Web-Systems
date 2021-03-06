$( document ).ready(function() {

	// change text of dropdown menu to selected value
	$('#dropdownMenuButton').text("User 1");

	// fill the events in calendar for DEFAULT user on page reload
	fillEvents("User 1".toLowerCase().replace(" ","_"));

	// fill the events in calendar for SELECTED user
	$('.dropdown-menu a').click(function(){
		$('#dropdownMenuButton').text($(this).text());
		fillEvents($(this).text().toLowerCase().replace(" ","_"));
	});	


	$( ".draggable" ).draggable();
	$('[data-toggle="popover"]').popover();

});


// fill calendar with all the events[selected_user]
function fillEvents(user_id){    
    
    clearCalendar();

    events[user_id].map(function(event){	
      obj = `<div class="row eve ui-widget-content draggable">
  				<div class="event card">
  	          <h6>`+event.title+`</h6>
  	        </div>
  	        </div>`;
      $("#"+event.day).append(obj);      
    });
}


// remove all events
function clearCalendar(){
	var obj = `<div class="col day left" id="Monday"> <div class="row day-header"> <h5>Monday</h5> </div></div><div class="col day left" id="Tuesday"> <div class="row day-header"> <h5>Tuesday</h5> </div></div><div class="col day left" id="Wednesday"> <div class="row day-header"> <h5>Wednesday</h5> </div></div><div class="col day left" id="Thursday"> <div class="row day-header"> <h5>Thursday</h5> </div></div><div class="col day left" id="Friday"> <div class="row day-header"> <h5>Friday</h5> </div></div><div class="col day left" id="Saturday"> <div class="row day-header"> <h5>Saturday</h5> </div></div><div class="col day left" id="Sunday"> <div class="row day-header"> <h5>Sunday</h5> </div></div></div>`;
  $(".calendar").html(obj);
}

// Keyboard input to select user
$(document).keypress(function(e){
	if(e.which>=49 && e.which<=53){
		fillEvents("user_"+(e.which-48));
		$('#dropdownMenuButton').text("User "+(e.which-48));
	}
});