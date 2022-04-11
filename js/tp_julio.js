//metodo viejo para ejecutar algo async
/*function obtenerUsario(usuario,password){
    return new Promise(
        (resolve,reject)=>{
            fetch("usuarios.json").then(
                (respuesta) => {            
                    respuesta.json().then(
                        (resultado) => {                    
                            resolve(resultado)
                }
            ).catch(
                (error) => {
                    reject(error)
                }
            )
        }
    ).catch(
        (error) => {
            reject(error)
        }
)});
}
    let usuarios;
        obtenerUsario().then(
        (listaDeUsuarios) => {
            usuarios = listaDeUsuarios
            console.log(usuarios)
        }
    ).catch(
        (error) => {
            console.log(error)
        }
    )*/
    

//metodo nuevo para ejecutar algo async

async function obtenerUsario2(){
    try{
        let archivo = await fetch("usuarios.json")
        let resultado = await archivo.json()
        return resultado         
    }catch(err){
        throw "El servidor esta Caido"
    }
}
async function loginBoton(evento){
    evento.preventDefault()
    try {
        let lista = await obtenerUsario2()
        let email = document.getElementById("email").value 
        let password = document.getElementById("password").value
        let usuarioEncontrado = lista.Usuarios.find(
            (elemento) => {
                if (elemento.Email == email && elemento.Password == password){
                    return true
                }
                else {
                    return false
                }
            } 
        )
        if (usuarioEncontrado){
            console.log(usuarioEncontrado)    
        }
        else{
            document.getElementById("error").innerText = "Email o Password invalidos"
        }
        console.log(usuarioEncontrado)
    }catch(error){
        document.getElementById("error").innerText = error
        console.log("error:",error)
    }
}
document.getElementById("buttlogin").addEventListener("click",loginBoton)

