 # E-Commerce

## Colors: 
using to customise the appearance output of console.

## ES-Module:
 ECMAScript Modue, It has many benefit over CommonJS Module, 

        1. Modern js tools are increasingly optimise for es module. these are part of ecmascript standards.

        2.It enables tree shaking, it is a technique used in modern js build tools to remove unused code form your final bundle. It uses Webpack and RollUp for this. It happens by static analysis

        3. Improve Readability

## dotenv: 
to seprete environment variables, and refrain them from uploading in github  using .gitignore file, to maintain privacy and data security.

## morgan: 
Morgan is a popular HTTP request logger middleware for Node.js. It simplifies the process of logging HTTP requests in a Node.js application by automatically generating logs for incoming requests.


## bcrypt: 
library that Use to hash the passwords


## jwt: 
json_web_token,  is an open standard that defines a compact and self-contained way for securely transmitting information between parties as a JSON object.

### Uses of JWT
        
        Authorization: This is the most common scenario for using JWT. Once the user is logged in, each subsequent request will include the JWT, allowing the user to access routes, services, and resources that are permitted with that token.

        Information Exchange: JSON Web Tokens are a good way of securely transmitting information between parties. Because JWTs can be signed—for example, using public/private key pairs—you can be sure the senders are who they say they are. Additionally, as the signature is calculated using the header and the payload, you can also verify that the content hasn't been tampered with

In its compact form, JSON Web Tokens consist of three parts separated by dots (.), which are:

Header
Payload
Signature
Therefore, a JWT typically looks like the following.

        xxxxx.yyyyy.zzzzz


### How JWT Works

In authentication, when the user successfully logs in using their credentials, a JSON Web Token will be returned. Since tokens are credentials, great care must be taken to prevent security issues. In general, you should not keep tokens longer than required.
Whenever the user wants to access a protected route or resource, the user agent should send the JWT, typically in the Authorization header using the Bearer schema.