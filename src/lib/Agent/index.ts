import { OpenAI } from 'langchain/llms/openai';

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

const model = new OpenAI({ openAIApiKey: OPENAI_API_KEY, temperature: 0.9 });

const sendMessage = async (text: string) => {
  const res = await model.call(text);
  console.log('res', res);
};

export { sendMessage };
