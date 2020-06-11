module.exports = {
	name: 'chad',
	execute(message) {
		const Discord = require('discord.js');
		const Chad = new Discord.MessageEmbed;
		Chad.setColor('#0099ff');
		Chad.setTitle('Chad');
		Chad.setImage('https://media.discordapp.net/attachments/710917898847125605/713076709594759270/500501eb8724cc88fe26b4744978b015.png?width=681&height=677');

		message.channel.send(Chad);
	},
};