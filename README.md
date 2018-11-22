# API Documentation

## Installation
```sh
$ docker-compose up
```
## EndPoints
**API URL :**
```sh
http://localhost:3000/api
```
**1. Get Bill**
   `GET /getbill`
#### Example
**Request**
```sh
GET /getbill
```
**Return**
```json
{
    "status": 1,
    "response": {
        "list": [
            {
                "name": "Burger",
                "tax_code": 1,
                "type": "food",
                "refundable": "YES",
                "price": 1000,
                "tax": 100,
                "amount": 1100
            },
            {
                "name": "Dji Sam Soe",
                "tax_code": 2,
                "type": "tobacco",
                "refundable": "NO",
                "price": 2500,
                "tax": 60,
                "amount": 2560
            },
            {
                "name": "Power Rangers",
                "tax_code": 3,
                "type": "entertainment",
                "refundable": "NO",
                "price": 120,
                "tax": 0.2,
                "amount": 120.2
            }
        ],
        "total": {
            "total_price": 3620,
            "total_tax": 160.2,
            "grand_total": 3780.2
        }
    }
}
```
**2. Set Tax Object**
`POST /settaxobject`
### Example
**Request**
```sh
POST /settaxobject
```
**Body Params**
* **name** -- (string) Name of Product
* **tax_code** -- (int) 1 = Food , 2 = Tobacco , 3 = Movie
* **price** -- (int) Product Price

**Return**
```json
{
    "status": 1, // 1 = Success , 0 = Failed
    "response": {
        "fieldCount": 0,
        "affectedRows": 1,
        "insertId": 3,
        "serverStatus": 2,
        "warningCount": 0,
        "message": "",
        "protocol41": true,
        "changedRows": 0
    }
}
```

## POSTMAN IMPORT JSON
* Create Environment with URL = http://localhost:3000
```json
{
	"info": {
		"_postman_id": "a4a0e0d7-2ef8-4d2d-9d12-f0485cc04824",
		"name": "ShopeeBE",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
	},
	"item": [
		{
			"name": "Get Billing",
			"request": {
				"method": "GET",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": ""
				},
				"url": {
					"raw": ""
				}
			},
			"response": []
		},
		{
			"name": "Set Tax Object",
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "Content-Type",
						"name": "Content-Type",
						"value": "application/x-www-form-urlencoded",
						"type": "text"
					}
				],
				"body": {
					"mode": "urlencoded",
					"urlencoded": [
						{
							"key": "name",
							"value": "Burger",
							"type": "text"
						},
						{
							"key": "tax_code",
							"value": "1",
							"type": "text"
						},
						{
							"key": "price",
							"value": "1000",
							"type": "text"
						}
					]
				},
				"url": {
					"raw": "{{url}}/api/settaxobject",
					"host": [
						"{{url}}"
					],
					"path": [
						"api",
						"settaxobject"
					]
				}
			},
			"response": []
		}
	]
}
```

## Database Structure

* Database Name > **shopee_tes_db**

![Table Structure](https://s3-ap-southeast-1.amazonaws.com/hitoriaf-public/images/DB+SHP.jpg)

| field  | description   |
|---|---|
| ID  | ID of product  |
|  ITEM_NAME | Name of Product  |
| ITEM_TAX_CODE  | Tax Codes , 1=food , 2=tobacco , 3=movie  |
| ITEM_PRICE  | Product Price  |
| CREATED_ON  | Table Row Created Date |
| UPDATED_ON |  Table Row Updated Date  |