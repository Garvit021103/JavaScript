class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}garvit`
    }
    set password(value){
        this._password = value
    }
}

const garvit = new User("garvit@g.ai", "123")
console.log(garvit.password);
console.log(garvit.email);
