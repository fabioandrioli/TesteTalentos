import {server} from './Server/server'

server.listen(process.env.PORT || 3000,() => {
    console.log(`TesteTalentos rodando na porta ${process.env.PORT || 3000}`)
});