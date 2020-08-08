//dados
const proffys = [
    {
        name:"Diego Fernandes", avatar:"https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4", whatsapp:"11932985624", bio:"Entusiasta das melhores tecnologias de química avançada.<br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", subject:"Química",
         cost:"20",
         weekday:[0],
         time_from:[720],
         time_to:[1228]
    },
    {
            name:"Luiza Ribeiro", avatar:"https://media-exp1.licdn.com/dms/image/C4D03AQEtd42QiT2svg/profile-displayphoto-shrink_100_100/0?e=1602115200&v=beta&t=taxax648YqmcHgtqU7J3ChY_nN_p7rNUHK6eCEcqJjE", whatsapp:"11932985624", bio:"Entusiasta das melhores tecnologias de química avançada.<br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", subject:"Química",
             cost:"20",
             weekday:[1],
             time_from:[720],
             time_to:[1228]
    },
    {
        name:"Luiza Ribeiro", avatar:"https://media-exp1.licdn.com/dms/image/C4D03AQEtd42QiT2svg/profile-displayphoto-shrink_100_100/0?e=1602115200&v=beta&t=taxax648YqmcHgtqU7J3ChY_nN_p7rNUHK6eCEcqJjE", whatsapp:"11932985624", bio:"Entusiasta das melhores tecnologias de química avançada.<br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", subject:"Química",
         cost:"20",
         weekday:[1],
         time_from:[720],
         time_to:[1228]
}
]

const subjects = [
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",

]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",

]
//funcionalidades

function getSubject(subjectNumber) {
    const position = +subjectNumber - 1
    return subjects[position]
}

function pageLanding(req, res) {
    return res.render("index.html")
}

function pageStudy(req, res) {
    const filters = req.query
    return res.render("study.html", { proffys, filters, subjects, weekdays })  
}
function pageGiveClasses(req, res) {
    const data = req.query

   //se tiver os dados
   const isNotEmpty = Object.keys(data).length > 0
   if (isNotEmpty) {

    data.subject = getSubject(data.subject)
       //adicionar dados ao array proffys
       proffys.push(data)

       return res.redirect("/study")

   }
   
    //se não, mostrar a pagina
    return res.render("give-classes.html", {subjects, weekdays})
}


//servidor
const express = require('express')
const server = express()
const nunjucks = require('nunjucks')//nunjucks serve para dar vida ao html com programação

//configurando nunjucks (template engine)
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})
//inicio e configuração do servidor
server
//configurar arquivos estaticos (css, scripts, imagens)
.use(express.static("public"))
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
//start no servidor
.listen(5500)

