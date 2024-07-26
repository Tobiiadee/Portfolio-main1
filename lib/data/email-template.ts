/** @format */

// Email template with Tailwind CSS styles inlined
const emailTemplate = (clientName: string) => `
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #f2f2f2; padding: 10px; text-align: center; }
        .content { margin: 20px 0; }
        .footer { background-color: #f2f2f2; padding: 10px; text-align: center; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h2 class="text-xl font-semibold">Thank you for your request, ${clientName}!</h2>
        </div>
        <div class="content">
            <p>We have received your request.</p>
            <p>Our team will get back to you shortly with more details.</p>
        </div>
        <div class="footer">
            <p class="text-sm text-gray-600">&copy; 2024 Your Company. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
`;
