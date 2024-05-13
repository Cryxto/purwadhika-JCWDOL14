class StudentHTML {
  name = "";
  username = "";
  #password = "";
  #phone = "";
  #email = "";
  program = ["JCW", "JCDM", "JCDS", "JCUI/UX", "JCVD"];
  selectedProgram = "";
  #loginStats = false;
  #stat = [];
  set setCurrentStatus(stat) {
    this.#stat = stat;
  }
  get getCurrenStatus() {
    return this.#stat;
  }
  get getLoginStats() {
    return this.#loginStats;
  }
  set setName(name) {
    this.name = name;
    this.setCurrentStatus = [true, 200, "Ok"];
  }
  set setUserName(username) {
    this.username = username;
    this.setCurrentStatus = [true, 200, "Ok"];
  }
  set setPassword(password = "") {
    if (password.length > 10 || password.length < 6) {
      console.log("Password either have more than 10 or less than 6 character, random password generated");
      // this.#password = (Math.random() + 1).toString(36).substring(4);
      // console.log(this.#password);
      // console.log();
      this.setCurrentStatus = [false, 422, "Password not meet requirements"];
    } else {
      this.#password = password;
      this.setCurrentStatus = [true, 200, "Ok"];
    }
  }
  set setPhone(phone) {
    this.#phone = phone;
    this.setCurrentStatus = [true, 200, "Ok"];
  }
  set setEmail(email) {
    var regexEmail = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
    if (regexEmail.test(email)) {
      this.#email = email;
      this.setCurrentStatus = [true, 200, "Ok"];
    } else {
      console.log("Not an Valid email");
      // console.log('generate random mail');
      // this.#email = (Math.random() + 1).toString(36).substring(5)+''+'@random.com'
      // console.log(this.#email);
      // console.log();
      this.setCurrentStatus = [false, 422, "Not an Valid email"];
    }
  }

  set setSelectedProgram(program = "") {
    var flag = 0;
    var selected = 100;
    this.program.forEach((e, i) => {
      if (e === program.toUpperCase()) {
        flag++;
        selected = i;
      }
    });
    if (flag === 1) {
      this.selectedProgram = this.program[selected];
      this.setCurrentStatus = [true, 200, "Ok"];
    } else {
      console.log("Program not found");
      this.setCurrentStatus = [false, 404, "Program not found"];
    }
  }

  get getName() {
    if (this.#loginStats === false) {
      this.setCurrentStatus = [false, 403, "Forbidden"];
      return [false, 403, "Forbidden"];
    }
    return this.name;
  }
  get getUserName() {
    if (this.#loginStats === false) {
      this.setCurrentStatus = [false, 403, "Forbidden"];
      return [false, 403, "Forbidden"];
    }
    return this.username;
  }
  get getPassword() {
    if (this.#loginStats === false) {
      this.setCurrentStatus = [false, 403, "Forbidden"];
      return [false, 403, "Forbidden"];
    }
    return this.#password;
  }
  get getPhone() {
    if (this.#loginStats === false) {
      this.setCurrentStatus = [false, 403, "Forbidden"];
      return [false, 403, "Forbidden"];
    }
    var numberErase5LastDigit = this.#phone.slice(0, 4);

    return (numberErase5LastDigit += "*****");
  }
  get getEmail() {
    if (this.#loginStats === false) {
      this.setCurrentStatus = [false, 403, "Forbidden"];
      return [false, 403, "Forbidden"];
    }
    return this.#email;
  }
  get getSelectedProgram() {
    if (this.#loginStats === false) {
      this.setCurrentStatus = [false, 403, "Forbidden"];
      return [false, 403, "Forbidden"];
    }
    return this.selectedProgram;
  }
  login(username, password) {
    if (username === this.username || username === this.#email) {
      if (password === this.#password) {
        this.setCurrentStatus = [true, 200, "Ok"];
        this.#loginStats = true;
        return [true, 200, "Ok"];
      } else {
        console.log("Wrong password, wrong pass : " + password + ",valid pass : " + this.#password);
        this.setCurrentStatus = [false, 401, "Wrong password"];
        return [false, 401, "Wrong password"];
      }
    } else {
      console.log("Wrong username/email");
      this.setCurrentStatus = [false, 401, "Wrong username/password"];
      return [false, 401, "Wrong username/password"];
    }
  }
  logout(username, password) {
    if (username === this.username || username === this.#email) {
      if (password === this.#password) {
        this.setCurrentStatus = [true, 200, "Ok"];
        this.#loginStats = false;
        return [true, 200, "Ok"];
      } else {
        console.log("Wrong password, wrong pass : " + password + ",valid pass : " + this.#password);
        this.setCurrentStatus = [false, 401, "Wrong password"];
        return [false, 401, "Wrong password"];
      }
    } else {
      console.log("Wrong username/email");
      this.setCurrentStatus = [false, 401, "Wrong username/password"];
      return [false, 401, "Wrong username/password"];
    }
  }

  // constructor({ name, password, username, email, phone, selectedProgram }) {
  //   this.setUserName = username;
  //   this.setName = name;
  //   this.setPassword = password;
  //   this.setEmail = email;
  //   this.setPhone = phone;
  //   this.selectedProgram = selectedProgram;
  // }
}
var choice = 10;
var user = "";
var flag = true;
var listUser = [];
var registeredUser 

while (choice !== 0) {
  choice = parseInt(
    prompt(`Welcome ${user === "" ? "Guest" : user}\nplease choose : \n 0. Exit \n 1. Insert\n 2. Show \n 3. login \n 4. logout`)
  );
  switch (choice) {
    case 0:
      // choice = 0
      alert("Thx");
      break;
    case 1:
      // alert('1')
      registeredUser = new StudentHTML();

      registeredUser.setName = prompt("Name");
      while (registeredUser.getCurrenStatus[0] === false) {
        registeredUser.setName = prompt(`Enter your name ${registeredUser.getCurrenStatus[2]}`);
      }
      registeredUser.setEmail = prompt("Enter your E-mail (xxx@emaildomain.com)");
      while (registeredUser.getCurrenStatus[0] === false) {
        registeredUser.setEmail = prompt(`error : ${registeredUser.getCurrenStatus[2]}`);
      }
      registeredUser.setUserName = prompt("Enter your username");
      while (registeredUser.getCurrenStatus[0] === false) {
        registeredUser.setUserName = prompt(`error : ${registeredUser.getCurrenStatus[2]}`);
      }
      registeredUser.setPhone = prompt("Enter your phone number");
      while (registeredUser.getCurrenStatus[0] === false) {
        registeredUser.setPhone = prompt(`error : ${registeredUser.getCurrenStatus[2]}`);
      }
      var strings = ["JCW", "JCDM", "JCDS", "JCUI/UX", "JCVD"];
      var concatenatedString = strings.join(", ");
      registeredUser.setSelectedProgram = prompt(`Enter your program : ${concatenatedString}`);
      while (registeredUser.getCurrenStatus[0] === false) {
        registeredUser.setSelectedProgram = prompt(
          `error : ${registeredUser.getCurrenStatus[2]}, choose one of : ${concatenatedString}`
        );
      }
      registeredUser.setPassword = prompt(
        "Enter your password (more than 6 but less than 10 character or combination)"
      );
      while (registeredUser.getCurrenStatus[0] === false) {
        registeredUser.setPassword = prompt(`error : ${registeredUser.getCurrenStatus[2]}`);
      }
      listUser.push(registeredUser)
      // registeredUser = registeredUser
      // registeredUser = []
      flag = false
      break;
    case 2:
      flag = false
      if (listUser.length===0) {
        alert('Insert any student data first!')
        break
      }
      var username = prompt("Enter username");
      // let flag = 0;
      listUser.forEach(e=>{
        if (e.username === username && flag!==1) {
          flag = true
          registeredUser = e
         }
        console.log(e.username);
      })
      while (flag===false) {
        username = prompt("Username not found, enter right username");
        listUser.forEach(e=>{
           if (e.username === username && flag!==1) {
            flag = true
            registeredUser = e
           }
        })
      }
      if (registeredUser.getLoginStats === false) {
        // var username = prompt("Enter username");
        // while (username !== registeredUser.username) {
        //   username = prompt("Username not recognized");
        // }
        var password = prompt(`Enter ${registeredUser.name} ' s password : `);
        while (registeredUser.login(username, password)[0] !== true) {
          password = prompt("password wrong, please re-enter it : ");
        }
        registeredUser.login(username, password);
        var message = "";
        message += "Name : " + registeredUser.getName + '\n';
        message += "Username : " + registeredUser.getUserName + '\n';
        message += "Email : " + registeredUser.getEmail + '\n';
        message += "Phone : " + registeredUser.getPhone + '\n';
        message += "Selected Program : " + registeredUser.getSelectedProgram + '\n';
        user = registeredUser.getName + '\n';
        alert(message);
      } else {
        var message = "";
        message += "Name : " + registeredUser.getName + "\n";
        message += "Username : " + registeredUser.getUserName + "\n";
        message += "Email : " + registeredUser.getEmail + "\n";
        message += "Phone : " + registeredUser.getPhone + "\n";
        message += "Selected Program : " + registeredUser.getSelectedProgram + "\n";
        user = registeredUser.getName;
        alert(message);
      }

      // alert(message)
      // console.log(registeredUser);
      break;
    case 3 :
      flag = false
      if (listUser.length===0) {
        alert('Insert any student data first!')
        break
      }
      var username = prompt("Enter username");
      // let flag = 0;
      listUser.forEach(e=>{
        // e.username === username ? flag=true: flag

        if (e.username === username && flag!==1) {
          flag = true
          registeredUser = e
         }
      })
      
      while (flag===false) {
        username = prompt("Username not found, enter right username");
        listUser.forEach(e=>{
           if (e.username === username && flag!==1) {
            flag = true
            registeredUser = e
           }
        })
      }
      if (registeredUser.getLoginStats === false){
        var password = prompt(`Enter ${registeredUser.name} ' s password : `);
          while (registeredUser.login(username, password)[0] !== true) {
            password = prompt("password wrong, please re-enter it : ");
          }
          registeredUser.login(username, password);
          user = registeredUser.getName
        } else {
        user = registeredUser.getName
        alert(`Welcome ${registeredUser.getName}!`)
      }
      break
    case 4:
      flag = false
      if (listUser.length===0) {
        alert('Insert any student data first!')
        break
      }
      var username = prompt("Enter username");
      // let flag = 0;
      listUser.forEach(e=>{
        if (e.username === username && flag!==1) {
          flag = true
          registeredUser = e
         }
      })
      while (flag===false) {
        username = prompt("Username not found, enter right username");
        listUser.forEach(e=>{
           if (e.username === username && flag!==1) {
            flag = true
            registeredUser = e
           }
        })
      }
      if (registeredUser.getLoginStats === true){
        var password = prompt(`Enter ${registeredUser.name} ' s password : `);
          while (registeredUser.login(username, password)[0] !== true) {
            password = prompt("password wrong, please re-enter it : ");
          }
          registeredUser.logout(username, password);
          user=''
      } else {
        alert(`already logout or not login yet`)
      }
      break
    default:
      alert("Menu is not available");
      break;
  }
}
// const studentpw1 = new StudentHTML({
//   name: "Bagas",
//   username: "bagas",
//   password: "1234567",
//   email: "test@gmail.com",
//   phone: "08624456789",
//   selectedProgram: "JCW",
// });

// console.log('studentpw1');
// studentpw1.login("bagas", "1234567");
// console.log(studentpw1.getName);
// console.log(studentpw1.getPhone);
// console.log(studentpw1);
// console.log('');

// console.log('studentpw2');
// const studentpw2 = new StudentHTML({
//   name: "Bagas2",
//   username: "bagas2",
//   password: "1234",
//   email: "tetgmail.com",
//   phone: "0812345789",
//   selectedProgram: "JCWW",
// });
// studentpw2.login("bagas2", "5544");
// console.log(studentpw2.getName);
