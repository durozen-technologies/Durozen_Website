// Configuration
const SHEET_NAME = "Sheet1";
const EMAIL_FROM = "info@durozen.in"; // Update this
const ADMIN_EMAIL = "info@durozen.in"; // Update this

// Spreadsheet ID - Get this from your sheet URL
const SPREADSHEET_ID = "1Y_I_Lr58z8hMY4NgQf0-FR9vgXG65x7hHvtdgp_2CeY";

/**
 * Initialize the sheet with headers on first run
 * Run this once to set up the table structure
 */
function initializeSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  
  // Create sheet if it doesn't exist
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
  }
  
  // Add headers
  const headers = ["Timestamp", "Name", "Phone", "Email", "Industry", "Service Interest", "Goals", "Status"];
  
  // Clear existing content and add headers
  sheet.clearContents();
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  
  // Format header row
  const headerRange = sheet.getRange(1, 1, 1, headers.length);
  headerRange.setBackground("#1f2937");
  headerRange.setFontColor("#ffffff");
  headerRange.setFontWeight("bold");
  headerRange.setFontSize(11);
  
  // Set column widths
  sheet.setColumnWidth(1, 150); // Timestamp
  sheet.setColumnWidth(2, 150); // Name
  sheet.setColumnWidth(3, 130); // Phone
  sheet.setColumnWidth(4, 200); // Email
  sheet.setColumnWidth(5, 150); // Industry
  sheet.setColumnWidth(6, 180); // Service Interest
  sheet.setColumnWidth(7, 300); // Goals
  sheet.setColumnWidth(8, 100); // Status
  
  // Freeze header row
  sheet.setFrozenRows(1);
  
  Logger.log("Sheet initialized successfully!");
}

/**
 * Handle POST request from form
 */
