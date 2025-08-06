
const fs = require('fs')
const chalk = require('chalk')

//criado por Eliel santts
//compre o seu 5594992607631


// configuracoes
global.owner = ['554191236158']
global.NomeDoBot = `Lima`
global.NomeEmpresa = `Bottechwpp`
global.NomeEmpresa2 = `Bottechwpp✅`
global.premium = ['554191236158']
global.packname = '𝗯𝗮𝘀𝗲 bot'
global.author = 'Lima'
global.sessionName = 'Lima'
global.prefa = ['!']
global.sp = '>'
global.mess = {
    success: '✓ Sucesso!',
    admin: 'Calmo calmo vc nao e um adm!',
    botAdmin: 'Pdp, tou sem adm rola nao.',
    owner: 'Somente meu cridor, mo otario vc em kkkkk',
    group: 'Recursos apenas para grupos!',
    private: 'Recursos usados ​​apenas para bate-papo privado!',
    bot: 'Recursos especiais para usuários de número de bot',
    wait: 'Carregando...',
    endLimit: 'Limite esgotado, ele sera resetado em 24hrs.',
}
//fim das config


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Atualizado= '${__filename}'`))
	delete require.cache[file]
	require(file)
})
