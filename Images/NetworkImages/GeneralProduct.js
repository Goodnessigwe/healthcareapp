   const PRODUCTS = [
    {id: 1,
        name:'Cabbage',
        price:655, 
        imageUrl: 'https://media.istockphoto.com/id/1163232979/photo/fresh-cabbage-sold-in-the-market-vegetable-natural-background.jpg?s=612x612&w=0&k=20&c=fWzdydlCX0YlII5P-qGIYL4iIGpEKXsv5Vw6bKGiwuU=',
        description: ' Cabbage Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {id:2,
     name:'Banana',
     price:500,
    imageUrl:'https://media.istockphoto.com/id/1312267010/photo/background-of-many-banana-pieces-overhead-view-studio-food-photography.jpg?s=612x612&w=0&k=20&c=URFsGGi8o_q6o0Ou7A_aEUez5UFSvqWpGww947goOFY=',
    description:' Banana Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {id:3,
     name:'Strawberry',
     price:1500,
     imageUrl:'https://images.pexels.com/photos/2820144/pexels-photo-2820144.jpeg?auto=compress&cs=tinysrgb&w=600',
     description:' Strawberry Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

    },
    {id:4,
    name:'Blackberry',
    price:1555,
    imageUrl:'https://media.istockphoto.com/id/1176436320/photo/blackberries-with-leaves-on-wooden-rustic-table.jpg?s=612x612&w=0&k=20&c=62wEekZAYYq8ODLSFE3pQaUm8dHecvfgb7eHeilmAvo=',
    description:' blackberry Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {id:5,
     name:'Raspberry',
     price:1888,
     imageUrl:'https://images.pexels.com/photos/1152351/pexels-photo-1152351.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
     description:' Raspberry Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {id:6,
     name:'Avocado',
     price:669,
     imageUrl:'https://media.istockphoto.com/id/972049846/photo/fresh-avocados.jpg?s=612x612&w=0&k=20&c=Gsc7o23YiVIkOMstXjVV0PaB3DbmQ69jaCMkBmG1FVI=',
     description:' Avocado Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {id:7,
     name:'Broccoli',
     price:1200,
     imageUrl:'https://media.istockphoto.com/id/1335872106/photo/broccoli-floret.jpg?s=612x612&w=0&k=20&c=4-e9JDvlhAL_6mOcEaozEeU5vBFgAmLC_wQr4o5Vu7Q=',
     description:' Broccoli Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {id:8,
     name:'Collardgreens',
     price:999,
     imageUrl:'https://media.istockphoto.com/id/623524082/photo/collard-greens-and-lettuce-at-the-farmers-market.jpg?s=612x612&w=0&k=20&c=A7sH77S37_c6AGfTGcg28dsjQ1OR_gnJYW96HJfxcaE=',
     description:' Collardgreens Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',

    },
    {id:9,
     name:'Orange',
     price:600,
     imageUrl:'https://media.istockphoto.com/id/639543352/photo/orange-stack.jpg?s=612x612&w=0&k=20&c=9n9iOorr8K_GLyi9Jzql-e_8k-EWZtvKgIdG84BAnQ4=',
     description:' Orange Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {id:10,
     name:'Tomato',
     price:800,
     imageUrl:'https://media.istockphoto.com/id/1369929551/photo/organic-tomatoes-sale-on-market-stall.jpg?s=612x612&w=0&k=20&c=tiW7iNuqCnuN0HoE4yDqkUbt17j8f8kEUKcwvYvcvbQ=',
     description:'Tomato Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {id:11,
     name:'Lemon',
     price:1200,
     imageUrl:'https://media.istockphoto.com/id/155373600/photo/lemons-at-market.jpg?s=612x612&w=0&k=20&c=4B7VtkvSkrtm6IBgWzWnbzZGbFOpRW5D2eY_UlBXVVw=',
     description:' Lemon Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {id:12,
     name:'Blueberry',
     price:1800,
     imageUrl:'https://media.istockphoto.com/id/182468247/photo/full-frame-close-up-background-blueberries-large-group-of-objects.jpg?s=612x612&w=0&k=20&c=bBfsyO--osuFHivwsWI9dIqZrMGP8JNnEhj80hDIRoQ=',
     description:' Blueberry Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {id:13,
     name:'Carrot',
     price:999,
     imageUrl:'https://media.istockphoto.com/id/1428763316/photo/close-up-of-textured-image-of-carrots-in-department-store-shelves-or-supermarket.jpg?s=612x612&w=0&k=20&c=ldvCvk8aaIiO8k1I2tvyj5uYVCLXs12tFTdkaG_b86k=',
     description:' Carrot Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {id:14,
     name:'Grapefruit',
     price:1800,
     imageUrl:'https://media.istockphoto.com/id/482744824/photo/grapefruit.webp?b=1&s=170667a&w=0&k=20&c=p1g4d2OkF-C9ZUCfdyC8ufKLNZ4cwe16Ybd-84ONS1o=',
     description:'Grapefruit Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {id:15,
     name:'Apple',
     price:1500,
     imageUrl:'https://media.istockphoto.com/id/184927564/photo/close-up-of-red-royal-gala-apples.webp?b=1&s=170667a&w=0&k=20&c=_QmEanU2kADH4gXFQR2QK8wiuaBahIO350h-VdPkmDk=',
     description:'Apple Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {id:16,
     name:'Peach',
     price:1000,
     imageUrl:'https://media.istockphoto.com/id/185095969/photo/fresh-peaches.webp?b=1&s=170667a&w=0&k=20&c=mitCyPKNYgOeM_qnrcLOVCmcYdbGujLd79L4sHfGOWA=',
     description:'Peach Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {id: 17,
     name:'Pineapple',
     price:1400, 
     imageUrl: 'https://media.istockphoto.com/id/471410015/photo/pineapple.webp?b=1&s=170667a&w=0&k=20&c=0sWvcZu5ysGtOI30NGR3yDg9n4yCkVaM-xY_1m7-0-c=',
     description: ' Pineapple Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {id: 18,
        name:'Guava',
        price:600, 
        imageUrl: 'https://media.istockphoto.com/id/1421184674/photo/red-guava-fruit-with-leaf-on-blur-garden-background-fresh-pink-guava-fruit-on-wooden-basket.webp?b=1&s=170667a&w=0&k=20&c=0fmvGwj5MyXxRZAaGJZ7g6yJnNinyYue0w_Odyv1J9w=',
        description: 'Guava Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },


]

export function getProducts(){
    return PRODUCTS;
}

export function getProduct(id){
    return PRODUCTS.find((product) => product.id==id);
}



