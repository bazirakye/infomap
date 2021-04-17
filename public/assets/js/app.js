/*var map, featureList, boroughSearch = [], allpoiSearch = [];*/
var map, featureList, boroughSearch = [], theaterSearch = [], museumSearch = [], allpoiSearch = [], 
prayerSearch = [], primarySearch = [], secondarySearch = [], collegeSearch = [], universitySearch = [], waterSearch = [], 
healthSearch = [], leisureSearch = [], fuelSearch = [], marketSearch = [], policeSearch = [], restaurantSearch = [], hotelSearch = [] ;



$(window).resize(function() {
  sizeLayerControl();
});

$(document).on("click", ".feature-row", function(e) {
  $(document).off("mouseout", ".feature-row", clearHighlight);
  sidebarClick(parseInt($(this).attr("id"), 10));
});

if ( !("ontouchstart" in window) ) {
  $(document).on("mouseover", ".feature-row", function(e) {
    highlight.clearLayers().addLayer(L.circleMarker([$(this).attr("lat"), $(this).attr("lng")], highlightStyle));
  });
}

$(document).on("mouseout", ".feature-row", clearHighlight);

$("#about-btn").click(function() {
  $("#aboutModal").modal("show");
  $(".navbar-collapse.in").collapse("hide");
  return false;
});

$("#full-extent-btn").click(function() {
  map.fitBounds(boroughs.getBounds());
  $(".navbar-collapse.in").collapse("hide");
  return false;
});

$("#legend-btn").click(function() {
  $("#legendModal").modal("show");
  $(".navbar-collapse.in").collapse("hide");
  return false;
});

$("#registration-btn").click(function() {
  $("#registrationModal").modal("show");
  $(".navbar-collapse.in").collapse("hide");
  return false;
});

$("#login-btn").click(function() {
  $("#loginModal").modal("show");
  $(".navbar-collapse.in").collapse("hide");
  return false;
});

$("#download-btn").click(function() {
  $("#downloadModal").modal("show");
  $(".navbar-collapse.in").collapse("hide");
  return false;
});

$("#user-account").click(function() {
  $("#userAccountModal").modal("show");
  $(".navbar-collapse.in").collapse("hide");
  return false;
});






$("#list-btn").click(function() {
  animateSidebar();
  return false;
});

$("#nav-btn").click(function() {
  $(".navbar-collapse").collapse("toggle");
  return false;
});

$("#sidebar-toggle-btn").click(function() {
  animateSidebar();
  return false;
});

$("#sidebar-hide-btn").click(function() {
  animateSidebar();
  return false;
});

function animateSidebar() {
  $("#sidebar").animate({
    width: "toggle"
  }, 350, function() {
    map.invalidateSize();
  });
}

function sizeLayerControl() {
  $(".leaflet-control-layers").css("max-height", $("#map").height() - 50);
}

function clearHighlight() {
  highlight.clearLayers();
}

function sidebarClick(id) {
  var layer = markerClusters.getLayer(id);
  map.setView([layer.getLatLng().lat, layer.getLatLng().lng], 17);
  layer.fire("click");
  /* Hide sidebar and go to the map on small screens */
  if (document.body.clientWidth <= 767) {
    $("#sidebar").hide();
    map.invalidateSize();
  }
}
/*WHAT APPEARS ON SEARCH AREA - LEFT SIDE BAR*/
function syncSidebar() {
  /* Empty sidebar features */
  $("#feature-list tbody").empty();
  
  /* Loop through theaters layer and add only features which are in the map bounds */
  
  theaters.eachLayer(function (layer) {
    if (map.hasLayer(theaterLayer)) {
      if (map.getBounds().contains(layer.getLatLng())) {
        $("#feature-list tbody").append('<tr class="feature-row" id="' + L.stamp(layer) + '" lat="' + layer.getLatLng().lat + '" lng="' + layer.getLatLng().lng + '"><td style="vertical-align: middle;"><img width="16" height="18" src="assets/img/theater.png"></td><td class="feature-name">' + layer.feature.properties.NAME + '</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>');
      }
    }
  });
  
  /* Loop through museums layer and add only features which are in the map bounds */
  
  museums.eachLayer(function (layer) {
    if (map.hasLayer(museumLayer)) {
      if (map.getBounds().contains(layer.getLatLng())) {
        $("#feature-list tbody").append('<tr class="feature-row" id="' + L.stamp(layer) + '" lat="' + layer.getLatLng().lat + '" lng="' + layer.getLatLng().lng + '"><td style="vertical-align: middle;"><img width="16" height="18" src="assets/img/museum.png"></td><td class="feature-name">' + layer.feature.properties.NAME + '</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>');
      }
    }
  });
  
  /* Loop through all POI layer and add only features which are in the map bounds */
  allpoi.eachLayer(function (layer) {
    if (map.hasLayer(allpoiLayer)) {
      if (map.getBounds().contains(layer.getLatLng())) {
        $("#feature-list tbody").append('<tr class="feature-row" id="' + L.stamp(layer) + '" lat="' + layer.getLatLng().lat + '" lng="' + layer.getLatLng().lng + '"><td style="vertical-align: middle;"><img width="16" height="18" src="assets/img/allpoi.png"></td><td class="feature-name">' + layer.feature.properties.BizName + '</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>');
      }
    }
  });
  
  /* Loop through Prayer Centre layer and add only features which are in the map bounds */
  prayer.eachLayer(function (layer) {
    if (map.hasLayer(prayerLayer)) {
      if (map.getBounds().contains(layer.getLatLng())) {
        $("#feature-list tbody").append('<tr class="feature-row" id="' + L.stamp(layer) + '" lat="' + layer.getLatLng().lat + '" lng="' + layer.getLatLng().lng + '"><td style="vertical-align: middle;"><img width="16" height="18" src="assets/img/prayer.png"></td><td class="feature-name">' + layer.feature.properties.BizName + '</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>');
      }
    }
  });
  /* Loop through Pre-pimary and Primary layer and add only features which are in the map bounds */
  primary.eachLayer(function (layer) {
    if (map.hasLayer(primaryLayer)) {
      if (map.getBounds().contains(layer.getLatLng())) {
        $("#feature-list tbody").append('<tr class="feature-row" id="' + L.stamp(layer) + '" lat="' + layer.getLatLng().lat + '" lng="' + layer.getLatLng().lng + '"><td style="vertical-align: middle;"><img width="16" height="18" src="assets/img/primary.png"></td><td class="feature-name">' + layer.feature.properties.BizName + '</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>');
      }
    }
  });
   /* Loop through Secondary Schools layer and add only features which are in the map bounds */
  secondary.eachLayer(function (layer) {
    if (map.hasLayer(secondaryLayer)) {
      if (map.getBounds().contains(layer.getLatLng())) {
        $("#feature-list tbody").append('<tr class="feature-row" id="' + L.stamp(layer) + '" lat="' + layer.getLatLng().lat + '" lng="' + layer.getLatLng().lng + '"><td style="vertical-align: middle;"><img width="16" height="18" src="assets/img/secondary.png"></td><td class="feature-name">' + layer.feature.properties.BizName + '</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>');
      }
    }
  });
  /* Loop through Colleges layer and add only features which are in the map bounds */
  college.eachLayer(function (layer) {
    if (map.hasLayer(collegeLayer)) {
      if (map.getBounds().contains(layer.getLatLng())) {
        $("#feature-list tbody").append('<tr class="feature-row" id="' + L.stamp(layer) + '" lat="' + layer.getLatLng().lat + '" lng="' + layer.getLatLng().lng + '"><td style="vertical-align: middle;"><img width="16" height="18" src="assets/img/colleges.png"></td><td class="feature-name">' + layer.feature.properties.BizName + '</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>');
      }
    }
  });
   /* Loop through Universities layer and add only features which are in the map bounds */
  university.eachLayer(function (layer) {
    if (map.hasLayer(universityLayer)) {
      if (map.getBounds().contains(layer.getLatLng())) {
        $("#feature-list tbody").append('<tr class="feature-row" id="' + L.stamp(layer) + '" lat="' + layer.getLatLng().lat + '" lng="' + layer.getLatLng().lng + '"><td style="vertical-align: middle;"><img width="16" height="18" src="assets/img/university.png"></td><td class="feature-name">' + layer.feature.properties.BizName + '</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>');
      }
    }
  });
	/* Loop through Water layer and add only features which are in the map bounds */
  water.eachLayer(function (layer) {
    if (map.hasLayer(waterLayer)) {
      if (map.getBounds().contains(layer.getLatLng())) {
        $("#feature-list tbody").append('<tr class="feature-row" id="' + L.stamp(layer) + '" lat="' + layer.getLatLng().lat + '" lng="' + layer.getLatLng().lng + '"><td style="vertical-align: middle;"><img width="16" height="18" src="assets/img/water.png"></td><td class="feature-name">' + layer.feature.properties.BizName + '</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>');
      }
    }
  });
	/* Loop through health layer and add only features which are in the map bounds */
  health.eachLayer(function (layer) {
    if (map.hasLayer(healthLayer)) {
      if (map.getBounds().contains(layer.getLatLng())) {
        $("#feature-list tbody").append('<tr class="feature-row" id="' + L.stamp(layer) + '" lat="' + layer.getLatLng().lat + '" lng="' + layer.getLatLng().lng + '"><td style="vertical-align: middle;"><img width="16" height="18" src="assets/img/health.png"></td><td class="feature-name">' + layer.feature.properties.BizName + '</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>');
      }
    }
  });  
	/* Loop through leisure layer and add only features which are in the map bounds */
  leisure.eachLayer(function (layer) {
    if (map.hasLayer(leisureLayer)) {
      if (map.getBounds().contains(layer.getLatLng())) {
        $("#feature-list tbody").append('<tr class="feature-row" id="' + L.stamp(layer) + '" lat="' + layer.getLatLng().lat + '" lng="' + layer.getLatLng().lng + '"><td style="vertical-align: middle;"><img width="16" height="18" src="assets/img/park.png"></td><td class="feature-name">' + layer.feature.properties.BizName + '</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>');
      }
    }
  });
	/* Loop through fuel layer and add only features which are in the map bounds */
  fuel.eachLayer(function (layer) {
    if (map.hasLayer(fuelLayer)) {
      if (map.getBounds().contains(layer.getLatLng())) {
        $("#feature-list tbody").append('<tr class="feature-row" id="' + L.stamp(layer) + '" lat="' + layer.getLatLng().lat + '" lng="' + layer.getLatLng().lng + '"><td style="vertical-align: middle;"><img width="16" height="18" src="assets/img/fuel.png"></td><td class="feature-name">' + layer.feature.properties.BizName + '</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>');
      }
    }
  });
  /* Loop through market layer and add only features which are in the map bounds */
  market.eachLayer(function (layer) {
    if (map.hasLayer(marketLayer)) {
      if (map.getBounds().contains(layer.getLatLng())) {
        $("#feature-list tbody").append('<tr class="feature-row" id="' + L.stamp(layer) + '" lat="' + layer.getLatLng().lat + '" lng="' + layer.getLatLng().lng + '"><td style="vertical-align: middle;"><img width="16" height="18" src="assets/img/market.png"></td><td class="feature-name">' + layer.feature.properties.BizName + '</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>');
      }
    }
  });
  /* Loop through police layer and add only features which are in the map bounds */
  police.eachLayer(function (layer) {
    if (map.hasLayer(policeLayer)) {
      if (map.getBounds().contains(layer.getLatLng())) {
        $("#feature-list tbody").append('<tr class="feature-row" id="' + L.stamp(layer) + '" lat="' + layer.getLatLng().lat + '" lng="' + layer.getLatLng().lng + '"><td style="vertical-align: middle;"><img width="16" height="18" src="assets/img/police.png"></td><td class="feature-name">' + layer.feature.properties.BizName + '</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>');
      }
    }
  });
  /* Loop through restaurant layer and add only features which are in the map bounds */
  restaurant.eachLayer(function (layer) {
    if (map.hasLayer(restaurantLayer)) {
      if (map.getBounds().contains(layer.getLatLng())) {
        $("#feature-list tbody").append('<tr class="feature-row" id="' + L.stamp(layer) + '" lat="' + layer.getLatLng().lat + '" lng="' + layer.getLatLng().lng + '"><td style="vertical-align: middle;"><img width="16" height="18" src="assets/img/restaurant.png"></td><td class="feature-name">' + layer.feature.properties.BizName + '</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>');
      }
    }
  });
  /* Loop through hotels layer and add only features which are in the map bounds */
  hotel.eachLayer(function (layer) {
    if (map.hasLayer(hotelLayer)) {
      if (map.getBounds().contains(layer.getLatLng())) {
        $("#feature-list tbody").append('<tr class="feature-row" id="' + L.stamp(layer) + '" lat="' + layer.getLatLng().lat + '" lng="' + layer.getLatLng().lng + '"><td style="vertical-align: middle;"><img width="16" height="18" src="assets/img/hotel.png"></td><td class="feature-name">' + layer.feature.properties.BizName + '</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>');
      }
    }
  });
  
  
  
  
  /* Update list.js featureList */
  featureList = new List("features", {
    valueNames: ["feature-name"]
  });
  featureList.sort("feature-name", {
    order: "asc"
  });
}



