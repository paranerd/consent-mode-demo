window.onload = function() {
	setTimeout(() => {
		console.log("2 seconds are up!");
		window.dataLayer = window.dataLayer || [];
		window.dataLayer.push({
			'event': 'Add to Basket',
			'my_var': 'green',
		});
	}, 2000);
}
