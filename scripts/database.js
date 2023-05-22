/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */

/* 
    id - int
    name - string
    food - string
    size - int
    rarity - string
    color - string

*/
const database = {
    fish: [
        {
            id: 1,
            name: "Bart",
            food: "crustaceans",
            size: 3,
            rarity: "common",
            color: "yellow"
        },
        {
            id: 2,
            name: "Geoff",
            food: "plankton",
            size: 1,
            rarity: "very rare",
            color: "green"
        },
        {
            id: 3,
            name: "Timothy",
            food: "algae",
            size: 3,
            rarity: "rare",
            color: "blue"
        },
        {
            id: 4,
            name: "Moe",
            food: "hopes",
            size: 2,
            rarity: "somewhat rare",
            color: "blue"
        },
        {
            id: 5,
            name: "Clinton",
            food: "dreams",
            size: 4,
            rarity: "very rare",
            color: "black"
        },
        {
            id: 6,
            name: "Spartame",
            food: "algae",
            size: 2,
            rarity: "rare",
            color: "green"
        },
        {
            id: 7,
            name: "Artax",
            food: "crustaceans",
            size: 1,
            rarity: "common",
            color: "yellow"
        },
        {
            id: 8,
            name: "Tyrone",
            food: "algae",
            size: 3,
            rarity: "common",
            color: "red"
        },
        {
            id: 9,
            name: "Michael",
            food: "plankton",
            size: 3,
            rarity: "somewhat rare",
            color: "yellow"
        },
    ]
}

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}