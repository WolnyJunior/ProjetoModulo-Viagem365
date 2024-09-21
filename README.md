## Índice
- [Resumo](#resumo)
- [Desenvolvimento](#desenvolvimento)
- [Instalação](#instalação)
- [Branches](#branches)
- [Melhorias](#melhorias)


## Resumo
Para a galera que curte aquela TRIP, o software proposto é uma plataforma de gestão de viagens, permitindo aos usuários cadastrarem destinos, compartilharem comentários e avaliações. Com intúito de ajudar na criação de uma comunidade onde viajantes possam divulgar suas experiências.

- [Índice](#índice)

## Desenvolvimento
- Foi utilizada uma API externa: <a href="https://nominatim.openstreetmap.org/ui/search.html">OpenStreetMap</a> para fazer as requisições http e buscar os dados de endereço e localização, de usuários e destinos.

- [Índice](#índice)

# Instalação

`npm install react-hook-form`
- Instalação de bicliotecas de formulários react

`npm i react-router-dom`
- Instalar biblioteca para gerenciamento de rotas

`npm install --save-dev  json-server`
- Instalar json-server em dev-dependencies para utilizar durante o desenvolvimento

`json-server 'nome do arquivo .json'`
- Executar esse comando na pasta do aquivo.JSON para ler os arquivos, criar os endpoints e abrir no navegador criando um id para cada objeto.

`npm install react-bootstrap bootstrap`
- Instalar Biblioteca bootstrap no projeto react

`npm install lucide-react`
- Instalações de biblioteca de ícones

`npm install @fortawesome/fontawesome-free`
- Instalação de biblioteca de ícones

- [Índice](#índice)

## Branches

### Main - branch principal
### Develop - branch de desenvolvimento
### Autenticação - branch de criação dos contexts
### Feature-Routes - branch de criação das rotas e atualizações
### Dashboard-Components - branch de criação da dashboard e dos componentes
### Feature-Funcionalidades - branch geral de ajustes do código

- [Índice](#índice)

## Melhorias
- Concluir a página primeiramente.
- Fazer a integração com o backend
- Ao utilizar os links do Navbar, a página estava apresentando um erro e não realizava o scroll, deve ser corrigido.
- Encontrar uma maneira de buscar imagens do local ao realizar o cadastro, para incluir nos cards da dashboard.