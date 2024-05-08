class Student {
  publicInformartion = {
    studentName: "",
    nickName: "",
    socialMedia: {
      instagram: "",
      facebook: "",
      youtube: "",
    },
  };
  #sensitiveInformation = {
    birthday: "",
    address: "",
  };
  #password = "";

  #getPassword() {
    return this.#password;
  }
  
  setSocialMedia(data = { instagram:'', facebook:'', youtube:'' }) {
    this.publicInformartion.socialMedia.instagram = data.instagram;
    this.publicInformartion.socialMedia.facebook = data.facebook;
    this.publicInformartion.socialMedia.youtube = data.youtube;
  }

  getPublicInformation() {
    let message = `Name\t: ${this.publicInformartion.studentName}\n`;
    message += `Nick Name\t: ${this.publicInformartion.nickName}\n`;
    message += `Social Media\t: \n`;
    message += `  - Instagram \t: ${this.publicInformartion.socialMedia.instagram}\n`;
    message += `  - Facebook \t: ${this.publicInformartion.socialMedia.facebook}\n`;
    message += `  - Youtube \t: ${this.publicInformartion.socialMedia.youtube}\n`;
    return message;
  }

  getSensitiveInformation(password='') {
    if (password === this.#getPassword()) {
      let message = `Sensitive Information of ${this.publicInformartion.studentName}\n`;
      message += `  - Birthday \t: ${this.#sensitiveInformation.birthday}\n`;
      message += `  - Address \t: ${this.#sensitiveInformation.address}\n`;
      return message;
    } else {
      return "Prohibited";
    }
  }

  constructor(data = { studentName:'', nickName:'', password:'', birthday:'', address:'' }) {
    this.publicInformartion.studentName = data.studentName;
    this.publicInformartion.nickName = data.nickName;
    this.#password = data.password;
    this.#sensitiveInformation.birthday = data.birthday;
    this.#sensitiveInformation.address = data.address;
  }

}

let student1 = new Student({
  studentName: "Pedro Acosta",
  nickName: "Pedro",
  password: "I_love_RedBull_KTM",
  birthday: "1-1-1970",
  address: "Lorem Ipsum Street",
});
student1.setSocialMedia({
  instagram: "@pedro_acosta",
  facebook: "pedro_acosta_RB",
  youtube: "PedroAcosta",
});

console.log(student1.getPublicInformation());
console.log(student1.getSensitiveInformation());;
console.log(student1.getSensitiveInformation("I_love_RedBull_KT"));;
console.log();
console.log(student1.getSensitiveInformation("I_love_RedBull_KTM"));;
console.log('');

student1.setSocialMedia([""]);
let student2 = new Student({
  studentName: "Maverick Vinales",
  nickName: "Mavy",
  password: "goto_champion",
  birthday: "1-1-1971",
  address: "Lorem Ipsum Street 2",
});
console.log(student2.getPublicInformation());
console.log('');

let student3 = new Student({
  studentName: "Max Verstappen",
  nickName: "Max Max Supermax",
  password: "tututuru_max_verstappen",
  birthday: "1-1-1972",
  address: "RedBull Champion Street",
});

console.log(student3.getPublicInformation());
