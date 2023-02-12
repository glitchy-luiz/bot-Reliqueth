const { SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder, Component } = require("discord.js")

const row = new ActionRowBuilder()
.addComponents(
    new StringSelectMenuBuilder()
        .setCustomId("select")
        .setPlaceholder("Nenhuma linguagem selecionada")
        .addOptions({
            label: "javascript",
            description: "Veja a documentação de Javascript",
            value: "javascript"
        },
        {
            label: "html",
            description: "Veja a documentação de HTML",
            value: "html"
        },
        {
            label: "css",
            description: "Veja a documentação de CSS",
            value: "css"
        })
)

module.exports = {
    data: new SlashCommandBuilder()
        .setName("docs")
        .setDescription("Acesse a documentação da tecnologia que quiser"),

    async execute(interaction) {
        await interaction.reply({content: "Selecione uma das tecnologias abaixo:", components: [row]})
    }
}