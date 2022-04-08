# Haxe
Guia de como instalar/compilar Linguagem Haxe no Vs Code.

Haxe por ser uma linguagem recente em computação, apresenta pouco conteúdo e explicações na internet em geral, e o conteudo encontrado é somente em inglês e mesmo assim muito mal 
explicado e raso.

Então para facilitar, aqui vai um guia de instalação no Visual Studio Code em Português.

1-Tenha em mente que Haxe é compilado por outras linguagens, e as duas que vou ensinar no guia são JavaScript e Phyton, logo na linguagem que você deseja que Haxe seja compilada, 
você deve ter as devidas extensões e preparação de ambiente em uma dessas linguagens para avançar nos proximos passos.

2-Então vamos lá, baixe a extensão Haxe no Vscode. (Recomendo também baixar a extensão Haxe Checkstyle que ajuda na identicação de alguns erros, porém não é obrigatória)

![extensões](https://user-images.githubusercontent.com/82849005/162436184-2b99518d-7c25-4c18-9a44-9374c7b03e4f.png)

3-Abra um terminal no Vscode e utilize um terminal que compile Linux (Gosto do PowerShell e do Git Bash)

![terminal](https://user-images.githubusercontent.com/82849005/162436732-a0b3f392-65a1-4035-b2d1-4cc6417a4390.png)


4- Crie um arquivo, dê um nome e no final coloque .hx

![Arquivo](https://user-images.githubusercontent.com/82849005/162437693-ea73551b-3154-433b-a0f9-053317eab9d6.png)

Aqui crei um arquivo chamado HelloWorld.hx

5- Crie uma classe dentro do arquivo, com o nome do arquivo sem o .hx

![print codigo](https://user-images.githubusercontent.com/82849005/162438713-97f519a7-9cba-4738-8c4a-8c3e8420fde5.png)

Aqui criei uma classe HelloWorld que printa Hello World em Haxe.

6- Agora para compilar esse código em JavaScript ou em Python, digite o seguinte no terminal: 

JavaScript: 

![js](https://user-images.githubusercontent.com/82849005/162439417-d07f228f-7390-4ba0-994d-7cae94e31f5c.png)


Python: 

![py](https://user-images.githubusercontent.com/82849005/162439430-9618bf3e-cde9-4d81-ac61-95feec8c362b.png)

7- Com isso será criado um arquivo automaticamente na respectiva linguagem que escolheu (JavaScript ou Phyton) que representa o Hello World em Haxe.

Em JavaScript: 

![js hx](https://user-images.githubusercontent.com/82849005/162440539-9b941499-1549-4199-9130-b9da339e3e4e.png)

Em Phyton:

![py hx](https://user-images.githubusercontent.com/82849005/162440553-de77d5f3-18bd-4c15-9921-3b5a68652061.png)


8- Agora para obter o resultado no terminal.

Em phyton digite python HelloWorld.py no terminal

![resultadopy](https://user-images.githubusercontent.com/82849005/162442025-e8d31a94-ddfa-4712-959c-5962a4a2341b.png)

Em JavaScript é um pouco mais complicado, mas vou dar duas opções

 Primeira opção: Baixar o Node.js (existem muitos videos na internet ensinando isso de forma fácil) e após a instalação digite Node HelloWorld.js
 
 ![node](https://user-images.githubusercontent.com/82849005/162443650-0943d2a3-78aa-49e5-afc6-675ec3eaf183.png)

Segunda opção: Baixe a extensão Live Server no Vscode e crie um arquivo .html para chamar o JavaScript nele.

![image](https://user-images.githubusercontent.com/82849005/162444288-db9c2ba1-d751-48f5-9047-f1f08e756957.png)

Aqui está um exemplo raso de um html chamando o JavaScript

Em seguida clique em Go live( que abre uma porta web graças ao Live Server) 
 
 

