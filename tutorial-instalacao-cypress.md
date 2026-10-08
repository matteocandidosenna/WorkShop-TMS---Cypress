# Tutorial de instalação — Node.js e Cypress no Windows

Faça esta preparação **antes do workshop**. Você precisará de internet para baixar os programas.

## 1. Instale o Node.js

O Node.js permite instalar e executar o Cypress.

1. Acesse [nodejs.org/en/download](https://nodejs.org/en/download).
2. Selecione a versão **24 LTS** e o sistema **Windows**.
3. Baixe o **Windows Installer (`.msi`)**.
4. Abra o arquivo baixado.
5. Clique em **Next**, aceite os termos e mantenha as opções padrão.
6. Se aparecer uma opção para instalar ferramentas adicionais (*Tools for Native Modules*), deixe-a **desmarcada**.
7. Clique em **Install** e, ao terminar, em **Finish**.

## 2. Confira a instalação

Pressione **Windows + R**, digite `cmd` e pressione **Enter**.

Na janela que abrir, execute um comando por vez:

```bat
node -v
```

```bat
npm -v
```

**Se os dois mostrarem números de versão, deu certo.** O npm já vem com o Node.js; não precisa instalá-lo separadamente.

## 3. Crie a pasta do workshop

1. No Explorador de Arquivos, abra **Documentos**.
2. Crie uma pasta chamada **`workshop-testes`**.
3. Entre nessa pasta.
4. Clique na barra de endereço, digite `cmd` e pressione **Enter**.

Isso abre a janela de comandos dentro da pasta da atividade.

## 4. Instale o Cypress

Execute os comandos abaixo **um por vez**, esperando cada um terminar.

Prepare o projeto:

```bat
npm init -y
```

Instale o Cypress:

```bat
npm install --save-dev cypress
```

Garanta que o aplicativo foi baixado:

```bat
npx cypress install
```

Abra o Cypress:

```bat
npx cypress open
```

## 5. Prepare o ambiente de testes

Na janela do Cypress:

1. Escolha **E2E Testing**.
2. Na tela dos arquivos de configuração, clique em **Continue**.
3. Selecione um navegador disponível.
4. Clique em **Start E2E Testing**.

**Quando aparecer a tela “Specs”, o computador estará pronto para o workshop.**

## Como abrir novamente

Entre na pasta `workshop-testes`, digite `cmd` na barra de endereço e execute:

```bat
npx cypress open
```

Se algum passo apresentar erro, envie uma captura da mensagem ao professor.