/* BASEMAP LAYERS FOR BACKGROUND */
var cartoLight = L.tileLayer("https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: 'Credits: &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://cartodb.com/attributions">CartoDB</a> , &copy; <a href="https://github.com/bmcbride">Github(Bryan McBride)</a>'
});
var usgsImagery = L.layerGroup([L.tileLayer("http://basemap.nationalmap.gov/arcgis/rest/services/USGSImageryOnly/MapServer/tile/{z}/{y}/{x}", {
  maxZoom: 15,
}), L.tileLayer.wms("http://raster.nationalmap.gov/arcgis/services/Orthoimagery/USGS_EROS_Ortho_SCALE/ImageServer/WMSServer?", {
  minZoom: 16,
  maxZoom: 19,
  layers: "0",
  format: 'image/jpeg',
  transparent: true,
  attribution: "Aerial Imagery courtesy USGS"
})]);



/* Overlay Layers */
var highlight = L.geoJson(null);
var highlightStyle = {
  stroke: false,
  fillColor: "#00FFFF",
  fillOpacity: 0.7,
  radius: 10
};

var boroughs = L.geoJson(null, {
  style: function (feature) {
    return {
      color: "black",
      fill: false,
      opacity: 1,
      clickable: false
    };
  },
  onEachFeature: function (feature, layer) {
    boroughSearch.push({
      name: layer.feature.properties.NAME_2,
      source: "Boundary",
      id: L.stamp(layer),
      bounds: layer.getBounds()
    });
  }
});
$.getJSON("data/Mun_Arua_Boundary.geojson", function (data) {
  boroughs.addData(data);
});

//Create a color dictionary based off of subway route_id
var subwayColors = {"1":"#ff3135", "2":"#ff3135", "3":"ff3135", "4":"#009b2e",
    "5":"#009b2e", "6":"#009b2e", "7":"#ce06cb", "A":"#fd9a00", "C":"#fd9a00",
    "E":"#fd9a00", "SI":"#fd9a00","H":"#fd9a00", "Air":"#ffff00", "B":"#ffff00",
    "D":"#ffff00", "F":"#ffff00", "M":"#ffff00", "G":"#9ace00", "FS":"#6e6e6e",
    "GS":"#6e6e6e", "J":"#976900", "Z":"#976900", "L":"#969696", "N":"#ffff00",
    "Q":"#ffff00", "R":"#ffff00" };

var subwayLines = L.geoJson(null, {
  style: function (feature) {
      return {
        color: subwayColors[feature.properties.route_id],
        weight: 3,
        opacity: 1
      };
  },
  onEachFeature: function (feature, layer) {
    if (feature.properties) {
      var content = "<table class='table table-striped table-bordered table-condensed'>" + "<tr><th>Division</th><td>" + feature.properties.Division + "</td></tr>" + "<tr><th>Line</th><td>" + feature.properties.Line + "</td></tr>" + "<table>";
      layer.on({
        click: function (e) {
          $("#feature-title").html(feature.properties.Line);
          $("#feature-info").html(content);
          $("#featureModal").modal("show");

        }
      });
    }
    layer.on({
      mouseover: function (e) {
        var layer = e.target;
        layer.setStyle({
          weight: 3,
          color: "#00FFFF",
          opacity: 1
        });
        if (!L.Browser.ie && !L.Browser.opera) {
          layer.bringToFront();
        }
      },
      mouseout: function (e) {
        subwayLines.resetStyle(e.target);
      }
    });
  }
});
$.getJSON("data/ny/subways.geojson", function (data) {
  subwayLines.addData(data);
});

//Create a color dictionary based off of Utility Road Type
var utilityColors = {"Tarmacked":"#fd9a00", "Murram":"#ff3135" };

var utilityLines = L.geoJson(null, {
  style: function (feature) {
      return {
        color: utilityColors[feature.properties.Type],
        weight: 3,
        opacity: 1
      };
  },
  onEachFeature: function (feature, layer) {
    if (feature.properties) {
      var content = "<table class='table table-striped table-bordered table-condensed'>" + "<tr><th>Utility Name</th><td>" + feature.properties.Name + "</td></tr>" + "<tr><th>Utility Condition</th><td>" + feature.properties.Type + "</td></tr>" +"<tr><th>Access Type</th><td>" + feature.properties.Access + "</td></tr>" + "<tr><th>No. of Lanes</th><td>" + feature.properties.Lanes + "</td></tr>" + "<tr><th>Lenghth (m)</th><td>" + feature.properties.Shape_Leng + "</td></tr>" + "<table>";
      layer.on({
        click: function (e) {
          $("#feature-title").html(feature.properties.Name);
          $("#feature-info").html(content);
          $("#featureModal").modal("show");

        }
      });
    }
    layer.on({
      mouseover: function (e) {
        var layer = e.target;
        layer.setStyle({
          weight: 3,
          color: "#00FFFF",
          opacity: 1
        });
        if (!L.Browser.ie && !L.Browser.opera) {
          layer.bringToFront();
        }
      },
      mouseout: function (e) {
        utilityLines.resetStyle(e.target);
      }
    });
  }
});
$.getJSON("data/utilities.geojson", function (data) {
  utilityLines.addData(data);
});




/* Single marker cluster layer to hold all clusters */
var markerClusters = new L.MarkerClusterGroup({
  spiderfyOnMaxZoom: true,
  showCoverageOnHover: false,
  zoomToBoundsOnClick: true,
  disableClusteringAtZoom: 16
});

/* Empty layer placeholder to add to layer control for listening when to add/remove theaters to markerClusters layer */

var theaterLayer = L.geoJson(null);
var theaters = L.geoJson(null, {
  pointToLayer: function (feature, latlng) {
    return L.marker(latlng, {
      icon: L.icon({
        iconUrl: "assets/img/theater.png",
        iconSize: [24, 28],
        iconAnchor: [12, 28],
        popupAnchor: [0, -25]
      }),
      title: feature.properties.NAME,
      riseOnHover: true
    });
  },
  onEachFeature: function (feature, layer) {
    if (feature.properties) {
      var content = "<table class='table table-striped table-bordered table-condensed'>" + "<tr><th>Name</th><td>" + feature.properties.NAME + "</td></tr>" + "<tr><th>Phone</th><td>" + feature.properties.TEL + "</td></tr>" + "<tr><th>Address</th><td>" + feature.properties.ADDRESS1 + "</td></tr>" + "<tr><th>Website</th><td><a class='url-break' href='" + feature.properties.URL + "' target='_blank'>" + feature.properties.URL + "</a></td></tr>" + "<tr><th>Coordinates (X,Y)</th><td><a class='url-break' href='" + feature.properties.URL + "' target='_blank'>" + feature.properties.URL + "</a></td></tr>"+ "<table>";
      layer.on({
        click: function (e) {
          $("#feature-title").html(feature.properties.NAME);
          $("#feature-info").html(content);
          $("#featureModal").modal("show");
          highlight.clearLayers().addLayer(L.circleMarker([feature.geometry.coordinates[1], feature.geometry.coordinates[0]], highlightStyle));
        }
      });
      $("#feature-list tbody").append('<tr class="feature-row" id="' + L.stamp(layer) + '" lat="' + layer.getLatLng().lat + '" lng="' + layer.getLatLng().lng + '"><td style="vertical-align: middle;"><img width="16" height="18" src="assets/img/theater.png"></td><td class="feature-name">' + layer.feature.properties.NAME + '</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>');
      theaterSearch.push({
        name: layer.feature.properties.NAME,
        address: layer.feature.properties.ADDRESS1,
        source: "Theaters",
        id: L.stamp(layer),
        lat: layer.feature.geometry.coordinates[1],
        lng: layer.feature.geometry.coordinates[0]
      });
    }
  }
});
$.getJSON("data/ny/DOITT_THEATER_01_13SEPT2010.geojson", function (data) {
  theaters.addData(data);
  //map.addLayer(theaterLayer);
});

