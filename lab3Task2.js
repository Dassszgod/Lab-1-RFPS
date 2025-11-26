class User {
  constructor(lastName, firstName, age, email, feedbackPurpose, submissionDate, submissionTime) {
    this.lastName = lastName;
    this.firstName = firstName;
    this.age = age;
    this.email = email;
    this.feedbackPurpose = feedbackPurpose;
    this.submissionDate = submissionDate;
    this.submissionTime = submissionTime;
  }

  findUsersInCertainTime(users, month, hour) {
      const foundUsers = [];
      users.forEach(user => {
          if ((user.submissionDate.slice(5, 7) === month) && (user.submissionTime.slice(0, 2) === hour)) {
              foundUsers.push(user);
          }
      });

      return foundUsers;
  }

  findYoungestUser(users) {
      let minAge = Number.MAX_SAFE_INTEGER;
      let youngestUser;
      users.forEach(user => {
          if (user.age < minAge) {
              minAge = user.age;
              youngestUser = user;
          }
      });

    return { age: youngestUser.age , email: youngestUser.email, submissionDate: youngestUser.submissionDate }
  }

  divideUsers(users) {
    let youngCount = 0;
    let oldCount = 0;
    let middleCount = 0;

    users.forEach(user => {
        if (user.age <= 25 && user.feedbackPurpose.includes("Wish")) {
            youngCount++;
        } else if (user.age >= 60 && user.feedbackPurpose.includes("Complaint")) {
            oldCount++;
        } else if (user.age > 25 && user.age < 60 && !user.feedbackPurpose.includes("Complaint")) {
            middleCount++;
        }
    });

    return {youngUsers: youngCount, oldUsers: oldCount, middleAge: middleCount}
  }

  sortEmailByAlphabet(users) {
      return users.sort((a,b) => {
          return a.email.charCodeAt(0) - b.email.charCodeAt(0);
      });
  }

};

const usersArray = [
  new User("Kovalenko", "Olena", 28, "olena.kovalenko@example.com", "Technical Support", "2025-10-18", "10:30"),
  new User("Melnyk", "Andrii", 45, "a.melnyk@mail.ua", "Cooperation Proposal", "2025-10-18", "14:15"),
  new User("Shevchenko", "Iryna", 22, "shevchenko.i@gmail.com", "Payment Inquiry", "2025-10-19", "09:00"),
  new User("Klymenko", "Vitalii", 10, "v.klymenko@service.net", "Refund Request", "2025-10-19", "17:40"),
  new User("Polishchuk", "Mariia", 19, "mariya.p@web.com", "Wishes", "2025-10-20", "11:25"),
  new User("Bondarenko", "Dmytro", 65, "bondarenko.d@corp.info", "Complaints", "2025-10-20", "08:10"),
  new User("Savchuk", "Nataliia", 30, "natali.s@ukr.net", "General Question", "2025-10-20", "13:55"),
  new User("Petrenko", "Oleksii", 40, "o.petrenko@company.org", "Access Problem", "2025-10-17", "22:05"),
  new User("Ivanova", "Svitlana", 25, "svitlana.i@test.site", "Gratitude/Feedback", "2025-10-17", "16:45"),
  new User("Vasylenko", "Yevhen", 33, "yevhen.vas@biz.com", "Commercial Offer Request", "2025-10-19", "12:00")
];

const user = new User();

// console.log(user.divideUsers(usersArray));
console.log(user.divideUsers(usersArray))