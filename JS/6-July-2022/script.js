const studentsList = [
  {
    id: 1,
    first_name: "Howie",
    last_name: "Headey",
    email: "hheadey0@goo.ne.jp",
    gender: "Male",
  },
  {
    id: 2,
    first_name: "Isahella",
    last_name: "Kellock",
    email: "ikellock1@51.la",
    gender: "Female",
  },
  {
    id: 3,
    first_name: "Isa",
    last_name: "Peterkin",
    email: "ipeterkin2@senate.gov",
    gender: "Male",
  },
  {
    id: 4,
    first_name: "Alick",
    last_name: "Caldecourt",
    email: "acaldecourt3@alexa.com",
    gender: "Male",
  },
  {
    id: 5,
    first_name: "Godart",
    last_name: "Terrett",
    email: "gterrett4@lulu.com",
    gender: "Male",
  },
  {
    id: 6,
    first_name: "Thedrick",
    last_name: "Hegel",
    email: "thegel5@sina.com.cn",
    gender: "Male",
  },
  {
    id: 7,
    first_name: "Garth",
    last_name: "Adao",
    email: "gadao6@youku.com",
    gender: "Male",
  },
  {
    id: 8,
    first_name: "Ericka",
    last_name: "MacConnel",
    email: "emacconnel7@addthis.com",
    gender: "Female",
  },
  {
    id: 9,
    first_name: "Kendall",
    last_name: "Woolfall",
    email: "kwoolfall8@mtv.com",
    gender: "Male",
  },
  {
    id: 10,
    first_name: "Zebedee",
    last_name: "Callingham",
    email: "zcallingham9@state.gov",
    gender: "Male",
  },
  {
    id: 11,
    first_name: "Calypso",
    last_name: "Bowering",
    email: "cboweringa@usatoday.com",
    gender: "Female",
  },
  {
    id: 12,
    first_name: "Sig",
    last_name: "Keenan",
    email: "skeenanb@free.fr",
    gender: "Male",
  },
  {
    id: 13,
    first_name: "Hermine",
    last_name: "Stoak",
    email: "hstoakc@dion.ne.jp",
    gender: "Female",
  },
  {
    id: 14,
    first_name: "Jason",
    last_name: "Dumini",
    email: "jduminid@newsvine.com",
    gender: "Male",
  },
  {
    id: 15,
    first_name: "Hammad",
    last_name: "Laviste",
    email: "hlavistee@xrea.com",
    gender: "Male",
  },
  {
    id: 16,
    first_name: "Bentley",
    last_name: "Raatz",
    email: "braatzf@zimbio.com",
    gender: "Genderfluid",
  },
  {
    id: 17,
    first_name: "Oswell",
    last_name: "Venner",
    email: "ovennerg@nydailynews.com",
    gender: "Male",
  },
  {
    id: 18,
    first_name: "Ericka",
    last_name: "Cavet",
    email: "ecaveth@cnet.com",
    gender: "Female",
  },
  {
    id: 19,
    first_name: "Les",
    last_name: "Boarder",
    email: "lboarderi@narod.ru",
    gender: "Male",
  },
  {
    id: 20,
    first_name: "Celestine",
    last_name: "Nolli",
    email: "cnollij@bravesites.com",
    gender: "Female",
  },
  {
    id: 21,
    first_name: "Eveleen",
    last_name: "Gasquoine",
    email: "egasquoinek@redcross.org",
    gender: "Female",
  },
  {
    id: 22,
    first_name: "Pennie",
    last_name: "Breitler",
    email: "pbreitlerl@dropbox.com",
    gender: "Female",
  },
  {
    id: 23,
    first_name: "Cad",
    last_name: "Ranshaw",
    email: "cranshawm@nytimes.com",
    gender: "Male",
  },
  {
    id: 24,
    first_name: "Michel",
    last_name: "Blackater",
    email: "mblackatern@symantec.com",
    gender: "Female",
  },
  {
    id: 25,
    first_name: "Winslow",
    last_name: "McIndoe",
    email: "wmcindoeo@state.tx.us",
    gender: "Male",
  },
  {
    id: 26,
    first_name: "Alexine",
    last_name: "MacKnight",
    email: "amacknightp@mac.com",
    gender: "Female",
  },
  {
    id: 27,
    first_name: "Hurley",
    last_name: "Narbett",
    email: "hnarbettq@shareasale.com",
    gender: "Male",
  },
  {
    id: 28,
    first_name: "Cherish",
    last_name: "Lovemore",
    email: "clovemorer@vinaora.com",
    gender: "Female",
  },
  {
    id: 29,
    first_name: "Tommy",
    last_name: "Bulpitt",
    email: "tbulpitts@shop-pro.jp",
    gender: "Male",
  },
  {
    id: 30,
    first_name: "Broderick",
    last_name: "Goldin",
    email: "bgoldint@comsenz.com",
    gender: "Male",
  },
  {
    id: 31,
    first_name: "Sly",
    last_name: "Rattenbury",
    email: "srattenburyu@1und1.de",
    gender: "Male",
  },
  {
    id: 32,
    first_name: "Innis",
    last_name: "Bomfield",
    email: "ibomfieldv@thetimes.co.uk",
    gender: "Male",
  },
  {
    id: 33,
    first_name: "Vivi",
    last_name: "Figures",
    email: "vfiguresw@mayoclinic.com",
    gender: "Female",
  },
  {
    id: 34,
    first_name: "Beau",
    last_name: "Morin",
    email: "bmorinx@epa.gov",
    gender: "Bigender",
  },
  {
    id: 35,
    first_name: "Liz",
    last_name: "Munden",
    email: "lmundeny@ow.ly",
    gender: "Female",
  },
  {
    id: 36,
    first_name: "Mill",
    last_name: "Ridgley",
    email: "mridgleyz@chronoengine.com",
    gender: "Male",
  },
  {
    id: 37,
    first_name: "Reagan",
    last_name: "Myrie",
    email: "rmyrie10@tiny.cc",
    gender: "Male",
  },
  {
    id: 38,
    first_name: "Allan",
    last_name: "Childes",
    email: "achildes11@last.fm",
    gender: "Male",
  },
  {
    id: 39,
    first_name: "Maury",
    last_name: "Buckney",
    email: "mbuckney12@dedecms.com",
    gender: "Male",
  },
  {
    id: 40,
    first_name: "Arlene",
    last_name: "Camacho",
    email: "acamacho13@flavors.me",
    gender: "Non-binary",
  },
  {
    id: 41,
    first_name: "Chaddie",
    last_name: "Vayro",
    email: "cvayro14@netvibes.com",
    gender: "Male",
  },
  {
    id: 42,
    first_name: "Sayres",
    last_name: "Corney",
    email: "scorney15@phoca.cz",
    gender: "Male",
  },
  {
    id: 43,
    first_name: "Perry",
    last_name: "Shoveller",
    email: "pshoveller16@exblog.jp",
    gender: "Bigender",
  },
  {
    id: 44,
    first_name: "Kacey",
    last_name: "Anglin",
    email: "kanglin17@pbs.org",
    gender: "Female",
  },
  {
    id: 45,
    first_name: "Henrietta",
    last_name: "De Giorgis",
    email: "hdegiorgis18@icio.us",
    gender: "Female",
  },
  {
    id: 46,
    first_name: "Cyndia",
    last_name: "Jankiewicz",
    email: "cjankiewicz19@samsung.com",
    gender: "Genderqueer",
  },
  {
    id: 47,
    first_name: "Vilhelmina",
    last_name: "O'Brogan",
    email: "vobrogan1a@opera.com",
    gender: "Female",
  },
  {
    id: 48,
    first_name: "Barbara",
    last_name: "Redman",
    email: "bredman1b@state.gov",
    gender: "Female",
  },
  {
    id: 49,
    first_name: "Luciana",
    last_name: "Girogetti",
    email: "lgirogetti1c@google.ru",
    gender: "Genderfluid",
  },
  {
    id: 50,
    first_name: "Wallis",
    last_name: "Okey",
    email: "wokey1d@tuttocitta.it",
    gender: "Female",
  },
];

