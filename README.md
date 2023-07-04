# AutoRev
AutoRev is an application for managing aspects of an automobile dealership—specifically its inventory, service center, and sales. The service center and sales are microservices of the application, and both utilize a poller to integrate with other services. The Service API handles the automobile service appointments and Sales API handles the sales information.

Team:
* Benjamin Ostler - Sales microservice
* Samantha Chin - Service microservice


## Design

![AutoRev Diagram](/assets/images/projectbetadiagram.png "AutoRev Diagram of Front End and Back End")
[Excalidraw Diagram](https://excalidraw.com/#json=liX7w-KNOHZDifpUVH1j_,TO2QvmVIfyR0yuQZ-AmekQ)


## Getting Started
**Note:** Docker, Git and Node.js must be up to date
1. Fork this repository and clone the forked repository by running the following command in your Terminal:
```
git clone <<gitlab-url-to-forked-repository-name-here>
```

2. After cloning the repository, set up the docker containers and volume by running these commands, while you are in the correct project directory:
```
docker volume create beta-data
docker-compose build
docker-compose up
```
Note: When you run docker-compose up and if you're on macOS, you will see a warning about an environment variable named OS being missing. You can safely ignore this.

3. Once the Docker containers are running, you will be able to access the webpage on your browser at http://localhost:3000/. In addition, the following ports for each of the APIs are below:

Ports|URL
--- | ---
React                    | http://localhost:3000/
inventory-api       | http://localhost:8100/
sales-api       | http://localhost:8090/
service-api       | http://localhost:8080/



## Inventory
The following documentation describes the available functionality in the Inventory API. Inventory consists of three models:
1. Manufacturers
2. Vehicle Models
3. Automobiles

#### Manufacturers
A Manufacturer is defined as the company that manufactures the automobile.
From Insomnia and your browser, you can access the manufacturer model endpoints at the following URLs.

| Action                                       | Method                 | URL                                                       |
| :-----------------------------|:------------------|:--------------------------------------|
|List manufacturers		|GET	|	http://localhost:8100/api/manufacturers/  |
|Create a manufacturer	|POST	|	http://localhost:8100/api/manufacturers/  |
|Get a manufacturer		|GET	|	http://localhost:8100/api/manufacturers/:id/ |
|Update a manufacturer	|PUT	|	http://localhost:8100/api/manufacturers/:id/ |
|Delete a manufacturer	|DELETE|	http://localhost:8100/api/manufacturers/:id/ |


**Creating a manufacturer**
To create a manufacturer, you would use the POST HTTP request to the URL http://localhost:8100/api/manufacturers/. Creating a manufacturer requires only the manufacturer's name. The return value of creating a single manufacturer is its name, href, and id.
```json
{
  "name": "Chrysler"
}
```

**Updating a manufacturer**
To update a manufacturer, you would use the manufacturer’s id to reference the specific manufacturer that you want to update. For example, you would use the PUT HTTP request to the URL http://localhost:8100/api/manufacturers/1/ to update the details for the manufacturer with the id of 1. Updating a manufacturer requires only the manufacturer's name. The return value of updating a single manufacturer is its name, href, and id.
```json
{
  "name": "Chrysler"
}
```

**Getting the detail of a manufacturer**
To get the details of a specific manufacturer, you would use the manufacturer’s id. For example, you would use the GET HTTP request to the URL http://localhost:8100/api/manufacturers/1/ to retrieve the details for the manufacturer with the id of 1. The return value of getting a single manufacturer is its name, href, and id.


**Getting a list of manufacturers**
To get a list of manufacturers, you would use the GET HTTP request to the URL http://localhost:8100/api/manufacturers/.The list of manufacturers is an object with the key "manufacturers" set to a list of manufacturers.


#### Vehicle models
A vehicle model is defined as the model of a vehicle created by the manufacturer.
From Insomnia and your browser, you can access the vehicle model endpoints at the following URLs.

| Action                                       | Method                 | URL                                                          |
| :-----------------------------|:------------------|:-----------------------------------------|
| List vehicle models		|GET		| http://localhost:8100/api/models/               |
| Create a vehicle model	|POST		| http://localhost:8100/api/models/               |
| Get a vehicle model		|GET		| http://localhost:8100/api/models/:id/          |
| Update a vehicle model	|PUT		| http://localhost:8100/api/models/:id/          |
| Delete a vehicle model	|DELETE	| http://localhost:8100/api/models/:id/          |


**Creating a vehicle model**
To create a vehicle model, you would use the POST HTTP request to the URL http://localhost:8100/api/models/. When you create a vehicle model, it requires the model name, a URL of an image, and the id of the manufacturer.
```json
{
  "name": "Sebring",
  "picture_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Chrysler_Sebring_front_20090302.jpg/320px-Chrysler_Sebring_front_20090302.jpg",
  "manufacturer_id": 1
}
```

**Updating a vehicle model**
To update a vehicle model, you would use the vehicle model’s id to reference the specific model that you want to update. For example, you would use the PUT HTTP request to the URL http://localhost:8100/api/models/1/ to update the details for the vehicle model with the id of 1.
When you update a vehicle model, it can take the name and/or the picture URL. It is not possible to update a vehicle model's manufacturer.
```json
{
  "name": "Sebring",
  "picture_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Chrysler_Sebring_front_20090302.jpg/320px-Chrysler_Sebring_front_20090302.jpg"
}
```

**Getting the detail of a vehicle model**
To get the details of a specific vehicle model, you would use the vehicle model’s id. For example, you would use the GET HTTP request to the URL http://localhost:8100/api/models/1/ to retrieve the details for the vehicle model with the id of 1.


Getting the detail of a vehicle model, or the return value from creating or updating a vehicle model, returns the model's information and the manufacturer's information.
```json
{
  "href": "/api/models/1/",
  "id": 1,
  "name": "Sebring",
  "picture_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Chrysler_Sebring_front_20090302.jpg/320px-Chrysler_Sebring_front_20090302.jpg",
  "manufacturer": {
    "href": "/api/manufacturers/1/",
    "id": 1,
    "name": "Daimler-Chrysler"
  }
}
```


**Getting a list of vehicle models**
To get a list of vehicle models, you would use the GET HTTP request to the URL http://localhost:8100/api/models/.This returns an object with the key "models" and a value of the list of models.
```json
{
  "models": [
    {
      "href": "/api/models/1/",
      "id": 1,
      "name": "Sebring",
      "picture_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Chrysler_Sebring_front_20090302.jpg/320px-Chrysler_Sebring_front_20090302.jpg",
      "manufacturer": {
        "href": "/api/manufacturers/1/",
        "id": 1,
        "name": "Daimler-Chrysler"
      }
    },
    {
      "href": "/api/models/2/",
      "id": 3,
      "name": "Mustang",
      "picture_url": "https://www.ford.com/is/image/content/dam/vdm_ford/live/en_us/ford/nameplate/mustang/2023/collections/dm/22_FRD_MST_55079_C7447317_MUST_GT_Prem_34FrntPassMotnRain_mj.tif?croppathe=1_16x9&wid=900",
      "manufacturer": {
        "href": "/api/manufacturers/2/",
        "id": 2,
        "name": "Ford"
      }
    }
  ]
}
```


#### Automobiles
Automobile: An automobile model is defined as the actual automobile of a specific vehicle model.
From Insomnia and your browser, you can access the automobile endpoints at the following URLs.
Note: The identifiers for automobiles in this API are not integer ids. They are the Vehicle Identification Number (VIN) for the specific automobile.

| Action                                       | Method                 | URL                                                          |
| :-----------------------------|:------------------|:-----------------------------------------|
|List automobiles	|	GET		| http://localhost:8100/api/automobiles/ |
|Create an automobile |	POST		| http://localhost:8100/api/automobiles/ |
|Get an automobile	|	GET		| http://localhost:8100/api/automobiles/:vin/ |
|Update an automobile|	PUT		| http://localhost:8100/api/automobiles/:vin/ |
|Delete an automobile	|	DELETE	| http://localhost:8100/api/automobiles/:vin/ |


**Creating an automobile**
To create an automobile, you would use the POST HTTP request to the URL http://localhost:8100/api/automobiles/. When you create an automobile, it requires the color, year, VIN, and the id of the vehicle model.
```json
{
  "color": "red",
  "year": 2012,
  "vin": "1C3CANG4120174",
  "model_id": 1
}
```

**Updating an automobile**
To update an automobile, you would use the car’s VIN to reference the specific car that you want to update. For example, you would use the PUT HTTP request to the URL http://localhost:8100/api/automobiles/1C3CC5FB2AN120174/ to update the details for the car with the VIN “1C3CC5FB2AN120174”.
You can update the color, year, and sold status of an automobile.
```json
{
  "color": "red",
  "year": 2012,
  "sold": true
}
```

**Getting the detail of an automobile**
To get the details of a specific automobile, you would use the car’s VIN to reference the car. For example, you would use the GET HTTP request to the URL http://localhost:8100/api/automobiles/1C3CC5FB2AN120174/ to retrieve the details for the car with the VIN “1C3CC5FB2AN120174”. The details for an automobile include its model and manufacturer.
```json
{
  "href": "/api/automobiles/1C3CANG4120174/",
  "id": 1,
  "color": "yellow",
  "year": 2013,
  "vin": "1C3CANG4120174",
  "model": {
    "href": "/api/models/1/",
    "id": 1,
    "name": "Sebring",
    "picture_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Chrysler_Sebring_front_20090302.jpg/320px-Chrysler_Sebring_front_20090302.jpg",
    "manufacturer": {
      "href": "/api/manufacturers/1/",
      "id": 1,
      "name": "Daimler-Chrysler"
    }
  },
  "sold": false
}
```


**Getting a list of automobiles**
To get a list of automobiles, you would use the GET HTTP request to the URL  http://localhost:8100/api/automobiles/.Getting a list of automobiles returns a dictionary with the key "autos" set to a list of automobile information.

```json
{
  "autos": [
    {
      "href": "/api/automobiles/1C3CANG4120174/",
      "id": 1,
      "color": "yellow",
      "year": 2013,
      "vin": "1C3CANG4120174",
      "model": {
        "href": "/api/models/1/",
        "id": 1,
        "name": "Sebring",
        "picture_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Chrysler_Sebring_front_20090302.jpg/320px-Chrysler_Sebring_front_20090302.jpg",
        "manufacturer": {
          "href": "/api/manufacturers/1/",
          "id": 1,
          "name": "Daimler-Chrysler"
        }
      },
      "sold": false
    }
  ]
}
```


## Service microservice
The service microservice keeps track of service appointments for automobiles and their owners. This microservice obtains automobile data from the inventory service using polling, so that the most up-to-date inventory is reflected for the service team to make appointments. The poller is set to update the inventory of automobiles every minute.

#### Service models
This microservice includes three models, which are listed below.


1. Technician Model
   The Technician model contains the following fields, and each technician is associated with an appointment.
   * **first_name:** the first name of the technician
   * **last_name:** the last name of the technician
   * **employee_id:** the unique identifier of each technician


2. AutomobileVO Model
   The AutomobileVO model is updated every 60 seconds with VINs from the Inventory service, using a **poller. Each automobile is associated with an appointment, based on the automobile’s VIN. The AutomobileVO model contains the following fields.
   * **vin:** the VIN is a unique identifier of each car
   * **sold:** the status of the vehicle on whether or not it was sold


3. Appointment Model
   The Appointment model contains the following fields, and within each appointment, a technician is assigned from the Technician model.
   * **date_time:** the date and time of an appointment
   * **reason:** the reason for the appointment
   * **status:** the status of an appointment (“created”, “completed”, “canceled”)
   * **vin:** the associated VIN from the AutomobileVO; the unique identified of a car
   * **customer:** the customer of the appointment
   * **technician:** the technician that will manage the appointment and is the Foreign Key, linking the technician model to the appointment model
   * **vip_status:** an appointment is marked VIP if the VIN provided for an appointment exists in the inventory, indicating that it was sold and the customer should receive special treatment



#### Technicians
A Technician is defined as an employee of AutoRev that is assigned to an appointment to service a car.


**APIs to send and view data**
From Insomnia and your browser, you can access the Technician model endpoints at the following URLs.

| Action                                       | Method                 | URL                                                                  |
| :------------------------------|:------------------|:---------------------------------------------|
| List technicians		 | 	GET	       |	http://localhost:8080/api/technicians/      |
| Create a technician		 |	POST	       |	http://localhost:8080/api/technicians/      |
| Delete a specific technician	 |	DELETE       |	http://localhost:8080/api/technicians/:id  |


**Creating a technician**
To create a technician, you would use the POST HTTP request to the URL http://localhost:8080/api/technicians/. Creating a technician requires the technician’s first name, last name and employee ID. The employee ID is based on the initial of the first name and full last name. The return value of creating a single manufacturer is its first name, last name and employee ID.
```json
{
  "first_name": "Matthew",
  "last_name": "Campbell",
  "employee_id": "mcampbell"
}
```


**Getting a list of technicians**
To get a list of technicians, you would use the GET HTTP request to the URL http://localhost:8080/api/technicians/. The list of technicians is an object with the key "technicians" set to a list of technicians.
```json
{
"technicians": [
		{
			"href": "/api/technicians/1/",
			"id": 1,
			"first_name": "Matthew",
			"last_name": "Campbell",
			"employee_id": "mcampbell"
		},
		{
			"href": "/api/technicians/2/",
			"id": 2,
			"first_name": "Madilyn",
			"last_name": "Scott",
			"employee_id": "mscott"
		},
	]
}

```


**Deleting a technician**
To remove a technician, you would use the DELETE HTTP request to the URL http://localhost:8080/api/technicians/id. Deleting a technician requires the ID of a technician. Upon deletion, the response will read as the following:
```json
{
	"deleted": true
}
```




**Front-end views**


**Technicians**
A page that lists all technicians, showing each technician’s employee ID and name.

**Add a technician**
A form that allows a person to enter an automobile technician's name and employee ID. When the form is submitted, the automobile technician is created in the application.



#### Appointments
A service appointment is created when a customer is in need to get their car serviced.


**APIs to send and view data**
From Insomnia and your browser, you can access the Technician model endpoints at the following URLs.

| Action                                                    | Method       | URL                                                                              |
| :--------------------------------------|:------------|:----------------------------------------------------|
| List appointments		         | 	GET	  | http://localhost:8080/api/appointments/                  |
| Create an appointment	                       |	POST	  | http://localhost:8080/api/appointments/                  |
| Delete an appointment	                       |	DELETE   | http://localhost:8080/api/appointments/:id              |
| Set appointment status to "canceled” |	PUT         | http://localhost:8080/api/appointments/:id/cancel  |
| Set appointment status to "completed”   |	PUT         | http://localhost:8080/api/appointments/:id/finish    |


**Creating an appointment**
To create an appointment, you would use the POST HTTP request to the URL  http://localhost:8080/api/appointments/. Creating an appointment requires the car’s VIN, the customer name, the date & time, the technician (selected from a dropdown - based on the technician model), and the reason for the appointment. The return value of creating an appointment will be the details entered, along with the technician's details.
```json
{
	"vin":"WBAPH5G51BNM76282",
	"customer": "Sam Chin",
	"date_time": "2023-06-22T14:27",
	"technician": "ovinluan",
	"reason": "Oil Change"
}

```


**Getting a list of appointments**
To get a list of appointments, you would use the GET HTTP request to the URL http://localhost:8080/api/appointments/.The list of appointments is an object with the key "appointments" set to a list of appointments.
```json
{
	"appointments": [
		{
			"href": "/api/appointments/2/",
			"id": 2,
			"date_time": "2023-06-09T08:09:00+00:00",
			"reason": "Oil Change",
			"status": "",
			"vin": "WBAPH5G51BNM76282",
			"customer": "Sam Chin",
			"technician": {
				"href": "/api/technicians/6/",
				"id": 6,
				"first_name": "Oliver",
				"last_name": "Vinluan",
				"employee_id": "ovinluan"
			},
			"vip_status": false
		}
	]
}


```


**Deleting an appointment**
To remove an appointment, you would use the DELETE HTTP request to the URL http://localhost:8080/api/appointments/:id. Deleting a technician requires the ID of an appointment. Upon deletion, the response will read as the following:
```json
{
	"deleted": true
}
```


**Canceling an appointment**
To cancel an appointment, you would use the PUT HTTP request to the URL http://localhost:8080/api/appointments/:id/cancel. Canceling an appointment requires the ID of an appointment in the URL, along with the status set to “canceled” in the JSON body. It will return the details of the specified appointment and the assigned technician, and it will set the status of the appointment to “canceled”.

For example, you would use the GET HTTP request to the URL http://localhost:8080/api/appointments/2/cancel to set the status of appointment 2, to canceled.
```json
{
	"status": "canceled"
}

```


**Finishing an appointment**
To finish an appointment, you would use the PUT HTTP request to the URL http://localhost:8080/api/appointments/:id/finish.  Marking the status of an appointment as “finished” requires the ID of an appointment in the URL, along with the status set to “finished” in the JSON body. It will return the details of the specified appointment and the assigned technician, and it will set the status of the appointment to “finished”.

For example, you would use the GET HTTP request to the URL http://localhost:8080/api/appointments/2/finish to set the status of appointment 2, to “finished”.
```json
{
	"status": "finished"
}


```




**Front-end views**


**Service Appointments**
A page that shows a list of scheduled appointments that contains the details collected in the form: VIN, customer name, date and time of the appointment, the assigned technician's name, and the reason for the service.
   * VIP: If the VIN provided for an appointment exists in our inventory, meaning it was sold, we should give the customer special treatment and is listed as VIP.
   * Appointment Status: Each appointment in the list of appointments have a button that allows a service concierge to "cancel" the appointment, or to mark the appointment as "finished". When a service appointment is canceled or finished, it will no longer show up in the list of appointments.

**Create a Service Appointment**
A form that allows a service concierge to enter the VIN of the vehicle, the customer's name, the date and time of the appointment, the assigned technician, and a reason for the service appointment (like "oil change" or "routine maintenance"). When the form is submitted, the service appointment is saved to the application.

**Service History**
A page that shows the history of all service appointments— both current and canceled or finished. Additionally, it allows for the searching of a particular VIN.
   * Someone can type in the VIN and click “Search”. On form submission, it displays the filtered list of service appointments to include the vehicle's VIN, the appointment's VIP status, the customer's name, the date and time of the appointment, the assigned technician's name, the reason for the service, and the status of the service appointment (either "created", "canceled", or "finished").



## Sales microservice

The back end of the sales microservice has 4 models: Customer, Salesperson, Sales, AutomobileVO. The Sales model gets data from the three other models and interacts with them.

The AutomobileVO is a value object that gets data from the automobiles in the inventory using a poller. The sales poller polls the inventory microservice automatically for data, keeping the sales microservice up to date. This enables the user to select which car to be sold, having already filtered out the cars previously sold.


## Accessing Endpoints through Insomnia to Send and View Data:

### Customers:


| Action | Method | URL
| ----------- | ----------- | ----------- |
| List customers | GET | http://localhost:8090/api/customers/
| Create a customer | POST | http://localhost:8090/api/customers/
| Show a specific customer | GET | http://localhost:8090/api/customers/id/

To create a Customer (SEND THIS JSON BODY):
```
{
	"name": "John Johns",
	"address": "1212 Ocean Street",
	"phone_number": 9804357878
}
```
Return Value of Creating a Customer:
```
{
	"id: "1",
	"name": "John Johns",
	"address": "1212 Ocean Street",
	"phone_number": 9804357878
}
```
Return value of Listing all Customers:
```
{
	"customers": [
		{
			"id",
			"name": "Martha Stewart",
			"address": "1313 Baker Street",
			"phone_number": "980720890"
		},
		{
			"id",
			"name": "John Johns",
			"address": "1212 Ocean Street",
			"phone_number": "9804357878"
		}
	]
}
```
### Salespeople:
| Action | Method | URL
| ----------- | ----------- | ----------- |
| List salespeople | GET | http://localhost:8090/api/salespeople/
| Salesperson details | GET | http://localhost:8090/api/salesperson/id/
| Create a salesperson | POST | http://localhost:8090/api/salespeople/
| Delete a salesperson | DELETE | http://localhost:8090/api/salesperson/id/


To create a salesperson (SEND THIS JSON BODY):
```
{
	"name": "Jane Doe",
	"employee_number": 1
}
```
Return Value of creating a salesperson:
```
{
	"id": 1,
	"name": "Liz",
	"employee_number": 1
}
```
List all salespeople Return Value:
```
{
	"salespeople": [
		{
			"id": 1,
			"name": "Jane Doe",
			"employee_number": 1
		}
	]
}
```
### Sales:
- the id value to show a salesperson's Sales is the **"id" value tied to a salesperson.**

| Action | Method | URL
| ----------- | ----------- | ----------- |
| List all Sales | GET | http://localhost:8090/api/Sales/
| Create a new sale | POST | http://localhost:8090/api/Sales/
| Show salesperson's Sales | GET | http://localhost:8090/api/Sales/id/

List all Sales Return Value:
```
{
	"sales": [
		{
			"id": 1,
			"price": 111000,
			"vin": {
				"vin": "111"
			},
			"salesperson": {
				"id": 1,
				"name": "Liz",
				"employee_number": 1
			},
			"customer": {
				"name": "Martha Stewart",
				"address": "1313 Baker Street",
				"phone_number": "980720890"
			}
		}
	]
}
```
Create a New Sale (SEND THIS JSON BODY):
```
{
	"salesperson": "Liz",
	"customer": "John Johns",
	"vin": "888",
	"price": 40000
}
```
Return Value of Creating a New Sale:
```
{
	"id": 4,
	"price": 40000,
	"vin": {
		"vin": "888"
	},
	"salesperson": {
		"id": 1,
		"name": "Liz",
		"employee_number": 1
	},
	"customer": {
		"id",
		"name": "John Johns",
		"address": "1212 Ocean Street",
		"phone_number": "9804357878"
	}
}
```
Show a Salesperson's Sales Return Value:
```
{
	"id": 1,
	"price": 111000,
	"vin": {
		"vin": "111"
	},
	"salesperson": {
		"id": 1,
		"name": "Liz",
		"employee_number": 1
	},
	"customer": {
		"id",
		"name": "Martha Stewart",
		"address": "1313 Baker Street",
		"phone_number": "980720890"
	}
}
```
