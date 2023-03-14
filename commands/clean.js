const { SlashCommandBuilder } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
    .setName("cls")
    .setDescription("Delete as últimas mensagens do canal")
    .addIntegerOption(option =>
        option.setName('quantidade')
          .setDescription('Informe a quantidade a deletar(max 10)')
          .setRequired(true)),

    async execute(interaction) {
        if (!interaction.member.permissions.has('MANAGE_MESSAGES')) {
            await interaction.reply("Você não possuí permissão para deletar mensagens.")
            return;
        }

        const amount = interaction.options.getInteger('quantidade');

        if (amount > 100) {
            await interaction.reply("Não é possível deletar mais de 100 mensagens")
            return;
        }

        const username = interaction.user.id;
        interaction.channel.bulkDelete(amount).then(messages => {
            // Enviar uma mensagem confirmando a ação
            interaction.reply(`Deletadas ${messages.size} mensagens por <@${username}>.`);
          }).catch(error => {
            // Lidar com o erro
            interaction.reply('Ocorreu um erro ao tentar deletar as mensagens.');
          });
    }
}