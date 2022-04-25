# Image Processing API
## Overview
This is an API that can be used in two different ways. The first allows you to place images into your frontend with the size set via URL parameters for rapid prototyping. The second use case is as a library to serve properly scaled versions of your images to the front end to reduce page load size.

This API uses sharp for the image processing.

## Dependencies
- Node.js
- Express.js
- Sharp
- TypeScript (and type definitions)

## Building and running
This project is written in TypeScript, to start, it can be compiled from the ```src``` folder by running ```npm run build```.  
Next, using Node.js, run ```node build/index.js``` to start the server.  
  
## Instructions
The server starts on ```localhost:3000```. The output size is read from the URL using the ```/api``` endpoint. With the input *filename*, desired *width* and *height* entered as queries, separated by amperands.

**Note**:  The input images are read from ```/images/full```. The API outputs the resized images to ```/images/resized```  
To input an image, it must be placed in ```/images/full```

### Example

```
https://localhost:3000/api?filename=santamonica.jpg&width=100&height=100
```
The URL above outputs the file ```100x100santamonica.jpg``` to ```/images/resized```

## Additional scripts
- ```npm run jasmine``` runs the unit tests using Jasmine located in ```/build/tests/```
- ```npm run test``` compiles the app and immediately runs the unit tests.
- ```npm run prettier``` formats the code by running Prettier, and ```npm run lint``` runs ESLint. 

## Resources
- Express.js documentation
- Node.js documentation
- Sharp documentation