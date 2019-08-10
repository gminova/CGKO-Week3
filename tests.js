const test = require("tape");
const functions = require("./functions");

test("Testing Tape is working with 1", function(t) {
  t.equal(1, 1, "One should equal one");
  t.end();
});

test("Testing function returns object with unique categories with count", function(t) {
  const actual = functions.categoriesIterator([
    {
      category: "other-theft",
      location_type: "Force",
      location: {
        latitude: "51.545363",
        street: {
          id: 968149,
          name: "On or near Petrol Station"
        },
        longitude: "-0.133277"
      },
      context: "",
      outcome_status: {
        category: "Investigation complete; no suspect identified",
        date: "2019-01"
      },
      persistent_id:
        "5715809a2dd29505023fc5ef60bad261f7b9d4b5bf1ba65419c3d97b3d2b3c3e",
      id: 71507119,
      location_subtype: "",
      month: "2019-01"
    },
    {
      category: "other-theft",
      location_type: "Force",
      location: {
        latitude: "51.545363",
        street: {
          id: 968149,
          name: "On or near Petrol Station"
        },
        longitude: "-0.133277"
      },
      context: "",
      outcome_status: {
        category: "Status update unavailable",
        date: "2019-05"
      },
      persistent_id:
        "6fb235a2831836f4045590af2bd935a42810fda78635fd9e2c79076f23b774d0",
      id: 71497714,
      location_subtype: "",
      month: "2019-01"
    }
  ]);
  const expected = { "other-theft": 2 };
  t.deepEqual(
    actual,
    expected,
    "Testing we get object with categories and count by category"
  );
  t.end();
});

