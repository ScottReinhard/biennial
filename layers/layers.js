var wms_layers = [];
var lyr_OpenStreetMapWMSbyterrestris_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://ows.terrestris.de/osm/service",
    attributions: '<a href=""></a>',
                              params: {
                                "LAYERS": "OSM-WMS",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: "OpenStreetMap WMS - by terrestris",
                            opacity: 0.400000,
                            
                            
                          });
              wms_layers.push([lyr_OpenStreetMapWMSbyterrestris_0, 0]);var format_YearSubje_1932painting_1 = new ol.format.GeoJSON();
var features_YearSubje_1932painting_1 = format_YearSubje_1932painting_1.readFeatures(json_YearSubje_1932painting_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_YearSubje_1932painting_1 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_YearSubje_1932painting_1.addFeatures(features_YearSubje_1932painting_1);var lyr_YearSubje_1932painting_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_YearSubje_1932painting_1, 
                style: style_YearSubje_1932painting_1,
                title: '<img src="styles/legend/YearSubje_1932painting_1.png" /> Year-Subje_1932-painting'
            });var format_YearSubje_1933sculpture_2 = new ol.format.GeoJSON();
var features_YearSubje_1933sculpture_2 = format_YearSubje_1933sculpture_2.readFeatures(json_YearSubje_1933sculpture_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_YearSubje_1933sculpture_2 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_YearSubje_1933sculpture_2.addFeatures(features_YearSubje_1933sculpture_2);var lyr_YearSubje_1933sculpture_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_YearSubje_1933sculpture_2, 
                style: style_YearSubje_1933sculpture_2,
                title: '<img src="styles/legend/YearSubje_1933sculpture_2.png" /> Year-Subje_1933-sculpture'
            });var format_YearSubje_1936painting_3 = new ol.format.GeoJSON();
var features_YearSubje_1936painting_3 = format_YearSubje_1936painting_3.readFeatures(json_YearSubje_1936painting_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_YearSubje_1936painting_3 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_YearSubje_1936painting_3.addFeatures(features_YearSubje_1936painting_3);var lyr_YearSubje_1936painting_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_YearSubje_1936painting_3, 
                style: style_YearSubje_1936painting_3,
                title: '<img src="styles/legend/YearSubje_1936painting_3.png" /> Year-Subje_1936-painting'
            });var format_YearSubje_1936sculpture_4 = new ol.format.GeoJSON();
var features_YearSubje_1936sculpture_4 = format_YearSubje_1936sculpture_4.readFeatures(json_YearSubje_1936sculpture_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_YearSubje_1936sculpture_4 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_YearSubje_1936sculpture_4.addFeatures(features_YearSubje_1936sculpture_4);var lyr_YearSubje_1936sculpture_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_YearSubje_1936sculpture_4, 
                style: style_YearSubje_1936sculpture_4,
                title: '<img src="styles/legend/YearSubje_1936sculpture_4.png" /> Year-Subje_1936-sculpture'
            });var format_YearSubje_1937painting_5 = new ol.format.GeoJSON();
var features_YearSubje_1937painting_5 = format_YearSubje_1937painting_5.readFeatures(json_YearSubje_1937painting_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_YearSubje_1937painting_5 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_YearSubje_1937painting_5.addFeatures(features_YearSubje_1937painting_5);var lyr_YearSubje_1937painting_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_YearSubje_1937painting_5, 
                style: style_YearSubje_1937painting_5,
                title: '<img src="styles/legend/YearSubje_1937painting_5.png" /> Year-Subje_1937-painting'
            });var format_YearSubje_1938painting_6 = new ol.format.GeoJSON();
var features_YearSubje_1938painting_6 = format_YearSubje_1938painting_6.readFeatures(json_YearSubje_1938painting_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_YearSubje_1938painting_6 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_YearSubje_1938painting_6.addFeatures(features_YearSubje_1938painting_6);var lyr_YearSubje_1938painting_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_YearSubje_1938painting_6, 
                style: style_YearSubje_1938painting_6,
                title: '<img src="styles/legend/YearSubje_1938painting_6.png" /> Year-Subje_1938-painting'
            });var format_YearSubje_1938sculpture_7 = new ol.format.GeoJSON();
var features_YearSubje_1938sculpture_7 = format_YearSubje_1938sculpture_7.readFeatures(json_YearSubje_1938sculpture_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_YearSubje_1938sculpture_7 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_YearSubje_1938sculpture_7.addFeatures(features_YearSubje_1938sculpture_7);var lyr_YearSubje_1938sculpture_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_YearSubje_1938sculpture_7, 
                style: style_YearSubje_1938sculpture_7,
                title: '<img src="styles/legend/YearSubje_1938sculpture_7.png" /> Year-Subje_1938-sculpture'
            });var format_YearSubje_1939sculpture_8 = new ol.format.GeoJSON();
var features_YearSubje_1939sculpture_8 = format_YearSubje_1939sculpture_8.readFeatures(json_YearSubje_1939sculpture_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_YearSubje_1939sculpture_8 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_YearSubje_1939sculpture_8.addFeatures(features_YearSubje_1939sculpture_8);var lyr_YearSubje_1939sculpture_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_YearSubje_1939sculpture_8, 
                style: style_YearSubje_1939sculpture_8,
                title: '<img src="styles/legend/YearSubje_1939sculpture_8.png" /> Year-Subje_1939-sculpture'
            });var format_YearSubje_1939watercolors_9 = new ol.format.GeoJSON();
var features_YearSubje_1939watercolors_9 = format_YearSubje_1939watercolors_9.readFeatures(json_YearSubje_1939watercolors_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_YearSubje_1939watercolors_9 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_YearSubje_1939watercolors_9.addFeatures(features_YearSubje_1939watercolors_9);var lyr_YearSubje_1939watercolors_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_YearSubje_1939watercolors_9, 
                style: style_YearSubje_1939watercolors_9,
                title: '<img src="styles/legend/YearSubje_1939watercolors_9.png" /> Year-Subje_1939-watercolors'
            });var format_YearSubje_194041painting_10 = new ol.format.GeoJSON();
var features_YearSubje_194041painting_10 = format_YearSubje_194041painting_10.readFeatures(json_YearSubje_194041painting_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_YearSubje_194041painting_10 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_YearSubje_194041painting_10.addFeatures(features_YearSubje_194041painting_10);var lyr_YearSubje_194041painting_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_YearSubje_194041painting_10, 
                style: style_YearSubje_194041painting_10,
                title: '<img src="styles/legend/YearSubje_194041painting_10.png" /> Year-Subje_1940-41-painting'
            });var format_YearSubje_1940sculpture_11 = new ol.format.GeoJSON();
var features_YearSubje_1940sculpture_11 = format_YearSubje_1940sculpture_11.readFeatures(json_YearSubje_1940sculpture_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_YearSubje_1940sculpture_11 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_YearSubje_1940sculpture_11.addFeatures(features_YearSubje_1940sculpture_11);var lyr_YearSubje_1940sculpture_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_YearSubje_1940sculpture_11, 
                style: style_YearSubje_1940sculpture_11,
                title: '<img src="styles/legend/YearSubje_1940sculpture_11.png" /> Year-Subje_1940-sculpture'
            });var format_YearSubje_1941painting_12 = new ol.format.GeoJSON();
var features_YearSubje_1941painting_12 = format_YearSubje_1941painting_12.readFeatures(json_YearSubje_1941painting_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_YearSubje_1941painting_12 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_YearSubje_1941painting_12.addFeatures(features_YearSubje_1941painting_12);var lyr_YearSubje_1941painting_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_YearSubje_1941painting_12, 
                style: style_YearSubje_1941painting_12,
                title: '<img src="styles/legend/YearSubje_1941painting_12.png" /> Year-Subje_1941-painting'
            });var format_YearSubje_194243sculpture_13 = new ol.format.GeoJSON();
var features_YearSubje_194243sculpture_13 = format_YearSubje_194243sculpture_13.readFeatures(json_YearSubje_194243sculpture_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_YearSubje_194243sculpture_13 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_YearSubje_194243sculpture_13.addFeatures(features_YearSubje_194243sculpture_13);var lyr_YearSubje_194243sculpture_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_YearSubje_194243sculpture_13, 
                style: style_YearSubje_194243sculpture_13,
                title: '<img src="styles/legend/YearSubje_194243sculpture_13.png" /> Year-Subje_1942-43-sculpture'
            });var format_YearSubje_194344sculpture_14 = new ol.format.GeoJSON();
var features_YearSubje_194344sculpture_14 = format_YearSubje_194344sculpture_14.readFeatures(json_YearSubje_194344sculpture_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_YearSubje_194344sculpture_14 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_YearSubje_194344sculpture_14.addFeatures(features_YearSubje_194344sculpture_14);var lyr_YearSubje_194344sculpture_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_YearSubje_194344sculpture_14, 
                style: style_YearSubje_194344sculpture_14,
                title: '<img src="styles/legend/YearSubje_194344sculpture_14.png" /> Year-Subje_1943-44-sculpture'
            });var format_YearSubje_1944painting_15 = new ol.format.GeoJSON();
var features_YearSubje_1944painting_15 = format_YearSubje_1944painting_15.readFeatures(json_YearSubje_1944painting_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_YearSubje_1944painting_15 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_YearSubje_1944painting_15.addFeatures(features_YearSubje_1944painting_15);var lyr_YearSubje_1944painting_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_YearSubje_1944painting_15, 
                style: style_YearSubje_1944painting_15,
                title: '<img src="styles/legend/YearSubje_1944painting_15.png" /> Year-Subje_1944-painting'
            });var format_YearSubje_1945painting_16 = new ol.format.GeoJSON();
var features_YearSubje_1945painting_16 = format_YearSubje_1945painting_16.readFeatures(json_YearSubje_1945painting_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_YearSubje_1945painting_16 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_YearSubje_1945painting_16.addFeatures(features_YearSubje_1945painting_16);var lyr_YearSubje_1945painting_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_YearSubje_1945painting_16, 
                style: style_YearSubje_1945painting_16,
                title: '<img src="styles/legend/YearSubje_1945painting_16.png" /> Year-Subje_1945-painting'
            });var format_YearSubje_1945sculpture_17 = new ol.format.GeoJSON();
var features_YearSubje_1945sculpture_17 = format_YearSubje_1945sculpture_17.readFeatures(json_YearSubje_1945sculpture_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_YearSubje_1945sculpture_17 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_YearSubje_1945sculpture_17.addFeatures(features_YearSubje_1945sculpture_17);var lyr_YearSubje_1945sculpture_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_YearSubje_1945sculpture_17, 
                style: style_YearSubje_1945sculpture_17,
                title: '<img src="styles/legend/YearSubje_1945sculpture_17.png" /> Year-Subje_1945-sculpture'
            });var format_YearSubje_1946painting_18 = new ol.format.GeoJSON();
var features_YearSubje_1946painting_18 = format_YearSubje_1946painting_18.readFeatures(json_YearSubje_1946painting_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_YearSubje_1946painting_18 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_YearSubje_1946painting_18.addFeatures(features_YearSubje_1946painting_18);var lyr_YearSubje_1946painting_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_YearSubje_1946painting_18, 
                style: style_YearSubje_1946painting_18,
                title: '<img src="styles/legend/YearSubje_1946painting_18.png" /> Year-Subje_1946-painting'
            });var format_YearSubje_1946sculpture_19 = new ol.format.GeoJSON();
var features_YearSubje_1946sculpture_19 = format_YearSubje_1946sculpture_19.readFeatures(json_YearSubje_1946sculpture_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_YearSubje_1946sculpture_19 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_YearSubje_1946sculpture_19.addFeatures(features_YearSubje_1946sculpture_19);var lyr_YearSubje_1946sculpture_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_YearSubje_1946sculpture_19, 
                style: style_YearSubje_1946sculpture_19,
                title: '<img src="styles/legend/YearSubje_1946sculpture_19.png" /> Year-Subje_1946-sculpture'
            });var format_YearSubje_1947painting_20 = new ol.format.GeoJSON();
var features_YearSubje_1947painting_20 = format_YearSubje_1947painting_20.readFeatures(json_YearSubje_1947painting_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_YearSubje_1947painting_20 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_YearSubje_1947painting_20.addFeatures(features_YearSubje_1947painting_20);var lyr_YearSubje_1947painting_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_YearSubje_1947painting_20, 
                style: style_YearSubje_1947painting_20,
                title: '<img src="styles/legend/YearSubje_1947painting_20.png" /> Year-Subje_1947-painting'
            });var format_YearSubje_1947sculpture_21 = new ol.format.GeoJSON();
var features_YearSubje_1947sculpture_21 = format_YearSubje_1947sculpture_21.readFeatures(json_YearSubje_1947sculpture_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_YearSubje_1947sculpture_21 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_YearSubje_1947sculpture_21.addFeatures(features_YearSubje_1947sculpture_21);var lyr_YearSubje_1947sculpture_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_YearSubje_1947sculpture_21, 
                style: style_YearSubje_1947sculpture_21,
                title: '<img src="styles/legend/YearSubje_1947sculpture_21.png" /> Year-Subje_1947-sculpture'
            });var format_YearSubje_1948painting_22 = new ol.format.GeoJSON();
var features_YearSubje_1948painting_22 = format_YearSubje_1948painting_22.readFeatures(json_YearSubje_1948painting_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_YearSubje_1948painting_22 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_YearSubje_1948painting_22.addFeatures(features_YearSubje_1948painting_22);var lyr_YearSubje_1948painting_22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_YearSubje_1948painting_22, 
                style: style_YearSubje_1948painting_22,
                title: '<img src="styles/legend/YearSubje_1948painting_22.png" /> Year-Subje_1948-painting'
            });var format_YearSubje_1949painting_23 = new ol.format.GeoJSON();
var features_YearSubje_1949painting_23 = format_YearSubje_1949painting_23.readFeatures(json_YearSubje_1949painting_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_YearSubje_1949painting_23 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_YearSubje_1949painting_23.addFeatures(features_YearSubje_1949painting_23);var lyr_YearSubje_1949painting_23 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_YearSubje_1949painting_23, 
                style: style_YearSubje_1949painting_23,
                title: '<img src="styles/legend/YearSubje_1949painting_23.png" /> Year-Subje_1949-painting'
            });var format_YearSubje_1949sculpture_24 = new ol.format.GeoJSON();
var features_YearSubje_1949sculpture_24 = format_YearSubje_1949sculpture_24.readFeatures(json_YearSubje_1949sculpture_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_YearSubje_1949sculpture_24 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_YearSubje_1949sculpture_24.addFeatures(features_YearSubje_1949sculpture_24);var lyr_YearSubje_1949sculpture_24 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_YearSubje_1949sculpture_24, 
                style: style_YearSubje_1949sculpture_24,
                title: '<img src="styles/legend/YearSubje_1949sculpture_24.png" /> Year-Subje_1949-sculpture'
            });var format_YearSubje_1950painting_25 = new ol.format.GeoJSON();
var features_YearSubje_1950painting_25 = format_YearSubje_1950painting_25.readFeatures(json_YearSubje_1950painting_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_YearSubje_1950painting_25 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_YearSubje_1950painting_25.addFeatures(features_YearSubje_1950painting_25);var lyr_YearSubje_1950painting_25 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_YearSubje_1950painting_25, 
                style: style_YearSubje_1950painting_25,
                title: '<img src="styles/legend/YearSubje_1950painting_25.png" /> Year-Subje_1950-painting'
            });var format_YearSubje_1950sculpture_26 = new ol.format.GeoJSON();
var features_YearSubje_1950sculpture_26 = format_YearSubje_1950sculpture_26.readFeatures(json_YearSubje_1950sculpture_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_YearSubje_1950sculpture_26 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_YearSubje_1950sculpture_26.addFeatures(features_YearSubje_1950sculpture_26);var lyr_YearSubje_1950sculpture_26 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_YearSubje_1950sculpture_26, 
                style: style_YearSubje_1950sculpture_26,
                title: '<img src="styles/legend/YearSubje_1950sculpture_26.png" /> Year-Subje_1950-sculpture'
            });var format_YearSubje_1953painting_27 = new ol.format.GeoJSON();
var features_YearSubje_1953painting_27 = format_YearSubje_1953painting_27.readFeatures(json_YearSubje_1953painting_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_YearSubje_1953painting_27 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_YearSubje_1953painting_27.addFeatures(features_YearSubje_1953painting_27);var lyr_YearSubje_1953painting_27 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_YearSubje_1953painting_27, 
                style: style_YearSubje_1953painting_27,
                title: '<img src="styles/legend/YearSubje_1953painting_27.png" /> Year-Subje_1953-painting'
            });var format_YearSubje_1955painting_28 = new ol.format.GeoJSON();
var features_YearSubje_1955painting_28 = format_YearSubje_1955painting_28.readFeatures(json_YearSubje_1955painting_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_YearSubje_1955painting_28 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_YearSubje_1955painting_28.addFeatures(features_YearSubje_1955painting_28);var lyr_YearSubje_1955painting_28 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_YearSubje_1955painting_28, 
                style: style_YearSubje_1955painting_28,
                title: '<img src="styles/legend/YearSubje_1955painting_28.png" /> Year-Subje_1955-painting'
            });var format_YearSubje_1956sculpture_29 = new ol.format.GeoJSON();
