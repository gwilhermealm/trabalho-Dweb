
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
 let sair = document.getElementById("sair")
 let imgPerfil = document.getElementById("img-perfil")
 //let nomePerfil = document.getElementById("perfil-nome")
 let idadePerfil = document.getElementById("perfil-idade")
 let emailPerfil = document.getElementById("perfil-email")
 let nomePerfil = document.querySelector("h2")
 

 let usuariologado = null
// Função para login
function login() {
 
let encontrado = false

console.log(usuarioID.value)
 for(let i=0; i < localStorage.length; i++){
   const chave = localStorage.key(i)
   let id = usuarioID.value
   let valor = localStorage.getItem(chave)
    let objUsuario = JSON.parse(valor)
   console.log( typeof objUsuario)
   console.log(objUsuario.nome)
   

  if(id === objUsuario.nome){
    
    sessionStorage.setItem("usuarioLogado", JSON.stringify(objUsuario));
    window.location.href= "perfil.html"
    encontrado = true
    return
  }
}
  if  (encontrado == false){
 alert("Usuário não encontrado. Por favor, verifique o nome de usuário ou cadastre-se")
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

        
        alert("Usuário cadastrado com sucesso!")
        contar++
        localStorage.setItem("contador", contar)
     //limpar campos
        nvnome.value =""  
        nvidade.value =""  
        nvemail.value =""
       

 }
}

 //teste para mostrar nome no perfil
// JavaScript em perfil.html
document.addEventListener("DOMContentLoaded", () => {

    //
    let imgPerfil = document.getElementById("img-perfil")
    let usuarioLogadoString = sessionStorage.getItem("usuarioLogado");
    let fotoperfil = sessionStorage.getItem("usuarioperfil")
   
    if (usuarioLogadoString) {
       
        let objLogado = JSON.parse(usuarioLogadoString);
        

        idadePerfil.textContent = `${objLogado.idade}`;
        emailPerfil.textContent = `${objLogado.email}`;
        nomePerfil.textContent = `${objLogado.nome}`;
        headerPerfil.querySelector("h1").textContent = "Seja bem vindo ao seu Perfil!\n" + objLogado.nome;

       
      
        
       
    } else {
        login.
        console.error("Nenhum usuário logado encontrado.");
        
    }
    let avatarSalvo = sessionStorage.getItem("avatarEscolhido");
    if (avatarSalvo) {
      
        imgPerfil.src = avatarSalvo;
    } else {
        
        imgPerfil.src = "perfil.png"; 
}
 if(fotoperfil){
      let fotoperfilObj = JSON.parse(fotoperfil)
      imgPerfil.src = fotoperfilObj
      console.log(fotoperfilObj);
    }
})


//função para mudar tema
function mudartema(){
    
   let valorbtn = temaAtual
    
   if( valorbtn ==="☀️"){
    //alterando cores para modo escuro
      bodyPerfil.style.backgroundImage= "url('Perfil.1.png')"
      sectionPerfil.style.backgroundColor = "#060b18ff"
      headerPerfil.style.backgroundColor = "#060b18ff"
     
      bodyPerfil.style.color= "#FFFFFF"
      btntema.innerHTML="🌙"

    }else{
      bodyPerfil.style.backgroundImage= "url('Fundo.png')"
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
    let opcao = prompt("Digite a opção desejada:\n 1 - avatar masculino \n2 - avatar feminino \n3 - avatar neutro  \n4 - avatar infantil")
    
        let novoAvatar = ""
        switch(opcao){
          case "1":
            novoAvatar = "Masculino.png"

            break
          case "2":
            novoAvatar = "Feminino.png"
            break
          case "3":
            novoAvatar = "Perfil.1.png"
            break
          case "4":
            novoAvatar = "Infantil.png"
            break
        }
        imgPerfil.src = novoAvatar
        sessionStorage.setItem("usuarioperfil", JSON.stringify(novoAvatar))
    }
    
)
sair.addEventListener("click",()=>{
    let sair = confirm("Deseja sair do perfil?") 
    if(sair){
      sessionStorage.removeItem("usuarioLogado")
      window.location.href= "index.html"
    }})