/* Empty layer placeholder to add to layer control for listening when to add/remove museums to markerClusters layer */

var museumLayer = L.geoJson(null);
var museums = L.geoJson(null, {
  pointToLayer: function (feature, latlng) {
    return L.marker(latlng, {
      icon: L.icon({
        iconUrl: "assets/img/museum.png",
        iconSize: [24, 28],
        iconAnchor: [12, 28],
        popupAnchor: [0, -25]
      }),
      title: feature.properties.NAME,
      riseOnHover: true
    });
  },
  onEachFeature: function (feature, layer) {
    if (feature.properties) {
      var content = "<table class='table table-striped table-bordered table-condensed'>" + "<tr><th>Name</th><td>" + feature.properties.NAME + "</td></tr>" + "<tr><th>Phone</th><td>" + feature.properties.TEL + "</td></tr>" + "<tr><th>Address</th><td>" + feature.properties.ADRESS1 + "</td></tr>" + "<tr><th>Website</th><td><a class='url-break' href='" + feature.properties.URL + "' target='_blank'>" + feature.properties.URL + "</a></td></tr>" + "<tr><th>Coordinates (X,Y)</th><td><a class='url-break' href='" + feature.properties.URL + "' target='_blank'>" + feature.properties.URL + "</a></td></tr>" + "<table>";
      layer.on({
        click: function (e) {
          $("#feature-title").html(feature.properties.NAME);
          $("#feature-info").html(content);
          $("#featureModal").modal("show");
          highlight.clearLayers().addLayer(L.circleMarker([feature.geometry.coordinates[1], feature.geometry.coordinates[0]], highlightStyle));
        }
      });
      $("#feature-list tbody").append('<tr class="feature-row" id="' + L.stamp(layer) + '" lat="' + layer.getLatLng().lat + '" lng="' + layer.getLatLng().lng + '"><td style="vertical-align: middle;"><img width="16" height="18" src="assets/img/museum.png"></td><td class="feature-name">' + layer.feature.properties.NAME + '</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>');
      museumSearch.push({
        name: layer.feature.properties.NAME,
        address: layer.feature.properties.ADRESS1,
        source: "Museums",
        id: L.stamp(layer),
        lat: layer.feature.geometry.coordinates[1],
        lng: layer.feature.geometry.coordinates[0]
      });
    }
  }
});
$.getJSON("data/ny/DOITT_MUSEUM_01_13SEPT2010.geojson", function (data) {
  museums.addData(data);
});

/* Empty layer placeholder to add to layer control for listening when to add/remove Allpoi to markerClusters layer */
var allpoiLayer = L.geoJson(null);
var allpoi = L.geoJson(null, {
  pointToLayer: function (feature, latlng) {
    return L.marker(latlng, {
      icon: L.icon({
        iconUrl: "assets/img/allpoi.png",
        iconSize: [24, 28],
        iconAnchor: [12, 28],
        popupAnchor: [0, -25]
      }),
      title: feature.properties.BizName,
      riseOnHover: true
    });
  },
  onEachFeature: function (feature, layer) {
    if (feature.properties) {
      var content = "<table class='table table-striped table-bordered table-condensed'>" + "<tr><th>Name</th><td>" + feature.properties.BizName + "</td></tr>" + "<tr><th>Box</th><td>" + feature.properties.PostalBox + "</td></tr>" + "<tr><th>Address</th><td>" + feature.properties.Address1 + "</td></tr>" + "<tr><th>Website</th><td><a class='url-break' href='" + feature.properties.Website + "' target='_blank'>" + feature.properties.Website + "</a></td></tr>" + "<table>";
      layer.on({
        click: function (e) {
          $("#feature-title").html(feature.properties.BizName);
          $("#feature-info").html(content);
          $("#featureModal").modal("show");
          highlight.clearLayers().addLayer(L.circleMarker([feature.geometry.coordinates[1], feature.geometry.coordinates[0]], highlightStyle));
        }
      });
      $("#feature-list tbody").append('<tr class="feature-row" id="' + L.stamp(layer) + '" lat="' + layer.getLatLng().lat + '" lng="' + layer.getLatLng().lng + '"><td style="vertical-align: middle;"><img width="16" height="18" src="assets/img/allpoi.png"></td><td class="feature-name">' + layer.feature.properties.BizName + '</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>');
      allpoiSearch.push({
        name: layer.feature.properties.BizName,
        address: layer.feature.properties.Address1,
        source: "Allpois",
        id: L.stamp(layer),
        lat: layer.feature.geometry.coordinates[1],
        lng: layer.feature.geometry.coordinates[0]
      });
    }
  }
});
$.getJSON("data/Arua_Mun_POIs.geojson", function (data) {
  allpoi.addData(data);
  map.addLayer(allpoiLayer);
});


/* Empty layer placeholder to add to layer control for listening when to add/remove Prayer to markerClusters layer */
var prayerLayer = L.geoJson(null);
var prayer = L.geoJson(null, {
  pointToLayer: function (feature, latlng) {
    return L.marker(latlng, {
      icon: L.icon({
        iconUrl: "assets/img/prayer.png",
        iconSize: [24, 28],
        iconAnchor: [12, 28],
        popupAnchor: [0, -25]
      }),
      title: feature.properties.BizName,
      riseOnHover: true
    });
  },
  onEachFeature: function (feature, layer) {
    if (feature.properties) {
      var content = "<table class='table table-striped table-bordered table-condensed'>" + "<tr><th>Name</th><td>" + feature.properties.BizName + "</td></tr>" + "<tr><th>Box</th><td>" + feature.properties.PostalBox + "</td></tr>" + "<tr><th>Address</th><td>" + feature.properties.Address1 + "</td></tr>" + "<tr><th>Website</th><td><a class='url-break' href='" + feature.properties.Website + "' target='_blank'>" + feature.properties.Website + "</a></td></tr>" + "<table>";
      layer.on({
        click: function (e) {
          $("#feature-title").html(feature.properties.BizName);
          $("#feature-info").html(content);
          $("#featureModal").modal("show");
          highlight.clearLayers().addLayer(L.circleMarker([feature.geometry.coordinates[1], feature.geometry.coordinates[0]], highlightStyle));
        }
      });
      $("#feature-list tbody").append('<tr class="feature-row" id="' + L.stamp(layer) + '" lat="' + layer.getLatLng().lat + '" lng="' + layer.getLatLng().lng + '"><td style="vertical-align: middle;"><img width="16" height="18" src="assets/img/prayer.png"></td><td class="feature-name">' + layer.feature.properties.BizName + '</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>');
      allpoiSearch.push({
        name: layer.feature.properties.BizName,
        address: layer.feature.properties.Address1,
        source: "PrayerCentres",
        id: L.stamp(layer),
        lat: layer.feature.geometry.coordinates[1],
        lng: layer.feature.geometry.coordinates[0]
      });
    }
  }
});
$.getJSON("data/worship_centres.geojson", function (data) {
  prayer.addData(data);
});

/* Empty layer placeholder to add to layer control for listening when to add/remove Pre-primary and Primary to markerClusters layer */
var primaryLayer = L.geoJson(null);
var primary = L.geoJson(null, {
  pointToLayer: function (feature, latlng) {
    return L.marker(latlng, {
      icon: L.icon({
        iconUrl: "assets/img/primary.png",
        iconSize: [24, 28],
        iconAnchor: [12, 28],
        popupAnchor: [0, -25]
      }),
      title: feature.properties.BizName,
      riseOnHover: true
    });
  },
  onEachFeature: function (feature, layer) {
    if (feature.properties) {
      var content = "<table class='table table-striped table-bordered table-condensed'>" + "<tr><th>Name</th><td>" + feature.properties.BizName + "</td></tr>" + "<tr><th>Box</th><td>" + feature.properties.PostalBox + "</td></tr>" + "<tr><th>Address</th><td>" + feature.properties.Address1 + "</td></tr>" + "<tr><th>Website</th><td><a class='url-break' href='" + feature.properties.Website + "' target='_blank'>" + feature.properties.Website + "</a></td></tr>" + "<table>";
      layer.on({
        click: function (e) {
          $("#feature-title").html(feature.properties.BizName);
          $("#feature-info").html(content);
          $("#featureModal").modal("show");
          highlight.clearLayers().addLayer(L.circleMarker([feature.geometry.coordinates[1], feature.geometry.coordinates[0]], highlightStyle));
        }
      });
      $("#feature-list tbody").append('<tr class="feature-row" id="' + L.stamp(layer) + '" lat="' + layer.getLatLng().lat + '" lng="' + layer.getLatLng().lng + '"><td style="vertical-align: middle;"><img width="16" height="18" src="assets/img/prayer.png"></td><td class="feature-name">' + layer.feature.properties.BizName + '</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>');
      allpoiSearch.push({
        name: layer.feature.properties.BizName,
        address: layer.feature.properties.Address1,
        source: "PrimarySchools",
        id: L.stamp(layer),
        lat: layer.feature.geometry.coordinates[1],
        lng: layer.feature.geometry.coordinates[0]
      });
    }
  }
});
$.getJSON("data/Primary_Prep.geojson", function (data) {
  primary.addData(data);
});