var features_YearSubje_1956sculpture_29 = format_YearSubje_1956sculpture_29.readFeatures(json_YearSubje_1956sculpture_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_YearSubje_1956sculpture_29 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_YearSubje_1956sculpture_29.addFeatures(features_YearSubje_1956sculpture_29);var lyr_YearSubje_1956sculpture_29 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_YearSubje_1956sculpture_29, 
                style: style_YearSubje_1956sculpture_29,
                title: '<img src="styles/legend/YearSubje_1956sculpture_29.png" /> Year-Subje_1956-sculpture'
            });var format_YearSubje_1957_30 = new ol.format.GeoJSON();
var features_YearSubje_1957_30 = format_YearSubje_1957_30.readFeatures(json_YearSubje_1957_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_YearSubje_1957_30 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_YearSubje_1957_30.addFeatures(features_YearSubje_1957_30);var lyr_YearSubje_1957_30 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_YearSubje_1957_30, 
                style: style_YearSubje_1957_30,
                title: '<img src="styles/legend/YearSubje_1957_30.png" /> Year-Subje_1957'
            });var format_YearSubje_1958_31 = new ol.format.GeoJSON();
var features_YearSubje_1958_31 = format_YearSubje_1958_31.readFeatures(json_YearSubje_1958_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_YearSubje_1958_31 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_YearSubje_1958_31.addFeatures(features_YearSubje_1958_31);var lyr_YearSubje_1958_31 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_YearSubje_1958_31, 
                style: style_YearSubje_1958_31,
                title: '<img src="styles/legend/YearSubje_1958_31.png" /> Year-Subje_1958'
            });var format_YearSubje_1959painting_32 = new ol.format.GeoJSON();
var features_YearSubje_1959painting_32 = format_YearSubje_1959painting_32.readFeatures(json_YearSubje_1959painting_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_YearSubje_1959painting_32 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_YearSubje_1959painting_32.addFeatures(features_YearSubje_1959painting_32);var lyr_YearSubje_1959painting_32 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_YearSubje_1959painting_32, 
                style: style_YearSubje_1959painting_32,
                title: '<img src="styles/legend/YearSubje_1959painting_32.png" /> Year-Subje_1959-painting'
            });var format_YearSubje_1960sculpture_33 = new ol.format.GeoJSON();
var features_YearSubje_1960sculpture_33 = format_YearSubje_1960sculpture_33.readFeatures(json_YearSubje_1960sculpture_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_YearSubje_1960sculpture_33 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_YearSubje_1960sculpture_33.addFeatures(features_YearSubje_1960sculpture_33);var lyr_YearSubje_1960sculpture_33 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_YearSubje_1960sculpture_33, 
                style: style_YearSubje_1960sculpture_33,
                title: '<img src="styles/legend/YearSubje_1960sculpture_33.png" /> Year-Subje_1960-sculpture'
            });var format_YearSubje_1961painting_34 = new ol.format.GeoJSON();
var features_YearSubje_1961painting_34 = format_YearSubje_1961painting_34.readFeatures(json_YearSubje_1961painting_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_YearSubje_1961painting_34 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_YearSubje_1961painting_34.addFeatures(features_YearSubje_1961painting_34);var lyr_YearSubje_1961painting_34 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_YearSubje_1961painting_34, 
                style: style_YearSubje_1961painting_34,
                title: '<img src="styles/legend/YearSubje_1961painting_34.png" /> Year-Subje_1961-painting'
            });var format_YearSubje_1962sculpture_35 = new ol.format.GeoJSON();
var features_YearSubje_1962sculpture_35 = format_YearSubje_1962sculpture_35.readFeatures(json_YearSubje_1962sculpture_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_YearSubje_1962sculpture_35 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_YearSubje_1962sculpture_35.addFeatures(features_YearSubje_1962sculpture_35);var lyr_YearSubje_1962sculpture_35 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_YearSubje_1962sculpture_35, 
                style: style_YearSubje_1962sculpture_35,
                title: '<img src="styles/legend/YearSubje_1962sculpture_35.png" /> Year-Subje_1962-sculpture'
            });var format_YearSubje_1963painting_36 = new ol.format.GeoJSON();
var features_YearSubje_1963painting_36 = format_YearSubje_1963painting_36.readFeatures(json_YearSubje_1963painting_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_YearSubje_1963painting_36 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_YearSubje_1963painting_36.addFeatures(features_YearSubje_1963painting_36);var lyr_YearSubje_1963painting_36 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_YearSubje_1963painting_36, 
                style: style_YearSubje_1963painting_36,
                title: '<img src="styles/legend/YearSubje_1963painting_36.png" /> Year-Subje_1963-painting'
            });var format_YearSubje_1964sculpture_37 = new ol.format.GeoJSON();
var features_YearSubje_1964sculpture_37 = format_YearSubje_1964sculpture_37.readFeatures(json_YearSubje_1964sculpture_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_YearSubje_1964sculpture_37 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_YearSubje_1964sculpture_37.addFeatures(features_YearSubje_1964sculpture_37);var lyr_YearSubje_1964sculpture_37 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_YearSubje_1964sculpture_37, 
                style: style_YearSubje_1964sculpture_37,
                title: '<img src="styles/legend/YearSubje_1964sculpture_37.png" /> Year-Subje_1964-sculpture'
            });var format_YearSubje_1965painting_38 = new ol.format.GeoJSON();
var features_YearSubje_1965painting_38 = format_YearSubje_1965painting_38.readFeatures(json_YearSubje_1965painting_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_YearSubje_1965painting_38 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_YearSubje_1965painting_38.addFeatures(features_YearSubje_1965painting_38);var lyr_YearSubje_1965painting_38 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_YearSubje_1965painting_38, 
                style: style_YearSubje_1965painting_38,
                title: '<img src="styles/legend/YearSubje_1965painting_38.png" /> Year-Subje_1965-painting'
            });var format_YearSubje_1966sculpture_39 = new ol.format.GeoJSON();
var features_YearSubje_1966sculpture_39 = format_YearSubje_1966sculpture_39.readFeatures(json_YearSubje_1966sculpture_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_YearSubje_1966sculpture_39 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_YearSubje_1966sculpture_39.addFeatures(features_YearSubje_1966sculpture_39);var lyr_YearSubje_1966sculpture_39 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_YearSubje_1966sculpture_39, 
                style: style_YearSubje_1966sculpture_39,
                title: '<img src="styles/legend/YearSubje_1966sculpture_39.png" /> Year-Subje_1966-sculpture'
            });var format_YearSubje_1967painting_40 = new ol.format.GeoJSON();
var features_YearSubje_1967painting_40 = format_YearSubje_1967painting_40.readFeatures(json_YearSubje_1967painting_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_YearSubje_1967painting_40 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_YearSubje_1967painting_40.addFeatures(features_YearSubje_1967painting_40);var lyr_YearSubje_1967painting_40 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_YearSubje_1967painting_40, 
                style: style_YearSubje_1967painting_40,
                title: '<img src="styles/legend/YearSubje_1967painting_40.png" /> Year-Subje_1967-painting'
            });var format_YearSubje_1968sculpture_41 = new ol.format.GeoJSON();
var features_YearSubje_1968sculpture_41 = format_YearSubje_1968sculpture_41.readFeatures(json_YearSubje_1968sculpture_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_YearSubje_1968sculpture_41 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_YearSubje_1968sculpture_41.addFeatures(features_YearSubje_1968sculpture_41);var lyr_YearSubje_1968sculpture_41 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_YearSubje_1968sculpture_41, 
                style: style_YearSubje_1968sculpture_41,
                title: '<img src="styles/legend/YearSubje_1968sculpture_41.png" /> Year-Subje_1968-sculpture'
            });var format_YearSubje_1969painting_42 = new ol.format.GeoJSON();
var features_YearSubje_1969painting_42 = format_YearSubje_1969painting_42.readFeatures(json_YearSubje_1969painting_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_YearSubje_1969painting_42 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_YearSubje_1969painting_42.addFeatures(features_YearSubje_1969painting_42);var lyr_YearSubje_1969painting_42 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_YearSubje_1969painting_42, 
                style: style_YearSubje_1969painting_42,
                title: '<img src="styles/legend/YearSubje_1969painting_42.png" /> Year-Subje_1969-painting'
            });var format_YearSubje_1970sculpture_43 = new ol.format.GeoJSON();
var features_YearSubje_1970sculpture_43 = format_YearSubje_1970sculpture_43.readFeatures(json_YearSubje_1970sculpture_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_YearSubje_1970sculpture_43 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_YearSubje_1970sculpture_43.addFeatures(features_YearSubje_1970sculpture_43);var lyr_YearSubje_1970sculpture_43 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_YearSubje_1970sculpture_43, 
                style: style_YearSubje_1970sculpture_43,
                title: '<img src="styles/legend/YearSubje_1970sculpture_43.png" /> Year-Subje_1970-sculpture'
            });var format_YearSubje_1972painting_44 = new ol.format.GeoJSON();
var features_YearSubje_1972painting_44 = format_YearSubje_1972painting_44.readFeatures(json_YearSubje_1972painting_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_YearSubje_1972painting_44 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_YearSubje_1972painting_44.addFeatures(features_YearSubje_1972painting_44);var lyr_YearSubje_1972painting_44 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_YearSubje_1972painting_44, 
                style: style_YearSubje_1972painting_44,
                title: '<img src="styles/legend/YearSubje_1972painting_44.png" /> Year-Subje_1972-painting'
            });var format_YearSubje_1973_45 = new ol.format.GeoJSON();
var features_YearSubje_1973_45 = format_YearSubje_1973_45.readFeatures(json_YearSubje_1973_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_YearSubje_1973_45 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_YearSubje_1973_45.addFeatures(features_YearSubje_1973_45);var lyr_YearSubje_1973_45 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_YearSubje_1973_45, 
                style: style_YearSubje_1973_45,
                title: '<img src="styles/legend/YearSubje_1973_45.png" /> Year-Subje_1973'
            });var format_YearSubje_1975_46 = new ol.format.GeoJSON();
var features_YearSubje_1975_46 = format_YearSubje_1975_46.readFeatures(json_YearSubje_1975_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_YearSubje_1975_46 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_YearSubje_1975_46.addFeatures(features_YearSubje_1975_46);var lyr_YearSubje_1975_46 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_YearSubje_1975_46, 
                style: style_YearSubje_1975_46,
                title: '<img src="styles/legend/YearSubje_1975_46.png" /> Year-Subje_1975'
            });var format_YearSubje_1977_47 = new ol.format.GeoJSON();
var features_YearSubje_1977_47 = format_YearSubje_1977_47.readFeatures(json_YearSubje_1977_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_YearSubje_1977_47 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_YearSubje_1977_47.addFeatures(features_YearSubje_1977_47);var lyr_YearSubje_1977_47 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_YearSubje_1977_47, 
                style: style_YearSubje_1977_47,
                title: '<img src="styles/legend/YearSubje_1977_47.png" /> Year-Subje_1977'
            });var format_YearSubje_1979_48 = new ol.format.GeoJSON();
var features_YearSubje_1979_48 = format_YearSubje_1979_48.readFeatures(json_YearSubje_1979_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_YearSubje_1979_48 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_YearSubje_1979_48.addFeatures(features_YearSubje_1979_48);var lyr_YearSubje_1979_48 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_YearSubje_1979_48, 
                style: style_YearSubje_1979_48,
                title: '<img src="styles/legend/YearSubje_1979_48.png" /> Year-Subje_1979'
            });var format_YearSubje_1981_49 = new ol.format.GeoJSON();
var features_YearSubje_1981_49 = format_YearSubje_1981_49.readFeatures(json_YearSubje_1981_49, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_YearSubje_1981_49 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_YearSubje_1981_49.addFeatures(features_YearSubje_1981_49);var lyr_YearSubje_1981_49 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_YearSubje_1981_49, 
                style: style_YearSubje_1981_49,
                title: '<img src="styles/legend/YearSubje_1981_49.png" /> Year-Subje_1981'
            });var format_YearSubje_1983_50 = new ol.format.GeoJSON();
var features_YearSubje_1983_50 = format_YearSubje_1983_50.readFeatures(json_YearSubje_1983_50, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_YearSubje_1983_50 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_YearSubje_1983_50.addFeatures(features_YearSubje_1983_50);var lyr_YearSubje_1983_50 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_YearSubje_1983_50, 
                style: style_YearSubje_1983_50,
                title: '<img src="styles/legend/YearSubje_1983_50.png" /> Year-Subje_1983'
            });var format_YearSubje_1985_51 = new ol.format.GeoJSON();
var features_YearSubje_1985_51 = format_YearSubje_1985_51.readFeatures(json_YearSubje_1985_51, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_YearSubje_1985_51 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_YearSubje_1985_51.addFeatures(features_YearSubje_1985_51);var lyr_YearSubje_1985_51 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_YearSubje_1985_51, 
                style: style_YearSubje_1985_51,
                title: '<img src="styles/legend/YearSubje_1985_51.png" /> Year-Subje_1985'
            });var format_YearSubje_1989_52 = new ol.format.GeoJSON();
var features_YearSubje_1989_52 = format_YearSubje_1989_52.readFeatures(json_YearSubje_1989_52, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_YearSubje_1989_52 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_YearSubje_1989_52.addFeatures(features_YearSubje_1989_52);var lyr_YearSubje_1989_52 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_YearSubje_1989_52, 
                style: style_YearSubje_1989_52,
                title: '<img src="styles/legend/YearSubje_1989_52.png" /> Year-Subje_1989'
            });var format_YearSubje_1991_53 = new ol.format.GeoJSON();
var features_YearSubje_1991_53 = format_YearSubje_1991_53.readFeatures(json_YearSubje_1991_53, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_YearSubje_1991_53 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_YearSubje_1991_53.addFeatures(features_YearSubje_1991_53);var lyr_YearSubje_1991_53 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_YearSubje_1991_53, 
                style: style_YearSubje_1991_53,
                title: '<img src="styles/legend/YearSubje_1991_53.png" /> Year-Subje_1991'
            });var format_YearSubje_1993_54 = new ol.format.GeoJSON();
var features_YearSubje_1993_54 = format_YearSubje_1993_54.readFeatures(json_YearSubje_1993_54, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_YearSubje_1993_54 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_YearSubje_1993_54.addFeatures(features_YearSubje_1993_54);var lyr_YearSubje_1993_54 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_YearSubje_1993_54, 
                style: style_YearSubje_1993_54,
                title: '<img src="styles/legend/YearSubje_1993_54.png" /> Year-Subje_1993'
            });var format_YearSubje_1995_55 = new ol.format.GeoJSON();
var features_YearSubje_1995_55 = format_YearSubje_1995_55.readFeatures(json_YearSubje_1995_55, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_YearSubje_1995_55 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_YearSubje_1995_55.addFeatures(features_YearSubje_1995_55);var lyr_YearSubje_1995_55 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_YearSubje_1995_55, 
                style: style_YearSubje_1995_55,
                title: '<img src="styles/legend/YearSubje_1995_55.png" /> Year-Subje_1995'
            });var format_YearSubje_1997_56 = new ol.format.GeoJSON();
var features_YearSubje_1997_56 = format_YearSubje_1997_56.readFeatures(json_YearSubje_1997_56, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_YearSubje_1997_56 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_YearSubje_1997_56.addFeatures(features_YearSubje_1997_56);var lyr_YearSubje_1997_56 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_YearSubje_1997_56, 
                style: style_YearSubje_1997_56,
                title: '<img src="styles/legend/YearSubje_1997_56.png" /> Year-Subje_1997'
            });var format_YearSubje_2000_57 = new ol.format.GeoJSON();
var features_YearSubje_2000_57 = format_YearSubje_2000_57.readFeatures(json_YearSubje_2000_57, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_YearSubje_2000_57 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_YearSubje_2000_57.addFeatures(features_YearSubje_2000_57);var lyr_YearSubje_2000_57 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_YearSubje_2000_57, 
                style: style_YearSubje_2000_57,
                title: '<img src="styles/legend/YearSubje_2000_57.png" /> Year-Subje_2000'
            });var format_YearSubje_2002_58 = new ol.format.GeoJSON();
var features_YearSubje_2002_58 = format_YearSubje_2002_58.readFeatures(json_YearSubje_2002_58, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_YearSubje_2002_58 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_YearSubje_2002_58.addFeatures(features_YearSubje_2002_58);var lyr_YearSubje_2002_58 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_YearSubje_2002_58, 
                style: style_YearSubje_2002_58,
                title: '<img src="styles/legend/YearSubje_2002_58.png" /> Year-Subje_2002'
            });var format_YearSubje_2004_59 = new ol.format.GeoJSON();
var features_YearSubje_2004_59 = format_YearSubje_2004_59.readFeatures(json_YearSubje_2004_59, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_YearSubje_2004_59 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_YearSubje_2004_59.addFeatures(features_YearSubje_2004_59);var lyr_YearSubje_2004_59 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_YearSubje_2004_59, 
                style: style_YearSubje_2004_59,
                title: '<img src="styles/legend/YearSubje_2004_59.png" /> Year-Subje_2004'
            });var format_YearSubje_2006_60 = new ol.format.GeoJSON();
