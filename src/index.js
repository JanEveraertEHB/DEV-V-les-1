const app = require("./app.js")
const port = 3000;


console.log("hello world")

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});


