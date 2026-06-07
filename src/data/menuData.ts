// Full menu data for The Hive Cafe
// Sourced from Google Maps menu images

export interface MenuItem {
  name: string;
  price: string;
  note?: string;
}

export interface MenuCategory {
  category: string;
  description?: string;
  items: MenuItem[];
  sizePrices?: { label: string; price: string }[];
  note?: string;
}

export const menuData: MenuCategory[] = [
  {
    category: "Breakfast",
    description: "Start your morning right",
    items: [
      { name: "Bee-ginner Breakfast", price: "$9.99", note: "+ Make it Royal $2" },
      { name: "Hondurian Buzz", price: "$10.99", note: "+ Add Breakfast Protein $2" },
      { name: "Queen Bee Avocado Egg Toast", price: "$6.99" },
      { name: "Buzzwich", price: "$5.99", note: "+ Make it Royal $2" },
      { name: "Bee Chilaquiles", price: "$12.49", note: "+ Add Chicken $2" },
      { name: "Breakfast Buzz-rito", price: "$8.49", note: "+ Make it Royal $2" },
      { name: "Chicken & Hivecakes", price: "$11.99" },
      { name: "The Hivecakes", price: "$6.99", note: "+ Add Toppings and Fruit $2" },
      { name: "Bee Nutty Toast", price: "$5.99" },
      { name: "Bee Jelly Toast", price: "$5.99" },
    ],
  },
  {
    category: "Appetizers",
    items: [
      { name: "Pollinator Street Corn Bites", price: "$7.99" },
      { name: "Melty Hive", price: "$9.99" },
      { name: "Golden Buzz Ring", price: "$7.99" },
      { name: "Mozza-Bee Stick", price: "$7.99" },
      { name: "Bee's Chicken Crunchers", price: "$9.99", note: "+ Add fries $3" },
    ],
  },
  {
    category: "Entrées",
    items: [
      { name: "Sting Tacos", price: "$10.99" },
      { name: "QuesaBee-ria", price: "$12.99" },
      { name: "Buzzadilla", price: "$11.99" },
      { name: "Buzzrito", price: "$11.99" },
      { name: "Worker Bee Bowl", price: "$13.99" },
      { name: "The Hive Lunch", price: "$12.99" },
      { name: "The Hive's Ultimate Nachos", price: "$13.49" },
      { name: "Hive's Loaded Stingers", price: "$13.49" },
      { name: "Grilled Bee-f Steak", price: "$15.99" },
      { name: "Queen Bee Chop", price: "$14.99" },
      { name: "Honeycomb Mulitas", price: "$12.99" },
      { name: "Crispy Bee-Rolls", price: "$11.99", note: "+ Birria extra $2" },
    ],
  },
  {
    category: "Burgers & Sandwiches",
    items: [
      { name: "CheeseBuzzger", price: "$11.99", note: "+ Make it Double $2" },
      { name: "Queen Bee's Royal Burger", price: "$14.99", note: "+ Make it Double $2" },
      { name: "Bee Bite Sliders", price: "$11.99", note: "+ Add Fries $3" },
      { name: "Chick-a-Buzz Sandwich", price: "$11.99" },
      { name: "Pesto Bee-luxe Sandwich", price: "$7.49", note: "+ Add chicken $1.80 / Add fries $3" },
      { name: "Pesto Bee-luxe Sandwich with all", price: "$11.99" },
    ],
  },
  {
    category: "Little Bee Menu",
    description: "For the little ones",
    items: [
      { name: "Cheeseburger and fries", price: "$9.99" },
      { name: "2 Tender with Fries", price: "$8.99" },
      { name: "Mini Buzzadilla", price: "$7.99" },
      { name: "2 Sting Tacos", price: "$7.99" },
      { name: "Chicken BabyBee Sandwich", price: "$8.99" },
    ],
  },
  {
    category: "Sharing The Hive",
    description: "Party packs for the whole crew",
    items: [
      { name: "Pizza Birria", price: "$38.99" },
      { name: "15 Taco Box", price: "$35.99" },
      { name: "25 Taco Box", price: "$60.99" },
      { name: "35 Taco Box", price: "$85.99" },
    ],
  },
  {
    category: "Fruit Bowls & Cups",
    items: [
      { name: "Mexican Style Fruit Cup", price: "$7.99 / $11.49 / $14.99" },
      { name: "Fruit Bowl", price: "$8.99 / $12.99" },
      { name: "Acai Bee Bowl", price: "$11.99 / $16.99" },
      { name: "Tropical Acai Bee Bowl", price: "$11.99 / $16.99" },
      { name: "Greek Bee Bowl", price: "$9.99 / $14.99" },
      { name: "Tropical Greek Bee", price: "$9.99 / $14.99" },
      { name: "Seed and Bee-rries Bowl", price: "$9.99 / $14.99" },
      { name: "Mangonada", price: "$7.99 / $11.99" },
    ],
  },
  {
    category: "Desserts",
    items: [
      { name: "Churros Bites", price: "$6.49" },
      { name: "Cheesecake", price: "$6.49" },
      { name: "Queen Bee Royal Churros", price: "$10.99" },
      { name: "Tres Leches", price: "$5.49" },
      { name: "Concha Bee-luxe", price: "$6.99" },
      { name: "Special dessert of the week", price: "Ask for price" },
    ],
  },
  {
    category: "Meats",
    description: "Choose your protein",
    note: "Included as meat option",
    items: [
      { name: "Asada / Grilled Steak", price: "—" },
      { name: "Grilled Chicken", price: "—" },
      { name: "Al Pastor / Pork with Pineapple", price: "—" },
      { name: "Tinga / Shredded Chicken", price: "—" },
      { name: "Seasoned Ground Beef", price: "—" },
      { name: "Veggie Mix", price: "—" },
      { name: "Birria / Shredded Beef", price: "+ $2" },
    ],
  },
  {
    category: "Sides",
    items: [
      { name: "Fries", price: "$4.99" },
      { name: "Tostones", price: "$4.99" },
      { name: "Plantains", price: "$4.99" },
      { name: "Country Potatoes", price: "$5.99" },
      { name: "White Rice", price: "$3.49" },
      { name: "Seasoned Rice", price: "$3.99" },
      { name: "Refried Black Beans", price: "$3.49" },
      { name: "Charro Pinto Beans", price: "$3.99" },
      { name: "Half Rice Half Beans", price: "$3.99" },
      { name: "House Salad", price: "$5.99" },
      { name: "Fresh Fruit", price: "$5.99" },
      { name: "Corn On the Cob", price: "$5.99" },
    ],
  },
  {
    category: "Classic Iced Coffee",
    sizePrices: [
      { label: "Bee Happy 16oz", price: "$5.25" },
      { label: "Worker Bee 24oz", price: "$6.55" },
      { label: "Royal Bee 32oz", price: "$7.95" },
    ],
    items: [
      { name: "Americano", price: "" },
      { name: "Latte", price: "" },
      { name: "Vanilla Latte", price: "" },
      { name: "Caramel Macchiato", price: "" },
      { name: "Caramel Latte", price: "" },
      { name: "Mocha", price: "" },
      { name: "White Chocolate Latte", price: "" },
      { name: "Black Orange", price: "" },
    ],
  },
  {
    category: "Signature Iced Coffee",
    sizePrices: [
      { label: "Bee Happy 16oz", price: "$6.25" },
      { label: "Worker Bee 24oz", price: "$7.55" },
      { label: "Royal Bee 32oz", price: "$8.95" },
    ],
    items: [
      { name: "Honey Latte", price: "" },
      { name: "Biscoff Latte", price: "" },
      { name: "Dulce de Leche Latte", price: "" },
      { name: "Nutella Latte", price: "" },
      { name: "Cheesecake Latte", price: "" },
      { name: "Abuelita Latte", price: "" },
      { name: "Horchata Latte", price: "" },
      { name: "Strawberry Mocha", price: "" },
      { name: "Strawberry Latte", price: "" },
      { name: "Mazapan Latte", price: "" },
      { name: "Churro Latte", price: "" },
      { name: "Reese's Latte", price: "" },
    ],
  },
  {
    category: "Hot Cocoa",
    sizePrices: [
      { label: "Bee Happy 10oz", price: "$3.95" },
      { label: "Worker Bee 16oz", price: "$4.95" },
      { label: "Royal Bee 22oz", price: "$5.95" },
    ],
    items: [
      { name: "Classic Hot Cocoa", price: "" },
      { name: "Nutella Hot Cocoa", price: "" },
      { name: "Abuelita Hot Chocolate", price: "" },
    ],
  },
  {
    category: "Milkshakes",
    sizePrices: [
      { label: "Bee Happy 16oz", price: "$6.55" },
      { label: "Worker Bee 24oz", price: "$8.95" },
      { label: "Royal Bee 32oz", price: "$10.95" },
    ],
    items: [
      { name: "Vanilla", price: "" },
      { name: "Chocolate", price: "" },
      { name: "Strawberry", price: "" },
      { name: "Dulce de Leche", price: "" },
      { name: "Cookies and Cream", price: "" },
      { name: "Churro", price: "" },
      { name: "Biscoff", price: "" },
      { name: "Cheesecake", price: "" },
      { name: "Piña Colada", price: "" },
      { name: "Nutella", price: "" },
      { name: "Mazapan", price: "" },
      { name: "Reese's", price: "" },
    ],
  },
  {
    category: "Aguas Frescas",
    sizePrices: [
      { label: "Bee Happy 16oz", price: "$3.95" },
      { label: "Worker Bee 24oz", price: "$4.95" },
      { label: "Royal Bee 32oz", price: "$5.95" },
    ],
    items: [
      { name: "Lemonade", price: "" },
      { name: "Blue Raspberry Lemonade", price: "" },
      { name: "Kiwi Lemonade", price: "" },
      { name: "Cherry Lemonade", price: "" },
      { name: "Peach Lemonade", price: "" },
      { name: "Pomegranate Lemonade", price: "" },
      { name: "Arnold Palmer", price: "" },
      { name: "Strawberry Agua Fresca", price: "" },
      { name: "Watermelon Agua Fresca", price: "" },
      { name: "Pineapple Agua Fresca", price: "" },
      { name: "Mango Agua Fresca", price: "" },
      { name: "Horchata", price: "" },
      { name: "Iced Tea", price: "" },
    ],
  },
  {
    category: "Soft Drinks",
    items: [
      { name: "Water Bottle", price: "$1.50" },
      { name: "Coke / Coke Zero", price: "$2.50" },
      { name: "Sprite / Sprite Zero", price: "$2.50" },
      { name: "Dr Pepper / Dr Pepper Diet", price: "$2.50" },
      { name: "Pepsi", price: "$2.50" },
      { name: "Apple Juice Bottle", price: "$2.50" },
    ],
  },
];