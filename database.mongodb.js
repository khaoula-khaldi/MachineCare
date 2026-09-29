use("machinecare");

db.createCollection("users");
db.createCollection("ateliers");
db.createCollection("machines");
db.createCollection("signalements");

db.users.find();
