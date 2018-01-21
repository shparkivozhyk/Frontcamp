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