var features_YearSubje_2006_60 = format_YearSubje_2006_60.readFeatures(json_YearSubje_2006_60, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_YearSubje_2006_60 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_YearSubje_2006_60.addFeatures(features_YearSubje_2006_60);var lyr_YearSubje_2006_60 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_YearSubje_2006_60, 
                style: style_YearSubje_2006_60,
                title: '<img src="styles/legend/YearSubje_2006_60.png" /> Year-Subje_2006'
            });var format_YearSubje_2008_61 = new ol.format.GeoJSON();
var features_YearSubje_2008_61 = format_YearSubje_2008_61.readFeatures(json_YearSubje_2008_61, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_YearSubje_2008_61 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_YearSubje_2008_61.addFeatures(features_YearSubje_2008_61);var lyr_YearSubje_2008_61 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_YearSubje_2008_61, 
                style: style_YearSubje_2008_61,
                title: '<img src="styles/legend/YearSubje_2008_61.png" /> Year-Subje_2008'
            });var format_YearSubje_2010_62 = new ol.format.GeoJSON();
var features_YearSubje_2010_62 = format_YearSubje_2010_62.readFeatures(json_YearSubje_2010_62, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_YearSubje_2010_62 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_YearSubje_2010_62.addFeatures(features_YearSubje_2010_62);var lyr_YearSubje_2010_62 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_YearSubje_2010_62, 
                style: style_YearSubje_2010_62,
                title: '<img src="styles/legend/YearSubje_2010_62.png" /> Year-Subje_2010'
            });var format_YearSubje_2012_63 = new ol.format.GeoJSON();
var features_YearSubje_2012_63 = format_YearSubje_2012_63.readFeatures(json_YearSubje_2012_63, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_YearSubje_2012_63 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_YearSubje_2012_63.addFeatures(features_YearSubje_2012_63);var lyr_YearSubje_2012_63 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_YearSubje_2012_63, 
                style: style_YearSubje_2012_63,
                title: '<img src="styles/legend/YearSubje_2012_63.png" /> Year-Subje_2012'
            });var format_YearSubje_2014_64 = new ol.format.GeoJSON();
var features_YearSubje_2014_64 = format_YearSubje_2014_64.readFeatures(json_YearSubje_2014_64, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_YearSubje_2014_64 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_YearSubje_2014_64.addFeatures(features_YearSubje_2014_64);var lyr_YearSubje_2014_64 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_YearSubje_2014_64, 
                style: style_YearSubje_2014_64,
                title: '<img src="styles/legend/YearSubje_2014_64.png" /> Year-Subje_2014'
            });var format_YearSubje_2017_65 = new ol.format.GeoJSON();
var features_YearSubje_2017_65 = format_YearSubje_2017_65.readFeatures(json_YearSubje_2017_65, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_YearSubje_2017_65 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_YearSubje_2017_65.addFeatures(features_YearSubje_2017_65);var lyr_YearSubje_2017_65 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_YearSubje_2017_65, 
                style: style_YearSubje_2017_65,
                title: '<img src="styles/legend/YearSubje_2017_65.png" /> Year-Subje_2017'
            });var format_YearSubje_2019_66 = new ol.format.GeoJSON();
var features_YearSubje_2019_66 = format_YearSubje_2019_66.readFeatures(json_YearSubje_2019_66, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_YearSubje_2019_66 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_YearSubje_2019_66.addFeatures(features_YearSubje_2019_66);var lyr_YearSubje_2019_66 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_YearSubje_2019_66, 
                style: style_YearSubje_2019_66,
                title: '<img src="styles/legend/YearSubje_2019_66.png" /> Year-Subje_2019'
            });

