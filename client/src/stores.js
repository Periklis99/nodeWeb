import { writable } from "svelte/store";

export let user = writable(null);

export const products = [
    {
        name: "Cactus",
        description: "Beautiful,less water, good vibes",
        price: 1000,
        imageUrl:"https://desenio.dk/bilder/artiklar/zoom/8386_2.jpg?imgwidth=435&qt=Kaktur%20plakat"
    },
    {
        name: "Roses",
        description: "Beautiful,more water,smell",
        price: 2500,
        imageUrl:"https://upload.wikimedia.org/wikipedia/commons/6/64/Garden_roses_%28yellow-red%29.jpg"
    },
    {
        name: "Blue roses",
        description: "Beautiful,more water,smell. We like roses!",
        price: 4000,
        imageUrl:"https://res.cloudinary.com/interflora/f_auto,q_auto,t_blogimage/blogs/blue%20rose1569237015449.jpg"
    },
]