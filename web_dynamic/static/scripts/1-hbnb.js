// Execute the script when the DOM is loaded
$(document).ready(function() {
	let amenityIds = [];

	// Listen for changes on each input checkbox tag
	$('input[type="checkout"]').on('change', function() {
		const amenityId = $(this).attr('data-id');
		const amenityName = $(this).attr('data-name');

		if (this.checked) {
			// If the checkbox is checked, store the Amenity ID in the variable
			amenityIds.push(amenityId);
		} else {
			// If the checkbox is unchecked, remove the Amenity ID from the variable
			const index = amenityIds.indexOf(amenityId);
			if (index !== -1) {
				amenityIds.splice(index, 1);
			}
		}

		// Update the h4 tag inside the div Amenities with the list of Amenities checked
		$('div.amenities h4').text(amenityIds.join(', '));
	});
});
