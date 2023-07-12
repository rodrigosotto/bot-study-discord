const { SlashCommandBuilder, InteractionType } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Responde com PONG!"),

  async execute(interaction) {
    await interaction.reply("pong!");
  },
};
