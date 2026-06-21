# 📝 HOW TO FILL IN YOUR .env FILE
## Step-by-Step Guide to Get Firebase Credentials

---

## 🎯 STEP 1: CREATE FIREBASE PROJECT

1. Go to: **https://firebase.google.com**
2. Click: **"Go to console"**
3. Click: **"Create a project"**
4. Enter: **Project name: "barca-live"**
5. Select: **Your country**
6. Click: **"Create project"**

Wait 1-2 minutes for Firebase to create your project...

---

## 🔑 STEP 2: GET SERVICE ACCOUNT CREDENTIALS

### 2.1 Go to Service Accounts
```
Firebase Console → Settings (gear icon) → Service Accounts
```

### 2.2 Generate Private Key
```
Click: "Generate new private key"
→ A JSON file will download
→ Save it safely (backup this!)
```

### 2.3 Copy from JSON File
Open the downloaded JSON file and find these values:

```json
{
  "type": "service_account",
  "project_id": "YOUR_PROJECT_ID",
  "private_key_id": "YOUR_KEY_ID",
  "private_key": "-----BEGIN PRIVATE KEY-----\nYOUR_KEY\n-----END PRIVATE KEY-----\n",
  "client_email": "YOUR_EMAIL",
  "client_id": "YOUR_CLIENT_ID",
  ...
}
```

---

## 📋 STEP 3: FILL IN YOUR .env FILE

### Copy the values from JSON to .env:

```env
FIREBASE_PROJECT_ID=<copy from: project_id>
FIREBASE_PRIVATE_KEY_ID=<copy from: private_key_id>
FIREBASE_PRIVATE_KEY=<copy full private_key with quotes>
FIREBASE_CLIENT_EMAIL=<copy from: client_email>
FIREBASE_CLIENT_ID=<copy from: client_id>
```

### Example:
```env
FIREBASE_PROJECT_ID=barca-live-a1b2c
FIREBASE_PRIVATE_KEY_ID=abc123def456ghi789
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMIIEv..."
FIREBASE_CLIENT_EMAIL=firebase-adminsdk@barca-live-a1b2c.iam.gserviceaccount.com
FIREBASE_CLIENT_ID=123456789012345
```

---

## 🌐 STEP 4: GET DATABASE URLS

### 4.1 Get Realtime Database URL
```
Firebase Console → Realtime Database
→ Copy the URL (https://your-project.firebaseio.com)
```

Fill in .env:
```env
FIREBASE_DB_URL=https://barca-live-a1b2c.firebaseio.com
```

### 4.2 Get Storage Bucket
```
Firebase Console → Storage
→ Copy bucket name (your-project.appspot.com)
```

Fill in .env:
```env
FIREBASE_STORAGE_BUCKET=barca-live-a1b2c.appspot.com
```

---

## 💳 STEP 5: PAYMENT GATEWAY SETUP (OPTIONAL)

### Stripe (if using Stripe for payments):

1. Go to: **https://stripe.com**
2. Sign up / Login
3. Go to: **Dashboard → API keys**
4. Copy: **Secret key** (starts with sk_)
5. Copy: **Publishable key** (starts with pk_)

Fill in .env:
```env
STRIPE_API_KEY=sk_test_YOUR_KEY
STRIPE_PUBLIC_KEY=pk_test_YOUR_KEY
```

### PayPal (if using PayPal for payments):

1. Go to: **https://developer.paypal.com**
2. Create app in Sandbox
3. Copy: **Client ID** and **Secret**

Fill in .env:
```env
PAYPAL_CLIENT_ID=YOUR_CLIENT_ID
PAYPAL_CLIENT_SECRET=YOUR_SECRET
PAYPAL_MODE=sandbox
```

---

## 🔐 STEP 6: OTHER CONFIGURATION

### Server Settings (Keep as default for local):
```env
PORT=5000
NODE_ENV=development
HOST=localhost
```