/* Empty layer placeholder to add to layer control for listening when to add/remove Secondary to markerClusters layer */
var secondaryLayer = L.geoJson(null);
var secondary = L.geoJson(null, {
  pointToLayer: function (feature, latlng) {
    return L.marker(latlng, {
      icon: L.icon({
        iconUrl: "assets/img/secondary.png",
        iconSize: [24, 28],
        iconAnchor: [12, 28],
        popupAnchor: [0, -25]
      }),
      title: feature.properties.BizName,
      riseOnHover: true
    });
  },
  onEachFeature: function (feature, layer) {
    if (feature.properties) {
      var content = "<table class='table table-striped table-bordered table-condensed'>" + "<tr><th>Name</th><td>" + feature.properties.BizName + "</td></tr>" + "<tr><th>Box</th><td>" + feature.properties.PostalBox + "</td></tr>" + "<tr><th>Address</th><td>" + feature.properties.Address1 + "</td></tr>" + "<tr><th>Website</th><td><a class='url-break' href='" + feature.properties.Website + "' target='_blank'>" + feature.properties.Website + "</a></td></tr>" + "<table>";
      layer.on({
        click: function (e) {
          $("#feature-title").html(feature.properties.BizName);
          $("#feature-info").html(content);
          $("#featureModal").modal("show");
          highlight.clearLayers().addLayer(L.circleMarker([feature.geometry.coordinates[1], feature.geometry.coordinates[0]], highlightStyle));
        }
      });
      $("#feature-list tbody").append('<tr class="feature-row" id="' + L.stamp(layer) + '" lat="' + layer.getLatLng().lat + '" lng="' + layer.getLatLng().lng + '"><td style="vertical-align: middle;"><img width="16" height="18" src="assets/img/secondary.png"></td><td class="feature-name">' + layer.feature.properties.BizName + '</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>');
      secondarySearch.push({
        name: layer.feature.properties.BizName,
        address: layer.feature.properties.Address1,
        source: "SecondarySchools",
        id: L.stamp(layer),
        lat: layer.feature.geometry.coordinates[1],
        lng: layer.feature.geometry.coordinates[0]
      });
    }
  }
});
$.getJSON("data/Secondary_Schools.geojson", function (data) {
  secondary.addData(data);
});

/* Empty layer placeholder to add to layer control for listening when to add/remove colleges to markerClusters layer */
var collegeLayer = L.geoJson(null);
var college = L.geoJson(null, {
  pointToLayer: function (feature, latlng) {
    return L.marker(latlng, {
      icon: L.icon({
        iconUrl: "assets/img/colleges.png",
        iconSize: [24, 28],
        iconAnchor: [12, 28],
        popupAnchor: [0, -25]
      }),
      title: feature.properties.BizName,
      riseOnHover: true
    });
  },
  onEachFeature: function (feature, layer) {
    if (feature.properties) {
      var content = "<table class='table table-striped table-bordered table-condensed'>" + "<tr><th>Name</th><td>" + feature.properties.BizName + "</td></tr>" + "<tr><th>Box</th><td>" + feature.properties.PostalBox + "</td></tr>" + "<tr><th>Address</th><td>" + feature.properties.Address1 + "</td></tr>" + "<tr><th>Website</th><td><a class='url-break' href='" + feature.properties.Website + "' target='_blank'>" + feature.properties.Website + "</a></td></tr>" + "<table>";
      layer.on({
        click: function (e) {
          $("#feature-title").html(feature.properties.BizName);
          $("#feature-info").html(content);
          $("#featureModal").modal("show");
          highlight.clearLayers().addLayer(L.circleMarker([feature.geometry.coordinates[1], feature.geometry.coordinates[0]], highlightStyle));
        }
      });
      $("#feature-list tbody").append('<tr class="feature-row" id="' + L.stamp(layer) + '" lat="' + layer.getLatLng().lat + '" lng="' + layer.getLatLng().lng + '"><td style="vertical-align: middle;"><img width="16" height="18" src="assets/img/colleges.png"></td><td class="feature-name">' + layer.feature.properties.BizName + '</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>');
      collegeSearch.push({
        name: layer.feature.properties.BizName,
        address: layer.feature.properties.Address1,
        source: "InstitutesColleges",
        id: L.stamp(layer),
        lat: layer.feature.geometry.coordinates[1],
        lng: layer.feature.geometry.coordinates[0]
      });
    }
  }
});
$.getJSON("data/Institutes_Colleges.geojson", function (data) {
  college.addData(data);
});

/* Empty layer placeholder to add to layer control for listening when to add/remove universities to markerClusters layer */
var universityLayer = L.geoJson(null);
var university = L.geoJson(null, {
  pointToLayer: function (feature, latlng) {
    return L.marker(latlng, {
      icon: L.icon({
        iconUrl: "assets/img/university.png",
        iconSize: [24, 28],
        iconAnchor: [12, 28],
        popupAnchor: [0, -25]
      }),
      title: feature.properties.BizName,
      riseOnHover: true
    });
  },
  onEachFeature: function (feature, layer) {
    if (feature.properties) {
      var content = "<table class='table table-striped table-bordered table-condensed'>" + "<tr><th>Name</th><td>" + feature.properties.BizName + "</td></tr>" + "<tr><th>Box</th><td>" + feature.properties.PostalBox + "</td></tr>" + "<tr><th>Address</th><td>" + feature.properties.Address1 + "</td></tr>" + "<tr><th>Website</th><td><a class='url-break' href='" + feature.properties.Website + "' target='_blank'>" + feature.properties.Website + "</a></td></tr>" + "<table>";
      layer.on({
        click: function (e) {
          $("#feature-title").html(feature.properties.BizName);
          $("#feature-info").html(content);
          $("#featureModal").modal("show");
          highlight.clearLayers().addLayer(L.circleMarker([feature.geometry.coordinates[1], feature.geometry.coordinates[0]], highlightStyle));
        }
      });
      $("#feature-list tbody").append('<tr class="feature-row" id="' + L.stamp(layer) + '" lat="' + layer.getLatLng().lat + '" lng="' + layer.getLatLng().lng + '"><td style="vertical-align: middle;"><img width="16" height="18" src="assets/img/university.png"></td><td class="feature-name">' + layer.feature.properties.BizName + '</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>');
      universitySearch.push({
        name: layer.feature.properties.BizName,
        address: layer.feature.properties.Address1,
        source: "Universities",
        id: L.stamp(layer),
        lat: layer.feature.geometry.coordinates[1],
        lng: layer.feature.geometry.coordinates[0]
      });
    }
  }
});
$.getJSON("data/universities.geojson", function (data) {
  university.addData(data);
});

/* Empty layer placeholder to add to layer control for listening when to add/remove water access to markerClusters layer */
var waterLayer = L.geoJson(null);
var water = L.geoJson(null, {
  pointToLayer: function (feature, latlng) {
    return L.marker(latlng, {
      icon: L.icon({
        iconUrl: "assets/img/water.png",
        iconSize: [24, 28],
        iconAnchor: [12, 28],
        popupAnchor: [0, -25]
      }),
      title: feature.properties.BizName,
      riseOnHover: true
    });
  },
  onEachFeature: function (feature, layer) {
    if (feature.properties) {
      var content = "<table class='table table-striped table-bordered table-condensed'>" + "<tr><th>Name</th><td>" + feature.properties.BizName + "</td></tr>" + "<tr><th>Box</th><td>" + feature.properties.PostalBox + "</td></tr>" + "<tr><th>Address</th><td>" + feature.properties.Address1 + "</td></tr>" + "<tr><th>Website</th><td><a class='url-break' href='" + feature.properties.Website + "' target='_blank'>" + feature.properties.Website + "</a></td></tr>" + "<table>";
      layer.on({
        click: function (e) {
          $("#feature-title").html(feature.properties.BizName);
          $("#feature-info").html(content);
          $("#featureModal").modal("show");
          highlight.clearLayers().addLayer(L.circleMarker([feature.geometry.coordinates[1], feature.geometry.coordinates[0]], highlightStyle));
        }
      });
      $("#feature-list tbody").append('<tr class="feature-row" id="' + L.stamp(layer) + '" lat="' + layer.getLatLng().lat + '" lng="' + layer.getLatLng().lng + '"><td style="vertical-align: middle;"><img width="16" height="18" src="assets/img/water.png"></td><td class="feature-name">' + layer.feature.properties.BizName + '</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>');
		waterSearch.push({
        name: layer.feature.properties.BizName,
        address: layer.feature.properties.Address1,
        source: "WaterAccessPoints",
        id: L.stamp(layer),
        lat: layer.feature.geometry.coordinates[1],
        lng: layer.feature.geometry.coordinates[0]
      });
    }
  }
});
$.getJSON("data/water_access.geojson", function (data) {
  water.addData(data);
});

/* Empty layer placeholder to add to layer control for listening when to add/remove health access to markerClusters layer */
var healthLayer = L.geoJson(null);
var health = L.geoJson(null, {
  pointToLayer: function (feature, latlng) {
    return L.marker(latlng, {
      icon: L.icon({
        iconUrl: "assets/img/health.png",
        iconSize: [24, 28],
        iconAnchor: [12, 28],
        popupAnchor: [0, -25]
      }),
      title: feature.properties.BizName,
      riseOnHover: true
    });
  },
  onEachFeature: function (feature, layer) {
    if (feature.properties) {
      var content = "<table class='table table-striped table-bordered table-condensed'>" + "<tr><th>Name</th><td>" + feature.properties.BizName + "</td></tr>" + "<tr><th>Box</th><td>" + feature.properties.PostalBox + "</td></tr>" + "<tr><th>Address</th><td>" + feature.properties.Address1 + "</td></tr>" + "<tr><th>Website</th><td><a class='url-break' href='" + feature.properties.Website + "' target='_blank'>" + feature.properties.Website + "</a></td></tr>" + "<table>";
      layer.on({
        click: function (e) {
          $("#feature-title").html(feature.properties.BizName);
          $("#feature-info").html(content);
          $("#featureModal").modal("show");
          highlight.clearLayers().addLayer(L.circleMarker([feature.geometry.coordinates[1], feature.geometry.coordinates[0]], highlightStyle));
        }
      });
      $("#feature-list tbody").append('<tr class="feature-row" id="' + L.stamp(layer) + '" lat="' + layer.getLatLng().lat + '" lng="' + layer.getLatLng().lng + '"><td style="vertical-align: middle;"><img width="16" height="18" src="assets/img/health.png"></td><td class="feature-name">' + layer.feature.properties.BizName + '</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>');
		healthSearch.push({
        name: layer.feature.properties.BizName,
        address: layer.feature.properties.Address1,
        source: "HealthFacility",
        id: L.stamp(layer),
        lat: layer.feature.geometry.coordinates[1],
        lng: layer.feature.geometry.coordinates[0]
      });
    }
  }
});
$.getJSON("data/Health_facility.geojson", function (data) {
  health.addData(data);
});
	
