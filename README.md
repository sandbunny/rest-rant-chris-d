# Project REST-Rant

REST-Rant is an app where users can review restaurants.


# API Routes

| Method | Path                           | Purpose                                             |
|--------|---------------------------|-----------------------------------------------------|
| GET    | /                                    | Home page                                           |
| GET    | /places                          | Places index page                                   |
| POST   | /places                         | Create new place                                    |
| GET    | /places/new                   | Form page for creating a new place                  |
| GET    | /places/:id                      | Details about a particular place                    |
| PUT    | /places/:id                       | Update a particular place                           |
| GET    | /places/:id/edit               | Form page for editing an existing place             |
| DELETE | /places/:id                   | Delete a particular place                           |
| POST   | /places/:id/rant             | Create a rant (comment) about a particular place    |
| DELETE | /places/:id/rant/:rantId | Delete a rant (comment) about a particular place    |
| GET    | *                                     | 404 page (matches any route not defined above)      |


# Data Structure for Places

We will be storing data for places (restaurants) with the following attributes:

| Attribute | Type   | Description                        |
|-----------|--------|------------------------------------|
| name      | String | The name of the place              |
| city      | String | The city where the place is located|
| state     | String | The state where the place is located|
| cuisines  | String | The types of cuisines offered      |
| pic       | String | A URL to a picture of the place    |