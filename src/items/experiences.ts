interface ExpDateInterface {
    month: string;
    year: number;
}

interface ExperienceInterface {
    title: string;
    description: string;
    from: ExpDateInterface;
    to?: ExpDateInterface;
}

const experiences = [
    {
        title: "Pikacord Developer",
        description: "Collaborated with Pikacord's dev team to develop what was meant to be Pokecord's successor.",
        from: {
            month: "May",
            year: 2020
        }
    },
    {
        title: "Discord Bot Freelancer",
        description: "Fulfilled custom bot requests for various Discord clients.",
        from: {
            month: "August",
            year: 2020
        }
    },
    {
        title: "Indonesia's APBN Olympiad 2022",
        description: "Part of SDH Manado's representative team for Indonesia's 2022 APBN Olympiad.",
        from: {
            month: "September",
            year: 2022
        }
    },
    {
        title: "National Informatics Science Olympiad 2022",
        description: "Part of SDH Manado's representative individual for the National Informatics Science Olympiad.",
        from: {
            month: "April",
            year: 2023
        }
    },
    {
        title: "Indonesia's APBN Olympiad 2023",
        description: "Part of SDH Manado's representative team for Indonesia's 2023 APBN Olympiad.",
        from: {
            month: "September",
            year: 2023
        }
    },
    {
        title: "SURO Cup 2023",
        description: "Part of SDH Manado's representative team for Unsrat's Faculty of Engineering SURO Cup Robotics Competition.",
        from: {
            month: "September",
            year: 2023
        }
    },
    {
        title: "Bank SulutGo - Internship",
        description: "Manages customers data and compile reports.",
        from: {
            month: "May",
            year: 2024
        }
    },
    {
        title: "UPH's Sistech CP Team",
        description: "Part of the competitive programming team representing University of Pelita Harapan.",
        from: {
            month: "October",
            year: 2024
        }
    },
    {
        title: "Falcon Project 14 UPH Committee",
        description: "Part of Design and Multimedia division as a volunteer.",
        from: {
            month: "August",
            year: 2024
        }
    }

] as Array<ExperienceInterface>;

export default experiences;