interface Club {
    name: string;
    logo: string;
    image: string;
    description: string;
    founded: string;
    stadium: string;
}

interface League {
    name: string;
    country: string;
    color: string;
    description: string;
    clubs: Club[];
}

export const leagues: League[] = [
    {
        name: "Premier League",
        country: "England",
        color: "from-purple-600 to-blue-600",
        description:
            "The most-watched football league in the world, featuring the highest level of competition and global superstars.",
        clubs: [
            {
                name: "Manchester City",
                logo: "https://plus.unsplash.com/premium_photo-1700830328095-26c5a1c053b8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8TWFuY2hlc3RlciUyMENpdHklMjBjbHViJTIwbG9nb3xlbnwwfHwwfHx8MA%3D%3D",
                image: "https://images.unsplash.com/photo-1661632359980-9896d88b9b7b?w=1200&q=100&fit=max&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RXRpaGFkJTIwU3RhZGl1bXxlbnwwfHwwfHx8MA%3D%3D",
                description:
                    "The reigning Premier League champions, known for their possession-based football and world-class squad depth.",
                founded: "1880",
                stadium: "Etihad Stadium",
            },
            {
                name: "Arsenal",
                logo: "https://images.unsplash.com/photo-1577223618563-3d858655ab86?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXJzZW5hbCUyMGxvZ298ZW58MHx8MHx8fDA%3D",
                image: "https://images.unsplash.com/photo-1563580853176-38535245e8b6?w=1200&q=100&fit=max&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXJzZW5hbCUyMHN0YWRpdW18ZW58MHx8MHx8fDA%3D",
                description:
                    "One of England's most successful clubs, famous for their attacking philosophy and youth development.",
                founded: "1886",
                stadium: "Emirates Stadium",
            },
            {
                name: "Liverpool",
                logo: "https://images.unsplash.com/photo-1745409927270-832516e44271?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGl2ZXJwb29sJTIwY2x1YiUyMGxvZ298ZW58MHx8MHx8fDA%3D",
                image: "https://images.unsplash.com/photo-1652804549883-520ef708d657?w=1200&q=100&fit=max&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGl2ZXJwb29sJTIwc3RhZGl1bXxlbnwwfHwwfHx8MA%3D%3D",
                description:
                    "European giants with a rich history, known for their passionate fanbase and high-intensity football.",
                founded: "1892",
                stadium: "Anfield",
            },
            {
                name: "Manchester United",
                logo: "https://images.unsplash.com/photo-1563382563342-db6825814fdc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TWFuY2hlc3RlciUyMFVuaXRlZCUyMGNsdWIlMjBsb2dvfGVufDB8fDB8fHww",
                image: "https://images.unsplash.com/photo-1605069580490-1474a6ef1908?w=1200&q=100&fit=max&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fE1hbmNoZXN0ZXIlMjBVbml0ZWQlMjAlMjBzdGFkaXVtfGVufDB8fDB8fHww",
                description:
                    "The most successful club in English football history with a global following and legendary status.",
                founded: "1878",
                stadium: "Old Trafford",
            },
        ],
    },
    {
        name: "La Liga",
        country: "Spain",
        color: "from-orange-500 to-red-600",
        description:
            "Spain's premier division, home to some of the world's greatest clubs and most technically gifted players.",
        clubs: [
            {
                name: "Real Madrid",
                logo: "https://cdn.freebiesupply.com/logos/large/2x/real-madrid-c-f-logo-png-transparent.png",
                image: "https://images.unsplash.com/photo-1522778034537-20a2486be803?w=1200&q=100&fit=max&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhbCUyMG1hZHJpZCUyMHN0YWRpdW18ZW58MHx8MHx8fDA%3D",
                description:
                    "The most successful club in European competition history, synonymous with galáctico signings and excellence.",
                founded: "1902",
                stadium: "Santiago Bernabéu",
            },
            {
                name: "FC Barcelona",
                logo: "https://cdn.freebiesupply.com/logos/large/2x/fc-barcelona-logo-png-transparent.png",
                image: "https://images7.alphacoders.com/120/1207282.jpg",
                description:
                    "Famous for their tiki-taka style and La Masia academy, producing some of football's greatest talents.",
                founded: "1899",
                stadium: "Camp Nou",
            },
            {
                name: "Atlético Madrid",
                logo: "https://1000logos.net/wp-content/uploads/2018/05/Atletico-Madrid-Logo.png",
                image: "https://images.unsplash.com/photo-1675684512606-a6333b7531fb?w=1200&q=100&fit=max&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8QXRsJUMzJUE5dGljbyUyME1hZHJpZHxlbnwwfHwwfHx8MA%3D%3D",
                description: "Known for their defensive solidity and fighting spirit under Diego Simeone's leadership.",
                founded: "1903",
                stadium: "Wanda Metropolitano",
            },
            {
                name: "Sevilla",
                logo: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/Sevilla_FC_logo.svg/1200px-Sevilla_FC_logo.svg.png",
                image: "https://www.socios.com/wp-content/uploads/2024/02/Sevilla-F.C-Stadium.jpg",
                description: "Europa League specialists with a strong tradition of developing and selling top talent.",
                founded: "1890",
                stadium: "Ramón Sánchez Pizjuán",
            },
        ],
    },
    {
        name: "Serie A",
        country: "Italy",
        color: "from-green-500 to-blue-500",
        description:
            "Italy's top flight, renowned for tactical sophistication and defensive excellence throughout its history.",
        clubs: [
            {
                name: "Juventus",
                logo: "",
                image: "https://images.unsplash.com/photo-1550591852-c88075851174?w=1920&q=100",
                description:
                    "The most successful club in Italian football, known for their winning mentality and star signings.",
                founded: "1897",
                stadium: "Allianz Stadium",
            },
            {
                name: "AC Milan",
                logo: "/logos/ac-milan.svg",
                image: "",
                description:
                    "Seven-time European Cup winners with a rich history of legendary players and memorable victories.",
                founded: "1899",
                stadium: "San Siro",
            },
            {
                name: "Inter Milan",
                logo: "/logos/inter-milan.svg",
                image: "https://media.gettyimages.com/id/1255335703/photo/choreography-of-fc-inter-supporters-at-san-siro-stadium-during-the-uefa-champions-league-semi.jpg?s=612x612&w=0&k=20&c=AaFxqoFG62L-nudETBGMllQ1c4GvRwdO4pfGU_02u0c=",
                description: "The Nerazzurri, known for their passionate fanbase and recent Serie A championship success.",
                founded: "1908",
                stadium: "San Siro",
            },
            {
                name: "Napoli",
                logo: "/logos/napoli.svg",
                image: "https://media.gettyimages.com/id/2216732094/photo/naples-italy-scott-mctominay-of-napoli-celebrates-scoring-his-teams-first-goal-during-the.jpg?s=612x612&w=0&k=20&c=xKA1vNxMMILxm_-Cz-jF1_JoTw85pf3cO-uyBcKijC8=",
                description: "Southern Italy's pride, famous for their attacking football and passionate supporters.",
                founded: "1926",
                stadium: "Stadio Diego Armando Maradona",
            },
        ],
    },
    {
        name: "Bundesliga",
        country: "Germany",
        color: "from-red-500 to-yellow-500",
        description: "Germany's top division, famous for its fan culture, competitive balance, and tactical innovation.",
        clubs: [
            {
                name: "Bayern Munich",
                logo: "/logos/bayern-munich.svg",
                image: "/stadiums/allianz-arena.jpg",
                description: "German football's dominant force, consistently competing at the highest level in Europe.",
                founded: "1900",
                stadium: "Allianz Arena",
            },
            {
                name: "Borussia Dortmund",
                logo: "/logos/borussia-dortmund.svg",
                image: "/stadiums/signal-iduna-park.jpg",
                description: "The Yellow Wall's home, known for developing young talent and electric atmosphere.",
                founded: "1909",
                stadium: "Signal Iduna Park",
            },
            {
                name: "RB Leipzig",
                logo: "/logos/rb-leipzig.svg",
                image: "/stadiums/red-bull-arena.jpg",
                description: "The modern success story of German football with innovative recruitment and tactics.",
                founded: "2009",
                stadium: "Red Bull Arena",
            },
            {
                name: "Bayer Leverkusen",
                logo: "/logos/bayer-leverkusen.svg",
                image: "/stadiums/bayarena.jpg",
                description: "Known for their attacking philosophy and ability to compete with Germany's elite clubs.",
                founded: "1904",
                stadium: "BayArena",
            },
        ],
    },
    {
        name: "Ligue 1",
        country: "France",
        color: "from-blue-600 to-indigo-600",
        description:
            "France's premier league, a breeding ground for world-class talent and home to PSG's star-studded squad.",
        clubs: [
            {
                name: "Paris Saint-Germain",
                logo: "/logos/psg.svg",
                image: "/stadiums/parc-des-princes.jpg",
                description:
                    "French giants with global superstars, dominating domestic football and pursuing European glory.",
                founded: "1970",
                stadium: "Parc des Princes",
            },
            {
                name: "Olympique Marseille",
                logo: "/logos/marseille.svg",
                image: "/stadiums/velodrome.jpg",
                description: "France's most passionate club with a rich European history and devoted fanbase.",
                founded: "1899",
                stadium: "Orange Vélodrome",
            },
            {
                name: "AS Monaco",
                logo: "/logos/monaco.svg",
                image: "/stadiums/stade-louis-ii.jpg",
                description: "The principality's club, famous for developing young talents who become global superstars.",
                founded: "1924",
                stadium: "Stade Louis II",
            },
            {
                name: "Olympique Lyon",
                logo: "/logos/lyon.svg",
                image: "/stadiums/groupama-stadium.jpg",
                description: "Former French champions known for their excellent academy and women's football dominance.",
                founded: "1950",
                stadium: "Groupama Stadium",
            },
        ],
    },
]