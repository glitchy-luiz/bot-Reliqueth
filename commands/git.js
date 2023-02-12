const { SlashCommandBuilder, EmbedBuilder } = require("discord.js")

const exampleEmbed = new EmbedBuilder()
	.setColor("Orange")
	.setTitle('Comandos do Git')
	.addFields(
        { name: '\u200B', value: '\u200B' },
		{ name: '$ git init', value: 'Inicializa o Git no diretório', inline: true },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
	)

module.exports = {
    data: new SlashCommandBuilder()
        .setName("git")
        .setDescription("Relembrar comandos do Git"),

    async execute(interaction) {
        await interaction.reply({ embeds: [exampleEmbed] })
    }
}