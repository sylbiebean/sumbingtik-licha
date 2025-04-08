function initMap() {
    const cainta = { lat: 14.5899, lng: 121.1094 }; // Cainta's latitude and longitude
    const map = new google.maps.Map(document.getElementById("google-map"), {
        zoom: 15,
        center: cainta,
    });

    const locations = [
        { lat: 14.5904, lng: 121.1100, title: "Festival Venue" },
        { lat: 14.5895, lng: 121.1088, title: "Food Vendors" },
        { lat: 14.5910, lng: 121.1112, title: "Accommodation Area" },
    ];

    locations.forEach(location => {
        new google.maps.Marker({
            position: location,
            map: map,
            title: location.title
        });
    });
}
