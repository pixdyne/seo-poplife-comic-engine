import { BlogPost } from '../types';

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'THE ART OF THE BEN-DAY DOT',
    date: 'OCT 12, 2023',
    category: 'DESIGN',
    excerpt: 'Why do little tiny dots make everything look so much cooler? A deep dive into the printing process that changed art forever.',
    content: "Ben-Day dots are a printing process named after illustrator and printer Benjamin Henry Day Jr. Depending on the effect, color and optical illusion needed, small colored dots are closely spaced, widely spaced or overlapping. Magenta dots, for example, are widely spaced to create pink. 1950s and 1960s pulp comic books used Ben-Day dots in the four process colors (cyan, magenta, yellow and black) to inexpensively create shading and secondary colors such as green, purple, orange and flesh tones.",
    color: 'bg-cyan-400'
  },
  {
    id: '2',
    title: 'KA-BOOM! THE HISTORY OF SOUND',
    date: 'NOV 04, 2023',
    category: 'HISTORY',
    excerpt: 'From WHAM to SPLAT! How comic books invented a visual language for noise that we can all hear with our eyes.',
    content: "Onomatopoeia is the formation of a word from a sound associated with what is named. In comic books, this is taken to an extreme visual level. The typography itself expresses the volume and timbre of the sound. A jagged 'CRASH' implies sharp metal, while a bubbly 'GLOOP' implies viscosity. Roy Lichtenstein often used these words as the central subject of his paintings, elevating a background sound effect to high art.",
    color: 'bg-yellow-400'
  },
  {
    id: '3',
    title: 'LIVING LIFE IN CMYK',
    date: 'DEC 15, 2023',
    category: 'LIFESTYLE',
    excerpt: 'Why you should dress like a primary color chart and ignore the greyscale world around you.',
    content: "The world is often too grey. Too beige. Too safe. Pop Art teaches us that life is better when it's bold. By restricting your palette to Cyan, Magenta, Yellow, and Key (Black), you force a level of clarity and contrast that is impossible to ignore. Wear that bright red jacket! Paint your wall bright yellow! Let your life be as vibrant as a fresh print run.",
    color: 'bg-pink-500'
  },
];