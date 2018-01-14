## 3.1 ##
How many “Chinese” (cuisine) restaurants are in “Queens” (borough)?

<pre><code>>db.restaurants.find({cuisine: "Chinese", borough: "Queens"}).count()</code></pre>

<pre><code>728</pre></code>

## 3.2 ##
What is the _id of the restaurant which has the grade with the highest ever score?

<pre><code>> db.restaurants.find({},{restaurant_id: 1}).sort({"grades.score": -1}).limit(1)</code></pre>

<pre><code>{ "_id" : ObjectId("5a5b1ae5456e28f7d50710a4"), "restaurant_id" : "40372466" }</code></pre>

## 3.3 ##
Add a grade { grade: "A", score: 7, date: ISODate() } to every restaurant in “Manhattan” (borough).

<pre><code>> db.restaurants.updateMany({borough: "Manhattan"}, {$push: {grades: {grade: "A", score: 7, date: ISODate()}}})</code></pre>

<pre><code>{ "acknowledged" : true, "matchedCount" : 10259, "modifiedCount" : 10259 }</code></pre>

## 3.4 ##
What are the names of the restaurants which have a grade at index 8 with score less then 7? Use projection to include only names 
without _id.

<pre><code>> db.restaurants.find({"grades.8.score": {$lt: 7}},{name: 1, _id: 0})</code></pre>

<pre><code>{ "name" : "Silver Krust West Indian Restaurant" }
{ "name" : "Pure Food" }</code></pre>

## 3.5 ##
What are _id and borough of “Seafood” (cuisine) restaurants which received at least one “B” grade in period from 2014-02-01 to 
2014-03-01? Use projection to include only _id and borough.

<pre><code>> db.restaurants.find({***

...         cuisine: "Seafood",
...         grades: {
...             $elemMatch: {
...                 grade: "B",
...                 date: {
...                     $gt: ISODate('2014-02-01'),
...                     $lt: ISODate('2014-03-01')
...                 }
...             }
...         }
...     }, {
...         borough: 1
...     })</pre></code>
<pre><code>{ "_id" : ObjectId("5a5b1ae6456e28f7d50744b4"), "borough" : "Bronx" }
{ "_id" : ObjectId("5a5b1ae6456e28f7d507472c"), "borough" : "Manhattan" }</code></pre>

## 4.1 ##
Create an index which will be used by this query and provide proof (from explain() or Compass UI) that the
index is indeed used by the winning plan:
**db.restaurants.find({ name: "Glorious Food" })**


