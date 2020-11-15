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
Example: https://mh-well.herokuapp.com/userViews

### POST
#### userViews
Add a new document to the Collection
Required payload:
userId - String
viewDate - Date
productId - String
Example: https://mh-well.herokuapp.com/userViews

### GET
#### totalUsers
Returns all documents that occur between the provided date range
Required payload:
startdate - Date
enddate - Date
Example: https://mh-well.herokuapp.com/totalUsers

### GET
#### uniqueUsers
Returns all unique user Ids from documents that occur between the provided date range
Required payload:
startdate - Date
enddate - Date
Example: https://mh-well.herokuapp.com/uniqueUsers

See the testData.md file for sample Test Data


