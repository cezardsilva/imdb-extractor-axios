# IMDb Data Extractor (React + Vite + Axios)

## Captura de Tela do Projeto

Um aplicativo web moderno para extrair e exibir informações detalhadas de filmes e séries do IMDb, construído com React, Vite e Axios para requisições HTTP robustas.

✨ Funcionalidades Principais

    🔍 Busca por ID do IMDb (ex: tt0944947)

    🎬 Exibição completa de informações do título

    📊 Sistema de avaliação com estrelas

    🎥 Visualização de elenco e equipe técnica

    📱 Design totalmente responsivo

    ⚡ Performance otimizada com Vite

    🔄 Busca automática via parâmetro de URL

🛠 Stack Tecnológica

    React 18 - Biblioteca front-end

    Vite - Build tool ultrarrápido

    Axios - Cliente HTTP para requisições robustas

    CSS Modules - Estilização componentizada

🚀 Benefícios do Axios

1. Interceptores Poderosos

```sh
// Adicionar token de autenticação a todas as requisições
axios.interceptors.request.use(config => {
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// Tratamento global de erros
axios.interceptors.response.use(
  response => response,
  error => {
    if (error.response.status === 401) {
      // Redirecionar para login
    }
    return Promise.reject(error);
  }
);
```

2. Cancelamento de Requisições

```sh
const source = axios.CancelToken.source();

// Fazer requisição com token de cancelamento
fetchMovieData(imdbId, { cancelToken: source.token });

// Cancelar requisição quando necessário
source.cancel('Operação cancelada pelo usuário');
```

3. Timeout Automático

```sh
axios.post(API_URL, data, { timeout: 5000 }); // 5 segundos
```

4. Transformação de Dados

```sh
// Transformar dados antes que eles cheguem ao then/catch
axios.get(API_URL, {
  transformResponse: [
    function (data) {
      // Manipular dados da resposta
      return JSON.parse(data).map(item => ({
        ...item,
        fullTitle: `${item.title} (${item.year})`
      }));
    }
  ]
});
```

5. Proteção [CSRF](CSRF) Automática

```sh
// Axios automaticamente envia cabeçalhos XSRF-TOKEN
axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
```

🏗️ Estrutura do Projeto

```sh
src/
├── components/      # Componentes React
├── services/        # Lógica de API com Axios
├── assets/          # Imagens e recursos
├── App.jsx          # Componente principal
├── main.jsx         # Ponto de entrada
└── styles/          # Arquivos de estilo
```

🚀 Como Executar
Pré-requisitos

- Node.js (v16+)

- npm ou yarn

Instalação

```sh
git clone https://github.com/cezardsilva/imdb-data-extractor-axios.git
cd imdb-data-extractor-axios
npm install
```

Desenvolvimento

```sh
npm run dev
```

Build para Produção

```sh
npm run build
```

🌍 API Utilizada

O projeto consome a API não-oficial do IMDb:

```sh
https://graph.imdbapi.dev/v1
```

🤝 Como Contribuir

- Faça um fork do projeto

- Crie uma branch (git checkout -b feature/nova-feature)

- Commit suas alterações (git commit -m 'Adiciona nova feature')

- Push para a branch (git push origin feature/nova-feature)

- Abra um Pull Request

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).

---
