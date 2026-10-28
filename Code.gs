/**
 * গওহরডাঙ্গা মাদ্রাসা প্রোফাইল পিক — Google Apps Script
 * 1) SPREADSHEET_ID-তে আপনার Google Sheet ID বসান।
 * 2) শিটের প্রথম ট্যাবের নাম Sheet1 না হলে SHEET_NAME বদলান।
 */
const SPREADSHEET_ID = 'PASTE_YOUR_GOOGLE_SHEET_ID_HERE';
const SHEET_NAME = 'Sheet1';

function doPost(e) {
  try {
    const p = (e && e.parameter) ? e.parameter : {};
    // Honeypot field: automated bots that fill it are silently ignored.
    if (p.website) return output_({ ok: true });

    const name = clean_(p.personName, 80);
    const madrasa = clean_(p.institutionName, 120);
    const address = clean_(p.address, 180);
    const submittedAt = clean_(p.submittedAt, 60) || Utilities.formatDate(new Date(), 'Asia/Dhaka', 'yyyy-MM-dd HH:mm:ss');

    if (!name || !madrasa || !address) {
      return output_({ ok: false, error: 'missing_fields' });
    }
    if (SPREADSHEET_ID === 'PASTE_YOUR_GOOGLE_SHEET_ID_HERE') {
      return output_({ ok: false, error: 'configure_spreadsheet_id' });
    }

    const lock = LockService.getScriptLock();
    lock.waitLock(10000);
    try {
      const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
      let sheet = ss.getSheetByName(SHEET_NAME);
      if (!sheet) sheet = ss.insertSheet(SHEET_NAME);
      if (sheet.getLastRow() === 0) {
        sheet.appendRow(['ক্রমিক', 'ব্যবহারকারীর নাম', 'মাদ্রাসার নাম', 'ঠিকানা', 'জমা দেওয়ার সময়']);
        sheet.setFrozenRows(1);
      }
      sheet.appendRow([sheet.getLastRow(), name, madrasa, address, submittedAt]);
    } finally {
      lock.releaseLock();
    }
    return output_({ ok: true });
  } catch (err) {
    console.error(err);
    return output_({ ok: false, error: 'server_error' });
  }
}

function doGet() {
  return output_({ service: 'Gawhar Madrasa profile form', status: 'ready' });
}

function clean_(value, maxLength) {
  return String(value || '').replace(/[<>]/g, '').replace(/[\r\n\t]+/g, ' ').trim().slice(0, maxLength);
}

function output_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
