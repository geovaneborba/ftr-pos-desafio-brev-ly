![projeto-brev-ly](https://github.com/user-attachments/assets/c6623062-dea0-4df0-aec2-7b8af8aadd1b)

<p align="center">
  <img alt="Repo size"  src="https://img.shields.io/github/repo-size/geovaneborba/ftr-pos-desafio-brev-ly?color=4f46e5&style=for-the-badge">
  <img alt="GitHub top language"  src="https://img.shields.io/github/languages/top/geovaneborba/ftr-pos-desafio-brev-ly?color=4f46e5&style=for-the-badge"> 
  <img alt="GitHub language count"  src="https://img.shields.io/github/languages/count/geovaneborba/ftr-pos-desafio-brev-ly?color=4f46e5&style=for-the-badge">
</p>

<p align="center">
<a href="#dart-sobre">Sobre</a> &#xa0; | &#xa0;
<a href="#rocket-tecnologias">Tecnologias</a> &#xa0; | &#xa0;
<a href="#warning-pré-requisitos"> Pré requisitos</a> &#xa0; | &#xa0;
<a href="#checkered_flag-começando">Começando</a> &#xa0;
</p>

<br>

## :dart: Sobre

Este desafio faz parte da Fase 1 da Pós-Graduação Full Stack da [Faculdade de Tecnologia Rocketseat](https://www.rocketseat.com.br/). <br />
O objetivo é desenvolver uma aplicação full stack de encurtador de links, onde o usuário poderá:

- 🔗 Encurtar links;
- 📄 Visualizar os links encurtados;
- ❌ Deletar links;
- 📊 Acompanhar o histórico de acessos de cada link;
- 📁 Gerar relatórios e exportá-los em formato CSV.

Essa aplicação servirá como base prática para consolidar os conhecimentos adquiridos durante o curso, aplicando conceitos de Front-end, Back-end, e DevOps.

<p align="right">(<a href="#top">Voltar para o topo</a>)</p>

## :clipboard: Requisitos Back-end

- [x] Deve ser possível criar um link
  - [x] Não deve ser possível criar um link com URL encurtada mal formatada
  - [x] Não deve ser possível criar um link com URL encurtada já existente
- [x] Deve ser possível deletar um link
- [x] Deve ser possível obter a URL original por meio de uma URL encurtada
- [x] Deve ser possível listar todas as URL’s cadastradas
- [x] Deve ser possível incrementar a quantidade de acessos de um link
- [x] Deve ser possível exportar os links criados em um CSV
  - [x] Deve ser possível acessar o CSV por meio de uma CDN (Amazon S3, Cloudflare R2, etc)
  - [x] Deve ser gerado um nome aleatório e único para o arquivo
  - [x] Deve ser possível realizar a listagem de forma performática
  - [x] O CSV deve ter campos como, URL original, URL encurtada, contagem de acessos e data de criação.

<p align="right">(<a href="#top">Voltar para o topo</a>)</p>

## :clipboard: Requisitos Front-end

- [x] Deve ser possível criar um link
  - [x] Não deve ser possível criar um link com encurtamento mal formatado
  - [x] Não deve ser possível criar um link com encurtamento já existente
- [x] Deve ser possível deletar um link
- [x] Deve ser possível obter a URL original por meio do encurtamento
- [x] Deve ser possível listar todas as URL’s cadastradas
- [x] Deve ser possível incrementar a quantidade de acessos de um link
- [x] Deve ser possível baixar um CSV com o relatório dos links criados

Além disso, também temos algumas regras importantes específicas para o front-end:

- [x] É obrigatória a criação de uma aplicação React no formato SPA utilizando o Vite como `bundler`;
- [x] Siga o mais fielmente possível o layout do Figma;
- [x] Trabalhe com elementos que tragam uma boa experiência ao usuário (`empty state`, ícones de carregamento, bloqueio de ações a depender do estado da aplicação);
- [x] Foco na responsividade: essa aplicação deve ter um bom uso tanto em desktops quanto em celulares.

<p align="right">(<a href="#top">Voltar para o topo</a>)</p>

## :rocket: Tecnologias

As seguintes tecnologias foram usadas na construção do projeto:

- [Node.js](https://nodejs.org/en/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Node.js](https://nodejs.org/en/)
- [Fastify](https://www.fastify.io/)
- [Cloudflare R2](https://www.cloudflare.com/products/r2/)
- [Drizzle ORM](https://orm.drizzle.team/)

Outras dependências e ferramentas utilizadas podem ser encontradas no arquivo `package.json` de cada projeto.

Back-end: [package.json](./server/package.json)

Front-end: [package.json](./web/package.json)

<p align="right">(<a href="#top">Voltar para o topo</a>)</p>

## :warning: Pré-requisitos

🐳 Este projeto usa Docker Compose para orquestrar os serviços de back-end e banco de dados. Antes de começar,
certifique-se de ter as seguintes ferramentas instaladas na sua máquina:

- [Git](https://git-scm.com)
- [Node.js](https://nodejs.org/en/)
- [Docker](https://www.docker.com/)
- [pnpm](https://pnpm.io/installation)

<p align="right">(<a href="#top">Voltar para o topo</a>)</p>

## :checkered_flag: Começando

### ⚙️ Back-end

#### 🏠 Executando localmente

###### ⚠️ Utilize o arquivo `.env.example` como base para criar o arquivo `.env` em cada projeto.

```bash
# Clone o repositórios abaixo
$ git clone https://github.com/geovaneborba/ftr-pos-desafio-brev-ly.git

# Entre na pasta server
$ cd ftr-pos-desafio-brev-ly/server

# Copia o arquivo .env.example para .env e preencha as variáveis de ambiente
$ cp .env.example .env

# Instale as dependências
$ pnpm install

# Execute as migrations
$ pnpm db:migrate

# Execute o projeto
$ pnpm dev

# Caso queira subir apenas o banco de dados, execute o seguinte comando:
$ docker compose up -d db

# O serviço estará disponível em http://localhost:3333
```

<p align="right">(<a href="#top">Voltar para o topo</a>)</p>

#### 🐳 Executando com Docker Compose (opcional)

###### ⚠️ Utilize o arquivo `.env.example` como base para criar o arquivo `.env` em cada projeto.

```bash
# Clone o repositórios abaixo
$ git clone https://github.com/geovaneborba/ftr-pos-desafio-brev-ly.git

# Entre na pasta server
$ cd ftr-pos-desafio-brev-ly/server

# Copia o arquivo .env.example para .env e preencha as variáveis de ambiente
$ cp .env.example .env

# Subir a stack (api + banco de dados)
$ docker compose up -d --build

# O serviço estará disponível em http://localhost:3333
```

<p align="right">(<a href="#top">Voltar para o topo</a>)</p>

### 💻 Front-end

###### ⚠️ Utilize o arquivo `.env.example` como base para criar o arquivo `.env` em cada projeto.

```bash
# Entra na pasta web e instale as dependências
$ cd ftr-pos-desafio-brev-ly/web

# Instale as dependências
$ pnpm install

# Copia o arquivo .env.example para .env
$ cp .env.example .env

# Execute o projeto
$ pnpm dev

# Acesse o projeto em seu navegador: http://localhost:5173, ou entre pela url exibida no terminal.

```

<p align="right">(<a href="#top">Voltar para o topo</a>)</p>

<p align="center">Feito com ❤️ por <a href="https://github.com/geovaneborba" target="_blank">Geovane Borba</a></p>
