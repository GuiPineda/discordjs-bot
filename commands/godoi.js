const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

var imgURL = "https://i.gifer.com/3iLo.gif";
// inside a command, event listener, etc.
const helpEmbed = new EmbedBuilder()
	.setColor(0x0099FF)
	.setTitle('Quem é Godoi?')
	.setURL('https://discord.js.org/')
	.setAuthor({ name: 'πBOT', iconURL: imgURL, url: 'https://discord.js.org' })
	.setDescription('Desde criança Gustavo Leitão apresentava traços de obesidade, mas nunnca ninguém imaginou que se tornaria tão imenso, ele amava esportes como luta de sumo.')
	.setThumbnail(imgURL)
    
	.addFields(
        { name: '\u200B', value: '\u200B' },
        { name: 'Quer saber mais sobre mim?', value: 'Chama no pv que vou te contar umas paradas PESADAS rs <@331923110133628938>', inline: false },
        { name: '\u200B', value: '\u200B' },
        )
	.setImage("https://cdn.discordapp.com/attachments/998071764842205285/1085257023060455484/Biografia_Godoi.png")
	.setTimestamp()
	.setFooter({ text: 'NineTremPKRL', iconURL: imgURL });

module.exports = {
    data: new SlashCommandBuilder()
    .setName("godoi")
    .setDescription("Quem é Godoi?"),

    async execute(interaction) {
        await interaction.reply({ embeds: [helpEmbed] })
    }
}