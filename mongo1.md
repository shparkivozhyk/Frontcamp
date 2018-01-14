## 3.1 ##
How many “Chinese” (cuisine) restaurants are in “Queens” (borough)?

```>db.restaurants.find({cuisine: "Chinese", borough: "Queens"}).count()```

```728```

## 3.2 ##
What is the _id of the restaurant which has the grade with the highest ever score?

```> db.restaurants.find({},{restaurant_id: 1}).sort({"grades.score": -1}).limit(1)```

```{ "_id" : ObjectId("5a5b1ae5456e28f7d50710a4"), "restaurant_id" : "40372466" }```

## 3.3 ##
Add a grade { grade: "A", score: 7, date: ISODate() } to every restaurant in “Manhattan” (borough).

```> db.restaurants.updateMany({borough: "Manhattan"}, {$push: {grades: {grade: "A", score: 7, date: ISODate()}}})```

```{ "acknowledged" : true, "matchedCount" : 10259, "modifiedCount" : 10259 }```

## 3.4 ##
What are the names of the restaurants which have a grade at index 8 with score less then 7? Use projection to include only names 
without _id.

```> db.restaurants.find({"grades.8.score": {$lt: 7}},{name: 1, _id: 0})```

```{ "name" : "Silver Krust West Indian Restaurant" }```
```{ "name" : "Pure Food" }```

## 3.5 ##
What are _id and borough of “Seafood” (cuisine) restaurants which received at least one “B” grade in period from 2014-02-01 to 
2014-03-01? Use projection to include only _id and borough.

```> db.restaurants.find({```
```...         cuisine: "Seafood",```
```...         grades: {```
```...             $elemMatch: {```
```...                 grade: "B",```
```...                 date: {```
```...                     $gt: ISODate('2014-02-01'),```
```...                     $lt: ISODate('2014-03-01')```
```...                 }```
```...             }```
```...         }```
```...     }, {```
```...         borough: 1```
```...     })```

```{ "_id" : ObjectId("5a5b1ae6456e28f7d50744b4"), "borough" : "Bronx" }```
```{ "_id" : ObjectId("5a5b1ae6456e28f7d507472c"), "borough" : "Manhattan" }```