/* Empty layer placeholder to add to layer control for listening when to add/remove leisure access to markerClusters layer */
var leisureLayer = L.geoJson(null);
var leisure = L.geoJson(null, {
  pointToLayer: function (feature, latlng) {
    return L.marker(latlng, {
      icon: L.icon({
        iconUrl: "assets/img/park.png",
        iconSize: [24, 28],
        iconAnchor: [12, 28],
        popupAnchor: [0, -25]
      }),
      title: feature.properties.BizName,
      riseOnHover: true
    });
  },
  onEachFeature: function (feature, layer) {
    if (feature.properties) {
      var content = "<table class='table table-striped table-bordered table-condensed'>" + "<tr><th>Name</th><td>" + feature.properties.BizName + "</td></tr>" + "<tr><th>Box</th><td>" + feature.properties.PostalBox + "</td></tr>" + "<tr><th>Address</th><td>" + feature.properties.Address1 + "</td></tr>" + "<tr><th>Website</th><td><a class='url-break' href='" + feature.properties.Website + "' target='_blank'>" + feature.properties.Website + "</a></td></tr>" + "<table>";
      layer.on({
        click: function (e) {
          $("#feature-title").html(feature.properties.BizName);
          $("#feature-info").html(content);
          $("#featureModal").modal("show");
          highlight.clearLayers().addLayer(L.circleMarker([feature.geometry.coordinates[1], feature.geometry.coordinates[0]], highlightStyle));
        }
      });
      $("#feature-list tbody").append('<tr class="feature-row" id="' + L.stamp(layer) + '" lat="' + layer.getLatLng().lat + '" lng="' + layer.getLatLng().lng + '"><td style="vertical-align: middle;"><img width="16" height="18" src="assets/img/park.png"></td><td class="feature-name">' + layer.feature.properties.BizName + '</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>');
		leisureSearch.push({
        name: layer.feature.properties.BizName,
        address: layer.feature.properties.Address1,
        source: "LeisurePark",
        id: L.stamp(layer),
        lat: layer.feature.geometry.coordinates[1],
        lng: layer.feature.geometry.coordinates[0]
      });
    }
  }
});
$.getJSON("data/community_centres.geojson", function (data) {
  leisure.addData(data);
});
/* Empty layer placeholder to add to layer control for listening when to add/remove fuel access to markerClusters layer */
var fuelLayer = L.geoJson(null);
var fuel = L.geoJson(null, {
  pointToLayer: function (feature, latlng) {
    return L.marker(latlng, {
      icon: L.icon({
        iconUrl: "assets/img/fuel.png",
        iconSize: [24, 28],
        iconAnchor: [12, 28],
        popupAnchor: [0, -25]
      }),
      title: feature.properties.BizName,
      riseOnHover: true
    });
  },
  onEachFeature: function (feature, layer) {
    if (feature.properties) {
      var content = "<table class='table table-striped table-bordered table-condensed'>" + "<tr><th>Name</th><td>" + feature.properties.BizName + "</td></tr>" + "<tr><th>Box</th><td>" + feature.properties.PostalBox + "</td></tr>" + "<tr><th>Address</th><td>" + feature.properties.Address1 + "</td></tr>" + "<tr><th>Website</th><td><a class='url-break' href='" + feature.properties.Website + "' target='_blank'>" + feature.properties.Website + "</a></td></tr>" + "<table>";
      layer.on({
        click: function (e) {
          $("#feature-title").html(feature.properties.BizName);
          $("#feature-info").html(content);
          $("#featureModal").modal("show");
          highlight.clearLayers().addLayer(L.circleMarker([feature.geometry.coordinates[1], feature.geometry.coordinates[0]], highlightStyle));
        }
      });
      $("#feature-list tbody").append('<tr class="feature-row" id="' + L.stamp(layer) + '" lat="' + layer.getLatLng().lat + '" lng="' + layer.getLatLng().lng + '"><td style="vertical-align: middle;"><img width="16" height="18" src="assets/img/fuel.png"></td><td class="feature-name">' + layer.feature.properties.BizName + '</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>');
		fuelSearch.push({
        name: layer.feature.properties.BizName,
        address: layer.feature.properties.Address1,
        source: "FuelStation",
        id: L.stamp(layer),
        lat: layer.feature.geometry.coordinates[1],
        lng: layer.feature.geometry.coordinates[0]
      });
    }
  }
});
$.getJSON("data/fuel_stations.geojson", function (data) {
  fuel.addData(data);
});
/* Empty layer placeholder to add to layer control for listening when to add/remove market access to markerClusters layer */
var marketLayer = L.geoJson(null);
var market = L.geoJson(null, {
  pointToLayer: function (feature, latlng) {
    return L.marker(latlng, {
      icon: L.icon({
        iconUrl: "assets/img/fuel.png",
        iconSize: [24, 28],
        iconAnchor: [12, 28],
        popupAnchor: [0, -25]
      }),
      title: feature.properties.BizName,
      riseOnHover: true
    });
  },
  onEachFeature: function (feature, layer) {
    if (feature.properties) {
      var content = "<table class='table table-striped table-bordered table-condensed'>" + "<tr><th>Name</th><td>" + feature.properties.BizName + "</td></tr>" + "<tr><th>Box</th><td>" + feature.properties.PostalBox + "</td></tr>" + "<tr><th>Address</th><td>" + feature.properties.Address1 + "</td></tr>" + "<tr><th>Website</th><td><a class='url-break' href='" + feature.properties.Website + "' target='_blank'>" + feature.properties.Website + "</a></td></tr>" + "<table>";
      layer.on({
        click: function (e) {
          $("#feature-title").html(feature.properties.BizName);
          $("#feature-info").html(content);
          $("#featureModal").modal("show");
          highlight.clearLayers().addLayer(L.circleMarker([feature.geometry.coordinates[1], feature.geometry.coordinates[0]], highlightStyle));
        }
      });
      $("#feature-list tbody").append('<tr class="feature-row" id="' + L.stamp(layer) + '" lat="' + layer.getLatLng().lat + '" lng="' + layer.getLatLng().lng + '"><td style="vertical-align: middle;"><img width="16" height="18" src="assets/img/market.png"></td><td class="feature-name">' + layer.feature.properties.BizName + '</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>');
		marketSearch.push({
        name: layer.feature.properties.BizName,
        address: layer.feature.properties.Address1,
        source: "Markets",
        id: L.stamp(layer),
        lat: layer.feature.geometry.coordinates[1],
        lng: layer.feature.geometry.coordinates[0]
      });
    }
  }
});
$.getJSON("data/public_markets.geojson", function (data) {
  market.addData(data);
});
/* Empty layer placeholder to add to layer control for listening when to add/remove police access to markerClusters layer */
var policeLayer = L.geoJson(null);
var police = L.geoJson(null, {
  pointToLayer: function (feature, latlng) {
    return L.marker(latlng, {
      icon: L.icon({
        iconUrl: "assets/img/fuel.png",
        iconSize: [24, 28],
        iconAnchor: [12, 28],
        popupAnchor: [0, -25]
      }),
      title: feature.properties.BizName,
      riseOnHover: true
    });
  },
  onEachFeature: function (feature, layer) {
    if (feature.properties) {
      var content = "<table class='table table-striped table-bordered table-condensed'>" + "<tr><th>Name</th><td>" + feature.properties.BizName + "</td></tr>" + "<tr><th>Box</th><td>" + feature.properties.PostalBox + "</td></tr>" + "<tr><th>Address</th><td>" + feature.properties.Address1 + "</td></tr>" + "<tr><th>Website</th><td><a class='url-break' href='" + feature.properties.Website + "' target='_blank'>" + feature.properties.Website + "</a></td></tr>" + "<table>";
      layer.on({
        click: function (e) {
          $("#feature-title").html(feature.properties.BizName);
          $("#feature-info").html(content);
          $("#featureModal").modal("show");
          highlight.clearLayers().addLayer(L.circleMarker([feature.geometry.coordinates[1], feature.geometry.coordinates[0]], highlightStyle));
        }
      });
      $("#feature-list tbody").append('<tr class="feature-row" id="' + L.stamp(layer) + '" lat="' + layer.getLatLng().lat + '" lng="' + layer.getLatLng().lng + '"><td style="vertical-align: middle;"><img width="16" height="18" src="assets/img/police.png"></td><td class="feature-name">' + layer.feature.properties.BizName + '</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>');
		policeSearch.push({
        name: layer.feature.properties.BizName,
        address: layer.feature.properties.Address1,
        source: "PolicePosts",
        id: L.stamp(layer),
        lat: layer.feature.geometry.coordinates[1],
        lng: layer.feature.geometry.coordinates[0]
      });
    }
  }
});
$.getJSON("data/Police.geojson", function (data) {
  police.addData(data);
});

/* Empty layer placeholder to add to layer control for listening when to add/remove restaurant access to markerClusters layer */
var restaurantLayer = L.geoJson(null);
var restaurant = L.geoJson(null, {
  pointToLayer: function (feature, latlng) {
    return L.marker(latlng, {
      icon: L.icon({
        iconUrl: "assets/img/restaurant.png",
        iconSize: [24, 28],
        iconAnchor: [12, 28],
        popupAnchor: [0, -25]
      }),
      title: feature.properties.BizName,
      riseOnHover: true
    });
  },
  onEachFeature: function (feature, layer) {
    if (feature.properties) {
      var content = "<table class='table table-striped table-bordered table-condensed'>" + "<tr><th>Name</th><td>" + feature.properties.BizName + "</td></tr>" + "<tr><th>Box</th><td>" + feature.properties.PostalBox + "</td></tr>" + "<tr><th>Address</th><td>" + feature.properties.Address1 + "</td></tr>" + "<tr><th>Website</th><td><a class='url-break' href='" + feature.properties.Website + "' target='_blank'>" + feature.properties.Website + "</a></td></tr>" + "<table>";
      layer.on({
        click: function (e) {
          $("#feature-title").html(feature.properties.BizName);
          $("#feature-info").html(content);
          $("#featureModal").modal("show");
          highlight.clearLayers().addLayer(L.circleMarker([feature.geometry.coordinates[1], feature.geometry.coordinates[0]], highlightStyle));
        }
      });
      $("#feature-list tbody").append('<tr class="feature-row" id="' + L.stamp(layer) + '" lat="' + layer.getLatLng().lat + '" lng="' + layer.getLatLng().lng + '"><td style="vertical-align: middle;"><img width="16" height="18" src="assets/img/restaurant.png"></td><td class="feature-name">' + layer.feature.properties.BizName + '</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>');
		restaurantSearch.push({
        name: layer.feature.properties.BizName,
        address: layer.feature.properties.Address1,
        source: "Restaurant",
        id: L.stamp(layer),
        lat: layer.feature.geometry.coordinates[1],
        lng: layer.feature.geometry.coordinates[0]
      });
    }
  }
});
$.getJSON("data/Restaurants.geojson", function (data) {
  restaurant.addData(data);
});

