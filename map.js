function initMap() {

  // Map options
  var options = {
    zoom: 13,
    center:{lat:40.7678, lng:-73.9736}
  }

  // New Map
  var map = new google.maps.Map(document.getElementById('map'), options);

  // Ideally want to store in a database
  // Array of markers
  var markers = [
    {
      coords:{lat:40.7618, lng:-73.9606},
      content:`<div>
                 <h2>Ravagh Persian Grille</h2>
                 <p>Persian cuisine, incredibly delicious.</p>
                 <p>Address: 1135 1st Avenue</p>
                 <p>Phone: (212) 861-7900</p>
               </div>`
    },
    {
      coords:{lat:40.7570, lng:-73.9683},
      content:`<div>
                 <h2>Lucky Cat</h2>
                 <p>Japanese lounge, nice aesthetic and yummy food.</p>
                 <p>Address: 232 E 53rd St</p>
                 <p>Phone: (212) 838-5333</p>
               </div>`
    },
    {
      coords:{lat:40.7651, lng:-73.9658},
      content:`<div>
                 <h2>Alice's Tea Cup Chapter 2</h2>
                 <p>Whimsical environment and calm tea.</p>
                 <p>Address: 156 E 64th St</p>
                 <p>Phone: (212) 486-9200</p>
               </div>`
    },
    {
      coords:{lat:40.7617, lng:-73.9607},
      content:`<div>
                 <h2>Ritz Diner</h2>
                 <p>24-Hour, retro looking diner.</p>
                 <p>Address: 1133 1st Avenue</p>
                 <p>Phone: (212) 319-4993</p>
               </div>`
    },
    {
      coords:{lat:40.7634, lng:-73.9668},
      content:`<div>
                 <h2>Gina Mexicana</h2>
                 <p>Lowkey Mexican restaurant, amazing food and friendly staff.</p>
                 <p>Address: 145 E 61st St</p>
                 <p>Phone: (212) 527-3700</p>
               </div>`
    },
    {
      coords:{lat:40.7590, lng:-73.9627},
      content:`<div>
                 <h2>Rosa Mexicano</h2>
                 <p>Extravagant Mexican restaurant with great drinks.</p>
                 <p>Address: 1063 1st Avenue</p>
                 <p>Phone: (212) 753-7407</p>
               </div>`
    },
    {
      coords:{lat:40.7746, lng:-73.9544},
      content:`<div>
                 <h2>Yuka</h2>
                 <p>All you can eat sushi. Try to beat my 100 piece of sushi challenge!</p>
                 <p>Address: 1557 2nd Ave</p>
                 <p>Phone: (212) 772-9675</p>
               </div>`
    },
    {
      coords:{lat:40.7551, lng:-73.9687},
      content:`<div>
                 <h2>Starbucks</h2>
                 <p>My favourite Starbucks, mostly because of its fancy and comfortable red chairs you could study in.</p>
                 <p>Address: 943 2nd Ave</p>
                 <p>Phone: (212) 715-0754</p>
               </div>`
    },
    {
      coords:{lat:40.7638, lng:-73.9629},
      content:`<div>
                 <h2>Jackson Hole</h2>
                 <p>A seemingly hidden restaurant, has great burgers and a rustic feel.</p>
                 <p>Address: 232 E 64th St A</p>
                 <p>Phone: (212) 371-7187</p>
               </div>`
    },
    {
      coords:{lat:40.7696, lng:-73.9488},
      content:`<div>
                 <h2>John Jay Pool</h2>
                 <p>An olympic size, outdoor pool with a view of FDR Drive.</p>
                 <p>Address: 8852, 77 Cherokee Pl</p>
                 <p>Phone: (212) 794-6566</p>
               </div>`
    },
    {
      coords:{lat:40.7531, lng:-73.9641},
      content:`<div>
                 <h2>Peter Detmold Park</h2>
                 <p>My favourite park. Highway on one side and the river on the other.</p>
                 <p>Address: 454 E 51st St</p>
                 <p>Phone: (212) 639-9675</p>
               </div>`
    },
    {
      coords:{lat:40.7652, lng:-73.9574},
      content:`<div>
                 <h2>Sophie's Cuban Cuisine</h2>
                 <p>Yummy Cuban food with huge portions.</p>
                 <p>Address: 401 E 68th St</p>
                 <p>Phone: (212) 439-1814</p>
               </div>`
    },
    {
      coords:{lat:40.7575, lng:-73.9675},
      content:`<div>
                 <h2>Blink Fitness</h2>
                 <p>My second home, 5 days a week.</p>
                 <p>Address: 240 E 54th St</p>
                 <p>Phone: (646) 561-5460</p>
               </div>`
    },
    {
      coords:{lat:40.7791, lng:-73.9551},
      content:`<div>
                 <h2>Barnes & Noble UES</h2>
                 <p>Large book store with a massive open space.</p>
                 <p>Address: 150 East 86th St</p>
                 <p>Phone: (212) 369-2180</p>
               </div>`
    },
    {
      coords:{lat:40.7861, lng:-73.9788},
      content:`<div>
                 <h2>Barnes & Noble UWS</h2>
                 <p>Large multi-floor bookstore with a large collection of books and games.</p>
                 <p>Address: 2289 Broadway</p>
                 <p>Phone: (212) 362-8835</p>
               </div>`
    },
    {
      coords:{lat:40.7799, lng:-73.9887},
      content:`<div>
                 <h2>Pier 1</h2>
                 <p>My favourite place in NYC. Surround yourself in water.</p>
                 <p>Address: 500 W 70th St</p>
                 <p>Phone: (212) 362-4450 (For the cafe nearby)</p>
               </div>`
    },
    {
      coords:{lat:40.7725, lng:-73.9835},
      content:`<div>
                 <h2>Lincoln Center</h2>
                 <p>A chill park center to walk around in during the night.</p>
                 <p>Address: 10 Lincoln Center Plaza</p>
                 <p>Phone: (212) 875-5456</p>
               </div>`
    },
    {
      coords:{lat:40.7750, lng:-73.9818},
      content:`<div>
                 <h2>AMC Loews Lincoln Square 13</h2>
                 <p>My favourite movie theaters for their beautiful rainbow escalators.</p>
                 <p>Address: 1998 Broadway</p>
                 <p>Phone: (212) 336-5020</p>
               </div>`
    },
    {
      coords:{lat:40.7682, lng:-73.9857},
      content:`<div>
                 <h2>Terakawa</h2>
                 <p>Small and cozy ramen restaurant. Spicy soups and great appetizers. Cash only.</p>
                 <p>Address: 204 N 9th St</p>
                 <p>Phone: (267) 687-1355</p>
               </div>`
    },
    {
      coords:{lat:40.7569, lng:-73.9897},
      content:`<div>
                 <h2>Microsoft</h2>
                 <p>Chill office space to work at wednesday nights.</p>
                 <p>Address: 11 Times Square</p>
                 <p>Phone: (212) 245-2100</p>
               </div>`
    },
    {
      coords:{lat:40.7626, lng:-73.9767},
      content:`<div>
                 <h2>Katsu-Hama</h2>
                 <p>Japanese restaurant hidden in the second floor of a Midtown building.</p>
                 <p>Address: 43-45 W 55th St</p>
                 <p>Phone: (212) 541-7145</p>
               </div>`
    },
  ];

  // Loop through markers
  for(var i = 0; i < markers.length; i++) {
    addMarker(markers[i]);
  }

  // Add Marker function
  function addMarker(props){
    var marker = new google.maps.Marker({
      position:props.coords,
      map:map,
    });

    // Checks for content
    if(props.content){
      var infowindow = new google.maps.InfoWindow({
        content:props.content
      });

      marker.addListener('click', function(){
        infowindow.open(map, marker);
      });
    }
  }
}
