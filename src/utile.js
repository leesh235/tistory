export const isAuthenticated = request => {
    console.log("1");
    console.log("7");
    console.log("7",!request.user);
    if(!request.user){
        console.log("21");
        throw Error("You need to log in to perform this action.");
    }
}

export const generatedPassword = (password) => {

}

// export const generatedPassword = (password) => {
    
// }

// export const generatedPassword = (password) => {
    
// }