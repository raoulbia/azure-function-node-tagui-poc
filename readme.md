# An integration of TagUi and Azure Functions

Medium article: link here

## TimerTrigger 

The `TimerTrigger` makes it incredibly easy to have your functions executed on a schedule. The default timer trigger defined in the file function.jsonhas been changed from every five minutes to only once weekly at a given time e.g. at 15PM on a Saturday: "schedule": "0 0 15 * * SAT".

### How it works

For a `TimerTrigger` to work, you provide a schedule in the form of a [cron expression](https://en.wikipedia.org/wiki/Cron#CRON_expression)(See the link for full details). A cron expression is a string with 6 separate expressions which represent a given schedule via patterns. The pattern we use to represent every 5 minutes is `0 */5 * * * *`. This, in plain text, means: "When seconds is equal to 0, minutes is divisible by 5, for any hour, day of the month, month, day of the week, or year".


## Upload to Blob Storage

See this MEdium article for instructions on how to configure the Function App with your storage account access key: https://medium.com/@rgoyard/azure-function-to-upload-file-in-an-azure-blob-storage-in-javascript-db5c44e920b5


