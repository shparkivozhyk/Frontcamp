# Aggregating Airlines Collection 

## 1.How manyrecordsdoes each airline class have? Use $projectto show result as { class: "Z", total: 999}

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
