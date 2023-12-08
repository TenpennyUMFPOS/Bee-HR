const express = require("express");
const path = require('path');
require("dotenv").config();
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/images/', express.static(path.join(__dirname, 'static/images')))

const {
  sequelize,
  connectToDatabase,
} = require("./helpers/connect-to-database");
connectToDatabase();
// sequelize.sync({});

const permissionGroupControllers = require("./controllers/permission-group.controller");
const permissionControllers = require("./controllers/permission.controller");
const roleControllers = require("./controllers/role.controller");
const userControllers = require("./controllers/user.controller");

userControllers.initUserFromJsonFile().then(() => console.log);
permissionGroupControllers.insertPermissionGroupFromJsonFileIntoDatabase();
permissionControllers.insertPermissionsFromJsonFileIntoDatabase();
roleControllers.initAdminRoleFromJsonFile();

//const radAcctRoutes = require("./routes/radacct.routes");
const permissionGroupRoutes = require("./routes/permission-group.routes");
const roleRoutes = require("./routes/role.routes");
const userRoutes = require("./routes/user.routes");
const authRoutes = require("./routes/auth.routes");
//const firstConnexionRoutes = require("./routes/first-connexion.routes");
//const suspensionRoutes = require("./routes/suspension.routes");
//const reactivationRoutes = require("./routes/reactivation.routes");
//const lnsClientsRoutes = require("./routes/lns-clients.routes");
//const modemRoutes = require("./routes/modem.routes");
const profileRoutes = require('./routes/profile.routes');
//const customerRoutes = require('./routes/customer.routes');
//const historicRoutes = require('./routes/historic.routes');


//app.use("/api/radacct", radAcctRoutes);
app.use("/api/permissions", permissionGroupRoutes);
app.use("/api/role", roleRoutes);
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
//app.use("/api/first-connexion", firstConnexionRoutes);
//app.use("/api/suspension", suspensionRoutes);
//app.use("/api/reactivation", reactivationRoutes);
//app.use("/api/lns-clients", lnsClientsRoutes);
//app.use("/api/modem", modemRoutes);
app.use("/api/profile", profileRoutes);
//app.use("/api/customer", customerRoutes);
//app.use("/api/historic", historicRoutes);



app.listen(process.env.PORT, () => {
  console.log(`application running on port ${process.env.PORT}`);
});
