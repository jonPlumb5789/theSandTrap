// src/data/menuData.js

const menuData = {
  starters: [
    { name: "Cuban Quesadilla", description: "Swiss, pulled pork, pickles, ham, and honey mustard.", price: "$16" },
    { name: "House Onion Rings", description: "Hand breaded and served with trap sauce.", price: "$12" },
    { name: "Sandtrap Sampler", description: "Pickle fries, Putters, Onion Rings, tomato-artichoke dip and chips.", price: "$19" },
    { name: "NEW Nachos", description: "House tortilla chips, loaded with white queso sauce, lettuce, tomatoes, red onion, & candied jalapeños. Topped with choice of ground beef or chicken.", price: "$15" },
    { name: "Chips & Dip", description: "House Made Seasoned potato chips served with house French Onion Dip.", price: "$6" },
    { name: "Tomato-artichoke Dip", description: "Sun-dried tomatoes, artichoke hearts, goat cheese, corn tortilla chips.", price: "$13" },
    { name: "Pickle Fries", description: "Hand breaded and served with ranch.", price: "$12" },
    { name: "NEW Pulled Pork Potato Skins", description: "House Baked Potato Skins Stuffed with Choice of Pulled Pork and melted cheddar cheese or Bacon. Topped with Chives.", price: "$13" },
    { name: "Coconut Shrimp", description: "5 Jumbo shrimp, coconut flakes, mango salsa, pineapple chili sauce.", price: "$17" },
    { name: "NEW Breaded Cheese Sticks", description: "Served with Marinara.", price: "$9" },
    { name: "Sesame Cauliflower", description: "Breaded cauliflower florets, mild Asian sauce, wasabi aioli, sesame seeds.", price: "$13" },
    { name: "Veggie-dilla", description: "Smoked feta cheese, artichokes, spinach, and sundried tomatoes.", price: "$15" },
    { name: "NEW Pretzel Bites", description: "Served with white queso sauce.", price: "$12" },
    { name: "Putters", description: "Wonton-wrapped corned beef, swiss, sauerkraut, with honey mustard.", price: "$14" },
    { name: "Oven Baked Wings", description: "Choice of BBQ, Nashville Hot, Pineapple chili.", price: "$16" },
    { name: "NEW Steak Tips", description: "Sriracha steak bites in mushrooms and onions, served with pita bread.", price: "$16" }
  ],
  soups: [
    { name: "Chicken Pastini", sizes: [{ size: "Cup", price: "$4" }, { size: "Bowl", price: "$6" }] },
    { name: "Soup Du Jour", sizes: [{ size: "Cup", price: "$4" }, { size: "Bowl", price: "$6" }] }
  ],
  greens: [
    {
      name: "Arugula Salad",
      description: "Arugula, fresh mixed berries, goat cheese crumbles, hot honey, balsamic reduction, pistachios, wild berry vinaigrette",
      price: "$14",
      add_ons: [
        { name: "Grilled Chicken", price: "$7" },
        { name: "Grilled Shrimp", price: "$8" },
        { name: "Grilled Salmon", price: "$9" },
        { name: "Steak Tips", price: "$9" },
        { name: "Ahi Tuna", price: "$9" }
      ]
    },
    {
      name: "Chop Salad",
      description: "Romaine, arugula, onion, tomatoes, egg, cucumber, bleu cheese crumbles, chickpeas, avocado, with red wine vinaigrette",
      price: "$14",
      add_ons: [
        { name: "Grilled Chicken", price: "$7" },
        { name: "Grilled Shrimp", price: "$8" },
        { name: "Grilled Salmon", price: "$9" },
        { name: "Steak Tips", price: "$9" },
        { name: "Ahi Tuna", price: "$9" }
      ]
    },
    { name: "Chef's Garden", description: "Romaine, onion, cucumber, grape tomato, mixed cheddar, croutons", price: "$13", add_ons: [/*...*/] },
    { name: "Beet Salad", description: "Arugula, golden beets, orange segments, feta crumbles, citrus vinaigrette", price: "$14", add_ons: [/*...*/] }
  ],
  hand_Helds: [
    { name: "Bunkers Club Sandwich", description: "Smoked turkey breast, Dearborn ham, provolone, swiss, aioli, tomato, lettuce, and applewood smoked bacon on sourdough.", price: "$15" },
    { name: "Crispy Hot Chicken Sandwich", description: "Hand breaded fried chicken breast tossed in Nashville hot sauce, lettuce, pickles, garlic aioli, on a brioche bun.", price: "$14" },
    { name: "B.L.A.T.", description: "Applewood smoked bacon, lettuce, avocado, garlic aioli, and tomato on toasted multi-grain bread.", price: "$14" }
  ],
  burgers: [
    { name: "Salmon Burger", description: "Grilled housemade salmon patty with arugula, red onion, tomato, and tartar on a brioche bun.", price: "$15" },
    { name: "T-Time Burger", description: "Sunny side up egg, applewood smoked bacon, cheddar cheese, and trap sauce on a brioche bun.", price: "$16" },
    { name: "Dunes Melt", description: "Steak blend patty with cheddar cheese, grilled onions, and BBQ sauce on grilled Texas toast.", price: "$16" }
  ],
  // Add other categories (hole_in_one, sides, blastshot_bowls, grandslam_sautes, desserts, pizza_oven, kids_menu)
};

export default menuData;
