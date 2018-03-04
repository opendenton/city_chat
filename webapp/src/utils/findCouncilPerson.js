// TODO: It would be nice to get the GIS terms for these variables
export default function(x, y) {
  return (
    'https://gis.cityofdenton.com:9002/arcgis/rest/services/ElectionResults2016/MapServer/0/query?f=json&geometry=' +
    x +
    ',' +
    y +
    '&geometryType=esriGeometryPoint&returnGeometry=false'
  )
}

/*

Example Response:

https://gis.cityofdenton.com:9002/arcgis/rest/services/ElectionResults2016/MapServer/0/query?f=json&geometry=2388544.969703163,7122243.8253995683&geometryType=esriGeometryPoint&returnGeometry=false

{
  "displayFieldName":"Name",
  "fieldAliases":{"Name":"Name"},
  "fields":[{"name":"Name",
  "type":"esriFieldTypeString",
  "alias":"Name","length":50}],
  "features":[{"attributes":{"Name":"Gerard Hudspeth"}}]
}

*/
