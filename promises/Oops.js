/*The Object is known as object literal */
const user = {
    userName : "Vaibhav",
    logincount: 8,
    signedIn: true,
    
    getUserDetails: function () {
        //console.log(`UserName : ${this.userName}`);
        console.log(this);
        
    }

    /* This Keyword is used to check current Context
    latest user cha values gheta 
    */

}



//console.log(user.userName);
//console.log(user.getUserDetails());
//console.log(this);// Here we get the empty paranthisis there is no current context is present


//const promiseOne = new Promise();
//const date = new Date();
// new is known as constructor function


/* It by default return in which we can use or not the return */

function User(userName , loginCount , isLoggedIn) {
    this.userName = userName;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greetings = function () {
        console.log(`Welcome ${this.userName}`);   
    }

    //return this;
}

/*Here when we use new keyword there will be create a object and create 
a new constructor function*/

const userOne = new User("Vaibhav" , 12 , true)
const userTwo = new User("ChaiaurCode", 11, false)
/*It is when we don't use new keyword :->  Here we are printing the UserOne but the
  code gets overwrite by userTwo value So we get here the value of userTwo username
  login count and isLoggedIn */


  /* when we use  " .constructor  " then it gives the refrence to us */
console.log(userOne.constructor);
console.log(userTwo);

