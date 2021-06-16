export const enginesSpec = {
  swagger: '2.0',
  basePath: '/api',
  paths: {
    '/v1/ask/question': {
      post: {
        responses: {
          '200': {
            description: 'Success - answer to the question (or unanswerable)',
            schema: {
              $ref: '#/definitions/QuestionResponse',
            },
          },
        },
        summary: 'Question Answering',
        description: 'Answer an arbitrary question about a document.',
        operationId: 'post_question_handler',
        parameters: [
          {
            name: 'payload',
            required: true,
            in: 'body',
            schema: {
              $ref: '#/definitions/QuestionRequest',
            },
          },
        ],
        'x-playground': true,
        tags: ['v1/ask'],
      },
    },
    '/v1/classify/ar/sentiment': {
      post: {
        responses: {
          '200': {
            description: 'Success - Sentiment of the document',
            schema: {
              $ref: '#/definitions/ArabicSentimentResponse',
            },
          },
        },
        summary: 'Arabic Sentiment Classifier',
        description: 'Analyze the overall sentiment of Arabic text.',
        operationId: 'post_arabic_sentiment_handler',
        parameters: [
          {
            name: 'payload',
            required: true,
            in: 'body',
            schema: {
              $ref: '#/definitions/ArabicSentimentRequest',
            },
          },
        ],
        'x-playground': true,
        tags: ['v1/classify'],
      },
    },
    '/v1/classify/dimefil': {
      post: {
        responses: {
          '200': {
            description: 'Succes - prob of document being about dimefil topics',
            schema: {
              $ref: '#/definitions/DimefilResponse',
            },
          },
        },
        summary: 'Dimefil Classifier',
        description: 'Run prediction on text of whether it matches DIME-FIL topics.',
        operationId: 'post_dimefil_handler',
        parameters: [
          {
            name: 'payload',
            required: true,
            in: 'body',
            schema: {
              $ref: '#/definitions/DimefilRequest',
            },
          },
        ],
        'x-playground': true,
        tags: ['v1/classify'],
      },
    },
    '/v1/classify/sentiment': {
      post: {
        responses: {
          '200': {
            description: 'Success - Sentiment of the document',
            schema: {
              $ref: '#/definitions/SentimentResponse',
            },
          },
        },
        summary: 'Sentiment Classifier',
        description: 'Analyze the overall sentiment of the text.',
        operationId: 'post_sentiment_handler',
        parameters: [
          {
            name: 'payload',
            required: true,
            in: 'body',
            schema: {
              $ref: '#/definitions/SentimentRequest',
            },
          },
        ],
        'x-playground': true,
        tags: ['v1/classify'],
      },
    },
    '/v1/classify/social/bot': {
      post: {
        responses: {
          '200': {
            description: 'Success - Probability the tweet is from a bot',
            schema: {
              $ref: '#/definitions/BotResponse',
            },
          },
        },
        summary: 'Social Bot Classifier',
        description:
          "Analyze a tweet and predict if it is bot-generated.\nNOTE: the payload should just be the entire tweet json from twitter's api",
        operationId: 'post_bot_detection_handler',
        parameters: [
          {
            name: 'payload',
            required: true,
            in: 'body',
            schema: {
              $ref: '#/definitions/BotRequest',
            },
          },
        ],
        'x-playground': true,
        tags: ['v1/classify'],
      },
    },
    '/v1/classify/social/sentiment': {
      post: {
        responses: {
          '200': {
            description: 'Success - Sentiment of the document',
            schema: {
              $ref: '#/definitions/SentimentResponse',
            },
          },
        },
        summary: 'Social Sentiment Classifier',
        description: 'Analyze the overall sentiment of the text.',
        operationId: 'post_social_sentiment_handler',
        parameters: [
          {
            name: 'payload',
            required: true,
            in: 'body',
            schema: {
              $ref: '#/definitions/SentimentRequest',
            },
          },
        ],
        'x-playground': true,
        tags: ['v1/classify'],
      },
    },
    '/v1/classify/synthetic': {
      post: {
        responses: {
          '200': {
            description: 'Success - Probability the text is synthetic',
            schema: {
              $ref: '#/definitions/SyntheticResponse',
            },
          },
        },
        summary: 'Synthetic Classifier',
        description: 'Predict if text is synthetic or not.',
        operationId: 'post_synthetic_handler',
        parameters: [
          {
            name: 'payload',
            required: true,
            in: 'body',
            schema: {
              $ref: '#/definitions/SentimentRequest',
            },
          },
        ],
        'x-playground': true,
        tags: ['v1/classify'],
      },
    },
    '/v1/classify/zh/sentiment': {
      post: {
        responses: {
          '200': {
            description: 'Success - Sentiment of the document',
            schema: {
              $ref: '#/definitions/ChineseSentimentResponse',
            },
          },
        },
        summary: 'Chinese Sentiment Classifier',
        description: 'Analyze the overall sentiment of Chinese text.',
        operationId: 'post_chinese_sentiment_handler',
        parameters: [
          {
            name: 'payload',
            required: true,
            in: 'body',
            schema: {
              $ref: '#/definitions/ChineseSentimentRequest',
            },
          },
        ],
        'x-playground': true,
        tags: ['v1/classify'],
      },
    },
    '/v1/entities/ar/unresolved': {
      post: {
        responses: {
          '200': {
            description: 'Success - lists of entity types',
            schema: {
              $ref: '#/definitions/EntitiesResponse',
            },
          },
        },
        summary: 'Arabic Entities',
        description:
          'Perform Named Entity Recognition (NER) on Arabic language doc.\nNOTE: these entities are not cleaned only deduped',
        operationId: 'post_arabic_entities_handler',
        parameters: [
          {
            name: 'payload',
            required: true,
            in: 'body',
            schema: {
              $ref: '#/definitions/ArabicEntitiesRequest',
            },
          },
        ],
        'x-playground': true,
        tags: ['v1/entities'],
      },
    },
    '/v1/entities/coreferences': {
      post: {
        responses: {
          '200': {
            description: 'Success - list of coreferences',
            schema: {
              $ref: '#/definitions/CorefResponse',
            },
          },
        },
        summary: 'Coreferences',
        description:
          'Perform Coreference Resolution on doc.\nHandles he, her, hers, him, his, she, ze, hir',
        operationId: 'post_coref_handler',
        parameters: [
          {
            name: 'payload',
            required: true,
            in: 'body',
            schema: {
              $ref: '#/definitions/CorefRequest',
            },
          },
        ],
        'x-playground': true,
        tags: ['v1/entities'],
      },
    },
    '/v1/entities/relations': {
      post: {
        responses: {
          '200': {
            description: 'Success - lists of relations',
            schema: {
              $ref: '#/definitions/RelationsResponse',
            },
          },
        },
        summary: 'Entity Relations',
        description:
          'Extract the relations for subject from the text.\nSubject can be null, if you want to get ALL relations for ALL (disambiguated) subjects.',
        operationId: 'post_relations_handler',
        parameters: [
          {
            name: 'payload',
            required: true,
            in: 'body',
            schema: {
              $ref: '#/definitions/RelationsRequest',
            },
          },
        ],
        'x-playground': true,
        tags: ['v1/entities'],
      },
    },
    '/v1/entities/resolved': {
      post: {
        responses: {
          '200': {
            description:
              'Returns an object with the following properties representing different types of entities: people, locations, organizations, and miscellaneous.',
            schema: {
              $ref: '#/definitions/ResolvedEntitiesResponse',
            },
          },
        },
        summary: 'Resolved Entities',
        description:
          'NER with entity resolution.\nReturns people, locations, organizations, and miscellaneous after performing Named Entity Recognition (NER) followed by entity resolution on the source text.\n\nEach of these properties is a list of objects that contain the name of the entity, where it can be found in the source text, the confidence of the model towards this entity, and whether the entity needs more disambiguation.\n\nThe disambiguation of entities is basically string matching, and then taking the longer surface form. The example response for this endpoint provides a good example of the shape of a typical response.',
        operationId: 'ner_with_entity_resolution',
        parameters: [
          {
            name: 'payload',
            required: true,
            in: 'body',
            schema: {
              $ref: '#/definitions/EntitiesRequest',
            },
          },
        ],
        'x-playground': true,
        tags: ['v1/entities'],
      },
    },
    '/v1/entities/social/unresolved': {
      post: {
        responses: {
          '200': {
            description: 'Success - lists of entity types',
            schema: {
              $ref: '#/definitions/EntitiesResponse',
            },
          },
        },
        summary: 'Unresolved Social Entities',
        description: 'Perform Named Entity Recognition (NER) on a tweet.',
        operationId: 'post_social_entities_handler',
        parameters: [
          {
            name: 'payload',
            required: true,
            in: 'body',
            schema: {
              $ref: '#/definitions/EntitiesRequest',
            },
          },
        ],
        'x-playground': true,
        tags: ['v1/entities'],
      },
    },
    '/v1/entities/unresolved': {
      post: {
        responses: {
          '200': {
            description: 'Success - lists of entity types',
            schema: {
              $ref: '#/definitions/EntitiesResponse',
            },
          },
        },
        summary: 'Unresolved Entities',
        description:
          'Perform Named Entity Recognition (NER) on doc.\nNOTE: See also entities/resolved, in general you may want that one instead.',
        operationId: 'post_entities_handler',
        parameters: [
          {
            name: 'payload',
            required: true,
            in: 'body',
            schema: {
              $ref: '#/definitions/EntitiesRequest',
            },
          },
        ],
        'x-playground': true,
        tags: ['v1/entities'],
      },
    },
    '/v1/entities/zh/unresolved': {
      post: {
        responses: {
          '200': {
            description: 'Success - lists of entity types',
            schema: {
              $ref: '#/definitions/EntitiesResponse',
            },
          },
        },
        summary: 'Chinese Entities',
        description: 'Perform Named Entity Recognition (NER) on Chinese language doc.',
        operationId: 'post_chinese_entities_handler',
        parameters: [
          {
            name: 'payload',
            required: true,
            in: 'body',
            schema: {
              $ref: '#/definitions/ChineseEntitiesRequest',
            },
          },
        ],
        'x-playground': true,
        tags: ['v1/entities'],
      },
    },
    '/v1/extract/disputes': {
      post: {
        responses: {
          '200': {
            description: 'Success - disputes from the text',
            schema: {
              $ref: '#/definitions/DisputeResponse',
            },
          },
        },
        summary: 'Disputes',
        description:
          'Get claims made in the document.\nNOTE: single sentence documents are greatly effected by punctuation',
        operationId: 'post_dispute_handler',
        parameters: [
          {
            name: 'payload',
            required: true,
            in: 'body',
            schema: {
              $ref: '#/definitions/DisputeRequest',
            },
          },
        ],
        'x-playground': true,
        tags: ['v1/extract'],
      },
    },
    '/v1/extract/quotes': {
      post: {
        responses: {
          '200': {
            description: 'Success - quotes from the document',
            schema: {
              $ref: '#/definitions/QuotesResponse',
            },
          },
        },
        summary: 'Quotes Extraction',
        description: 'Get attributed quotes from the document.',
        operationId: 'post_quotes_handler',
        parameters: [
          {
            name: 'payload',
            required: true,
            in: 'body',
            schema: {
              $ref: '#/definitions/QuotesRequest',
            },
          },
        ],
        'x-playground': true,
        tags: ['v1/extract'],
      },
    },
    '/v1/generate/abstractive_topics': {
      post: {
        responses: {
          '200': {
            description: 'Success - Topics in the document',
            schema: {
              $ref: '#/definitions/TextToTextResponse',
            },
          },
        },
        summary: 'Abstractive Topics Generation',
        description: 'Generate Abstractive Topics in the text.',
        operationId: 'post_text_to_text_topics_handler',
        parameters: [
          {
            name: 'payload',
            required: true,
            in: 'body',
            schema: {
              $ref: '#/definitions/TextToTextRequest',
            },
          },
        ],
        'x-playground': true,
        tags: ['v1/generate'],
      },
    },
    '/v1/generate/extractive_topics': {
      post: {
        responses: {
          '200': {
            description: 'Success - list of topics of the document',
            schema: {
              $ref: '#/definitions/TopicsResponse',
            },
          },
        },
        summary: 'Topics Generation',
        description: 'Generate the topics in the document.',
        operationId: 'post_topics_handler',
        parameters: [
          {
            name: 'payload',
            required: true,
            in: 'body',
            schema: {
              $ref: '#/definitions/TopicsRequest',
            },
          },
        ],
        'x-playground': true,
        tags: ['v1/generate'],
      },
    },
    '/v1/generate/phrases': {
      post: {
        responses: {
          '200': {
            description: 'Success - lists of phrases',
            schema: {
              $ref: '#/definitions/PhrasesResponse',
            },
          },
        },
        summary: 'Phrases Generation',
        description: 'Extract key phrases from the text.',
        operationId: 'post_phrases_handler',
        parameters: [
          {
            name: 'payload',
            required: true,
            in: 'body',
            schema: {
              $ref: '#/definitions/PhrasesRequest',
            },
          },
        ],
        'x-playground': true,
        tags: ['v1/generate'],
      },
    },
    '/v1/generate/title': {
      post: {
        responses: {
          '200': {
            description: 'Returns a plausible, generated title for the provided text.',
            schema: {
              $ref: '#/definitions/TitleResponse',
            },
          },
        },
        summary: 'Title Generation',
        description:
          'Generate a title.\nReturns a plausible title for the source document. The title is generated by determining and assembling the best spans of text within the provided source document. During the title generation process, the text is tokenized and only the first several hundred tokens are used to generate a title.\n\nGenerally, this means title generation will only look at the first few paragraphs of the source document when generating a title. You can chunk your source document into smaller groups of paragraphs and submit them individually to generate alternative titles.',
        operationId: 'generate_a_title',
        parameters: [
          {
            name: 'payload',
            required: true,
            in: 'body',
            schema: {
              $ref: '#/definitions/TitleRequest',
            },
          },
        ],
        'x-playground': true,
        tags: ['v1/generate'],
      },
    },
    '/v1/preview/DummyModel': {},
    '/v1/preview/claim_attribution': {},
    '/v1/preview/claim_partitioning': {},
    '/v1/preview/claims': {},
    '/v1/preview/dispute_detection': {},
    '/v1/preview/entity-embeddings': {},
    '/v1/preview/zero_shot_classifier': {},
    '/v1/preview_health': {},
    '/v1/summary/abstractive': {
      post: {
        responses: {
          '200': {
            description:
              'Returns <code>abstractive</code> is a string returned by a summarization using the abstractive summarization method.',
            schema: {
              $ref: '#/definitions/AbstractiveSummaryResponse',
            },
          },
        },
        summary: 'Abstractive Summary',
        description:
          'Abstractively summarize a document.\nThe <code>abstractive</code> summarization model generates text using a beam search over the space of probabilities (i.e., a distribution over all possible English tokens) generated by the model. The abstractive summary can generate new words or phrases that may or may not be contained in the source document.',
        operationId: 'abstractive_document_summary',
        parameters: [
          {
            name: 'payload',
            required: true,
            in: 'body',
            schema: {
              $ref: '#/definitions/AbstractiveSummaryRequest',
            },
          },
        ],
        'x-playground': true,
        tags: ['v1/summary'],
      },
    },
    '/v1/summary/aggregate': {
      post: {
        responses: {
          '200': {
            description:
              'Returns an object with three properties. <code>extractive</code> is an array of sentences returned by a summarization using the extractive method. <code>semi-abstractive</code> is an array of sentences returned by a summarization using the semi-abstractive method. <code>abstractive</code> is a string returned by a summarization using the abstractive summarization method.',
            schema: {
              $ref: '#/definitions/SummariesResponse',
            },
          },
        },
        summary: 'Summaries',
        description:
          'Summarize a document.\nReturns a fully <code>abstractive</code>, <code>semi-abstractive</code>, and <code>extractive</code> summarization of the source document.\n\nThe <code>abstractive</code> summarization model generates text using a beam search over the space of probabilities (i.e., a distribution over all possible English tokens) generated by the model. The abstractive summary can generate new words or phrases that may or may not be contained in the source document.\n\nThe <code>semi-abstractive</code> summarization model is question answering based. It identifies spans in the text most likely to produce the next part of a summary repeatedly until it’s generated a full summary. Like <code>abstractive</code> summarization, the semi-abstractive summary can generate new words or phrases that may not be contained in the source document, but the pool of tokens it pulls from to generate the words and phrases are the tokens contained in the source document.\n\nThe <code>extractive</code> summarization extracts word-to-word sentences from the source document that are most similar to all the rest of the sentences in the source document. Sentences in the <code>extractive</code> summary will always be present, word for word, in the source document.',
        operationId: 'summarize_a_document',
        parameters: [
          {
            name: 'payload',
            required: true,
            in: 'body',
            schema: {
              $ref: '#/definitions/SummariesRequest',
            },
          },
        ],
        'x-playground': true,
        tags: ['v1/summary'],
      },
    },
    '/v1/summary/extractive': {
      post: {
        responses: {
          '200': {
            description:
              'Returns <code>extractive</code> is an array of sentences returned by a summarization using the extractive method.',
            schema: {
              $ref: '#/definitions/ExtractiveSummaryResponse',
            },
          },
        },
        summary: 'Extractive Summary',
        description:
          'Extractively summarize a document.\nThe <code>extractive</code> summarization extracts word-to-word sentences from the source document that are most similar to all the rest of the sentences in the source document. Sentences in the <code>extractive</code> summary will always be present, word for word, in the source document.',
        operationId: 'extractive_document_summary',
        parameters: [
          {
            name: 'payload',
            required: true,
            in: 'body',
            schema: {
              $ref: '#/definitions/ExtractiveSummaryRequest',
            },
          },
        ],
        'x-playground': true,
        tags: ['v1/summary'],
      },
    },
    '/v1/summary/meta': {
      post: {
        responses: {
          '200': {
            description:
              'Returns <code>meta</code> is a string returned by a summarization using the abstractive summarization method on the doc and then on the summary.',
            schema: {
              $ref: '#/definitions/AbstractiveSummaryResponse',
            },
          },
        },
        summary: 'Meta-Abstractive Summary',
        description:
          'Meta-Abstractively summarize a document.\nThe <code>meta</code> summarization model generates text using a beam search over the space of probabilities (i.e., a distribution over all possible English tokens) generated by the model. The abstractive summary can generate new words or phrases that may or may not be contained in the source document.',
        operationId: 'meta_document_summary',
        parameters: [
          {
            name: 'payload',
            required: true,
            in: 'body',
            schema: {
              $ref: '#/definitions/AbstractiveSummaryRequest',
            },
          },
        ],
        'x-playground': true,
        tags: ['v1/summary'],
      },
    },
    '/v1/summary/semiabstractive': {
      post: {
        responses: {
          '200': {
            description:
              'Returns <code>semi-abstractive</code> is an array of sentences returned by a summarization using the semi-abstractive method.',
            schema: {
              $ref: '#/definitions/SemiabstractiveSummaryResponse',
            },
          },
        },
        summary: 'Semiabstractive Summary',
        description:
          'Semiabstractively summarize a document.\nThe <code>semi-abstractive</code> summarization model is question answering based. It identifies spans in the text most likely to produce the next part of a summary repeatedly until it’s generated a full summary. Like <code>abstractive</code> summarization, the semi-abstractive summary can generate new words or phrases that may not be contained in the source document, but the pool of tokens it pulls from to generate the words and phrases are the tokens contained in the source document.',
        operationId: 'semiabstractive_document_summary',
        parameters: [
          {
            name: 'payload',
            required: true,
            in: 'body',
            schema: {
              $ref: '#/definitions/SemiabstractiveSummaryRequest',
            },
          },
        ],
        'x-playground': true,
        tags: ['v1/summary'],
      },
    },
    '/v1/summary/zh/extractive': {
      post: {
        responses: {
          '200': {
            description:
              'Returns an object <code>extractive</code> is a sentence returned by a summarization using the extractive method.',
            schema: {
              $ref: '#/definitions/ChineseSummaryResponse',
            },
          },
        },
        summary: 'Chinese Summary',
        description:
          'Summarize a Chinese document.\nThe <code>extractive</code> summarization extracts word-to-word sentences from the source document that are most similar to all the rest of the sentences in the source document. Sentences in the <code>extractive</code> summary will always be present, word for word, in the source document.',
        operationId: 'summarize_a_document',
        parameters: [
          {
            name: 'payload',
            required: true,
            in: 'body',
            schema: {
              $ref: '#/definitions/ChineseSummaryRequest',
            },
          },
        ],
        'x-playground': true,
        tags: ['v1/summary'],
      },
    },
  },
  info: {
    title: 'Primer Engines',
    version: '1.0',
    description:
      '\n## Introduction\nEngines is an API. It does API stuff. Some marketing copy here.\nEngines is available in our hosted version, and can also be deployed on prem or hybrid environments. If you need dedicated, single-tenant space in our hosted version, we can provide it- contact sales.\n\n## Getting Started\nRequests to Engines are standard HTTP(s) calls that can be made from the command line or using the tools available in your chosen programming language, framework, or BI tool. There’s no need to install any additional bespoke packages.\nHere is an example request using `curl`:\n```sh\ncurl -X \'POST\' \'https://engines.primer.ai/entities/news/resolved\'\n-H \'Authorization: Bearer 123abc456\'\n-H \'Content-Type: application/json\'\n-d \'{"text": "Some text to find entities in"}\'\n```\nInclude the header “Content-Type: application/json” with your request.\nEngines generally operate on the key text contained in the JSON payload. Many come with additional parameters; see the [link]docs for further details.\n\n## Authentication\nRequests to Engines must include your API key, available from the Engines developer portal. Primer does not store API keys -- once you have generated one, it’s gone, so make a note. You can revoke and generate new keys at any time through the portal.\nKeys are subject to limits based on your plan. These include which Engines you have access to, monthly request quotas, and rate limits.\nOur free trial plan allows access to all Engines up to a maximum of 500 requests during the trial period (14 days), at a rate of 20 requests per minute.\n\n## Batch Processing\nRequests can be batched together in a group of up to 10 documents. This style of processing may be more appropriate if your application is less sensitive to latency and instead requires large throughput.\nBatch processing is done via passing in your document as a JSON list, instead of a single string. For example, here is the entities request being processed as a batch of 1:\n```sh\ncurl -X \'POST\' \'https://engines.primer.ai/entities/news/resolved\'\n  -H \'Authorization: Bearer 123abc456\'\n  -H \'Content-Type: application/json\'\n  -d \'{"text": ["Some text to find entities in"]}\'\n```\nThe request returns an ID string, like "c34675df-8ead-461a-a4cc-673e3b9de5c5", which you query later for the result.\nBatched requests immediately return an ID which you query later for the result with a GET request:\n```sh\ncurl \'https://engines.primer.ai/result/c34675df-8ead-461a-a4cc-673e3b9de5c5\'\n  -H \'Authorization: Bearer 123abc456\'\n```\nIt returns a list of results in the order they were submitted in the original request:\n`[{"locations": {}, "people": {}, "organizations": {}, "miscellaneous": {}}]`\n\n## Retrieving Information on Engines\nWe provide an endpoint to programmatically view all the available engines you have access to:\n`curl https://engines.primer.ai/api/v1/engines/available_engines   -H \'Authorization: Bearer 123abc456\'`\nIt returns a list of the Engines included in your plan:\n`[{"name": "AbstractiveSummarization", "description": "The Abstractive Summarization model generates text using a beam search over the space of probabilities.", "language": "English", "last_date": "2020-05-31", "link": "link_to_model_card_goes_here", "version": "0"}, …]`\nYou can also query for details of a specific Engine by sending a GET request instead of a POST request:\n`curl https://engines.dev.primering.net/api/v1/summary/news/abstractive -H "API-KEY: 3"`\nreturns\n`{"name": "AbstractiveSummarization", "description": "The Abstractive Summarization model generates text using a beam search over the space of probabilities.", "language": "English", "last_date": "2020-05-31", "link": "link_to_model_card_goes_here", "version": "0"}`\nNote that Primer always provides the latest version of its Engines. If your results look different over time it’s likely because we’ve upgraded the core technology. You can check via this endpoint to see when it was last updated (last_date) and what version Engine is being provided (version). Link provides a link to the model card containing detailed performance information.\n\n## API Performance\nFree trials are not subject to any Service Level Agreement. In general we aim for 99.9% uptime.\nLatency of the Engines is variable depending on the type of Engine called, the length of the document, and system load. Typically, a synchronous request may take on the order of several seconds, while an asynchronous request could be a minute or more.\n\n## Errors\nThe most common errors you may see are:\n\nHTTP Status Code | HTTP Status Code\n---------------- | ----------------\n400 | Check your input JSON format\n202 | Your batched request has not finished processing yet\n404 | No record of the result you requested - check the supplied ID\n504 | System is under heavy load, please try again\n429 | You’ve exceeded your permitted rate limit or quota. The response will include an HTTP `Retry-After` header indicating how long you should wait before trying again.\n\n## Costs\nEngines user accounts come with a quota of credits. Different requests cost different amounts of credits. Your response from the Engines API will contain a header, X-Cost, detailing the amount of credits the request cost.\nTypically, one request for an Engine to process one document costs one credit. For batch requests this is multiplied by the number of documents contained in the batch. Other request types are detailed here:\n\nRequest Type | Cost\n------------ | ----\nGet details of an Engine | 0.01\nGet available Engines | 0.01\nRetrieve the result of a batch request | 0.1\n\n## Latest Updates\nWe’ll provide release notes here as Engines are added and upgraded.\n',
  },
  produces: ['application/json'],
  consumes: ['application/json'],
  securityDefinitions: {
    apikey: {
      type: 'apiKey',
      in: 'header',
      name: 'Authorization',
    },
    jwt: {
      type: 'apiKey',
      name: 'Authorization',
      in: 'header',
    },
  },
  security: [
    {
      apikey: [],
    },
  ],
  tags: [
    {
      name: 'v1',
    },
    {
      name: 'v1/entities',
      description: 'the entity namespace, for ner related tasks',
    },
    {
      name: 'v1/classify',
      description: 'the classifier namespace, for all your classification needs',
    },
    {
      name: 'v1/summary',
      description: 'the summary namespace, TLDR',
    },
    {
      name: 'v1/generate',
      description: 'the generator namespace, where generated text comes from',
    },
    {
      name: 'v1/ask',
      description: 'the question namespace, get the answer you seek',
    },
    {
      name: 'v1/extract',
      description: 'the extract namespace, pull directly from text',
    },
  ],
  definitions: {
    EntitiesRequest: {
      required: ['text'],
      properties: {
        text: {
          type: 'string',
          description: 'The text to analyze.',
          example: 'Today, John Smith was testing out an API',
        },
      },
      type: 'object',
    },
    EntitiesResponse: {
      properties: {
        people: {
          type: 'array',
          description: 'Extracted people.',
          items: {
            $ref: '#/definitions/BaseEntity',
          },
        },
        locations: {
          type: 'array',
          description: 'Extracted locations.',
          items: {
            $ref: '#/definitions/BaseEntity',
          },
        },
        organizations: {
          type: 'array',
          description: 'Extracted organizations.',
          items: {
            $ref: '#/definitions/BaseEntity',
          },
        },
        miscellaneous: {
          type: 'array',
          description: 'Extracted miscellaneous entities.',
          items: {
            $ref: '#/definitions/BaseEntity',
          },
        },
      },
      type: 'object',
    },
    BaseEntity: {
      properties: {
        entity: {
          type: 'string',
          description: 'Name of the entity',
          example: 'Entity Name',
        },
        entity_span: {
          type: 'array',
          description:
            'Tuple of [start, end] representing the character span of the entity within the supplied text.',
          example: [18, 33],
          items: {
            type: 'integer',
          },
        },
        confidence: {
          type: 'number',
          description: "Model's confidence in the entity being correct",
          example: 0.7556,
        },
      },
      type: 'object',
    },
    CorefRequest: {
      properties: {
        text: {
          type: 'string',
          description: 'Text to resolve coreferences in',
          example: 'Today John Smith was testing out an API. He thought it was rather nifty.',
        },
      },
      type: 'object',
    },
    CorefResponse: {
      properties: {
        anaphora: {
          type: 'array',
          description: 'List of resolved anaphora',
          items: {
            $ref: '#/definitions/CorefResponseNested',
          },
        },
      },
      type: 'object',
    },
    CorefResponseNested: {
      properties: {
        anaphora_text: {
          type: 'string',
          example: 'He',
        },
        anaphora_start: {
          type: 'integer',
          example: 41,
        },
        anaphora_end: {
          type: 'integer',
          example: 43,
        },
        antecedent_text: {
          type: 'string',
          example: 'John Smith',
        },
        antecedent_start: {
          type: 'integer',
          example: 6,
        },
        antecedent_end: {
          type: 'integer',
          example: 16,
        },
        score: {
          type: 'number',
          example: 0.98,
        },
      },
      type: 'object',
    },
    ResolvedEntitiesResponse: {
      properties: {
        people: {
          type: 'array',
          description:
            "An object of extracted people entities, each property of the object representing an entity, and containing a list of all instances of that entity's occurrence in the source document, as well as all disambiguated instances of that entity and where they occur in the source document.",
          example: {
            'Jack Lemmon': [
              {
                text: 'Jack Lemmon',
                start: 7203,
                end: 7214,
                conf: 0.9999870657920837,
                needs_disambiguation: false,
              },
            ],
          },
          items: {
            $ref: '#/definitions/HeadEntity',
          },
        },
        locations: {
          type: 'array',
          description:
            "An object of extracted location entities, each property of the object representing an entity, and containing a list of all instances of that entity's occurrence in the source document, as well as all disambiguated instances of that entity  and where they occur in the source document.",
          example: {
            'New Yorkers': [
              {
                text: 'New Yorkers',
                start: 1443,
                end: 1454,
                conf: 0.8860486447811127,
                needs_disambiguation: false,
              },
              {
                text: 'New York',
                start: 6600,
                end: 6608,
                conf: 0.9998621642589569,
                needs_disambiguation: true,
              },
            ],
            'New York City': [
              {
                text: 'New York City',
                start: 8399,
                end: 8412,
                conf: 0.9957953294118246,
                needs_disambiguation: false,
              },
              {
                text: 'New York',
                start: 6600,
                end: 6608,
                conf: 0.9998621642589569,
                needs_disambiguation: true,
              },
            ],
          },
          items: {
            $ref: '#/definitions/HeadEntity',
          },
        },
        organizations: {
          type: 'array',
          description:
            "An object of extracted organization entities, each property of the object representing an entity, and containing a list of all instances of that entity's occurrence in the source document, as well as all disambiguated instances of that entity and where they occur in the source document.",
          example: {
            'New York Times': [
              {
                text: 'New York Times',
                start: 25,
                end: 39,
                conf: 0.9968894521395365,
                needs_disambiguation: false,
              },
              {
                text: 'Times',
                start: 2206,
                end: 2211,
                conf: 0.9998588562011719,
                needs_disambiguation: true,
              },
            ],
          },
          items: {
            $ref: '#/definitions/HeadEntity',
          },
        },
        miscellaneous: {
          type: 'array',
          description:
            "An object of extracted miscellaneous entities, each property of the object representing an entity, and containing a list of all instances of that entity's occurrence in the source document, as well as all disambiguated instances of that entity and where they occur in the source document.",
          example: {
            'Emmy Awards': [
              {
                text: 'Emmy Awards',
                start: 1423,
                end: 1427,
                conf: 0.5180583596229553,
                needs_disambiguation: false,
              },
            ],
          },
          items: {
            $ref: '#/definitions/HeadEntity',
          },
        },
      },
      type: 'object',
    },
    HeadEntity: {
      properties: {
        'Full Name': {
          $ref: '#/definitions/ResolvedBaseEntity',
        },
        'Different Full Name': {
          $ref: '#/definitions/ResolvedBaseEntity',
        },
      },
      type: 'object',
    },
    ResolvedBaseEntity: {
      properties: {
        entity: {
          type: 'string',
          description: 'Name of the entity',
          example: 'Entity Name',
        },
        entity_span: {
          type: 'array',
          description:
            'Tuple of [start, end] representing the character span of the entity within the source document.',
          example: [18, 33],
          items: {
            type: 'integer',
          },
        },
        confidence: {
          type: 'number',
          description: "The model's confidence in the entity being correct.",
          example: 0.7556,
        },
        needs_disambiguation: {
          type: 'boolean',
          description: 'If true, the entity needs further disambiguation.',
          example: false,
        },
      },
      type: 'object',
    },
    RelationsRequest: {
      properties: {
        text: {
          type: 'string',
          description: 'Text to analyze.',
          example:
            'Tom works at Primer as an engineer. He has an infinity stone and joined the Avengers.',
        },
        subject: {
          type: 'string',
          description: 'Subject to find relations for, or null to return all relations',
          example: 'Tom',
        },
      },
      type: 'object',
    },
    RelationsResponse: {
      properties: {
        employer: {
          type: 'array',
          description: 'Extracted employers',
          items: {
            $ref: '#/definitions/BaseRelation',
          },
        },
        position_held: {
          type: 'array',
          description: 'Extracted positions',
          items: {
            $ref: '#/definitions/BaseRelation',
          },
        },
        member_of: {
          type: 'array',
          description: 'Extracted member relations',
          items: {
            $ref: '#/definitions/BaseRelation',
          },
        },
        creator_of: {
          type: 'array',
          description: 'Extracted creator relations',
          items: {
            $ref: '#/definitions/BaseRelation',
          },
        },
        occupation: {
          type: 'array',
          description: 'Extracted occupations',
          items: {
            $ref: '#/definitions/BaseRelation',
          },
        },
        owner_of: {
          type: 'array',
          description: 'Extracted owner relations',
          items: {
            $ref: '#/definitions/BaseRelation',
          },
        },
        activity_done: {
          type: 'array',
          description: 'Extracted activity relations',
          items: {
            $ref: '#/definitions/BaseRelation',
          },
        },
        affiliation: {
          type: 'array',
          description:
            'Extracted affiliation relations, will likely be empty if subject is provided',
          items: {
            $ref: '#/definitions/BaseRelation',
          },
        },
      },
      type: 'object',
    },
    BaseRelation: {
      properties: {
        subject: {
          type: 'string',
          description: 'subject of the relation',
          example: 'Tom',
        },
        object: {
          type: 'string',
          description: 'Object related to the subject',
          example: 'Primer',
        },
        confidence: {
          type: 'number',
          description: "Model's confidence in the relation",
          example: 0.748,
        },
        context: {
          type: 'string',
          description: 'Sentence mentioning the relation',
          example:
            'Tom works at Primer as an engineer. He has an infinity stone and joined the Avengers.',
        },
        object_span: {
          type: 'array',
          description:
            'Tuple of [start, end] representing the character span of the object within the supplied text.',
          example: [13, 19],
          items: {
            type: 'integer',
          },
        },
        context_span: {
          type: 'array',
          description:
            'Tuple of [start, end] representing the character span of the context sentence within the supplied text.',
          example: [0, 85],
          items: {
            type: 'integer',
          },
        },
      },
      type: 'object',
    },
    ChineseEntitiesRequest: {
      required: ['text'],
      properties: {
        text: {
          type: 'string',
          description: 'The Chinese text to analyze.',
          example:
            '韩国首尔——韩国总统文在寅的一位发言人周二表示，美国官员对韩国总统说，他们愿意与朝鲜进行直接谈判，这表明特朗普政府的政策发生了转变。 \n\n就在这个声明发表的几天前，美国副总统迈克·彭斯(Mike Pence)曾来到正在主办冬季奥运会的韩国平昌，与文在寅见了面。自从彭斯周六离开以来，有关华盛顿就可能的对话与首尔达成共识的报道已经出现在新闻媒体上，但韩国官员直到周二才证实了这个消息。 \n\n“美国对韩朝对话也表现出积极的态度，并表示美国愿意开始与朝鲜展开对话，”文在寅的发言人金宜谦(Kim Eui-kyeom)对记者说。 \n\n美国历届政府一直把与朝鲜对话作为胡萝卜，将其与制裁的大棒结合使用，希望能让这个孤立的国家结束其核武器计划。直到最近，特朗普政府官员都坚称，在朝鲜迈出裁军措施的第一步前，不会与朝鲜进行面对面的对话。 \n\n广告 \n\n特朗普总统最近曾把文在寅对朝鲜的友好姿态描述为“绥靖”。当去年12月，美国国务卿雷克斯·蒂勒森(Rex Tillerson)表示，美国愿意进行“没有先决条件的会面”时，白宫坚称，蒂勒森的说法为时过早。',
        },
      },
      type: 'object',
    },
    ArabicEntitiesRequest: {
      required: ['text'],
      properties: {
        text: {
          type: 'string',
          description: 'The Arabic text to analyze.',
          example:
            'تعرف على إنجازات قطاعات التخطيط والقوى العاملة والأوقاف في مصر: مسيرة الإنجازات',
        },
      },
      type: 'object',
    },
    SentimentRequest: {
      properties: {
        text: {
          type: 'string',
          description: 'Document to assess the sentiment of.',
          example: 'The company is great and makes good products',
        },
      },
      type: 'object',
    },
    SentimentResponse: {
      properties: {
        sentiment: {
          type: 'string',
          description: 'positive or negative',
          example: 'positive',
        },
        magnitude: {
          type: 'number',
          description: 'Magnitude of the sentiment expressed',
          example: 0.92,
        },
      },
      type: 'object',
    },
    SyntheticResponse: {
      properties: {
        label: {
          type: 'boolean',
          description: 'whether or not given text is synthetic',
        },
        prob: {
          type: 'number',
          description: 'accuracy of the label',
          example: 0.506,
        },
      },
      type: 'object',
    },
    BotRequest: {
      required: ['_source'],
      properties: {
        _source: {
          type: 'string',
          description: "full _source object of a tweet's json",
          example: '{doc.{...}}',
        },
      },
      type: 'object',
    },
    BotResponse: {
      properties: {
        prob: {
          type: 'number',
          description: 'probability that tweet is from a bot',
          example: 0.506,
        },
      },
      type: 'object',
    },
    DimefilRequest: {
      properties: {
        text: {
          type: 'string',
          description: 'The text to check against the topics',
          example: 'The parrots were involved in illicit finance to smuggle Brazil nuts.',
        },
        international: {
          type: 'boolean',
          description: 'If true, only triggers on mention of at least one foreign country',
          example: false,
        },
      },
      type: 'object',
    },
    DimefilResponse: {
      properties: {
        illicit_finance: {
          type: 'number',
          description: 'probability that text matches topic',
          example: 0.506,
        },
        diplomacy: {
          type: 'number',
          description: 'probability that text matches topic',
          example: 0,
        },
        law_enforcement: {
          type: 'number',
          description: 'probability that text matches topic',
          example: 0,
        },
        information: {
          type: 'number',
          description: 'probability that text matches topic',
          example: 0,
        },
        military: {
          type: 'number',
          description: 'probability that text matches topic',
          example: 0,
        },
        intelligence: {
          type: 'number',
          description: 'probability that text matches topic',
          example: 0,
        },
        international_economics: {
          type: 'number',
          description: 'probability that text matches topic',
          example: 0,
        },
      },
      type: 'object',
    },
    ChineseSentimentRequest: {
      properties: {
        text: {
          type: 'string',
          description: 'Chinese document to assess the sentiment of.',
          example: '京东与百度达成合作 再获超级流量入口',
        },
      },
      type: 'object',
    },
    ChineseSentimentResponse: {
      properties: {
        sentiment: {
          type: 'string',
          description: 'positive, negative or nuetral',
          example: 'positive',
        },
        magnitude: {
          type: 'number',
          description: 'Magnitude of the sentiment expressed',
          example: 0.31,
        },
      },
      type: 'object',
    },
    ArabicSentimentRequest: {
      properties: {
        text: {
          type: 'string',
          description: 'Arabic document to assess the sentiment of.',
          example:
            'تعرف على إنجازات قطاعات التخطيط والقوى العاملة والأوقاف في مصر: مسيرة الإنجازات',
        },
      },
      type: 'object',
    },
    ArabicSentimentResponse: {
      properties: {
        sentiment: {
          type: 'string',
          description: 'positive, negative or nuetral',
          example: 'positive',
        },
        magnitude: {
          type: 'number',
          description: 'Magnitude of the sentiment expressed',
          example: 0.82,
        },
      },
      type: 'object',
    },
    SummariesRequest: {
      required: ['methods', 'text'],
      properties: {
        text: {
          type: 'string',
          description: 'The text to summarize.',
          example:
            'Once upon a midnight dreary, while I pondered, weak and weary,\n Over many a quaint and curious volume of forgotten lore,\n While I nodded, nearly napping, suddenly there came a tapping,\n As of some one gently rapping, rapping at my chamber door.\n “‘Tis some visiter,” I muttered, “tapping at my chamber door—\n Only this, and nothing more. ”Ah, distinctly I remember it was in the bleak December,\n And each separate dying ember wrought its ghost upon the floor.\n Eagerly I wished the morrow;—vainly I had sought to borrow\n From my books surcease of sorrow—sorrow for the lost Lenore—\n For the rare and radiant maiden whom the angels name Lenore—\n Nameless here for evermore.\n\n And the silken sad uncertain rustling of each purple curtain\n Thrilled me—filled me with fantastic terrors never felt before;\n So that now, to still the beating of my heart, I stood repeating\n “‘Tis some visiter entreating entrance at my chamber door—\n Some late visiter entreating entrance at my chamber door;—\n This it is, and nothing more. ”Presently my soul grew stronger; hesitating then no longer,\n “Sir,” said I, “or Madam, truly your forgiveness I implore;\n But the fact is I was napping, and so gently you came rapping,\n And so faintly you came tapping, tapping at my chamber door,\n That I scarce was sure I heard you “—here I opened wide the door;——\n Darkness there and nothing more.\n\n Deep into that darkness peering, long I stood there wondering, fearing,\n Doubting, dreaming dreams no mortal ever dared to dream before;\n But the silence was unbroken, and the darkness gave no token,\n And the only word there spoken was the whispered word, “Lenore!”\n  This I whispered, and an echo murmured back the word, “Lenore!”—\n Merely this, and nothing more.\n',
        },
        good_words: {
          type: 'array',
          description:
            'An array of strings representing words and/or phrases you want to appear in the <code>abstractive</code> summarization.',
          example: ['raven', 'rapping'],
          items: {
            type: 'string',
          },
        },
        force: {
          type: 'number',
          description:
            'A float used by <code>abstractive</code> summarization, it represents the amount of force applied to include <code>good_words</code> in the summary. It should be between 0 (weakest) and 1 (strongest), and the default is 0.5.',
          example: 0,
        },
        whomp: {
          type: 'number',
          description:
            'A number used by <code>abstractive</code> summarization that, when higher, may result in fitting <code>good_words</code> in better locations in the summary. However, tweaking this number may result in an overall degradation in summary quality. Use with caution.',
          example: 100,
        },
        bad_words: {
          type: 'array',
          description:
            "An array of strings representing words and/or phrases you don't want to appear in the <code>abstractive</code> summarization.",
          example: ['raven', 'rapping'],
          items: {
            type: 'string',
          },
        },
        bonk: {
          type: 'number',
          description:
            'A float similar to force that represents the preference towards avoiding <code>bad_words</code> in the <code>abstractive</code> summarizaton. It should be greater than 1, where 1.1 - 5 is a mild preference to not use them and infinity (the default) forbids the usage of <code>bad_words</code>.',
          example: 5,
        },
        limit_vocab: {
          type: 'boolean',
          description:
            "A boolean used by <code>abstractive</code> summarization, it determines whether to constrain the summarization output to only using tokens in the input text. It's false by default.",
          example: false,
        },
        max_length: {
          type: 'integer',
          description:
            'A number used by <code>abstractive</code> summarization, it suggests a maximum summary length. It may not always be respected.',
          example: 20,
        },
        min_length: {
          type: 'integer',
          description:
            'A number used by <code>abstractive</code> summarization, it suggests a minimum summary length. It may not always be respected.',
          example: 10,
        },
        num_sents: {
          type: 'integer',
          description:
            'Used by <code>extractive</code> summarization, it indicates the number of sentences that should be extracted from the source document. By default, 3 sentences are returned.',
          example: 3,
        },
        hint: {
          type: 'string',
          description:
            'A string of words that will be used in the <code>semi-abstractive</code> summarization to set how the summary should start. The hint works well only if it is an important concept/entity in the source document.',
          example: 'There was a rapping at my chamber door',
        },
        focus_on_hint: {
          type: 'number',
          description:
            'A float used by <code>semi-abstractive</code> summarization to narrow down the analyzed source document to chunks containing mentions of the <code>hint</code> or <code>keywords</code>. When weakest (0), <code>semi-abstractive</code> summarization will use the whole text. When strongest (1), it will use only sentences containing the <code>hint</code> or <code>keywords</code>. It should be between 0 (weakest) and 1 (strongest), and it defaults to 0.',
          example: 0,
        },
        keywords: {
          type: 'string',
          description:
            'A comma separated string used by <code>semi-abstractive</code> summarization, which will attempt to include these keywords in the summary it generates, if possible.',
          example: 'raven,rapping',
        },
        force_keywords_into_generation: {
          type: 'number',
          description:
            'A float used by <code>semi-abstractive</code> summarization, it sets the force with which the model will attempt to insert <code>keywords</code> into the summary it generates. It should be between 0 (weakest) and 1 (strongest), and the default is 0.5.',
          example: 0.5,
        },
        methods: {
          description:
            "An object with three properties: <code>extractive</code>, <code>abstractive</code> and <code>semiabstractive</code>. Setting any of these properties to true will return that form of summary in the response. Additionally, if <code>extractive</code> is set to an object containing the property <code>num_sents</code>, the extractive summary will extract that many sentences in it's summarization.",
          allOf: [
            {
              $ref: '#/definitions/SummariesMethodsRequest',
            },
          ],
        },
      },
      type: 'object',
    },
    SummariesMethodsRequest: {
      properties: {
        extractive: {
          example: {
            num_sents: 1,
          },
          allOf: [
            {
              $ref: '#/definitions/BaseSummariesParams',
            },
          ],
        },
        semiabstractive: {
          type: 'boolean',
          description: 'Whether to return a semi-abstractive summary',
          example: true,
        },
        abstractive: {
          type: 'boolean',
          description: 'Whether to return a fully abstractive summary',
          example: true,
        },
      },
      type: 'object',
    },
    BaseSummariesParams: {
      properties: {
        num_sents: {
          type: 'integer',
          description:
            'Used by <code>extractive</code> summarization, it indicates the number of sentences that should be extracted from the source document. By default, 3 sentences are returned.',
          example: 3,
        },
      },
      type: 'object',
    },
    SummariesResponse: {
      properties: {
        extractive: {
          type: 'array',
          description: 'Fully Extractive summary - a list of sequential sentences',
          example: [
            'Once upon a midnight dreary, while I pondered, weak and weary, Over many a quaint and curious volume of forgotten lore, While I nodded, nearly napping, suddenly there came a tapping, As of some one gently rapping, rapping at my chamber door.',
            '“‘Tis some visiter,” I muttered, “tapping at my chamber door— Only this, and nothing more.',
            '”Ah, distinctly I remember it was in the bleak December, And each separate dying ember wrought its ghost upon the floor.',
          ],
          items: {
            type: 'string',
          },
        },
        semiabstractive: {
          type: 'array',
          description: 'Semi-Abstractive bullet point summary',
          example: [
            'There was a rapping at my chamber door Ah, distinctly I remember it was in the bleak December.',
            'The silken sad uncertain rustling of each purple curtain filled me with fantastic terrors never felt before.',
            'The silence was unbroken and the darkness gave no token, And the only word there spoken was "Lenore!" before the whispered word "Lenore!"',
          ],
          items: {
            type: 'string',
          },
        },
        abstractive: {
          type: 'string',
          description: 'Fully Abstractive summary',
          example: 'Once upon a midnight dreary, while I pondered, weak and weary,\r\n',
        },
      },
      type: 'object',
    },
    AbstractiveSummaryRequest: {
      required: ['text'],
      properties: {
        text: {
          type: 'string',
          description: 'The text to summarize.',
          example:
            'Once upon a midnight dreary, while I pondered, weak and weary,\n Over many a quaint and curious volume of forgotten lore,\n While I nodded, nearly napping, suddenly there came a tapping,\n As of some one gently rapping, rapping at my chamber door.\n “‘Tis some visiter,” I muttered, “tapping at my chamber door—\n Only this, and nothing more. ”Ah, distinctly I remember it was in the bleak December,\n And each separate dying ember wrought its ghost upon the floor.\n Eagerly I wished the morrow;—vainly I had sought to borrow\n From my books surcease of sorrow—sorrow for the lost Lenore—\n For the rare and radiant maiden whom the angels name Lenore—\n Nameless here for evermore.\n\n And the silken sad uncertain rustling of each purple curtain\n Thrilled me—filled me with fantastic terrors never felt before;\n So that now, to still the beating of my heart, I stood repeating\n “‘Tis some visiter entreating entrance at my chamber door—\n Some late visiter entreating entrance at my chamber door;—\n This it is, and nothing more. ”Presently my soul grew stronger; hesitating then no longer,\n “Sir,” said I, “or Madam, truly your forgiveness I implore;\n But the fact is I was napping, and so gently you came rapping,\n And so faintly you came tapping, tapping at my chamber door,\n That I scarce was sure I heard you “—here I opened wide the door;——\n Darkness there and nothing more.\n\n Deep into that darkness peering, long I stood there wondering, fearing,\n Doubting, dreaming dreams no mortal ever dared to dream before;\n But the silence was unbroken, and the darkness gave no token,\n And the only word there spoken was the whispered word, “Lenore!”\n  This I whispered, and an echo murmured back the word, “Lenore!”—\n Merely this, and nothing more.\n',
        },
        good_words: {
          type: 'array',
          description:
            'An array of strings representing words and/or phrases you want to appear in the <code>abstractive</code> summarization.',
          example: ['raven', 'rapping'],
          items: {
            type: 'string',
          },
        },
        force: {
          type: 'number',
          description:
            'A float used by <code>abstractive</code> summarization, it represents the amount of force applied to include <code>good_words</code> in the summary. It should be between 0 (weakest) and 1 (strongest), and the default is 0.5.',
          example: 0,
        },
        whomp: {
          type: 'number',
          description:
            'A number used by <code>abstractive</code> summarization that, when higher, may result in fitting <code>good_words</code> in better locations in the summary. However, tweaking this number may result in an overall degradation in summary quality. Use with caution.',
          example: 100,
        },
        bad_words: {
          type: 'array',
          description:
            "An array of strings representing words and/or phrases you don't want to appear in the <code>abstractive</code> summarization.",
          example: ['raven', 'rapping'],
          items: {
            type: 'string',
          },
        },
        bonk: {
          type: 'number',
          description:
            'A float similar to force that represents the preference towards avoiding <code>bad_words</code> in the <code>abstractive</code> summarizaton. It should be greater than 1, where 1.1 - 5 is a mild preference to not use them and infinity (the default) forbids the usage of <code>bad_words</code>.',
          example: 5,
        },
        limit_vocab: {
          type: 'boolean',
          description:
            "A boolean used by <code>abstractive</code> summarization, it determines whether to constrain the summarization output to only using tokens in the input text. It's false by default.",
          example: false,
        },
        max_length: {
          type: 'integer',
          description:
            'A number used by <code>abstractive</code> summarization, it suggests a maximum summary length. It may not always be respected.',
          example: 20,
        },
        min_length: {
          type: 'integer',
          description:
            'A number used by <code>abstractive</code> summarization, it suggests a minimum summary length. It may not always be respected.',
          example: 10,
        },
      },
      type: 'object',
    },
    AbstractiveSummaryResponse: {
      properties: {
        summary: {
          type: 'string',
          description: 'Fully Abstractive summary',
          example: 'Once upon a midnight dreary, while I pondered, weak and weary,\r\n',
        },
      },
      type: 'object',
    },
    ExtractiveSummaryRequest: {
      required: ['text'],
      properties: {
        text: {
          type: 'string',
          description: 'The text to summarize.',
          example:
            'Once upon a midnight dreary, while I pondered, weak and weary,\n Over many a quaint and curious volume of forgotten lore,\n While I nodded, nearly napping, suddenly there came a tapping,\n As of some one gently rapping, rapping at my chamber door.\n “‘Tis some visiter,” I muttered, “tapping at my chamber door—\n Only this, and nothing more. ”Ah, distinctly I remember it was in the bleak December,\n And each separate dying ember wrought its ghost upon the floor.\n Eagerly I wished the morrow;—vainly I had sought to borrow\n From my books surcease of sorrow—sorrow for the lost Lenore—\n For the rare and radiant maiden whom the angels name Lenore—\n Nameless here for evermore.\n\n And the silken sad uncertain rustling of each purple curtain\n Thrilled me—filled me with fantastic terrors never felt before;\n So that now, to still the beating of my heart, I stood repeating\n “‘Tis some visiter entreating entrance at my chamber door—\n Some late visiter entreating entrance at my chamber door;—\n This it is, and nothing more. ”Presently my soul grew stronger; hesitating then no longer,\n “Sir,” said I, “or Madam, truly your forgiveness I implore;\n But the fact is I was napping, and so gently you came rapping,\n And so faintly you came tapping, tapping at my chamber door,\n That I scarce was sure I heard you “—here I opened wide the door;——\n Darkness there and nothing more.\n\n Deep into that darkness peering, long I stood there wondering, fearing,\n Doubting, dreaming dreams no mortal ever dared to dream before;\n But the silence was unbroken, and the darkness gave no token,\n And the only word there spoken was the whispered word, “Lenore!”\n  This I whispered, and an echo murmured back the word, “Lenore!”—\n Merely this, and nothing more.\n',
        },
        num_sents: {
          type: 'integer',
          description:
            'Used by <code>extractive</code> summarization, it indicates the number of sentences that should be extracted from the source document. By default, 3 sentences are returned.',
          example: 3,
        },
      },
      type: 'object',
    },
    ExtractiveSummaryResponse: {
      properties: {
        summary: {
          type: 'array',
          description: 'Fully Extractive summary - a list of sequential sentences',
          example: [
            'Once upon a midnight dreary, while I pondered, weak and weary, Over many a quaint and curious volume of forgotten lore, While I nodded, nearly napping, suddenly there came a tapping, As of some one gently rapping, rapping at my chamber door.',
            '“‘Tis some visiter,” I muttered, “tapping at my chamber door— Only this, and nothing more.',
            '”Ah, distinctly I remember it was in the bleak December, And each separate dying ember wrought its ghost upon the floor.',
          ],
          items: {
            type: 'string',
          },
        },
      },
      type: 'object',
    },
    SemiabstractiveSummaryRequest: {
      required: ['text'],
      properties: {
        text: {
          type: 'string',
          description: 'The text to summarize.',
          example:
            'Once upon a midnight dreary, while I pondered, weak and weary,\n Over many a quaint and curious volume of forgotten lore,\n While I nodded, nearly napping, suddenly there came a tapping,\n As of some one gently rapping, rapping at my chamber door.\n “‘Tis some visiter,” I muttered, “tapping at my chamber door—\n Only this, and nothing more. ”Ah, distinctly I remember it was in the bleak December,\n And each separate dying ember wrought its ghost upon the floor.\n Eagerly I wished the morrow;—vainly I had sought to borrow\n From my books surcease of sorrow—sorrow for the lost Lenore—\n For the rare and radiant maiden whom the angels name Lenore—\n Nameless here for evermore.\n\n And the silken sad uncertain rustling of each purple curtain\n Thrilled me—filled me with fantastic terrors never felt before;\n So that now, to still the beating of my heart, I stood repeating\n “‘Tis some visiter entreating entrance at my chamber door—\n Some late visiter entreating entrance at my chamber door;—\n This it is, and nothing more. ”Presently my soul grew stronger; hesitating then no longer,\n “Sir,” said I, “or Madam, truly your forgiveness I implore;\n But the fact is I was napping, and so gently you came rapping,\n And so faintly you came tapping, tapping at my chamber door,\n That I scarce was sure I heard you “—here I opened wide the door;——\n Darkness there and nothing more.\n\n Deep into that darkness peering, long I stood there wondering, fearing,\n Doubting, dreaming dreams no mortal ever dared to dream before;\n But the silence was unbroken, and the darkness gave no token,\n And the only word there spoken was the whispered word, “Lenore!”\n  This I whispered, and an echo murmured back the word, “Lenore!”—\n Merely this, and nothing more.\n',
        },
        hint: {
          type: 'string',
          description:
            'A string of words that will be used in the <code>semi-abstractive</code> summarization to set how the summary should start. The hint works well only if it is an important concept/entity in the source document.',
          example: 'There was a rapping at my chamber door',
        },
        focus_on_hint: {
          type: 'number',
          description:
            'A float used by <code>semi-abstractive</code> summarization to narrow down the analyzed source document to chunks containing mentions of the <code>hint</code> or <code>keywords</code>. When weakest (0), <code>semi-abstractive</code> summarization will use the whole text. When strongest (1), it will use only sentences containing the <code>hint</code> or <code>keywords</code>. It should be between 0 (weakest) and 1 (strongest), and it defaults to 0.',
          example: 0,
        },
        keywords: {
          type: 'string',
          description:
            'A comma separated string used by <code>semi-abstractive</code> summarization, which will attempt to include these keywords in the summary it generates, if possible.',
          example: 'raven,rapping',
        },
        force_keywords_into_generation: {
          type: 'number',
          description:
            'A float used by <code>semi-abstractive</code> summarization, it sets the force with which the model will attempt to insert <code>keywords</code> into the summary it generates. It should be between 0 (weakest) and 1 (strongest), and the default is 0.5.',
          example: 0.5,
        },
      },
      type: 'object',
    },
    SemiabstractiveSummaryResponse: {
      properties: {
        summary: {
          type: 'array',
          description: 'Semi-Abstractive bullet point summary',
          example: [
            'There was a rapping at my chamber door Ah, distinctly I remember it was in the bleak December.',
            'The silken sad uncertain rustling of each purple curtain filled me with fantastic terrors never felt before.',
            'The silence was unbroken and the darkness gave no token, And the only word there spoken was "Lenore!" before the whispered word "Lenore!"',
          ],
          items: {
            type: 'string',
          },
        },
      },
      type: 'object',
    },
    ChineseSummaryRequest: {
      properties: {
        text: {
          type: 'string',
          description: 'Chinese text to summarize',
          example:
            '韩国首尔——韩国总统文在寅的一位发言人周二表示，美国官员对韩国总统说，他们愿意与朝鲜进行直接谈判，这表明特朗普政府的政策发生了转变。 \n\n就在这个声明发表的几天前，美国副总统迈克·彭斯(Mike Pence)曾来到正在主办冬季奥运会的韩国平昌，与文在寅见了面。自从彭斯周六离开以来，有关华盛顿就可能的对话与首尔达成共识的报道已经出现在新闻媒体上，但韩国官员直到周二才证实了这个消息。 \n\n“美国对韩朝对话也表现出积极的态度，并表示美国愿意开始与朝鲜展开对话，”文在寅的发言人金宜谦(Kim Eui-kyeom)对记者说。 \n\n美国历届政府一直把与朝鲜对话作为胡萝卜，将其与制裁的大棒结合使用，希望能让这个孤立的国家结束其核武器计划。直到最近，特朗普政府官员都坚称，在朝鲜迈出裁军措施的第一步前，不会与朝鲜进行面对面的对话。 \n\n广告 \n\n特朗普总统最近曾把文在寅对朝鲜的友好姿态描述为“绥靖”。当去年12月，美国国务卿雷克斯·蒂勒森(Rex Tillerson)表示，美国愿意进行“没有先决条件的会面”时，白宫坚称，蒂勒森的说法为时过早。',
        },
      },
      type: 'object',
    },
    ChineseSummaryResponse: {
      properties: {
        summary: {
          type: 'string',
          description: 'extractive summary',
          example:
            '韩国首尔--韩国总统文在寅的一位发言人周二表示，美国官员对韩国总统说，他们愿意与朝鲜进行直接谈判，这表明特朗普政府的政策发生了转变。直到最近，特朗普政府官员都坚称，在朝鲜迈出裁军措施的第一步前，不会与朝鲜进行面对面的对话。',
        },
      },
      type: 'object',
    },
    TitleRequest: {
      required: ['text'],
      properties: {
        text: {
          type: 'string',
          description: 'The text for which a title will be generated.',
          example:
            'Once upon a midnight dreary, while I pondered, weak and weary,\n Over many a quaint and curious volume of forgotten lore,\n While I nodded, nearly napping, suddenly there came a tapping,\n As of some one gently rapping, rapping at my chamber door.\n “‘Tis some visiter,” I muttered, “tapping at my chamber door—\n Only this, and nothing more. ”Ah, distinctly I remember it was in the bleak December,\n And each separate dying ember wrought its ghost upon the floor.\n Eagerly I wished the morrow;—vainly I had sought to borrow\n From my books surcease of sorrow—sorrow for the lost Lenore—\n For the rare and radiant maiden whom the angels name Lenore—\n Nameless here for evermore.\n\n And the silken sad uncertain rustling of each purple curtain\n Thrilled me—filled me with fantastic terrors never felt before;\n So that now, to still the beating of my heart, I stood repeating\n “‘Tis some visiter entreating entrance at my chamber door—\n Some late visiter entreating entrance at my chamber door;—\n This it is, and nothing more. ”Presently my soul grew stronger; hesitating then no longer,\n “Sir,” said I, “or Madam, truly your forgiveness I implore;\n But the fact is I was napping, and so gently you came rapping,\n And so faintly you came tapping, tapping at my chamber door,\n That I scarce was sure I heard you “—here I opened wide the door;——\n Darkness there and nothing more.\n\n Deep into that darkness peering, long I stood there wondering, fearing,\n Doubting, dreaming dreams no mortal ever dared to dream before;\n But the silence was unbroken, and the darkness gave no token,\n And the only word there spoken was the whispered word, “Lenore!”\n  This I whispered, and an echo murmured back the word, “Lenore!”—\n Merely this, and nothing more.\n',
        },
        hint: {
          type: 'string',
          description:
            'A string of words that will be used to set how the title should start. The hint works well only if it is an important concept/entity in the source document.',
          example: 'rapping at my chamber door',
        },
        focus_on_hint: {
          type: 'number',
          description:
            'A float used to narrow down the analyzed source document to chunks containing mentions of the <code>hint</code> or <code>keywords</code>. When weakest (0), title generation will use the whole text. When strongest (1), it will use only sentences containing the <code>hint</code> or <code>keywords</code>. It should be between 0 (weakest) and 1 (strongest), and it defaults to 0.',
          example: 0,
        },
        keywords: {
          type: 'string',
          description:
            'A comma separated string, which title generation will attempt to include in the title it generates, if possible.',
          example: 'raven,rapping',
        },
        force_keywords_into_generation: {
          type: 'number',
          description:
            'A float that sets the force with which the model will attempt to insert <code>keywords</code> into the title it generates. It should be between 0 (weakest) and 1 (strongest), and the default is 0.5.',
          example: 0.5,
        },
      },
      type: 'object',
    },
    TitleResponse: {
      properties: {
        title: {
          type: 'string',
          description: 'A generated, plausible title for the source document.',
          example: 'Tapping at my chamber door',
        },
      },
      type: 'object',
    },
    PhrasesRequest: {
      properties: {
        text: {
          type: 'string',
          description: 'Text to analyze.',
          example: 'In Silicon Valley they stole a horse.',
        },
      },
      type: 'object',
    },
    PhrasesResponse: {
      properties: {
        phrases: {
          type: 'array',
          description: 'Extracted phrases.',
          items: {
            $ref: '#/definitions/BasePhrase',
          },
        },
      },
      type: 'object',
    },
    BasePhrase: {
      properties: {
        phrase: {
          type: 'string',
          description: 'Extracted phrase text',
          example: {
            phrases: [
              {
                phrase: 'Silicon Valley',
                confidence: 0.9999982715,
                span: [3, 17],
              },
              {
                phrase: 'stole a horse',
                confidence: 0.9999999603,
                span: [23, 36],
              },
            ],
          },
        },
        confidence: {
          type: 'number',
          description: "Model's confidence in the phrase",
          example: 0.999,
        },
        span: {
          type: 'array',
          description:
            'Tuple of [start, end] representing the character span of the phrase within the supplied text.',
          example: [17, 26],
          items: {
            type: 'integer',
          },
        },
      },
      type: 'object',
    },
    TopicsRequest: {
      properties: {
        text: {
          type: 'string',
          description: 'Text to generate topics for',
          example: 'This document is about coronavirus and COVID-19',
        },
      },
      type: 'object',
    },
    TopicsResponse: {
      properties: {
        topics: {
          type: 'array',
          description: 'Important topics from the text',
          example: ['coronavirus', 'COVID-19'],
          items: {
            type: 'string',
          },
        },
      },
      type: 'object',
    },
    TextToTextRequest: {
      properties: {
        text: {
          type: 'string',
          description: 'Text to generate topics for',
          example: 'This document is about coronavirus and COVID-19',
        },
      },
      type: 'object',
    },
    TextToTextResponse: {
      properties: {
        topics: {
          type: 'array',
          description: 'Important topics from the text',
          example: ['coronavirus', 'COVID-19'],
          items: {
            type: 'string',
          },
        },
      },
      type: 'object',
    },
    QuestionRequest: {
      properties: {
        text: {
          type: 'string',
          description: 'Text to ask question about',
          example: 'Today, John Smith was testing out an API',
        },
        question: {
          type: 'string',
          description: 'Question about the text',
          example: 'What was John Smith doing?',
        },
      },
      type: 'object',
    },
    QuestionResponse: {
      properties: {
        answer: {
          type: 'string',
          description: 'Answer to the question (or empty string if unable to answer)',
          example: 'testing out an API',
        },
        better_answer: {
          type: 'string',
          description:
            'A better (rephrased) answer to the question, abstractively generated but faithful to the extracted answer',
          example: 'John Smith was testing out an API.',
        },
        unanswerable: {
          type: 'boolean',
          description: 'True if model was unable to answer question from the text, else false',
          example: false,
        },
        confidence: {
          type: 'number',
          description: "Model's confidence in the affiliation",
          example: 0.81,
        },
        answer_span: {
          type: 'array',
          description:
            'Tuple of [start, end] representing the character span of the answer within the supplied text.',
          example: [22, 40],
          items: {
            type: 'integer',
          },
        },
      },
      type: 'object',
    },
    QuotesRequest: {
      properties: {
        text: {
          type: 'string',
          description: 'Text to extract quotes from',
          example:
            '"When you exploit opponents, you open yourself up to exploitation more and more", Carnegie Mellon researcher Tuomas Sandholm tells IEEE Spectrum.',
        },
      },
      type: 'object',
    },
    QuotesResponse: {
      properties: {
        'Tuomas Sandholm': {
          type: 'array',
          description: 'Quotes by that person',
          example: [
            {
              text:
                'When you exploit opponents, you open yourself up to exploitation more and more',
              quote_span: [1, 80],
              person_span: [110, 125],
            },
          ],
          items: {
            $ref: '#/definitions/QuotesResponseNested',
          },
        },
      },
      type: 'object',
    },
    QuotesResponseNested: {
      properties: {
        text: {
          type: 'string',
        },
        quote_span: {
          type: 'array',
          items: {
            type: 'integer',
          },
        },
        person_span: {
          type: 'array',
          items: {
            type: 'integer',
          },
        },
      },
      type: 'object',
    },
    DisputeRequest: {
      required: ['text'],
      properties: {
        text: {
          type: 'string',
          description: 'document to check for claims/disputes',
          example:
            'Rudy Giuliani says search warrant had nothing to do with his activities in Ukraine on behalf of Trump',
        },
      },
      type: 'object',
    },
    DisputeResponse: {
      properties: {
        claims: {
          type: 'array',
          items: {
            $ref: '#/definitions/BaseClaim',
          },
        },
      },
      type: 'object',
    },
    BaseClaim: {
      properties: {
        text: {
          type: 'string',
          description: 'sentence containing a claim',
        },
        span: {
          type: 'array',
          items: {
            type: 'integer',
          },
        },
        confidence: {
          type: 'number',
        },
        supporter: {
          $ref: '#/definitions/DisputeClaimant',
        },
        denier: {
          $ref: '#/definitions/DisputeClaimant',
        },
      },
      type: 'object',
    },
    DisputeClaimant: {
      properties: {
        text: {
          type: 'string',
          description: 'entity associated with the claim',
        },
        span: {
          type: 'array',
          items: {
            type: 'integer',
          },
        },
        confidence: {
          type: 'number',
        },
      },
      type: 'object',
    },
  },
  responses: {
    ParseError: {
      description: "When a mask can't be parsed",
    },
    MaskError: {
      description: 'When any error occurs on mask',
    },
    BadRequest: {},
    HTTPException: {
      description: 'Default error handler',
    },
  },
};
