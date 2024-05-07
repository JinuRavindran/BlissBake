import {
  facebook,
  instagram,
  shieldTick,
  support,
  truckFast,
  twitter,
} from "../assets/icons";
import {
  customer1,
  customer2,
  cupcake1,
  cupcake2,
  cupcake3,
  cupcake4,
  cupcake5,
  cupcake6,
  cupcake7,
  cupcake8,
  cupcake2_rbg,
  cupcake3_rbg,
  cupcake4_rbg,
} from "../assets/images";

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about-us", label: "About Us" },
  { href: "#products", label: "Products" },
  { href: "#contact-us", label: "Contact Us" },
];

export const cupcakes = [
  {
    thumbnail: cupcake2_rbg,
    bigCupCake: cupcake2_rbg,
  },
  {
    thumbnail: cupcake3_rbg,
    bigCupCake: cupcake3_rbg,
  },
  {
    thumbnail: cupcake4_rbg,
    bigCupCake: cupcake4_rbg,
  },
];

export const statistics = [
  { value: "1k+", label: "Brands" },
  { value: "500+", label: "Shops" },
  { value: "250k+", label: "Customers" },
];

export const products = [  
  {
    imgURL: cupcake1,
    name: "Red Velvet Cupcakes",
    price: "$24.90",
  },
  {
    imgURL: cupcake2,
    name: "Bitrhday Cupcakes",
    price: "$26.90",
  },
  {
    imgURL: cupcake3,
    name: "Carrie Cupcake",
    price: "$24.90",
  },
  {
    imgURL: cupcake4,
    name: "Spring Cupcake",
    price: "$23.20",
  },
  {
    imgURL: cupcake5,
    name: "Carrot Party Cake",
    price: "$20.20",
  },
  {
    imgURL: cupcake6,
    name: "Carrot Cake",
    price: "$20.20",
  },
  {
    imgURL: cupcake7,
    name: "Chocolate Cake",
    price: "$55.12",
  },
  {
    imgURL: cupcake8,
    name: "German Chocolate Cake",
    price: "$54.15",
  },
];

export const services = [
  {
    imgURL: truckFast,
    label: "Free shipping",
    subtext: "Enjoy seamless shopping with our complimentary shipping service.",
  },
  {
    imgURL: shieldTick,
    label: "Secure Payment",
    subtext:
      "Experience worry-free transactions with our secure payment options.",
  },
  {
    imgURL: support,
    label: "Love to help you",
    subtext: "Our dedicated team is here to assist you every step of the way.",
  },
];

export const reviews = [
  {
    imgURL: customer1,
    customerName: "Morich Brown",
    rating: 4.5,
    feedback:
      "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!",
  },
  {
    imgURL: customer2,
    customerName: "Lota Mongeskar",
    rating: 4.5,
    feedback:
      "The product not only met but exceeded my expectations. I'll definitely be a returning customer!",
  },
];

export const footerLinks = [
  {
    title: "Products",
    links: [
      { name: "Red Velvet Cupcakes", link: "/" },
      { name: "Carrot Cake", link: "/" },
      { name: "Chocolate Cake", link: "/" },
      { name: "Carrot Party Cake", link: "/" },
      { name: "Bitrhday Cupcakes", link: "/" },
      { name: "Carrie Cupcake", link: "/" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "About us", link: "/" },
      { name: "FAQs", link: "/" },
      { name: "How it works", link: "/" },
      { name: "Privacy policy", link: "/" },
      { name: "Payment policy", link: "/" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { name: "customer@blissbake.com", link: "mailto:customer@blissbake.com" },
      { name: "+92554862354", link: "tel:+92554862354" },
    ],
  },
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
];