lyr_OpenStreetMapWMSbyterrestris_0.setVisible(true);lyr_YearSubje_1932painting_1.setVisible(true);lyr_YearSubje_1933sculpture_2.setVisible(true);lyr_YearSubje_1936painting_3.setVisible(true);lyr_YearSubje_1936sculpture_4.setVisible(true);lyr_YearSubje_1937painting_5.setVisible(true);lyr_YearSubje_1938painting_6.setVisible(true);lyr_YearSubje_1938sculpture_7.setVisible(true);lyr_YearSubje_1939sculpture_8.setVisible(true);lyr_YearSubje_1939watercolors_9.setVisible(true);lyr_YearSubje_194041painting_10.setVisible(true);lyr_YearSubje_1940sculpture_11.setVisible(true);lyr_YearSubje_1941painting_12.setVisible(true);lyr_YearSubje_194243sculpture_13.setVisible(true);lyr_YearSubje_194344sculpture_14.setVisible(true);lyr_YearSubje_1944painting_15.setVisible(true);lyr_YearSubje_1945painting_16.setVisible(true);lyr_YearSubje_1945sculpture_17.setVisible(true);lyr_YearSubje_1946painting_18.setVisible(true);lyr_YearSubje_1946sculpture_19.setVisible(true);lyr_YearSubje_1947painting_20.setVisible(true);lyr_YearSubje_1947sculpture_21.setVisible(true);lyr_YearSubje_1948painting_22.setVisible(true);lyr_YearSubje_1949painting_23.setVisible(true);lyr_YearSubje_1949sculpture_24.setVisible(true);lyr_YearSubje_1950painting_25.setVisible(true);lyr_YearSubje_1950sculpture_26.setVisible(true);lyr_YearSubje_1953painting_27.setVisible(true);lyr_YearSubje_1955painting_28.setVisible(true);lyr_YearSubje_1956sculpture_29.setVisible(true);lyr_YearSubje_1957_30.setVisible(true);lyr_YearSubje_1958_31.setVisible(true);lyr_YearSubje_1959painting_32.setVisible(true);lyr_YearSubje_1960sculpture_33.setVisible(true);lyr_YearSubje_1961painting_34.setVisible(true);lyr_YearSubje_1962sculpture_35.setVisible(true);lyr_YearSubje_1963painting_36.setVisible(true);lyr_YearSubje_1964sculpture_37.setVisible(true);lyr_YearSubje_1965painting_38.setVisible(true);lyr_YearSubje_1966sculpture_39.setVisible(true);lyr_YearSubje_1967painting_40.setVisible(true);lyr_YearSubje_1968sculpture_41.setVisible(true);lyr_YearSubje_1969painting_42.setVisible(true);lyr_YearSubje_1970sculpture_43.setVisible(true);lyr_YearSubje_1972painting_44.setVisible(true);lyr_YearSubje_1973_45.setVisible(true);lyr_YearSubje_1975_46.setVisible(true);lyr_YearSubje_1977_47.setVisible(true);lyr_YearSubje_1979_48.setVisible(true);lyr_YearSubje_1981_49.setVisible(true);lyr_YearSubje_1983_50.setVisible(true);lyr_YearSubje_1985_51.setVisible(true);lyr_YearSubje_1989_52.setVisible(true);lyr_YearSubje_1991_53.setVisible(true);lyr_YearSubje_1993_54.setVisible(true);lyr_YearSubje_1995_55.setVisible(true);lyr_YearSubje_1997_56.setVisible(true);lyr_YearSubje_2000_57.setVisible(true);lyr_YearSubje_2002_58.setVisible(true);lyr_YearSubje_2004_59.setVisible(true);lyr_YearSubje_2006_60.setVisible(true);lyr_YearSubje_2008_61.setVisible(true);lyr_YearSubje_2010_62.setVisible(true);lyr_YearSubje_2012_63.setVisible(true);lyr_YearSubje_2014_64.setVisible(true);lyr_YearSubje_2017_65.setVisible(true);lyr_YearSubje_2019_66.setVisible(true);
var layersList = [lyr_OpenStreetMapWMSbyterrestris_0,lyr_YearSubje_1932painting_1,lyr_YearSubje_1933sculpture_2,lyr_YearSubje_1936painting_3,lyr_YearSubje_1936sculpture_4,lyr_YearSubje_1937painting_5,lyr_YearSubje_1938painting_6,lyr_YearSubje_1938sculpture_7,lyr_YearSubje_1939sculpture_8,lyr_YearSubje_1939watercolors_9,lyr_YearSubje_194041painting_10,lyr_YearSubje_1940sculpture_11,lyr_YearSubje_1941painting_12,lyr_YearSubje_194243sculpture_13,lyr_YearSubje_194344sculpture_14,lyr_YearSubje_1944painting_15,lyr_YearSubje_1945painting_16,lyr_YearSubje_1945sculpture_17,lyr_YearSubje_1946painting_18,lyr_YearSubje_1946sculpture_19,lyr_YearSubje_1947painting_20,lyr_YearSubje_1947sculpture_21,lyr_YearSubje_1948painting_22,lyr_YearSubje_1949painting_23,lyr_YearSubje_1949sculpture_24,lyr_YearSubje_1950painting_25,lyr_YearSubje_1950sculpture_26,lyr_YearSubje_1953painting_27,lyr_YearSubje_1955painting_28,lyr_YearSubje_1956sculpture_29,lyr_YearSubje_1957_30,lyr_YearSubje_1958_31,lyr_YearSubje_1959painting_32,lyr_YearSubje_1960sculpture_33,lyr_YearSubje_1961painting_34,lyr_YearSubje_1962sculpture_35,lyr_YearSubje_1963painting_36,lyr_YearSubje_1964sculpture_37,lyr_YearSubje_1965painting_38,lyr_YearSubje_1966sculpture_39,lyr_YearSubje_1967painting_40,lyr_YearSubje_1968sculpture_41,lyr_YearSubje_1969painting_42,lyr_YearSubje_1970sculpture_43,lyr_YearSubje_1972painting_44,lyr_YearSubje_1973_45,lyr_YearSubje_1975_46,lyr_YearSubje_1977_47,lyr_YearSubje_1979_48,lyr_YearSubje_1981_49,lyr_YearSubje_1983_50,lyr_YearSubje_1985_51,lyr_YearSubje_1989_52,lyr_YearSubje_1991_53,lyr_YearSubje_1993_54,lyr_YearSubje_1995_55,lyr_YearSubje_1997_56,lyr_YearSubje_2000_57,lyr_YearSubje_2002_58,lyr_YearSubje_2004_59,lyr_YearSubje_2006_60,lyr_YearSubje_2008_61,lyr_YearSubje_2010_62,lyr_YearSubje_2012_63,lyr_YearSubje_2014_64,lyr_YearSubje_2017_65,lyr_YearSubje_2019_66];
lyr_YearSubje_1932painting_1.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Artist_Fir': 'Artist_Fir', 'Artist_Las': 'Artist_Las', 'Gallery': 'Gallery', 'Number': 'Number', 'Street': 'Street', 'City': 'City', 'State': 'State', 'Country': 'Country', 'Long': 'Long', 'Lat': 'Lat', 'Year-Subje': 'Year-Subje', 'Year': 'Year', 'address': 'address', 'latitude': 'latitude', 'longitude': 'longitude', 'precision': 'precision', });
lyr_YearSubje_1933sculpture_2.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Artist_Fir': 'Artist_Fir', 'Artist_Las': 'Artist_Las', 'Gallery': 'Gallery', 'Number': 'Number', 'Street': 'Street', 'City': 'City', 'State': 'State', 'Country': 'Country', 'Long': 'Long', 'Lat': 'Lat', 'Year-Subje': 'Year-Subje', 'Year': 'Year', 'address': 'address', 'latitude': 'latitude', 'longitude': 'longitude', 'precision': 'precision', });
lyr_YearSubje_1936painting_3.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Artist_Fir': 'Artist_Fir', 'Artist_Las': 'Artist_Las', 'Gallery': 'Gallery', 'Number': 'Number', 'Street': 'Street', 'City': 'City', 'State': 'State', 'Country': 'Country', 'Long': 'Long', 'Lat': 'Lat', 'Year-Subje': 'Year-Subje', 'Year': 'Year', 'address': 'address', 'latitude': 'latitude', 'longitude': 'longitude', 'precision': 'precision', });
lyr_YearSubje_1936sculpture_4.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Artist_Fir': 'Artist_Fir', 'Artist_Las': 'Artist_Las', 'Gallery': 'Gallery', 'Number': 'Number', 'Street': 'Street', 'City': 'City', 'State': 'State', 'Country': 'Country', 'Long': 'Long', 'Lat': 'Lat', 'Year-Subje': 'Year-Subje', 'Year': 'Year', 'address': 'address', 'latitude': 'latitude', 'longitude': 'longitude', 'precision': 'precision', });
lyr_YearSubje_1937painting_5.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Artist_Fir': 'Artist_Fir', 'Artist_Las': 'Artist_Las', 'Gallery': 'Gallery', 'Number': 'Number', 'Street': 'Street', 'City': 'City', 'State': 'State', 'Country': 'Country', 'Long': 'Long', 'Lat': 'Lat', 'Year-Subje': 'Year-Subje', 'Year': 'Year', 'address': 'address', 'latitude': 'latitude', 'longitude': 'longitude', 'precision': 'precision', });
lyr_YearSubje_1938painting_6.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Artist_Fir': 'Artist_Fir', 'Artist_Las': 'Artist_Las', 'Gallery': 'Gallery', 'Number': 'Number', 'Street': 'Street', 'City': 'City', 'State': 'State', 'Country': 'Country', 'Long': 'Long', 'Lat': 'Lat', 'Year-Subje': 'Year-Subje', 'Year': 'Year', 'address': 'address', 'latitude': 'latitude', 'longitude': 'longitude', 'precision': 'precision', });
lyr_YearSubje_1938sculpture_7.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Artist_Fir': 'Artist_Fir', 'Artist_Las': 'Artist_Las', 'Gallery': 'Gallery', 'Number': 'Number', 'Street': 'Street', 'City': 'City', 'State': 'State', 'Country': 'Country', 'Long': 'Long', 'Lat': 'Lat', 'Year-Subje': 'Year-Subje', 'Year': 'Year', 'address': 'address', 'latitude': 'latitude', 'longitude': 'longitude', 'precision': 'precision', });
lyr_YearSubje_1939sculpture_8.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Artist_Fir': 'Artist_Fir', 'Artist_Las': 'Artist_Las', 'Gallery': 'Gallery', 'Number': 'Number', 'Street': 'Street', 'City': 'City', 'State': 'State', 'Country': 'Country', 'Long': 'Long', 'Lat': 'Lat', 'Year-Subje': 'Year-Subje', 'Year': 'Year', 'address': 'address', 'latitude': 'latitude', 'longitude': 'longitude', 'precision': 'precision', });
lyr_YearSubje_1939watercolors_9.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Artist_Fir': 'Artist_Fir', 'Artist_Las': 'Artist_Las', 'Gallery': 'Gallery', 'Number': 'Number', 'Street': 'Street', 'City': 'City', 'State': 'State', 'Country': 'Country', 'Long': 'Long', 'Lat': 'Lat', 'Year-Subje': 'Year-Subje', 'Year': 'Year', 'address': 'address', 'latitude': 'latitude', 'longitude': 'longitude', 'precision': 'precision', });
lyr_YearSubje_194041painting_10.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Artist_Fir': 'Artist_Fir', 'Artist_Las': 'Artist_Las', 'Gallery': 'Gallery', 'Number': 'Number', 'Street': 'Street', 'City': 'City', 'State': 'State', 'Country': 'Country', 'Long': 'Long', 'Lat': 'Lat', 'Year-Subje': 'Year-Subje', 'Year': 'Year', 'address': 'address', 'latitude': 'latitude', 'longitude': 'longitude', 'precision': 'precision', });
lyr_YearSubje_1940sculpture_11.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Artist_Fir': 'Artist_Fir', 'Artist_Las': 'Artist_Las', 'Gallery': 'Gallery', 'Number': 'Number', 'Street': 'Street', 'City': 'City', 'State': 'State', 'Country': 'Country', 'Long': 'Long', 'Lat': 'Lat', 'Year-Subje': 'Year-Subje', 'Year': 'Year', 'address': 'address', 'latitude': 'latitude', 'longitude': 'longitude', 'precision': 'precision', });
lyr_YearSubje_1941painting_12.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Artist_Fir': 'Artist_Fir', 'Artist_Las': 'Artist_Las', 'Gallery': 'Gallery', 'Number': 'Number', 'Street': 'Street', 'City': 'City', 'State': 'State', 'Country': 'Country', 'Long': 'Long', 'Lat': 'Lat', 'Year-Subje': 'Year-Subje', 'Year': 'Year', 'address': 'address', 'latitude': 'latitude', 'longitude': 'longitude', 'precision': 'precision', });
lyr_YearSubje_194243sculpture_13.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Artist_Fir': 'Artist_Fir', 'Artist_Las': 'Artist_Las', 'Gallery': 'Gallery', 'Number': 'Number', 'Street': 'Street', 'City': 'City', 'State': 'State', 'Country': 'Country', 'Long': 'Long', 'Lat': 'Lat', 'Year-Subje': 'Year-Subje', 'Year': 'Year', 'address': 'address', 'latitude': 'latitude', 'longitude': 'longitude', 'precision': 'precision', });
lyr_YearSubje_194344sculpture_14.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Artist_Fir': 'Artist_Fir', 'Artist_Las': 'Artist_Las', 'Gallery': 'Gallery', 'Number': 'Number', 'Street': 'Street', 'City': 'City', 'State': 'State', 'Country': 'Country', 'Long': 'Long', 'Lat': 'Lat', 'Year-Subje': 'Year-Subje', 'Year': 'Year', 'address': 'address', 'latitude': 'latitude', 'longitude': 'longitude', 'precision': 'precision', });
lyr_YearSubje_1944painting_15.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Artist_Fir': 'Artist_Fir', 'Artist_Las': 'Artist_Las', 'Gallery': 'Gallery', 'Number': 'Number', 'Street': 'Street', 'City': 'City', 'State': 'State', 'Country': 'Country', 'Long': 'Long', 'Lat': 'Lat', 'Year-Subje': 'Year-Subje', 'Year': 'Year', 'address': 'address', 'latitude': 'latitude', 'longitude': 'longitude', 'precision': 'precision', });
lyr_YearSubje_1945painting_16.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Artist_Fir': 'Artist_Fir', 'Artist_Las': 'Artist_Las', 'Gallery': 'Gallery', 'Number': 'Number', 'Street': 'Street', 'City': 'City', 'State': 'State', 'Country': 'Country', 'Long': 'Long', 'Lat': 'Lat', 'Year-Subje': 'Year-Subje', 'Year': 'Year', 'address': 'address', 'latitude': 'latitude', 'longitude': 'longitude', 'precision': 'precision', });
lyr_YearSubje_1945sculpture_17.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Artist_Fir': 'Artist_Fir', 'Artist_Las': 'Artist_Las', 'Gallery': 'Gallery', 'Number': 'Number', 'Street': 'Street', 'City': 'City', 'State': 'State', 'Country': 'Country', 'Long': 'Long', 'Lat': 'Lat', 'Year-Subje': 'Year-Subje', 'Year': 'Year', 'address': 'address', 'latitude': 'latitude', 'longitude': 'longitude', 'precision': 'precision', });
lyr_YearSubje_1946painting_18.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Artist_Fir': 'Artist_Fir', 'Artist_Las': 'Artist_Las', 'Gallery': 'Gallery', 'Number': 'Number', 'Street': 'Street', 'City': 'City', 'State': 'State', 'Country': 'Country', 'Long': 'Long', 'Lat': 'Lat', 'Year-Subje': 'Year-Subje', 'Year': 'Year', 'address': 'address', 'latitude': 'latitude', 'longitude': 'longitude', 'precision': 'precision', });
lyr_YearSubje_1946sculpture_19.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Artist_Fir': 'Artist_Fir', 'Artist_Las': 'Artist_Las', 'Gallery': 'Gallery', 'Number': 'Number', 'Street': 'Street', 'City': 'City', 'State': 'State', 'Country': 'Country', 'Long': 'Long', 'Lat': 'Lat', 'Year-Subje': 'Year-Subje', 'Year': 'Year', 'address': 'address', 'latitude': 'latitude', 'longitude': 'longitude', 'precision': 'precision', });
lyr_YearSubje_1947painting_20.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Artist_Fir': 'Artist_Fir', 'Artist_Las': 'Artist_Las', 'Gallery': 'Gallery', 'Number': 'Number', 'Street': 'Street', 'City': 'City', 'State': 'State', 'Country': 'Country', 'Long': 'Long', 'Lat': 'Lat', 'Year-Subje': 'Year-Subje', 'Year': 'Year', 'address': 'address', 'latitude': 'latitude', 'longitude': 'longitude', 'precision': 'precision', });
lyr_YearSubje_1947sculpture_21.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Artist_Fir': 'Artist_Fir', 'Artist_Las': 'Artist_Las', 'Gallery': 'Gallery', 'Number': 'Number', 'Street': 'Street', 'City': 'City', 'State': 'State', 'Country': 'Country', 'Long': 'Long', 'Lat': 'Lat', 'Year-Subje': 'Year-Subje', 'Year': 'Year', 'address': 'address', 'latitude': 'latitude', 'longitude': 'longitude', 'precision': 'precision', });
lyr_YearSubje_1948painting_22.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Artist_Fir': 'Artist_Fir', 'Artist_Las': 'Artist_Las', 'Gallery': 'Gallery', 'Number': 'Number', 'Street': 'Street', 'City': 'City', 'State': 'State', 'Country': 'Country', 'Long': 'Long', 'Lat': 'Lat', 'Year-Subje': 'Year-Subje', 'Year': 'Year', 'address': 'address', 'latitude': 'latitude', 'longitude': 'longitude', 'precision': 'precision', });
lyr_YearSubje_1949painting_23.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Artist_Fir': 'Artist_Fir', 'Artist_Las': 'Artist_Las', 'Gallery': 'Gallery', 'Number': 'Number', 'Street': 'Street', 'City': 'City', 'State': 'State', 'Country': 'Country', 'Long': 'Long', 'Lat': 'Lat', 'Year-Subje': 'Year-Subje', 'Year': 'Year', 'address': 'address', 'latitude': 'latitude', 'longitude': 'longitude', 'precision': 'precision', });
lyr_YearSubje_1949sculpture_24.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Artist_Fir': 'Artist_Fir', 'Artist_Las': 'Artist_Las', 'Gallery': 'Gallery', 'Number': 'Number', 'Street': 'Street', 'City': 'City', 'State': 'State', 'Country': 'Country', 'Long': 'Long', 'Lat': 'Lat', 'Year-Subje': 'Year-Subje', 'Year': 'Year', 'address': 'address', 'latitude': 'latitude', 'longitude': 'longitude', 'precision': 'precision', });
lyr_YearSubje_1950painting_25.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Artist_Fir': 'Artist_Fir', 'Artist_Las': 'Artist_Las', 'Gallery': 'Gallery', 'Number': 'Number', 'Street': 'Street', 'City': 'City', 'State': 'State', 'Country': 'Country', 'Long': 'Long', 'Lat': 'Lat', 'Year-Subje': 'Year-Subje', 'Year': 'Year', 'address': 'address', 'latitude': 'latitude', 'longitude': 'longitude', 'precision': 'precision', });
lyr_YearSubje_1950sculpture_26.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Artist_Fir': 'Artist_Fir', 'Artist_Las': 'Artist_Las', 'Gallery': 'Gallery', 'Number': 'Number', 'Street': 'Street', 'City': 'City', 'State': 'State', 'Country': 'Country', 'Long': 'Long', 'Lat': 'Lat', 'Year-Subje': 'Year-Subje', 'Year': 'Year', 'address': 'address', 'latitude': 'latitude', 'longitude': 'longitude', 'precision': 'precision', });
lyr_YearSubje_1953painting_27.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Artist_Fir': 'Artist_Fir', 'Artist_Las': 'Artist_Las', 'Gallery': 'Gallery', 'Number': 'Number', 'Street': 'Street', 'City': 'City', 'State': 'State', 'Country': 'Country', 'Long': 'Long', 'Lat': 'Lat', 'Year-Subje': 'Year-Subje', 'Year': 'Year', 'address': 'address', 'latitude': 'latitude', 'longitude': 'longitude', 'precision': 'precision', });
lyr_YearSubje_1955painting_28.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Artist_Fir': 'Artist_Fir', 'Artist_Las': 'Artist_Las', 'Gallery': 'Gallery', 'Number': 'Number', 'Street': 'Street', 'City': 'City', 'State': 'State', 'Country': 'Country', 'Long': 'Long', 'Lat': 'Lat', 'Year-Subje': 'Year-Subje', 'Year': 'Year', 'address': 'address', 'latitude': 'latitude', 'longitude': 'longitude', 'precision': 'precision', });
lyr_YearSubje_1956sculpture_29.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Artist_Fir': 'Artist_Fir', 'Artist_Las': 'Artist_Las', 'Gallery': 'Gallery', 'Number': 'Number', 'Street': 'Street', 'City': 'City', 'State': 'State', 'Country': 'Country', 'Long': 'Long', 'Lat': 'Lat', 'Year-Subje': 'Year-Subje', 'Year': 'Year', 'address': 'address', 'latitude': 'latitude', 'longitude': 'longitude', 'precision': 'precision', });
lyr_YearSubje_1957_30.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Artist_Fir': 'Artist_Fir', 'Artist_Las': 'Artist_Las', 'Gallery': 'Gallery', 'Number': 'Number', 'Street': 'Street', 'City': 'City', 'State': 'State', 'Country': 'Country', 'Long': 'Long', 'Lat': 'Lat', 'Year-Subje': 'Year-Subje', 'Year': 'Year', 'address': 'address', 'latitude': 'latitude', 'longitude': 'longitude', 'precision': 'precision', });
lyr_YearSubje_1958_31.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Artist_Fir': 'Artist_Fir', 'Artist_Las': 'Artist_Las', 'Gallery': 'Gallery', 'Number': 'Number', 'Street': 'Street', 'City': 'City', 'State': 'State', 'Country': 'Country', 'Long': 'Long', 'Lat': 'Lat', 'Year-Subje': 'Year-Subje', 'Year': 'Year', 'address': 'address', 'latitude': 'latitude', 'longitude': 'longitude', 'precision': 'precision', });
lyr_YearSubje_1959painting_32.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Artist_Fir': 'Artist_Fir', 'Artist_Las': 'Artist_Las', 'Gallery': 'Gallery', 'Number': 'Number', 'Street': 'Street', 'City': 'City', 'State': 'State', 'Country': 'Country', 'Long': 'Long', 'Lat': 'Lat', 'Year-Subje': 'Year-Subje', 'Year': 'Year', 'address': 'address', 'latitude': 'latitude', 'longitude': 'longitude', 'precision': 'precision', });
lyr_YearSubje_1960sculpture_33.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Artist_Fir': 'Artist_Fir', 'Artist_Las': 'Artist_Las', 'Gallery': 'Gallery', 'Number': 'Number', 'Street': 'Street', 'City': 'City', 'State': 'State', 'Country': 'Country', 'Long': 'Long', 'Lat': 'Lat', 'Year-Subje': 'Year-Subje', 'Year': 'Year', 'address': 'address', 'latitude': 'latitude', 'longitude': 'longitude', 'precision': 'precision', });
lyr_YearSubje_1961painting_34.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Artist_Fir': 'Artist_Fir', 'Artist_Las': 'Artist_Las', 'Gallery': 'Gallery', 'Number': 'Number', 'Street': 'Street', 'City': 'City', 'State': 'State', 'Country': 'Country', 'Long': 'Long', 'Lat': 'Lat', 'Year-Subje': 'Year-Subje', 'Year': 'Year', 'address': 'address', 'latitude': 'latitude', 'longitude': 'longitude', 'precision': 'precision', });
lyr_YearSubje_1962sculpture_35.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Artist_Fir': 'Artist_Fir', 'Artist_Las': 'Artist_Las', 'Gallery': 'Gallery', 'Number': 'Number', 'Street': 'Street', 'City': 'City', 'State': 'State', 'Country': 'Country', 'Long': 'Long', 'Lat': 'Lat', 'Year-Subje': 'Year-Subje', 'Year': 'Year', 'address': 'address', 'latitude': 'latitude', 'longitude': 'longitude', 'precision': 'precision', });
lyr_YearSubje_1963painting_36.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Artist_Fir': 'Artist_Fir', 'Artist_Las': 'Artist_Las', 'Gallery': 'Gallery', 'Number': 'Number', 'Street': 'Street', 'City': 'City', 'State': 'State', 'Country': 'Country', 'Long': 'Long', 'Lat': 'Lat', 'Year-Subje': 'Year-Subje', 'Year': 'Year', 'address': 'address', 'latitude': 'latitude', 'longitude': 'longitude', 'precision': 'precision', });
lyr_YearSubje_1964sculpture_37.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Artist_Fir': 'Artist_Fir', 'Artist_Las': 'Artist_Las', 'Gallery': 'Gallery', 'Number': 'Number', 'Street': 'Street', 'City': 'City', 'State': 'State', 'Country': 'Country', 'Long': 'Long', 'Lat': 'Lat', 'Year-Subje': 'Year-Subje', 'Year': 'Year', 'address': 'address', 'latitude': 'latitude', 'longitude': 'longitude', 'precision': 'precision', });
lyr_YearSubje_1965painting_38.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Artist_Fir': 'Artist_Fir', 'Artist_Las': 'Artist_Las', 'Gallery': 'Gallery', 'Number': 'Number', 'Street': 'Street', 'City': 'City', 'State': 'State', 'Country': 'Country', 'Long': 'Long', 'Lat': 'Lat', 'Year-Subje': 'Year-Subje', 'Year': 'Year', 'address': 'address', 'latitude': 'latitude', 'longitude': 'longitude', 'precision': 'precision', });
lyr_YearSubje_1966sculpture_39.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Artist_Fir': 'Artist_Fir', 'Artist_Las': 'Artist_Las', 'Gallery': 'Gallery', 'Number': 'Number', 'Street': 'Street', 'City': 'City', 'State': 'State', 'Country': 'Country', 'Long': 'Long', 'Lat': 'Lat', 'Year-Subje': 'Year-Subje', 'Year': 'Year', 'address': 'address', 'latitude': 'latitude', 'longitude': 'longitude', 'precision': 'precision', });
lyr_YearSubje_1967painting_40.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Artist_Fir': 'Artist_Fir', 'Artist_Las': 'Artist_Las', 'Gallery': 'Gallery', 'Number': 'Number', 'Street': 'Street', 'City': 'City', 'State': 'State', 'Country': 'Country', 'Long': 'Long', 'Lat': 'Lat', 'Year-Subje': 'Year-Subje', 'Year': 'Year', 'address': 'address', 'latitude': 'latitude', 'longitude': 'longitude', 'precision': 'precision', });
lyr_YearSubje_1968sculpture_41.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Artist_Fir': 'Artist_Fir', 'Artist_Las': 'Artist_Las', 'Gallery': 'Gallery', 'Number': 'Number', 'Street': 'Street', 'City': 'City', 'State': 'State', 'Country': 'Country', 'Long': 'Long', 'Lat': 'Lat', 'Year-Subje': 'Year-Subje', 'Year': 'Year', 'address': 'address', 'latitude': 'latitude', 'longitude': 'longitude', 'precision': 'precision', });
lyr_YearSubje_1969painting_42.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Artist_Fir': 'Artist_Fir', 'Artist_Las': 'Artist_Las', 'Gallery': 'Gallery', 'Number': 'Number', 'Street': 'Street', 'City': 'City', 'State': 'State', 'Country': 'Country', 'Long': 'Long', 'Lat': 'Lat', 'Year-Subje': 'Year-Subje', 'Year': 'Year', 'address': 'address', 'latitude': 'latitude', 'longitude': 'longitude', 'precision': 'precision', });
lyr_YearSubje_1970sculpture_43.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Artist_Fir': 'Artist_Fir', 'Artist_Las': 'Artist_Las', 'Gallery': 'Gallery', 'Number': 'Number', 'Street': 'Street', 'City': 'City', 'State': 'State', 'Country': 'Country', 'Long': 'Long', 'Lat': 'Lat', 'Year-Subje': 'Year-Subje', 'Year': 'Year', 'address': 'address', 'latitude': 'latitude', 'longitude': 'longitude', 'precision': 'precision', });
lyr_YearSubje_1972painting_44.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Artist_Fir': 'Artist_Fir', 'Artist_Las': 'Artist_Las', 'Gallery': 'Gallery', 'Number': 'Number', 'Street': 'Street', 'City': 'City', 'State': 'State', 'Country': 'Country', 'Long': 'Long', 'Lat': 'Lat', 'Year-Subje': 'Year-Subje', 'Year': 'Year', 'address': 'address', 'latitude': 'latitude', 'longitude': 'longitude', 'precision': 'precision', });
lyr_YearSubje_1973_45.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Artist_Fir': 'Artist_Fir', 'Artist_Las': 'Artist_Las', 'Gallery': 'Gallery', 'Number': 'Number', 'Street': 'Street', 'City': 'City', 'State': 'State', 'Country': 'Country', 'Long': 'Long', 'Lat': 'Lat', 'Year-Subje': 'Year-Subje', 'Year': 'Year', 'address': 'address', 'latitude': 'latitude', 'longitude': 'longitude', 'precision': 'precision', });
lyr_YearSubje_1975_46.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Artist_Fir': 'Artist_Fir', 'Artist_Las': 'Artist_Las', 'Gallery': 'Gallery', 'Number': 'Number', 'Street': 'Street', 'City': 'City', 'State': 'State', 'Country': 'Country', 'Long': 'Long', 'Lat': 'Lat', 'Year-Subje': 'Year-Subje', 'Year': 'Year', 'address': 'address', 'latitude': 'latitude', 'longitude': 'longitude', 'precision': 'precision', });
lyr_YearSubje_1977_47.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Artist_Fir': 'Artist_Fir', 'Artist_Las': 'Artist_Las', 'Gallery': 'Gallery', 'Number': 'Number', 'Street': 'Street', 'City': 'City', 'State': 'State', 'Country': 'Country', 'Long': 'Long', 'Lat': 'Lat', 'Year-Subje': 'Year-Subje', 'Year': 'Year', 'address': 'address', 'latitude': 'latitude', 'longitude': 'longitude', 'precision': 'precision', });
lyr_YearSubje_1979_48.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Artist_Fir': 'Artist_Fir', 'Artist_Las': 'Artist_Las', 'Gallery': 'Gallery', 'Number': 'Number', 'Street': 'Street', 'City': 'City', 'State': 'State', 'Country': 'Country', 'Long': 'Long', 'Lat': 'Lat', 'Year-Subje': 'Year-Subje', 'Year': 'Year', 'address': 'address', 'latitude': 'latitude', 'longitude': 'longitude', 'precision': 'precision', });
lyr_YearSubje_1981_49.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Artist_Fir': 'Artist_Fir', 'Artist_Las': 'Artist_Las', 'Gallery': 'Gallery', 'Number': 'Number', 'Street': 'Street', 'City': 'City', 'State': 'State', 'Country': 'Country', 'Long': 'Long', 'Lat': 'Lat', 'Year-Subje': 'Year-Subje', 'Year': 'Year', 'address': 'address', 'latitude': 'latitude', 'longitude': 'longitude', 'precision': 'precision', });
lyr_YearSubje_1983_50.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Artist_Fir': 'Artist_Fir', 'Artist_Las': 'Artist_Las', 'Gallery': 'Gallery', 'Number': 'Number', 'Street': 'Street', 'City': 'City', 'State': 'State', 'Country': 'Country', 'Long': 'Long', 'Lat': 'Lat', 'Year-Subje': 'Year-Subje', 'Year': 'Year', 'address': 'address', 'latitude': 'latitude', 'longitude': 'longitude', 'precision': 'precision', });
lyr_YearSubje_1985_51.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Artist_Fir': 'Artist_Fir', 'Artist_Las': 'Artist_Las', 'Gallery': 'Gallery', 'Number': 'Number', 'Street': 'Street', 'City': 'City', 'State': 'State', 'Country': 'Country', 'Long': 'Long', 'Lat': 'Lat', 'Year-Subje': 'Year-Subje', 'Year': 'Year', 'address': 'address', 'latitude': 'latitude', 'longitude': 'longitude', 'precision': 'precision', });
lyr_YearSubje_1989_52.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Artist_Fir': 'Artist_Fir', 'Artist_Las': 'Artist_Las', 'Gallery': 'Gallery', 'Number': 'Number', 'Street': 'Street', 'City': 'City', 'State': 'State', 'Country': 'Country', 'Long': 'Long', 'Lat': 'Lat', 'Year-Subje': 'Year-Subje', 'Year': 'Year', 'address': 'address', 'latitude': 'latitude', 'longitude': 'longitude', 'precision': 'precision', });
lyr_YearSubje_1991_53.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Artist_Fir': 'Artist_Fir', 'Artist_Las': 'Artist_Las', 'Gallery': 'Gallery', 'Number': 'Number', 'Street': 'Street', 'City': 'City', 'State': 'State', 'Country': 'Country', 'Long': 'Long', 'Lat': 'Lat', 'Year-Subje': 'Year-Subje', 'Year': 'Year', 'address': 'address', 'latitude': 'latitude', 'longitude': 'longitude', 'precision': 'precision', });
lyr_YearSubje_1993_54.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Artist_Fir': 'Artist_Fir', 'Artist_Las': 'Artist_Las', 'Gallery': 'Gallery', 'Number': 'Number', 'Street': 'Street', 'City': 'City', 'State': 'State', 'Country': 'Country', 'Long': 'Long', 'Lat': 'Lat', 'Year-Subje': 'Year-Subje', 'Year': 'Year', 'address': 'address', 'latitude': 'latitude', 'longitude': 'longitude', 'precision': 'precision', });
lyr_YearSubje_1995_55.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Artist_Fir': 'Artist_Fir', 'Artist_Las': 'Artist_Las', 'Gallery': 'Gallery', 'Number': 'Number', 'Street': 'Street', 'City': 'City', 'State': 'State', 'Country': 'Country', 'Long': 'Long', 'Lat': 'Lat', 'Year-Subje': 'Year-Subje', 'Year': 'Year', 'address': 'address', 'latitude': 'latitude', 'longitude': 'longitude', 'precision': 'precision', });
lyr_YearSubje_1997_56.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Artist_Fir': 'Artist_Fir', 'Artist_Las': 'Artist_Las', 'Gallery': 'Gallery', 'Number': 'Number', 'Street': 'Street', 'City': 'City', 'State': 'State', 'Country': 'Country', 'Long': 'Long', 'Lat': 'Lat', 'Year-Subje': 'Year-Subje', 'Year': 'Year', 'address': 'address', 'latitude': 'latitude', 'longitude': 'longitude', 'precision': 'precision', });
lyr_YearSubje_2000_57.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Artist_Fir': 'Artist_Fir', 'Artist_Las': 'Artist_Las', 'Gallery': 'Gallery', 'Number': 'Number', 'Street': 'Street', 'City': 'City', 'State': 'State', 'Country': 'Country', 'Long': 'Long', 'Lat': 'Lat', 'Year-Subje': 'Year-Subje', 'Year': 'Year', 'address': 'address', 'latitude': 'latitude', 'longitude': 'longitude', 'precision': 'precision', });
lyr_YearSubje_2002_58.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Artist_Fir': 'Artist_Fir', 'Artist_Las': 'Artist_Las', 'Gallery': 'Gallery', 'Number': 'Number', 'Street': 'Street', 'City': 'City', 'State': 'State', 'Country': 'Country', 'Long': 'Long', 'Lat': 'Lat', 'Year-Subje': 'Year-Subje', 'Year': 'Year', 'address': 'address', 'latitude': 'latitude', 'longitude': 'longitude', 'precision': 'precision', });
lyr_YearSubje_2004_59.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Artist_Fir': 'Artist_Fir', 'Artist_Las': 'Artist_Las', 'Gallery': 'Gallery', 'Number': 'Number', 'Street': 'Street', 'City': 'City', 'State': 'State', 'Country': 'Country', 'Long': 'Long', 'Lat': 'Lat', 'Year-Subje': 'Year-Subje', 'Year': 'Year', 'address': 'address', 'latitude': 'latitude', 'longitude': 'longitude', 'precision': 'precision', });
lyr_YearSubje_2006_60.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Artist_Fir': 'Artist_Fir', 'Artist_Las': 'Artist_Las', 'Gallery': 'Gallery', 'Number': 'Number', 'Street': 'Street', 'City': 'City', 'State': 'State', 'Country': 'Country', 'Long': 'Long', 'Lat': 'Lat', 'Year-Subje': 'Year-Subje', 'Year': 'Year', 'address': 'address', 'latitude': 'latitude', 'longitude': 'longitude', 'precision': 'precision', });
lyr_YearSubje_2008_61.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Artist_Fir': 'Artist_Fir', 'Artist_Las': 'Artist_Las', 'Gallery': 'Gallery', 'Number': 'Number', 'Street': 'Street', 'City': 'City', 'State': 'State', 'Country': 'Country', 'Long': 'Long', 'Lat': 'Lat', 'Year-Subje': 'Year-Subje', 'Year': 'Year', 'address': 'address', 'latitude': 'latitude', 'longitude': 'longitude', 'precision': 'precision', });
lyr_YearSubje_2010_62.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Artist_Fir': 'Artist_Fir', 'Artist_Las': 'Artist_Las', 'Gallery': 'Gallery', 'Number': 'Number', 'Street': 'Street', 'City': 'City', 'State': 'State', 'Country': 'Country', 'Long': 'Long', 'Lat': 'Lat', 'Year-Subje': 'Year-Subje', 'Year': 'Year', 'address': 'address', 'latitude': 'latitude', 'longitude': 'longitude', 'precision': 'precision', });
lyr_YearSubje_2012_63.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Artist_Fir': 'Artist_Fir', 'Artist_Las': 'Artist_Las', 'Gallery': 'Gallery', 'Number': 'Number', 'Street': 'Street', 'City': 'City', 'State': 'State', 'Country': 'Country', 'Long': 'Long', 'Lat': 'Lat', 'Year-Subje': 'Year-Subje', 'Year': 'Year', 'address': 'address', 'latitude': 'latitude', 'longitude': 'longitude', 'precision': 'precision', });
lyr_YearSubje_2014_64.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Artist_Fir': 'Artist_Fir', 'Artist_Las': 'Artist_Las', 'Gallery': 'Gallery', 'Number': 'Number', 'Street': 'Street', 'City': 'City', 'State': 'State', 'Country': 'Country', 'Long': 'Long', 'Lat': 'Lat', 'Year-Subje': 'Year-Subje', 'Year': 'Year', 'address': 'address', 'latitude': 'latitude', 'longitude': 'longitude', 'precision': 'precision', });
lyr_YearSubje_2017_65.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Artist_Fir': 'Artist_Fir', 'Artist_Las': 'Artist_Las', 'Gallery': 'Gallery', 'Number': 'Number', 'Street': 'Street', 'City': 'City', 'State': 'State', 'Country': 'Country', 'Long': 'Long', 'Lat': 'Lat', 'Year-Subje': 'Year-Subje', 'Year': 'Year', 'address': 'address', 'latitude': 'latitude', 'longitude': 'longitude', 'precision': 'precision', });
lyr_YearSubje_2019_66.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Artist_Fir': 'Artist_Fir', 'Artist_Las': 'Artist_Las', 'Gallery': 'Gallery', 'Number': 'Number', 'Street': 'Street', 'City': 'City', 'State': 'State', 'Country': 'Country', 'Long': 'Long', 'Lat': 'Lat', 'Year-Subje': 'Year-Subje', 'Year': 'Year', 'address': 'address', 'latitude': 'latitude', 'longitude': 'longitude', 'precision': 'precision', });
lyr_YearSubje_1932painting_1.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'Artist_Fir': 'TextEdit', 'Artist_Las': 'TextEdit', 'Gallery': 'TextEdit', 'Number': 'TextEdit', 'Street': 'TextEdit', 'City': 'TextEdit', 'State': 'TextEdit', 'Country': 'TextEdit', 'Long': 'TextEdit', 'Lat': 'TextEdit', 'Year-Subje': 'TextEdit', 'Year': 'TextEdit', 'address': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'precision': 'TextEdit', });
lyr_YearSubje_1933sculpture_2.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'Artist_Fir': 'TextEdit', 'Artist_Las': 'TextEdit', 'Gallery': 'TextEdit', 'Number': 'TextEdit', 'Street': 'TextEdit', 'City': 'TextEdit', 'State': 'TextEdit', 'Country': 'TextEdit', 'Long': 'TextEdit', 'Lat': 'TextEdit', 'Year-Subje': 'TextEdit', 'Year': 'TextEdit', 'address': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'precision': 'TextEdit', });
lyr_YearSubje_1936painting_3.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'Artist_Fir': 'TextEdit', 'Artist_Las': 'TextEdit', 'Gallery': 'TextEdit', 'Number': 'TextEdit', 'Street': 'TextEdit', 'City': 'TextEdit', 'State': 'TextEdit', 'Country': 'TextEdit', 'Long': 'TextEdit', 'Lat': 'TextEdit', 'Year-Subje': 'TextEdit', 'Year': 'TextEdit', 'address': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'precision': 'TextEdit', });
lyr_YearSubje_1936sculpture_4.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'Artist_Fir': 'TextEdit', 'Artist_Las': 'TextEdit', 'Gallery': 'TextEdit', 'Number': 'TextEdit', 'Street': 'TextEdit', 'City': 'TextEdit', 'State': 'TextEdit', 'Country': 'TextEdit', 'Long': 'TextEdit', 'Lat': 'TextEdit', 'Year-Subje': 'TextEdit', 'Year': 'TextEdit', 'address': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'precision': 'TextEdit', });
lyr_YearSubje_1937painting_5.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'Artist_Fir': 'TextEdit', 'Artist_Las': 'TextEdit', 'Gallery': 'TextEdit', 'Number': 'TextEdit', 'Street': 'TextEdit', 'City': 'TextEdit', 'State': 'TextEdit', 'Country': 'TextEdit', 'Long': 'TextEdit', 'Lat': 'TextEdit', 'Year-Subje': 'TextEdit', 'Year': 'TextEdit', 'address': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'precision': 'TextEdit', });
lyr_YearSubje_1938painting_6.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'Artist_Fir': 'TextEdit', 'Artist_Las': 'TextEdit', 'Gallery': 'TextEdit', 'Number': 'TextEdit', 'Street': 'TextEdit', 'City': 'TextEdit', 'State': 'TextEdit', 'Country': 'TextEdit', 'Long': 'TextEdit', 'Lat': 'TextEdit', 'Year-Subje': 'TextEdit', 'Year': 'TextEdit', 'address': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'precision': 'TextEdit', });
lyr_YearSubje_1938sculpture_7.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'Artist_Fir': 'TextEdit', 'Artist_Las': 'TextEdit', 'Gallery': 'TextEdit', 'Number': 'TextEdit', 'Street': 'TextEdit', 'City': 'TextEdit', 'State': 'TextEdit', 'Country': 'TextEdit', 'Long': 'TextEdit', 'Lat': 'TextEdit', 'Year-Subje': 'TextEdit', 'Year': 'TextEdit', 'address': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'precision': 'TextEdit', });
lyr_YearSubje_1939sculpture_8.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'Artist_Fir': 'TextEdit', 'Artist_Las': 'TextEdit', 'Gallery': 'TextEdit', 'Number': 'TextEdit', 'Street': 'TextEdit', 'City': 'TextEdit', 'State': 'TextEdit', 'Country': 'TextEdit', 'Long': 'TextEdit', 'Lat': 'TextEdit', 'Year-Subje': 'TextEdit', 'Year': 'TextEdit', 'address': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'precision': 'TextEdit', });
lyr_YearSubje_1939watercolors_9.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'Artist_Fir': 'TextEdit', 'Artist_Las': 'TextEdit', 'Gallery': 'TextEdit', 'Number': 'TextEdit', 'Street': 'TextEdit', 'City': 'TextEdit', 'State': 'TextEdit', 'Country': 'TextEdit', 'Long': 'TextEdit', 'Lat': 'TextEdit', 'Year-Subje': 'TextEdit', 'Year': 'TextEdit', 'address': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'precision': 'TextEdit', });
lyr_YearSubje_194041painting_10.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'Artist_Fir': 'TextEdit', 'Artist_Las': 'TextEdit', 'Gallery': 'TextEdit', 'Number': 'TextEdit', 'Street': 'TextEdit', 'City': 'TextEdit', 'State': 'TextEdit', 'Country': 'TextEdit', 'Long': 'TextEdit', 'Lat': 'TextEdit', 'Year-Subje': 'TextEdit', 'Year': 'TextEdit', 'address': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'precision': 'TextEdit', });
lyr_YearSubje_1940sculpture_11.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'Artist_Fir': 'TextEdit', 'Artist_Las': 'TextEdit', 'Gallery': 'TextEdit', 'Number': 'TextEdit', 'Street': 'TextEdit', 'City': 'TextEdit', 'State': 'TextEdit', 'Country': 'TextEdit', 'Long': 'TextEdit', 'Lat': 'TextEdit', 'Year-Subje': 'TextEdit', 'Year': 'TextEdit', 'address': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'precision': 'TextEdit', });
lyr_YearSubje_1941painting_12.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'Artist_Fir': 'TextEdit', 'Artist_Las': 'TextEdit', 'Gallery': 'TextEdit', 'Number': 'TextEdit', 'Street': 'TextEdit', 'City': 'TextEdit', 'State': 'TextEdit', 'Country': 'TextEdit', 'Long': 'TextEdit', 'Lat': 'TextEdit', 'Year-Subje': 'TextEdit', 'Year': 'TextEdit', 'address': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'precision': 'TextEdit', });
lyr_YearSubje_194243sculpture_13.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'Artist_Fir': 'TextEdit', 'Artist_Las': 'TextEdit', 'Gallery': 'TextEdit', 'Number': 'TextEdit', 'Street': 'TextEdit', 'City': 'TextEdit', 'State': 'TextEdit', 'Country': 'TextEdit', 'Long': 'TextEdit', 'Lat': 'TextEdit', 'Year-Subje': 'TextEdit', 'Year': 'TextEdit', 'address': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'precision': 'TextEdit', });
lyr_YearSubje_194344sculpture_14.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'Artist_Fir': 'TextEdit', 'Artist_Las': 'TextEdit', 'Gallery': 'TextEdit', 'Number': 'TextEdit', 'Street': 'TextEdit', 'City': 'TextEdit', 'State': 'TextEdit', 'Country': 'TextEdit', 'Long': 'TextEdit', 'Lat': 'TextEdit', 'Year-Subje': 'TextEdit', 'Year': 'TextEdit', 'address': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'precision': 'TextEdit', });
lyr_YearSubje_1944painting_15.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'Artist_Fir': 'TextEdit', 'Artist_Las': 'TextEdit', 'Gallery': 'TextEdit', 'Number': 'TextEdit', 'Street': 'TextEdit', 'City': 'TextEdit', 'State': 'TextEdit', 'Country': 'TextEdit', 'Long': 'TextEdit', 'Lat': 'TextEdit', 'Year-Subje': 'TextEdit', 'Year': 'TextEdit', 'address': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'precision': 'TextEdit', });
lyr_YearSubje_1945painting_16.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'Artist_Fir': 'TextEdit', 'Artist_Las': 'TextEdit', 'Gallery': 'TextEdit', 'Number': 'TextEdit', 'Street': 'TextEdit', 'City': 'TextEdit', 'State': 'TextEdit', 'Country': 'TextEdit', 'Long': 'TextEdit', 'Lat': 'TextEdit', 'Year-Subje': 'TextEdit', 'Year': 'TextEdit', 'address': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'precision': 'TextEdit', });
lyr_YearSubje_1945sculpture_17.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'Artist_Fir': 'TextEdit', 'Artist_Las': 'TextEdit', 'Gallery': 'TextEdit', 'Number': 'TextEdit', 'Street': 'TextEdit', 'City': 'TextEdit', 'State': 'TextEdit', 'Country': 'TextEdit', 'Long': 'TextEdit', 'Lat': 'TextEdit', 'Year-Subje': 'TextEdit', 'Year': 'TextEdit', 'address': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'precision': 'TextEdit', });
lyr_YearSubje_1946painting_18.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'Artist_Fir': 'TextEdit', 'Artist_Las': 'TextEdit', 'Gallery': 'TextEdit', 'Number': 'TextEdit', 'Street': 'TextEdit', 'City': 'TextEdit', 'State': 'TextEdit', 'Country': 'TextEdit', 'Long': 'TextEdit', 'Lat': 'TextEdit', 'Year-Subje': 'TextEdit', 'Year': 'TextEdit', 'address': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'precision': 'TextEdit', });
lyr_YearSubje_1946sculpture_19.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'Artist_Fir': 'TextEdit', 'Artist_Las': 'TextEdit', 'Gallery': 'TextEdit', 'Number': 'TextEdit', 'Street': 'TextEdit', 'City': 'TextEdit', 'State': 'TextEdit', 'Country': 'TextEdit', 'Long': 'TextEdit', 'Lat': 'TextEdit', 'Year-Subje': 'TextEdit', 'Year': 'TextEdit', 'address': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'precision': 'TextEdit', });
lyr_YearSubje_1947painting_20.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'Artist_Fir': 'TextEdit', 'Artist_Las': 'TextEdit', 'Gallery': 'TextEdit', 'Number': 'TextEdit', 'Street': 'TextEdit', 'City': 'TextEdit', 'State': 'TextEdit', 'Country': 'TextEdit', 'Long': 'TextEdit', 'Lat': 'TextEdit', 'Year-Subje': 'TextEdit', 'Year': 'TextEdit', 'address': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'precision': 'TextEdit', });
lyr_YearSubje_1947sculpture_21.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'Artist_Fir': 'TextEdit', 'Artist_Las': 'TextEdit', 'Gallery': 'TextEdit', 'Number': 'TextEdit', 'Street': 'TextEdit', 'City': 'TextEdit', 'State': 'TextEdit', 'Country': 'TextEdit', 'Long': 'TextEdit', 'Lat': 'TextEdit', 'Year-Subje': 'TextEdit', 'Year': 'TextEdit', 'address': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'precision': 'TextEdit', });
lyr_YearSubje_1948painting_22.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'Artist_Fir': 'TextEdit', 'Artist_Las': 'TextEdit', 'Gallery': 'TextEdit', 'Number': 'TextEdit', 'Street': 'TextEdit', 'City': 'TextEdit', 'State': 'TextEdit', 'Country': 'TextEdit', 'Long': 'TextEdit', 'Lat': 'TextEdit', 'Year-Subje': 'TextEdit', 'Year': 'TextEdit', 'address': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'precision': 'TextEdit', });
lyr_YearSubje_1949painting_23.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'Artist_Fir': 'TextEdit', 'Artist_Las': 'TextEdit', 'Gallery': 'TextEdit', 'Number': 'TextEdit', 'Street': 'TextEdit', 'City': 'TextEdit', 'State': 'TextEdit', 'Country': 'TextEdit', 'Long': 'TextEdit', 'Lat': 'TextEdit', 'Year-Subje': 'TextEdit', 'Year': 'TextEdit', 'address': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'precision': 'TextEdit', });
lyr_YearSubje_1949sculpture_24.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'Artist_Fir': 'TextEdit', 'Artist_Las': 'TextEdit', 'Gallery': 'TextEdit', 'Number': 'TextEdit', 'Street': 'TextEdit', 'City': 'TextEdit', 'State': 'TextEdit', 'Country': 'TextEdit', 'Long': 'TextEdit', 'Lat': 'TextEdit', 'Year-Subje': 'TextEdit', 'Year': 'TextEdit', 'address': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'precision': 'TextEdit', });
lyr_YearSubje_1950painting_25.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'Artist_Fir': 'TextEdit', 'Artist_Las': 'TextEdit', 'Gallery': 'TextEdit', 'Number': 'TextEdit', 'Street': 'TextEdit', 'City': 'TextEdit', 'State': 'TextEdit', 'Country': 'TextEdit', 'Long': 'TextEdit', 'Lat': 'TextEdit', 'Year-Subje': 'TextEdit', 'Year': 'TextEdit', 'address': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'precision': 'TextEdit', });
lyr_YearSubje_1950sculpture_26.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'Artist_Fir': 'TextEdit', 'Artist_Las': 'TextEdit', 'Gallery': 'TextEdit', 'Number': 'TextEdit', 'Street': 'TextEdit', 'City': 'TextEdit', 'State': 'TextEdit', 'Country': 'TextEdit', 'Long': 'TextEdit', 'Lat': 'TextEdit', 'Year-Subje': 'TextEdit', 'Year': 'TextEdit', 'address': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'precision': 'TextEdit', });
lyr_YearSubje_1953painting_27.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'Artist_Fir': 'TextEdit', 'Artist_Las': 'TextEdit', 'Gallery': 'TextEdit', 'Number': 'TextEdit', 'Street': 'TextEdit', 'City': 'TextEdit', 'State': 'TextEdit', 'Country': 'TextEdit', 'Long': 'TextEdit', 'Lat': 'TextEdit', 'Year-Subje': 'TextEdit', 'Year': 'TextEdit', 'address': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'precision': 'TextEdit', });
lyr_YearSubje_1955painting_28.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'Artist_Fir': 'TextEdit', 'Artist_Las': 'TextEdit', 'Gallery': 'TextEdit', 'Number': 'TextEdit', 'Street': 'TextEdit', 'City': 'TextEdit', 'State': 'TextEdit', 'Country': 'TextEdit', 'Long': 'TextEdit', 'Lat': 'TextEdit', 'Year-Subje': 'TextEdit', 'Year': 'TextEdit', 'address': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'precision': 'TextEdit', });
lyr_YearSubje_1956sculpture_29.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'Artist_Fir': 'TextEdit', 'Artist_Las': 'TextEdit', 'Gallery': 'TextEdit', 'Number': 'TextEdit', 'Street': 'TextEdit', 'City': 'TextEdit', 'State': 'TextEdit', 'Country': 'TextEdit', 'Long': 'TextEdit', 'Lat': 'TextEdit', 'Year-Subje': 'TextEdit', 'Year': 'TextEdit', 'address': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'precision': 'TextEdit', });
lyr_YearSubje_1957_30.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'Artist_Fir': 'TextEdit', 'Artist_Las': 'TextEdit', 'Gallery': 'TextEdit', 'Number': 'TextEdit', 'Street': 'TextEdit', 'City': 'TextEdit', 'State': 'TextEdit', 'Country': 'TextEdit', 'Long': 'TextEdit', 'Lat': 'TextEdit', 'Year-Subje': 'TextEdit', 'Year': 'TextEdit', 'address': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'precision': 'TextEdit', });
lyr_YearSubje_1958_31.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'Artist_Fir': 'TextEdit', 'Artist_Las': 'TextEdit', 'Gallery': 'TextEdit', 'Number': 'TextEdit', 'Street': 'TextEdit', 'City': 'TextEdit', 'State': 'TextEdit', 'Country': 'TextEdit', 'Long': 'TextEdit', 'Lat': 'TextEdit', 'Year-Subje': 'TextEdit', 'Year': 'TextEdit', 'address': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'precision': 'TextEdit', });
lyr_YearSubje_1959painting_32.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'Artist_Fir': 'TextEdit', 'Artist_Las': 'TextEdit', 'Gallery': 'TextEdit', 'Number': 'TextEdit', 'Street': 'TextEdit', 'City': 'TextEdit', 'State': 'TextEdit', 'Country': 'TextEdit', 'Long': 'TextEdit', 'Lat': 'TextEdit', 'Year-Subje': 'TextEdit', 'Year': 'TextEdit', 'address': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'precision': 'TextEdit', });
lyr_YearSubje_1960sculpture_33.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'Artist_Fir': 'TextEdit', 'Artist_Las': 'TextEdit', 'Gallery': 'TextEdit', 'Number': 'TextEdit', 'Street': 'TextEdit', 'City': 'TextEdit', 'State': 'TextEdit', 'Country': 'TextEdit', 'Long': 'TextEdit', 'Lat': 'TextEdit', 'Year-Subje': 'TextEdit', 'Year': 'TextEdit', 'address': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'precision': 'TextEdit', });
lyr_YearSubje_1961painting_34.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'Artist_Fir': 'TextEdit', 'Artist_Las': 'TextEdit', 'Gallery': 'TextEdit', 'Number': 'TextEdit', 'Street': 'TextEdit', 'City': 'TextEdit', 'State': 'TextEdit', 'Country': 'TextEdit', 'Long': 'TextEdit', 'Lat': 'TextEdit', 'Year-Subje': 'TextEdit', 'Year': 'TextEdit', 'address': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'precision': 'TextEdit', });
lyr_YearSubje_1962sculpture_35.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'Artist_Fir': 'TextEdit', 'Artist_Las': 'TextEdit', 'Gallery': 'TextEdit', 'Number': 'TextEdit', 'Street': 'TextEdit', 'City': 'TextEdit', 'State': 'TextEdit', 'Country': 'TextEdit', 'Long': 'TextEdit', 'Lat': 'TextEdit', 'Year-Subje': 'TextEdit', 'Year': 'TextEdit', 'address': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'precision': 'TextEdit', });
lyr_YearSubje_1963painting_36.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'Artist_Fir': 'TextEdit', 'Artist_Las': 'TextEdit', 'Gallery': 'TextEdit', 'Number': 'TextEdit', 'Street': 'TextEdit', 'City': 'TextEdit', 'State': 'TextEdit', 'Country': 'TextEdit', 'Long': 'TextEdit', 'Lat': 'TextEdit', 'Year-Subje': 'TextEdit', 'Year': 'TextEdit', 'address': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'precision': 'TextEdit', });
lyr_YearSubje_1964sculpture_37.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'Artist_Fir': 'TextEdit', 'Artist_Las': 'TextEdit', 'Gallery': 'TextEdit', 'Number': 'TextEdit', 'Street': 'TextEdit', 'City': 'TextEdit', 'State': 'TextEdit', 'Country': 'TextEdit', 'Long': 'TextEdit', 'Lat': 'TextEdit', 'Year-Subje': 'TextEdit', 'Year': 'TextEdit', 'address': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'precision': 'TextEdit', });
lyr_YearSubje_1965painting_38.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'Artist_Fir': 'TextEdit', 'Artist_Las': 'TextEdit', 'Gallery': 'TextEdit', 'Number': 'TextEdit', 'Street': 'TextEdit', 'City': 'TextEdit', 'State': 'TextEdit', 'Country': 'TextEdit', 'Long': 'TextEdit', 'Lat': 'TextEdit', 'Year-Subje': 'TextEdit', 'Year': 'TextEdit', 'address': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'precision': 'TextEdit', });
lyr_YearSubje_1966sculpture_39.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'Artist_Fir': 'TextEdit', 'Artist_Las': 'TextEdit', 'Gallery': 'TextEdit', 'Number': 'TextEdit', 'Street': 'TextEdit', 'City': 'TextEdit', 'State': 'TextEdit', 'Country': 'TextEdit', 'Long': 'TextEdit', 'Lat': 'TextEdit', 'Year-Subje': 'TextEdit', 'Year': 'TextEdit', 'address': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'precision': 'TextEdit', });
lyr_YearSubje_1967painting_40.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'Artist_Fir': 'TextEdit', 'Artist_Las': 'TextEdit', 'Gallery': 'TextEdit', 'Number': 'TextEdit', 'Street': 'TextEdit', 'City': 'TextEdit', 'State': 'TextEdit', 'Country': 'TextEdit', 'Long': 'TextEdit', 'Lat': 'TextEdit', 'Year-Subje': 'TextEdit', 'Year': 'TextEdit', 'address': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'precision': 'TextEdit', });
lyr_YearSubje_1968sculpture_41.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'Artist_Fir': 'TextEdit', 'Artist_Las': 'TextEdit', 'Gallery': 'TextEdit', 'Number': 'TextEdit', 'Street': 'TextEdit', 'City': 'TextEdit', 'State': 'TextEdit', 'Country': 'TextEdit', 'Long': 'TextEdit', 'Lat': 'TextEdit', 'Year-Subje': 'TextEdit', 'Year': 'TextEdit', 'address': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'precision': 'TextEdit', });
lyr_YearSubje_1969painting_42.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'Artist_Fir': 'TextEdit', 'Artist_Las': 'TextEdit', 'Gallery': 'TextEdit', 'Number': 'TextEdit', 'Street': 'TextEdit', 'City': 'TextEdit', 'State': 'TextEdit', 'Country': 'TextEdit', 'Long': 'TextEdit', 'Lat': 'TextEdit', 'Year-Subje': 'TextEdit', 'Year': 'TextEdit', 'address': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'precision': 'TextEdit', });
lyr_YearSubje_1970sculpture_43.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'Artist_Fir': 'TextEdit', 'Artist_Las': 'TextEdit', 'Gallery': 'TextEdit', 'Number': 'TextEdit', 'Street': 'TextEdit', 'City': 'TextEdit', 'State': 'TextEdit', 'Country': 'TextEdit', 'Long': 'TextEdit', 'Lat': 'TextEdit', 'Year-Subje': 'TextEdit', 'Year': 'TextEdit', 'address': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'precision': 'TextEdit', });
lyr_YearSubje_1972painting_44.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'Artist_Fir': 'TextEdit', 'Artist_Las': 'TextEdit', 'Gallery': 'TextEdit', 'Number': 'TextEdit', 'Street': 'TextEdit', 'City': 'TextEdit', 'State': 'TextEdit', 'Country': 'TextEdit', 'Long': 'TextEdit', 'Lat': 'TextEdit', 'Year-Subje': 'TextEdit', 'Year': 'TextEdit', 'address': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'precision': 'TextEdit', });
lyr_YearSubje_1973_45.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'Artist_Fir': 'TextEdit', 'Artist_Las': 'TextEdit', 'Gallery': 'TextEdit', 'Number': 'TextEdit', 'Street': 'TextEdit', 'City': 'TextEdit', 'State': 'TextEdit', 'Country': 'TextEdit', 'Long': 'TextEdit', 'Lat': 'TextEdit', 'Year-Subje': 'TextEdit', 'Year': 'TextEdit', 'address': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'precision': 'TextEdit', });
lyr_YearSubje_1975_46.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'Artist_Fir': 'TextEdit', 'Artist_Las': 'TextEdit', 'Gallery': 'TextEdit', 'Number': 'TextEdit', 'Street': 'TextEdit', 'City': 'TextEdit', 'State': 'TextEdit', 'Country': 'TextEdit', 'Long': 'TextEdit', 'Lat': 'TextEdit', 'Year-Subje': 'TextEdit', 'Year': 'TextEdit', 'address': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'precision': 'TextEdit', });
lyr_YearSubje_1977_47.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'Artist_Fir': 'TextEdit', 'Artist_Las': 'TextEdit', 'Gallery': 'TextEdit', 'Number': 'TextEdit', 'Street': 'TextEdit', 'City': 'TextEdit', 'State': 'TextEdit', 'Country': 'TextEdit', 'Long': 'TextEdit', 'Lat': 'TextEdit', 'Year-Subje': 'TextEdit', 'Year': 'TextEdit', 'address': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'precision': 'TextEdit', });
lyr_YearSubje_1979_48.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'Artist_Fir': 'TextEdit', 'Artist_Las': 'TextEdit', 'Gallery': 'TextEdit', 'Number': 'TextEdit', 'Street': 'TextEdit', 'City': 'TextEdit', 'State': 'TextEdit', 'Country': 'TextEdit', 'Long': 'TextEdit', 'Lat': 'TextEdit', 'Year-Subje': 'TextEdit', 'Year': 'TextEdit', 'address': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'precision': 'TextEdit', });
lyr_YearSubje_1981_49.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'Artist_Fir': 'TextEdit', 'Artist_Las': 'TextEdit', 'Gallery': 'TextEdit', 'Number': 'TextEdit', 'Street': 'TextEdit', 'City': 'TextEdit', 'State': 'TextEdit', 'Country': 'TextEdit', 'Long': 'TextEdit', 'Lat': 'TextEdit', 'Year-Subje': 'TextEdit', 'Year': 'TextEdit', 'address': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'precision': 'TextEdit', });
lyr_YearSubje_1983_50.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'Artist_Fir': 'TextEdit', 'Artist_Las': 'TextEdit', 'Gallery': 'TextEdit', 'Number': 'TextEdit', 'Street': 'TextEdit', 'City': 'TextEdit', 'State': 'TextEdit', 'Country': 'TextEdit', 'Long': 'TextEdit', 'Lat': 'TextEdit', 'Year-Subje': 'TextEdit', 'Year': 'TextEdit', 'address': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'precision': 'TextEdit', });
lyr_YearSubje_1985_51.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'Artist_Fir': 'TextEdit', 'Artist_Las': 'TextEdit', 'Gallery': 'TextEdit', 'Number': 'TextEdit', 'Street': 'TextEdit', 'City': 'TextEdit', 'State': 'TextEdit', 'Country': 'TextEdit', 'Long': 'TextEdit', 'Lat': 'TextEdit', 'Year-Subje': 'TextEdit', 'Year': 'TextEdit', 'address': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'precision': 'TextEdit', });
lyr_YearSubje_1989_52.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'Artist_Fir': 'TextEdit', 'Artist_Las': 'TextEdit', 'Gallery': 'TextEdit', 'Number': 'TextEdit', 'Street': 'TextEdit', 'City': 'TextEdit', 'State': 'TextEdit', 'Country': 'TextEdit', 'Long': 'TextEdit', 'Lat': 'TextEdit', 'Year-Subje': 'TextEdit', 'Year': 'TextEdit', 'address': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'precision': 'TextEdit', });
lyr_YearSubje_1991_53.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'Artist_Fir': 'TextEdit', 'Artist_Las': 'TextEdit', 'Gallery': 'TextEdit', 'Number': 'TextEdit', 'Street': 'TextEdit', 'City': 'TextEdit', 'State': 'TextEdit', 'Country': 'TextEdit', 'Long': 'TextEdit', 'Lat': 'TextEdit', 'Year-Subje': 'TextEdit', 'Year': 'TextEdit', 'address': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'precision': 'TextEdit', });
lyr_YearSubje_1993_54.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'Artist_Fir': 'TextEdit', 'Artist_Las': 'TextEdit', 'Gallery': 'TextEdit', 'Number': 'TextEdit', 'Street': 'TextEdit', 'City': 'TextEdit', 'State': 'TextEdit', 'Country': 'TextEdit', 'Long': 'TextEdit', 'Lat': 'TextEdit', 'Year-Subje': 'TextEdit', 'Year': 'TextEdit', 'address': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'precision': 'TextEdit', });
lyr_YearSubje_1995_55.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'Artist_Fir': 'TextEdit', 'Artist_Las': 'TextEdit', 'Gallery': 'TextEdit', 'Number': 'TextEdit', 'Street': 'TextEdit', 'City': 'TextEdit', 'State': 'TextEdit', 'Country': 'TextEdit', 'Long': 'TextEdit', 'Lat': 'TextEdit', 'Year-Subje': 'TextEdit', 'Year': 'TextEdit', 'address': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'precision': 'TextEdit', });
lyr_YearSubje_1997_56.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'Artist_Fir': 'TextEdit', 'Artist_Las': 'TextEdit', 'Gallery': 'TextEdit', 'Number': 'TextEdit', 'Street': 'TextEdit', 'City': 'TextEdit', 'State': 'TextEdit', 'Country': 'TextEdit', 'Long': 'TextEdit', 'Lat': 'TextEdit', 'Year-Subje': 'TextEdit', 'Year': 'TextEdit', 'address': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'precision': 'TextEdit', });
lyr_YearSubje_2000_57.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'Artist_Fir': 'TextEdit', 'Artist_Las': 'TextEdit', 'Gallery': 'TextEdit', 'Number': 'TextEdit', 'Street': 'TextEdit', 'City': 'TextEdit', 'State': 'TextEdit', 'Country': 'TextEdit', 'Long': 'TextEdit', 'Lat': 'TextEdit', 'Year-Subje': 'TextEdit', 'Year': 'TextEdit', 'address': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'precision': 'TextEdit', });
lyr_YearSubje_2002_58.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'Artist_Fir': 'TextEdit', 'Artist_Las': 'TextEdit', 'Gallery': 'TextEdit', 'Number': 'TextEdit', 'Street': 'TextEdit', 'City': 'TextEdit', 'State': 'TextEdit', 'Country': 'TextEdit', 'Long': 'TextEdit', 'Lat': 'TextEdit', 'Year-Subje': 'TextEdit', 'Year': 'TextEdit', 'address': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'precision': 'TextEdit', });
lyr_YearSubje_2004_59.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'Artist_Fir': 'TextEdit', 'Artist_Las': 'TextEdit', 'Gallery': 'TextEdit', 'Number': 'TextEdit', 'Street': 'TextEdit', 'City': 'TextEdit', 'State': 'TextEdit', 'Country': 'TextEdit', 'Long': 'TextEdit', 'Lat': 'TextEdit', 'Year-Subje': 'TextEdit', 'Year': 'TextEdit', 'address': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'precision': 'TextEdit', });
lyr_YearSubje_2006_60.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'Artist_Fir': 'TextEdit', 'Artist_Las': 'TextEdit', 'Gallery': 'TextEdit', 'Number': 'TextEdit', 'Street': 'TextEdit', 'City': 'TextEdit', 'State': 'TextEdit', 'Country': 'TextEdit', 'Long': 'TextEdit', 'Lat': 'TextEdit', 'Year-Subje': 'TextEdit', 'Year': 'TextEdit', 'address': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'precision': 'TextEdit', });
lyr_YearSubje_2008_61.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'Artist_Fir': 'TextEdit', 'Artist_Las': 'TextEdit', 'Gallery': 'TextEdit', 'Number': 'TextEdit', 'Street': 'TextEdit', 'City': 'TextEdit', 'State': 'TextEdit', 'Country': 'TextEdit', 'Long': 'TextEdit', 'Lat': 'TextEdit', 'Year-Subje': 'TextEdit', 'Year': 'TextEdit', 'address': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'precision': 'TextEdit', });
lyr_YearSubje_2010_62.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'Artist_Fir': 'TextEdit', 'Artist_Las': 'TextEdit', 'Gallery': 'TextEdit', 'Number': 'TextEdit', 'Street': 'TextEdit', 'City': 'TextEdit', 'State': 'TextEdit', 'Country': 'TextEdit', 'Long': 'TextEdit', 'Lat': 'TextEdit', 'Year-Subje': 'TextEdit', 'Year': 'TextEdit', 'address': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'precision': 'TextEdit', });
lyr_YearSubje_2012_63.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'Artist_Fir': 'TextEdit', 'Artist_Las': 'TextEdit', 'Gallery': 'TextEdit', 'Number': 'TextEdit', 'Street': 'TextEdit', 'City': 'TextEdit', 'State': 'TextEdit', 'Country': 'TextEdit', 'Long': 'TextEdit', 'Lat': 'TextEdit', 'Year-Subje': 'TextEdit', 'Year': 'TextEdit', 'address': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'precision': 'TextEdit', });
lyr_YearSubje_2014_64.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'Artist_Fir': 'TextEdit', 'Artist_Las': 'TextEdit', 'Gallery': 'TextEdit', 'Number': 'TextEdit', 'Street': 'TextEdit', 'City': 'TextEdit', 'State': 'TextEdit', 'Country': 'TextEdit', 'Long': 'TextEdit', 'Lat': 'TextEdit', 'Year-Subje': 'TextEdit', 'Year': 'TextEdit', 'address': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'precision': 'TextEdit', });
lyr_YearSubje_2017_65.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'Artist_Fir': 'TextEdit', 'Artist_Las': 'TextEdit', 'Gallery': 'TextEdit', 'Number': 'TextEdit', 'Street': 'TextEdit', 'City': 'TextEdit', 'State': 'TextEdit', 'Country': 'TextEdit', 'Long': 'TextEdit', 'Lat': 'TextEdit', 'Year-Subje': 'TextEdit', 'Year': 'TextEdit', 'address': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'precision': 'TextEdit', });
lyr_YearSubje_2019_66.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'Artist_Fir': 'TextEdit', 'Artist_Las': 'TextEdit', 'Gallery': 'TextEdit', 'Number': 'TextEdit', 'Street': 'TextEdit', 'City': 'TextEdit', 'State': 'TextEdit', 'Country': 'TextEdit', 'Long': 'TextEdit', 'Lat': 'TextEdit', 'Year-Subje': 'TextEdit', 'Year': 'TextEdit', 'address': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'precision': 'TextEdit', });
lyr_YearSubje_1932painting_1.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Artist_Fir': 'no label', 'Artist_Las': 'no label', 'Gallery': 'no label', 'Number': 'no label', 'Street': 'no label', 'City': 'no label', 'State': 'no label', 'Country': 'no label', 'Long': 'no label', 'Lat': 'no label', 'Year-Subje': 'no label', 'Year': 'no label', 'address': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'precision': 'no label', });
lyr_YearSubje_1933sculpture_2.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Artist_Fir': 'no label', 'Artist_Las': 'no label', 'Gallery': 'no label', 'Number': 'no label', 'Street': 'no label', 'City': 'no label', 'State': 'no label', 'Country': 'no label', 'Long': 'no label', 'Lat': 'no label', 'Year-Subje': 'no label', 'Year': 'no label', 'address': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'precision': 'no label', });
lyr_YearSubje_1936painting_3.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Artist_Fir': 'no label', 'Artist_Las': 'no label', 'Gallery': 'no label', 'Number': 'no label', 'Street': 'no label', 'City': 'no label', 'State': 'no label', 'Country': 'no label', 'Long': 'no label', 'Lat': 'no label', 'Year-Subje': 'no label', 'Year': 'no label', 'address': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'precision': 'no label', });
lyr_YearSubje_1936sculpture_4.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Artist_Fir': 'no label', 'Artist_Las': 'no label', 'Gallery': 'no label', 'Number': 'no label', 'Street': 'no label', 'City': 'no label', 'State': 'no label', 'Country': 'no label', 'Long': 'no label', 'Lat': 'no label', 'Year-Subje': 'no label', 'Year': 'no label', 'address': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'precision': 'no label', });
lyr_YearSubje_1937painting_5.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Artist_Fir': 'no label', 'Artist_Las': 'no label', 'Gallery': 'no label', 'Number': 'no label', 'Street': 'no label', 'City': 'no label', 'State': 'no label', 'Country': 'no label', 'Long': 'no label', 'Lat': 'no label', 'Year-Subje': 'no label', 'Year': 'no label', 'address': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'precision': 'no label', });
lyr_YearSubje_1938painting_6.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Artist_Fir': 'no label', 'Artist_Las': 'no label', 'Gallery': 'no label', 'Number': 'no label', 'Street': 'no label', 'City': 'no label', 'State': 'no label', 'Country': 'no label', 'Long': 'no label', 'Lat': 'no label', 'Year-Subje': 'no label', 'Year': 'no label', 'address': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'precision': 'no label', });
lyr_YearSubje_1938sculpture_7.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Artist_Fir': 'no label', 'Artist_Las': 'no label', 'Gallery': 'no label', 'Number': 'no label', 'Street': 'no label', 'City': 'no label', 'State': 'no label', 'Country': 'no label', 'Long': 'no label', 'Lat': 'no label', 'Year-Subje': 'no label', 'Year': 'no label', 'address': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'precision': 'no label', });
lyr_YearSubje_1939sculpture_8.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Artist_Fir': 'no label', 'Artist_Las': 'no label', 'Gallery': 'no label', 'Number': 'no label', 'Street': 'no label', 'City': 'no label', 'State': 'no label', 'Country': 'no label', 'Long': 'no label', 'Lat': 'no label', 'Year-Subje': 'no label', 'Year': 'no label', 'address': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'precision': 'no label', });
lyr_YearSubje_1939watercolors_9.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Artist_Fir': 'no label', 'Artist_Las': 'no label', 'Gallery': 'no label', 'Number': 'no label', 'Street': 'no label', 'City': 'no label', 'State': 'no label', 'Country': 'no label', 'Long': 'no label', 'Lat': 'no label', 'Year-Subje': 'no label', 'Year': 'no label', 'address': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'precision': 'no label', });
lyr_YearSubje_194041painting_10.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Artist_Fir': 'no label', 'Artist_Las': 'no label', 'Gallery': 'no label', 'Number': 'no label', 'Street': 'no label', 'City': 'no label', 'State': 'no label', 'Country': 'no label', 'Long': 'no label', 'Lat': 'no label', 'Year-Subje': 'no label', 'Year': 'no label', 'address': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'precision': 'no label', });
lyr_YearSubje_1940sculpture_11.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Artist_Fir': 'no label', 'Artist_Las': 'no label', 'Gallery': 'no label', 'Number': 'no label', 'Street': 'no label', 'City': 'no label', 'State': 'no label', 'Country': 'no label', 'Long': 'no label', 'Lat': 'no label', 'Year-Subje': 'no label', 'Year': 'no label', 'address': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'precision': 'no label', });
lyr_YearSubje_1941painting_12.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Artist_Fir': 'no label', 'Artist_Las': 'no label', 'Gallery': 'no label', 'Number': 'no label', 'Street': 'no label', 'City': 'no label', 'State': 'no label', 'Country': 'no label', 'Long': 'no label', 'Lat': 'no label', 'Year-Subje': 'no label', 'Year': 'no label', 'address': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'precision': 'no label', });
lyr_YearSubje_194243sculpture_13.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Artist_Fir': 'no label', 'Artist_Las': 'no label', 'Gallery': 'no label', 'Number': 'no label', 'Street': 'no label', 'City': 'no label', 'State': 'no label', 'Country': 'no label', 'Long': 'no label', 'Lat': 'no label', 'Year-Subje': 'no label', 'Year': 'no label', 'address': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'precision': 'no label', });
lyr_YearSubje_194344sculpture_14.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Artist_Fir': 'no label', 'Artist_Las': 'no label', 'Gallery': 'no label', 'Number': 'no label', 'Street': 'no label', 'City': 'no label', 'State': 'no label', 'Country': 'no label', 'Long': 'no label', 'Lat': 'no label', 'Year-Subje': 'no label', 'Year': 'no label', 'address': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'precision': 'no label', });
lyr_YearSubje_1944painting_15.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Artist_Fir': 'no label', 'Artist_Las': 'no label', 'Gallery': 'no label', 'Number': 'no label', 'Street': 'no label', 'City': 'no label', 'State': 'no label', 'Country': 'no label', 'Long': 'no label', 'Lat': 'no label', 'Year-Subje': 'no label', 'Year': 'no label', 'address': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'precision': 'no label', });
lyr_YearSubje_1945painting_16.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Artist_Fir': 'no label', 'Artist_Las': 'no label', 'Gallery': 'no label', 'Number': 'no label', 'Street': 'no label', 'City': 'no label', 'State': 'no label', 'Country': 'no label', 'Long': 'no label', 'Lat': 'no label', 'Year-Subje': 'no label', 'Year': 'no label', 'address': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'precision': 'no label', });
lyr_YearSubje_1945sculpture_17.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Artist_Fir': 'no label', 'Artist_Las': 'no label', 'Gallery': 'no label', 'Number': 'no label', 'Street': 'no label', 'City': 'no label', 'State': 'no label', 'Country': 'no label', 'Long': 'no label', 'Lat': 'no label', 'Year-Subje': 'no label', 'Year': 'no label', 'address': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'precision': 'no label', });
lyr_YearSubje_1946painting_18.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Artist_Fir': 'no label', 'Artist_Las': 'no label', 'Gallery': 'no label', 'Number': 'no label', 'Street': 'no label', 'City': 'no label', 'State': 'no label', 'Country': 'no label', 'Long': 'no label', 'Lat': 'no label', 'Year-Subje': 'no label', 'Year': 'no label', 'address': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'precision': 'no label', });
lyr_YearSubje_1946sculpture_19.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Artist_Fir': 'no label', 'Artist_Las': 'no label', 'Gallery': 'no label', 'Number': 'no label', 'Street': 'no label', 'City': 'no label', 'State': 'no label', 'Country': 'no label', 'Long': 'no label', 'Lat': 'no label', 'Year-Subje': 'no label', 'Year': 'no label', 'address': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'precision': 'no label', });
lyr_YearSubje_1947painting_20.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Artist_Fir': 'no label', 'Artist_Las': 'no label', 'Gallery': 'no label', 'Number': 'no label', 'Street': 'no label', 'City': 'no label', 'State': 'no label', 'Country': 'no label', 'Long': 'no label', 'Lat': 'no label', 'Year-Subje': 'no label', 'Year': 'no label', 'address': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'precision': 'no label', });
lyr_YearSubje_1947sculpture_21.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Artist_Fir': 'no label', 'Artist_Las': 'no label', 'Gallery': 'no label', 'Number': 'no label', 'Street': 'no label', 'City': 'no label', 'State': 'no label', 'Country': 'no label', 'Long': 'no label', 'Lat': 'no label', 'Year-Subje': 'no label', 'Year': 'no label', 'address': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'precision': 'no label', });
lyr_YearSubje_1948painting_22.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Artist_Fir': 'no label', 'Artist_Las': 'no label', 'Gallery': 'no label', 'Number': 'no label', 'Street': 'no label', 'City': 'no label', 'State': 'no label', 'Country': 'no label', 'Long': 'no label', 'Lat': 'no label', 'Year-Subje': 'no label', 'Year': 'no label', 'address': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'precision': 'no label', });
lyr_YearSubje_1949painting_23.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Artist_Fir': 'no label', 'Artist_Las': 'no label', 'Gallery': 'no label', 'Number': 'no label', 'Street': 'no label', 'City': 'no label', 'State': 'no label', 'Country': 'no label', 'Long': 'no label', 'Lat': 'no label', 'Year-Subje': 'no label', 'Year': 'no label', 'address': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'precision': 'no label', });
lyr_YearSubje_1949sculpture_24.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Artist_Fir': 'no label', 'Artist_Las': 'no label', 'Gallery': 'no label', 'Number': 'no label', 'Street': 'no label', 'City': 'no label', 'State': 'no label', 'Country': 'no label', 'Long': 'no label', 'Lat': 'no label', 'Year-Subje': 'no label', 'Year': 'no label', 'address': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'precision': 'no label', });
lyr_YearSubje_1950painting_25.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Artist_Fir': 'no label', 'Artist_Las': 'no label', 'Gallery': 'no label', 'Number': 'no label', 'Street': 'no label', 'City': 'no label', 'State': 'no label', 'Country': 'no label', 'Long': 'no label', 'Lat': 'no label', 'Year-Subje': 'no label', 'Year': 'no label', 'address': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'precision': 'no label', });
lyr_YearSubje_1950sculpture_26.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Artist_Fir': 'no label', 'Artist_Las': 'no label', 'Gallery': 'no label', 'Number': 'no label', 'Street': 'no label', 'City': 'no label', 'State': 'no label', 'Country': 'no label', 'Long': 'no label', 'Lat': 'no label', 'Year-Subje': 'no label', 'Year': 'no label', 'address': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'precision': 'no label', });
lyr_YearSubje_1953painting_27.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Artist_Fir': 'no label', 'Artist_Las': 'no label', 'Gallery': 'no label', 'Number': 'no label', 'Street': 'no label', 'City': 'no label', 'State': 'no label', 'Country': 'no label', 'Long': 'no label', 'Lat': 'no label', 'Year-Subje': 'no label', 'Year': 'no label', 'address': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'precision': 'no label', });
lyr_YearSubje_1955painting_28.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Artist_Fir': 'no label', 'Artist_Las': 'no label', 'Gallery': 'no label', 'Number': 'no label', 'Street': 'no label', 'City': 'no label', 'State': 'no label', 'Country': 'no label', 'Long': 'no label', 'Lat': 'no label', 'Year-Subje': 'no label', 'Year': 'no label', 'address': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'precision': 'no label', });
lyr_YearSubje_1956sculpture_29.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Artist_Fir': 'no label', 'Artist_Las': 'no label', 'Gallery': 'no label', 'Number': 'no label', 'Street': 'no label', 'City': 'no label', 'State': 'no label', 'Country': 'no label', 'Long': 'no label', 'Lat': 'no label', 'Year-Subje': 'no label', 'Year': 'no label', 'address': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'precision': 'no label', });
lyr_YearSubje_1957_30.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Artist_Fir': 'no label', 'Artist_Las': 'no label', 'Gallery': 'no label', 'Number': 'no label', 'Street': 'no label', 'City': 'no label', 'State': 'no label', 'Country': 'no label', 'Long': 'no label', 'Lat': 'no label', 'Year-Subje': 'no label', 'Year': 'no label', 'address': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'precision': 'no label', });
lyr_YearSubje_1958_31.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Artist_Fir': 'no label', 'Artist_Las': 'no label', 'Gallery': 'no label', 'Number': 'no label', 'Street': 'no label', 'City': 'no label', 'State': 'no label', 'Country': 'no label', 'Long': 'no label', 'Lat': 'no label', 'Year-Subje': 'no label', 'Year': 'no label', 'address': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'precision': 'no label', });
lyr_YearSubje_1959painting_32.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Artist_Fir': 'no label', 'Artist_Las': 'no label', 'Gallery': 'no label', 'Number': 'no label', 'Street': 'no label', 'City': 'no label', 'State': 'no label', 'Country': 'no label', 'Long': 'no label', 'Lat': 'no label', 'Year-Subje': 'no label', 'Year': 'no label', 'address': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'precision': 'no label', });
lyr_YearSubje_1960sculpture_33.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Artist_Fir': 'no label', 'Artist_Las': 'no label', 'Gallery': 'no label', 'Number': 'no label', 'Street': 'no label', 'City': 'no label', 'State': 'no label', 'Country': 'no label', 'Long': 'no label', 'Lat': 'no label', 'Year-Subje': 'no label', 'Year': 'no label', 'address': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'precision': 'no label', });
lyr_YearSubje_1961painting_34.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Artist_Fir': 'no label', 'Artist_Las': 'no label', 'Gallery': 'no label', 'Number': 'no label', 'Street': 'no label', 'City': 'no label', 'State': 'no label', 'Country': 'no label', 'Long': 'no label', 'Lat': 'no label', 'Year-Subje': 'no label', 'Year': 'no label', 'address': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'precision': 'no label', });
lyr_YearSubje_1962sculpture_35.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Artist_Fir': 'no label', 'Artist_Las': 'no label', 'Gallery': 'no label', 'Number': 'no label', 'Street': 'no label', 'City': 'no label', 'State': 'no label', 'Country': 'no label', 'Long': 'no label', 'Lat': 'no label', 'Year-Subje': 'no label', 'Year': 'no label', 'address': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'precision': 'no label', });
lyr_YearSubje_1963painting_36.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Artist_Fir': 'no label', 'Artist_Las': 'no label', 'Gallery': 'no label', 'Number': 'no label', 'Street': 'no label', 'City': 'no label', 'State': 'no label', 'Country': 'no label', 'Long': 'no label', 'Lat': 'no label', 'Year-Subje': 'no label', 'Year': 'no label', 'address': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'precision': 'no label', });
lyr_YearSubje_1964sculpture_37.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Artist_Fir': 'no label', 'Artist_Las': 'no label', 'Gallery': 'no label', 'Number': 'no label', 'Street': 'no label', 'City': 'no label', 'State': 'no label', 'Country': 'no label', 'Long': 'no label', 'Lat': 'no label', 'Year-Subje': 'no label', 'Year': 'no label', 'address': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'precision': 'no label', });
lyr_YearSubje_1965painting_38.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Artist_Fir': 'no label', 'Artist_Las': 'no label', 'Gallery': 'no label', 'Number': 'no label', 'Street': 'no label', 'City': 'no label', 'State': 'no label', 'Country': 'no label', 'Long': 'no label', 'Lat': 'no label', 'Year-Subje': 'no label', 'Year': 'no label', 'address': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'precision': 'no label', });
lyr_YearSubje_1966sculpture_39.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Artist_Fir': 'no label', 'Artist_Las': 'no label', 'Gallery': 'no label', 'Number': 'no label', 'Street': 'no label', 'City': 'no label', 'State': 'no label', 'Country': 'no label', 'Long': 'no label', 'Lat': 'no label', 'Year-Subje': 'no label', 'Year': 'no label', 'address': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'precision': 'no label', });
lyr_YearSubje_1967painting_40.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Artist_Fir': 'no label', 'Artist_Las': 'no label', 'Gallery': 'no label', 'Number': 'no label', 'Street': 'no label', 'City': 'no label', 'State': 'no label', 'Country': 'no label', 'Long': 'no label', 'Lat': 'no label', 'Year-Subje': 'no label', 'Year': 'no label', 'address': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'precision': 'no label', });
lyr_YearSubje_1968sculpture_41.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Artist_Fir': 'no label', 'Artist_Las': 'no label', 'Gallery': 'no label', 'Number': 'no label', 'Street': 'no label', 'City': 'no label', 'State': 'no label', 'Country': 'no label', 'Long': 'no label', 'Lat': 'no label', 'Year-Subje': 'no label', 'Year': 'no label', 'address': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'precision': 'no label', });
lyr_YearSubje_1969painting_42.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Artist_Fir': 'no label', 'Artist_Las': 'no label', 'Gallery': 'no label', 'Number': 'no label', 'Street': 'no label', 'City': 'no label', 'State': 'no label', 'Country': 'no label', 'Long': 'no label', 'Lat': 'no label', 'Year-Subje': 'no label', 'Year': 'no label', 'address': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'precision': 'no label', });
lyr_YearSubje_1970sculpture_43.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Artist_Fir': 'no label', 'Artist_Las': 'no label', 'Gallery': 'no label', 'Number': 'no label', 'Street': 'no label', 'City': 'no label', 'State': 'no label', 'Country': 'no label', 'Long': 'no label', 'Lat': 'no label', 'Year-Subje': 'no label', 'Year': 'no label', 'address': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'precision': 'no label', });
lyr_YearSubje_1972painting_44.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Artist_Fir': 'no label', 'Artist_Las': 'no label', 'Gallery': 'no label', 'Number': 'no label', 'Street': 'no label', 'City': 'no label', 'State': 'no label', 'Country': 'no label', 'Long': 'no label', 'Lat': 'no label', 'Year-Subje': 'no label', 'Year': 'no label', 'address': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'precision': 'no label', });
lyr_YearSubje_1973_45.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Artist_Fir': 'no label', 'Artist_Las': 'no label', 'Gallery': 'no label', 'Number': 'no label', 'Street': 'no label', 'City': 'no label', 'State': 'no label', 'Country': 'no label', 'Long': 'no label', 'Lat': 'no label', 'Year-Subje': 'no label', 'Year': 'no label', 'address': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'precision': 'no label', });
lyr_YearSubje_1975_46.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Artist_Fir': 'no label', 'Artist_Las': 'no label', 'Gallery': 'no label', 'Number': 'no label', 'Street': 'no label', 'City': 'no label', 'State': 'no label', 'Country': 'no label', 'Long': 'no label', 'Lat': 'no label', 'Year-Subje': 'no label', 'Year': 'no label', 'address': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'precision': 'no label', });
lyr_YearSubje_1977_47.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Artist_Fir': 'no label', 'Artist_Las': 'no label', 'Gallery': 'no label', 'Number': 'no label', 'Street': 'no label', 'City': 'no label', 'State': 'no label', 'Country': 'no label', 'Long': 'no label', 'Lat': 'no label', 'Year-Subje': 'no label', 'Year': 'no label', 'address': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'precision': 'no label', });
lyr_YearSubje_1979_48.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Artist_Fir': 'no label', 'Artist_Las': 'no label', 'Gallery': 'no label', 'Number': 'no label', 'Street': 'no label', 'City': 'no label', 'State': 'no label', 'Country': 'no label', 'Long': 'no label', 'Lat': 'no label', 'Year-Subje': 'no label', 'Year': 'no label', 'address': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'precision': 'no label', });
lyr_YearSubje_1981_49.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Artist_Fir': 'no label', 'Artist_Las': 'no label', 'Gallery': 'no label', 'Number': 'no label', 'Street': 'no label', 'City': 'no label', 'State': 'no label', 'Country': 'no label', 'Long': 'no label', 'Lat': 'no label', 'Year-Subje': 'no label', 'Year': 'no label', 'address': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'precision': 'no label', });
lyr_YearSubje_1983_50.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Artist_Fir': 'no label', 'Artist_Las': 'no label', 'Gallery': 'no label', 'Number': 'no label', 'Street': 'no label', 'City': 'no label', 'State': 'no label', 'Country': 'no label', 'Long': 'no label', 'Lat': 'no label', 'Year-Subje': 'no label', 'Year': 'no label', 'address': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'precision': 'no label', });
lyr_YearSubje_1985_51.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Artist_Fir': 'no label', 'Artist_Las': 'no label', 'Gallery': 'no label', 'Number': 'no label', 'Street': 'no label', 'City': 'no label', 'State': 'no label', 'Country': 'no label', 'Long': 'no label', 'Lat': 'no label', 'Year-Subje': 'no label', 'Year': 'no label', 'address': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'precision': 'no label', });
lyr_YearSubje_1989_52.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Artist_Fir': 'no label', 'Artist_Las': 'no label', 'Gallery': 'no label', 'Number': 'no label', 'Street': 'no label', 'City': 'no label', 'State': 'no label', 'Country': 'no label', 'Long': 'no label', 'Lat': 'no label', 'Year-Subje': 'no label', 'Year': 'no label', 'address': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'precision': 'no label', });
lyr_YearSubje_1991_53.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Artist_Fir': 'no label', 'Artist_Las': 'no label', 'Gallery': 'no label', 'Number': 'no label', 'Street': 'no label', 'City': 'no label', 'State': 'no label', 'Country': 'no label', 'Long': 'no label', 'Lat': 'no label', 'Year-Subje': 'no label', 'Year': 'no label', 'address': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'precision': 'no label', });
lyr_YearSubje_1993_54.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Artist_Fir': 'no label', 'Artist_Las': 'no label', 'Gallery': 'no label', 'Number': 'no label', 'Street': 'no label', 'City': 'no label', 'State': 'no label', 'Country': 'no label', 'Long': 'no label', 'Lat': 'no label', 'Year-Subje': 'no label', 'Year': 'no label', 'address': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'precision': 'no label', });
lyr_YearSubje_1995_55.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Artist_Fir': 'no label', 'Artist_Las': 'no label', 'Gallery': 'no label', 'Number': 'no label', 'Street': 'no label', 'City': 'no label', 'State': 'no label', 'Country': 'no label', 'Long': 'no label', 'Lat': 'no label', 'Year-Subje': 'no label', 'Year': 'no label', 'address': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'precision': 'no label', });
lyr_YearSubje_1997_56.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Artist_Fir': 'no label', 'Artist_Las': 'no label', 'Gallery': 'no label', 'Number': 'no label', 'Street': 'no label', 'City': 'no label', 'State': 'no label', 'Country': 'no label', 'Long': 'no label', 'Lat': 'no label', 'Year-Subje': 'no label', 'Year': 'no label', 'address': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'precision': 'no label', });
lyr_YearSubje_2000_57.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Artist_Fir': 'no label', 'Artist_Las': 'no label', 'Gallery': 'no label', 'Number': 'no label', 'Street': 'no label', 'City': 'no label', 'State': 'no label', 'Country': 'no label', 'Long': 'no label', 'Lat': 'no label', 'Year-Subje': 'no label', 'Year': 'no label', 'address': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'precision': 'no label', });
lyr_YearSubje_2002_58.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Artist_Fir': 'no label', 'Artist_Las': 'no label', 'Gallery': 'no label', 'Number': 'no label', 'Street': 'no label', 'City': 'no label', 'State': 'no label', 'Country': 'no label', 'Long': 'no label', 'Lat': 'no label', 'Year-Subje': 'no label', 'Year': 'no label', 'address': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'precision': 'no label', });
lyr_YearSubje_2004_59.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Artist_Fir': 'no label', 'Artist_Las': 'no label', 'Gallery': 'no label', 'Number': 'no label', 'Street': 'no label', 'City': 'no label', 'State': 'no label', 'Country': 'no label', 'Long': 'no label', 'Lat': 'no label', 'Year-Subje': 'no label', 'Year': 'no label', 'address': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'precision': 'no label', });
lyr_YearSubje_2006_60.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Artist_Fir': 'no label', 'Artist_Las': 'no label', 'Gallery': 'no label', 'Number': 'no label', 'Street': 'no label', 'City': 'no label', 'State': 'no label', 'Country': 'no label', 'Long': 'no label', 'Lat': 'no label', 'Year-Subje': 'no label', 'Year': 'no label', 'address': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'precision': 'no label', });
lyr_YearSubje_2008_61.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Artist_Fir': 'no label', 'Artist_Las': 'no label', 'Gallery': 'no label', 'Number': 'no label', 'Street': 'no label', 'City': 'no label', 'State': 'no label', 'Country': 'no label', 'Long': 'no label', 'Lat': 'no label', 'Year-Subje': 'no label', 'Year': 'no label', 'address': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'precision': 'no label', });
lyr_YearSubje_2010_62.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Artist_Fir': 'no label', 'Artist_Las': 'no label', 'Gallery': 'no label', 'Number': 'no label', 'Street': 'no label', 'City': 'no label', 'State': 'no label', 'Country': 'no label', 'Long': 'no label', 'Lat': 'no label', 'Year-Subje': 'no label', 'Year': 'no label', 'address': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'precision': 'no label', });
lyr_YearSubje_2012_63.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Artist_Fir': 'no label', 'Artist_Las': 'no label', 'Gallery': 'no label', 'Number': 'no label', 'Street': 'no label', 'City': 'no label', 'State': 'no label', 'Country': 'no label', 'Long': 'no label', 'Lat': 'no label', 'Year-Subje': 'no label', 'Year': 'no label', 'address': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'precision': 'no label', });
lyr_YearSubje_2014_64.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Artist_Fir': 'no label', 'Artist_Las': 'no label', 'Gallery': 'no label', 'Number': 'no label', 'Street': 'no label', 'City': 'no label', 'State': 'no label', 'Country': 'no label', 'Long': 'no label', 'Lat': 'no label', 'Year-Subje': 'no label', 'Year': 'no label', 'address': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'precision': 'no label', });
lyr_YearSubje_2017_65.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Artist_Fir': 'no label', 'Artist_Las': 'no label', 'Gallery': 'no label', 'Number': 'no label', 'Street': 'no label', 'City': 'no label', 'State': 'no label', 'Country': 'no label', 'Long': 'no label', 'Lat': 'no label', 'Year-Subje': 'no label', 'Year': 'no label', 'address': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'precision': 'no label', });
lyr_YearSubje_2019_66.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Artist_Fir': 'no label', 'Artist_Las': 'no label', 'Gallery': 'no label', 'Number': 'no label', 'Street': 'no label', 'City': 'no label', 'State': 'no label', 'Country': 'no label', 'Long': 'no label', 'Lat': 'no label', 'Year-Subje': 'no label', 'Year': 'no label', 'address': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'precision': 'no label', });
lyr_YearSubje_2019_66.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});