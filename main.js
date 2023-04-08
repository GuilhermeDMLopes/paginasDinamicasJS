//Arquivo responsavel por realizar o dinamismo da pagina html

//Os navegadores não deixam que sejam executados nenhuma ação de som, etc antes de uma interação do usuario
//Para isso, precisaremos criar uma função para executar o som, quando houver alguma interação, no caso, apertar o botão pom
function tocaSomPom() {
    //Reproduzindo um som dentro da tag audio ao clicar em um botao
    
    //Acessando a tag audio pelo id e executando o audio
    //Digitando o mesmo codigo no navegador, sera possivel ouvir o som do audio
    document.querySelector('#som_tecla_pom').play();
}

//Executando função tocaSomPom ao clicar no botão com a classe '.tecla_pom'.
//Removemos o parenteses da função tocaSomPom para que ela só seja executada ao clicar no botão
document.querySelector('.tecla_pom').onclick = tocaSomPom;

