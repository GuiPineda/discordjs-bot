const { SlashCommandBuilder } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
    .setName("biel")
    .setDescription("Descubra quem é Biel!"),

    async execute(interaction) {
       await interaction.reply(`Biel, ou Gabriel, mais conhecido Geytor é um usuário de discord amplamente conhecido por suas orelhas avantajadas que o permite ouvir com facilidade seus colegas! Excelente no Fifa e horrível no Valorant, biel é gente boa e não deixa nada que você fala escapar.`)
    }
}