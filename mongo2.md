# Aggregating Airlines Collection 

### 1. How many records does each airline class have? Use $project to show result as { class: "Z", total: 999}

<pre><code>
db.airlines.aggregate([
    {
        $group: {
            _id: "$class",
            total: {
                $sum: 1
            }
        }
    },
    {
        $project: {
            _id: 0,
            class: "$_id",
            total: "$total"
        }
    }
])
</code></pre>

<pre><code>
{ "class" : "F", "total" : 140343 }
{ "class" : "L", "total" : 23123 }
{ "class" : "P", "total" : 5683 }
{ "class" : "G", "total" : 17499 }
</code></pre>

### 2. What are the top 3 destination cities outsideof the United States (destCountryfield, not included) with the highest average passengers count? Show result as { "avgPassengers" : 2312.380, "city" : "Minsk, Belarus" }

<pre><code>
db.airlines.aggregate([
    {
        $match: {
            destCountry: {
                $ne: "United States"
            }
        }
    },
    {
       $group: {
            _id: "$destCity",
            avgPassengers: {$avg: "$passengers"}
       }
    },
    {
        $sort: {
            avgPassengers: -1
        }
    },
    {
        $project: {
            _id: 0,
            avgPassengers: "$avgPassengers",
            city: "$_id"
        }
    },
    {
        $limit: 3
    }
])
</code></pre>
<pre><code>
{ "avgPassengers" : 8052.380952380952, "city" : "Abu Dhabi, United Arab Emirates" }
{ "avgPassengers" : 7176.596638655462, "city" : "Dubai, United Arab Emirates" }
{ "avgPassengers" : 7103.333333333333, "city" : "Guangzhou, China" }
</code></pre>

### 3. Which carriers provide flights to Latvia (destCountry)? Show result as one document { "_id" : "Latvia", "carriers" : [ "carrier1", " carrier2", ...] }

<pre><code>
db.airlines.aggregate([
    {
        $match: {
            destCountry: "Latvia", 
        }
    },
    {
        $group: {
            _id: "$destCountry",
            carriers: {$push: "$carrier"}
        }
    }
])
</code></pre>
<pre><code>
{ "_id" : "Latvia", "carriers" : [ "JetClub AG", "Blue Jet SP Z o o", "Uzbekistan Airways", "Uzbekistan Airways", "Uzbekistan Airways", "Uzbekistan Airways", "Uzbekistan Airways", "Uzbekistan Airways", "Uzbekistan Airways" ] }
</code></pre>

### 4.What are the carriers which flue the most number of passengers from the United State to either Greece, Italy or Spain? Find top 10 carriers, but provide the last 7 carriers (do not include the first 3). Show result as { "_id" : "<carrier>", "total" : 999}
