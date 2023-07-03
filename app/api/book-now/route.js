import nodemailer from 'nodemailer'

  export async function POST(request){
    const reqBody = await request.json()
    const {firstName,lastName,email,city,phoneNumber,factoryVisit} = reqBody
    console.log(firstName);
    
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        requireTLS:true,
        auth: {
          user: process.env.NEXT_PUBLIC_SMTP_USER,
          pass: process.env.NEXT_PUBLIC_SMTP_PASSWORD
        }
      });
      await new Promise((resolve, reject) => {
        // verify connection configuration
        transporter.verify(function (error, success) {
            if (error) {
                console.log(error);
                reject(error);
            } else {
                console.log("Server is ready to take our messages");
                resolve(success);
            }
        });
    });
      const mailOptions = {
        from: process.env.NEXT_PUBLIC_SMTP_USER,
        to: 'ravikiran@superclusterpi.com',
        subject: 'New Slot Booking Lead - Jewelone',
        html: `<p>You have a form submission</p><br>
        <p><strong>First Name: </strong> ${firstName}</p><br>
        <p><strong>Last Name: </strong> ${lastName}</p><br>
        <p><strong>Email: </strong> ${email}</p><br>
        <p><strong>City: </strong> ${city}</p><br>
        <p><strong>Phone No: </strong> ${phoneNumber}</p><br>
        <p><strong>Factory Visit: </strong> ${factoryVisit}</p><br>`
      };
          await new Promise((resolve, reject) => {
          transporter.sendMail(mailOptions, function(error, info){
                if (error) {
               console.log(error);
                } else {
                  console.log('Email sent: ' + info.response);
                }
              });
        });
        res.status(200).json({ status: "OK" });
};
  