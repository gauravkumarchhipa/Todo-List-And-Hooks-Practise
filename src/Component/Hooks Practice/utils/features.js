export const checkAvailability=()=>{
    console.log("checking")
    return Math.random < 0.5;
}


export const generateId = ()=>{
    const str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    console.log("Generating")
    let result = "";
    for (let i=0; i<35; i++){
        const randomNumber = ~~(Math.random() * 52);
        result += str[randomNumber]
    }
    return result;
}