# Web Applications 
Desenvolvimento de Aplicações Web 2018/2019, Mestrado Integrado em Engenharia Informática, Universidade do Minho, Braga - Portugal

Este repositório contém diversas aplicações web, desenvolvidas em NodeJS, ao longo do curso acima referido.  

## Resumo

<details>
  <summary>TP2</summary>

Em primeiro lugar, neste trabalho foi desenvolvido um <i>Document Type Defenition</i> com o objetivo de estruturar um ficheiro <b>XML</b> que contém a informação relativa ao presente documento. Este ficheiro <b>XML</b> terá obrigatoriamente de obdecer a todas as regras estabelecidas para poder ser validado.

Seguidamente, sendo que o objetivo era elaborar um ficheiro <b>HTML</b> que representa a página atual, foi necessária a concretização de um ficheiro <b>XSLT</b> que tem como objetivo a transformação do <b>XML</b> em <b>HTML</b>.

Finalmente, de modo a ir de encontro a um outro objetivo paralelo, foi desenvolvido novamente um <i>Document Type Defenition</i> mas agora para estruturar e validar  ficheiros da plataforma <i>clav.dglab.gov.pt</i>. 
</details>


<details>
  <summary>TP3</summary>

O objetivo deste trabalho era elaborar um <i>website</i> que traduzisse a informação presente num ficheiro <b>XML</b> proposto pela equipa docente que  resultaria da escolha de entre o livro do Alcorão e o livro de Mormon, neste caso foi selecionado o livro Alcorão.

Numa primeira fase procedeu-se a um estudo prévido da estrutura do ficheiro fornecido, nomeadamente os elementos e informação relevante para passar para o <i>website</i>.

Tendo isto, foi implementado um ficheiro <b>XSLT</b> com o objetivo de definir a apresentação do ficheiro <b>XML</b> no <i>browser</i>.  Destaca-se ainda o uso de índices para manter a informação organizada. Isto é, cada capítulo do livro é traduzido numa página <i>web</i> e indexado ao índice de capítulos. É possível ainda navegar no <i>website</i> de forma a percorrer todos os capítulos desejados. 
  
</details>

<details>
  <summary>TP4</summary>

O objetivo deste trabalho era elaborar um servidor capaz de estar a escuta numa porta e que respondesse a pedidos <i>GET</i>. A funcionalidade do servidor é mostrar ao cliente páginas <i>HTML</i> de informação de uma base de dados de arqueossítios do NW Português.

A primeira página que se apresenta no arranque do servidor é o índice de dois níveis, um primeiro que é o concelho, correspondente ao campo <i>CONCEL</i> do ficheiro de dados <i>XML</i>, e um segudo que é a identificação que corresponde ao campo <i>IDENTI</i>. 
  
Para tal foi necessário utilizar o modulo <i>URL</i>, de forma a fazer um <i>parsing</i> do <i>url</i>, e o modulo <i>FS</i> para fazer leitura de ficheiros. Numa primeira instância foi necessário alterar o ficheiro <i>XSL</i>, modificando as hiperligações, para quando o utilizador selecionar uma opção do índice o <i>url</i> seja modificado e assim possibitar a leitura do ficheiro solicitado. Neste sentido, decidiu-se implementar as hiperligações dos ficheiros indexados da seguinte forma <i> href="http://localhost:4004/arqelem?id={generate-id()}" </i>. No momento de seleção de um elemento do índice é feito <i>parsing</i> ao  <i> pathname</i>  do <i>url</i> e caso seja igual a "/arqelem" então é feita a pesquisa do identificador através da primitiva <i>url.query</i> e apresentado o ficheiro correspondente.

</details>

<details>
  <summary>TP5</summary>

O objetivo deste trabalho era elaborar um servidor capaz de estar a escuta numa porta
e que respondesse a pedidos <i>GET</i>. A funcionalidade do servidor é
mostrar ao cliente páginas <i>HTML</i> de informação de uma base de dados de Obras músicais de uma banda.

A base de dados é fornecida em ficheiros formato <i>json </i> onde cada um contem informação de uma música, nomeadamente os instrumentos. No entanto, não existe um ficheiro que contenha todas as músicas indexadas. Portanto a primeira tarefa a desenvolver foi um <i>script</i> na linguagem <i>gawk</i> em duas componentes:

- Um primeiro programa que percorre todos os ficheiros JSON da diretoria e coleciona para um ficheiro os campos id,titulo e tipo de música. 

- Um segundo programa que pega no resultado do anterior e origina um índice de dois níveis, onde o primeiro é o tipo de música e o segundo os títulos das músicas (selecionáveis).

Depois de produzido o ficheiro <i>index.html</i> seguiu-se a fase de implementação do servidor. Para responder ao cliente com as diferentes páginas, foi usado o modulo <b>url</b> para fazer uma <i>parsing</i> ao url e apresentar os ficheiros solicitados, ou seja, quando o utilizador seleciona uma música  é lido o ficheiro da música cujo título foi o selecionado. Foram desenvolvidos também ficheiros <i>.pug</i> para tratar do <i>design</i> do servidor. 

</details>

<details>
  <summary>TP6</summary>
