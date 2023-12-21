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
