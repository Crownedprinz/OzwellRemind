import { HTTP } from 'meteor/http';

export const getCompletion = async (prompt) => {
  if (!prompt) {
    throw new Error('Prompt is required');
  }

  const url = 'https://ai.bluehive.com/api/v1/completion';
  const data = {
    prompt,
    systemMessage: "You are a helpful chatbot named Will."
  };

  try {
    // Await the HTTP call
    const response = await HTTP.call('POST', url, {
      headers: {
        'Authorization': 'Bearer BHSK-sandbox--sgPSaruTIQ0DrxRpBAQsJJki2TGEwHpm0JfYzcx',
        'Content-Type': 'application/json',
        'User-Agent': 'insomnia/10.3.1'
      },
      data: data,
    });

    // Log the actual response data
    console.log('API Response:', response.data);

    if (!response.data) {
      throw new Error('Empty response from API');
    }

    return response.data;

  } catch (error) {
    console.error("Error calling Ozwell API:", error);
    throw error;
  }
};