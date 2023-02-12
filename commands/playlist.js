const { SlashCommandBuilder } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("playlist")
        .setDescription("Músicas bacanas loucuras"),

    async execute(interaction) {
        await interaction.reply("https://open.spotify.com/playlist/0owFMC08AKVh4tSBrcSODG")
    }
}