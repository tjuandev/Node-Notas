# NodeNotas

Uma aplicação de terminal Node para gestão de Tarefas e Escritura de Textos.


## Instalação

Baixe o arquivo ZIP do repositório e descompacte.


## Tecnologias usadas

NodeJS como base;

Módulos: Colors, FS e Yargs.

## Como usar:


### Dependências que você deve instalar:

1. yargs
2. colors

Para instalar: 

1. Localize o diretório que se encontra os arquivos do NodeNotas em seu terminal;
2. Execute um dos códigos abaixo:

Se usa NPM:

```node
npm install yargs
npm install colors

```

ou Yarn:


``` node
yarn add yargs
yarn add colors
```



### Adicionar Notas

1. Apague o arquivo 'notes.json';
1. Localize o diretório que se encontra os arquivos do NodeNotas em seu terminal e digite o comando abaixo:

#### 

```node
node app.js add --title="Título Customizado por Você" --body="Descrição da sua nota"
```

1. Add é o comando que serve para adicionar sua nota;
2. title é uma variável obrigatória e marca o título de sua nota;
3. body é outra variável obrigatória e marca a descrição da sua nota.

Após a execução do código, irá ser criado automaticamente o arquivo 'notes.json' se direcione até ele e lá deve aparecer a sua escritura em formato JSON.

### Remover Notas

1. Localize o diretório que se encontra os arquivos do NodeNotas em seu terminal e digite o comando abaixo:



```node
node app.js remove --title="Título de uma nota existente" 
```
Se você digitar o título de uma nota existente ela irá ser apagada, se não uma mensagem de aviso será mostrada.

### Ler Notas

1. Localize o diretório que se encontra os arquivos do NodeNotas em seu terminal e digite o comando abaixo:


```node
node app.js read --title="Título de uma nota existente" 
```

Apresenta funcionamento semelhante ao remove, só muda que o programa irá executar um console.log() das informações das suas notas caso você digite um título válido.

### Listar Notas

1. Localize o diretório que se encontra os arquivos do NodeNotas em seu terminal e digite o comando abaixo:


```node
node app.js list
```

Assim ele irá mostra uma lista com todas as suas notas.

Apresenta funcionamento semelhante ao remove, só muda que o programa irá executar um console.log() das informações das suas notas caso você digite um título válido.


## Autor

Na data do projeto, sou um programador web mirim de 16 anos, esse é o marco dos meus estudos em NodeJS e consequentemente BackEnd, anteriormente tive um sólido contanto com HTML, CSS, Javascript e ReactJS. Meu nome é Thiago Juan e aqui vai o direcionamento para minhas redes sociais:


[LinkedIn](https://www.linkedin.com/in/thiago-juan-4725771b4/)

[Instagram](https://www.instagram.com/tjuan.dev/)


## License
[MIT](https://choosealicense.com/licenses/mit/)
