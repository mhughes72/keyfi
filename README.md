# WellnessCoach.Live Test Project
###

Live Version: https://mh-well.herokuapp.com/

## Collection Schema
userId - String
viewDate - Date
productId - String

## Endpoints
### GET
#### userViews
Returns a complete list of documents from the Collection

### POST
#### userViews
Add a new document to the Collection
Required payload:
userId - String
viewDate - Date
productId - String

### GET
#### totalUsers
Returns all documents that occur between the provided date range
Required payload:
startdate - Date
enddate - Date

### GET
#### uniqueUsers
Returns all unique user Ids from documents that occur between the provided date range
Required payload:
startdate - Date
enddate - Date

See the testData.md file for sample Test Data


