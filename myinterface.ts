interface User {
    email: string,
    userId: number
}


const Veronica= async({email,userId}) => {
console.log(email,userId);
}



Veronica({1,
         1});