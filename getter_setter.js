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
    Object.defineProperty(this,"age",{
        get(){
            let a= new Date().getFullYear() - this.birthday.getFullYear();
            return a
        }
    })
}
let newUser = new User("Sanjay", new Date(1992, 6, 1));
console.log(newUser.birthday);
console.log(newUser.age)
