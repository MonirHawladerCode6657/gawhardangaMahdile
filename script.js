 (() => {
      const ua = navigator.userAgent || "";
      // Detect Facebook's in-app browser. Regular Chrome/Firefox/Safari visitors won't see this.
      const fromFacebookApp = /FBAN|FBAV|FB_IAB|FB4A|FBIOS|IMO/i.test(ua);
      const gate = document.getElementById("facebookGate");
      if (!fromFacebookApp || !gate) return;

      gate.hidden = false;
      document.body.classList.add("facebook-gate-open");

      document.getElementById("copyPageLink").addEventListener("click", async () => {
        const status = document.getElementById("copyLinkStatus");
        const pageUrl = window.location.href;
        try {
          if (navigator.clipboard && window.isSecureContext) {
            await navigator.clipboard.writeText(pageUrl);
          } else {
            const helper = document.createElement("textarea");
            helper.value = pageUrl;
            helper.setAttribute("readonly", "");
            helper.style.position = "fixed";
            helper.style.opacity = "0";
            document.body.appendChild(helper);
            helper.select();
            const copied = document.execCommand("copy");
            helper.remove();
            if (!copied) throw new Error("Copy failed");
          }
          status.textContent = "লিংক কপি হয়েছে। এখন Chrome খুলে লিংকটি পেস্ট করুন।";
        } catch (err) {
          status.textContent = "স্বয়ংক্রিয়ভাবে কপি হয়নি। নিচের লিংকটি চেপে ধরে কপি করুন:";
          let manual = document.getElementById("manualPageLink");
          if (!manual) {
            manual = document.createElement("textarea");
            manual.id = "manualPageLink";
            manual.readOnly = true;
            manual.value = pageUrl;
            manual.rows = 3;
            manual.style.cssText = "width:100%;margin-top:8px;padding:10px;border:1px solid #cbd8d3;border-radius:8px;";
            status.insertAdjacentElement("afterend", manual);
          }
        }
      });

      document.getElementById("continueHere").addEventListener("click", () => {
        gate.hidden = true;
        document.body.classList.remove("facebook-gate-open");
      });
    })();
 

const photochoose = document.getElementById("photochoose");
const choosFreemName = document.querySelector('.choosFreemNamw');
const imgadd_1 = document.getElementById('imgadd_1');
const body =document.getElementById('body');

photochoose.addEventListener('click', (e) => {
    e.stopPropagation();

    choosFreemName.style.display = 'flex';
});

// মেনুর ভেতরে ক্লিক করলে বন্ধ হবে না
choosFreemName.addEventListener('click', (e) => {
    e.stopPropagation();
});

// বাইরে ক্লিক করলে বন্ধ হবে
document.addEventListener('click', () => {
    choosFreemName.style.display = 'none';
});










const imgaddAll =document.querySelectorAll('img.imgaddAll');

 imgadd_1.addEventListener('click',()=>{
// আগে ছবি এডড করতে হবে তার পরে কাটবে 
frameImage.src = "./assets/profile-frame-1.png";
 });









