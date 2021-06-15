var botaoAdicionar=document.querySelector("#adicionar-produto");
botaoAdicionar.addEventListener("click",function(event){
    event.preventDefault();

    var form=document.querySelector("#form-adiciona");

    var desc=form.descricao.value;
    var qtd=form.quantidade.value;
    var cod=form.codigo.value;
    


    
    var tabelanova=document.createElement("tr");
    var codtd=document.createElement("td");
    var desctd=document.createElement("td");
    var qtdtd=document.createElement("td");

    desctd.textContent=desc;
    qtdtd.textContent=qtd;
    codtd.textContent=cod;

    tabelanova.appendChild(codtd);
    tabelanova.appendChild(desctd);
    tabelanova.appendChild(qtdtd);
    
    var tabelaprincipal=document.querySelector("#tabela-produtos");
    tabelaprincipal.appendChild(tabelanova);
    //codigo:
    //gerarCodigo();
});

/*function gerarCodigo() {
    var tabela=document.querySelector("tabela-produtos");
    var codHTML=tabela.getElementsByClassName("info-codigo").innerText;
    alert(codHTML);

}*/