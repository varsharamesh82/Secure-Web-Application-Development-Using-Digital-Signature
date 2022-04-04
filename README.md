# Secure-Web-Application-Development-Using-Digital-Signature

### About the project
In the present-day world, where online education is of utmost importance, many organizations offer certificates to the participants for future references. Many people, who have not achieved any of these certificates, often spoof the certificates received by other participants for academic gain. Such instances degrade the value of said certificates and the participants who worked hard to achieve these accomplishments are unable to harvest the benefits. These certificates often lose their credibility in the industry. Hence, a system has been proposed where organizations can issue certificates, whose validity can be confirmed by an automated system, wherein multiple layers of hashing and encryption help in creating a custom protection system to avoid any kind of spoofing. Usage of hashing along with encryptions makes sure no reverse-engineered attacks can be used to spoof the certificates while encryption using private keys ensure that duplicate certificates cannot be generated.  


Firstly, the system lets the users choose his choice of template of certificate. It is then his wish to choose where his text can go given the csv and its headers.   The certificate is encrypted and decrypted, it also has a digital signature. Generally, this is where the existing work in this domain ends. But this system has also created a verification link which takes user to the website where the original certificate is present.   So ,even if someone tampers with the details inside the certificate, it will not be reflected in the verification link and it will be immediately seen. 
  
### The modules used in our project:  
1. MongoDB:
  
It is the most widely used NoSQL database available with both cloud database as well as local database functionalities. For the purpose of this project, the usage of  cloud based database is done. It contains fields or name-value pairs. Collections store groups of documents and functions. They are equivalent to relational database tables. 
It is one of the numerous nonrelational database technologies which arose in the mid-2000s under the NoSQL banner for use in big data applications and other processing jobs involving data that doesn't fit well in a rigid relational model. Instead of using tables and rows as in relational databases, the MongoDB architecture is made up of collections and documents. 

2.NodeJS:

It is the most prevalent backend framework being used in the full-stack industry. It provides a very comfortable approach towards developing restful APIs. Hence the same backend can be used to develop Web, Desktop and Mobile applications. Node.js uses an event-driven, non-blocking I/O model that makes it translucent and productive and efficient. Node.js makes developing such tools highly facile with the open source subdivision and a special package manager. 
It was easier for developers to grasp on Node.js and leverage from their JavaScript skills and so they no longer needed to work in different front-end and back-end teams as they could now be combined into a single functional unit and focus more on application development than firefighting. 
 
 
3.ReactJS:

It is one of the modern JS front-end frameworks, developed and maintained by FACEBOOK. It helps create dynamic and component based interactive User Experience.  
React.JS is an open source JavaScript library which is used for building user interfaces particularly for single page applications. React JS used for handling view layer for web and mobile apps. React JS allow user to create reusable UI components. 
React Js was first created by Jordan Walke, Jordan Walke is a software engineer working for Facebook. React JS was first used in Facebook’s newsfeed in 2011 and on Instagram.com in 2012. 

### Environment setup:  
  
This system can be set up on any Windows-based operating system machine. The steps to Setup  are as follow:  
1. Download and install NodeJS LTS version from  https://nodejs.org/en/download /  
2. Clone our repository from https://github.com/varsharamesh82/Secure-Web-Application-Development-Using-Digital-Signature.git
4. Navigate to repository folder and run the following commands:  

```
npm install  
npm run server  
```

This will start the server at port 5000. The project is now working.  


### 	Methodology  
  
1. The project is being implemented with front-end and back-end running on different server ports, making all our processing happen in the backend server, securing our logic and preventing any exploitation of the system.   

2. Front-end user has to login into the website in order to use the certificate creating features, as all requests made in this process from front-end to backend will require access tokens, without which the services will not work. The token is a private key based encrypted JSON object, containing the user's unique id.  
 
3. User will upload an CSV file with the first row considered as field names, where ‘email’ as a field must be present, along with an image of the required certificate template. The user will be prompted to mark positions, where the user wants to print the details in the certificate. 
  
4. These details will then be sent to the backend where the csv will be read and details will be read from the csv file and inserted at concerned positions in the certificate.   

5. This generated certificate will then be inserted into a pdf file and an unique id will be issued to the particular certificate. This ID is stored in the database along with an encryption-hashing token, generated by a process of dual dynamic + static private key encryption and multiple layers of hashing of data taken from the csv file.  


6. The generated PDF is then digitally signed and mailed to the respective mail IDs. 

### Project Demo can be found on:

```
https://drive.google.com/file/d/1K_hyElXukYR-ocrLFz8pX1HNBUX4Fyvh/view?usp=sharing
'''
