import { ICategoryRequest } from "../interfaces/category.interface";
import { IProductRequest } from "../interfaces/product.interfaces";

export const categorySeed: ICategoryRequest[] = [
  {
    name: "Alcoholic Beverages",
  },
  {
    name: "Non-Alcoholic Beverages",
  },
  {
    name: "Beer",
  },
  {
    name: "Whiskey",
  },
  {
    name: "Vodka",
  },
  {
    name: "Rum",
  },
  {
    name: "Sangria",
  },
  {
    name: "Mocktail",
  },
  {
    name: "Tequila",
  },
  {
    name: "Gin",
  },
  {
    name: "Wine",
  },
  {
    name: "Cider",
  },
  {
    name: "Cocktail",
  },
  {
    name: "Liqueur",
  },
  {
    name: "Sake",
  },
];

export const productsSeed: IProductRequest[] = [
  {
    name: "Captain's Grog Rum",
    price: "19.99",
    amount: "750ml",
    apresentation:
      "Set sail with Captain's Grog Rum, a rich and robust rum that will transport you to the golden age of piracy. Crafted with the finest Caribbean spices and a touch of pirate swagger, this rum will ignite your adventurous spirit. Take a sip, feel the warmth of the Caribbean sun, and let the Captain's Grog guide you on a journey of discovery.",
    active: true,
    category: "Rum",
    characteristic: [
      {
        text: "Rich and robust",
      },
      {
        text: "Crafted with the finest Caribbean spices and a touch of pirate swagger",
      },
      {
        text: "A rum that embodies the spirit of the golden age of piracy",
      },
    ],
    additional_info: [
      {
        text: "Best enjoyed in a glass with a splash of adventure",
      },
      {
        text: "The rum that fuels the Captain's voyages",
      },
      {
        text: "Raise your glass and toast to the thrill of the high seas",
      },
    ],
    img_url: "https://imgur.com/KMPFjwn.png",
  },
  {
    name: "Buccaneer's Bay Gin",
    price: "16.99",
    amount: "700ml",
    apresentation:
      "Embark on a gin-filled adventure with Buccaneer's Bay Gin, a spirit as bold and daring as the pirates themselves. Crafted with a blend of exotic botanicals and a splash of pirate mischief, this gin will take you on a journey through flavors that are both familiar and mysterious. Let each sip transport you to a hidden bay where treasure awaits.",
    active: true,
    category: "Gin",
    characteristic: [
      {
        text: "Bold and daring",
      },
      {
        text: "Crafted with a blend of exotic botanicals and a touch of pirate mischief",
      },
      {
        text: "A gin that embodies the spirit of the buccaneers",
      },
    ],
    additional_info: [
      {
        text: "Best enjoyed in a glass with a splash of intrigue",
      },
      {
        text: "The gin that fuels adventurous spirits",
      },
      {
        text: "Raise your glass and toast to the untamed freedom of the open sea",
      },
    ],
    img_url: "https://imgur.com/JXvMF7Z.png",
  },
  {
    name: "Pirate's Punch Cocktail",
    price: "9.99",
    amount: "200ml",
    apresentation:
      "Avast, me hearties! Dive into the refreshing depths of Pirate's Punch Cocktail, a tantalizing blend of tropical flavors and a hint of pirate mischief. This vibrant and fruity concoction will transport you to a beachside paradise where the waves crash and the party never ends. Take a sip, let the rhythm of the ocean guide your dance, and join the crew of merry buccaneers.",
    active: true,
    category: "Cocktail",
    characteristic: [
      {
        text: "Refreshing and tropical",
      },
      {
        text: "Crafted with a blend of vibrant fruits and a touch of pirate mischief",
      },
      {
        text: "A cocktail that embodies the spirit of beachside revelry",
      },
    ],
    additional_info: [
      {
        text: "Best enjoyed in a tiki glass with a sprinkle of adventure",
      },
      {
        text: "The cocktail that fuels the pirate's party",
      },
      {
        text: "Raise your glass and toast to the carefree life of a swashbuckler",
      },
    ],
    img_url: "https://imgur.com/lhjZ2vz.png",
  },
  {
    name: "Jolly Roger's Lager",
    price: "12.99",
    amount: "500ml",
    apresentation:
      "Hoist the flag and set sail with Jolly Roger's Lager, a crisp and refreshing brew that will make you feel like a true pirate of the beer world. Crafted with the finest hops and a touch of pirate mischief, this lager will quench your thirst and fuel your adventures. Take a swig, taste the freedom of the open sea, and join the crew of the Jolly Roger.",
    active: true,
    category: "Beer",
    characteristic: [
      {
        text: "Crisp and refreshing",
      },
      {
        text: "Crafted with the finest hops and a touch of pirate mischief",
      },
      {
        text: "A lager that embodies the spirit of the Jolly Roger",
      },
    ],
    additional_info: [
      {
        text: "Best enjoyed in a frosty mug with a splash of camaraderie",
      },
      {
        text: "The beer that fuels the pirate's thirst",
      },
      {
        text: "Raise your mug and toast to the thrill of the high seas",
      },
    ],
    img_url: "https://imgur.com/CYN0cB2.png",
  },
  {
    name: "Mermaid's Melody Mocktail",
    price: "8.99",
    amount: "300ml",
    apresentation:
      "Dive into a world of enchantment with Mermaid's Melody Mocktail, a captivating blend of fruity flavors and a sprinkle of mermaid magic. This alcohol-free delight will transport you to an underwater paradise where mermaids sing and laughter echoes through the waves. Take a sip, let the melody of the sea serenade your senses, and embrace the joy of being a land-dwelling mermaid.",
    active: true,
    category: "Mocktail",
    characteristic: [
      {
        text: "Captivating and fruity",
      },
      {
        text: "Crafted with a blend of flavors and a sprinkle of mermaid magic",
      },
      {
        text: "A mocktail that brings the enchantment of the sea to life",
      },
    ],
    additional_info: [
      {
        text: "Best enjoyed in a fancy glass with a sprinkle of wonder",
      },
      {
        text: "The mocktail that fuels the mermaid's joy",
      },
      {
        text: "Raise your glass and toast to the magic within",
      },
    ],
    img_url: "https://imgur.com/m60pLAN.png",
  },
  {
    name: "Kraken's Fury Whiskey",
    price: "24.99",
    amount: "750ml",
    apresentation:
      "Unleash the fury of the Kraken with Kraken's Fury Whiskey, a bold and intense spirit that commands respect. Crafted with the fire of the Kraken's breath and a touch of pirate mischief, this whiskey will awaken the daring spirit within you. Take a sip, feel the power of the Kraken surging through your veins, and conquer the challenges that lie ahead.",
    active: true,
    category: "Whiskey",
    characteristic: [
      {
        text: "Bold and intense",
      },
      {
        text: "Crafted with the fire of the Kraken's breath and a touch of pirate mischief",
      },
      {
        text: "A whiskey that embodies the power of the mythical sea creature",
      },
    ],
    additional_info: [
      {
        text: "Best enjoyed in a snifter glass with a dash of fearless determination",
      },
      {
        text: "The whiskey that fuels the Kraken's conquests",
      },
      {
        text: "Raise your glass and toast to the indomitable spirit of the sea",
      },
    ],
    img_url: "https://imgur.com/P5simgu.png",
  },
  {
    name: "Treasure Island Tequila",
    price: "18.99",
    amount: "700ml",
    apresentation:
      "Embark on a tequila-fueled adventure with Treasure Island Tequila, a spirit that will transport you to a land of hidden treasures and fiery sunsets. Crafted with the finest agave and a touch of pirate mischief, this tequila will ignite your sense of adventure. Take a sip, taste the golden sands of the island, and let the tequila guide you to untold riches.",
    active: true,
    category: "Tequila",
    characteristic: [
      {
        text: "Fiery and adventurous",
      },
      {
        text: "Crafted with the finest agave and a touch of pirate mischief",
      },
      {
        text: "A tequila that embodies the spirit of hidden treasures",
      },
    ],
    additional_info: [
      {
        text: "Best enjoyed in a shot glass with a sprinkle of daring",
      },
      {
        text: "The tequila that fuels the search for buried gold",
      },
      {
        text: "Raise your glass and toast to the thrill of the hunt",
      },
    ],
    img_url: "https://imgur.com/PVL9q1C.png",
  },
  {
    name: "Siren's Song Vodka",
    price: "15.99",
    amount: "700ml",
    apresentation:
      "Get lured by the mesmerizing Siren's Song Vodka, a spirit that combines smoothness with a touch of enchantment. Crafted with the purest grains and a sprinkle of mermaid magic, this vodka will transport you to a world where the waves dance and the moonlight shimmers. Take a sip, feel the seductive melody in your veins, and succumb to the allure of the sea.",
    active: true,
    category: "Vodka",
    characteristic: [
      {
        text: "Smooth and mesmerizing",
      },
      {
        text: "Crafted with the purest grains and a sprinkle of mermaid magic",
      },
      {
        text: "A vodka that embodies the allure of the Siren's Song",
      },
    ],
    additional_info: [
      {
        text: "Best enjoyed in a chilled glass with a dash of mystery",
      },
      {
        text: "The vodka that fuels the mermaid's seduction",
      },
      {
        text: "Raise your glass and toast to the intoxicating power of the sea",
      },
    ],
    img_url: "https://imgur.com/NMJ9z6g.png",
  },
  {
    name: "Buccaneer's Brew Beer",
    price: "11.99",
    amount: "500ml",
    apresentation:
      "Join the merry crew of buccaneers and raise a pint of Buccaneer's Brew Beer, a flavorful ale that celebrates the wild spirit of the high seas. Crafted with a blend of malted grains and a touch of pirate mischief, this beer will quench your thirst and ignite your sense of adventure. Take a swig, feel the camaraderie of the crew, and let the Buccaneer's Brew be your guide to unforgettable tales.",
    active: true,
    category: "Beer",
    characteristic: [
      {
        text: "Flavorful and wild",
      },
      {
        text: "Crafted with a blend of malted grains and a touch of pirate mischief",
      },
      {
        text: "A beer that embodies the spirit of buccaneering camaraderie",
      },
    ],
    additional_info: [
      {
        text: "Best enjoyed in a tankard with a splash of adventure",
      },
      {
        text: "The beer that fuels the merry exploits of the buccaneers",
      },
      {
        text: "Raise your mug and toast to the bond of the swashbucklers",
      },
    ],
    img_url: "https://imgur.com/8sYlJHC.png",
  },
  {
    name: "Shipwrecked Sangria",
    price: "14.99",
    amount: "750ml",
    apresentation:
      "Get swept away by the flavors of Shipwrecked Sangria, a delightful blend of wine, fruits, and a touch of pirate mischief. Crafted to evoke the feeling of a sun-soaked island paradise, this sangria will transport you to a place where time stands still and worries fade away. Take a sip, feel the warmth of the sand beneath your feet, and let the Shipwrecked Sangria be your ticket to bliss.",
    active: true,
    category: "Sangria",
    characteristic: [
      {
        text: "Delightful and sun-soaked",
      },
      {
        text: "Crafted with a blend of wine, fruits, and a touch of pirate mischief",
      },
      {
        text: "A sangria that brings the spirit of the islands to life",
      },
    ],
    additional_info: [
      {
        text: "Best enjoyed in a wine glass with a splash of tropical paradise",
      },
      {
        text: "The sangria that fuels the dreams of island adventurers",
      },
      {
        text: "Raise your glass and toast to the serenity of the beach",
      },
    ],
    img_url: "https://imgur.com/dgbvXmn.png",
  },
  {
    name: "Blackbeard's Dark Rum",
    price: "19.99",
    amount: "750ml",
    apresentation:
      "Unleash your inner pirate with Blackbeard's Dark Rum, a rich and bold spirit that embodies the essence of the high seas. Crafted with aged molasses and a touch of pirate mischief, this rum will transport you to a world of treasure-filled adventures. Take a sip, feel the warmth of the Caribbean sun, and let Blackbeard's Dark Rum be your companion on your journey to conquer the seven seas.",
    active: true,
    category: "Rum",
    characteristic: [
      {
        text: "Rich and bold",
      },
      {
        text: "Crafted with aged molasses and a touch of pirate mischief",
      },
      {
        text: "A rum that embodies the spirit of the legendary Blackbeard",
      },
    ],
    additional_info: [
      {
        text: "Best enjoyed in a snifter glass with a sprinkle of adventure",
      },
      {
        text: "The rum that fuels the pirate's tales of plunder",
      },
      {
        text: "Raise your glass and toast to the untamed spirit of the sea",
      },
    ],
    img_url: "https://imgur.com/wOY7XrK.png",
  },
  {
    name: "Captain's Cut Gin",
    price: "16.99",
    amount: "700ml",
    apresentation:
      "Set sail on a gin-soaked adventure with Captain's Cut Gin, a smooth and aromatic spirit that captures the essence of the pirate's life. Crafted with handpicked botanicals and a touch of pirate mischief, this gin will awaken your senses and transport you to a world of hidden coves and secret rendezvous. Take a sip, feel the sea breeze on your face, and let Captain's Cut Gin be your compass on the journey to extraordinary flavors.",
    active: true,
    category: "Gin",
    characteristic: [
      {
        text: "Smooth and aromatic",
      },
      {
        text: "Crafted with handpicked botanicals and a touch of pirate mischief",
      },
      {
        text: "A gin that embodies the spirit of the daring captain",
      },
    ],
    additional_info: [
      {
        text: "Best enjoyed in a classic cocktail glass with a dash of audacity",
      },
      {
        text: "The gin that fuels the captain's quests for new horizons",
      },
      {
        text: "Raise your glass and toast to the thrill of the unknown",
      },
    ],
    img_url: "https://imgur.com/llaAQ6s.png",
  },
  {
    name: "Treasure Trove Wine",
    price: "24.99",
    amount: "750ml",
    apresentation:
      "Discover a hidden gem with Treasure Trove Wine, a bottle filled with the finest grapes and a touch of pirate mischief. Crafted to capture the essence of a sun-drenched vineyard, this wine will transport you to a world of indulgence and pleasure. Take a sip, savor the velvety flavors, and let Treasure Trove Wine be your guide to a realm of unforgettable taste experiences.",
    active: true,
    category: "Wine",
    characteristic: [
      {
        text: "Indulgent and flavorful",
      },
      {
        text: "Crafted with the finest grapes and a touch of pirate mischief",
      },
      {
        text: "A wine that embodies the spirit of hidden treasures",
      },
    ],
    additional_info: [
      {
        text: "Best enjoyed in a wine glass with a sprinkle of elegance",
      },
      {
        text: "The wine that fuels the dreams of the discerning connoisseur",
      },
      {
        text: "Raise your glass and toast to the pleasure of exquisite taste",
      },
    ],
    img_url: "https://imgur.com/Ohyn9Mg.png",
  },
  {
    name: "Buccaneer's Breeze Cider",
    price: "13.99",
    amount: "500ml",
    apresentation:
      "Sail away on a refreshing journey with Buccaneer's Breeze Cider, a crisp and invigorating blend that captures the spirit of the open sea. Crafted with handpicked apples and a touch of pirate mischief, this cider will quench your thirst and awaken your sense of adventure. Take a sip, feel the wind in your hair, and let the Buccaneer's Breeze be your companion on the quest for refreshment.",
    active: true,
    category: "Cider",
    characteristic: [
      {
        text: "Crisp and invigorating",
      },
      {
        text: "Crafted with handpicked apples and a touch of pirate mischief",
      },
      {
        text: "A cider that embodies the spirit of buccaneering freedom",
      },
    ],
    additional_info: [
      {
        text: "Best enjoyed in a chilled glass with a splash of daring",
      },
      {
        text: "The cider that fuels the merriment of the adventurous souls",
      },
      {
        text: "Raise your glass and toast to the freedom of the high seas",
      },
    ],
    img_url: "https://imgur.com/PmFHcds.png",
  },
  {
    name: "Parrot's Paradise Mocktail",
    price: "9.99",
    amount: "350ml",
    apresentation:
      "Escape to a tropical oasis with Parrot's Paradise Mocktail, a vibrant and refreshing drink that brings the flavors of the Caribbean to life. Crafted with a blend of exotic fruits and a touch of pirate mischief, this mocktail will transport you to a world of sunny beaches and swaying palm trees. Take a sip, feel the rhythm of the steel drums, and let Parrot's Paradise be your ticket to paradise.",
    active: true,
    category: "Mocktail",
    characteristic: [
      {
        text: "Vibrant and refreshing",
      },
      {
        text: "Crafted with a blend of exotic fruits and a touch of pirate mischief",
      },
      {
        text: "A mocktail that embodies the spirit of a tropical getaway",
      },
    ],
    additional_info: [
      {
        text: "Best enjoyed in a tall glass with a splash of joy",
      },
      {
        text: "The mocktail that fuels the dreams of island wanderers",
      },
      {
        text: "Raise your glass and toast to the beauty of paradise",
      },
    ],
    img_url: "https://imgur.com/xV0dNj1.png",
  },
  {
    name: "Kraken's Kiss Liqueur",
    price: "17.99",
    amount: "500ml",
    apresentation:
      "Experience the enchantment of the deep with Kraken's Kiss Liqueur, a seductive and mysterious elixir that will captivate your senses. Crafted with a secret blend of spices and a touch of pirate mischief, this liqueur will transport you to the depths of the ocean where hidden treasures await. Take a sip, feel the tantalizing embrace, and let Kraken's Kiss be your guide on a journey to the unknown.",
    active: true,
    category: "Liqueur",
    characteristic: [
      {
        text: "Seductive and mysterious",
      },
      {
        text: "Crafted with a secret blend of spices and a touch of pirate mischief",
      },
      {
        text: "A liqueur that embodies the spirit of the legendary Kraken",
      },
    ],
    additional_info: [
      {
        text: "Best enjoyed in a snifter glass with a sprinkle of enchantment",
      },
      {
        text: "The liqueur that fuels the tales of the deep sea explorers",
      },
      {
        text: "Raise your glass and toast to the allure of the unknown",
      },
    ],
    img_url: "https://imgur.com/G4VE8lX.png",
  },
  {
    name: "Ghostly Tequila",
    price: "21.99",
    amount: "700ml",
    apresentation:
      "Embrace the supernatural with Ghostly Tequila, a hauntingly smooth spirit that will send shivers down your spine. Crafted with blue agave and a touch of pirate mischief, this tequila will transport you to a realm where apparitions roam and secrets are whispered in the night. Take a sip, feel the chill in the air, and let Ghostly Tequila be your guide through the mysteries of the afterlife.",
    active: true,
    category: "Tequila",
    characteristic: [
      {
        text: "Hauntingly smooth",
      },
      {
        text: "Crafted with blue agave and a touch of pirate mischief",
      },
      {
        text: "A tequila that embodies the spirit of otherworldly encounters",
      },
    ],
    additional_info: [
      {
        text: "Best enjoyed in a shot glass with a dash of eerie vibes",
      },
      {
        text: "The tequila that fuels the tales of the ghost hunters",
      },
      {
        text: "Raise your glass and toast to the mysteries that lie beyond",
      },
    ],
    img_url: "https://imgur.com/VJzWV7S.png",
  },
  {
    name: "Jolly Roger Vodka",
    price: "15.99",
    amount: "700ml",
    apresentation:
      "Hoist the flag of celebration with Jolly Roger Vodka, a smooth and fearless spirit that embodies the spirit of the pirate's revelry. Crafted with the finest grains and a touch of pirate mischief, this vodka will ignite your senses and fuel your wild side. Take a sip, feel the rush of adrenaline, and let Jolly Roger Vodka be your companion on the journey to unforgettable nights of merriment.",
    active: true,
    category: "Vodka",
    characteristic: [
      {
        text: "Smooth and fearless",
      },
      {
        text: "Crafted with the finest grains and a touch of pirate mischief",
      },
      {
        text: "A vodka that embodies the spirit of unbridled revelry",
      },
    ],
    additional_info: [
      {
        text: "Best enjoyed in a classic cocktail glass with a sprinkle of mischief",
      },
      {
        text: "The vodka that fuels the pirate's chants and laughter",
      },
      {
        text: "Raise your glass and toast to the spirit of uninhibited fun",
      },
    ],
    img_url: "https://imgur.com/qg99scH.png",
  },
  {
    name: "Kraken's Curse Beer",
    price: "11.99",
    amount: "330ml",
    apresentation:
      "Beware the Kraken's Curse Beer, a bewitching brew that will ensnare your taste buds with its dark and mysterious flavors. Crafted with roasted malts and a touch of pirate mischief, this beer will transport you to the depths of the ocean where legends come alive. Take a sip, feel the power of the sea, and let Kraken's Curse Beer be your guide on a voyage through the unknown.",
    active: true,
    category: "Beer",
    characteristic: [
      {
        text: "Bewitching and mysterious",
      },
      {
        text: "Crafted with roasted malts and a touch of pirate mischief",
      },
      {
        text: "A beer that embodies the spirit of the legendary Kraken",
      },
    ],
    additional_info: [
      {
        text: "Best enjoyed in a chilled mug with a sprinkle of darkness",
      },
      {
        text: "The beer that fuels the tales of the sea-faring adventurers",
      },
      {
        text: "Raise your glass and toast to the legends that lie beneath",
      },
    ],
    img_url: "https://imgur.com/ld0lPL1.png",
  },
  {
    name: "Corsair's Cutlass Sake",
    price: "14.99",
    amount: "500ml",
    apresentation:
      "Unleash your inner samurai with Corsair's Cutlass Sake, a bold and spirited drink that merges the traditions of the Far East with the audacity of the pirate's life. Crafted with premium rice and a touch of pirate mischief, this sake will transport you to a world where honor and adventure converge. Take a sip, feel the harmony in every drop, and let Corsair's Cutlass Sake be your companion on the quest for cultural fusion.",
    active: true,
    category: "Sake",
    characteristic: [
      {
        text: "Bold and spirited",
      },
      {
        text: "Crafted with premium rice and a touch of pirate mischief",
      },
      {
        text: "A sake that embodies the spirit of fearless exploration",
      },
    ],
    additional_info: [
      {
        text: "Best enjoyed in a traditional sake cup with a dash of daring",
      },
      {
        text: "The sake that fuels the dreams of the cross-cultural adventurers",
      },
      {
        text: "Raise your glass and toast to the unity of traditions",
      },
    ],
    img_url: "https://imgur.com/SHA9XLw.png",
  },
  {
    name: "Blackbeard's Brew Rum",
    price: "19.99",
    amount: "750ml",
    apresentation:
      "Set sail on a voyage of flavor with Blackbeard's Brew Rum, a rich and smooth blend that captures the essence of the pirate's life. Crafted with aged Caribbean rum and a touch of pirate mischief, this rum will transport you to a world of hidden treasures and untamed adventures. Take a sip, feel the warmth in your veins, and let Blackbeard's Brew be your companion on the quest for rum-soaked glory.",
    active: true,
    category: "Rum",
    characteristic: [
      {
        text: "Rich and smooth",
      },
      {
        text: "Crafted with aged Caribbean rum and a touch of pirate mischief",
      },
      {
        text: "A rum that embodies the spirit of the legendary Blackbeard",
      },
    ],
    additional_info: [
      {
        text: "Best enjoyed in a tumbler glass with a sprinkle of adventure",
      },
      {
        text: "The rum that fuels the tales of the high seas",
      },
      {
        text: "Raise your glass and toast to the swashbuckling spirit",
      },
    ],
    img_url: "https://imgur.com/yMAy1NG.png",
  },
  {
    name: "Captain's Cut Whiskey",
    price: "24.99",
    amount: "700ml",
    apresentation:
      "Commandeer your taste buds with Captain's Cut Whiskey, a bold and robust spirit that embodies the essence of leadership on the high seas. Crafted with the finest grains and a touch of pirate mischief, this whiskey will ignite your senses and awaken the spirit of adventure within. Take a sip, feel the fire in your chest, and let Captain's Cut be your companion on the journey to uncharted territories.",
    active: true,
    category: "Whiskey",
    characteristic: [
      {
        text: "Bold and robust",
      },
      {
        text: "Crafted with the finest grains and a touch of pirate mischief",
      },
      {
        text: "A whiskey that embodies the spirit of courageous captains",
      },
    ],
    additional_info: [
      {
        text: "Best enjoyed in a snifter glass with a sprinkle of authority",
      },
      {
        text: "The whiskey that fuels the legends of the fearless leaders",
      },
      {
        text: "Raise your glass and toast to the strength of character",
      },
    ],
    img_url: "https://imgur.com/3D8fzhz.png",
  },
  {
    name: "Seafarer's Sangria",
    price: "12.99",
    amount: "750ml",
    apresentation:
      "Embark on a voyage of flavor with Seafarer's Sangria, a vibrant and fruity blend that captures the essence of the open sea. Crafted with a medley of fresh fruits and a touch of pirate mischief, this sangria will transport you to sun-kissed shores and lively celebrations. Take a sip, feel the joy in every drop, and let Seafarer's Sangria be your companion on the quest for festive bliss.",
    active: true,
    category: "Sangria",
    characteristic: [
      {
        text: "Vibrant and fruity",
      },
      {
        text: "Crafted with a medley of fresh fruits and a touch of pirate mischief",
      },
      {
        text: "A sangria that embodies the spirit of carefree adventures",
      },
    ],
    additional_info: [
      {
        text: "Best enjoyed in a wine glass with a splash of spontaneity",
      },
      {
        text: "The sangria that fuels the tales of the party pirates",
      },
      {
        text: "Raise your glass and toast to the spirit of joyful revelry",
      },
    ],
    img_url: "https://imgur.com/rglBD4G.png",
  },
  {
    name: "Swashbuckler's Mocktail",
    price: "9.99",
    amount: "500ml",
    apresentation:
      "Unleash your inner pirate without the rum with Swashbuckler's Mocktail, a refreshing and flavorful concoction that captures the spirit of the high seas. Crafted with exotic fruits and a touch of pirate mischief, this mocktail will transport you to tropical paradises and lively pirate taverns. Take a sip, feel the cool breeze on your face, and let Swashbuckler's Mocktail be your companion on the quest for a non-alcoholic adventure.",
    active: true,
    category: "Mocktail",
    characteristic: [
      {
        text: "Refreshing and flavorful",
      },
      {
        text: "Crafted with exotic fruits and a touch of pirate mischief",
      },
      {
        text: "A mocktail that embodies the spirit of carefree pirates",
      },
    ],
    additional_info: [
      {
        text: "Best enjoyed in a highball glass with a sprinkle of playfulness",
      },
      {
        text: "The mocktail that fuels the tales of the teetotaling pirates",
      },
      {
        text: "Raise your glass and toast to the spirit of adventure",
      },
    ],
    img_url: "https://imgur.com/CvYAygV.png",
  },
  {
    name: "Treasure Hunter Gin",
    price: "17.99",
    amount: "700ml",
    apresentation:
      "Embark on a quest for the perfect gin with Treasure Hunter Gin, a botanical elixir that captures the essence of exploration and discovery. Crafted with hand-picked botanicals and a touch of pirate mischief, this gin will transport you to lush jungles and hidden coves. Take a sip, feel the flavors unfold, and let Treasure Hunter Gin be your guide on the journey to gin-soaked treasures.",
    active: true,
    category: "Gin",
    characteristic: [
      {
        text: "Botanical elixir",
      },
      {
        text: "Crafted with hand-picked botanicals and a touch of pirate mischief",
      },
      {
        text: "A gin that embodies the spirit of intrepid treasure hunters",
      },
    ],
    additional_info: [
      {
        text: "Best enjoyed in a balloon glass with a sprinkle of adventure",
      },
      {
        text: "The gin that fuels the tales of the gin connoisseurs",
      },
      {
        text: "Raise your glass and toast to the thrill of discovery",
      },
    ],
    img_url: "https://imgur.com/ianFRDx.png",
  },
  {
    name: "Buccaneer's Wine",
    price: "13.99",
    amount: "750ml",
    apresentation:
      "Savor the flavors of the high seas with Buccaneer's Wine, a velvety and elegant libation that captures the essence of refinement and adventure. Crafted with the finest grapes and a touch of pirate mischief, this wine will transport you to vineyard-covered hills and opulent pirate feasts. Take a sip, feel the complexities unfold, and let Buccaneer's Wine be your companion on the journey to oenological delight.",
    active: true,
    category: "Wine",
    characteristic: [
      {
        text: "Velvety and elegant",
      },
      {
        text: "Crafted with the finest grapes and a touch of pirate mischief",
      },
      {
        text: "A wine that embodies the spirit of refined pirates",
      },
    ],
    additional_info: [
      {
        text: "Best enjoyed in a stemmed glass with a sprinkle of sophistication",
      },
      {
        text: "The wine that fuels the tales of the wine enthusiasts",
      },
      {
        text: "Raise your glass and toast to the art of winemaking",
      },
    ],
    img_url: "https://imgur.com/6Hxdga4.png",
  },
  {
    name: "Seafoam Cider",
    price: "10.99",
    amount: "500ml",
    apresentation:
      "Experience the crispness of the sea with Seafoam Cider, a refreshing and effervescent drink that captures the essence of coastal delights. Crafted with hand-picked apples and a touch of pirate mischief, this cider will transport you to sun-drenched orchards and lively taverns. Take a sip, feel the ocean breeze on your skin, and let Seafoam Cider be your companion on the quest for apple-infused bliss.",
    active: true,
    category: "Cider",
    characteristic: [
      {
        text: "Refreshing and effervescent",
      },
      {
        text: "Crafted with hand-picked apples and a touch of pirate mischief",
      },
      {
        text: "A cider that embodies the spirit of coastal adventurers",
      },
    ],
    additional_info: [
      {
        text: "Best enjoyed in a pint glass with a sprinkle of seaside joy",
      },
      {
        text: "The cider that fuels the tales of the cider aficionados",
      },
      {
        text: "Raise your glass and toast to the bounties of nature",
      },
    ],
    img_url: "https://imgur.com/jzTnxyA.png",
  },
  {
    name: "Pirate's Punch Cocktail",
    price: "11.99",
    amount: "250ml",
    apresentation:
      "Indulge in a taste of the pirate life with Pirate's Punch Cocktail, a tropical and invigorating libation that will transport you to sun-soaked shores and lively pirate haunts. Crafted with a blend of exotic fruits and a touch of pirate mischief, this cocktail will awaken your senses and ignite the spirit of adventure within. Take a sip, feel the vibrant flavors dance on your palate, and let Pirate's Punch be your companion on the quest for cocktail-infused escapades.",
    active: true,
    category: "Cocktail",
    characteristic: [
      {
        text: "Tropical and invigorating",
      },
      {
        text: "Crafted with a blend of exotic fruits and a touch of pirate mischief",
      },
      {
        text: "A cocktail that embodies the spirit of carefree pirates",
      },
    ],
    additional_info: [
      {
        text: "Best enjoyed in a cocktail glass with a splash of pirate revelry",
      },
      {
        text: "The cocktail that fuels the tales of the party pirates",
      },
      {
        text: "Raise your glass and toast to the spirit of tropical adventures",
      },
    ],
    img_url: "https://imgur.com/Iljpit7.png",
  },
  {
    name: "Kraken's Liqueur",
    price: "15.99",
    amount: "500ml",
    apresentation:
      "Unleash the dark depths of flavor with Kraken's Liqueur, an enchanting and mysterious elixir that will captivate your senses. Crafted with secret ingredients and a touch of pirate mischief, this liqueur will transport you to hidden coves and moonlit encounters. Take a sip, feel the velvety texture caress your tongue, and let Kraken's Liqueur be your companion on the journey to indulgent pleasure.",
    active: true,
    category: "Liqueur",
    characteristic: [
      {
        text: "Enchanting and mysterious",
      },
      {
        text: "Crafted with secret ingredients and a touch of pirate mischief",
      },
      {
        text: "A liqueur that embodies the spirit of dark enchantment",
      },
    ],
    additional_info: [
      {
        text: "Best enjoyed in a snifter glass with a sprinkle of intrigue",
      },
      {
        text: "The liqueur that fuels the tales of the curious souls",
      },
      {
        text: "Raise your glass and toast to the secrets of the night",
      },
    ],
    img_url: "https://imgur.com/jJtHzEI.png",
  },
  {
    name: "Buccaneer's Sake",
    price: "18.99",
    amount: "300ml",
    apresentation:
      "Embark on a journey of cultural exploration with Buccaneer's Sake, a refined and delicate libation that captures the essence of the Far East. Crafted with the finest rice and a touch of pirate mischief, this sake will transport you to traditional Japanese temples and tranquil gardens. Take a sip, feel the harmony in every drop, and let Buccaneer's Sake be your guide on the quest for the art of sake appreciation.",
    active: true,
    category: "Sake",
    characteristic: [
      {
        text: "Refined and delicate",
      },
      {
        text: "Crafted with the finest rice and a touch of pirate mischief",
      },
      {
        text: "A sake that embodies the spirit of cultural exploration",
      },
    ],
    additional_info: [
      {
        text: "Best enjoyed in a traditional sake cup with a sprinkle of tranquility",
      },
      {
        text: "The sake that fuels the tales of the sake enthusiasts",
      },
      {
        text: "Raise your glass and toast to the traditions of the East",
      },
    ],
    img_url: "https://imgur.com/quXkkoC.png",
  },
];
