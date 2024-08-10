import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;


app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

var items = [];

app.get("/", (req, res) => {
  res.render("index.ejs", { items: items });
});

app.get('/about.ejs', (req, res) => {
    res.render('about.ejs');
});

app.get("/contact.ejs", (req, res) => {
    res.render('contact.ejs');
})

app.post("/submit", (req, res) => {
  const newItems = req.body.items;
  items.push(newItems);
  res.render("index.ejs", {
    items: items,
  });
});

app.post("/delete", (req, res) => {
    const index = req.body.index;
    items.splice(index, 1);
    res.render("index.ejs", { items: items })
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});  