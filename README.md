# Run a sync job and execute an async job with task token

_Infrastructure as code framework used_: AWS SAM
_AWS Services used_: AWS Step Functions

## Summary of the demo

In this demo you will see:

- How to build a state machine that uses the integration pattern .sync. Waiting for the specific job to finish before resuming the execution of the state machine automatically.
- How to build a state machine that uses task tokens to solve the callback integration pattern. In this case the state machine will wait for a task token to be returned from another service, a legacy system, or a manual process to continue processing.

This demo is part of a video posted in FooBar Serverless channel. You can check the video to see the whole demo.

Important: this application uses various AWS services and there are costs associated with these services after the Free Tier usage - please see the AWS Pricing page for details. You are responsible for any AWS costs incurred. No warranty is implied in this example.

## Requirements

- AWS CLI already configured with Administrator permission
- AWS SAM CLI installed - minimum version 1.109.0 (sam --version)
- NodeJS 20.x installed

## Deploy this demo

There are 2 demos inside this repository. The callback and the sync demo. Go the specific folder and deploy the demo you want.

We will be using AWS SAM and make sure you are running the latest version.

Deploy the project to the cloud:

```
sam deploy -g # Guided deployments
```

Next time, when you update the code, you can build and deploy with:

```
sam deploy
```

To delete the app:

```
sam delete
```

## To execute the state machine in the callback example

For a successfull execution, you need this input:

```
{
  "status": "success"
}
```

For a failed execution anything in the status will do:

```
{
  "status": "fail"
}
```

## Links related to this code

- Video about the different integration patterns: https://www.youtube.com/watch?v=vuFN4GC3rhg
- Video about running an asynchronous job: TBD
- Video about the wait for callback pattern: TBD