/* Empty layer placeholder to add to layer control for listening when to add/remove hotel access to markerClusters layer */
var hotelLayer = L.geoJson(null);
var hotel = L.geoJson(null, {
  pointToLayer: function (feature, latlng) {
    return L.marker(latlng, {
      icon: L.icon({
        iconUrl: "assets/img/hotel.png",
        iconSize: [24, 28],
        iconAnchor: [12, 28],
        popupAnchor: [0, -25]
      }),
      title: feature.properties.BizName,
      riseOnHover: true
    });
  },
  onEachFeature: function (feature, layer) {
    if (feature.properties) {
      var content = "<table class='table table-striped table-bordered table-condensed'>" + "<tr><th>Name</th><td>" + feature.properties.BizName + "</td></tr>" + "<tr><th>Box</th><td>" + feature.properties.PostalBox + "</td></tr>" + "<tr><th>Address</th><td>" + feature.properties.Address1 + "</td></tr>" + "<tr><th>Website</th><td><a class='url-break' href='" + feature.properties.Website + "' target='_blank'>" + feature.properties.Website + "</a></td></tr>" + "<table>";
      layer.on({
        click: function (e) {
          $("#feature-title").html(feature.properties.BizName);
          $("#feature-info").html(content);
          $("#featureModal").modal("show");
          highlight.clearLayers().addLayer(L.circleMarker([feature.geometry.coordinates[1], feature.geometry.coordinates[0]], highlightStyle));
        }
      });
      $("#feature-list tbody").append('<tr class="feature-row" id="' + L.stamp(layer) + '" lat="' + layer.getLatLng().lat + '" lng="' + layer.getLatLng().lng + '"><td style="vertical-align: middle;"><img width="16" height="18" src="assets/img/hotel.png"></td><td class="feature-name">' + layer.feature.properties.BizName + '</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>');
		hotelSearch.push({
        name: layer.feature.properties.BizName,
        address: layer.feature.properties.Address1,
        source: "Hotel",
        id: L.stamp(layer),
        lat: layer.feature.geometry.coordinates[1],
        lng: layer.feature.geometry.coordinates[0]
      });
    }
  }
});
$.getJSON("data/Hotels.geojson", function (data) {
  hotel.addData(data);
});









/* GENERAL ABOUT THE WEBMAP ON LOAD*/
map = L.map("map", {
  zoom: 14,
  /*center: [40.702222, -73.979378],*/ /* NewYork*/
  center: [3.015643, 30.913635], /*OPM - Arua*/
  layers: [cartoLight, boroughs, markerClusters, highlight],
  /*layers: [cartoLight, boroughs],*/
  zoomControl: false,
  attributionControl: false
});


/* Layer control listeners that allow for a single markerClusters layer / Checkbon on/off*/
map.on("overlayadd", function(e) {
  if (e.layer === theaterLayer) {
    markerClusters.addLayer(theaters);
    syncSidebar();
  }
  if (e.layer === museumLayer) {
    markerClusters.addLayer(museums);
    syncSidebar();
  }
  if (e.layer === allpoiLayer) {
    markerClusters.addLayer(allpoi);
    syncSidebar();
  }
  if (e.layer === prayerLayer) {
    markerClusters.addLayer(prayer);
    syncSidebar();
  }
  if (e.layer === primaryLayer) {
    markerClusters.addLayer(primary);
    syncSidebar();
  }
  if (e.layer === secondaryLayer) {
    markerClusters.addLayer(secondary);
    syncSidebar();
  }

  if (e.layer === collegeLayer) {
    markerClusters.addLayer(college);
    syncSidebar();
  }
  if (e.layer === universityLayer) {
    markerClusters.addLayer(university);
    syncSidebar();
  }
   if (e.layer === waterLayer) {
    markerClusters.addLayer(water);
    syncSidebar();
  }
   if (e.layer === healthLayer) {
    markerClusters.addLayer(health);
    syncSidebar();
  }
  if (e.layer === leisureLayer) {
    markerClusters.addLayer(leisure);
    syncSidebar();
  }
  if (e.layer === fuelLayer) {
    markerClusters.addLayer(fuel);
    syncSidebar();
  }
  if (e.layer === marketLayer) {
    markerClusters.addLayer(market);
    syncSidebar();
  }
  if (e.layer === policeLayer) {
    markerClusters.addLayer(police);
    syncSidebar();
  }
  if (e.layer === restaurantLayer) {
    markerClusters.addLayer(restaurant);
    syncSidebar();
  }
  if (e.layer === hotelLayer) {
    markerClusters.addLayer(hotel);
    syncSidebar();
  }
  
 
  
  
});



map.on("overlayremove", function(e) {
  if (e.layer === theaterLayer) {
    markerClusters.removeLayer(theaters);
    syncSidebar();
  }
  if (e.layer === museumLayer) {
    markerClusters.removeLayer(museums);
    syncSidebar();
  }
  if (e.layer === allpoiLayer) {
    markerClusters.removeLayer(allpoi);
    syncSidebar();
  }
  if (e.layer === prayerLayer) {
    markerClusters.removeLayer(prayer);
    syncSidebar();
  }
  if (e.layer === primaryLayer) {
    markerClusters.removeLayer(primary);
    syncSidebar();
  }
  if (e.layer === secondaryLayer) {
    markerClusters.removeLayer(secondary);
    syncSidebar();
  }

  if (e.layer === collegeLayer) {
    markerClusters.removeLayer(college);
    syncSidebar();
  }  
  if (e.layer === universityLayer) {
    markerClusters.removeLayer(university);
    syncSidebar();
  } 
   if (e.layer === waterLayer) {
    markerClusters.removeLayer(water);
    syncSidebar();
  } 
  if (e.layer === healthLayer) {
    markerClusters.removeLayer(health);
    syncSidebar();
  }
  if (e.layer === leisureLayer) {
    markerClusters.removeLayer(leisure);
    syncSidebar();
  }
  if (e.layer === fuelLayer) {
    markerClusters.removeLayer(fuel);
    syncSidebar();
  }
  if (e.layer === marketLayer) {
    markerClusters.removeLayer(market);
    syncSidebar();
  }
  if (e.layer === policeLayer) {
    markerClusters.removeLayer(police);
    syncSidebar();
  }
  if (e.layer === restaurantLayer) {
    markerClusters.removeLayer(restaurant);
    syncSidebar();
  }
  if (e.layer === hotelLayer) {
    markerClusters.removeLayer(hotel);
    syncSidebar();
  }
  
  
  
  
  
  
});

/* Filter sidebar feature list to only show features in current map bounds */
map.on("moveend", function (e) {
  syncSidebar();
});

/* Clear feature highlight when map is clicked */
map.on("click", function(e) {
  highlight.clearLayers();
});

/* Attribution control */
function updateAttribution(e) {
  $.each(map._layers, function(index, layer) {
    if (layer.getAttribution) {
      $("#attribution").html((layer.getAttribution()));
    }
  });
}
map.on("layeradd", updateAttribution);
map.on("layerremove", updateAttribution);

var attributionControl = L.control({
  position: "bottomright"
});
attributionControl.onAdd = function (map) {
  var div = L.DomUtil.create("div", "leaflet-control-attribution");
  div.innerHTML = "<span class='hidden-xs'>Developed by; <a href='http://www.gsrslab.online' rel='noopener noreferrer' target='_blank' >Geospatial Systems & Remote Sensing Lab</a> | </span><a href='#' onclick='$(\"#attributionModal\").modal(\"show\"); return false;'>Attribution</a>";
  return div;
};
map.addControl(attributionControl);

var zoomControl = L.control.zoom({
  position: "bottomright"
}).addTo(map);




/* GPS enabled geolocation control set to follow the user's location */
var locateControl = L.control.locate({
  position: "bottomright",
  drawCircle: true,
  follow: true,
  setView: true,
  keepCurrentZoomLevel: true,
  markerStyle: {
    weight: 1,
    opacity: 0.8,
    fillOpacity: 0.8
  },
  circleStyle: {
    weight: 1,
    clickable: false
  },
  icon: "fa fa-location-arrow",
  metric: false,
  strings: {
    title: "My location",
    popup: "You are within {distance} {unit} from this point",
    outsideMapBoundsMsg: "You seem located outside the boundaries of the map"
  },
  locateOptions: {
    maxZoom: 18,
    watch: true,
    enableHighAccuracy: true,
    maximumAge: 10000,
    timeout: 10000
  }
}).addTo(map);


/*
var control = L.Routing.control({
  waypoints: [
    L.latLng(38.7436056, -9.2304153),
    L.latLng(38.5334477, -0.1312811)
  ],
  router: new L.Routing.osrmv1({
    language: 'en',
    profile: 'car'
  }),
  geocoder: L.Control.Geocoder.nominatim({})
}).addTo(mymap);

*/

/* Larger screens get expanded layer control and visible sidebar */
if (document.body.clientWidth <= 767) {
  var isCollapsed = true;
} else {
  var isCollapsed = false;
}

var baseLayers = {
 
  "Street Map": cartoLight,
  "Aerial Imagery": usgsImagery
	
 };

var groupedOverlays = {
  
  "Features of Interest (FOIs)": {
    "<img src='assets/img/prayer.png' width='24' height='28'>&nbsp;Prayer Centres": prayerLayer,
	"<img src='assets/img/primary.png' width='24' height='28'>&nbsp;Pre- & Primary Schools": primaryLayer,
	"<img src='assets/img/secondary.png' width='24' height='28'>&nbsp;Secondary Schools": secondaryLayer,
	"<img src='assets/img/colleges.png' width='24' height='28'>&nbsp;Institutes and Colleges": collegeLayer,
	"<img src='assets/img/university.png' width='24' height='28'>&nbsp;Universities": universityLayer,
	"<img src='assets/img/water.png' width='24' height='28'>&nbsp;Water Access Points": waterLayer,
	"<img src='assets/img/health.png' width='24' height='28'>&nbsp;Health Facilities": healthLayer,
	"<img src='assets/img/park.png' width='24' height='28'>&nbsp;Leisure Parks": leisureLayer,
	"<img src='assets/img/fuel.png' width='24' height='28'>&nbsp;Fuel Stations": fuelLayer,
	"<img src='assets/img/market.png' width='24' height='28'>&nbsp;Markets": marketLayer,
	"<img src='assets/img/police.png' width='24' height='28'>&nbsp;Police Posts": policeLayer,
	"<img src='assets/img/restaurant.png' width='24' height='28'>&nbsp;Restaurants": restaurantLayer,
	"<img src='assets/img/hotel.png' width='24' height='28'>&nbsp;Hotels and Accommodation": hotelLayer,
	
	
	
	
    "<img src='assets/img/allpoi.png' width='24' height='28'>&nbsp;All FOIs": allpoiLayer
	
  },
  "Reference Maps": {
    "Boundary": boroughs,
    "Utility Lines": utilityLines
  },
  "Sample Maps (New York)": {
    "Train Lines": subwayLines,
	"<img src='assets/img/theater.png' width='24' height='28'>&nbsp;Theaters": theaterLayer,
    "<img src='assets/img/museum.png' width='24' height='28'>&nbsp;Museums": museumLayer
  },
};

