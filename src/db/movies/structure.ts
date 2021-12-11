export enum Type {
    MOVIE = 'Movie',
    SHOW = 'TVShow'
}

export interface Movie {
    title: string;
    coverImage: string;
    description: string;
    releaseDate: Date;
    cast: Actor[],
    ratings?: Rating[],
    averageRating: number,
    type: Type
}

export interface Rating {
    stars: number;
    createdAt: Date;
}

export interface Actor {
    firstName: string;
    lastName: string;
}