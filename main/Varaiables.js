function learn(){
    // var let const

    let myString = "David Okoye" //string
    let myNumber = 10 //number
    let myHobbies = ["coding", "basket ball"] //array
    let isDev = true //boolean

    // this data can not be changed due to the use of CONST
    const Token = "299050"

    // normal way to log to console
    console.log('hello i am learning js')


    //using a template sting
    console.log(`my Name is ${myString}`)

    // using escape car
    // "\n" == creates a new line
    // "\t" == create a tabspace
    // find out more escape characters and experiment with them
    console.log(`my name is ${myString}. \nMy Fav number is ${myNumber}`)
}
learn()