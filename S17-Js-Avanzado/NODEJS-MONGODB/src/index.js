const express = require ("express");
const mongoose = require ("mongoose");
require ("dotenv").config();
const clientRoutes = require("./routes/cliente");
const cors = require("cors")

const app = express();
const port = process.env.PORT || 9000;

// //middleware
app.use(express.json());
app.use(cors());
app.use('/api', clientRoutes);

// routes
app.get("/", (req, res) => {
    res.send("Welcome to my API");
});

// // mongodb connection
mongoose.set("strictQuery", true);

mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log("Connected to MongoDB Atlas"))
.catch((error) => console.error(error));

app.listen(port, () =>
    console.log("El servidor está escuchando en", port)
);