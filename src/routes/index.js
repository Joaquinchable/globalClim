const {Router} = require('express');
const nodemailer = require('nodemailer');
const router = Router();


router.post('/send-email', async(req,res) =>{

const {name,email,phone,message} = req.body;

contentHTML = `


<h1>User Information</h1>
<ul>
<li> ${name} </li>
<li> ${email} </li>
<li> ${phone} </li>

</ul>

<p> ${message} </p>
`
const transporter = nodemailer.createTransport({
host: "",

port:"",
secure:false,
auth:{

    user: "",
    pass: ""
}



})


const info = await transporter.sendMail({

from: "Mi pagina web",
to:"joaquincharo.developer@gmail.com",
subject: "website contact form",
text:"hellow world"


});


 console.log("message sent", info.message);

 res.redirect('/success.html');

 

})




module.exports = router;