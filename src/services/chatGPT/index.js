import { Configuration, OpenAIApi } from "openai";
const { OPENAI_CHATGPT_BEARER_TOKEN, OPENAI_ORGANISATION_ID } = process.env;

const configuration = new Configuration({
    organization: OPENAI_ORGANISATION_ID,
    apiKey: OPENAI_CHATGPT_BEARER_TOKEN,
});

const openai = new OpenAIApi(configuration);
const response = await openai.createChatCompletion({
  model: "gpt-3.5-turbo",
  messages: [
    {"role": "user", "content": "Can you generate me a random fun magical item for dnd 5e under 1200 characters, please?"}
  ],
  temperature: 1,
  max_tokens: 518,
});
console.log(response.data.choices)
