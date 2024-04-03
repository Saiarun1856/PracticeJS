import  express  from "express";

const app = express();

// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })

app.get('/api/jokes', (req, res) => {
    const jokes= [{
        id:1,
        title:"A joke",
        content : "This is a joke"
    },
    {
        id:2,
        title:"B joke",
        content : "This is b joke"
    },
    {
        id:3,
        title:"C joke",
        content : "This is c joke"
    },]
    res.send(jokes)
});

  const port = process.env.PORT || 3000;

  app.listen(port, () => {
    console.log(`srever is running at ${port}`)
  });