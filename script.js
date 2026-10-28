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

downloadButton.addEventListener("click", () => {
  if (!profileCreated) {
    setStatus(
      "আগে প্রোফাইল তৈরি করুন। অনুগ্রহ করে 'প্রোফাইল তৈরি করুন' বাটনে ক্লিক করুন।",
      true
    );

    downloadButton.style.backgroundColor = "#dc2626";
    downloadButton.style.color = "#ffffff";
    return;
  }

  if (!uploadedPhoto || !photoReady) return;
  renderPreview();
  canvas.toBlob((blob) => {
    if (!blob) {
      setStatus("ছবি তৈরি করা যায়নি। আবার চেষ্টা করুন।", true);
      return;
    }
    
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    const safeName = (nameInput.value.trim() || "profile-pic").replace(/[^\p{L}\p{N}_-]+/gu, "-").slice(0, 50);
    link.href = url;
    link.download = `${safeName}-gawhar-madrasa-profile.png`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }, "image/png");
});

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
