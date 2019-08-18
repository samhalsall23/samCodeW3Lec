//go back to 40min in to see github part, that is missing


let express = require ('express'); // package from a third party

let app = express();

app.get("/", function (req, res){
    res.send("Hello express app");
});

app.get("/wiki/:keyword/fit2095/:id",function (req, res){ // colon means you are telling express anything after wiki is a parameter
    console.log(req.url); // /wiki/space/fit2095/123
    console.log(req.params); // { keyword: 'space', id: '123' }
    
});

app.get("/report", function (req, res){
    console.log(req.url); //   /report?name=Tim&age=63&address=Mel
    console.log(req.query); //  { name: 'Tim', age: '63', address: 'Mel' }

    console.log("the name is " + req.query.name);
    console.log("the age is " + req.query.age);

    
});


app.get("/about", function (req, res){
    res.send("About page");
});
app.get("/contactus", function (req, res){
    res.send("Contact Us page");
});

app.post("/calc", function (req, res){
    // your logic

}); //get executed if post request arrives



app.listen(8000);





// let http = require ('http');

// http.createServer(function (res, req){

//     if (req.method === "GET"){
//         // handle Get
//         if (req.url ==="/"){
//             //send back homepage
//         } else if (req.url === "/about"){
//             // send about page
//         }
//     } else if (req.method === "POST"){
//         // handle Post
//     }

// }).listen(8000)

