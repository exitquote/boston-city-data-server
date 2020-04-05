#!/usr/local/bin/python3

import pyproj
#import geojson
#from json import JSONDecoder
import json

state_plane = pyproj.CRS('EPSG:2249')
crs_4326 = pyproj.CRS("WGS84")
transformer = pyproj.Transformer.from_crs(state_plane, crs_4326)
test = transformer.transform(774275.2097665071,2953649.215008825)
print(test)

outfile = open('/Users/molly/code/city_data/Public_Schools_LatLong.geojson', 'w+')

with open('/Users/molly/code/city_data/Public_Schools.geojson', 'r') as orig_geo:
    geo_obj = json.load(orig_geo)
    for feature in geo_obj['features']:
        new_coords = transformer.transform(feature['geometry']['coordinates'][0], feature['geometry']['coordinates'][1])
        feature['geometry']['coordinates'] = [new_coords[1], new_coords[0]]  

json.dump(geo_obj, outfile)





# first, load in the json and deserialize it to an object
# next, point to the spot with the coordinates
# then, convert the coordiantes to lat/long
# finally, serialize the json and output it back with the lat/long coordinates where the state ones used to be

