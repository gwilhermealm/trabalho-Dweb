
// Seleção dos elementos do DOM
// Elementos para login
let usuarioID = document.getElementById("usuarioID")
let btnLogin = document.getElementById("btn-login")
// Elementos para novo usuário
 let btnNovoUsuario = document.getElementsByClassName(".btn")[0]
 let nvnome = document.getElementById("nvnome")
 let nvidade = document.getElementById("nvidade")
 let nvemail = document.getElementById("nvemail")
 
 //dados do perfil
 //pegando dados do perfil
 let bodyPerfil = document.getElementsByTagName("body")[0]
 let headerPerfil = document.getElementById("perfil-header")
 let btntema = document.getElementById("btn-modo")
 let temaAtual = btntema.innerHTML
 let sectionPerfil = document.getElementById("perfil-dados")
 let editar = document.getElementById("editar")
 let imgPerfil = document.getElementById("img-perfil")
 //let nomePerfil = document.getElementById("perfil-nome")
 let idadePerfil = document.getElementById("perfil-idade")
 let emailPerfil = document.getElementById("perfil-email")

// Função para login
function login() {
 const objdados = JSON.parse(localStorage.getItem("usuarioID"))

let id = usuarioID.value
 for(let i=0; i < localStorage.length; i++){
   const chave = localStorage.key(i)

   const valor = localStorage.getItem(chave)
   console.log(valor)

  if(id === valor){
    window.location.href= "perfil.html"
    localStorage.setItem("usuarioID", id)
    return
  }else{
    alert("Usuário não encontrado. Por favor, verifique seu ID ou cadastre-se como novo usuário.")
  }

}
 

}
//funçao cadastrar
function cadastrar(){
     if(nvnome.value ==="" || nvidade.value ==="" || nvemail.value ===""){
     alert("Por favor, preencha todos os campos antes de cadastrar.")
       return
    }else if(isNaN(nvidade.value) || nvidade.value <=0){
       alert("Por favor, insira uma idade válida.")
    }else if(!nvemail.value.includes("@")){
       alert("Por favor, insira um email válido.")
       return
  }else{
       let contar = localStorage.getItem("contador") ? parseInt(localStorage.getItem("contador")) : 1
        // Validação passou, prosseguir com o cadastro
        let objUsuario = {
          nome: nvnome.value,
          idade: nvidade.value,
          email: nvemail.value

        }
        //armazenando dados no local storage
        let usuarioJSON = JSON.stringify(objUsuario)
        localStorage.setItem("usuario_"+contar, usuarioJSON)

        
      
        contar++
        localStorage.setItem("contador", contar)
     //limpar campos
        nvnome.value =""  
        nvidade.value =""  
        nvemail.value =""
       

 }
}

 //teste para mostrar nome no perfil
function carregarperfil(){
 
  //nomePerfil.innerHTML = nome
  let perfilnome = document.getElementById("perfil-nome")
  perfilnome.textContent = localStorage.getItem("usuarioID")+"\n seja bem vindo!"
  //pegando dados do perfil
}


//função para mudar tema
function mudartema(){
    
   let valorbtn = temaAtual
    
   if( valorbtn ==="☀️"){
    //alterando cores para modo escuro
      bodyPerfil.style.backgroundColor= "#121212"
      sectionPerfil.style.backgroundColor = "#1F1F1F"
      headerPerfil.style.backgroundColor = "#1F1F1F"
     
      bodyPerfil.style.color= "#FFFFFF"
      btntema.innerHTML="🌙"

    }else{
      bodyPerfil.style.backgroundColor= "#E7E6E6"
      btntema.innerHTML="☀️"
      sectionPerfil.style.backgroundColor = "#fff"
      headerPerfil.style.backgroundColor = "#fff"
      bodyPerfil.style.color= "#333"
      bodyPerfil.style.transition= "all 0.5s"
      bodyPerfil.style.backgroundColor= "#f0f0f0"


    }
    temaAtual = btntema.innerHTML
   
}
editar.addEventListener("click",()=>{

})
