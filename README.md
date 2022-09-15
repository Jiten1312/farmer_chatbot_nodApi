# farmer_chatbot_nodApi(NodeJS)
## front-end: https://github.com/Jiten1312/farmer_chatbot_flutterApp
## Rasa: https://github.com/AdilOtha/rasa-chatbot

#Create config folder inside root of the project.
#cd config
#create conn.js file
#content of this file -->
module.exports = {
    url: "uri_to_access_database_server",
};

URI for different API Calls:
Fetch all Queries: 
uri:	localhost:5000/api/kisanQuery/
method: get

Fetch all Fallback Queries:
uri:	localhost:5000/api/fallback/
method:	get

Add fallback query:
uri:	localhost:5000/api/fallback/addFallback
method: post
JsonBody:
{
	"query":"new Qestion generated by fallback"
}

getPrice:
uri:	localhost:5000/api/kisanQuery/getPrice
method:	Post
JsonBody:
{
	"plant_name":"જીરું"
}

getFertilizer:
uri:	localhost:5000/api/kisanQuery/getFertilizer
method: Post
JsonBody:
{
	"plant_name":"જીરું"
}

fetchData:
uri:	localhost:5000/api/kisanQuery/dataFetch
method: Post
JsonBody:
{
	"plant_problem":"ફૂગ",
	"plant_area":"રુટ",
	"plant_name":"જીરું"
}
