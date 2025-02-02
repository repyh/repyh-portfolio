interface TagsInterface {
    name: string;
    color: string;
}

interface ProjectInterface {
    name: string;
    description?: string;
    image: string;
    tags: Array<TagsInterface>;
    year: number;
    link?: string;
}

const projects: Array<ProjectInterface> = [
    {
        name: "This Portfolio",
        description: "Description 1",
        image: "/projects/portfolio.PNG",
        tags: [
            {
                name: "next.js",
                color: "#000000"
            },
            {
                name: "tailwindcss",
                color: "#06B6D4"
            },
            {
                name: "three.js",
                color: "#3a3a3a"
            },
            {
                name: "framer-motion",
                color: "#0055FF"
            }
        ],
        year: 2025,
        link: "/#home"
    },
    {
        name: "2022 Portfolio",
        description: "Description 1",
        image: "/projects/portfolio-2022.PNG",
        tags: [
            {
                name: "next.js",
                color: "#000000"
            },
            {
                name: "tailwindcss",
                color: "#06B6D4"
            },
            {
                name: "three.js",
                color: "#3a3a3a"
            }
        ],
        year: 2022
    },
    {
        name: "Type",
        description: "Description 1",
        image: "/projects/type.PNG",
        tags: [
            {
                name: "html",
                color: "#E34F26"
            },
            {
                name: "javascript",
                color: "#F7DF1E"
            },
            {
                name: "bootstrap",
                color: "#7952B3"
            }
        ],
        year: 2021
    },
	{
        name: "Pikacord: Pokemon Bot",
        description: "Description 1",
        image: "/projects/pikacord.PNG",
        tags: [
            {
                name: "ARCHIVED",
                color: "#FF4B33"
            },
            {
                name: "discord.js",
                color: "#7289DA"
            },
            {
                name: "pokeapi",
                color: "#FF0000"
            }
        ],
        year: 2020,
        link: "https://github.com/charliekmcmahon/pikacord-archive"
    },
    {
        name: "Asterisky Landing Page",
        description: "Description 1",
        image: "/projects/asterisky.PNG",
        tags: [
            {
                name: "next.js",
                color: "#000000"
            },
            {
                name: "tailwindcss",
                color: "#06B6D4"
            }
        ],
        year: 2021,
        link: "https://asterisky.vercel.app/"
    },
    {
        name: "Nightale Landing Page",
        description: "Description 1",
        image: "/projects/nightale.PNG",
        tags: [
            {
                name: "next.js",
                color: "#000000"
            },
            {
                name: "tailwindcss",
                color: "#06B6D4"
            }
        ],
        year: 2021,
        link: "https://nightale.vercel.app/"
    },
    {
        name: "Pylagged Landing Page",
        description: "Description 1",
        image: "/projects/pylagged.PNG",
        tags: [
            {
                name: "next.js",
                color: "#000000"
            },
            {
                name: "tailwindcss",
                color: "#06B6D4"
            }
        ],
        year: 2021,
        link: "https://pylagged-website.vercel.app/"
    },
    {
        name: "Desktop Download Manager",
        description: "Description 1",
        image: "/projects/desktop-man.PNG",
        tags: [
            {
                name: "IN DEVELOPMENT",
                color: "#FFC107"
            },
            {
                name: "electron",
                color: "#47848F"
            },
            {
                name: "react",
                color: "#61DAFB"
            },
            {
                name: "react-router",
                color: "#CA4245"
            }
        ],
        year: 2024,
        link: "https://github.com/repyh/download-manager"
    },
    {
        name: "discord.pay v2",
        description: "Description 1",
        image: "/projects/discordpay.PNG",
        tags: [
            {
                name: "next.js",
                color: "#000000"
            },
            {
                name: "paypal",
                color: "#003087"
            }
        ],
        year: 2021,
        link: "https://github.com/repyh/discord.pay-v2"
    },
    {
        name: "@flamedb/next",
        description: "Description 1",
        image: "/projects/flamedb-next.PNG",
        tags: [
            {
                name: "NOT MAINTAINED",
                color: "#FF4B33"
            },
            {
                name: "firebase",
                color: "#FFCA28"
            }
        ],
        year: 2021,
        link: "https://github.com/repyh/flamedb-next"
    },
    {
        name: "flame.db",
        description: "Description 1",
        image: "/projects/flamedb-old.PNG",
        tags: [
            {
                name: "LEGACY",
                color: "#FF4B33"
            },
            {
                name: "firebase",
                color: "#FFCA28"
            }
        ],
        year: 2020,
        link: "https://github.com/repyh/FlameDB"
    }
];

export default projects;