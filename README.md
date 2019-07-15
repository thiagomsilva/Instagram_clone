![](https://media.licdn.com/dms/image/C4E22AQHd1ws651kL1g/feedshare-shrink_800/0?e=1565827200&v=beta&t=9-wQbKp4V7dx0l-Nhvtzwl4ep0jGmfQgiQOyXUV-qYA)

**Curso Rocketseat NodeJS, ReactJS e React Native (em desenvolvimento)**

Tecnologias utilizadas foram NodeJS (Backend), ReactJS (Frontend), React Native (Mobile) e Banco de dados [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) (AWS cloud)

- **Passo a passo para execução da aplicação via terminal:**
    1. Start backend -> ``./backend/yarn dev``
    2. Start frontend -> ``./frontend/yarn start``
    3. Apos start do front acesso será local e automático em localhost:3000

- **Dependências do nodeJS:**
    **Multer**
    ```./backend/yarn add multer```
    dependência que lida com o post de multipart/form-data e automatiza o upload de arquivos.

    **Sharp**
    ``./backend/yarn add sharp``
    dependência que ajuda a trabalhar com imagens, para redimensionar.

    **Cors**
    ``./backend/yarn add cors``
    Permite acesso de qualquer aplicação ao backend

    **Socket.io**
    ``./backend/yarn add socket.io``
    Permite comunicação baseada em eventos bidirecional em tempo real

- **Dependências do ReactJS:**
    **React router dom**
    ``./frontend/yarn add react-router-dom``
    Trata as rotas através da URL

    **Axios**
    ``./frontend/yarn add axios``
    Permite utilizar uma URL básica para todas requisições

    **Socket io client**
    ``./frontend/yarn add socket.io-client``
    Biblioteca para acesso em tempo real do lado cliente