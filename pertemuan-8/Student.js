class StudentPurwadhika {
  name = "";
  username = "";
  #password = "";
  #phone = "";
  #email = "";
  program = ["JCW", "JCDM", "JCDS", "JCUI/UX", "JCVD"];
  selectedProgram = "";
  #loginStats = false;
  set setName(name) {
    this.name = name;
  }
  set setUserName(username) {
    this.username = username;
  }
  set setPassword(password = "") {
    if (password.length > 10 || password.length < 6) {
      console.log('Password either have more than 10 or less than 6 character, random password generated');
      this.#password = (Math.random() + 1).toString(36).substring(4);
      console.log(this.#password);
      console.log();
      return "Password either have more than 10 or less than 6 character";
    } else {
      this.#password = password;
    }
  }
  set setPhone(phone) {
    this.#phone = phone;
  }
  set setEmail(email) {
    var regexEmail = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
    if (regexEmail.test(email)) {
      this.#email = email;
    } else {
      console.log('Not an Valid email');
      console.log('generate random mail');
      this.#email = (Math.random() + 1).toString(36).substring(5)+''+'@random.com'
      console.log(this.#email);
      console.log();
      return "Not an Valid email";
    }
  }

  set setSelectedProgram(program) {
    var flag = 0;
    var selected = 100;
    this.program.forEach((e, i) => {
      if (e === program) {
        flag++;
        selected = i;
      }
    });
    if (flag === 1) {
      this.selectedProgram = this.program[selected];
    } else {
      console.log('Program not exist');
      return 'Program not exist'
    }
  }

  get getName() {
    if (this.#loginStats === false) {
      return "Not login yet, please login!";
    }
    return this.name;
  }
  get getUserName() {
    if (this.#loginStats === false) {
      return "Not login yet, please login!";
    }
    return this.username;
  }
  get getPassword() {
    if (this.#loginStats === false) {
      return "Not login yet, please login!";
    }
    return this.#password;
  }
  get getPhone() {
    if (this.#loginStats === false) {
      return "Not login yet, please login!";
    }
    var numberErase5LastDigit = this.#phone.slice(0,4)
    
    return numberErase5LastDigit+='*****';
  }
  get getEmail() {
    if (this.#loginStats === false) {
      return "Not login yet, please login!";
    }
    return this.#email;
  }
  get getSelectedProgram() {
    if (this.#loginStats === false) {
      return "Not login yet, please login!";
    }
    return this.selectedProgram;
  }
  login(username, password) {
    if (username === this.username || username === this.#email) {
      if (password === this.#password) {
        this.#loginStats = true;
      } else {
        console.log('Wrong password');
        return "Wrong password";
      }
    } else {
      console.log('Wrong username/email');
      return "Wrong username/email";
    }
  }

  constructor({ name, password, username, email, phone, selectedProgram }) {
    this.setUserName = username;
    this.setName = name;
    this.setPassword = password;
    this.setEmail = email;
    this.setPhone = phone;
    this.selectedProgram = selectedProgram;
    // this.
  }
}

const studentpw1 = new StudentPurwadhika({
  name: "Bagas",
  username: "bagas",
  password: "1234567",
  email: "test@gmail.com",
  phone: "08624456789",
  selectedProgram: "JCW",
});

console.log('studentpw1');
studentpw1.login("bagas", "1234567");
console.log(studentpw1.getName);
console.log(studentpw1.getPhone);
console.log(studentpw1);
console.log('');

console.log('studentpw2');
const studentpw2 = new StudentPurwadhika({
  name: "Bagas2",
  username: "bagas2",
  password: "1234",
  email: "tetgmail.com",
  phone: "0812345789",
  selectedProgram: "JCWW",
});
studentpw2.login("bagas2", "5544");
console.log(studentpw2.getName);

