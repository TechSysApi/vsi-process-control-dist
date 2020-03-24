var variables={
  "name": "@ch-post/vsi-process-control-stream-api",
  "version": "1.1.7",
  "description": "API definition - Interaction between Machine Control and Reading Coding System - CEN/TS 16238",
  "scripts": {
    "start": "apikana start src dist",
    "stop": "apikana stop",
    "create-sample": "apikana create-sample",
    "validate-samples": "apikana validate-samples",
    "test": "apikana validate-samples"
  },
  "author": "herzamk",
  "license": "Apache-2.0",
  "dependencies": {},
  "devDependencies": {
    "apikana": "0.7.6"
  },
  "customConfig": {
    "type": "stream-api",
    "domain": "post.ch",
    "author": "herzamk",
    "namespace": "vsi.process.control",
    "shortName": "vsi-process-control",
    "projectName": "vsi-process-control-stream-api",
    "npmPackage": "@ch-post/vsi-process-control-stream-api",
    "title": "VSI Process Control Stream API",
    "plugins": [
      "dotnet"
    ],
    "dotnetNamespace": "Ch.Post.PL.Api.VsiProcessControl.V1",
    "dotnetPackageId": "Ch.Post.PL.Api.VsiProcessControl",
    "mqs": "MQTT"
  },
  "_": [
    "start",
    "src",
    "dist"
  ]
}