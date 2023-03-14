const { SlashCommandBuilder, Client, Message, MessageEmbed } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
      .setName("zaralhar")
      .setDescription("Zaralha o usuário selecionado!")
      .addUserOption(option =>
        option.setName("usuario")
          .setDescription("O usuário a ser zaralhado")
          .setRequired(true)
      ),
     async execute(interaction, client) {
      // obtém a opção de usuário
      try {
        const target = interaction.options.getMember("usuario");

        if (!interaction.member.permissions.has('MOVE_MEMBERS')) {
            await interaction.reply("Você não possuí permissão para mover membros.")
            return;
        }

        let guild = interaction.guild;
        await interaction.deferReply({ ephemeral: true });
          // move o usuário para o canal
            for (var i = 0;; i++) {
                if (i > 3) break;
                await target.voice.setChannel("1020682146110771230");
                await new Promise(r => setTimeout(r, 500));
                await target.voice.setChannel("1020682118889734205");
                await new Promise(r => setTimeout(r, 500));
                }
                await target.voice.setChannel(null);
      }
      catch (error) {
        console.log("Falha ao mover usuário, usuário não conectado em nenhum canal de voz");
      }
      
    }
  };