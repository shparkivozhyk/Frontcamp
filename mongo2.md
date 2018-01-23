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

### 4. What are the carriers which flue the most number of passengers from the United State to either Greece, Italy or Spain? Find top 10 carriers, but provide the last 7 carriers (do not include the first 3). Show result as { "_id" : "<carrier>", "total" : 999}
<pre></code>
db.airlines.aggregate([
    {
        $match: {
            originCountry: "United States"
        }
    },
    {
        $group: {
            _id: "$carrier",
            total: {$sum: "$passengers"}
        }
    },
    {
        $sort: {
            total: -1
        }
    },
    {
        $skip: 3
    },
    {
        $limit: 7
    }
])
</code></pre>
<pre><code>
{ "_id" : "United Air Lines Inc.", "total" : 54029502 }
{ "_id" : "JetBlue Airways", "total" : 21433163 }
{ "_id" : "SkyWest Airlines Inc.", "total" : 19482179 }
{ "_id" : "Alaska Airlines Inc.", "total" : 14600696 }
{ "_id" : "Spirit Air Lines", "total" : 13268045 }
{ "_id" : "ExpressJet Airlines Inc.", "total" : 9619104 }
{ "_id" : "Frontier Airlines Inc.", "total" : 9214843 }
</code></pre>

### 5. Find the city (originCity) with the highest sum of passengers for each state (originState) of the United States (originCountry). Provide the city for the first 5 states ordered by state alphabetically (you should see the city for Alaska, Arizona and etc). Show result as { "totalPassengers" : 999, "location" : { "state" : "abc", "city" : "xyz" } }
<pre><code>
db.airlines.aggregate([
    {
        $match: {
            originCountry: "United States"
        }
    },
    {
        $group: {
            _id: {
                state: "$originState",
                city: "$originCity"
            },
            totalPassengers: {
                $sum: "$passengers"
            }
        }
    },
    {
        $sort: {
            "_id.state": 1,
            totalPassengers: -1
        }
    },
    {
        $group: {
            _id: "$_id.state",
            city: {$first: "$_id.city"},
            maxPassengers: {$first: "$totalPassengers"}
        }
    },
    {
        $sort: {
            _id: 1
        }
    },
    {
        $project: {
            _id: 0,
            location: {
                city: "$city",
                state: "$_id"
            },
            maxPassengers: 1
        }
    },
    {
        $limit: 5
    }
])
</code></pre>
<pre><code>
{ "maxPassengers" : 760120, "location" : { "city" : "Birmingham, AL", "state" : "Alabama" } }
{ "maxPassengers" : 1472404, "location" : { "city" : "Anchorage, AK", "state" : "Alaska" } }
{ "maxPassengers" : 13152753, "location" : { "city" : "Phoenix, AZ", "state" : "Arizona" } }
{ "maxPassengers" : 571452, "location" : { "city" : "Little Rock, AR", "state" : "Arkansas" } }
{ "maxPassengers" : 23701556, "location" : { "city" : "Los Angeles, CA", "state" : "California" } }
</code></pre>

# Aggregate Enron collection
### Which pair of people have the greatest number of messages in the dataset?
<pre><code>
db.enron.aggregate([
    {
        $project: {
            from: "$headers.From",
            to: "$headers.To"
        }
    },
    {
        $unwind: "$to"
    },
    {
        $group: {
            _id: {
                id: "$_id",
                from: "$from"
            },
            to: {
                $addToSet: "$to"
            }
        }
    },
    {
        $unwind: "$to"
    },
    {
        $group: {
            _id: {
                from: "$_id.from",
                to: "$to"
            },
            messagesNumber: {
                $sum: 1
            }
        }
    },
    {
        $sort: {
            messagesNumber: -1
        }
    },
    {
        $project: {
            _id:0,
            from: "$_id.from",
            to: "$_id.to",
            messagesNumber: "$messagesNumber"
        }
    },
    {
        $limit: 1
    }
])
</code></pre>
<pre><code>
{ "from" : "susan.mara@enron.com", "to" : "jeff.dasovich@enron.com", "messagesNumber" : 750 }
</code></pre>
