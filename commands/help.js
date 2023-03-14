const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

var imgURL = "https://i.gifer.com/3iLo.gif";
// inside a command, event listener, etc.
const helpEmbed = new EmbedBuilder()
	.setColor(0x0099FF)
	.setTitle('Sobre mim')
	.setURL('https://discord.js.org/')
	.setAuthor({ name: 'πBOT', iconURL: imgURL, url: 'https://discord.js.org' })
	.setDescription('Comandos do πBOT')
	.setThumbnail(imgURL)
	.addFields(
		{ name: 'Desenvolvido por:', value: 'Pineda#1005' },
		{ name: '\u200B', value: '\u200B' },
		{ name: '/zaralhar', value: 'Zaralha usuários em um canal de voz', inline: false },
        { name: '/cls', value: 'Apagar até 100 mensagens do canal', inline: false },
	)
	.addFields({ name: '/help', value: 'Comandos do πBOT', inline: false })
	.setImage(imgURL)
	.setTimestamp()
	.setFooter({ text: 'NineTremPKRL', iconURL: imgURL });

module.exports = {
    data: new SlashCommandBuilder()
    .setName("help")
    .setDescription("Precisa de ajuda?"),

    async execute(interaction) {
        await interaction.reply({ embeds: [helpEmbed] })
    }
}