# React + Vite

# Aplicação de Citações Aleatórias

Este projeto é uma simples aplicação React que exibe uma citação aleatória e permite ao usuário gerar novas citações ao clicar em um botão.

---

## 📋 Funcionalidades

- Exibe uma citação motivacional acompanhada do autor.
- Gera uma nova citação aleatória ao clicar no botão **"Nova citação"**.
- Interface simples e intuitiva.

---

## 🚀 Tecnologias Utilizadas

- **React**: Biblioteca para construção de interfaces de usuário.
- **JavaScript (ES6+)**: Linguagem de programação principal.
- **CSS**: Estilização básica do layout (arquivo `App.css`).
- **Vite**: Ferramenta de build rápida para projetos front-end.
  - [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) utiliza [Babel](https://babeljs.io/) para Fast Refresh.
  - [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) utiliza [SWC](https://swc.rs/) para Fast Refresh.

---

## 📂 Estrutura do Projeto

```plaintext
src/
|-- App.js              # Componente principal da aplicação
|-- style/
|   |-- App.css         # Arquivo de estilos
|-- index.js            # Ponto de entrada da aplicação
|-- quotes/             # (Opcional: caso deseje modularizar as citações)
```

---

## 📖 Como Executar o Projeto

### Pré-requisitos:

- Node.js instalado em sua máquina.
- Gerenciador de pacotes `npm` ou `yarn`.

### Passos:

1. Clone este repositório:

```bash
$ git clone https://github.com/seu-usuario/nome-do-repositorio.git
```

2. Acesse o diretório do projeto:

```bash
$ cd nome-do-repositorio
```

3. Instale as dependências:

```bash
$ npm install
# ou
$ yarn install
```

4. Inicie a aplicação:

```bash
$ npm run dev
# ou
$ yarn dev
```

5. Abra o navegador em: [http://localhost:3000](http://localhost:3000)

---

## 🎨 Personalização

1. **Adicionar novas citações:**
   - Abra o arquivo `App.js` e adicione novos itens ao array `quotes`:

```javascript
const quotes = [
  { texto: "Nova citação", autor: "Novo Autor" },
  // Outras citações...
];
```

2. **Estilo:**
   - Personalize o arquivo `App.css` para ajustar o layout e a aparência da aplicação.

---

## 🌟 Demonstração

![Demonstração do Projeto](https://via.placeholder.com/600x300.png?text=Insira+uma+imagem+aqui)

---

## 🤝 Contribuição

Contribuições são bem-vindas! Siga os passos abaixo:

1. Faça um fork deste repositório.
2. Crie uma branch para a funcionalidade/ajuste:

```bash
git checkout -b minha-feature
```

3. Faça o commit das suas alterações:

```bash
git commit -m 'Adiciona nova funcionalidade'
```

4. Envie para sua branch:

```bash
git push origin minha-feature
```

5. Abra um Pull Request.

---

## 📝 Licença

Este projeto está sob a licença MIT. Sinta-se à vontade para utilizá-lo e adaptá-lo como desejar.

---

Desenvolvido por [Willian Arantes].
