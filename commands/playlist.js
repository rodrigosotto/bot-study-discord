const { SlashCommandBuilder } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("playlist")
        .setDescription("Ouça a melhor playlist para focar nos JOBS!"),

    async execute(interaction) {
        await interaction.reply("https://open.spotify.com/playlist/7mrIgyHXMc9ambON54i4NS?si=55ede65d928f49c0")
    }
}