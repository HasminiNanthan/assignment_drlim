### GOODLUCK ###
POST http://localhost:3000/register/user
Content-Type: application/json

{
  "username": "Hasmini",
  "password": "Mini",
  "name": "Ashu",
  "officerno": "0198",
  "rank": "Officer",
  "phone": "123456"
}

###
POST http://localhost:3000/login/user
Content-Type: application/json

{
  "username": "syahirah",
  "password": "syahirah12345"
}
###

###
GET http://localhost:3000/viewvisitor
Content-Type: application/json
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MDM2MTQ1NTAsImV4cCI6MTcwMzYxODE1MH0.Ucy6IWlP2Ga-Rwv74WrSgKB8zu0x1ggO93D0ruw059o

{
  "username": "zizun",
  "password": "98765",
  "Name": "Zizun",
  "Age": "80",
  "Gender": "female",
  "Address": "PJ",
  "Zipcode": "64100",
  "Relation": "GranCat"
  
}

###
POST http://localhost:3000/visitorpass
Content-Type: application/json
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MDM2MTg4MjAsImV4cCI6MTcwMzYyMjQyMH0.dC2wcrALZDP6OERljOsMFKn3eCLPg6XjHyqY9RAoC64

{
  "visitorId": "658b11f2115e9b5a44ed7cb8",
  "issuedBy":"Mochie",
  "validUntil": "12pm",
  "issuedAt": "27 Dec 2023"
  
}





