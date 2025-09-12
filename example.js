console.log("srit");
let age=20;
console.log(age);
function generatewelcomeMessage(age){
    return "welcome" +age+"goodmrng"
}
let messeage=generatewelcomeMessage("age");
console.log(messeage);
let addage=age+2;
let subage=age-1;
console.log(addage);
console.log(subage);
let factorial=5;
for(let i=factorial-1;i>=1;i--){
    factorial=factorial*i;
}
console.log(factorial);
    let num1=10;
    let num2=5;
    let operations="+";
    function calculator(num1,num2,operations){

    if(operations=="+"){
        return num1+num2;
    }
    if (operations=="-"){
        return num1-num2;
    }
    if (operations=="*"){
        return num1*num2;
    }
    if (operations=="/"&& num2!=0){
        return num1/num2;
    }
    console.log(calculator(num1,num2,operations))
}
fetch("https://jsonplaceholder.typicode.com/users/")
.then(response => response.json())
.then(users => {
    let output = "";
    users.forEach(user => {
        output += `${user.name} - ${user.email}\n`;
    });
    console.log(output);
});
// ...existing code...
let j=5;
let i=1;
while(i<11){

console.log(j+"*"+i+"="+j*i);
i++;
}
let author = {
    name: "J.K. Rowling",
    age: 58,
    books: [
        {
            title: "Harry Potter and the Sorcerer's Stone",
            year: 1997,
            genre: "Fantasy"
        },
        {
            title: "Harry Potter and the Chamber of Secrets",
            year: 1998,
            genre: "Fantasy"
        },
        {
            title: "Harry Potter and the Prisoner of Azkaban",
            year: 1999,
            genre: "Fantasy"
        }
    ]
};
let authorJSON = JSON.stringify(author);
console.log("JSON String:", authorJSON);

let booksJsonString = '{"name":"George Orwell","age":46,"books":[{"title":"1984","year":1949,"genre":"Dystopian"},{"title":"Animal Farm","year":1945,"genre":"Political Satire"},{"title":"Homage to Catalonia","year":1938,"genre":"Memoir"}]}';
let parsedAuthor = JSON.parse(booksJsonString);
console.log("Parsed Object:", parsedAuthor);