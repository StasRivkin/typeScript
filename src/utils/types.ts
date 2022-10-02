export interface charactersType {
    luke: {
        name: string,
        img: string,
        url: string,
    },
    c3po: {
        name: string,
        img: string,
        url: string,
    },
    r2d2: {
        name: string,
        img: string,
        url: string,
    },
    leia: {
        name: string,
        img: string,
        url: string,
    },
    obi_wan: {
        name: string,
        img: string,
        url: string,
    },
    chewbacca: {
        name: string,
        img: string,
        url: string,
    },
    han_solo: {
        name: string,
        img: string,
        url: string,
    },
    yoda: {
        name: string,
        img: string,
        url: string,
    },
    ewok: {
        name: string,
        img: string,
        url: string,
    },
    falcon: {
        name: string,
        img: string,
        url: string,
    },
}

export interface Props {
    changeHero?: (hero: string) => void;
    hero?: string,
    currentHero?: string,
    heroId?: string,
    friend?: string,
    number?:number,
    item?: {
        title: string,
        route: string,
    },
}