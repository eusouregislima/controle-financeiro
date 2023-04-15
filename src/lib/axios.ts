import axios from 'axios'
// aqui estava utilizando o json-server para rodar a api localmente
// export const api = axios.create({ baseURL: 'http://localhost:3000' })

export const api = axios.create({
  baseURL: 'https://my-json-server.typicode.com/eusouregislima/json-api-fake',
})