var layerControl = L.control.groupedLayers(baseLayers, groupedOverlays, {
  collapsed: isCollapsed
}).addTo(map);

/* Highlight search box text on click */
$("#searchbox").click(function () {
  $(this).select();
});

/* Prevent hitting enter from refreshing the page */
$("#searchbox").keypress(function (e) {
  if (e.which == 13) {
    e.preventDefault();
  }
});

$("#featureModal").on("hidden.bs.modal", function (e) {
  $(document).on("mouseout", ".feature-row", clearHighlight);
});

/* Typeahead search functionality */
$(document).one("ajaxStop", function () {
  $("#loading").hide();
  sizeLayerControl();
  /* Fit map to boroughs bounds */
  map.fitBounds(boroughs.getBounds());
  featureList = new List("features", {valueNames: ["feature-name"]});
  featureList.sort("feature-name", {order:"asc"});

  var boroughsBH = new Bloodhound({
    name: "Boundary",
    datumTokenizer: function (d) {
      return Bloodhound.tokenizers.whitespace(d.name);
    },
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    local: boroughSearch,
    limit: 10
  });

  var theatersBH = new Bloodhound({
    name: "Theaters",
    datumTokenizer: function (d) {
      return Bloodhound.tokenizers.whitespace(d.name);
    },
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    local: theaterSearch,
    limit: 10
  });

  var museumsBH = new Bloodhound({
    name: "Museums",
    datumTokenizer: function (d) {
      return Bloodhound.tokenizers.whitespace(d.name);
    },
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    local: museumSearch,
    limit: 10
  });
  
  var allpoiBH = new Bloodhound({
    name: "Allpois",
    datumTokenizer: function (d) {
      return Bloodhound.tokenizers.whitespace(d.name);
    },
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    local: allpoiSearch,
    limit: 10
  });
  var prayerBH = new Bloodhound({
    name: "PrayerCentres",
    datumTokenizer: function (d) {
      return Bloodhound.tokenizers.whitespace(d.name);
    },
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    local: prayerSearch,
    limit: 10
  });
  var primaryBH = new Bloodhound({
    name: "PrimarySchools",
    datumTokenizer: function (d) {
      return Bloodhound.tokenizers.whitespace(d.name);
    },
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    local: primarySearch,
    limit: 10
  });
    var secondaryBH = new Bloodhound({
    name: "SecondarySchools",
    datumTokenizer: function (d) {
      return Bloodhound.tokenizers.whitespace(d.name);
    },
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    local: secondarySearch,
    limit: 10
  });
    var collegeBH = new Bloodhound({
    name: "InstitutesColleges",
    datumTokenizer: function (d) {
      return Bloodhound.tokenizers.whitespace(d.name);
    },
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    local: collegeSearch,
    limit: 10
  });
     var universityBH = new Bloodhound({
    name: "Universities",
    datumTokenizer: function (d) {
      return Bloodhound.tokenizers.whitespace(d.name);
    },
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    local: universitySearch,
    limit: 10
  });
	var waterBH = new Bloodhound({
    name: "WaterAccessPoints",
    datumTokenizer: function (d) {
      return Bloodhound.tokenizers.whitespace(d.name);
    },
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    local: waterSearch,
    limit: 10
  });
    var healthBH = new Bloodhound({
    name: "HealthFacility",
    datumTokenizer: function (d) {
      return Bloodhound.tokenizers.whitespace(d.name);
    },
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    local: healthSearch,
    limit: 10
  }); 
	var leisureBH = new Bloodhound({
    name: "LeisurePark",
    datumTokenizer: function (d) {
      return Bloodhound.tokenizers.whitespace(d.name);
    },
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    local: leisureSearch,
    limit: 10
  });
	var fuelBH = new Bloodhound({
    name: "FuelStation",
    datumTokenizer: function (d) {
      return Bloodhound.tokenizers.whitespace(d.name);
    },
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    local: fuelSearch,
    limit: 10
  });
	var marketBH = new Bloodhound({
    name: "Markets",
    datumTokenizer: function (d) {
      return Bloodhound.tokenizers.whitespace(d.name);
    },
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    local: marketSearch,
    limit: 10
  });
	var policeBH = new Bloodhound({
    name: "PolicePosts",
    datumTokenizer: function (d) {
      return Bloodhound.tokenizers.whitespace(d.name);
    },
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    local: policeSearch,
    limit: 10
  });
	var restaurantBH = new Bloodhound({
    name: "Restaurant",
    datumTokenizer: function (d) {
      return Bloodhound.tokenizers.whitespace(d.name);
    },
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    local: restaurantSearch,
    limit: 10
  });
	var hotelBH = new Bloodhound({
    name: "Hotel",
    datumTokenizer: function (d) {
      return Bloodhound.tokenizers.whitespace(d.name);
    },
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    local: hotelSearch,
    limit: 10
  });
  
  
  
  
  
  
  
  
  

  var geonamesBH = new Bloodhound({
    name: "GeoNames",
    datumTokenizer: function (d) {
      return Bloodhound.tokenizers.whitespace(d.name);
    },
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    remote: {
      url: "http://api.geonames.org/searchJSON?username=bootleaf&featureClass=P&maxRows=5&countryCode=US&name_startsWith=%QUERY",
      filter: function (data) {
        return $.map(data.geonames, function (result) {
          return {
            name: result.name + ", " + result.adminCode1,
            lat: result.lat,
            lng: result.lng,
            source: "GeoNames"
          };
        });
      },
      ajax: {
        beforeSend: function (jqXhr, settings) {
          settings.url += "&east=" + map.getBounds().getEast() + "&west=" + map.getBounds().getWest() + "&north=" + map.getBounds().getNorth() + "&south=" + map.getBounds().getSouth();
          $("#searchicon").removeClass("fa-search").addClass("fa-refresh fa-spin");
        },
        complete: function (jqXHR, status) {
          $('#searchicon').removeClass("fa-refresh fa-spin").addClass("fa-search");
        }
      }
    },
    limit: 10
  });
  boroughsBH.initialize();
  theatersBH.initialize();
  museumsBH.initialize();
  allpoiBH.initialize();
  prayerBH.initialize();
  primaryBH.initialize();
  secondaryBH.initialize();
  collegeBH.initialize();
  universityBH.initialize();
  waterBH.initialize();
  healthBH.initialize();
  leisureBH.initialize();
  fuelBH.initialize();
  marketBH.initialize();
  policeBH.initialize();
  restaurantBH.initialize();
  hotelBH.initialize();

  
  
  
  
  
  
  
  geonamesBH.initialize();

  /* instantiate the typeahead UI */
  $("#searchbox").typeahead({
    minLength: 3,
    highlight: true,
    hint: false
  }, {
    name: "Boundary",
    displayKey: "name",
    source: boroughsBH.ttAdapter(),
    templates: {
      header: "<h4 class='typeahead-header'>Boundary</h4>"
    }
  }, {
    name: "Theaters",
    displayKey: "name",
    source: theatersBH.ttAdapter(),
    templates: {
      header: "<h4 class='typeahead-header'><img src='assets/img/theater.png' width='24' height='28'>&nbsp;Theaters</h4>",
      suggestion: Handlebars.compile(["{{name}}<br>&nbsp;<small>{{address}}</small>"].join(""))
    }
  }, {
    name: "Museums",
    displayKey: "name",
    source: museumsBH.ttAdapter(),
    templates: {
      header: "<h4 class='typeahead-header'><img src='assets/img/museum.png' width='24' height='28'>&nbsp;Museums</h4>",
      suggestion: Handlebars.compile(["{{name}}<br>&nbsp;<small>{{address}}</small>"].join(""))
    }
  }, {
	name: "Allpois",
    displayKey: "name",
    source: allpoiBH.ttAdapter(),
    templates: {
      header: "<h4 class='typeahead-header'><img src='assets/img/allpoi.png' width='24' height='28'>&nbsp;Allpois</h4>",
      suggestion: Handlebars.compile(["{{name}}<br>&nbsp;<small>{{address}}</small>"].join(""))
    }
  }, {
	name: "PrayerCentres",
    displayKey: "name",
    source: allpoiBH.ttAdapter(),
    templates: {
      header: "<h4 class='typeahead-header'><img src='assets/img/prayer.png' width='24' height='28'>&nbsp;Prayer Centres</h4>",
      suggestion: Handlebars.compile(["{{name}}<br>&nbsp;<small>{{address}}</small>"].join(""))
    }
  }, {  
	name: "PrimarySchools",
    displayKey: "name",
    source: primaryBH.ttAdapter(),
    templates: {
      header: "<h4 class='typeahead-header'><img src='assets/img/primary.png' width='24' height='28'>&nbsp;Pre- & Primary Schools</h4>",
      suggestion: Handlebars.compile(["{{name}}<br>&nbsp;<small>{{address}}</small>"].join(""))
    }
  }, {   
	name: "SecondarySchools",
    displayKey: "name",
    source: secondaryBH.ttAdapter(),
    templates: {
      header: "<h4 class='typeahead-header'><img src='assets/img/secondary.png' width='24' height='28'>&nbsp;Secondary Schools</h4>",
      suggestion: Handlebars.compile(["{{name}}<br>&nbsp;<small>{{address}}</small>"].join(""))
    }
  }, {   
	name: "InstitutesColleges",
    displayKey: "name",
    source: collegeBH.ttAdapter(),
    templates: {
      header: "<h4 class='typeahead-header'><img src='assets/img/colleges.png' width='24' height='28'>&nbsp;Institutes and Colleges</h4>",
      suggestion: Handlebars.compile(["{{name}}<br>&nbsp;<small>{{address}}</small>"].join(""))
    }
  }, {   
	name: "Universities",
    displayKey: "name",
    source: universityBH.ttAdapter(),
    templates: {
      header: "<h4 class='typeahead-header'><img src='assets/img/university.png' width='24' height='28'>&nbsp;Universities</h4>",
      suggestion: Handlebars.compile(["{{name}}<br>&nbsp;<small>{{address}}</small>"].join(""))
    }
  }, {   
	name: "WaterAccessPoints",
    displayKey: "name",
    source: waterBH.ttAdapter(),
    templates: {
      header: "<h4 class='typeahead-header'><img src='assets/img/water.png' width='24' height='28'>&nbsp;Water access Points</h4>",
      suggestion: Handlebars.compile(["{{name}}<br>&nbsp;<small>{{address}}</small>"].join(""))
    }
  }, {   
	name: "HealthFacility",
    displayKey: "name",
    source: healthBH.ttAdapter(),
    templates: {
      header: "<h4 class='typeahead-header'><img src='assets/img/health.png' width='24' height='28'>&nbsp;Health Facilities</h4>",
      suggestion: Handlebars.compile(["{{name}}<br>&nbsp;<small>{{address}}</small>"].join(""))
    }
  }, {   
	name: "LeisurePark",
    displayKey: "name",
    source: healthBH.ttAdapter(),
    templates: {
      header: "<h4 class='typeahead-header'><img src='assets/img/park.png' width='24' height='28'>&nbsp;Leisure Parks</h4>",
      suggestion: Handlebars.compile(["{{name}}<br>&nbsp;<small>{{address}}</small>"].join(""))
    }
  }, {   
	name: "FuelStation",
    displayKey: "name",
    source: fuelBH.ttAdapter(),
    templates: {
      header: "<h4 class='typeahead-header'><img src='assets/img/fuel.png' width='24' height='28'>&nbsp;Fuel Stations</h4>",
      suggestion: Handlebars.compile(["{{name}}<br>&nbsp;<small>{{address}}</small>"].join(""))
    }
  }, {   
	name: "Markets",
    displayKey: "name",
    source: marketBH.ttAdapter(),
    templates: {
      header: "<h4 class='typeahead-header'><img src='assets/img/market.png' width='24' height='28'>&nbsp;Markets</h4>",
      suggestion: Handlebars.compile(["{{name}}<br>&nbsp;<small>{{address}}</small>"].join(""))
    }
  }, {   
	name: "PolicePosts",
    displayKey: "name",
    source: policeBH.ttAdapter(),
    templates: {
      header: "<h4 class='typeahead-header'><img src='assets/img/police.png' width='24' height='28'>&nbsp;Police Posts</h4>",
      suggestion: Handlebars.compile(["{{name}}<br>&nbsp;<small>{{address}}</small>"].join(""))
    }
  }, {   
	name: "Restaurant",
    displayKey: "name",
    source: restaurantBH.ttAdapter(),
    templates: {
      header: "<h4 class='typeahead-header'><img src='assets/img/restaurant.png' width='24' height='28'>&nbsp;Restaurant</h4>",
      suggestion: Handlebars.compile(["{{name}}<br>&nbsp;<small>{{address}}</small>"].join(""))
    }
  }, {   
	name: "Hotel",
    displayKey: "name",
    source: hotelBH.ttAdapter(),
    templates: {
      header: "<h4 class='typeahead-header'><img src='assets/img/hotel.png' width='24' height='28'>&nbsp;Hotels and Accommodation</h4>",
      suggestion: Handlebars.compile(["{{name}}<br>&nbsp;<small>{{address}}</small>"].join(""))
    }
  },
  
	
  
  
  
  
  
  
  
  
  
  
  
  
  
      {	  
    name: "GeoNames",
    displayKey: "name",
    source: geonamesBH.ttAdapter(),
    templates: {
      header: "<h4 class='typeahead-header'><img src='assets/img/globe.png' width='25' height='25'>&nbsp;GeoNames</h4>"
    }
  }).on("typeahead:selected", function (obj, datum) {
    if (datum.source === "Boundary") {
      map.fitBounds(datum.bounds);
    }
    if (datum.source === "Theaters") {
      if (!map.hasLayer(theaterLayer)) {
        map.addLayer(theaterLayer);
      }
      map.setView([datum.lat, datum.lng], 17);
      if (map._layers[datum.id]) {
        map._layers[datum.id].fire("click");
      }
    }
    if (datum.source === "Museums") {
      if (!map.hasLayer(museumLayer)) {
        map.addLayer(museumLayer);
      }
      map.setView([datum.lat, datum.lng], 17);
      if (map._layers[datum.id]) {
        map._layers[datum.id].fire("click");
      }
    }
	if (datum.source === "Allpois") {
      if (!map.hasLayer(allpoiLayer)) {
        map.addLayer(allpoiLayer);
      }
      map.setView([datum.lat, datum.lng], 17);
      if (map._layers[datum.id]) {
        map._layers[datum.id].fire("click");
      }
    }
	if (datum.source === "PrayerCentres") {
      if (!map.hasLayer(prayerLayer)) {
        map.addLayer(prayerLayer);
      }
      map.setView([datum.lat, datum.lng], 17);
      if (map._layers[datum.id]) {
        map._layers[datum.id].fire("click");
      }
    }
	if (datum.source === "PrimarySchools") {
      if (!map.hasLayer(primaryLayer)) {
        map.addLayer(primaryLayer);
      }
      map.setView([datum.lat, datum.lng], 17);
      if (map._layers[datum.id]) {
        map._layers[datum.id].fire("click");
      }
    }
	if (datum.source === "SecondarySchools") {
      if (!map.hasLayer(secondaryLayer)) {
        map.addLayer(secondaryLayer);
      }
      map.setView([datum.lat, datum.lng], 17);
      if (map._layers[datum.id]) {
        map._layers[datum.id].fire("click");
      }
    }
	if (datum.source === "InstitutesColleges") {
      if (!map.hasLayer(collegeLayer)) {
        map.addLayer(collegeLayer);
      }
      map.setView([datum.lat, datum.lng], 17);
      if (map._layers[datum.id]) {
        map._layers[datum.id].fire("click");
      }
    }
	if (datum.source === "Universities") {
      if (!map.hasLayer(universityLayer)) {
        map.addLayer(universityLayer);
      }
      map.setView([datum.lat, datum.lng], 17);
      if (map._layers[datum.id]) {
        map._layers[datum.id].fire("click");
      }
    }
	if (datum.source === "WaterAccessPoints") {
      if (!map.hasLayer(waterLayer)) {
        map.addLayer(waterLayer);
      }
      map.setView([datum.lat, datum.lng], 17);
      if (map._layers[datum.id]) {
        map._layers[datum.id].fire("click");
      }
    }
	if (datum.source === "HealthFacility") {
      if (!map.hasLayer(healthLayer)) {
        map.addLayer(healthLayer);
      }
      map.setView([datum.lat, datum.lng], 17);
      if (map._layers[datum.id]) {
        map._layers[datum.id].fire("click");
      }
    }
	if (datum.source === "LeisurePark") {
      if (!map.hasLayer(leisureLayer)) {
        map.addLayer(leisureLayer);
      }
      map.setView([datum.lat, datum.lng], 17);
      if (map._layers[datum.id]) {
        map._layers[datum.id].fire("click");
      }
    }
	if (datum.source === "FuelStation") {
      if (!map.hasLayer(fuelLayer)) {
        map.addLayer(fuelLayer);
      }
      map.setView([datum.lat, datum.lng], 17);
      if (map._layers[datum.id]) {
        map._layers[datum.id].fire("click");
      }
    }
	if (datum.source === "Markets") {
      if (!map.hasLayer(marketLayer)) {
        map.addLayer(marketLayer);
      }
      map.setView([datum.lat, datum.lng], 17);
      if (map._layers[datum.id]) {
        map._layers[datum.id].fire("click");
      }
    }
	if (datum.source === "PolicePosts") {
      if (!map.hasLayer(policeLayer)) {
        map.addLayer(policeLayer);
      }
      map.setView([datum.lat, datum.lng], 17);
      if (map._layers[datum.id]) {
        map._layers[datum.id].fire("click");
      }
    }
	if (datum.source === "Restaurant") {
      if (!map.hasLayer(restaurantLayer)) {
        map.addLayer(restaurantLayer);
      }
      map.setView([datum.lat, datum.lng], 17);
      if (map._layers[datum.id]) {
        map._layers[datum.id].fire("click");
      }
    }
	if (datum.source === "Hotel") {
      if (!map.hasLayer(hotelLayer)) {
        map.addLayer(hotelLayer);
      }
      map.setView([datum.lat, datum.lng], 17);
      if (map._layers[datum.id]) {
        map._layers[datum.id].fire("click");
      }
    }
	
	
	
	
	
	
	
	
	
	
	
    if (datum.source === "GeoNames") {
      map.setView([datum.lat, datum.lng], 14);
    }
    if ($(".navbar-collapse").height() > 50) {
      $(".navbar-collapse").collapse("hide");
    }
  }).on("typeahead:opened", function () {
    $(".navbar-collapse.in").css("max-height", $(document).height() - $(".navbar-header").height());
    $(".navbar-collapse.in").css("height", $(document).height() - $(".navbar-header").height());
  }).on("typeahead:closed", function () {
    $(".navbar-collapse.in").css("max-height", "");
    $(".navbar-collapse.in").css("height", "");
  });
  $(".twitter-typeahead").css("position", "static");
  $(".twitter-typeahead").css("display", "block");
});

// Leaflet patch to make layer control scrollable on touch browsers
var container = $(".leaflet-control-layers")[0];
if (!L.Browser.touch) {
  L.DomEvent
  .disableClickPropagation(container)
  .disableScrollPropagation(container);
} else {
  L.DomEvent.disableClickPropagation(container);
}

/*
var leafletRM = L.Routing.control({
    waypoints: [
        L.latLng(3.01, 30.91),
        L.latLng(2.09, 30.31)
    ],
    routeWhileDragging: true
    //useZoomParameter: false,
    //autoRoute: false,
}).addTo(map);
*/