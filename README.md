# CarCar

Team:
* Benjamin Ostler - Sales microservice
* Samantha Chin - Service microservice


## Design
CarCar is an application for managing aspects of an automobile dealership—specifically its inventory, service center, and sales. The service center and sales are microservices of the application, and both utilize a poller to integrate with other services. The Service API handles the automobile service appointments and Sales API handles the sales information.

![Project Beta Diagram](/assets/images/projectbetadiagram.png "Project Beta Diagram of Front End and Back End")
[Excalidraw Diagram](https://excalidraw.com/#json=liX7w-KNOHZDifpUVH1j_,TO2QvmVIfyR0yuQZ-AmekQ)


## Getting Started
1. Clone the repository by running the following command in your Terminal:
```
git clone https://gitlab.com/benjaminostler/project-beta.git
```

2. After cloning the repository, set up the docker containers and volume by running these commands, while you are in the correct project directory:
```
docker volume create beta-data
docker-compose build
docker-compose up
```
Note: When you run docker-compose up and if you're on macOS, you will see a warning about an environment variable named OS being missing. You can safely ignore this.

3.  You will be able to access the webpage on your browser at localhost:3000. In addition, the following ports for each of the APIs are below:

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
```
{
  "name": "Chrysler"
}
```

**Updating a manufacturer**
To update a manufacturer, you would use the manufacturer’s id to reference the specific manufacturer that you want to update. For example, you would use the PUT HTTP request to the URL http://localhost:8100/api/manufacturers/1/ to update the details for the manufacturer with the id of 1. Updating a manufacturer requires only the manufacturer's name. The return value of updating a single manufacturer is its name, href, and id.
```
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
```
{
  "name": "Sebring",
  "picture_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Chrysler_Sebring_front_20090302.jpg/320px-Chrysler_Sebring_front_20090302.jpg",
  "manufacturer_id": 1
}
```

**Updating a vehicle model**
To update a vehicle model, you would use the vehicle model’s id to reference the specific model that you want to update. For example, you would use the PUT HTTP request to the URL http://localhost:8100/api/models/1/ to update the details for the vehicle model with the id of 1.
When you update a vehicle model, it can take the name and/or the picture URL. It is not possible to update a vehicle model's manufacturer.
```
{
  "name": "Sebring",
  "picture_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Chrysler_Sebring_front_20090302.jpg/320px-Chrysler_Sebring_front_20090302.jpg"
}
```

**Getting the detail of a vehicle model**
To get the details of a specific vehicle model, you would use the vehicle model’s id. For example, you would use the GET HTTP request to the URL http://localhost:8100/api/models/1/ to retrieve the details for the vehicle model with the id of 1.


Getting the detail of a vehicle model, or the return value from creating or updating a vehicle model, returns the model's information and the manufacturer's information.
```
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
```
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
      "picture_url": ""https://www.ford.com/is/image/content/dam/vdm_ford/live/en_us/ford/nameplate/mustang/2023/collections/dm/22_FRD_MST_55079_C7447317_MUST_GT_Prem_34FrntPassMotnRain_mj.tif?croppathe=1_16x9&wid=900",
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
```
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
```
{
  "color": "red",
  "year": 2012,
  "sold": true
}
```

**Getting the detail of an automobile**
To get the details of a specific automobile, you would use the car’s VIN to reference the car. For example, you would use the GET HTTP request to the URL http://localhost:8100/api/automobiles/1C3CC5FB2AN120174/ to retrieve the details for the car with the VIN “1C3CC5FB2AN120174”. The details for an automobile include its model and manufacturer.
```
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

```
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

### Work In Progress
##### Technicians
A Technician model containing first_name, last_name, and employee_id fields.

| Action                                       | Method                 | URL  |
| :------------------------------|:------------------|:---------------------------------------------|
| List technicians		 | 	GET	       |	http://localhost:8080/api/technicians/      |
| Create a technician		 |	POST	       |	http://localhost:8080/api/technicians/      |
| Delete a specific technician	 |	DELETE       |	http://localhost:8080/api/technicians/:id  |

##### Appointments
An Appointment model containing date_time, reason, status, vin, customer and technician fields. The technician field is the foreign key.

| Action| Method       | URL                                                                              |
| :----------------------|:------------|:-----------------------------------|
| List appointments		         | 	GET	  | http://localhost:8080/api/appointments/                  |
| Create an appointment |	POST	  | http://localhost:8080/api/appointments/                  |
| Delete an appointment |	DELETE   | http://localhost:8080/api/appointments/:id              |
| Set appointment status to "canceled” |	PUT         | http://localhost:8080/api/appointments/:id/cancel  |
| Set appointment status to "completed”   |	PUT         | http://localhost:8080/api/appointments/:id/finish    |




## Sales microservice

Explain your models and integration with the inventory
microservice, here.
