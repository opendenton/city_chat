import extractStreet from './extractStreet'

// TODO: Add function annotation

// returns a list of possible address candidates
export default function(address) {
  return (
    'https://gis.cityofdenton.com:9002/arcgis/rest/services/CenterlineAddressLocator/GeocodeServer/findAddressCandidates?Street=' +
    encodeURIComponent(extractStreet(address)[0]) +
    '&f=pjson'
  )
}

/* Example Response:

https://gis.cityofdenton.com:9002/arcgis/rest/services/CenterlineAddressLocator/GeocodeServer/findAddressCandidates?Street=534%20alegre%20vista&f=pjson

{
 "spatialReference": {
  "wkid": 102738,
  "latestWkid": 2276
 },
 "candidates": [
  {
   "address": "534 ALEGRE VISTA DR",
   "location": {
    "x": 2388544.969703163,
    "y": 7122243.8253995683
   },
   "score": 100,
   "attributes": {

   }
  },
  {
   "address": "535 ALEGRE VISTA DR",
   "location": {
    "x": 2388544.8720549494,
    "y": 7122283.8252803776
   },
   "score": 79,
   "attributes": {

   }
  }
 ]
}

*/