function doPost(e) {
  try {
    const params = e.parameter;
    
    // Validate required fields
    if (!params.name || !params.email) {
      return ContentService
        .createTextOutput(JSON.stringify({ success: false, message: "Name and Email are required" }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    // Get or create sheet
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = ss.getSheetByName(SHEET_NAME);
    
    if (!sheet) {
      initializeSheet();
      sheet = ss.getSheetByName(SHEET_NAME);
    }
    
    // Prepare data row
    const timestamp = new Date();
    const dataRow = [
      timestamp.toLocaleString(),
      params.name || "",
      params.phone || "",
      params.email || "",
      params.industry || "",
      params.serviceInterest || "",
      params.goals || "",
      "New"
    ];
    
    // Add data to sheet
    sheet.appendRow(dataRow);
    
    // Send confirmation email to customer
    sendCustomerEmail(params.name, params.email);
    
    // Send notification to admin
    sendAdminEmail(params.name, params.email, params.phone, params.industry, params.serviceInterest);
    
    return ContentService
      .createTextOutput(JSON.stringify({ 
        success: true, 
        message: "Thank you! We received your submission and will contact you soon." 
      }))
      .setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    Logger.log("Error: " + error.toString());
    return ContentService
      .createTextOutput(JSON.stringify({ 
        success: false, 
        message: "An error occurred: " + error.toString() 
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Send confirmation email to customer
 */
function sendCustomerEmail(name, email) {
  const subject = "✅ We Received Your Request - We'll Contact You Soon!";
  const htmlBody = `
    <html>
      <body style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #333; line-height: 1.6;">
        <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; border-radius: 10px; text-align: center; margin-bottom: 30px;">
            <h1 style="margin: 0; font-size: 28px;">🎉 Request Received!</h1>
            <p style="margin: 10px 0 0 0; font-size: 14px; opacity: 0.9;">Thank you for choosing Durozen</p>
          </div>
          
          <h2 style="color: #1f2937; margin-top: 0;">Hello ${name},</h2>
          
          <p style="font-size: 16px; color: #555;">
            Thank you for submitting your inquiry! We're excited about the opportunity to work with you.
          </p>
          
          <div style="background-color: #e8f5e9; border-left: 4px solid #4caf50; padding: 20px; margin: 25px 0; border-radius: 5px;">
            <h3 style="color: #2e7d32; margin-top: 0;">✉️ What Happens Next?</h3>
            <p style="margin: 10px 0; color: #555;"><strong>We will contact you soon!</strong></p>
            <ul style="margin: 15px 0; padding-left: 20px;">
              <li style="margin: 8px 0; color: #555;">Our team will review your submission within <strong>24 hours</strong></li>
              <li style="margin: 8px 0; color: #555;">We'll reach out via phone or email to discuss your needs</li>
              <li style="margin: 8px 0; color: #555;">We'll schedule a personalized strategy call at your convenience</li>
              <li style="margin: 8px 0; color: #555;">Together, we'll create a custom solution for your business</li>
            </ul>
          </div>
          
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px; margin: 25px 0;">
            <h3 style="color: #1f2937; margin-top: 0;">📞 Need Help Before We Contact You?</h3>
            <p style="margin: 10px 0; color: #555;">Feel free to reach out anytime:</p>
            <ul style="margin: 15px 0; padding-left: 0; list-style: none;">
              <li style="margin: 10px 0; color: #555;">📧 <a href="mailto:hello@durozen.com" style="color: #667eea; text-decoration: none;">hello@durozen.com</a></li>
              <li style="margin: 10px 0; color: #555;">📞 <a href="tel:+15553876936" style="color: #667eea; text-decoration: none;">+1 (555) DUROZEN</a></li>
            </ul>
          </div>
          
          <p style="color: #999; font-size: 14px; margin-top: 30px; text-align: center;">
            We appreciate your business and look forward to helping you grow! 🚀
          </p>
          
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
            <p style="color: #1f2937; margin: 5px 0; font-weight: bold;">Durozen Team</p>
            <p style="color: #999; font-size: 12px; margin: 5px 0;">Growing Your Business, One Solution at a Time</p>
          </div>
        </div>
      </body>
    </html>
  `;
  
  try {
    GmailApp.sendEmail(email, subject, "", { 
      htmlBody: htmlBody
    });
    Logger.log("Customer email sent to: " + email);
  } catch (error) {
    Logger.log("Error sending customer email: " + error.toString());
  }
}

/**
 * Send notification email to admin
 */
function sendAdminEmail(name, email, phone, industry, serviceInterest) {
  const subject = `🚨 ALERT: New Lead Submission - ${name} (${serviceInterest})`;
  const submissionTime = new Date().toLocaleString();
  const htmlBody = `
    <html>
      <body style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #333;">
        <div style="max-width: 700px; margin: 0 auto; padding: 20px;">
          <!-- Alert Banner -->
          <div style="background: linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%); color: white; padding: 25px; border-radius: 10px; text-align: center; margin-bottom: 25px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            <h1 style="margin: 0; font-size: 32px;">🚨 NEW LEAD ALERT!</h1>
            <p style="margin: 10px 0 0 0; font-size: 16px; opacity: 0.95;">A new client has submitted a service inquiry</p>
          </div>
          
          <!-- Lead Information -->
          <div style="background-color: #f8f9fa; padding: 25px; border-radius: 8px; border: 2px solid #e5e7eb; margin-bottom: 25px;">
            <h2 style="color: #1f2937; margin-top: 0; border-bottom: 2px solid #667eea; padding-bottom: 10px;">📋 Lead Details</h2>
            
            <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
              <tr>
                <td style="padding: 12px 15px; background-color: #fff; font-weight: bold; border: 1px solid #e5e7eb; width: 35%; color: #1f2937;">👤 Name:</td>
                <td style="padding: 12px 15px; background-color: #fff; border: 1px solid #e5e7eb; color: #333; font-size: 16px; font-weight: 500;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 12px 15px; background-color: #f3f4f6; font-weight: bold; border: 1px solid #e5e7eb; color: #1f2937;">📧 Email:</td>
                <td style="padding: 12px 15px; background-color: #f3f4f6; border: 1px solid #e5e7eb;"><a href="mailto:${email}" style="color: #667eea; text-decoration: none; font-weight: 500;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 12px 15px; background-color: #fff; font-weight: bold; border: 1px solid #e5e7eb; color: #1f2937;">📞 Phone:</td>
                <td style="padding: 12px 15px; background-color: #fff; border: 1px solid #e5e7eb;"><a href="tel:${phone}" style="color: #667eea; text-decoration: none; font-weight: 500;">${phone || 'Not provided'}</a></td>
              </tr>
              <tr>
                <td style="padding: 12px 15px; background-color: #f3f4f6; font-weight: bold; border: 1px solid #e5e7eb; color: #1f2937;">🏭 Industry:</td>
                <td style="padding: 12px 15px; background-color: #f3f4f6; border: 1px solid #e5e7eb; color: #333; font-weight: 500;">${industry || 'Not specified'}</td>
              </tr>
              <tr>
                <td style="padding: 12px 15px; background-color: #fff; font-weight: bold; border: 1px solid #e5e7eb; color: #1f2937;">💼 Service Interest:</td>
                <td style="padding: 12px 15px; background-color: #fff; border: 1px solid #e5e7eb; color: #333; font-weight: 500;">${serviceInterest || 'Not specified'}</td>
              </tr>
              <tr>
                <td style="padding: 12px 15px; background-color: #f3f4f6; font-weight: bold; border: 1px solid #e5e7eb; color: #1f2937;">⏰ Submission Time:</td>
                <td style="padding: 12px 15px; background-color: #f3f4f6; border: 1px solid #e5e7eb; color: #333;">${submissionTime}</td>
              </tr>
            </table>
          </div>
          
          <!-- Action Required -->
          <div style="background-color: #fff3cd; border: 2px solid #ffc107; border-radius: 8px; padding: 20px; margin-bottom: 25px;">
            <h3 style="color: #856404; margin-top: 0; display: flex; align-items: center;">
              <span style="font-size: 24px; margin-right: 10px;">⚡</span> IMMEDIATE ACTION REQUIRED
            </h3>
            <ul style="margin: 15px 0; padding-left: 20px; color: #856404;">
              <li style="margin: 8px 0;"><strong>Contact within 2 hours</strong> - Follow up immediately to capture momentum</li>
              <li style="margin: 8px 0;"><strong>Verify contact information</strong> - Call or email to confirm details</li>
              <li style="margin: 8px 0;"><strong>Schedule strategy call</strong> - Aim for within 24 hours</li>
              <li style="margin: 8px 0;"><strong>Update CRM/Sheet</strong> - Mark as contacted in tracking system</li>
            </ul>
          </div>
          
          <!-- Quick Actions -->
          <div style="display: flex; gap: 15px; margin-bottom: 25px; flex-wrap: wrap;">
            <a href="mailto:${email}?subject=Follow-up%20from%20Durozen" style="background-color: #667eea; color: white; padding: 12px 20px; text-decoration: none; border-radius: 5px; font-weight: bold; display: inline-block;">📧 Send Email</a>
            <a href="tel:${phone}" style="background-color: #4caf50; color: white; padding: 12px 20px; text-decoration: none; border-radius: 5px; font-weight: bold; display: inline-block;">📞 Call Now</a>
          </div>
          
          <!-- Status Indicator -->
          <div style="background-color: #e3f2fd; border-left: 4px solid #2196f3; padding: 15px; border-radius: 5px; margin-bottom: 25px;">
            <p style="margin: 0; color: #1565c0;"><strong>Status:</strong> 🟡 NEW - Awaiting Response</p>
            <p style="margin: 10px 0 0 0; font-size: 14px; color: #1976d2;">This lead has been automatically added to your tracking sheet</p>
          </div>
          
          <div style="text-align: center; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #999; font-size: 12px;">
            <p>This is an automated alert from Durozen Contact System</p>
            <p>Please ensure quick follow-up to maximize conversion rates</p>
          </div>
        </div>
      </body>
    </html>
  `;
  
  try {
    GmailApp.sendEmail(ADMIN_EMAIL, subject, "", { 
      htmlBody: htmlBody
    });
    Logger.log("Admin alert sent to: " + ADMIN_EMAIL);
  } catch (error) {
    Logger.log("Error sending admin email: " + error.toString());
  }
}

/**
 * Test the script (optional)
 */
function testSubmission() {
  const testData = {
    parameter: {
      name: "Test User",
      phone: "+1 234 567 890",
      email: "test@example.com",
      industry: "Manufacturing",
      serviceInterest: "Digital Marketing",
      goals: "Test submission"
    }
  };
  
  doPost(testData);
}