const dotenv=require('dotenv');

dotenv.config();

// console.log(process.env.PORT);

module.exports={

    PORT: process.env.PORT,
    EMAIL_ID:process.env.EMAIL_ID,
    EMAIL_PASSWORD:process.env.EMAIL_PASS,
}