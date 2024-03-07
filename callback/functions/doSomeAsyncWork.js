'use strict';

const {
	SFNClient,
	SendTaskSuccessCommand,
	SendTaskFailureCommand,
} = require('@aws-sdk/client-sfn');
const AWS_REGION = process.env.AWS_REGION_ID;

const client = new SFNClient({ region: AWS_REGION });

exports.handler = async (event) => {
	const body = JSON.parse(event.Records[0].body);

	const taskToken = body.taskToken;
	const payload = body.payload;

	console.log(taskToken);
	console.log(payload);

	let message = {};
	let command = {};

	if (payload.status === 'success') {
		message = {
			output: JSON.stringify({ result: 200 }),
			taskToken: taskToken,
		};

		command = new SendTaskSuccessCommand(message);
	} else {
		message = {
			taskToken: taskToken,
			cause: 'failure',
			error: 'failure',
		};

		command = new SendTaskFailureCommand(message);
	}
	const response = await client.send(command);
};
