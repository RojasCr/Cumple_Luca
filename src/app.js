const express = require("express");
const cors = require("cors")
const fs = require("fs");
const { cwd } = require("process");

const app = express();
const PORT = 3000;

app.use(express.static(__dirname + "/../public"))
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.sendFile("/index.html")
})

app.post("/comentar", (req, res) => {
    const {comentario} = req.body;
    
    console.log(comentario)

    const comentariosFile = `${cwd()}/public/Comentarios.txt`

    if(!fs.existsSync(comentariosFile)){
        fs.promises.writeFile(comentariosFile, comentario, "utf-8");
        return res.json({status: "success", data: "Ok"})
    }
    
    fs.appendFileSync(comentariosFile, "\n"+comentario,"utf-8")
    
    return res.json({status: "success", data: comentario})
    
})

app.get("/publicar", async (req, res) => {
    const comentariosFile = `${cwd()}/public/Comentarios.txt`
    
    if(!fs.existsSync(comentariosFile)){
        return res.json({status: "error", data: "No hay mensajes"})
    }
    
    const file = fs.readFileSync(comentariosFile, "utf-8");

    console.log(file)

    return res.json({status: "success", data: file})

})





app.listen( PORT, () => {
    console.log(`Server listening at port ${PORT}`);
})

