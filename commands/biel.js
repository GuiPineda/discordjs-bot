const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

var imgURL = "https://i.gifer.com/3iLo.gif";
// inside a command, event listener, etc.
const helpEmbed = new EmbedBuilder()
	.setColor(0x0099FF)
	.setTitle('Quem é Biel?')
	.setURL('https://discord.js.org/')
	.setAuthor({ name: 'πBOT', iconURL: imgURL, url: 'https://discord.js.org' })
	.setDescription('Biel é um palmeirense conhecido pelas suas gigantes orelhas! Péssimo jogador de Valorant se destaca pela carisma e forma de jogar.')
	.setThumbnail(imgURL)
    
	.addFields(
        { name: '\u200B', value: '\u200B' },
        { name: 'Quer saber mais sobre mim?', value: 'Chama no pv princesa rs <@802992570485309502>', inline: false },
        { name: '\u200B', value: '\u200B' },
        )
	.setImage("https://cdn.discordapp.com/attachments/1020669763086712852/1084951440994345061/image.png")
	.setTimestamp()
	.setFooter({ text: 'NineTremPKRL', iconURL: imgURL });

module.exports = {
    data: new SlashCommandBuilder()
    .setName("biel")
    .setDescription("Quem é Biel?"),

    async execute(interaction) {
        await interaction.reply({ embeds: [helpEmbed] })
    }
}