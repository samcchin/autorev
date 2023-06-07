# CarCar

Team:

* Benjamin Ostler -
* Person 2 - Which microservice?

## Design
Diagram:


After cloning the repository, run the following commands to get this website up and running:
docker volume create beta-data
docker-compose build
docker-compose up
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
