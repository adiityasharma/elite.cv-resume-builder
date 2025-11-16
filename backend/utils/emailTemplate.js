
export const emailTemplate = ({ name, code, expireIn, companyName }) => {
  return `
    <html>
      <body style="font-family: Arial, sans-serif; background-color: #f5f5f5; padding: 20px;">
        <div style="max-width: 480px; margin: auto; background: #ffffff; padding: 20px; border-radius: 8px; 
              box-shadow: 0 2px 6px rgba(0,0,0,0.1);">

          <h2 style="color: #333;">Your Verification Code</h2>

          <p>Hi ${name},</p>
          <p>Use the verification code below to continue:</p>

          <div style="font-size: 28px; font-weight: bold; text-align: center; 
                letter-spacing: 4px; margin: 20px 0; padding: 15px; 
                background: #f0f0f0; border-radius: 6px;">
            ${code}
          </div>

          <p>This code will expire in <strong>${expireIn}</strong> minutes.</p>

          <p>If you didn’t request this, you can ignore this email.</p>

          <p style="margin-top: 30px;">Thanks,<br>${companyName}</p>
        </div>
      </body>
    </html>
  `
}



