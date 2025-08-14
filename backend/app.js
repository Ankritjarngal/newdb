const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const tableRoutes = require("./routes/table.routes");
const dbroutes = require("./routes/datsbase.routes");
const relationsRoutes = require("./routes/relations.routes");

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.use("/tables", tableRoutes);
app.use("/databases",dbroutes);
app.use("/relations", relationsRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
