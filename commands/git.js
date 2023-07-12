const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

const exampleEmbed = new EmbedBuilder()
  .setColor("Orange")
  .setTitle("Comandos do Git")
  .addFields(
    { name: "\u200B", value: "\u200B" },
    {
      name: "$ git init [nome-do-projeto]",
      value: "Cria um novo repositório local com um nome especificado",
      inline: false,
    },
    {
      name: "$ git clone [url]",
      value: "Baixa um projeto e seu histórico de versão inteiro",
      inline: false,
    },
    {
      name: "$ git stash",
      value:
        "Armazena temporariamente todos os arquivos monitorados modificados",
      inline: false,
    },
    { name: "\u200B", value: "\u200B" },
    {
      name: "$ git status",
      value: "Revise edições e crie uma transação de commit",
      inline: false,
    },
    {
      name: "$ git add [arquivo]",
      value: "Faz o snapshot de um arquivo na preparação para versionamento",
      inline: false,
    },
    {
      name: '$ git commit -m "[mensagem]"',
      value:
        "Grava o snapshot permanentemente do arquivo no histórico de versão",
      inline: false,
    },
    { name: "\u200B", value: "\u200B" },
    {
      name: "$ git branch",
      value: "Lista todos os branches locais no repositório atual",
      inline: false,
    },
    {
      name: "$ git branch [nome-branch]",
      value: "Cria uma nova branch",
      inline: false,
    },
    {
      name: "$ git switch -c [nome-branch]",
      value:
        "Muda para a branch especificada e atualiza o diretório de trabalho",
      inline: false,
    },
    { name: "\u200B", value: "\u200B" },
    {
      name: "$ git merge [nome-branch]",
      value: "Combina o histórico da branch especificada a branch atual",
      inline: false,
    },
    {
      name: "$ git push [alias] [branch]",
      value: "Envia todos os commits do branch local para o GitHub",
      inline: false,
    },
    {
      name: "$ git pull",
      value: "Baixa o histórico e incorpora as mudanças",
      inline: false,
    }
  );

module.exports = {
  data: new SlashCommandBuilder()
    .setName("git")
    .setDescription("Relembrar comandos do Git"),

  async execute(interaction) {
    await interaction.reply({ embeds: [exampleEmbed] });
  },
};
