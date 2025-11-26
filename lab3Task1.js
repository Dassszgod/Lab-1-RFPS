const records = [
  {
    "internalId": "SRV001",
    "name": "Premium Subscription",
    "type": "Subscription",
    "usersDay1": 1500,
    "usersDay2": 1620,
    "duration": "30 days",
    "cost": 9.99
  },
  {
    "internalId": "SRV002",
    "name": "Legal Consultation",
    "type": "One-time Service",
    "usersDay1": 450,
    "usersDay2": 435,
    "duration": "1 hour",
    "cost": 49.50
  },
  {
    "internalId": "SRV003",
    "name": "Online Course 'Web Development'",
    "type": "Educational",
    "usersDay1": 820,
    "usersDay2": 910,
    "duration": "90 days",
    "cost": 199.00
  },
  {
    "internalId": "SRV004",
    "name": "Cloud Storage (500 GB)",
    "type": "Subscription",
    "usersDay1": 1100,
    "usersDay2": 1050,
    "duration": "1 year",
    "cost": 59.90
  },
  {
    "internalId": "SRV005",
    "name": "Express Delivery",
    "type": "Logistical",
    "usersDay1": 2100,
    "usersDay2": 2350,
    "duration": "24 hours",
    "cost": 15.00
  },
  {
    "internalId": "SRV006",
    "name": "Logo Creation",
    "type": "One-time Service",
    "usersDay1": 310,
    "usersDay2": 330,
    "duration": "7 days",
    "cost": 120.00
  },
  {
    "internalId": "SRV007",
    "name": "Mobile Internet (Unlimited)",
    "type": "Telecommunication",
    "usersDay1": 3500,
    "usersDay2": 3650,
    "duration": "30 days",
    "cost": 7.50
  },
  {
    "internalId": "SRV008",
    "name": "Individual Fitness Program",
    "type": "Educational",
    "usersDay1": 600,
    "usersDay2": 580,
    "duration": "60 days",
    "cost": 89.99
  },
  {
    "internalId": "SRV009",
    "name": "Technical Support 24/7",
    "type": "Supportive",
    "usersDay1": 950,
    "usersDay2": 980,
    "duration": "Indefinite",
    "cost": 0.00
  },
  {
    "internalId": "SRV010",
    "name": "Website SEO Audit",
    "type": "One-time Service",
    "usersDay1": 250,
    "usersDay2": 270,
    "duration": "48 hours",
    "cost": 75.00
  }
]

function durationToHours(durationString) {
  if (durationString === "Indefinite") {
      return Number.MIN_SAFE_INTEGER;
  }

  const parts = durationString.split(" ");
  const value = parseFloat(parts[0]);
  const unit = parts[1].toLowerCase();

  if (isNaN(value)) {
      return Number.MIN_SAFE_INTEGER;
  }

  if (unit.includes("hour")) return value;
  if (unit.includes("day")) return value * 24;
  if (unit.includes("year")) return value * 365 * 24;

  return Number.MIN_SAFE_INTEGER;
}

const sortByDuration = [...records].sort((a, b) => {
    const A = durationToHours(a.duration);
    const B = durationToHours(b.duration);
    
    return A - B; 
});

const sortByViews = [...records].sort((a,b) => {
    const hoursA = durationToHours(a.duration);
    const hoursB = durationToHours(b.duration);

    if (hoursA === hoursB) {
        const A = (a.usersDay1 + a.usersDay2) / 2;
        const B = (b.usersDay1 + b.usersDay2) / 2;

        return A - B;
    } else {
        return hoursA - hoursB;
    }
});

function findMaxViewsOnDayTwo(records) {
  let maxVal = 0;
  let maxValType = "";

  records.forEach(el => {
      if (el.usersDay2 > maxVal) {
          maxVal = el.usersDay2;
          maxValType = el.type;
      }
  });

  return maxValType;
}

function addNewEntry(records) {
  const sortedArr = records.toSorted((a,b) => {
      const A = a.cost;
      const B = b.cost;

      return A - B;
  });

  const newEntry = {
      "internalId": "SRV011",
      "name": "A",
      "type": "B",
      "usersDay1": 400,
      "usersDay2": 500,
      "duration": "50 hours",
  }

  sortedArr.push(newEntry);

  if (newEntry.hasOwnProperty("cost")) {
      sortedArr.sort((a,b) => {
          const A = a.cost;
          const B = b.cost;

          return A - B;
      });
  } 

  return sortedArr;
}

function calcServicesDuration(records, servicesArr) {
  if (servicesArr.length === 1) {
      return servicesArr[0].duration;
  }

  let durationSum = 0;
  
  if (servicesArr.length <= 3) {
      servicesArr.forEach(service => {
          durationSum += durationToHours(service.duration) * 1.1;
      });
  }
  else {
      servicesArr.forEach(service => {
          durationSum += durationToHours(service.duration) * 2;
      });
  }

  return durationSum.toFixed(2);
}

// console.log(calcServicesDuration(records, [records[0], records[1], records[2]]));
