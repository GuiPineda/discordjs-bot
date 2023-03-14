PARA RODAR ESTE BOT É NECESSÁRIO FAZER O SEGUINTE

INSTALAR O NODE
INSTALAR O NPM

Abrir a pasta do projeto e iniciar o NPM: npm init

Instalar o DISCORD JS
npm install discord.js

Instalar o DOTENV
npm install dotenv --save

---------------------------------------------------------------------
DOTENV

Lembre-se de criar um arquivo .env

TOKEN=TOKEN_DO_BOT_AQUI
CLIENT_ID=CLIENT_DO_BOT
GUILD_ID=ID_DO_SEU_SERVIDOR

Obs.: Para pegar o ID do seu servidor basta entrar em modo desenvolvedor do Discord, clicar com o botão direito no nome do servidor e Copy Id

---------------------------------------------------------------------

Crie um .gitignore com as seguintes informações:

/node_modules
.env

---------------------------------------------------------------------

Sempre que atualizar um comando é necessário executar o deploy-commands.js

node deploy-commands.js

E para rodar de fato o bot:

node index.js

---------------------------------------------------------------------

Bot desenvolvido por G. Pineda#1005