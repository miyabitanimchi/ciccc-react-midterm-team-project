const categoryArr = ["clothes", "accessories", "electronics"];

// You can add any items here!
const additionalProducts = [
  {
    id: 21,
    title: "Swotch || Mintendo",
    price: 389.99,
    description:
      "You can do anything with Swotch! Let's dive into dreamy world.",
    category: categoryArr[2],
    image: "/img/video_game_console.png",
  },
  {
    id: 22,
    title: "BOSS Lightweight On-Ear Wired Headphones",
    price: 199.99,
    description:
      "Lightweight headphones in Black with comfortable on-ear design that minimizes outside noise.",
    category: categoryArr[2],
    image: "/img/boss-headphone.jpg",
  },
  {
    id: 23,
    title: "Garmon sports smartwatch",
    price: 99.99,
    description:
      "Full Touch Fitness Tracker IP68 Waterproof Bluetooth Round Sports Smartwatch with Heart Rate Monitor Sleep Monitor Pedometer Activity Tracker Message Notification.",
    category: categoryArr[2],
    image: "/img/garmon-smartwatch.jpg",
  },
  {
    id: 24,
    title: "Roy Ben sunglasses",
    price: 100.0,
    description: "Plastic lens, Non-Polarized, 100% UV protection coating.",
    category: categoryArr[1],
    image: "/img/roy-ben-sunglasses.jpg",
  },
  {
    id: 25,
    title: "Orange smart phone 256GB",
    price: 1200.0,
    description: `6.53" Large Full Screen&Ultra Wide AI Triple Camera] The 20:9 aspect ratio 6.53" Large Full-Screen display provides a wide field of vision. With the in-cell technology.`,
    category: categoryArr[2],
    image: "/img/orange-smartphone.jpg",
  },
  {
    id: 26,
    title: "Mojo women t-shirt",
    price: 35.0,
    description: "95% Polyester + 5% spandex, Super Soft and Comfy.",
    category: categoryArr[0],
    image: "/img/mojo-tshirt.jpg",
  },
  {
    id: 27,
    title: "Dryson hair dryer",
    price: 250.0,
    description:
      "Foldable, lightweight travel hair dryer makes it quick and easy to dry and style at home, work, the gym and on the go.",
    category: categoryArr[2],
    image: "/img/dryson-hair-dryer.jpg",
  },
  {
    id: 28,
    title: "Leather Jackets",
    price: 150.0,
    description:
      "100% Original Premium Lambskin Black Leather Jackets, Zipper closure, Dry Clean.",
    category: categoryArr[0],
    image: "/img/leather-jacket.jpg",
  },
  {
    id: 29,
    title: "Amber drop earrings",
    price: 200.0,
    description:
      "Amber Heart is well poslished, smooth and pleasant to wear near body..",
    category: categoryArr[1],
    image: "/img/amber-ear-ring.jpg",
  },
  {
    id: 30,
    title: "Multifunctional Microwave",
    price: 500.0,
    description:
      "You can do anything with this microwave and can be a professional chef!",
    category: categoryArr[2],
    image: "/img/microwave.jpg",
  },
  {
    id: 31,
    title: "High Quality Headphones",
    price: 199.9,
    description:
      "It offers high quality of the sound and it makes you feel like you are at a concert.",
    category: categoryArr[2],
    image: "/img/highquality-headphones.jpeg",
  },
  {
    id: 32,
    title: "Beige top for women",
    price: 35.5,
    description: "Well suited for every woman.",
    category: categoryArr[0],
    image: "/img/beige-top.jpg",
  },
  {
    id: 33,
    title: "Electric Takoyaki Pan",
    price: 80.0,
    description: "Takoyaki party at home!",
    category: categoryArr[2],
    image: "/img/electric-takoyaki-pan.jpg",
  },
  {
    id: 34,
    title: "Gem earrings",
    price: 210.0,
    description:
      "These earrings have fancy shiny gems, and perfect for any parties.",
    category: categoryArr[1],
    image: "/img/gem-earrings.jpg",
  },
  {
    id: 35,
    title: "Leather Boots For Women",
    price: 95.0,
    description: "Stylish, and functional in the rain as well.",
    category: categoryArr[1],
    image: "/img/leather-boots-for-women.jpg",
  },
  {
    id: 36,
    title: "Stylish Unisex Watch",
    price: 180.0,
    description: "A stylish watch for every person.",
    category: categoryArr[1],
    image: "/img/unisex-watch.jpg",
  },
];

export { categoryArr as default, additionalProducts };
