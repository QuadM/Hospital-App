const express = require("express");
const path = require("path");
const cors = require("cors");
const morgan = require("morgan");
const app = express();

// hours that the check the unverified users
// require("dotenv").config();

// connect to DB
// parse the body of the request
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api", express.static(__dirname + "/doc"));
app.use(express.static(path.join(__dirname, "client/build")));

//enable cors
app.use(cors());

// Morgen middleware for logging the requests
app.use(morgan(":method :url :status "));

if (process.env.NODE_ENV === "production") {
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build/index.html"));
  });
}

// listen to specific port
const port = process.env.PORT || 4000;

let Server = app.listen(port, (err) => {
  if (err) return console.log(err);
  console.log(`Listening to port ${port}`);
  console.log(`Frontend Host: ${process.env.FRONT_HOST}`);
});

// DB conpansation
let homeinfo = {
  slogan: "Q Clinics slogan",
  departments: [
    {
      name: "department1",
      doctors: [
        { name: "doctor1" },
        { name: "doctor2" },
        { name: "doctor3" },
        { name: "doctor4" },
      ],
    },
    {
      name: "department2",
      doctors: [
        { name: "doctor1" },
        { name: "doctor2" },
        { name: "doctor3" },
        { name: "doctor4" },
      ],
    },
    {
      name: "department3",
      doctors: [
        { name: "doctor1" },
        { name: "doctor2" },
        { name: "doctor3" },
        { name: "doctor4" },
      ],
    },
    {
      name: "department4",
      doctors: [
        { name: "doctor1" },
        { name: "doctor2" },
        { name: "doctor3" },
        { name: "doctor4" },
      ],
    },
  ],
};

let doctors = [
  {
    name: "doctor1",
    bio: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
    reservations: [],
  },
  {
    name: "doctor2",
    bio: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
    reservations: [],
  },
  {
    name: "doctor3",
    bio: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
    reservations: [],
  },
  {
    name: "doctor4",
    bio: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
    reservations: [],
  },
];

app.get("/", (req, res) => {
  res.send(homeinfo);
});

app.get("/about/:name", (req, res) => {
  const name = req.params.name;
  const doctor = doctors.find((e) => e.name === name);
  res.send(doctor);
});

app.post("/reserve", (req, res) => {
  console.log(req.body);
  const doctorName = req.body.name;
  const reservation = req.body.reservation;
  console.log(doctors.find((d) => d.name === doctorName));
  if (!doctors.find((d) => d.name === doctorName)) res.sendStatus(404);
  doctors.map((doctor) => {
    if (doctor.name === doctorName) doctor.reservations.push(reservation);
  });
  res.send("success");
});
