function pretty(arg: string | number): string | number {
    if (typeof arg === 'number') {
        return arg.toFixed(2);
    }
    else {
        return arg.trim();
    }
};

class SuccessResponce {
    headres: string[];
    body: string;
}

class ErrorResponce {
    headres: string[];
    code: number;
}

function handleResponce (responce : SuccessResponce | ErrorResponce) : {message: string | number}{
    if(responce instanceof SuccessResponce){
        return {message: responce.body};
    }
    else{
        return{message: responce.code};
    }
}