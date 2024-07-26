/** @format */

export function ClientEmailTemplate(clientName: string) {
  return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Thank You for Your Inquiry</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #000;
            margin: 0;
            padding: 0;
          }
          .container {
            max-width: 600px;
            margin: 20px auto;
            padding: 20px;
            border: 1px solid #ddd;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            background-color: #f9f9f9;
          }
          h2 {
            color: #000;
          }
          h3 {
            margin-top: 20px;
          }
          ul {
            padding-left: 20px;
          }
          li {
            margin-bottom: 10px;
          }
          footer {
            margin-top: 20px;
            font-size: 0.8em;
            color: #666;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h2>Dear ${clientName},</h2>
          <p>Thank you for expressing interest in our services! We truly appreciate your consideration and are excited about the opportunity to work with you.</p>
          <p>Our team will review your request and get in touch with you shortly to discuss further details and how we can best meet your needs. In the meantime, if you have any additional questions or need immediate assistance, please feel free to contact us directly.</p>
          
          <h3>You can reach us through the following channels:</h3>
          <ul>
            <li><strong>Email:</strong> tobi.wdev@gmail.com</li>
            <li><strong>Phone:</strong> +234 803 468 5185</li>
            <li><strong>Website Contact Form:</strong> <a href="https://yourwebsite.com/contact">Click here</a></li>
          </ul>
          
          <p>We look forward to connecting with you and helping you achieve your goals.</p>
          
          <p>Best regards,</p>
          <p>Tobi Ade</p>
  
          <footer>&copy; 2024 @tobi.wdev. All rights reserved.</footer>
        </div>
      </body>
      </html>
    `;
}
export function ContactRequestEmailTemplate(message: string) {
  return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Thank You for Your Inquiry</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #000;
            margin: 0;
            padding: 0;
          }
          .container {
            max-width: 600px;
            margin: 20px auto;
            padding: 20px;
            border: 1px solid #ddd;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            background-color: #f9f9f9;
          }
          h2 {
            color: #000;
          }
          h3 {
            margin-top: 20px;
          }
          ul {
            padding-left: 20px;
          }
          li {
            margin-bottom: 10px;
          }
          footer {
            margin-top: 20px;
            font-size: 0.8em;
            color: #666;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h2>From Tobi Ade <tobi.wdev></h2>

          <p>Thank you once again for expressing interest in our services! We truly appreciate your consideration and are excited about the opportunity to work with you.</p>

          <p>${message}</p>
          
          <h3>You can reach us through the following channels:</h3>
          <ul>
            <li><strong>Email:</strong> tobi.wdev@gmail.com</li>
            <li><strong>Phone:</strong> +234 803 468 5185</li>
            <li><strong>Website Contact Form:</strong> <a href="https://yourwebsite.com/contact">Click here</a></li>
          </ul>
          
          <p>Best regards,</p>
          <p>Tobi Ade</p>
  
          <footer>&copy; 2024 @tobi.wdev. All rights reserved.</footer>
        </div>
      </body>
      </html>
    `;
}

export function AdminEmailTemplate(
  clientName: string,
  message: string,
  address: string
) {
  return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Thank You for Your Inquiry</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #000;
            margin: 0;
            padding: 0;
          }
          .container {
            max-width: 600px;
            margin: 20px auto;
            padding: 20px;
            border: 1px solid #ddd;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            background-color: #f9f9f9;
          }
          h2 {
            color: #000;
          }
          h3 {
            margin-top: 20px;
          }
          ul {
            padding-left: 20px;
          }
          li {
            margin-bottom: 10px;
          }
          footer {
            margin-top: 20px;
            font-size: 0.8em;
            color: #666;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h2>You've got a request from ${clientName}</h2>

          <h4>This is ${clientName}'s request:</h4>
          <p>${message}</p>

          <p>You can contact ${clientName} through: ${address}</p>
          <footer>&copy; 2024 @tobi.wdev. All rights reserved.</footer>
        </div>
      </body>
      </html>
    `;
}
export function FeedbackEmailTemplate(message: string) {
  return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Thank You for Your Inquiry</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #000;
            margin: 0;
            padding: 0;
          }
          .container {
            max-width: 600px;
            margin: 20px auto;
            padding: 20px;
            border: 1px solid #ddd;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            background-color: #f9f9f9;
          }
          h2 {
            color: #000;
          }
          h3 {
            margin-top: 20px;
          }
          ul {
            padding-left: 20px;
          }
          li {
            margin-bottom: 10px;
          }
          footer {
            margin-top: 20px;
            font-size: 0.8em;
            color: #666;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h2>You've got a new feedback!</h2>   

          <p>${message}</p>

          <footer>&copy; 2024 @tobi.wdev. All rights reserved.</footer>
        </div>
      </body>
      </html>
    `;
}
