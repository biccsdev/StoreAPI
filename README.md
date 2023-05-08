# NestJS Store API

## Description

This repository contains the code for a store API built with NestJS. This project was built for practicing my skills with Typescript and NestJS, I wanted to dig deeper into using NestJs CLI, writing my own Controller, Service and entity layers and connect to a database to manipulate data.

The project solves the problem of managing the stock of products for any business by allowing them to create, update, delete and look up any product they want to keep track of. 


## Table of Contents

- [Installation](#installation)
- [Class Diagram](#UMLClassDiagram)
- [Components Diagram](#UMLComponentsDiagram)
- [APIs](#APIs)
- [License](#License)


## Installation
- Clone the repository
- Navigate to the project's folder
- Install dependencies: ```npm install```
-  Run development ```npm run start```
-  Run watch mode ```npm run start:dev```

# UML Class Diagram

![UMLCLASS](https://user-images.githubusercontent.com/86041666/236732328-39ee26fb-3dee-4973-8f03-11b3b54c9897.jpg)


# UML Components Diagram

![umlcomponent](https://user-images.githubusercontent.com/86041666/236732338-cc39a7da-26f9-4ac8-8501-81e5a28cc668.jpg)


# APIs
## Category Controller
### POST /category
Creates a new Category.

Request Example:
```
POST /category
```
Body
``` 
{
    "name": "exampleName",
}
```
Response 

``` 
{
    "id": "s0m3Exampl3Id",
    "name": "exampleName"
}  

```

### GET /category
Returns all Categories.

Request Example:
```
GET /category
```

Response 


``` 
{
    "id": "s0m3Exampl3Id",
    "name": "exampleName"
}  

```

### DELETE /category/:id
Deletes a specific Category.

Request Example:
```
DELETE /category/s0m3Exampl3Id
```

Response 

``` 
{
    "successfully deleted category 'exampleName'. "
}  
```
## Product Controller
### POST /product
Creates a new Product.

Request Example:
```
POST /product
```
Body
``` 
{
    "name": "exampleName",
    "category": "exampleCategory",
    "stock": "123",
    "barcode": "exampleCode",
    "price": "examplePrice",
}
```
Response 

``` 
{
    "name": "exampleName",
    "category": "exampleCategory",
    "stock": "123",
    "barcode": "exampleCode",
    "price": "examplePrice",
} 

```

### GET /product
Returns all Products.

Request Example:
```
GET /product
```

Response 


``` 
{
    "id": "sjl43b4kv4",
    "name": "exampleName",
    "category": "exampleCategory",
    "stock": "123",
    "barcode": "exampleCode",
    "price": "examplePrice",
},
{
    "id": "232hb43k4h",
    "name": "exampleName",
    "category": "exampleCategory",
    "stock": "123",
    "barcode": "exampleCode",
    "price": "examplePrice",
} 
.
.
.  

```
### GET /product/:value
Gets a specific Product by its value.

Request Example:
```
GET /product/exampleCode
```

Response 


``` 
{
    "id": "sjl43b4kv4",
    "name": "exampleName",
    "category": "exampleCategory",
    "stock": "123",
    "barcode": "exampleCode",
    "price": "examplePrice",
}  
```




### DELETE /product/:id
Deletes a specific Product.

Request Example:
```
DELETE /product/sjl43b4kv4
```

Response 


``` 
{
    "successfully deleted product 'exampleName'. "
}  
```

## Sale Controller
### POST /sale
Creates a new Sale.

Request Example:
```
POST /sale
```
Body
``` 
{
    "items": [{...Product},{...Product}],
    "total": "123.64",
    "date": "22/12/23",
}
```
Response 

``` 
{
    "items": [{...Product},{...Product}],
    "total": "123.64",
    "date": "22/12/23",
}

```

### GET /sale
Returns all sales.

Request Example:
```
GET /sale
```

Response 


``` 
{
    "id": "343v34f3f",
    "items": [{...Product},{...Product}],
    "total": "12312.64",
    "date": "12/12/23",
},
{
    "id": "fj4h44hv",
    "items": [{...Product},{...Product}],
    "total": "123.64",
    "date": "22/12/23",
}
.
.
.  

```

### DELETE /sale/:id
Deletes a specific Sale.

Request Example:
```
DELETE /sale/343v34f3f
```

Response 


``` 
{
    "id": "343v34f3f",
    "items": [{...Product},{...Product}],
    "total": "12312.64",
    "date": "12/12/23",
}  
```





## License

Nest is [MIT licensed](LICENSE).
