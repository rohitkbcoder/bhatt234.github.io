const express = require("express");
const app = express();
const fs = require("fs")
const path = require("path")
const bodyparser = require("body-parser")
const port = 80;
const formidable = require("formidable")
const contacts = require("./modules/Contact")
const nodemailers = require("./modules/nodemailers");
//EXPRESS RELATED STUFF 
app.use('/static', express.static('static'))
app.use(express.urlencoded())
//  pug specific stuff
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));// setting up pug in the directory

// endpoints
app.get("/", (req, res) => {
    var params = {
        title: "Home.techasr"

    }
    res.status(200).render("home.pug", params);

})

app.get("/news", (req, res) => {
    var params = {
        title: "Latest News"
    }
    res.status(200).render("news.pug", params);
})

app.get("/blog", (req, res) => {
    var params = {
        title: "Blogs"
    }

    res.status(200).render("blog.pug", params )
}
)

app.get("/contact", (req, res) => {
    var params = { title: "Contact us " }



    res.status(200).render("contact.pug", params);
})

app.post("/contact", (req, res) => {

    var mydata = new contacts(req.body);
    mydata.save().then(() => {
        res.send(`
        <html>
        <head>
        <title>
        Your form has been submitted
        </title>
        </head>
        <body>
        Your form has been submitted
        go back to  <a href="/"> home page </a> 
        </body>
        </html>
        `)
    }).catch(() => {
        res.status(400).send("item cannot be send")
    })
})

app.get("/get-data", (req, res) => {
    contacts.findOne({ name: "rohit" }, (err, contacts) => {

        if (err) {
            console.log(err);
        }
        else if (contacts == null) {
            res.send("there is no data")
        }
        else {
            console.log(contacts);
            res.send(contacts)
        }

        // res.status(200).render("home.pug",username02)         })
    })
})

app.post("/post-file", (req, res) => {
    var form = new formidable.IncomingForm()
    form.parse(req)
    form.on("fileBegin", (name, file) => {
        file.path = __dirname + "/uploads/" + file.name
        res.send("your file has been uploaded")
    })
    form.on('file', (name, file) => {
        console.log('uploaded file =' + file.name);
    })
})
app.post("/send-mail", () => {
    nodemailers()
})


app.get("*", (req, res) => {
    res.status(404).send("sorry your url may be wrong ");
})


// server setup 
app.listen(port, () => {
    console.log(`this is the url ${port}`);
})

//hello my name is rohit mar AND iam a great webdeveloper i am working on fiverr and has 90 yeas
const otp = require("./modules/random")
console.log(otp);



