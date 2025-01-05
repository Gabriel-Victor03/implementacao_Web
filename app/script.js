// 757d452e50mshd5be8e1e8fe14dep11a429jsnb6d6104a54bc - chave novinha
// 967f61d29fmshe602c42b71e1b85p1334ebjsndb02bb310ead - outra chave novinha 
// f844530e64msh627c7fe5b5905cdp1e5685jsn4f872119e00b - chave novissima

let pesquisa;
let qtd;
let idioma;

function pesquisar() {
    pesquisa = document.getElementById('pesquisa').value;
    // pesquisa = pesquisa.toLowerCase().split(" "); NÃO É NECESSÁRIO SEPARAR A STRING
    qtd = document.getElementById('qtd').value;
    //pais = document.getElementById("opcoesPais").value;
    idioma = document.getElementById("opcoesIdioma").value;
    console.log('Pesquisando sobre', pesquisa, 'em', idioma); // ESSA LINHA SERVE APENAS PARA TESTAR SE ESTÁ FUNCIONANDO ATÉ AQUI. POR ENQUANTO SIM.

    let url = 'https://google-search72.p.rapidapi.com/search?q=' + pesquisa + '&gl=br&lr=lang_' + idioma + '&num='+qtd+'&start=0';
    requisicao(url);

}


document.getElementById('btnPesquisar').addEventListener('click', pesquisar);





async function requisicao(url) {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'f844530e64msh627c7fe5b5905cdp1e5685jsn4f872119e00b',  // CHAVE
            'X-RapidAPI-Host': 'google-search72.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.json(); // converte a resposta da requisição para JSON

        if (result.items && result.items.length > 0) { // verificar se há pelo menos um item no resultado

            const titulos = [];
            const links = [];
            const descricao =[];

            
            result.items.forEach(item => {  // Iterar sobre todos os itens e adicionar os títulos ao array  
                const titulo = item.title;
                const link = item.link;
                const descr = item.snippet;
                titulos.push(titulo);
                links.push(link);
                descricao.push(descr);
            });

            formatacao(titulos, links, descricao);
            
            // const Rtitulo = document.getElementById('tituloResultado').innerHTML = titulos.join('<br>'); // Imprimir o título na tela
            // const Rlink = document.getElementById('linkResultado').innerHTML = links.join('<br>');
        } else {
            console.error('A resposta não contém itens.');
        }
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}





function formatacao(titulos, links, descricao) {
    const resultados = document.getElementById('resultados');

    // Limpar qualquer conteúdo existente no elemento
    resultados.innerHTML = '';

    const titulo =document.getElementById('titulo');
    titulo.innerText= "Resultados da sua pesquisa:";

    

    // Adicionar títulos como links aos elementos HTML
    for (let i = 0; i < titulos.length; i++) {
        
        const divResult =document.createElement('div');
        divResult.className= ('campoResult');

        const tituloElement = document.createElement('p');
        tituloElement.className='tituloLink';
        const descrElement =document.createElement('p');
        const espaco =document.createElement('br');
        tituloElement.textContent = titulos[i];
        descrElement.textContent = descricao[i];
        tituloElement.style.cursor = 'pointer'; // Adicionar estilo de cursor para indicar que é clicável

        tituloElement.addEventListener('click', function() {    // Adicionar evento de clique para direcionar para o link correspondente
            window.open(links[i], '_blank'); // Abrir o link em uma nova aba
        });
        descrElement.addEventListener('click', function() {    // Adicionar evento de clique para direcionar para o link correspondente
            window.open(links[i], '_blank'); // Abrir o link em uma nova aba
        });

        let botaoRemover = document.createElement('button');   // Criar um botão para remover o item
        botaoRemover.className = 'botao-excluir';

        var iconeDelete = document.createElement('i');
        iconeDelete.className = 'material-icons';
        iconeDelete.textContent = 'delete';
        botaoRemover.appendChild(iconeDelete);
        // botaoRemover.appendChild(document.createTextNode('Remover'));

        botaoRemover.onclick = function () {
            // tituloElement.remove();  // Ao clicar no botão, remover o item da lista
            // descrElement.remove();
            // espaco.remove();
            // linha.remove();
            divResult.remove();
            botaoRemover.remove();
        };

        divResult.appendChild(tituloElement);
        divResult.appendChild(descrElement);
        divResult.appendChild(botaoRemover);
        divResult.appendChild(espaco);
        divResult.appendChild(espaco);

        resultados.appendChild(divResult);

        // resultados.appendChild(tituloElement); // Adicionar elementos ao DOM
        // resultados.appendChild(descrElement);
        // resultados.appendChild(botaoRemover); // Adicionar o botão ao item de lista
        // resultados.appendChild(espaco);
        // resultados.appendChild(espaco);
        // resultados.appendChild(linha);

    }
}


           
            
           

            

            // Adicionar o item à lista
            // document.getElementById('listaValores').appendChild(novoItem);

