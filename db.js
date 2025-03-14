let database = [
  {
    mealIndex: 0,
    name: "Pizza Margherita",
    description:
      "Klassische Pizza mit Tomatensauce, Mozzarella und frischem Basilikum.",
    price: 8.99,
    amount: 1,
    category: "Pizza",
    headercategory: "Pizza"
  },
  {
    mealIndex: 1,
    name: "Pizza Salami",
    description: "Herzhafte Pizza mit würziger Salami und extra Käse.",
    price: 9.99,
    amount: 1,
    category: "Pizza",
  },
  {
    mealIndex: 2,
    name: "Pizza Quattro Stagioni",
    description: "Pizza mit Schinken, Artischocken, Champignons und Oliven.",
    price: 11.49,
    amount: 1,
    category: "Pizza",
  },
  {
    mealIndex: 3,
    name: "Pizza Diavolo",
    description: "Scharfe Pizza mit Peperoni, Jalapeños und scharfer Salami.",
    price: 10.99,
    amount: 1,
    category: "Pizza",
  },
  {
    mealIndex: 4,
    name: "Pizza Funghi",
    description: "Vegetarische Pizza mit frischen Champignons und Mozzarella.",
    price: 9.49,
    amount: 1,
    category: "Pizza",
  },
  {
    mealIndex: 5,
    name: "Gebratene Nudeln mit Hähnchen",
    description:
      "Köstliche gebratene Nudeln mit zartem Hähnchenfleisch und frischem Gemüse.",
    price: 8.99,
    amount: 1,
    category: "Chinesisch",
        headercategory: "Chinesisch"
  },
  {
    mealIndex: 6,
    name: "Knusprige Ente mit Reis",
    description:
      "Knusprig gebratene Ente mit einer leckeren Sojasauce, serviert mit Reis.",
    price: 12.99,
    amount: 1,
    category: "Chinesisch",
  },
  {
    mealIndex: 7,
    name: "Szechuan Rindfleisch",
    description: "Scharfes Rindfleisch nach Szechuan-Art mit knackigem Gemüse.",
    price: 11.49,
    amount: 1,
    category: "Chinesisch",
  },
  {
    mealIndex: 8,
    name: "Frühlingsrollen",
    description:
      "Knusprige Frühlingsrollen mit Gemüsefüllung und süß-saurer Sauce.",
    price: 4.99,
    amount: 1,
    category: "Chinesisch",
  },
  {
    mealIndex: 9,
    name: "Dim Sum Mix",
    description:
      "Eine Auswahl an gedämpften Teigtaschen mit verschiedenen Füllungen.",
    price: 9.99,
    amount: 1,
    category: "Chinesisch",
  },

  {
    mealIndex: 10,
    name: "Classic Cheeseburger",
    description:
      "Ein saftiger Rindfleisch-Patty mit Cheddar, Salat, Tomaten und Burgersauce.",
    price: 7.99,
    amount: 1,
    category: "Burger",
            headercategory: "Burger"
  },
  {
    mealIndex: 11,
    name: "BBQ Bacon Burger",
    description:
      "Rindfleisch-Burger mit knusprigem Bacon, BBQ-Sauce und Zwiebelringen.",
    price: 9.49,
    amount: 1,
    category: "Burger",
  },
  {
    mealIndex: 12,
    name: "Veggie Burger",
    description:
      "Ein leckerer Gemüse-Patty mit Avocado-Creme und frischem Salat.",
    price: 8.49,
    amount: 1,
    category: "Burger",
  },
  {
    mealIndex: 13,
    name: "Double Cheese Burger",
    description:
      "Doppelt Fleisch, doppelt Käse – für den ultimativen Burger-Genuss!",
    price: 10.99,
    amount: 1,
    category: "Burger",
  },
  {
    mealIndex: 14,
    name: "Chili Cheese Burger",
    description:
      "Pikanter Burger mit Jalapeños, Cheddar und hausgemachter Chili-Sauce.",
    price: 8.99,
    amount: 1,
    category: "Burger",
  },

  {
    mealIndex: 15,
    name: "Spaghetti Carbonara",
    description: "Klassische Carbonara mit Speck, Ei und Parmesan.",
    price: 9.99,
    amount: 1,
    category: "Nudelgerichte",
            headercategory: "Nudelgerichte"
  },
  {
    mealIndex: 16,
    name: "Lasagne Bolognese",
    description:
      "Hausgemachte Lasagne mit würziger Bolognese und Käse überbacken.",
    price: 11.49,
    amount: 1,
    category: "Nudelgerichte",
  },
  {
    mealIndex: 17,
    name: "Penne Arrabbiata",
    description: "Scharfe Tomatensauce mit Knoblauch, Peperoni und Olivenöl.",
    price: 8.99,
    amount: 1,
    category: "Nudelgerichte",
  },
  {
    mealIndex: 18,
    name: "Tagliatelle mit Lachs",
    description: "Frische Tagliatelle mit cremiger Lachs-Sahnesauce.",
    price: 12.99,
    amount: 1,
    category: "Nudelgerichte",
  },
  {
    mealIndex: 19,
    name: "Tortellini mit Spinat-Ricotta",
    description: "Gefüllte Tortellini in einer feinen Sahnesauce mit Parmesan.",
    price: 10.49,
    amount: 1,
    category: "Nudelgerichte",
  },

  {
    mealIndex: 25,
    name: "Französisches Frühstück",
    description: "Croissant mit Butter, Marmelade und einem Kaffee.",
    price: 6.99,
    amount: 1,
    category: "Frühstück",
            headercategory: "Frühstück"
  },
  {
    mealIndex: 26,
    name: "Englisches Frühstück",
    description: "Rührei, Speck, Würstchen, Bohnen und Toast.",
    price: 9.99,
    amount: 1,
    category: "Frühstück",
  },
  {
    mealIndex: 27,
    name: "Avocado Toast",
    description: "Geröstetes Vollkornbrot mit Avocado, Ei und Tomaten.",
    price: 7.49,
    amount: 1,
    category: "Frühstück",
  },
  {
    mealIndex: 28,
    name: "Pancakes mit Ahornsirup",
    description: "Fluffige Pancakes mit Ahornsirup und frischen Beeren.",
    price: 8.49,
    amount: 1,
    category: "Frühstück",
  },
  {
    mealIndex: 29,
    name: "Müsli Bowl",
    description: "Joghurt mit Granola, Nüssen und Honig.",
    price: 5.99,
    amount: 1,
    category: "Frühstück",
  },
  {
    mealIndex: 20,
    name: "Tiramisu",
    description: "Hausgemachtes Tiramisu mit Mascarpone und Kakao.",
    price: 5.99,
    amount: 1,
    category: "Dessert",
            headercategory: "Dessert"
  },
  {
    mealIndex: 21,
    name: "Schokoladenlava-Kuchen",
    description: "Warmer Schokokuchen mit flüssigem Kern und Vanilleeis.",
    price: 6.49,
    amount: 1,
    category: "Dessert",
  },
  {
    mealIndex: 22,
    name: "Panna Cotta",
    description: "Cremige Panna Cotta mit fruchtigem Himbeer-Spiegel.",
    price: 5.49,
    amount: 1,
    category: "Dessert",
  },
  {
    mealIndex: 23,
    name: "Apfelstrudel",
    description: "Warmer Apfelstrudel mit Zimt und Vanillesoße.",
    price: 5.99,
    amount: 1,
    category: "Dessert",
  },
  {
    mealIndex: 24,
    name: "Erdbeer-Tiramisu",
    description: "Leichtes Tiramisu mit frischen Erdbeeren und Mascarpone.",
    price: 6.49,
    amount: 1,
    category: "Dessert",
  },


  {
    mealIndex: 30,
    name: "Gegrilltes Lachsfilet",
    description: "Zartes Lachsfilet vom Grill mit Zitronen-Butter-Sauce.",
    price: 14.99,
    amount: 1,
    category: "Fischgerichte",
            headercategory: "Fischgerichte"
  },
  {
    mealIndex: 31,
    name: "Fisch & Chips",
    description:
      "Knusprig frittierter Kabeljau mit hausgemachten Pommes und Remoulade.",
    price: 11.99,
    amount: 1,
    category: "Fischgerichte",
  },
  {
    mealIndex: 32,
    name: "Garnelenpfanne",
    description:
      "Gebratene Garnelen mit Knoblauch und Kräutern, serviert mit Reis.",
    price: 13.99,
    amount: 1,
    category: "Fischgerichte",
  },
  {
    mealIndex: 33,
    name: "Thunfischsteak",
    description: "Saftiges Thunfischsteak mit einer Wasabi-Soja-Marinade.",
    price: 15.99,
    amount: 1,
    category: "Fischgerichte",
  },
  {
    mealIndex: 34,
    name: "Bouillabaisse",
    description: "Französische Fischsuppe mit Meeresfrüchten und Safran.",
    price: 12.99,
    amount: 1,
    category: "Fischgerichte",
  },

  {
    mealIndex: 35,
    name: "Gemüse-Curry",
    description:
      "Cremiges Curry mit frischem Gemüse und Kokosmilch, serviert mit Reis.",
    price: 9.99,
    amount: 1,
    category: "Vegetarisch",
            headercategory: "Vegetarisch"
  },
  {
    mealIndex: 36,
    name: "Kichererbsen-Bowl",
    description:
      "Proteinreiche Kichererbsen mit frischen Kräutern, Avocado und Hummus.",
    price: 10.49,
    amount: 1,
    category: "Vegetarisch",
  },
  {
    mealIndex: 37,
    name: "Grillgemüse mit Quinoa",
    description: "Buntes Grillgemüse mit Quinoa und Feta-Käse.",
    price: 9.99,
    amount: 1,
    category: "Vegetarisch",
  },
  {
    mealIndex: 38,
    name: "Spinat-Ricotta-Ravioli",
    description:
      "Hausgemachte Ravioli mit Spinat-Ricotta-Füllung in Salbeibutter.",
    price: 11.99,
    amount: 1,
    category: "Vegetarisch",
  },
  {
    mealIndex: 39,
    name: "Falafel-Teller",
    description: "Knusprige Falafel mit Hummus, Fladenbrot und Joghurtdip.",
    price: 8.99,
    amount: 1,
    category: "Vegetarisch",
  },

  {
    mealIndex: 40,
    name: "Loaded Fries",
    description: "Pommes mit Käse, Jalapeños, Bacon und BBQ-Sauce.",
    price: 6.99,
    amount: 1,
    category: "Street Food",
            headercategory: "Street Food"
  },
  {
    mealIndex: 41,
    name: "Pulled Pork Sandwich",
    description: "Zartes Pulled Pork in einem Brioche-Bun mit Cole Slaw.",
    price: 9.99,
    amount: 1,
    category: "Street Food",
  },
  {
    mealIndex: 42,
    name: "Tacos al Pastor",
    description:
      "Weiche Mais-Tacos mit mariniertem Schweinefleisch, Zwiebeln und Ananas.",
    price: 10.49,
    amount: 1,
    category: "Street Food",
  },
  {
    mealIndex: 43,
    name: "Koreanische BBQ-Spieße",
    description: "Gegrillte Fleischspieße mit würziger Gochujang-Marinade.",
    price: 12.49,
    amount: 1,
    category: "Street Food",
  },
  {
    mealIndex: 44,
    name: "Samosas",
    description:
      "Knusprige Teigtaschen gefüllt mit Kartoffeln, Erbsen und Gewürzen.",
    price: 5.99,
    amount: 1,
    category: "Street Food",
  },

  {
    mealIndex: 45,
    name: "Griechischer Salat",
    description: "Frischer Salat mit Feta, Oliven, Tomaten und Gurken.",
    price: 7.99,
    amount: 1,
    category: "Mediterran",
            headercategory: "Mediterran"
  },
  {
    mealIndex: 46,
    name: "Paella",
    description:
      "Spanische Reis-Pfanne mit Meeresfrüchten, Safran und Hähnchen.",
    price: 13.99,
    amount: 1,
    category: "Mediterran",
  },
  {
    mealIndex: 47,
    name: "Bruschetta",
    description: "Knuspriges Ciabatta mit Tomaten, Basilikum und Olivenöl.",
    price: 5.49,
    amount: 1,
    category: "Mediterran",
  },
  {
    mealIndex: 48,
    name: "Lamm-Kofta",
    description: "Würzige Lammfrikadellen mit Joghurt-Dip und Fladenbrot.",
    price: 10.99,
    amount: 1,
    category: "Mediterran",
  },
  {
    mealIndex: 49,
    name: "Risotto mit Steinpilzen",
    description: "Cremiges Risotto mit Steinpilzen, Parmesan und Trüffelöl.",
    price: 12.49,
    amount: 1,
    category: "Mediterran",
  },

  {
    mealIndex: 50,
    name: "Butter Chicken",
    description:
      "Zartes Hähnchen in einer cremigen Tomaten-Curry-Sauce, serviert mit Reis.",
    price: 11.99,
    amount: 1,
    category: "Indisch",
            headercategory: "Indisch"
  },
  {
    mealIndex: 51,
    name: "Palak Paneer",
    description:
      "Indischer Frischkäse in einer würzigen Spinat-Sauce mit Reis.",
    price: 10.49,
    amount: 1,
    category: "Indisch",
  },
  {
    mealIndex: 52,
    name: "Tandoori-Hähnchen",
    description: "Im Ofen gebackenes Hähnchen in würziger Joghurt-Marinade.",
    price: 12.99,
    amount: 1,
    category: "Indisch",
  },
  {
    mealIndex: 53,
    name: "Linsen Dal",
    description: "Cremiges Linsen-Curry mit Knoblauch, Ingwer und Gewürzen.",
    price: 8.99,
    amount: 1,
    category: "Indisch",
  },
  {
    mealIndex: 54,
    name: "Naan Brot mit Knoblauch",
    description: "Fladenbrot mit Knoblauchbutter, ideal als Beilage.",
    price: 3.99,
    amount: 1,
    category: "Indisch",
  },
  {
    mealIndex: 55,
    name: "Ribeye-Steak",
    description:
      "Saftiges Ribeye-Steak mit Rosmarinkartoffeln und Pfeffersauce.",
    price: 22.99,
    amount: 1,
    category: "Steaks & Grillgerichte",
            headercategory: "Steaks & Grillgerichte"
  },
  {
    mealIndex: 56,
    name: "BBQ Spareribs",
    description: "Zarte Spareribs mit hausgemachter BBQ-Sauce und Maiskolben.",
    price: 19.99,
    amount: 1,
    category: "Steaks & Grillgerichte",
  },
  {
    mealIndex: 57,
    name: "Grillteller",
    description:
      "Gemischter Grillteller mit Steak, Würstchen, Hähnchen und Grillgemüse.",
    price: 24.99,
    amount: 1,
    category: "Steaks & Grillgerichte",
  },
  {
    mealIndex: 58,
    name: "Lammlachse",
    description:
      "Zarte Lammlachse mit Kräuterkruste, serviert mit Ratatouille.",
    price: 21.99,
    amount: 1,
    category: "Steaks & Grillgerichte",
  },
  {
    mealIndex: 59,
    name: "Surf & Turf",
    description: "Steak mit gegrillten Garnelen und Knoblauchbutter.",
    price: 26.99,
    amount: 1,
    category: "Steaks & Grillgerichte",
  },

  {
    mealIndex: 60,
    name: "Gulaschsuppe",
    description: "Herzhafte Gulaschsuppe mit Rindfleisch und Paprika.",
    price: 8.99,
    amount: 1,
    category: "Suppen & Eintöpfe",
            headercategory: "Suppen & Eintöpfe"
  },
  {
    mealIndex: 61,
    name: "Linsensuppe",
    description: "Deftige Linsensuppe mit Speck und Wurzelgemüse.",
    price: 7.99,
    amount: 1,
    category: "Suppen & Eintöpfe",
  },
  {
    mealIndex: 62,
    name: "Tomatensuppe",
    description: "Cremige Tomatensuppe mit Basilikum und Croutons.",
    price: 6.99,
    amount: 1,
    category: "Suppen & Eintöpfe",
  },
  {
    mealIndex: 63,
    name: "Hühnersuppe",
    description: "Kräftige Hühnersuppe mit Nudeln und Gemüse.",
    price: 7.49,
    amount: 1,
    category: "Suppen & Eintöpfe",
  },
  {
    mealIndex: 64,
    name: "Kürbissuppe",
    description: "Wärmende Kürbissuppe mit Ingwer und Kokosmilch.",
    price: 6.99,
    amount: 1,
    category: "Suppen & Eintöpfe",
  },

  {
    mealIndex: 65,
    name: "Datteln im Speckmantel",
    description: "Knusprig gebratene Datteln im Speckmantel.",
    price: 5.99,
    amount: 1,
    category: "Tapas & Vorspeisen",
            headercategory: "Tapas & Vorspeisen"
  },
  {
    mealIndex: 66,
    name: "Gambas al Ajillo",
    description: "Garnelen in Knoblauchöl mit frischem Baguette.",
    price: 9.99,
    amount: 1,
    category: "Tapas & Vorspeisen",
  },
  {
    mealIndex: 67,
    name: "Patatas Bravas",
    description: "Knusprige Kartoffeln mit würziger Brava-Sauce.",
    price: 5.99,
    amount: 1,
    category: "Tapas & Vorspeisen",
  },
  {
    mealIndex: 68,
    name: "Tzatziki mit Pita",
    description: "Griechischer Joghurt-Dip mit frischem Pita-Brot.",
    price: 4.99,
    amount: 1,
    category: "Tapas & Vorspeisen",
  },
  {
    mealIndex: 69,
    name: "Mozzarella Sticks",
    description: "Knusprig frittierte Mozzarella Sticks mit Marinara-Sauce.",
    price: 6.49,
    amount: 1,
    category: "Tapas & Vorspeisen",
  },

  {
    mealIndex: 70,
    name: "Chicken Wrap",
    description:
      "Weizentortilla mit gegrilltem Hähnchen, Salat und Joghurtdressing.",
    price: 7.99,
    amount: 1,
    category: "Wraps & Sandwiches",
            headercategory: "Wraps & Sandwiches"
  },
  {
    mealIndex: 71,
    name: "Falafel Wrap",
    description:
      "Falafel mit Hummus, Salat und Tomaten in einer Weizentortilla.",
    price: 7.49,
    amount: 1,
    category: "Wraps & Sandwiches",
  },
  {
    mealIndex: 72,
    name: "Club Sandwich",
    description: "Dreilagiges Sandwich mit Putenbrust, Speck, Tomate und Mayo.",
    price: 8.99,
    amount: 1,
    category: "Wraps & Sandwiches",
  },
  {
    mealIndex: 73,
    name: "Pulled Beef Wrap",
    description:
      "Saftiges Pulled Beef mit BBQ-Sauce und Cole Slaw in einer Tortilla.",
    price: 9.99,
    amount: 1,
    category: "Wraps & Sandwiches",
  },
  {
    mealIndex: 74,
    name: "Caprese Sandwich",
    description: "Ciabatta mit Mozzarella, Tomaten und Basilikumpesto.",
    price: 6.99,
    amount: 1,
    category: "Wraps & Sandwiches",
  },
 
  {
    mealIndex: 75,
    name: "Coca-Cola 0,5L",
    description: "Erfrischendes Cola-Getränk, gekühlt serviert.",
    price: 2.49,
    amount: 1,
    category: "Getränke",
            headercategory: "Getränke"
  },
  {
    mealIndex: 76,
    name: "Fanta 0,5L",
    description: "Spritzige Orangenlimonade, gekühlt serviert.",
    price: 2.49,
    amount: 1,
    category: "Getränke",
  },
  {
    mealIndex: 77,
    name: "Mineralwasser 0,5L",
    description: "Natürliches Mineralwasser, still oder mit Kohlensäure.",
    price: 1.99,
    amount: 1,
    category: "Getränke",
  },
  {
    mealIndex: 78,
    name: "Hausgemachte Limonade",
    description: "Frische Zitronenlimonade mit Minze und Eiswürfeln.",
    price: 3.49,
    amount: 1,
    category: "Getränke",
  },
  {
    mealIndex: 79,
    name: "Kaffee",
    description: "Frisch gebrühter Kaffee – wahlweise mit Milch oder Zucker.",
    price: 2.99,
    amount: 1,
    category: "Getränke",
  },
];

let shoppingCartDatabase = [];
