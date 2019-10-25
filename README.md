# InstaClone

**Curso Rocketseat NodeJS, ReactJS e React Native (em desenvolvimento)**

Tecnologias utilizadas foram NodeJS (Backend), ReactJS (Frontend), React Native (Mobile) e Banco de dados [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) (AWS cloud)

- **Passo a passo para execução da aplicação via terminal:**

1. Start backend -> `./backend/yarn dev`
2. Start frontend -> `./frontend/yarn start`
3. Apos start do front acesso será local e automático em localhost:3000

**Dependências do nodeJS:**</br>

- **Multer**</br>
  `./backend/yarn add multer`</br>
  dependência que lida com o post de multipart/form-data e automatiza o upload de arquivos.</br>

- **Sharp**</br>
  `./backend/yarn add sharp`</br>
  dependência que ajuda a trabalhar com imagens, para redimensionar.</br>

- **Cors**</br>
  `./backend/yarn add cors`</br>
  Permite acesso de qualquer aplicação ao backend</br>

- **Socket.io**</br>
  `./backend/yarn add socket.io`</br>
  Permite comunicação baseada em eventos bidirecional em tempo real</br>

**Dependências do ReactJS:**</br>

- **React router dom**</br>
  `./frontend/yarn add react-router-dom`</br>
  Trata as rotas através da URL</br>

- **Axios**</br>
  `./frontend/yarn add axios`</br>
  Permite utilizar uma URL básica para todas requisições</br>

- **Socket io client**</br>
  `./frontend/yarn add socket.io-client`</br>
  Biblioteca para acesso em tempo real do lado cliente</br>

**Configurações e dependências do React Native:**</br>

- **React Native CLI**</br>
  `./mobile/yarn global add react-native-cli`</br>
  Com o NodeJS instalado podemos seguir para a instalação do CLI (Command Line Interface) do React Native</br>

- **React Native init Nome do Projeto**</br>
  `./mobile/React Native init nome do projeto`</br>
  Para criar o projeto com o nome “nome do projeto”</br>

- **Rodar a aplicação via terminal**</br>
  `.mobile/react-native run-ios --simulator "iPhone Xs Max"` ou `./mobile/react-native run-android` (necessário abrir o emulador antes de executar o comando)</br>

- **React Navigation e React Native Gesture Handler**</br>
  `./mobile/yarn add react-navigation react-native-gesture-handler`</br>
  react-navigation é a biblioteca para permitir navegação dentro da aplicação e a biblioteca react-native-gesture-handler serve para permitir gestos dentro do App ex: Arrastar p/voltar pra página anterior.</br>

- **React Native link React Native Gesture Handler**</br>
  `./mobile/react-native link react-native-gesture-handler`</br>
  biblioteca que faz o link nativo para o IOS e Android modificando seus códigos nativos.
  Obs: necessário reinstalar novamente o App no dispositivo (físico e/ou virtual)
  com o comando Ex: `react-native run-ios --simulator "iPhone Xs Max"`</br>

- **React Native Reset Cache**</br>
  `./mobile/react-native start --reset-cache`</br>
  limpa o cache e reinicia com uma nova instalação da aplicação</br>

- **Axios**</br>
  `./mobile/yarn add axios`</br>
  para fazer chamadas API para o backend da aplicação</br>

- **Socket io client**</br>
  `./mobile/yarn add socket.io-client`</br>
  Biblioteca para acesso em tempo real do lado cliente</br>

- **React Native Image Picker**</br>
  `./mobile/yarn add react-native-image-picker`</br>
  biblioteca para permitir acesso a câmera e a galeria de fotos do dispositivo mobile</br>

- **Link React Native Image Picker**</br>
  `./mobile/react-native link react-native-image-picker`</br>
  faz ajustes para linkar as funções nativas do dispositivo com a aplicação
  Obs: acessar a documentação para ajustes nativos Android e IOS em https://github.com/react-native-community/react-native-image-picker/blob/master/docs/Install.md</br>
