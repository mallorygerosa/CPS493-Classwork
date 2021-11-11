const { MongoClient } = require('mongodb');

async function main() {
    const uri = "mongodb+srv://mallorygerosa:Slateblue3!@cluster0.ttdxr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

    const client = new MongoClient(uri);

    try {
        await client.connect();

        await findOneListingByName(client, "Nice");

    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }

}

main().catch(console.error);

async function findListingWithMinimumBedroomsBathroomsAndMostRecentReviews(client, {
    minimumNumberOfBedroms = 0,
    minimumNumberofBathrooms = 0,
    maximumNumberOfResults = Number.MAX_SAFE_INTEGER
} = {} ) {
    // return cursor
    const cursor = await client.db("sample_airbnb").collection("listingsAndReviews").find({
        bedrooms: { $gte: minimumNuberOfBedrooms },
        bathrooms: { $gte: minimumNuberOfBathrooms }

    }).sort({ last_review: -1 })
      .limit(maximumNumberOfResults);

      const result = await cursor.toArray()
}

// query for one document
async function findOneListingByName(client, nameOfListing) {
    const result = await client.db("sample_airbnb").collection("listingsAndReviews").findOne({name:nameOfListing});

    if(result) {
    console.log(`Found a listing with the name: '${nameOfListing}'`);
    console.log(result);
    } else {
        console.log(`No listings found with the name '${nameOfListing}'`);
    }

}

async function createMultipleListings(client, newListings) {
    const result = await client.db("sample_airbnb").collection("listingsAndReviews").insertMany(newListings);

    console.log(`${result.insertedCount} new listings created with the followings id (s):`);
    console.log(result.insertedIds);
}

// create single doc, slow, using insert one
async function createListing(client, newListing) {
   const result = await client.db("sample_airbnb").collection("listingsAndReviews").insertOne(newListing);
   console.log(`New listing created with the following id: ${result.insertedId}`);
}

async function listDatabases(client) {
    const databaseslist = await client.db().admin().listDatabases();

    console.log("Databases:");
    databaseslist.databases.forEach(db => {
        console.log(`-${db.name}`);
    })
}