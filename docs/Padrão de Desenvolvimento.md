# Padrão de Desenvolvimento

## Organização e estrutura do repositório
O repositório está organizado da seguinte maneira:

### src/
Pasta responsável por conter todo o código do projeto. Suas pastas são:
- **assets:** Pasta onde vai ficar armazenado arquivos que não são códigos mas são utilizados na aplicação, como por exemplo, arquivos de mídia.
- **components:** Diretório onde contém todos os componentes do projeto. Cada componente é organizado em sua pasta que contém dois arquivos (o código com a estrutura HTML e JS e o arquivo de estilo CSS). Um componente é um elemento que compõe uma página.
- **fonts:** Diretório onde se armazena os arquivos do tipo fonte.
- **helpers:** Pasta com script utilitários, por exemplo, o arquivo de constantes.
- **pages:** Pasta que contém todas as páginas do projeto. Ela é organizada da mesma maneira que a pasta dos componentes. Uma página é um elemento gerado por uma rota na aplicação.

### docs/
Diretório que possui toda a documentção do projeto.

### public/
Diretório que possui arquivos públicos e que interagem com o arquivo index.html, que é a estrutura principal do HTML do projeto.

### Outros arquivos
- **index.css:** Nele você vai poder aplicar estilizações globais.
- **index.js:** Arquivo principal que renderiza o HTML da aplicação.

## Nomenclatura
Nessa seção é descrito o padrão de nomenclatura de arquivos e pastas no projeto. Os padrões mais conhecidos e que são utilizados no projeto são:
- **Pascal Case:** Formato que não possui espaços entre palavras e a primeira letra de cada palavra é em maiúscula. Por exemplo: MyComponent, TestingExample, Test.
- **Camel Case:** Formato que não possui espaços entre palavras e a primeira letra de cada palavra é em maiúscula, *exceto a primeira*. Por exemplo: myComponent, testingExample, test.
- **Snak Case:** Formato que não possui espaços entre palavras, mas possui o caracter "_" (*underline*), além disso, nenhuma palavra possui letra maiúscula. Por exemplo: my_component, testing_example, test.
- **Underscore Case:** Formato que não possui espaços entre palavras, mas possui o caracter "-" (*underscore*), além disso, nenhuma palavra possui letra maiúscula. Por exemplo: my-component, testing-example, test.

|Elementos|Regra|Observação|
|-|-|-|
|Arquivos e diretórios|snack case|exceção para arquivos e diretórios de componentes e páginas, que segue o padrão *pascal case*.|
|Funções, variáveis, constantes e keys em JS|camel case||
|Classes JS|pascal case||
|Classes e IDs CSS|underscore case||

### Regras Gerais
Aqui serão descritas regras que serão aplicadas para todos os elementos, seja ele, um arquivo, uma função, um diretório, uma variável.
- Qualquer elemento deve possuir o nome verboso, claro, descritivo, não muito longo e em inglês.

### Lint
No projeto está sendo utilizado o ESLint para auxiliar na padronização do código. Ele vai mostrar no terminal alguns avisos e erros quando o código não estiver com a indentação correta, strings sem aspas duplas, e etc... 


## Git Flow
A organização das branchs, commits e dos pull-requests serão organizados da seguinte maneira:

### Branchs
- **master:** Branch principal do projeto onde está o conteúdo de produção. Cuidado, pois o merge nessa branch vai realizar o auto deploy da aplicação em produção.
- **features**: São branchs que serão criadas a partir da branch *master*. Cada card no board representa uma feature, que consequentemente, haverá uma branch do tipo feature. A nomenclatura da branch seguirá o seguinte padrão: *feature/#ID*. Cada card possui um ID, então a branch vai possuir esse id no seu nome. Por exemplo: feature/#45, feature/#7, feature/#123.
- **bug:** São branchs que serão criadas a partir da branch *master*. Elas são criadas a partir de cards de bugs. Vão possuir a mesma nomenclatura das features, porém com as adaptações necessárias. Por exemplo: bug/#56, bug/#79, bug/#391.

### Commits
Os commits precisam ser descritivos, em português. Além disso, é obrigatório conter o ID da branch no commit, nesse formato `#ID: Mensagem...` Aqui vai alguns exemplos de commit:
```
#56: Inclusão de novo elemento na página Home.
```
```
#3: Estilização do Header.
```

### Pull-requests
Os Pull-requests só precisam conter o #ID do card.