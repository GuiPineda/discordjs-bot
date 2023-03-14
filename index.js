const { Client, Events, GatewayIntentBits, Collection } = require('discord.js');


//DotEnv Config
const dotenv = require('dotenv')
dotenv.config()
const { TOKEN, CLIENT_ID, GUILD_ID } = process.env

const fs = require("node:fs")
const path = require("node:path")

const commandsPath = path.join(__dirname, "commands")
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith(".js"))

const client = new Client({intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMessageReactions]})
client.commands = new Collection()

for (const file of commandFiles) {
  const filePath = path.join(commandsPath, file)
  const command = require(filePath)
  if ("data" in command && "execute" in command) {
    client.commands.set(command.data.name, command)
  }
  else {
    console.log(`Este comando em ${filePath} está com 'data' ou 'execute' ausente`)
  }
}


client.once(Events.ClientReady, c => {
	console.log(`Login realizado como: ${c.user.tag}`);

  client.user.setActivity('Batendo na raba da Vava 💜');
});

client.login(TOKEN);


// Listener interações
client.on(Events.InteractionCreate, async interaction =>{
  if (!interaction.isChatInputCommand()) return 
  const command = interaction.client.commands.get(interaction.commandName)
   if (!command) {
    console.error("Comando não encontrado")
    return
   }
try {
  await command.execute(interaction, client)
}
catch (error) {
  console.log(error)
  interaction.reply("Houve um erro ao executar este comando!")
}

})