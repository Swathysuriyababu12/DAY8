class person {
  constructor(name,father_name,mother_name,aadhar_no,gender,address,mobile_No,Email) {
    this.name = name ;
    this.father_name = father_name ;
    this.mother_name = mother_name;
    this.aadhar_no = aadhar_no;
    this.gender = gender; ;
    this.address = address ;
    this.mobile_No = mobile_No; ;
    this.Email = Email;
 }
  person_name() {
    return `my name is  ${this.name}`;
  }

  person_father_name() {
    return `my father name is ${this.father_name}`;
  }
  person_mother_name() {
    return `my mother name is ${this.mother_name}`;
  }
  person_aadhar_no() {
    return `aadhar_no  is ${this.aadhar_no}`;
  }
  person_gender() {
    return `i am ${this.gender}`;
  }
  person_address() {
    return `my address is ${this.address}`;
  }
  person_mobile_no() {
    return `my mobile_no is ${this.mobile_No}`;
  }
  person_Email() {
    return `my email is ${this.Email}`;
  }
}
//object
const obj = new person("swathy","Suriya babu","uma","123456789","FEMALE","TAMIL NADU","123456","abc@gmail.com");

console.log(obj.person_name());
console.log(obj.person_father_name());
console.log(obj.person_mother_name());
console.log(obj.person_aadhar_no());

console.log(obj.person_gender());
console.log(obj.person_address());
console.log(obj.person_mobile_no());
console.log(obj.person_Email());



//RESULTS
/* my name is  swathy
person.js:42 my father name is Suriya babu
person.js:43 my mother name is uma
person.js:44 aadhar_no  is 123456789
person.js:46 i am FEMALE
person.js:47 my address is TAMIL NADU
person.js:48 my mobile_no is 123456
person.js:49 my email is abc@gmail.com
*/