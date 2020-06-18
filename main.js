import createFunkArtist from "./funk.js"
import createRapArtist from "./rap.js"
import createBluegrassArtist from "./bluegrass.js"
import createCountryArtist from "./country.js"
import createPopArtist from "./pop.js"

let allArtists = []

// Create artists by genre
allArtists.push(createCountryArtist("Bruce Atikins", "Country", 23))
allArtists.push(createPopArtist("Jensen Brown", "Pop", 20))
allArtists.push(createFunkArtist("Dre Funkz", "Funk", 25))
allArtists.push(createRapArtist("Dusta Grimes", "Rap", 21))
allArtists.push(createBluegrassArtist("Bartholomew Danielson", "Bluegrass", 23))
allArtists.push(createCountryArtist("Avilee Dallas", "Country", 19))
allArtists.push(createPopArtist("Austin Kinkaid", "Pop", 22))
allArtists.push(createRapArtist("Loyoncé Branis", "Rap", 27))

// Assign artists to correct label roster
signArtists(allArtists)

// Output final rosters to console
console.log("Jump Stop Records roster:")
for (const artist of JumpStopRecords) {
    console.log(`Name: ${artist.name}
    Genre: ${artist.genre}
    Age: ${artist.age}`)
}

console.log("Chatten Records roster:")
for (const artist of ChattenRecords) {
    console.log(`Name: ${artist.name}
    Genre: ${artist.genre}
    Age: ${artist.age}`)
}

console.log("Polar Records roster:")
for (const artist of PolarRecords) {
    console.log(`Name: ${artist.name}
    Genre: ${artist.genre}
    Age: ${artist.age}`)
}

