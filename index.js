const express = require('express');
const { Configuration, OpenAIApi } = require("openai");
require('dotenv').config();

const webApp = express();

webApp.use(express.urlencoded({
    extended: true
}));
webApp.use(express.json());

const PORT = process.env.PORT || 5000;

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const textGeneration = async (prompt) => {

    try {
        const response = await openai.createCompletion({
            model: 'text-davinci-003',
            prompt: `Human: ${prompt}\nAI: `,
            temperature: 0.9,
            max_tokens: 500,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0.6,
            stop: ['Human:', 'AI:']
        });

        return {
            status: 1,
            response: `${response.data.choices[0].text}`
        };
    } catch (error) {
        return {
            status: 0,
            response: ''
        };
    }
};


const formatResponseForDialogflow = (texts, sessionInfo, targetFlow, targetPage) => {

    messages = []

    texts.forEach(text => {
        messages.push(
            {
                text: {
                    text: [text],
                    redactedText: [text]
                },
                responseType: 'HANDLER_PROMPT',
                source: 'VIRTUAL_AGENT'
            }
        );
    });

    let responseData = {
        fulfillment_response: {
            messages: messages
        }
    };

    if (sessionInfo !== '') {
        responseData['sessionInfo'] = sessionInfo;
    }

    if (targetFlow !== '') {
        responseData['targetFlow'] = targetFlow;
    }

    if (targetPage !== '') {
        responseData['targetPage'] = targetPage;
    }

    return responseData
};

const getErrorMessage = () => {

    return formatResponseForDialogflow(
        [
            'We are facing a technical issue.',
            'Please try after sometimes or contact the XYZ restaurant.'
        ],
        '',
        '',
        ''
    );
};

webApp.get('/', (req, res) => {
    res.sendStatus(200);
});

webApp.post('/dialogflow', async (req, res) => {

    let tag = req.body.fulfillmentInfo.tag;
    let query = req.body.text;

    console.log('A new request came...');
    console.log(tag);
    console.log(new Date())

    if (tag === 'sampleResponse') {
        let result = await textGeneration(query);
        if (result.status == 1) {
            res.send(formatResponseForDialogflow(
                [
                    result.response
                ],
                '',
                '',
                ''
            ));
        } else {
            res.send(getErrorMessage());
        }

    } else {
        res.send(
            formatResponseForDialogflow(
                [
                    'This is from the webhook.',
                    'There is no tag set for this request.'
                ],
                '',
                '',
                ''
            )
        );
    }
});

webApp.listen(PORT, () => {
    console.log(`Server is up and running at ${PORT}`);
});