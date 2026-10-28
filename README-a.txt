গওহরডাঙ্গা মাদ্রাসা — প্রোফাইল পিক জেনারেটর + Google Sheets
==========================================================

এই ZIP-এ আছে
- index.html: ওয়েবপেজ
- style.css: ডিজাইন
- script.js: ছবি বসানো, লাইভ প্রিভিউ, মুখ অনুযায়ী অটো-অ্যাডজাস্ট, ম্যানুয়াল জুম/সরানো এবং ডাউনলোড
- assets/profile-frame.png: আপনার দেওয়া ফ্রেম
- Code.gs: Google Sheet-এ তথ্য জমা দেওয়ার Apps Script কোড

ওয়েবসাইটে ব্যবহারকারীর কাছ থেকে শুধু এই তথ্য নেওয়া হবে:
১) নাম  ২) মাদ্রাসার নাম  ৩) ঠিকানা
ইমেইল নেওয়া হবে না। ব্যবহারকারীর ছবি Google Sheet-এ আপলোড হবে না; ছবি ব্রাউজারেই তৈরি ও ডাউনলোড হবে।

অংশ A — Google Sheet তৈরি
1. https://sheets.google.com খুলে নিজের Google অ্যাকাউন্টে লগইন করুন।
2. Blank spreadsheet তৈরি করুন। নাম দিন: গওহরডাঙ্গা মাদ্রাসা — প্রোফাইল পিক ব্যবহারকারীদের তালিকা
3. শিটের URL দেখতে এমন হবে:
   https://docs.google.com/spreadsheets/d/এখানে_লম্বা_ID/edit#gid=0
   /d/ এবং /edit-এর মাঝের অংশটি কপি করুন। এটিই Spreadsheet ID।
4. শিটের Share বোতামে ক্লিক করুন। General access অবশ্যই Restricted রাখুন। অপ্রয়োজনীয় কাউকে Viewer/Editor হিসেবে যোগ করবেন না।

অংশ B — Apps Script সেটআপ
1. https://script.google.com খুলুন এবং New project চাপুন।
2. এডিটরের Code.gs-এর আগের কোড মুছে এই ZIP-এর Code.gs ফাইলের সম্পূর্ণ কোড কপি করে পেস্ট করুন।
3. কোডের শুরুতে PASTE_YOUR_GOOGLE_SHEET_ID_HERE লেখার জায়গায় আপনার Spreadsheet ID বসান। কোটেশন চিহ্ন রেখে দিন।
4. Save করুন। প্রজেক্টের নাম দিন: Gawhar Madrasa Profile Form.
5. Deploy → New deployment চাপুন।
6. Select type (গিয়ার আইকন) → Web app নির্বাচন করুন।
7. Execute as: Me নির্বাচন করুন।
8. Who has access: Anyone নির্বাচন করুন, যদি অপশনটি আপনার অ্যাকাউন্টে থাকে। এটি দরকার কারণ ওয়েবসাইটের ভিজিটররা Google-এ লগইন না করেও ফর্ম জমা দেবে।
9. Deploy চাপুন। অনুমতি চাইলে আপনার নিজের Google অ্যাকাউন্টে রিভিউ করে অনুমতি দিন।
10. তৈরি হওয়া Web app URL কপি করুন। URL সাধারণত https://script.google.com/macros/s/.../exec দিয়ে শেষ হয়।

অংশ C — URL ওয়েবসাইটে বসানো
1. এই ZIP-এর profile-frame/script.js ফাইল VS Code-এ খুলুন।
2. এই লাইনটি খুঁজুন:
   const GOOGLE_SCRIPT_URL = "PASTE_YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE";
3. কোটেশনের ভেতরে Apps Script থেকে কপি করা সম্পূর্ণ Web app URL বসান।
4. Save করুন। তারপর profile-frame ফোল্ডারের ভেতরের ফাইলগুলোসহ ফোল্ডারটি Netlify-তে আবার deploy করুন।

অংশ D — পরীক্ষা
1. প্রকাশিত Netlify সাইট খুলুন। নাম, মাদ্রাসার নাম, ঠিকানা দিন এবং ছবি আপলোড করুন।
2. “প্রোফাইল পিক তৈরি করুন” চাপুন।
3. Google Sheet খুলে নতুন সারি যোগ হয়েছে কি না দেখুন। প্রথমবার নিজের নামে টেস্ট এন্ট্রি দিন।

গুরুত্বপূর্ণ নিরাপত্তা
- Google Sheet-এর General access Restricted রাখবেন। Sheet-এর লিংক ও Spreadsheet ID গোপন রাখুন।
- Apps Script Web app-কে Anyone অ্যাক্সেস দিতে হতে পারে, যাতে জনসাধারণের ওয়েবসাইট থেকে তথ্য জমা পড়ে। এর মানে যে কেউ স্ক্রিপ্টের URL-এ অনুরোধ পাঠানোর চেষ্টা করতে পারে; কিন্তু এতে Google Sheet নিজে পাবলিক হয়ে যায় না।
- Apps Script-এর URL-কে গোপন পাসওয়ার্ড মনে করবেন না। প্রকাশ্য ফর্মে স্প্যাম/ভুয়া তথ্য জমা পড়ার ঝুঁকি থাকে। বেশি ব্যবহার হলে CAPTCHA বা অন্য abuse protection যোগ করা উচিত।
- স্ক্রিপ্টের কোডে Spreadsheet ID বসানো না থাকলে তথ্য জমা হবে না।
- Apps Script URL পরিবর্তন করলে script.js-এ নতুন URL বসিয়ে Netlify-তে আবার deploy করতে হবে।
- Google Apps Script/Google Workspace অ্যাকাউন্টে “Anyone” অপশন নাও দেখা যেতে পারে; তখন অ্যাকাউন্টের নীতি অনুযায়ী সেটিংস বদলাতে বা অন্য Google অ্যাকাউন্ট ব্যবহার করতে হতে পারে।

Netlify-তে প্রকাশ
1. https://app.netlify.com-এ লগইন করুন।
2. Add new site / Deploy manually নির্বাচন করুন।
3. profile-frame ফোল্ডারটি আপলোড করুন (ফোল্ডারের ভেতরের ফাইলগুলোসহ)।
4. পরে কোনো পরিবর্তন করলে একইভাবে আবার deploy করুন।

লোকাল পরীক্ষা
- ZIP Extract করে index.html খুলতে পারেন বা VS Code Live Server ব্যবহার করতে পারেন।
- Google Sheet-এ তথ্য পাঠাতে Apps Script URL সেট করা এবং ইন্টারনেট সংযোগ থাকা জরুরি।
