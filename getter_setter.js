let user = {
    name:"sanjay",
    surname:"Dambal",
   
    set fullName(value){
        [this.name,this.surname]=value.split(" ")
    }

}
user.fullName = "Vinay Kumar"
console.log(user.name);

// setter function
function User(name,birthday){
    this.name = name;
    this.birthday = birthday;
    Object.defineProperty(this, "age", {
        get() {
          let todayYear = new Date().getFullYear();
          return todayYear - this.birthday.getFullYear();
        },
        set(value) {
              let now = new Date();
          let yearOfBirth = now.getFullYear() - value;
          this.birthday = new Date(yearOfBirth, now.getMonth(), now.getDate())
        }
      })
    };
    User.age = 35
    
let newUser = new User("Sanjay", new Date(1992, 6, 1));
console.log(newUser.birthday);
console.log(newUser.age)
console.log(newUser)

function User2(name2,birthday2){
  this.name2 = name2;
  this.birthday2 = birthday2;
  Object.defineProperty(this,"age2",{
    get(){
      return new Date().getFullYear()-this.birthday2.getFullYear()
    }
  })

}
let newUser1 = new User2("Sanjay", new Date(1992, 6, 1));
console.log(newUser1.age2)
console.log(newUser1)

function teams(name,country){
  this.name = name;
  this.country = country;
  Object.defineProperty(this,"won",{
    get(){
      return "Twenty matches"
    }
  })
}
const newTeam = new teams("Virat","India")
console.log(newTeam.won)