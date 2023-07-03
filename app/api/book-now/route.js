import nodemailer from 'nodemailer'
import { NextRequest, NextResponse } from "next/server";

  export async function POST(request){
    const reqBody = await request.json()
    const {firstName,lastName,email,city,phoneNumber,factoryVisit} = reqBody
    console.log(firstName);
    
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'jewelone57@gmail.com',
          pass: oslbkrmelsuxvzod
        }
      });
      
      const mailOptions = {
        from: 'jewelone57@gmail.com',
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
        try {  
            transporter.sendMail(mailOptions, function(error, info){
                if (error) {
               console.log(error);
                } else {
                  console.log('Email sent: ' + info.response);
                  // do something useful
                }
              });
            return NextResponse.json({
                message: "Email sent successfully",
                success: true
            })
        } catch (error) {
            return NextResponse.json({error: error.message}, {status: 500})
        }
    }