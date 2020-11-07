const family = function(){
    const members = []
    const birth = function(name){
        members.push(name)
        console.log(members)
    }
    return birth
}

let giveBirth = family()
giveBirth("Sana")
giveBirth("Ameen")

const UsersModule = function () {
    const _users = ['Aaron', 'Avi'];

    const addUser = function (user) {
        _users.push(user)
    }

    const listUsers = function () {
        for (let user of _users) {
            console.log(user)
        }
    }

    return {
        addUser: addUser,
        listUsers: listUsers
    }
}

const usersModule = UsersModule()

usersModule.addUser('Narkis')
usersModule.listUsers()
usersModule.addUser('Sana')
usersModule.addUser('Ameen')
usersModule.listUsers()

//ex1
const StringFormatter = function(){
    const capitalizeFirst = function(str){
        return str[0].toUpperCase()+str.slice(1).toLowerCase()
    }
    const skewerCase = function(str){
        return str.replace(/ /g, "-")
    }
    return {capitalizeFirst,skewerCase}
}

const formatter = StringFormatter()

console.log(formatter.capitalizeFirst("dorothy"))
console.log(formatter.skewerCase("blue box"))


//ex2
const Bank = function(){
    let money = 500

    const depositCash = function(cash){
        money += cash
    }

    const checkBalance = function(){
        console.log(money)
    }

    return{deposit:depositCash,showBalance:checkBalance}
}

const bank = Bank()
bank.deposit(200)
bank.deposit(250)
bank.showBalance() //should print 950