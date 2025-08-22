import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Victor',
    lastName:  'Agbeleye',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Data Engineer',
    // avatar:    '/Logo.png',
    avatar:    '/images/Victor.png',
    hero:      '/images/web_illustration_dark.gif',
    logo:      '/images/Logo.png',
    location:  'Europe/London',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: ['English', 'French', 'German']  // optional: Leave the array empty if you don't want to display languages 'Hindi', 'Spanish'
}

const newsletter = {
    display: true,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: <>I occasionally write about design, technology, and share thoughts on the intersection of creativity and engineering.</>
}

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/AgVicCodes',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/victoragbeleye/',
    },
    {
        name: 'X',
        icon: 'x',
        link: 'https://x.com/VictorAgbeleye',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:victoragbeleye@gmail.com',
    },
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    hero: `${person.hero}`,
    headline: <>Machine Learning Engineer and <br/>Software Developer</>,
    subline: <> I'm Victor, a Software developer (Web and App) 
                and an aspiring Machine Learning engineer currently working 
                as a full stack developer at <InlineCode>Elle's Bliss</InlineCode> while studying 
                at the <InlineCode>University Of Hertfordshire</InlineCode>, 
                formerly working as a backend developer and SQL 
                developer at <InlineCode>Technaunum</InlineCode>.
                In my free time, I enjoy music, sports and working on personal projects.</>
}

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: true
    },
    avatar: {
        display: true
    },
    calendar: {
        display: true,
        link: 'https://cal.com'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>Victor is a UK-based Software Developer and Data Engineer with a drive for transforming intricate data challenges into streamlined, impactful solutions. Victor’s expertise spans data pipeline development, database optimization, and the intersection of data engineering and cloud technology. Passionate about leveraging data to empower decision-making, he brings efficiency and innovation to every project.</>
    },
    work: {
        display: true, // set to false to hide this section
        title: 'Work Experience',
        experiences: [
            {
                company: 'Technaunum',
                timeframe: '2022 - 2023',
                role: 'Backend Deleveloper and SQL Developer',
                achievements: [
                    <>Enhanced Database Performance: Redesigned database structures and optimized SQL queries, improving data retrieval speed by 40% and reducing response times for key reports by 25%.</>,
                    <>Boosted Application Efficiency: Developed SQL queries, stored procedures, and triggers, supporting real-time data access across multiple applications and improving system reliability by 30%.</>,
                    <>Automated Data Workflows: Automated data cleaning and transformation using Python, reducing manual effort by 50% and increasing data readiness for analytics by 35%.</>,
                    <>Increased User Engagement: Built scalable web applications using React and Laravel, resulting in a 25% boost in user engagement and a 20% faster load time across platforms.</>,
                    <>Streamlined UX/UI Design: Designed and tested interactive prototypes using Adobe XD and Figma, reducing the design iteration cycle by 20% and enhancing client satisfaction.</>
                ],
                images: [ // optional: leave the array empty if you don't want to display images
                    {
                        src: '/images/projects/project-01/cover-01.jpg',
                        alt: 'Once UI Project',
                        width: 16,
                        height: 9
                    }
                ]
            }//,
            // {
            //     company: 'Creativ3',
            //     timeframe: '2018 - 2022',
            //     role: 'Lead Designer',
            //     achievements: [
            //         <>Developed a design system that unified the brand across multiple platforms, improving design consistency by 40%.</>,
            //         <>Led a cross-functional team to launch a new product line, contributing to a 15% increase in overall company revenue.</>
            //     ],
            //     images: [ ]
            // }
        ]
    },
    studies: {
        display: true, // set to false to hide this section
        title: 'Studies',
        institutions: [
            {
                name: 'University of Hertfordshire',
                description: <>Studied Data Science.</>,
            },
            {
                name: 'Redeemers University',
                description: <>Studied Industrial Mathematics.</>,
            }
        ]
    },
    technical: {
        display: true, // set to false to hide this section
        title: 'Technical skills',
        skills: [
            {
                title: 'Figma',
                description: <>Able to prototype in Figma with Once UI with unnatural speed.</>,
                images: [
                    {
                        src: '/images/projects/project-01/cover-02.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/project-01/cover-03.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            },
            {
                title: 'Next.js',
                description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
                images: [
                    {
                        src: '/images/projects/project-01/cover-04.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            }
        ]
    }
}

const blog = {
    label: 'Blog',
    title: 'Writing about design and tech...',
    description: `Read what ${person.name} has been up to recently`
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
}

const work = {
    label: 'Work',
    title: 'My projects',
    description: `Design and dev projects by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}

const gallery = {
    label: 'Gallery',
    title: 'My photo gallery',
    description: `A photo collection by ${person.name}`,
    // Images from https://pexels.com
    images: [
        { 
            src: '/images/gallery/img-01.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-02.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-03.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-04.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-05.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-06.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-07.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-08.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-09.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-10.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-11.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-12.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-13.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-14.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery };