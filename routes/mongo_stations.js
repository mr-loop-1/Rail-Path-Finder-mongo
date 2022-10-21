const client = require('../database');

module.exports = async function(coll) {
    const arr = await client.db('city').collection(coll).find().toArray();

    const stations = arr.map(station => {
        return String(station.Name)
    });
    // for(var i=0; i<arr.length; i++) {
    //     val = String(arr[i].Name)
	// 	a.push(val);
    // }

    return stations;
}