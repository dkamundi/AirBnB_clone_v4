// Execute the script when the DOM is loaded
$(document).ready(function() {
	// Request API status from http://0.0.0.0:5001/api/v1/status/
	$.get('http://0.0.0.0:5001/api/v1/status/', function(data) {
		if (data.status === 'OK') {
			// If the status is "OK", add the class "available" to the div#api_status
			$('#api_status').addClass('available');
		} else {
			// If the status is not "OK", remove the class "available" from the div#api_status
			$('#api_status').removeClass('available');
		}
	});
});