<p>
O objetivo deste trabalho é a elaboração de um gestor de tarefas. Este gestor tem
de ser capaz de efetuar as seguintes funções:

<ul>

<li>Realizar o <b>registo de novas tarefas</b>. Este registo apresenta como parâmetros a descrição da tarefa, o prazo e o tipo 
de tarefa (Doméstica, Escolar, Profissional, Desportiva e Famíliar). 
</li>

<li>Realizar a <b>remoção de tarefas</b>. 
</li>

<li>Apresentar a <b>lista de tarefas</b> ao utilizador.
</li>

</ul>

</p>


<p>
Para implementar este gestor decidiu-se que o sistema disponibiliza ao utilizador
4 páginas distintas, página principal, página de registo, página 
de remoção de tarefa e ainda página de apresentação da lista de tarefas. 

</p>         

<p>
De forma a implementar todas as funcionalidades no sistema foi elaborado um servidor
em <i>NodeJS</i>. Este servidor apresenta duas condições iniciais que 
testam o método <i>HTML</i>, caso seja <i>GET</i>, testa-se o <i>pathname</i> do <i>url</i> e apresentam-se as várias páginas ao utilizador. Por outro lado,
caso seja <i>POST</i>, são implementados as funcionalidades de remoção de uma tarefa e registo de uma tarefa.


</p>

<p>
Realçam-se alguns pormenores usados, por exemplo, no momento de inserção de uma tarefa,
é calculada a data atual no servidor e adicionada ao ficheiro de dados, é adicionado
também um identificador
à tarefa e ainda uma flag que correponde ao estado(apagada, não apagada). Quando é
removida uma tarefa é alterado o estado da mesma e passa a ser
apresentada de forma diferente na lista de tarefas.

</p>

<p>
A seguir apresentam-se as várias páginas criadas durante o desenvolvimento do sistema.
<p align="center">
<table>

<tr>

<th>
   Home

</th>

<th>
   Registo

</th>

</tr>

<tr>

<td>

   <div><img src="imagens/home1.png" height="170" width="310"></div>

</td>

<td>

   <div><img src="imagens/registo1.png" height="170" width="310"></div>

</td>

</tr>
</table>



<table>

<tr>


<th>
   Lista

</th>

<th>
   Remover

</th>
</tr>

<td>

   <div><img src="imagens/lista.png" height="170" width="310"></div>

</td>

<td>

   <div><img src="imagens/remover.png" height="170" width="310"></div>

</td>

</tr>

</table>
</p>
</p>
</details>

<details>
  <summary>TP7</summary>

Este trabalho tem como objetivo a elaboração de um gestor de ficheiros. Este gestor tem de ser capaz de efetuar submissões de ficheiros, armazená-los e ainda visualizar os ficheiros já guardados.

De forma a implementar todas as funcionalidades no sistema foi elaborado um servidor em <i>NodeJS</i>, utilizando o módulo <i>express</i> que, quando o método é <i>GET</i> apresenta ao utilizador as várias páginas, nomeadamente a página inicial e a página de registo (simultaneamente a que apresenta  a lista de ficheiros registados) e quando é <i>POST</i> por um lado, guarda o ficheiro submetido numa diretoria escolhida e por outro, acrescenta a um ficheiro <i>JSON</i> informação relativa ao ficheiro recebido.

A seguir apresentam-se as várias páginas criadas durante o desenvolvimento do sistema.
<table>
 <tr>
    <th>
       Home
    </th>
    <th>
       Registo/Lista de ficheiros
    </th>
 </tr>
 <tr>
    <td>
       <div><img src="imagens/home.png" height="170" width="310"></div>
    </td>
    <td>
       <div><img src="imagens/registo.png" height="170" width="310"></div>
    </td>
 </tr>
</table>

</details>

<details>
  <summary>TP8</summary>
  
Este trabalho tem como objetivo a elaboração de um gestor de ficheiros. Este gestor
tem de ser capaz de efetuar submissões de ficheiros, armazená-los e ainda
visualizar os ficheiros já guardados. Ao contrário do trabalho prático anterior, agora
terá de existir programação no lado do cliente para atualizar a tabela de ficheiros
já armazenados automaticamente após o preenchimento do formulário sem a necessidade
de efetuar pedidos <i>POST</i> ao servidor.

De forma a implementar todas as funcionalidades no sistema foi elaborado um servidor
em <i>NodeJS</i>, utilizando o módulo <i>express</i> que, quando
o método é <i>GET</i> apresenta ao utilizador as várias páginas, nomeadamente a página inicial e a página
de registo (simultaneamente a que apresenta 
a lista de ficheiros registados). 

Para resolver a problemática da atualização automática da tabela, foi desenvolvido
um programa usando Jquery e Ajax

A seguir apresentam-se as várias páginas criadas durante o desenvolvimento do sistema.

<table>
<tr>
  <th>
     Home
  </th>
  <th>
     Registo/Lista de ficheiros
  </th>
</tr>
<tr>
  <td>
     <div><img src="imagens/home.png" height="170" width="310"></div>
  </td>
  <td>
     <div><img src="imagens/registo.png" height="170" width="310"></div>
  </td>
</tr>
</table>
         
</details>



## Autores

* [Joel Rodrigues](https://github.com/JoelRodrigues58)
