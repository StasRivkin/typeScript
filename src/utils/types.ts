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

export interface navItemsType {
    item: {
        title: string,
        route: string,
    },
    hero?: string,  // не понял почему он должен здесь быть, при его отсутсвии дает ошибку в компоненте Navigation.tsx -
                    // Type '{ key: string; item: { title: string; route: string; }; hero: string | undefined; }' 
                    // is not assignable to type 'IntrinsicAttributes & navItemsType'.
                    //   Property 'hero' does not exist on type 'IntrinsicAttributes & navItemsType'.ts(2322)
    
}

export interface Props {
    changeHero?: (hero: string) => void;
    hero?: string,
    currentHero?: string,
}