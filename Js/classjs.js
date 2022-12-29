class User{
    name = "";
    email = "";
    constructor(name,email){
        this.name = name;
        this.email = email;
    }

    #courseList = [];
// this is how we declare methods in javascript without function keyword
    getInfo(){
        return {name:this.name,email:this.email};
    }

    enrollCourse(name){ // setters
        this.#courseList.push(name);
    }

    getCourseList(){  // getters
        return this.#courseList;
    }

    login(){
        return 'You are logged in';
    }

 

};


class subAdmin extends User{
    constructor(name,email){
        super(name,email);
    }
    getAdminInfo(){
        return 'I am Subadmin';
    }

    login(){ // overriding of method
        return 'login for  admin only.'
    }
}
// module.exports = User;

// const rock = new User('rock','rock@gmail.com');

// console.log(rock.getInfo());

// rock.enrollCourse('Angular Bootcamp');
// console.log(rock.courseList);
// console.log(rock.getCourseList());


const tom = new subAdmin('tom','tom@gerry.com');
console.log(tom.getAdminInfo());
console.log(tom.login())
console.log(tom.getInfo());
