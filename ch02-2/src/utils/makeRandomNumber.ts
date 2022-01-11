let MAX_AGE = 100


export function makeRandomNumber(max: number = MAX_AGE):number{
    return Math.ceil((Math.random()*max))
}

//파일 만들기: touch 파일경로/파일명