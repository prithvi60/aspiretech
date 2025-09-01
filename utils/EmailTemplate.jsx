export function generateEmailTemplateForUser(mainContent, title) {
    const imageURL = "https://ik.imagekit.io/a7ag28udt/aspire-logo";
    return `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; background-color: #f9f9f9; padding: 20px; border-radius: 8px; max-width: 600px; margin: 0 auto; border: 1px solid #ddd;">
          <div style="text-align: center; margin-bottom: 20px;">
                 <img src="${imageURL}" alt="Aspire Tech Academy Logo" style="width: 150px; height: auto;">
              </div>
          ${mainContent}
           <p style="font-size: 16px; color: #555;">Greetings from Aspire Tech Academy Team!</p>
           <br/>
            <p style="font-size: 16px; color: #555;">
                Thank you for choosing Aspire Tech Academy! We're thrilled to confirm we've received your submission and are excited to collaborate with you to bring your vision to life.
            </p>
           
            <p style="font-size: 16px;">
                Aspire Tech Academy,<br>
                <a href="mailto:connect@aspiretechacademy.com" style="text-decoration: none;">connect@aspiretechacademy.com</a>
            </p>
            <div style="text-align: center; margin-top: 20px; font-size: 14px;">
                <p style="margin: 0;">
                    © ${new Date().getFullYear()} 
                    <span style="margin-left: 1.5px; margin-right: 1.5px;">
                        <a style="text-decoration: none;" href="https://www.aspiretechacademy.com/">Aspire Tech Academy</a>
                    </span>
                    . All rights reserved.
                </p>
            </div>
        </div>
          `;
}

export function generateEmailTemplateForClient(mainContent) {
    const imageURL = "https://ik.imagekit.io/a7ag28udt/aspire-logo";
    return `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; background-color: #f9f9f9; padding: 20px; border-radius: 8px; max-width: 600px; margin: 0 auto; border: 1px solid #ddd;">
              <p style="font-size: 16px; color: #555;">Hi,</p>
              <p style="font-size: 16px; color: #555;">You have a new message from the Aspire Tech Academy website:</p>
              <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
              ${mainContent}
              <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
              <p style="font-size: 16px;">
                Aspire Tech Academy,<br>
                <a href="connect@aspiretechacademy.com" style="text-decoration: none;">connect@aspiretechacademy.com</a>
            </p>
              <div style="margin-bottom: 10px;">
                 <img src="${imageURL}" alt="Aspire Tech Academy Logo" style="width: 120px; height: auto;">
              </div>
          </div>
            `;
}
