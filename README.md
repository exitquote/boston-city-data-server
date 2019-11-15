# boston-city-data-server
server-side code for large datasets

Still working on cleaning/importing of various datasets from the city.  Some are already geojson and are easy;
police data is CSV only and has a lot of nulled out values for fields that I'm still addressing.

My own notes:

Command to import an example geojson dataset into mongo:

`jq --compact-output ".features" ZIP_Codes.geojson | mongoimport --db bostonCityData -c zipcodes --jsonArray`

Example using csv2geojson to convert police data:

`csv2geojson tmpcl2rr915.csv > boston_crime_test_clean.geojson`

`npm start` should start the server