imgaddAll.forEach((btn)=>{
  btn.addEventListener('click',()=>{
switch (btn.id) {
  case'imgadd_2': 
  frameImage.src = "./assets/profile-frame-2.png";
  console.log('monir hawladar');
    break;

  case'imgadd_3': 
  frameImage.src = "./assets/profile-frame-3.png";
    break;

  case'imgadd_4': 
  frameImage.src = "./assets/profile-frame-4.png";
    break;

  case'imgadd_5': 
  frameImage.src = "./assets/profile-frame-5.png";
    break;

  case'imgadd_6': 
  frameImage.src = "./assets/profile-frame-6.png";
    break;

  case'imgadd_7': 
  frameImage.src = "./assets/profile-frame-7.png";
    break;

  case'imgadd_8': 
  frameImage.src = "./assets/profile-frame-8.png";
    break;

  case'imgadd_9': 
  frameImage.src = "./assets/profile-frame-9.png";
    break;

  case'imgadd_10': 
  frameImage.src = "./assets/profile-frame-10.png";
    break;

  case'imgadd_11': 
  frameImage.src = "./assets/profile-frame-11.png";
    break;

  case'imgadd_12': 
  frameImage.src = "./assets/profile-frame-12.png";
    break;

  case'imgadd_13': 
  frameImage.src = "./assets/profile-frame-13.png";
    break;

  case'imgadd_14': 
  frameImage.src = "./assets/profile-frame-14.png";
    break;

  case'imgadd_15': 
  frameImage.src = "./assets/profile-frame-15.png";
    break;

  case'imgadd_16': 
  frameImage.src = "./assets/profile-frame-16.png";
    break;

  case'imgadd_17': 
  frameImage.src = "./assets/profile-frame-17.png";
    break;

  case'imgadd_18': 
  frameImage.src = "./assets/profile-frame-18.png";
    break;

  case'imgadd_19': 
  frameImage.src = "./assets/profile-frame-19.png";
    break;

  case'imgadd_20': 
  frameImage.src = "./assets/profile-frame-20.png";
    break;

  case'imgadd_21': 
  frameImage.src = "./assets/profile-frame-21.png";
    break;

  case'imgadd_22': 
  frameImage.src = "./assets/profile-frame-22.png";
    break;

  case'imgadd_23': 
  frameImage.src = "./assets/profile-frame-23.png";
    break;

  case'imgadd_24': 
  frameImage.src = "./assets/profile-frame-24.png";
    break;

  case'imgadd_25': 
  frameImage.src = "./assets/profile-frame-25.png";
    break;

  case'imgadd_26': 
  frameImage.src = "./assets/profile-frame-26.png";
    break;

  case'imgadd_27': 
  frameImage.src = "./assets/profile-frame-27.png";
    break;

  case'imgadd_28': 
  frameImage.src = "./assets/profile-frame-28.png";
    break;

  case'imgadd_29': 
  frameImage.src = "./assets/profile-frame-29.png";
    break;

  case'imgadd_30': 
  frameImage.src = "./assets/profile-frame-30.png";
    break;

  case'imgadd_31': 
  frameImage.src = "./assets/profile-frame-31.png";
    break;

  case'imgadd_32': 
  frameImage.src = "./assets/profile-frame-32.png";
    break;

  case'imgadd_33': 
  frameImage.src = "./assets/profile-frame-33.png";
    break;

  case'imgadd_34': 
  frameImage.src = "./assets/profile-frame-34.png";
    break;


  default:console.log('not mn');
    break;
}



    choosFreemName.style.display='none'
  })
})





















const frameImage = new Image();
frameImage.src = "./assets/profile-frame.png";

const canvas = document.getElementById("profileCanvas");
const ctx = canvas.getContext("2d");
const form = document.getElementById("profileForm");
const photoInput = document.getElementById("photoInput");




const nameInput = document.getElementById("personName");
const institutionInput = document.getElementById("institutionName");
const addressInput = document.getElementById("address");
// Apps Script Web App URL বসাবেন README-বাংলা.txt-এর নির্দেশনা অনুযায়ী।
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbw4HAMDV1AE5mIpOYKs-Ep9aEmejJ0CQQYycYWqVI0e0Gzx3-1a7qno6i6NBCw4pVJX/exec";
const statusMessage = document.getElementById("statusMessage");
const emptyState = document.getElementById("emptyState");
const downloadButton = document.getElementById("downloadButton");
const resetButton = document.getElementById("resetButton");
const zoomRange = document.getElementById("zoomRange");
const canvasWrap = document.querySelector(".canvas-wrap");
const adjustButtons = ["moveUp","moveDown","moveLeft","moveRight","autoFit"];

let uploadedPhoto = null;
let photoReady = false;
let profileCreated = false;
let zoom = 1;
let offsetX = 0;
let offsetY = 0;
let dragging = false;
let lastPointer = null;
const SIZE = 1200;
// The supplied frame's transparent circular opening is centered slightly above the canvas center.
const FACE_TARGET = { x: 600, y: 445, width: 300 };

function setStatus(message, isError = false) {
  statusMessage.textContent = message;
  statusMessage.style.color = isError ? "#b42318" : "var(--green)";
}

