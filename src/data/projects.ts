const projects = [
  {
    id: "lore",
    title: "Lore.com",
    url: "https://lore.com",
    image: "/projects/lore.jpg",
    description:
      "<p>Designed and developed lore.com based on Figma design.</p> I built this website using Astro Framework and Tailwind CSS. The posts are fetched from a Ghost CMS backend and site is built automatically when a new post is created.",
    tags: ["Astro", "Ghost CMS", "Tailwind CSS", "Vercel"],
    isClient: true,
  },
  {
    id: "katie",
    title: "Katie Jo's Site",
    url: "https://katiejopockat.com/",
    image: "/projects/katiejo.jpg",
    description:
      "<p>Designed and developed Katie Jo Pochat's website using WordPres and Elementor. Included her in every step of the process in buiding the site.</p>",
    tags: ["WordPress", "Elementor"],
    isClient: true,
  },
  {
    id: "classy",
    title: "Classy",
    url: "https://classy.and249.codes/",
    image: "/projects/classy.png",
    description:
      "<p>A full-stack application that reminds you of your class schedule. Built using Vue.js, Node.js, Express.js, and MongoDB. I've used GitHub Actions to automatically send emails to users.</p",
    tags: ["Vue + Quasar", "Express", "Node.js", "MongoDB"],
    isClient: false,
  },
  {
    id: "postcards",
    title: "PostCards",
    url: "https://postcardsapp.netlify.app/",
    image: "/projects/postcards.png",
    description:
      '<p>A simple social media site built with a FireBase backend that\'s made for users to share their quick thoughts in "post cards" that other people can see.</p>',
    isClient: false,
    tags: ["Vue + Quasar", "Firebase"],
  },
];

export default projects;