test("Testing filter and count function for crimes", t => {
  const actual = functions.categoriesIterator([
    {
      category: "drugs",
      location_type: "Force",
      location: {
        latitude: "51.499502",
        street: {
          id: 953349,
          name: "On or near Buckingham Mews"
        },
        longitude: "-0.141245"
      },
      context: "",
      outcome_status: {
        category: "Local resolution",
        date: "2019-06"
      },
      persistent_id:
        "2561d33e5b086e612b1ea79296bcdfeab58bedda539f11167249231f5c6c5be6",
      id: 75336904,
      location_subtype: "",
      month: "2019-06"
    },
    {
      category: "other-theft",
      location_type: "Force",
      location: {
        latitude: "51.499502",
        street: {
          id: 953349,
          name: "On or near Buckingham Mews"
        },
        longitude: "-0.141245"
      },
      context: "",
      outcome_status: {
        category: "Under investigation",
        date: "2019-06"
      },
      persistent_id:
        "ee49a771a29cec122b34e5eee86699932d11da076fe52c46d25a7fc43a563dc8",
      id: 75320686,
      location_subtype: "",
      month: "2019-06"
    },
    {
      category: "other-theft",
      location_type: "Force",
      location: {
        latitude: "51.499502",
        street: {
          id: 953349,
          name: "On or near Buckingham Mews"
        },
        longitude: "-0.141245"
      },
      context: "",
      outcome_status: {
        category: "Under investigation",
        date: "2019-06"
      },
      persistent_id:
        "a370f2a2f4d530a4ea18793edc36cce157d2586bcb80961016302fef8ba5cd70",
      id: 75329399,
      location_subtype: "",
      month: "2019-06"
    },
    {
      category: "other-theft",
      location_type: "Force",
      location: {
        latitude: "51.499502",
        street: {
          id: 953349,
          name: "On or near Buckingham Mews"
        },
        longitude: "-0.141245"
      },
      context: "",
      outcome_status: {
        category: "Under investigation",
        date: "2019-06"
      },
      persistent_id:
        "dc0eca13d7e6ed361875d56625ce94522ccb7558aedf1d25300171a86d903478",
      id: 75304249,
      location_subtype: "",
      month: "2019-06"
    },
    {
      category: "other-theft",
      location_type: "Force",
      location: {
        latitude: "51.499502",
        street: {
          id: 953349,
          name: "On or near Buckingham Mews"
        },
        longitude: "-0.141245"
      },
      context: "",
      outcome_status: {
        category: "Under investigation",
        date: "2019-06"
      },
      persistent_id:
        "7cff0f15ed94ef986dc99965b7c8050235e7d077adef33ce573bcb83dc1294e8",
      id: 75319848,
      location_subtype: "",
      month: "2019-06"
    },
    {
      category: "other-theft",
      location_type: "Force",
      location: {
        latitude: "51.499502",
        street: {
          id: 953349,
          name: "On or near Buckingham Mews"
        },
        longitude: "-0.141245"
      },
      context: "",
      outcome_status: {
        category: "Under investigation",
        date: "2019-06"
      },
      persistent_id:
        "dc0eca13d7e6ed361875d56625ce94522ccb7558aedf1d25300171a86d903478",
      id: 75304247,
      location_subtype: "",
      month: "2019-06"
    },
    {
      category: "other-theft",
      location_type: "Force",
      location: {
        latitude: "51.499502",
        street: {
          id: 953349,
          name: "On or near Buckingham Mews"
        },
        longitude: "-0.141245"
      },
      context: "",
      outcome_status: {
        category: "Under investigation",
        date: "2019-06"
      },
      persistent_id:
        "420b12a674efdd731212f1295a3f166159d53c597e29bdd435b0d89699ed3e74",
      id: 75303609,
      location_subtype: "",
      month: "2019-06"
    },
    {
      category: "other-theft",
      location_type: "Force",
      location: {
        latitude: "51.499502",
        street: {
          id: 953349,
          name: "On or near Buckingham Mews"
        },
        longitude: "-0.141245"
      },
      context: "",
      outcome_status: {
        category: "Under investigation",
        date: "2019-06"
      },
      persistent_id:
        "630a235dd943644818074759cec1cc84d026a927e37f02accff1aedc17f2133a",
      id: 75305811,
      location_subtype: "",
      month: "2019-06"
    },
    {
      category: "other-theft",
      location_type: "Force",
      location: {
        latitude: "51.499502",
        street: {
          id: 953349,
          name: "On or near Buckingham Mews"
        },
        longitude: "-0.141245"
      },
      context: "",
      outcome_status: {
        category: "Under investigation",
        date: "2019-06"
      },
      persistent_id:
        "9276ff0ff0d8f4773a89e3f73367b1f99aeb8ce39338de9c548d08abc8eded56",
      id: 75347741,
      location_subtype: "",
      month: "2019-06"
    },
    {
      category: "other-theft",
      location_type: "Force",
      location: {
        latitude: "51.499502",
        street: {
          id: 953349,
          name: "On or near Buckingham Mews"
        },
        longitude: "-0.141245"
      },
      context: "",
      outcome_status: {
        category: "Under investigation",
        date: "2019-06"
      },
      persistent_id:
        "dc0eca13d7e6ed361875d56625ce94522ccb7558aedf1d25300171a86d903478",
      id: 75304248,
      location_subtype: "",
      month: "2019-06"
    },
    {
      category: "other-theft",
      location_type: "Force",
      location: {
        latitude: "51.499502",
        street: {
          id: 953349,
          name: "On or near Buckingham Mews"
        },
        longitude: "-0.141245"
      },
      context: "",
      outcome_status: {
        category: "Under investigation",
        date: "2019-06"
      },
      persistent_id:
        "dc0eca13d7e6ed361875d56625ce94522ccb7558aedf1d25300171a86d903478",
      id: 75304250,
      location_subtype: "",
      month: "2019-06"
    },
    {
      category: "other-theft",
      location_type: "Force",
      location: {
        latitude: "51.499502",
        street: {
          id: 953349,
          name: "On or near Buckingham Mews"
        },
        longitude: "-0.141245"
      },
      context: "",
      outcome_status: {
        category: "Under investigation",
        date: "2019-06"
      },
      persistent_id:
        "0f052338e237744d0b228aec27f7caeb0eb00830e2c78c02276ea2c398cab059",
      id: 75345747,
      location_subtype: "",
      month: "2019-06"
    },
    {
      category: "other-theft",
      location_type: "Force",
      location: {
        latitude: "51.499502",
        street: {
          id: 953349,
          name: "On or near Buckingham Mews"
        },
        longitude: "-0.141245"
      },
      context: "",
      outcome_status: {
        category: "Under investigation",
        date: "2019-06"
      },
      persistent_id:
        "f9e869525ed0d9a2bae90e19e91727f8e08c431a30476a677e5f022e29833617",
      id: 75333072,
      location_subtype: "",
      month: "2019-06"
    },
    {
      category: "other-theft",
      location_type: "Force",
      location: {
        latitude: "51.499502",
        street: {
          id: 953349,
          name: "On or near Buckingham Mews"
        },
        longitude: "-0.141245"
      },
      context: "",
      outcome_status: {
        category: "Under investigation",
        date: "2019-06"
      },
      persistent_id:
        "d6ea191fda6f562b9cb8418f802c8ddc49176fad4b1bc0179bcbb38a048b0266",
      id: 75315009,
      location_subtype: "",
      month: "2019-06"
    },
    {
      category: "other-theft",
      location_type: "Force",
      location: {
        latitude: "51.499502",
        street: {
          id: 953349,
          name: "On or near Buckingham Mews"
        },
        longitude: "-0.141245"
      },
      context: "",
      outcome_status: {
        category: "Under investigation",
        date: "2019-06"
      },
      persistent_id:
        "9d6035ebcfeda6165cda1c485ae1c1897618130c2f84601185a23ed5fccc88bc",
      id: 75284462,
      location_subtype: "",
      month: "2019-06"
    },
    {
      category: "other-theft",
      location_type: "Force",
      location: {
        latitude: "51.499502",
        street: {
          id: 953349,
          name: "On or near Buckingham Mews"
        },
        longitude: "-0.141245"
      },
      context: "",
      outcome_status: {
        category: "Under investigation",
        date: "2019-06"
      },
      persistent_id:
        "945ab3bc3deba94789acdb537a84b8a70df3204f5b6f8b1a4e9b8f02cf9fabd8",
      id: 75334030,
      location_subtype: "",
      month: "2019-06"
    },
    {
      category: "other-theft",
      location_type: "Force",
      location: {
        latitude: "51.499502",
        street: {
          id: 953349,
          name: "On or near Buckingham Mews"
        },
        longitude: "-0.141245"
      },
      context: "",
      outcome_status: {
        category: "Under investigation",
        date: "2019-06"
      },
      persistent_id:
        "a40fb6b50d82374df38fa50e488f35641665254d93316cb4be947e0bd08c4dc3",
      id: 75311580,
      location_subtype: "",
      month: "2019-06"
    },
    {
      category: "other-theft",
      location_type: "Force",
      location: {
        latitude: "51.499502",
        street: {
          id: 953349,
          name: "On or near Buckingham Mews"
        },
        longitude: "-0.141245"
      },
      context: "",
      outcome_status: {
        category: "Under investigation",
        date: "2019-06"
      },
      persistent_id:
        "3efae23858ef79121692804c585348896c0fef209c7fce31eb3e8b7de9e1a482",
      id: 75309142,
      location_subtype: "",
      month: "2019-06"
    },
    {
      category: "possession-of-weapons",
      location_type: "Force",
      location: {
        latitude: "51.499502",
        street: {
          id: 953349,
          name: "On or near Buckingham Mews"
        },
        longitude: "-0.141245"
      },
      context: "",
      outcome_status: {
        category: "Under investigation",
        date: "2019-06"
      },
      persistent_id:
        "6bf985834b79474cfb686d0c285a9cac005b419bcb29ad1acf0ff6ad1eae69ec",
      id: 75327031,
      location_subtype: "",
      month: "2019-06"
    },
    {
      category: "public-order",
      location_type: "Force",
      location: {
        latitude: "51.499502",
        street: {
          id: 953349,
          name: "On or near Buckingham Mews"
        },
        longitude: "-0.141245"
      },
      context: "",
      outcome_status: {
        category: "Under investigation",
        date: "2019-06"
      },
      persistent_id:
        "8cc310cc7595e3d31f556a2e90f4480f2d0131471ad35f914ecc440f03934f4a",
      id: 75312149,
      location_subtype: "",
      month: "2019-06"
    },
    {
      category: "robbery",
      location_type: "Force",
      location: {
        latitude: "51.499502",
        street: {
          id: 953349,
          name: "On or near Buckingham Mews"
        },
        longitude: "-0.141245"
      },
      context: "",
      outcome_status: {
        category: "Under investigation",
        date: "2019-06"
      },
      persistent_id:
        "775f30be403a3e16566112f6779f6b0e4946a68220608fe1f5ef1ddc8b95f509",
      id: 75343631,
      location_subtype: "",
      month: "2019-06"
    },
    {
      category: "robbery",
      location_type: "Force",
      location: {
        latitude: "51.499502",
        street: {
          id: 953349,
          name: "On or near Buckingham Mews"
        },
        longitude: "-0.141245"
      },
      context: "",
      outcome_status: {
        category: "Under investigation",
        date: "2019-06"
      },
      persistent_id:
        "e1cd132062612c09b2d097d8b62e1bc54eb7e5e98fa00d0d46f74b6b919845f3",
      id: 75327625,
      location_subtype: "",
      month: "2019-06"
    },
    {
      category: "theft-from-the-person",
      location_type: "Force",
      location: {
        latitude: "51.499502",
        street: {
          id: 953349,
          name: "On or near Buckingham Mews"
        },
        longitude: "-0.141245"
      },
      context: "",
      outcome_status: {
        category: "Under investigation",
        date: "2019-06"
      },
      persistent_id:
        "db29d528aed67aeabba01174f918e2a76d845c5c73a2704dbeb80aa2092056a2",
      id: 75347095,
      location_subtype: "",
      month: "2019-06"
    },
    {
      category: "theft-from-the-person",
      location_type: "Force",
      location: {
        latitude: "51.499502",
        street: {
          id: 953349,
          name: "On or near Buckingham Mews"
        },
        longitude: "-0.141245"
      },
      context: "",
      outcome_status: {
        category: "Under investigation",
        date: "2019-06"
      },
      persistent_id:
        "e4a5a3be8243ded53ac7e61141cac586d08bf5f61a8b802ef95343c552ffccce",
      id: 75310673,
      location_subtype: "",
      month: "2019-06"
    },
    {
      category: "theft-from-the-person",
      location_type: "Force",
      location: {
        latitude: "51.499502",
        street: {
          id: 953349,
          name: "On or near Buckingham Mews"
        },
        longitude: "-0.141245"
      },
      context: "",
      outcome_status: {
        category: "Under investigation",
        date: "2019-06"
      },
      persistent_id:
        "0229a383507acb3a9e94afcdd5facb7c45efe0de85f834a8d67fb3cc52c42545",
      id: 75310125,
      location_subtype: "",
      month: "2019-06"
    },
    {
      category: "theft-from-the-person",
      location_type: "Force",
      location: {
        latitude: "51.499502",
        street: {
          id: 953349,
          name: "On or near Buckingham Mews"
        },
        longitude: "-0.141245"
      },
      context: "",
      outcome_status: {
        category: "Under investigation",
        date: "2019-06"
      },
      persistent_id:
        "b0b2c8d463301fbebec7d6c9631d28472eb0260e1dba6ab3efb078f953f67b68",
      id: 75309486,
      location_subtype: "",
      month: "2019-06"
    },
    {
      category: "theft-from-the-person",
      location_type: "Force",
      location: {
        latitude: "51.499502",
        street: {
          id: 953349,
          name: "On or near Buckingham Mews"
        },
        longitude: "-0.141245"
      },
      context: "",
      outcome_status: {
        category: "Under investigation",
        date: "2019-06"
      },
      persistent_id:
        "f19a36fb74fe109a2333777dfe961c40ad04e8b4e6e009ab9fba5962db4f5dd9",
      id: 75324468,
      location_subtype: "",
      month: "2019-06"
    },
    {
      category: "theft-from-the-person",
      location_type: "Force",
      location: {
        latitude: "51.499502",
        street: {
          id: 953349,
          name: "On or near Buckingham Mews"
        },
        longitude: "-0.141245"
      },
      context: "",
      outcome_status: {
        category: "Under investigation",
        date: "2019-06"
      },
      persistent_id:
        "97d21b10b2df7357e4c320ee7127544154715ca932c3e604adccff12728356fd",
      id: 75324470,
      location_subtype: "",
      month: "2019-06"
    },
    {
      category: "theft-from-the-person",
      location_type: "Force",
      location: {
        latitude: "51.499502",
        street: {
          id: 953349,
          name: "On or near Buckingham Mews"
        },
        longitude: "-0.141245"
      },
      context: "",
      outcome_status: {
        category: "Under investigation",
        date: "2019-06"
      },
      persistent_id:
        "e3e2f493406677925180e29b71ea5ca5aecc212e7a6448ca97f277f527890b9e",
      id: 75348583,
      location_subtype: "",
      month: "2019-06"
    },
    {
      category: "theft-from-the-person",
      location_type: "Force",
      location: {
        latitude: "51.499502",
        street: {
          id: 953349,
          name: "On or near Buckingham Mews"
        },
        longitude: "-0.141245"
      },
      context: "",
      outcome_status: {
        category: "Under investigation",
        date: "2019-06"
      },
      persistent_id:
        "159d29a479381a2492537a246ed1da06c71da6b869b83fef29db8cc0ccfabfb7",
      id: 75346699,
      location_subtype: "",
      month: "2019-06"
    },
    {
      category: "theft-from-the-person",
      location_type: "Force",
      location: {
        latitude: "51.499502",
        street: {
          id: 953349,
          name: "On or near Buckingham Mews"
        },
        longitude: "-0.141245"
      },
      context: "",
      outcome_status: {
        category: "Under investigation",
        date: "2019-06"
      },
      persistent_id:
        "ecca63d816ef80c286423ad1b8241fee56130f05fc4c52b7bbfa7a7e84a97e88",
      id: 75343226,
      location_subtype: "",
      month: "2019-06"
    },
    {
      category: "theft-from-the-person",
      location_type: "Force",
      location: {
        latitude: "51.499502",
        street: {
          id: 953349,
          name: "On or near Buckingham Mews"
        },
        longitude: "-0.141245"
      },
      context: "",
      outcome_status: {
        category: "Under investigation",
        date: "2019-06"
      },
      persistent_id:
        "df55ea22ace148975360f0adea0f2e5c1127ac006a570a65da7f272feaf1baf9",
      id: 75343145,
      location_subtype: "",
      month: "2019-06"
    },
    {
      category: "theft-from-the-person",
      location_type: "Force",
      location: {
        latitude: "51.499502",
        street: {
          id: 953349,
          name: "On or near Buckingham Mews"
        },
        longitude: "-0.141245"
      },
      context: "",
      outcome_status: {
        category: "Under investigation",
        date: "2019-06"
      },
      persistent_id:
        "446cb631c289cb372777fbf7110a4c6b7b377be64dda71539a083a14133e7300",
      id: 75325737,
      location_subtype: "",
      month: "2019-06"
    },
    {
      category: "theft-from-the-person",
      location_type: "Force",
      location: {
        latitude: "51.499502",
        street: {
          id: 953349,
          name: "On or near Buckingham Mews"
        },
        longitude: "-0.141245"
      },
      context: "",
      outcome_status: {
        category: "Under investigation",
        date: "2019-06"
      },
      persistent_id:
        "0da8022c6310b7b4784af8355d22e3b4fbd38fae0a7886c1b2ca81fab54f1791",
      id: 75323521,
      location_subtype: "",
      month: "2019-06"
    },
    {
      category: "theft-from-the-person",
      location_type: "Force",
      location: {
        latitude: "51.499502",
        street: {
          id: 953349,
          name: "On or near Buckingham Mews"
        },
        longitude: "-0.141245"
      },
      context: "",
      outcome_status: {
        category: "Under investigation",
        date: "2019-06"
      },
      persistent_id:
        "15baabbbd72520229d7a20da918b72b5f8f80208620fb2fb30b241e6f64d028a",
      id: 75300418,
      location_subtype: "",
      month: "2019-06"
    },
    {
      category: "theft-from-the-person",
      location_type: "Force",
      location: {
        latitude: "51.499502",
        street: {
          id: 953349,
          name: "On or near Buckingham Mews"
        },
        longitude: "-0.141245"
      },
      context: "",
      outcome_status: {
        category: "Under investigation",
        date: "2019-06"
      },
      persistent_id:
        "59d5a103a2056cebecd9e6406ed807f13779788dedd9a4b4c7c6ef1d4817617e",
      id: 75330966,
      location_subtype: "",
      month: "2019-06"
    },
    {
      category: "theft-from-the-person",
      location_type: "Force",
      location: {
        latitude: "51.499502",
        street: {
          id: 953349,
          name: "On or near Buckingham Mews"
        },
        longitude: "-0.141245"
      },
      context: "",
      outcome_status: {
        category: "Under investigation",
        date: "2019-06"
      },
      persistent_id:
        "22ca97f63f17efe5b17cc2fd6cb7566963fa66ded3d4242ebfaa702c8be60a2e",
      id: 75346593,
      location_subtype: "",
      month: "2019-06"
    },
    {
      category: "theft-from-the-person",
      location_type: "Force",
      location: {
        latitude: "51.499502",
        street: {
          id: 953349,
          name: "On or near Buckingham Mews"
        },
        longitude: "-0.141245"
      },
      context: "",
      outcome_status: {
        category: "Under investigation",
        date: "2019-06"
      },
      persistent_id:
        "5d8d764e4ac3584c9582c738d5e86ac74dc1a15a6c341ecc0c4835026b1b32ae",
      id: 75285418,
      location_subtype: "",
      month: "2019-06"
    },
    {
      category: "theft-from-the-person",
      location_type: "Force",
      location: {
        latitude: "51.499502",
        street: {
          id: 953349,
          name: "On or near Buckingham Mews"
        },
        longitude: "-0.141245"
      },
      context: "",
      outcome_status: {
        category: "Under investigation",
        date: "2019-06"
      },
      persistent_id:
        "6800d1f9abc9ff37fc2813ff3376f9d8394f60f68126cf7dec1e92d2dbe7f946",
      id: 75309489,
      location_subtype: "",
      month: "2019-06"
    },
    {
      category: "theft-from-the-person",
      location_type: "Force",
      location: {
        latitude: "51.499502",
        street: {
          id: 953349,
          name: "On or near Buckingham Mews"
        },
        longitude: "-0.141245"
      },
      context: "",
      outcome_status: {
        category: "Under investigation",
        date: "2019-06"
      },
      persistent_id:
        "d4f82d5b9fed2635978ccfe11089d93eb32751427e6c623058128be5c5e3034f",
      id: 75309396,
      location_subtype: "",
      month: "2019-06"
    },
    {
      category: "theft-from-the-person",
      location_type: "Force",
      location: {
        latitude: "51.499502",
        street: {
          id: 953349,
          name: "On or near Buckingham Mews"
        },
        longitude: "-0.141245"
      },
      context: "",
      outcome_status: {
        category: "Under investigation",
        date: "2019-06"
      },
      persistent_id:
        "9981d089b361a075d3f99c7eefe072551d1dfded2beceed1b146b68e925e48ee",
      id: 75310268,
      location_subtype: "",
      month: "2019-06"
    },
    {
      category: "theft-from-the-person",
      location_type: "Force",
      location: {
        latitude: "51.499502",
        street: {
          id: 953349,
          name: "On or near Buckingham Mews"
        },
        longitude: "-0.141245"
      },
      context: "",
      outcome_status: {
        category: "Under investigation",
        date: "2019-06"
      },
      persistent_id:
        "be28a886d9554ac162f0efa16e092aeda6db68a409d745d5657a061f99f31be6",
      id: 75323967,
      location_subtype: "",
      month: "2019-06"
    },
    {
      category: "theft-from-the-person",
      location_type: "Force",
      location: {
        latitude: "51.499502",
        street: {
          id: 953349,
          name: "On or near Buckingham Mews"
        },
        longitude: "-0.141245"
      },
      context: "",
      outcome_status: {
        category: "Under investigation",
        date: "2019-06"
      },
      persistent_id:
        "5b188c6eeabe270963d29560e60dda1aa3603fe8d4bb8b8fd2720210480808bb",
      id: 75315691,
      location_subtype: "",
      month: "2019-06"
    },
    {
      category: "theft-from-the-person",
      location_type: "Force",
      location: {
        latitude: "51.499502",
        street: {
          id: 953349,
          name: "On or near Buckingham Mews"
        },
        longitude: "-0.141245"
      },
      context: "",
      outcome_status: {
        category: "Under investigation",
        date: "2019-06"
      },
      persistent_id:
        "004ec803eddac9dbb9a6186f71881139f200cc0220a947966bdaadc58848b741",
      id: 75309490,
      location_subtype: "",
      month: "2019-06"
    },
    {
      category: "theft-from-the-person",
      location_type: "Force",
      location: {
        latitude: "51.499502",
        street: {
          id: 953349,
          name: "On or near Buckingham Mews"
        },
        longitude: "-0.141245"
      },
      context: "",
      outcome_status: {
        category: "Under investigation",
        date: "2019-06"
      },
      persistent_id:
        "d4e73612eabdeee0c5e6b430799e713d0a2d4e5f4cd5f6f29bd7377e6a490ec6",
      id: 75307958,
      location_subtype: "",
      month: "2019-06"
    },
    {
      category: "theft-from-the-person",
      location_type: "Force",
      location: {
        latitude: "51.499502",
        street: {
          id: 953349,
          name: "On or near Buckingham Mews"
        },
        longitude: "-0.141245"
      },
      context: "",
      outcome_status: {
        category: "Under investigation",
        date: "2019-06"
      },
      persistent_id:
        "ef875f7156bc32ca2a094a057d83fba72cac5b755fee6392544fc4f55ccdbcfe",
      id: 75322243,
      location_subtype: "",
      month: "2019-06"
    },
    {
      category: "theft-from-the-person",
      location_type: "Force",
      location: {
        latitude: "51.499502",
        street: {
          id: 953349,
          name: "On or near Buckingham Mews"
        },
        longitude: "-0.141245"
      },
      context: "",
      outcome_status: {
        category: "Under investigation",
        date: "2019-06"
      },
      persistent_id:
        "5762a70177842d90e93d61a611ddb1b4fadf95eb5ef2c89f182c75d2812e92a8",
      id: 75287621,
      location_subtype: "",
      month: "2019-06"
    },
    {
      category: "theft-from-the-person",
      location_type: "Force",
      location: {
        latitude: "51.499502",
        street: {
          id: 953349,
          name: "On or near Buckingham Mews"
        },
        longitude: "-0.141245"
      },
      context: "",
      outcome_status: {
        category: "Under investigation",
        date: "2019-06"
      },
      persistent_id:
        "c876232085499b995f56baf984ea64a1d0f59439b336f3c6b5769076c9169045",
      id: 75286490,
      location_subtype: "",
      month: "2019-06"
    },
    {
      category: "theft-from-the-person",
      location_type: "Force",
      location: {
        latitude: "51.499502",
        street: {
          id: 953349,
          name: "On or near Buckingham Mews"
        },
        longitude: "-0.141245"
      },
      context: "",
      outcome_status: {
        category: "Under investigation",
        date: "2019-06"
      },
      persistent_id:
        "620bf3b10ac70f9c6335aa30238c5b732acc2a4dc18563142e69792e101cd257",
      id: 75341644,
      location_subtype: "",
      month: "2019-06"
    },
    {
      category: "theft-from-the-person",
      location_type: "Force",
      location: {
        latitude: "51.499502",
        street: {
          id: 953349,
          name: "On or near Buckingham Mews"
        },
        longitude: "-0.141245"
      },
      context: "",
      outcome_status: {
        category: "Under investigation",
        date: "2019-06"
      },
      persistent_id:
        "194eb7be2b66976f3bfa49725c1db3d556a442d07d71bbf3476f8d30726d853e",
      id: 75341343,
      location_subtype: "",
      month: "2019-06"
    },
    {
      category: "theft-from-the-person",
      location_type: "Force",
      location: {
        latitude: "51.499502",
        street: {
          id: 953349,
          name: "On or near Buckingham Mews"
        },
        longitude: "-0.141245"
      },
      context: "",
      outcome_status: {
        category: "Under investigation",
        date: "2019-06"
      },
      persistent_id:
        "591fbd0e0c3030209ac28b30a7d16a1d730e42206615a792e22706679f8c7af8",
      id: 75285772,
      location_subtype: "",
      month: "2019-06"
    },
    {
      category: "theft-from-the-person",
      location_type: "Force",
      location: {
        latitude: "51.499502",
        street: {
          id: 953349,
          name: "On or near Buckingham Mews"
        },
        longitude: "-0.141245"
      },
      context: "",
      outcome_status: {
        category: "Under investigation",
        date: "2019-06"
      },
      persistent_id:
        "79f4a29b24a5965f45a374b7f7553ae11941768a33aba8341bb892307200323f",
      id: 75294616,
      location_subtype: "",
      month: "2019-06"
    },
    {
      category: "theft-from-the-person",
      location_type: "Force",
      location: {
        latitude: "51.499502",
        street: {
          id: 953349,
          name: "On or near Buckingham Mews"
        },
        longitude: "-0.141245"
      },
      context: "",
      outcome_status: {
        category: "Under investigation",
        date: "2019-06"
      },
      persistent_id:
        "c2106599e899e7ae87d1f3bb3b60b81ce6f79b25acb86d41fff0688d0b42821d",
      id: 75303803,
      location_subtype: "",
      month: "2019-06"
    },
    {
      category: "theft-from-the-person",
      location_type: "Force",
      location: {
        latitude: "51.499502",
        street: {
          id: 953349,
          name: "On or near Buckingham Mews"
        },
        longitude: "-0.141245"
      },
      context: "",
      outcome_status: {
        category: "Under investigation",
        date: "2019-06"
      },
      persistent_id:
        "56aaecc89ad8ef755ef42cc48b831c5404c86746ffcc2020144250de4556ad11",
      id: 75310264,
      location_subtype: "",
      month: "2019-06"
    },
    {
      category: "theft-from-the-person",
      location_type: "Force",
      location: {
        latitude: "51.499502",
        street: {
          id: 953349,
          name: "On or near Buckingham Mews"
        },
        longitude: "-0.141245"
      },
      context: "",
      outcome_status: {
        category: "Under investigation",
        date: "2019-06"
      },
      persistent_id:
        "0224f2d3e6d9b1d63577c6c4c20e5743c888ff905b68c73735fd9b2c8fc8dc52",
      id: 75324469,
      location_subtype: "",
      month: "2019-06"
    },
    {
      category: "theft-from-the-person",
      location_type: "Force",
      location: {
        latitude: "51.499502",
        street: {
          id: 953349,
          name: "On or near Buckingham Mews"
        },
        longitude: "-0.141245"
      },
      context: "",
      outcome_status: {
        category: "Under investigation",
        date: "2019-06"
      },
      persistent_id:
        "b9c7ea71413df9201b2a3915ac72d342c5759d5eabacdc0f60a70cf3c41e28db",
      id: 75301262,
      location_subtype: "",
      month: "2019-06"
    },
    {
      category: "theft-from-the-person",
      location_type: "Force",
      location: {
        latitude: "51.499502",
        street: {
          id: 953349,
          name: "On or near Buckingham Mews"
        },
        longitude: "-0.141245"
      },
      context: "",
      outcome_status: {
        category: "Under investigation",
        date: "2019-06"
      },
      persistent_id:
        "a2a76b5972ed6e5b836f5b23fbcf48e3ca98512f9ae3ec005a32356f31d7e255",
      id: 75281124,
      location_subtype: "",
      month: "2019-06"
    }
  ]);
  const expected = {
    "drugs": 1,
    "other-theft": 17,
    "possession-of-weapons": 1,
    "public-order": 1,
    "theft-from-the-person": 35,
    "robbery": 2
  };
  t.deepEqual(actual, expected, "Filter num of crimes by category");
  t.end();
});