function setControlsEnabled(enabled) {
  zoomRange.disabled = !enabled;
  adjustButtons.forEach(id => document.getElementById(id).disabled = !enabled);
  canvasWrap.classList.toggle("drag-ready", enabled);
}

function drawPhoto() {
  if (!uploadedPhoto || !photoReady) return;
  const image = uploadedPhoto;
  const baseScale = Math.max(SIZE / image.width, SIZE / image.height);
  const scale = baseScale * zoom;
  const width = image.width * scale;
  const height = image.height * scale;
  const x = (SIZE - width) / 2 + offsetX;
  const y = (SIZE - height) / 2 + offsetY;
  ctx.save();
  // Clip to the open circular area so the photo never covers the frame's outer decoration.
  ctx.beginPath();
  ctx.arc(600, 600, 425, 0, Math.PI * 2);
  ctx.clip();
  ctx.drawImage(image, x, y, width, height);
  ctx.restore();
}

function renderPreview() {
  ctx.clearRect(0, 0, SIZE, SIZE);
  drawPhoto();
  if (frameImage.complete && frameImage.naturalWidth) ctx.drawImage(frameImage, 0, 0, SIZE, SIZE);
  const ready = Boolean(uploadedPhoto && photoReady && frameImage.complete && frameImage.naturalWidth);
  emptyState.hidden = ready;
  downloadButton.disabled = !ready;
  setControlsEnabled(Boolean(uploadedPhoto && photoReady));
}

function setZoom(value) {
  zoom = Math.min(2.5, Math.max(0.7, Number(value)));
  zoomRange.value = String(zoom);
  renderPreview();
}

// Try face detection with MediaPipe. If unavailable, use a balanced center crop without blocking use.
async function detectFaceAndAlign(image) {
  setStatus("ছবি বিশ্লেষণ করে মুখের অবস্থান ঠিক করা হচ্ছে…");
  try {
    const vision = await import("https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14/+esm");
    const files = await vision.FilesetResolver.forVisionTasks(
      "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14/wasm"
    );
    const detector = await vision.FaceDetector.createFromOptions(files, {
      baseOptions: {
        modelAssetPath: "https://storage.googleapis.com/mediapipe-models/face_detector/blaze_face_short_range/float16/1/blaze_face_short_range.tflite",
        delegate: "CPU"
      },
      runningMode: "IMAGE",
      minDetectionConfidence: 0.45
    });
    const result = detector.detect(image);
    detector.close();
    const face = result.detections && result.detections[0];
    if (face && face.boundingBox) {
      const box = face.boundingBox;
      const faceWidth = box.width;
      const faceCenterX = box.originX + box.width / 2;
      const faceCenterY = box.originY + box.height / 2;
      const desiredFaceWidth = image.width * 0.25;
      zoom = Math.max(0.7, Math.min(2.5, desiredFaceWidth / faceWidth));
      const scale = Math.max(SIZE / image.width, SIZE / image.height) * zoom;
      const renderedW = image.width * scale;
      const renderedH = image.height * scale;
      offsetX = FACE_TARGET.x - (faceCenterX * scale + (SIZE-renderedW)/2);
      offsetY = FACE_TARGET.y - (faceCenterY * scale + (SIZE-renderedH)/2);
      // Keep offsets bounded so a drag/face estimate cannot leave the photo entirely off-canvas.
      offsetX = Math.max(-SIZE * 0.45, Math.min(SIZE * 0.45, offsetX));
      offsetY = Math.max(-SIZE * 0.45, Math.min(SIZE * 0.45, offsetY));
      zoomRange.value = String(zoom);
      setStatus("মুখ শনাক্ত হয়েছে। প্রিভিউ দেখে প্রয়োজনে জুম বা অবস্থান ঠিক করুন।");
    } else {
      autoFit();
      setStatus("মুখ স্পষ্টভাবে শনাক্ত হয়নি। ছবিটি স্বয়ংক্রিয়ভাবে বসানো হয়েছে—প্রয়োজনে নিজে ঠিক করুন।");
    }
  } catch (error) {
    autoFit();
    setStatus("স্বয়ংক্রিয় মুখ শনাক্তকরণ লোড হয়নি। সাধারণ অটো-ফিট করা হয়েছে; জুম ও তীরচিহ্ন দিয়ে ঠিক করতে পারবেন।");
  }
  renderPreview();
}