// TODO : Create a load more feature in table and load data in bunch of 10 items
// TODO : Create a pagination
// TODO : Search in all table columns

$(document).ready(function () {
  const tbody = document.getElementById("tableBody");
  const searchInput = document.getElementById("searchInput");

  function createTableRow(studentObject) {
    const tr = document.createElement("tr");

    const enrollmentTd = document.createElement("td");
    enrollmentTd.innerText = studentObject.id;

    const fNameTd = document.createElement("td");
    fNameTd.innerText = studentObject.first_name;

    const lNameTd = document.createElement("td");
    lNameTd.innerText = studentObject.last_name;

    const emailTd = document.createElement("td");
    emailTd.innerText = studentObject.email;

    const genderTd = document.createElement("td");
    genderTd.innerText = studentObject.gender;

    tr.append(enrollmentTd, fNameTd, lNameTd, emailTd, genderTd);

    return tr;
  }

  function filterTable(searchKey) {
    if (searchKey.length >= 3) {
      tbody.innerHTML = "";

      for (let counter = 0; counter < studentsList.length; counter++) {
        const currentRecord = studentsList[counter];

        //   if (searchKey.toLowerCase() === currentRecord.first_name.toLowerCase()) {
        if (
          currentRecord.first_name
            .toLowerCase()
            .includes(searchKey.toLowerCase()) ||
          currentRecord.last_name
            .toLowerCase()
            .includes(searchKey.toLowerCase())
        ) {
          const tr = createTableRow(currentRecord);
          tbody.append(tr);
        }
      }
    } else if (searchKey.length === 0) {
      tbody.innerHTML = "";
      for (let counter = 0; counter < studentsList.length; counter++) {
        const currentRecord = studentsList[counter];
        const tr = createTableRow(currentRecord);
        tbody.append(tr);
      }
    }
  }

  function onInputKeyUpHandler(e) {
    filterTable(e.target.value);
  }

  for (let counter = 0; counter < studentsList.length; counter++) {
    const currentRecord = studentsList[counter];
    const tr = createTableRow(currentRecord);
    tbody.append(tr);
  }

  searchInput.addEventListener("keyup", onInputKeyUpHandler);
});
