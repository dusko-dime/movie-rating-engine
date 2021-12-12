import {Movie, Type} from './structure';

let movieDB: Movie[] = [
    {
        title: 'Forrest Gump',
        cast: [
            {
                firstName: 'Tom',
                lastName: 'Hanks'
            },
            {
                firstName: 'Robin',
                lastName: 'Wright'
            },
            {
                firstName: 'Gary',
                lastName: 'Sinise'
            }
        ],
        ratings: [],
        releaseDate: new Date(1994, 4, 16),
        coverImage: 'https://upload.wikimedia.org/wikipedia/sr/9/95/Forrest_Gump_DVD.jpg',
        description: 'The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.',
        averageRating: 4.9,
        totalNumberOfRatings: 243,
        type: Type.MOVIE
    },
    {
        title: 'The Hobbit: An Unexpected Journey',
        cast: [
            {
                firstName: 'Martin',
                lastName: 'Freeman'
            },
            {
                firstName: 'Ian',
                lastName: 'McKellen'
            },
            {
                firstName: 'Richard',
                lastName: 'Armitage'
            }
        ],
        ratings: [],
        releaseDate: new Date(2012, 5, 11),
        coverImage: 'https://m.media-amazon.com/images/M/MV5BMTYzNDE3OTQ3MF5BMl5BanBnXkFtZTgwODczMTg4MjE@._V1_.jpg',
        description: 'A reluctant Hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home, and the gold within it from the dragon Smaug.',
        averageRating: 4.7,
        totalNumberOfRatings: 363,
        type: Type.MOVIE
    },
    {
        title: 'The Shawshank Redemption',
        cast: [
            {
                firstName: 'Tim',
                lastName: 'Robins'
            },
            {
                firstName: 'Morgan',
                lastName: 'Freeman'
            },
            {
                firstName: 'Bob',
                lastName: 'Gunton'
            }
        ],
        ratings: [],
        releaseDate: new Date(2012, 5, 11),
        coverImage: 'https://upload.wikimedia.org/wikipedia/sr/c/cb/The_Shawshank_Redemption.jpg',
        description: 'A reluctant Hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home, and the gold within it from the dragon Smaug.',
        averageRating: 4.6,
        totalNumberOfRatings: 1213,
        type: Type.MOVIE
    },
    {
        title: 'The Godfather: Part II',
        cast: [
            {
                firstName: 'Al',
                lastName: 'Pacino'
            },
            {
                firstName: 'Robert',
                lastName: 'De Niro'
            },
            {
                firstName: 'Robert',
                lastName: 'Duvall'
            },
            {
                firstName: 'Diane',
                lastName: 'Keaton'
            }
        ],
        ratings: [],
        releaseDate: new Date(1974, 10, 21),
        coverImage: 'https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
        description: 'The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.',
        averageRating: 4.6,
        totalNumberOfRatings: 5801,
        type: Type.MOVIE
    },
    {
        title: 'The Godfather',
        cast: [
            {
                firstName: 'Marlon',
                lastName: 'Brando'
            },
            {
                firstName: 'Al',
                lastName: 'Pacino'
            },
            {
                firstName: 'James',
                lastName: 'Caan'
            }
        ],
        ratings: [],
        releaseDate: new Date(1972, 2, 2),
        coverImage: 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
        description: 'The Godfather follows Vito Corleone, Don of the Corleone family, as he passes the mantel to his unwilling son, Michael.',
        averageRating: 4.2,
        totalNumberOfRatings: 60012,
        type: Type.MOVIE
    },
    {
        title: 'The Dark Knight',
        cast: [
            {
                firstName: 'Christian',
                lastName: 'Bale'
            },
            {
                firstName: 'Heath',
                lastName: 'Ledger'
            },
            {
                firstName: 'Aaron',
                lastName: 'Eckhart'
            },
            {
                firstName: 'Michael',
                lastName: 'Caine'
            }
        ],
        ratings: [],
        releaseDate: new Date(2008, 1, 2),
        coverImage: 'https://m.media-amazon.com/images/I/91KkWf50SoL._SY445_.jpg',
        description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
        averageRating: 3.9,
        totalNumberOfRatings: 8005,
        type: Type.MOVIE
    },
    {
        title: 'Fight Club',
        cast: [
            {
                firstName: 'Brad',
                lastName: 'Pitt'
            },
            {
                firstName: 'Edward',
                lastName: 'Norton'
            },
            {
                firstName: 'Meat',
                lastName: 'Loaf'
            }
        ],
        ratings: [],
        releaseDate: new Date(1999, 5, 7),
        coverImage: 'https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg',
        description: 'An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.',
        averageRating: 4.5,
        totalNumberOfRatings: 5420,
        type: Type.MOVIE
    },
    {
        title: '12 Angry Men',
        cast: [
            {
                firstName: 'Henry',
                lastName: 'Fonda'
            },
            {
                firstName: 'Lee',
                lastName: 'J. Cobb'
            },
        ],
        ratings: [],
        releaseDate: new Date(1957, 8, 24),
        coverImage: 'https://m.media-amazon.com/images/I/81LX+JlavLL._AC_SY679_.jpg',
        description: 'The jury in a New York City murder trial is frustrated by a single member whose skeptical caution forces them to more carefully consider the evidence before jumping to a hasty verdict.',
        averageRating: 4.8,
        totalNumberOfRatings: 109,
        type: Type.MOVIE
    },
    {
        title: 'Pulp Fiction',
        cast: [
            {
                firstName: 'John',
                lastName: 'Travolta'
            },
            {
                firstName: 'Uma',
                lastName: 'Thurman'
            },
            {
                firstName: 'Samuel',
                lastName: 'L. Jackson'
            }
        ],
        ratings: [],
        releaseDate: new Date(1994, 11, 30),
        coverImage: 'http://dobarfilm.rs/img/filmovi/petparacke-price.jpg',
        description: 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
        averageRating: 3.8,
        totalNumberOfRatings: 6904,
        type: Type.MOVIE
    },
    {
        title: 'Schindler\'s List',
        cast: [
            {
                firstName: 'Liam',
                lastName: 'Neeson'
            },
            {
                firstName: 'Ralph',
                lastName: 'Fiennes'
            },
            {
                firstName: 'Ben',
                lastName: 'Kingsley'
            }
        ],
        ratings: [],
        releaseDate: new Date(1993, 5, 19),
        coverImage: 'https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg',
        description: 'In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.',
        averageRating: 4,
        totalNumberOfRatings: 9804,
        type: Type.MOVIE
    },
    {
        title: 'The Lord of the Rings: The Return of the King',
        cast: [
            {
                firstName: 'Elijah',
                lastName: 'Wood'
            },
            {
                firstName: 'Viggo',
                lastName: 'Mortensen'
            },
            {
                firstName: 'Ian',
                lastName: 'McKellen'
            }
        ],
        ratings: [],
        releaseDate: new Date(2003, 12, 1),
        coverImage: 'https://m.media-amazon.com/images/I/51ILUdMuieL._AC_SY445_.jpg',
        description: 'Gandalf and Aragorn lead the World of Men against Sauron\'s army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.',
        averageRating: 4.2,
        totalNumberOfRatings: 20687,
        type: Type.MOVIE
    },
    {
        title: 'The Good, the Bad and the Ugly',
        cast: [
            {
                firstName: 'Clint',
                lastName: 'Eastwood'
            },
            {
                firstName: 'Eli',
                lastName: 'Wallach'
            }
        ],
        ratings: [],
        releaseDate: new Date(1966, 7, 1),
        coverImage: 'https://images0.persgroep.net/rcs/yYmINRIB7X7B85a7Lh4xXPS5L9o/diocontent/131078578/_crop/0/0/317/450/_fitwidth/763?appId=93a17a8fd81db0de025c8abd1cca1279&quality=0.8',
        description: 'A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.',
        averageRating: 4.1,
        totalNumberOfRatings: 15430,
        type: Type.MOVIE
    },
    {
        title: 'How I Met Your Mother',
        cast: [
            {
                firstName: 'Josh',
                lastName: 'Radnor'
            },
            {
                firstName: 'Jason',
                lastName: 'Segel'
            },
            {
                firstName: 'Cobie',
                lastName: 'Smulders'
            }
        ],
        ratings: [],
        releaseDate: new Date(2005, 7, 1),
        coverImage: 'https://m.media-amazon.com/images/M/MV5BNjg1MDQ5MjQ2N15BMl5BanBnXkFtZTYwNjI5NjA3._V1_FMjpg_UX1000_.jpg',
        description: 'A father recounts to his children - through a series of flashbacks - the journey he and his four best friends took leading up to him meeting their mother.',
        averageRating: 4.8,
        totalNumberOfRatings: 1302,
        type: Type.SHOW
    },
    {
        title: 'The Big Bang Theory',
        cast: [
            {
                firstName: 'Johnny',
                lastName: 'Galecki'
            },
            {
                firstName: 'Jim',
                lastName: 'Parsons'
            }
        ],
        ratings: [],
        releaseDate: new Date(2007, 9, 4),
        coverImage: 'https://cdn.europosters.eu/image/1300/art-photo/the-big-bang-theory-crew-i106240.jpg',
        description: 'A woman who moves into an apartment across the hall from two brilliant but socially awkward physicists shows them how little they know about life outside of the laboratory.',
        averageRating: 4.7,
        totalNumberOfRatings: 942,
        type: Type.SHOW
    },
    {
        title: 'Only Fools and Horses',
        cast: [
            {
                firstName: 'David',
                lastName: 'Jason'
            },
            {
                firstName: 'Nicholas',
                lastName: 'Lyndhurst'
            }
        ],
        ratings: [],
        releaseDate: new Date(1981, 2, 12),
        coverImage: 'https://m.media-amazon.com/images/M/MV5BYmI1NGIwNzYtOTVlMS00ZGYwLWE0ZTktYzVmMGVlMmRmN2QxXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg',
        description: 'Comedy that follows two brothers from London\'s rough Peckham estate as they wheel and deal through a number of dodgy deals and search for the big score that\'ll make them millionaires.',
        averageRating: 4.3,
        totalNumberOfRatings: 291,
        type: Type.SHOW
    }
]

export default movieDB;