function autoFit() {
  zoom = 1;
  offsetX = 0;
  offsetY = 0;
  zoomRange.value = "1";
  renderPreview();
}

frameImage.addEventListener("load", renderPreview);
frameImage.addEventListener("error", () => setStatus("ফ্রেম ফাইলটি লোড হয়নি। assets/profile-frame.png ফাইলটি আছে কি না দেখুন।", true));

photoInput.addEventListener("change", () => {
  const file = photoInput.files && photoInput.files[0];
  if (!file) {
    uploadedPhoto = null;
    photoReady = false;
    renderPreview();
    return;
  }
  if (!file.type.startsWith("image/")) {
    setStatus("অনুগ্রহ করে একটি ছবি ফাইল নির্বাচন করুন।", true);
    photoInput.value = "";
    return;
  }
  if (file.size > 12 * 1024 * 1024) {
    setStatus("ছবিটি ১২ MB-এর চেয়ে বড়। ছোট ছবি নির্বাচন করুন।", true);
    photoInput.value = "";
    return;
  }
  const reader = new FileReader();
  reader.onload = () => {
    const image = new Image();
    image.onload = async () => {
      uploadedPhoto = image;
      photoReady = true;
      zoom = 1; offsetX = 0; offsetY = 0;
      renderPreview();
      await detectFaceAndAlign(image);
    };
    image.onerror = () => setStatus("ছবিটি খোলা যায়নি। অন্য একটি ছবি চেষ্টা করুন।", true);
    image.src = reader.result;
  };
  reader.readAsDataURL(file);
});

zoomRange.addEventListener("input", () => setZoom(zoomRange.value));
document.getElementById("moveUp").addEventListener("click", () => { offsetY -= 25; renderPreview(); });
document.getElementById("moveDown").addEventListener("click", () => { offsetY += 25; renderPreview(); });
document.getElementById("moveLeft").addEventListener("click", () => { offsetX -= 25; renderPreview(); });
document.getElementById("moveRight").addEventListener("click", () => { offsetX += 25; renderPreview(); });
document.getElementById("autoFit").addEventListener("click", () => {
  if (uploadedPhoto) detectFaceAndAlign(uploadedPhoto);
});

canvasWrap.addEventListener("pointerdown", (event) => {
  if (!uploadedPhoto || !photoReady) return;
  dragging = true;
  lastPointer = { x: event.clientX, y: event.clientY };
  canvasWrap.setPointerCapture(event.pointerId);
  event.preventDefault();
});
canvasWrap.addEventListener("pointermove", (event) => {
  if (!dragging || !lastPointer) return;
  const rect = canvasWrap.getBoundingClientRect();
  offsetX += (event.clientX - lastPointer.x) * SIZE / rect.width;
  offsetY += (event.clientY - lastPointer.y) * SIZE / rect.height;
  lastPointer = { x: event.clientX, y: event.clientY };
  renderPreview();
});
function stopDragging() { dragging = false; lastPointer = null; }
canvasWrap.addEventListener("pointerup", stopDragging);
canvasWrap.addEventListener("pointercancel", stopDragging);

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  if (!uploadedPhoto || !photoReady) {
    setStatus("আগে আপনার ছবি আপলোড করুন।", true);
    return;
  }
    profileCreated = true;
  renderPreview();
  setStatus("প্রোফাইল পিক তৈরি হয়েছে। চাইলে এখনই ডাউনলোড করুন।");
  if (!GOOGLE_SCRIPT_URL.startsWith("https://script.google.com/macros/s/")) {
    setStatus("ছবি তৈরি হয়েছে। Google Sheet সংযোগ চালু করতে README-বাংলা.txt-এর নির্দেশনা অনুযায়ী Apps Script URL বসাতে হবে।", true);
    return;
  }
  const formData = new URLSearchParams();
  formData.set("personName", nameInput.value.trim());
  formData.set("institutionName", institutionInput.value.trim());
  formData.set("address", addressInput.value.trim());
  formData.set("submittedAt", new Date().toLocaleString("bn-BD", { timeZone: "Asia/Dhaka" }));
  // Apps Script web app is public for submissions; the spreadsheet itself remains restricted.
  try {
    await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" },
      body: formData.toString()
    });
    setStatus("আপনার তথ্য Google Sheet-এ পাঠানো হয়েছে। ছবি এখন ডাউনলোড করতে পারবেন।");
  } catch (error) {
    setStatus("ছবি তৈরি হয়েছে, কিন্তু তথ্য পাঠানো যায়নি। ইন্টারনেট ও Apps Script URL পরীক্ষা করুন।", true);
  }
});


