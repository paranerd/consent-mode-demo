window.onload = function() {
    addListeners();
}

function addListeners() {
    document.querySelectorAll(".buy").forEach(elem => {
        elem.addEventListener('click', e => {
            const item = e.target.parentNode;

            console.log("clicked buy", e);

            /*gtag('event', 'purchase', {
                'revenue': item.querySelector('input[name="price"]').value,
                'items': [{
                    'id': item.querySelector('input[name="id"]').value,
                    'name': item.querySelector('input[name="name"]').value,
                    'category': item.querySelector('input[name="category"]').value,
                    'price': item.querySelector('input[name="price"]').value,
                    'quantity': 1
                }]
            });*/

// Sends the event to the Google Analytics property with
// tracking ID GA_MEASUREMENT_ID set by the config command in
// the global tracking snippet.
/*gtag('event', 'play', {
  'event_category': 'Videos',
  'event_label': 'Fall Campaign'
});*/

/*dataLayer.push({
  'event': 'purchase',
  'ecommerce': {
    'purchase': {
      'transaction_id': 'T' + Date.now(),
      'affiliation': 'Online Store',
      'value': '35.43',
      'tax': '4.90',
      'shipping': '5.99',
      'currency': 'EUR',
      'coupon': 'SUMMER_SALE',
      'items': [{
        'item_name': 'Triblend Android T-Shirt',
        'item_id': '12345',
        'price': '15.25',
        'item_brand': 'Google',
        'item_category': 'Apparel',
        'item_variant': 'Gray',
        'quantity': 1,
        'item_coupon': ''
      }, {
        'item_name': 'Donut Friday Scented T-Shirt',
        'item_id': '67890',
        'item_price': '33.75',
        'item_brand': 'Google',
        'item_category': 'Apparel',
        'item_variant': 'Black',
        'quantity': 1
      }]
    }
  }
});*/

gtag("event", "purchase", {
  affiliation: "Google online store",
  coupon: "SUMMER_DISCOUNT",
  currency: "USD",
  shipping: 5.55,
  tax: 3.33,
  transaction_id: "T_1",
  value: 28.86,
  items: [
    {
      id: "P12345",
      name: "Android Warhol T-Shirt",
      coupon: "P12345_coupon",
      list_name: "Search Results",
      brand: "Google",
      category: "Apparel/T-Shirts",
      variant: "Black",
      list_position: 3,
      quantity: 1,
      price: 9.99
    },
    {
      id: "P12346",
      name: "Flame challenge TShirt",
      coupon: "P12346_coupon",
      list_name: "Search Results",
      brand: "MyBrand",
      category: "Apparel/T-Shirts",
      variant: "Red",
      list_position: 5,
      quantity: 1,
      price: 9.99
    }
  ]
});
        });
    });
}
