
// Seleção dos elementos do DOM
// Elementos para login
let usuarioID = document.getElementById("usuarioID")
let btnLogin = document.getElementById("btn-login")
// Elementos para novo usuário
 let btnNovoUsuario = document.getElementsByClassName(".btn")[0]
 let nvnome = document.getElementById("nvnome")
 let nvidade = document.getElementById("nvidade")
 let nvemail = document.getElementById("nvemail")
 let usuario
 //dados do perfil
 //pegando dados do perfil
 let bodyPerfil = document.getElementsByTagName("body")[0]
 let headerPerfil = document.getElementById("perfil-header")
 let btntema = document.getElementById("btn-modo")
 let temaAtual = btntema.innerHTML
 let sectionPerfil = document.getElementById("perfil-dados")
 let editar = document.getElementById("editar")
 let imgPerfil = document.getElementById("img-perfil")
 let nomePerfil = document.getElementById("perfil-nome")
 let idadePerfil = document.getElementById("perfil-idade")
 let emailPerfil = document.getElementById("perfil-email")
 
// Função para login
function login() {
    let id = usuarioID.value
    let nomeArmazenado = localStorage.getItem()
    if (id === nomeArmazenado) {
       // alert(`Bem-vindo de volta, ${nomeArmazenado}!`)
        // Redirecionar para a página do perfil
        window.location.href = "perfil.html"
    } else {
        alert("ID não encontrado. Por favor, verifique e tente novamente.")
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
       0
       // Validação passou, prosseguir com o cadastro
       let nome = nvnome.value
       let idade = nvidade.value
       let email = nvemail.value
         localStorage.setItem( nome, nome)
         return usuario = nome
         
 }
}
//btnNovoUsuario.addEventListener("click",()=>{
//    //validaçao dos campos
//    if(nvnome.value ==="" || nvidade.value ==="" || nvemail.value ===""){
//        alert("Por favor, preencha todos os campos antes de cadastrar.")
//        return
//    }else if(isNaN(nvidade.value) || nvidade.value <=0){
//        alert("Por favor, insira uma idade válida.")
//        return
//    }else if(!nvemail.value.includes("@")){
//        alert("Por favor, insira um email válido.")
//        return
//    }else{
//        // Validação passou, prosseguir com o cadastro
//       
//       console.log("Cadastro realizado com sucesso!")
//     
//    }
//  
//})

 //teste para mostrar nome no perfil
function carregarperfil(){
    let perfilNome = document.getElementById("perfil-nome")
    perfilNome.textContent = localStorage.getItem("nome")+"\nseja bem vindo ao seu perfil!"
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