### Coin System (Already set correctly):
```env
HOST_CUT=0.70          # 70% to host
AGENCY_CUT=0.20        # 20% to agency
PLATFORM_CUT=0.10      # 10% to platform
```

### CORS Origins (Add your URLs):
```env
# For local development:
CORS_ORIGIN=http://localhost:3000,http://localhost:5000

# For production, add your domain:
CORS_ORIGIN=http://localhost:3000,http://localhost:5000,https://yourdomain.com
```

---

## ✅ FINAL CHECKLIST

Before saving your .env file, check:

- [ ] FIREBASE_PROJECT_ID is filled
- [ ] FIREBASE_PRIVATE_KEY is filled (with newlines)
- [ ] FIREBASE_CLIENT_EMAIL is filled
- [ ] FIREBASE_DB_URL is filled
- [ ] PORT is set to 5000
- [ ] NODE_ENV is set to development
- [ ] CORS_ORIGIN includes localhost URLs

---

## 🚀 STEP 7: SAVE YOUR .env FILE

1. Save the file as: **`.env`** (in `backend/` folder)
2. **DO NOT** commit to GitHub
3. **DO NOT** share with anyone
4. **BACKUP** this file safely

---

## 📝 EXAMPLE COMPLETE .env FILE

Here's what it should look like when filled:

```env
# ========================================
# BARCA-LIVE FIREBASE CONFIGURATION
# ========================================

# Firebase Project Settings
FIREBASE_PROJECT_ID=barca-live-a1b2c3
FIREBASE_PRIVATE_KEY_ID=abc123def456ghi
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBg..."
FIREBASE_CLIENT_EMAIL=firebase-adminsdk-abc@barca-live-a1b2c.iam.gserviceaccount.com
FIREBASE_CLIENT_ID=123456789012345678
FIREBASE_DB_URL=https://barca-live-a1b2c.firebaseio.com
FIREBASE_STORAGE_BUCKET=barca-live-a1b2c.appspot.com

# ========================================
# SERVER CONFIGURATION
# ========================================
PORT=5000
NODE_ENV=development
HOST=localhost

# ========================================
# FRONTEND CONFIGURATION
# ========================================
CORS_ORIGIN=http://localhost:3000,http://localhost:5000,https://yourdomain.com

# ========================================
# COIN SYSTEM CONFIGURATION
# ========================================
HOST_CUT=0.70
AGENCY_CUT=0.20
PLATFORM_CUT=0.10

# ... rest of the file
```

---

## 🔍 TROUBLESHOOTING

### ❌ Error: "Firebase credential error"
**Check:**
- FIREBASE_PRIVATE_KEY has proper quotes
- Newlines are preserved (\n)
- All Firebase values are correct
- File is named exactly: `.env`

### ❌ Error: "Cannot connect to database"
**Check:**
- FIREBASE_DB_URL is correct (https://xxx.firebaseio.com)
- Project ID matches Firebase console
- Database is created in Firebase

### ❌ Error: "Port already in use"
**Change:**
```env
PORT=5001  # or any other available port
```

### ❌ Error: "CORS error"
**Check:**
- Frontend URL is in CORS_ORIGIN
- localhost is included
- No typos in URLs

---

## 📖 WHERE TO FIND EACH VALUE

| Variable | Where to Find |
|----------|--------------|
| FIREBASE_PROJECT_ID | JSON file → "project_id" |
| FIREBASE_PRIVATE_KEY | JSON file → "private_key" |
| FIREBASE_CLIENT_EMAIL | JSON file → "client_email" |
| FIREBASE_DB_URL | Firebase Console → Realtime Database |
| STRIPE_API_KEY | Stripe Dashboard → API Keys |
| PAYPAL_CLIENT_ID | PayPal Developer → Apps & Credentials |

---

## ✅ YOU'RE READY!

Once your .env file is filled and saved:

```bash
cd backend
npm install
npm run dev
```

Your backend should start successfully!

---

**Your .env file is the secret key to your platform. Keep it safe! 🔐**