downloadButton.addEventListener("click", async () => {
  if (!profileCreated || !uploadedPhoto || !photoReady) {
    setStatus("আগে প্রোফাইল তৈরি করুন।", true);
    return;
  }

  renderPreview();

  try {
    const blob = await new Promise((resolve, reject) => {
      canvas.toBlob((result) => {
        if (result) resolve(result);
        else reject(new Error("PNG তৈরি হয়নি"));
      }, "image/png");
    });

    const safeName = (
      nameInput.value.trim() || "profile-pic"
    ).replace(/[^\p{L}\p{N}_-]+/gu, "-").slice(0, 50);

    const fileName = `${safeName}-profile.png`;
    const file = new File([blob], fileName, {
      type: "image/png"
    });

    // Facebook / Messenger browser শনাক্ত করা
    const ua = navigator.userAgent || "";
   const isFacebook = /FBAN|FBAV|FB_IAB|Instagram/i.test(ua);
    // মোবাইলে শেয়ার সুবিধা থাকলে ছবি শেয়ার/সেভ করার সুযোগ
    if (
      isFacebook &&
      navigator.canShare &&
      navigator.share &&
      navigator.canShare({ files: [file] })
    ) {
      try {
        await navigator.share({
          files: [file],
          title: "প্রোফাইল ছবি",
          text: "তৈরি করা প্রোফাইল ছবি"
        });
        return;
      } catch (error) {
        if (error.name === "AbortError") return;
      }
    }

    // সরাসরি ডাউনলোডের চেষ্টা
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download = fileName;
    link.style.display = "none";

    document.body.appendChild(link);
    link.click();
    link.remove();

    setTimeout(() => URL.revokeObjectURL(url), 60000);

    if (isFacebook) {
      setStatus(
        "ডাউনলোড শুরু না হলে নিচের বিকল্প ব্যবহার করুন।"
      );

      showDownloadFallback(blob, fileName);
    } else {
      setStatus("ডাউনলোডের অনুরোধ পাঠানো হয়েছে।");
    }

  } catch (error) {
    console.error(error);
    setStatus("ছবি তৈরি বা ডাউনলোড করা যায়নি।", true);
  }
});

function showDownloadFallback(blob, fileName) {
  let box = document.getElementById("downloadFallback");

  if (!box) {
    box = document.createElement("div");
    box.id = "downloadFallback";
    box.style.cssText =
      "margin:16px 0;padding:16px;border:1px solid #ddd;" +
      "border-radius:12px;text-align:center;";

    downloadButton.insertAdjacentElement("afterend", box);
  }

  const url = URL.createObjectURL(blob);

  box.replaceChildren();

  const message = document.createElement("p");
  message.textContent =
    "Facebook-এ ডাউনলোড কাজ না করলে ছবিটি খুলে সেভ করার চেষ্টা করুন।";

  const openLink = document.createElement("a");
  openLink.href = url;
  openLink.target = "_blank";
  openLink.rel = "noopener";
  openLink.textContent = "ছবি খুলুন / সেভ করুন";
  openLink.download = fileName;
  openLink.style.cssText =
    "display:inline-block;padding:12px 18px;" +
    "background:#1877f2;color:white;border-radius:8px;" +
    "text-decoration:none;";

  box.append(message, openLink);
}



resetButton.addEventListener("click", () => {
  form.reset();
  uploadedPhoto = null;
  photoReady = false;
  profileCreated = false;
downloadButton.style.backgroundColor = "";
downloadButton.style.color = "";
  zoom = 1; offsetX = 0; offsetY = 0;
  setStatus("");
  renderPreview();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

renderPreview();

   