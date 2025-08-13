## API 
---
You can think of APIs as being like a waiter at a restaurant, serving as a go-between for the customer and the kitchen.     

A customer who wants soup doesn't go into the kitchen to cook. They don't even have to know how to make soup! They only have to know how to ask the waiter for soup, expecting the waiter to bring back soup.    

---
## Types of APIs
---

Multiple API types may be used to achieve a task. For example, uploading a photo to Instagram makes use of various APIs:

Hardware API for the app to talk to your camera

Software library API for the image to be processed with filters

Web API for sending your image to Instagram's servers so your friends can like it!

---
** There is more than one way to build and consume APIs. Some architecture types you may come across are:
---

*REST (Representational State Transfer)  

*GraphQL

*WebSockets

*webhooks

*SOAP (Simple Object Access Protocol)

*gRPC (Google Remote Procedure Call)

*MQTT (MQ Telemetry Transport)

---
APIs also vary in the scope of who can access them.
---

*Public APIs (aka Open APIs)
Consumed by anyone who discovers the API

*Private APIs
Consumed only within an organization and not made public

*Partner APIs
Consumed between one or more organizations that have an established relationship

---
Request methods
---

When we make an HTTP call to a server, we specify a request method that indicates the type of operation we are about to perform. These are also called HTTP verbs.

Some common HTTP request methods correspond to the CRUD operations mentioned earlier. You can see a list of more methods here.

Method name	Operation
*GET	Retrieve data (Read)
*POST	Send data (Create)
*PUT/PATCH	Update data (Update)
      ( PUT usually replaces an entire resource, whereas PATCH usually is for partial updates)
*DELETE	Delete data (Delete)

Since we are "getting" books and not modifying any data, it makes sense that we are making a GET request. 

These are just conventions - it all depends on how the API is coded. To know which method to use, always read the documentation for the API you're working with!

Refer to the API Documentation here: Postman Library API v2 docs 

Request URL
In addition to a request method, a request must include a request URL that indicates where to make the API call. A request URL has three parts: a protocol (such as http:// or https://), host (location of the server), and path (route on the server). In REST APIs, the path often points to a reference entity, like "books".

Protocol	  Host	                            Path
https://  	library-api.postmanlabs.com    	/books

  
Paths and complete URLs are also sometimes called API endpoints.

<img width="500" height="500" alt="Screenshot (60)" src="https://github.com/user-attachments/assets/53bb76e9-56a0-44dd-aee3-cc2a4c74c8d3" />

---

Query parameters
---

Remember that the minimum ingredients you need to make a request are:

*a request method (GET/POST/PUT/PATCH/DELETE, etc)
*a request URL

---

Query parameter syntax
---

Query parameters are added to the end of the path. They start with a question mark ?, followed by the key-value pairs in the format: <key>=<value>. For example, this request might fetch all photos that have landscape orientation:

GET https://some-api.com/photos?orientation=landscape

If there are multiple query parameters, each is separated by an ampersand &. Below two query parameters to specify the orientation and size of the photos to be returned:

GET https://some-api.com/photos?orientation=landscape&size=500x400

---

When to use query parameters?
---

The answer is always: read the API documentation!

Sometimes, query parameters are optional and allow you to add filters or extra data to your responses. Sometimes, they are required in order for the server to process your request. APIs are implemented differently to fulfill different needs. 

The API allows us to add query parameters to a GET /books request to filter the results, as shown under "Params."

---

Authorization
---

Think about why you might not want an API to have completely open endpoints that anyone can access publicly. It would allow unauthorized people to access data they shouldn't see, or allow bots to flood an API with thousands of calls per second and shut it down. 

There are multiple methods for authorizing a request. Some examples are Basic Auth (username and password), OAuth (delegated authorization), and API Keys (secret strings registered to a developer from an API portal). 

---

Getting an API Key
---

APIs that use API Key auth usually allow developers to sign up in a developer portal, where they will receive a random API Key that can be used to authorize their requests to the API. The API Key allows the API to track who is making calls and how often.  

---

Headers
---

Headers are how we can add metadata about our requests, such as authorization information or specify the data type we want to receive in a response. This is different than the actual payload data we send in the body of a request, such as our new book information.

You can think of headers like the outside of an envelope when you send a letter. The envelope has information about delivering the letter, like proof that you've paid for postage. The actual data "payload" is the letter inside the envelope.

---

