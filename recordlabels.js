let ChattenRecords = []
let JumpStopRecords = []
let PolarRecords = []

// Sorts through the artists and assigns them to the appropriate record label
const signArtists = (artistArray) => {
    
    for (const artist of artistArray) {

        switch (artist.genre) {
            
            case "Country":
            case "Bluegrass":
                ChattenRecords.push(artist)
                break
            
            case "Funk":
            case "Rap":
                JumpStopRecords.push(artist)
                break
            
            case "Pop":
                PolarRecords.push(artist)
                break
        }
    }

}