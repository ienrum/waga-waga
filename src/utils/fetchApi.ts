import axios from 'axios';

const URL = 'https://api.openai.com/v1/chat/completions';

const SYSTEM_CONTENT = `You need to create a script to transcribe the conversations of some very  dumb birds. They talk to each other, and their conversations are so dumb that they are trivial.
Speak as birdy as possible. with emoji and emoticons.
It should be a slightly raunchy conversation that is not at all childish.
A bland conversation with a punchline.
The entire conversation should be about birds.
Please write the following sentence on the topic with JS array syntax
You will write JS code based on the array.

Each sentence should be 20 characters or less.
and each sentence should be ended sentence. this means that each sentence should be ended with a period.
like this. "this is a sentence." "this is another sentence." "this is the last sentence."

sentences should be conversational.
There should be a sentence of empathy or counterpoint.

The input is the topic.
`;

const ASSISTANT_CONTENT = `

Example: 
input: cute facts.
output : ["Hello","Good morning~","What do you want to talk about today?","I'm actually cute","? Doesn't everyone know that?","Haha, you're a good joke teller~" ....].
`;

export const fetchApi = async (user_content: string) => {
  try {
    const res = await axios({
      method: 'post',
      url: URL,
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
      data: {
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: SYSTEM_CONTENT,
          },
          {
            role: 'assistant',
            content: ASSISTANT_CONTENT,
          },
          {
            role: 'user',
            content: 'topic: ' + user_content,
          },
        ],
      },
    });

    return res.data;
  } catch (e) {
    console.log(e);
    return 'error';
  }
};
