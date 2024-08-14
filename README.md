<br/>
<div align="center">
<a href="#">
<img src="https://raw.githubusercontent.com/the-sudipta/tele-care-central/main/DOCUMENTATIONS/images/Tele%20Care%20Central%20Logo.png" alt="Logo" width="400" height="100">
</a>
<h3 align="center">Tele Care Central</h3>





<p align="center">
  <a href="#toolbox-getting-started">Getting Started</a> 
  <a href="#pushpin-api-endpoints">API Endpoints</a>
  <a href="#wave-contributing">Contribute</a>
  <a href="#warning-license">License</a>
  <a href="#handshake-contact">Contact</a>
  <a href="#gem-acknowledgement">Acknowledgement</a>
</p>


<p align="center">
A tele-medicine site backennd
<br/>
<p align="center">
  <a href="https://github.com/the-sudipta/tele-care-central/raw/main/DOCUMENTATIONS/Project_Manual_tele-care-central.pdf" download>📱 Explore the docs »</a>
</p>
</div>
<div align="left">

## :star2: About The Project

   ![Product Video Gif](https://github.com/the-sudipta/tele-care-central/blob/main/DOCUMENTATIONS/images/Tele%20Care%20Central%20Backend%20Demo.gif?raw=true)

<p style="text-align: justify;">
The Hospital Management System project is designed to facilitate seamless healthcare operations online by 
enabling users to manage essential tasks such as user registration, profile management, appointment 
scheduling, and medical records handling. This project enhances the efficiency, accessibility, and 
security of hospital services by incorporating features like secure login, OTP authentication, and 
comprehensive medical lab record management. It also addresses critical aspects such as payment processing, 
feedback collection, and user profile updates, ensuring a user-friendly and secure environment for managing 
hospital services in the digital age.
</p>

   
   
   ### :hammer: Tech Stack / Built With
   
   <div align="left">
      <details> 
        <summary>Backend Framework</summary> 
        <ul>
          <li><a href="https://nestjs.com/">NestJS</a></li>
        </ul> 
      </details>
      <details> 
        <summary>Database</summary> 
        <ul>
          <li><a href="https://typeorm.io/">TypeORM</a></li>
          <li><a href="https://node-postgres.com/">pg (PostgreSQL)</a></li>
        </ul> 
      </details>
      <details> 
        <summary>Authentication & Security</summary> 
        <ul>
          <li><a href="https://www.npmjs.com/package/bcrypt">bcrypt</a></li>
          <li><a href="https://docs.nestjs.com/security/authentication">JWT (JSON Web Token) - @nestjs/jwt</a></li>
        </ul> 
      </details>
      <details> 
        <summary>Validation & Transformation</summary> 
        <ul>
          <li><a href="https://github.com/typestack/class-validator">class-validator</a></li>
          <li><a href="https://github.com/typestack/class-transformer">class-transformer</a></li>
        </ul> 
      </details>
      <details> 
        <summary>Testing</summary> 
        <ul>
          <li><a href="https://jestjs.io/">Jest</a></li>
          <li><a href="https://github.com/visionmedia/supertest">Supertest</a></li>
          <li><a href="https://kulshekhar.github.io/ts-jest/">ts-jest</a></li>
          <li><a href="https://docs.nestjs.com/fundamentals/testing">NestJS Testing - @nestjs/testing</a></li>
        </ul> 
      </details>
      <details> 
        <summary>Email & Session Management</summary> 
        <ul>
          <li><a href="https://nodemailer.com/about/">Nodemailer</a></li>
          <li><a href="https://www.npmjs.com/package/express-session">express-session</a></li>
          <li><a href="https://nestjs-modules.github.io/mailer/docs/">NestJS Mailer Module - @nestjs-modules/mailer</a></li>
        </ul> 
      </details>
      <details> 
        <summary>Utility Libraries</summary> 
        <ul>
          <li><a href="https://www.npmjs.com/package/cors">CORS</a></li>
          <li><a href="https://www.npmjs.com/package/reflect-metadata">reflect-metadata</a></li>
        </ul> 
      </details>
      <details> 
        <summary>Development Tools</summary> 
        <ul>
          <li><a href="https://prettier.io/">Prettier</a></li>
          <li><a href="https://eslint.org/">ESLint</a></li>
          <li><a href="https://www.typescriptlang.org/">TypeScript</a></li>
          <li><a href="https://www.npmjs.com/package/ts-node">ts-node</a></li>
          <li><a href="https://github.com/TypeStrong/ts-loader">ts-loader</a></li>
          <li><a href="https://www.npmjs.com/package/tsconfig-paths">tsconfig-paths</a></li>
        </ul> 
      </details>
      <details> 
        <summary>Miscellaneous</summary> 
        <ul>
          <li><a href="https://rxjs.dev/">RxJS</a></li>
          <li><a href="https://www.npmjs.com/package/source-map-support">source-map-support</a></li>
        </ul> 
      </details>
   </div>
   
   ### :dart: Features
</div>
   <div align="center">
     <table>
  <tr>
    <th colspan="2">Patient Features</th>
  </tr>
  <tr>
    <td>Signup</td>
    <td>View own profile</td>
  </tr>
  <tr>
    <td>Edit own details</td>
    <td>Book Appointment</td>
  </tr>
  <tr>
    <td>View Upcoming Appointment</td>
    <td>Update Appointment Details</td>
  </tr>
  <tr>
    <td>View Medical Lab Record List</td>
    <td>Update single medical lab report</td>
  </tr>
  <tr>
    <td>Upload profile picture</td>
    <td>Create Billing or Payment</td>
  </tr>
  <tr>
    <td>Create Feedback</td>
    <td>Auto Generated OTP</td>
  </tr>
  <tr>
    <td>Send OTP through Email</td>
    <td>Login</td>
  </tr>
  <tr>
    <td>Forget Password</td>
    <td>Create new password</td>
  </tr>
  <tr>
    <td align="center" colspan="2">Logout</td>
  </tr>
</table>
   </div>


<div align="left">
   
   ### :key: Environment Variables
   To run this project, you will need to add the following environment variables to your database connection file
   
   ### Database Variables
    
   ```yaml
   PGDATABASE: "railway"
   PGHOST: "roundhouse.proxy.rlwy.net"
   PGPASSWORD: "gCBtpUkGGYfFPQsEVZicTKtLziAbSkjZ"
   PGPORT: 52395
   PGUSER: "postgres"
   ```
   
   ## :toolbox: Getting Started
   
   ### :bangbang: Prerequisites
   
   <div align="left">
      <ul>
        <li><a href="https://nodejs.org/en/download/">Node.js</a></li>
        <li><a href="https://nodejs.org/en/download/">npm (Node Package Manager)</a>
          <ul>
            <li><code>npm install</code></li>
          </ul>
        </li>
        <li><a href="https://docs.nestjs.com/cli/overview">NestJS CLI</a>
          <ul>
            <li><code>npm install -g @nestjs/cli</code></li>
          </ul>
        </li>
        <li><a href="https://www.postgresql.org/download/">PostgreSQL Database</a></li>
        <li><a href="https://www.typescriptlang.org/download">TypeScript</a></li>
        <li><a href="https://eslint.org/docs/user-guide/getting-started">ESLint</a></li>
        <li><a href="https://prettier.io/docs/en/install.html">Prettier</a></li>
        <li><a href="https://nodemailer.com/about/">Mail Server (Optional)</a></li>
      </ul>
   </div>
   
   ### :running: Run Locally
   ```bash
   # development
   $ npm run start
   
   # watch mode
   $ npm run start:dev
   
   # production mode
   $ npm run start:prod
   ```
   
   #### Download the project
   
   ```bash
   https://github.com/the-sudipta/tele-care-central.git
   ```
   
   #### Clone the Repository
   ```bash
   git clone https://github.com/the-sudipta/tele-care-central.git
   ```
   
   ## :pushpin: API Endpoints
   <h3 id="get-auth-detail">GET /authenticate</h3>
   
   **RESPONSE Example in Documentations**
   ```json
   {
      "id":-1,
      "name": "test6",
      "age": 24,
      "address": "test6 addrs",
      "phone": "01911234580",
      "gender": "male",
      "image": "12123213.jpg",
      "user_id": 12
}
   ```
   
   <h3 id="post-auth-detail">POST /authenticate</h3>
   
   **REQUEST Example in Documentations**
   ```json
   {
     "email": "test6@gmail.com",
     "password": "0testPass@"
   }
   ```
   
   **RESPONSE Example in Documentations**
   ```json
   {
     "token": "OwoMRHsaQwyAgVoc3OXmL1JhMVUYXGGBbCTK0GBgiYitwQwjf0gVoBmkbuyy0pSi"
   }
   ```
   
   
   ## :wave: Contributing
   
   <a href="https://github.com/the-sudipta/tele-care-central/graphs/contributors"> <img src="https://contrib.rocks/image?repo=Louis3797/awesome-readme-template" /> </a>
   
   Contributions are always welcome!
   
   ### :sparkles: Authors
   - [@the-sudipta](https://www.github.com/the-sudipta)
   
   ## :busts_in_silhouette: Used By
   
   This project is used by the following individuals:
   
   - Anonnya Barua
   
   
   ## :warning: License
   
   This project is licensed under the Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International Public License - see the [LICENSE](LICENSE) file for details.
   
   ## :handshake: Contact
   
   Sudipta Kumar Das - - engineer.sudipta.kumar.das@gmail.com
   
   Project Link: [https://github.com/the-sudipta/tele-care-central](https://github.com/the-sudipta/tele-care-central)
   
   ## :gem: Acknowledgement
   - [PostgreSQL Database](https://www.postgresql.org/download/)
   - [Mail Server](https://nodemailer.com/about/)
</div>