var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt0.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_univ_surabaya_1 = new ol.format.GeoJSON();
var features_univ_surabaya_1 = format_univ_surabaya_1.readFeatures(json_univ_surabaya_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_univ_surabaya_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_univ_surabaya_1.addFeatures(features_univ_surabaya_1);
var lyr_univ_surabaya_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_univ_surabaya_1, 
                style: style_univ_surabaya_1,
                interactive: true,
                title: '<img src="styles/legend/univ_surabaya_1.png" /> univ_surabaya'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_univ_surabaya_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_univ_surabaya_1];
lyr_univ_surabaya_1.set('fieldAliases', {'fid': 'fid', 'Nama': 'Nama', 'Kampus': 'Kampus', 'Foto': 'Foto', 'Gambar': 'Gambar', 'Desc_QS WUR': 'QS WUR ', 'Desc_Didirikan': 'Tahun Berdiri', 'Desc_Fakultas': 'Fakultas', });
lyr_univ_surabaya_1.set('fieldImages', {'fid': 'Hidden', 'Nama': 'TextEdit', 'Kampus': 'TextEdit', 'Foto': 'ExternalResource', 'Gambar': 'ExternalResource', 'Desc_QS WUR': 'TextEdit', 'Desc_Didirikan': 'TextEdit', 'Desc_Fakultas': 'TextEdit', });
lyr_univ_surabaya_1.set('fieldLabels', {'Nama': 'header label', 'Kampus': 'header label', 'Foto': 'header label', 'Gambar': 'header label', 'Desc_QS WUR': 'header label', 'Desc_Didirikan': 'header label', 'Desc_Fakultas': 'header label', });
lyr_univ_surabaya_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});