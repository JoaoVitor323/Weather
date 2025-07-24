# 🌤️ Weather App - Clima Atual

Um site simples e bonito que permite ao usuário consultar o clima atual de qualquer cidade do mundo. Ele exibe informações como temperatura, descrição do tempo, um ícone correspondente, um fundo temático e a bandeira do país.

SITE TESTAVEL: https://joaovitor323.github.io/Weather/

---

## 🚀 Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (Vanilla)
- [OpenWeatherMap API](https://openweathermap.org/api) – Para dados meteorológicos
- [Unsplash API](https://unsplash.com/developers) – Para imagens de fundo baseadas na cidade
- [Nominatim API (OpenStreetMap)](https://nominatim.org/release-docs/develop/api/Reverse/) – Para identificar o país a partir de coordenadas
- [FlagsAPI](https://flagsapi.com/) – Para mostrar a bandeira do país

---

## 🎯 Funcionalidades

- Busca de clima por nome da cidade
- Ícone e descrição da condição do tempo
- Temperatura atual (em °C)
- Umidade e velocidade do vento
- Bandeira do país da cidade buscada
- Imagem de fundo dinâmica com base na cidade (via Unsplash)
- Interface responsiva e leve

---

## ❗ Aviso sobre bug importante

> ⚠️ **Erro conhecido na exibição de bandeiras:**  
Atualmente, a API de bandeiras (`flagsapi.com`) pode retornar a bandeira incorreta em alguns casos, como cidades com códigos de país ambíguos ou erro de mapeamento. Esse comportamento já foi identificado e está sendo avaliado para futura correção ou substituição por outra API mais confiável.

---

## 🔐 Como configurar as APIs

1. Crie um arquivo chamado `env.js` dentro da pasta `js/`
2. Adicione as seguintes variáveis:

```js
const CONFIG = {
  apiKey: "SUA_CHAVE_OPENWEATHERMAP",
  unsplashKey: "SUA_CHAVE_UNSPLASH"
};

Importante: Nunca compartilhe sua chave real em repositórios públicos. Utilize variáveis de ambiente em produção.

✅ Como usar
Clone o repositório ou baixe os arquivos

Crie o arquivo env.js com suas chaves

Abra o arquivo index.html no navegador

Digite o nome de uma cidade e clique em Buscar ou aperte Enter

📝 Melhorias futuras (sugestões)
Corrigir a exibição de bandeiras com uma nova API ou fallback

Adicionar previsão para os próximos dias

Mostrar horário local da cidade buscada

Dark mode

Histórico de buscas

Sugestões de cidades (autocomplete)

🧑‍💻 Autor
Desenvolvido por João Vitor da Silva Oliveira

