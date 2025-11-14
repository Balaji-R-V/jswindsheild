# GoDaddy Deployment Guide - JS Windshield Website

## ✅ Yes, You Can Deploy to GoDaddy!

Your website is a static site (HTML, CSS, JavaScript), which is perfect for GoDaddy hosting.

---

## 📋 Prerequisites

1. **GoDaddy Account** with hosting plan
2. **FTP/Cpanel Access** (usually provided with hosting)
3. **All your website files** ready to upload

---

## 🚀 Method 1: Using GoDaddy File Manager (Easiest)

### Step 1: Access GoDaddy File Manager

1. Log in to your **GoDaddy account**
2. Go to **My Products** → **Web Hosting**
3. Click **Manage** next to your hosting plan
4. Click **File Manager** (or **cPanel** → **File Manager**)

### Step 2: Navigate to Public HTML Folder

1. In File Manager, go to **public_html** folder (this is your website root)
2. **Delete** any default files (like `index.html`, `cgi-bin`, etc.) if they exist

### Step 3: Upload Your Files

1. Click **Upload** button in File Manager
2. Select **ALL** your website files:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `auth.js`
   - `vercel.json` (optional, but keep it)
   - **Entire `images` folder** (with all subfolders)

3. **Important**: Upload the `images` folder with all its contents:
   ```
   images/
   ├── JS WINDSHIELDS LOGO (2).png
   ├── cars/
   ├── insurance/
   └── JS Windshields website images/
   ```

4. Wait for upload to complete

### Step 4: Verify File Structure

Your `public_html` folder should look like:
```
public_html/
├── index.html
├── styles.css
├── script.js
├── auth.js
├── vercel.json
└── images/
    ├── JS WINDSHIELDS LOGO (2).png
    ├── cars/
    ├── insurance/
    └── JS Windshields website images/
```

### Step 5: Test Your Website

1. Visit your domain: `http://yourdomain.com` or `http://www.yourdomain.com`
2. The website should load with password protection
3. Default password: `jswindshield2024`

---

## 🔧 Method 2: Using FTP (FileZilla or Similar)

### Step 1: Get FTP Credentials

1. In GoDaddy hosting panel, find **FTP** section
2. Note down:
   - **FTP Host**: Usually `ftp.yourdomain.com` or an IP address
   - **FTP Username**: Your hosting username
   - **FTP Password**: Your hosting password
   - **Port**: Usually `21` (or `22` for SFTP)

### Step 2: Connect with FTP Client

1. Download **FileZilla** (free): https://filezilla-project.org/
2. Open FileZilla
3. Enter your FTP credentials:
   - **Host**: `ftp.yourdomain.com`
   - **Username**: Your FTP username
   - **Password**: Your FTP password
   - **Port**: `21`
4. Click **Quickconnect**

### Step 3: Upload Files

1. In FileZilla, navigate to **public_html** folder on the server (right side)
2. On your computer (left side), navigate to your website folder
3. Select **ALL files and folders**:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `auth.js`
   - `images` folder (entire folder)
4. **Drag and drop** or **right-click → Upload**
5. Wait for upload to complete

### Step 4: Set File Permissions (if needed)

1. Right-click `index.html` → **File Permissions**
2. Set to **644** (readable by all, writable by owner)
3. Repeat for CSS and JS files

---

## 🌐 Method 3: Using cPanel (If Available)

### Step 1: Access cPanel

1. Go to GoDaddy hosting panel
2. Click **cPanel** (or **cPanel Admin**)

### Step 2: Use File Manager

1. In cPanel, find **Files** section
2. Click **File Manager**
3. Navigate to **public_html**
4. Upload files using **Upload** button
5. Or use **Extract** if you upload a ZIP file

---

## ⚙️ Important Configuration

### 1. Ensure index.html is in Root

- Your `index.html` MUST be in `public_html` folder (root)
- Not in a subfolder

### 2. Check Image Paths

All image paths in your HTML should be relative:
```html
✅ Correct: src="images/logo.png"
❌ Wrong: src="/images/logo.png" (might not work)
❌ Wrong: src="C:/Users/.../images/logo.png"
```

### 3. Password Protection

- Your site has password protection via `auth.js`
- Default password: `jswindshield2024`
- To change: Edit `auth.js` before uploading
- To disable: Remove `<script src="auth.js" defer></script>` from `index.html`

### 4. HTTPS/SSL Certificate

1. In GoDaddy hosting panel, look for **SSL Certificate**
2. Enable **Free SSL** (Let's Encrypt) if available
3. This makes your site secure (https://)

---

## 🔍 Troubleshooting

### Problem: Website shows "Index of" or file list

**Solution**: 
- Make sure `index.html` is in `public_html` root
- Check file name is exactly `index.html` (not `Index.html` or `INDEX.HTML`)

### Problem: Images don't load

**Solution**:
- Verify `images` folder is uploaded completely
- Check image paths in HTML match actual file names (case-sensitive)
- Ensure all subfolders are uploaded

### Problem: CSS/JavaScript not working

**Solution**:
- Check file paths in HTML: `<link href="styles.css">` (not `/styles.css`)
- Verify files are uploaded to same folder as `index.html`
- Clear browser cache (Ctrl+F5)

### Problem: Password prompt not showing

**Solution**:
- Verify `auth.js` is uploaded
- Check browser console for errors (F12)
- Ensure `auth.js` is in same folder as `index.html`

### Problem: 404 errors

**Solution**:
- Check file names match exactly (case-sensitive)
- Verify all files are in `public_html` root
- Check `.htaccess` file if using Apache (may need to create one)

---

## 📝 Create .htaccess File (Optional but Recommended)

Create a file named `.htaccess` in `public_html` with this content:

```apache
# Enable Rewrite Engine
RewriteEngine On

# Force HTTPS (if SSL is enabled)
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Remove .html extension (optional)
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_FILENAME}\.html -f
RewriteRule ^(.*)\.html$ /$1 [R=301,L]

# Custom Error Pages (optional)
ErrorDocument 404 /index.html
```

---

## 🎯 Quick Checklist

Before going live, verify:

- [ ] All files uploaded to `public_html`
- [ ] `index.html` is in root folder
- [ ] `images` folder uploaded with all subfolders
- [ ] CSS and JS files uploaded
- [ ] `auth.js` uploaded (if using password protection)
- [ ] Test website loads correctly
- [ ] All images display properly
- [ ] Forms work (if backend is set up)
- [ ] Mobile responsive design works
- [ ] SSL certificate enabled (for HTTPS)

---

## 🔐 Security Tips

1. **Change Default Password**: Edit `auth.js` before uploading
2. **Enable SSL**: Use HTTPS for secure connection
3. **Regular Backups**: Download your files regularly
4. **Keep Files Updated**: Update content as needed

---

## 📞 GoDaddy Support

If you need help:
- **GoDaddy Support**: https://www.godaddy.com/help
- **Phone**: Check your GoDaddy account for support number
- **Live Chat**: Available in GoDaddy dashboard

---

## 🚀 Alternative: Quick Deploy Options

If GoDaddy seems complicated, consider:

1. **Vercel** (Free, Easy) - See `DEPLOYMENT.md`
2. **Netlify** (Free, Easy)
3. **GitHub Pages** (Free, requires GitHub account)

---

## ✅ After Deployment

1. **Test on multiple devices**: Desktop, tablet, mobile
2. **Test all links**: Navigation, buttons, forms
3. **Check loading speed**: Use Google PageSpeed Insights
4. **Submit to Google**: Add your site to Google Search Console
5. **Share your website**: Your site is now live! 🎉

---

## 📧 Form Submission Setup

Your contact form currently uses FormSubmit. To make it work:

1. The form in `index.html` already has FormSubmit configured
2. It will send emails to: `balajioff26@gmail.com`
3. First submission requires email verification
4. No backend setup needed!

---

**Good luck with your deployment! 🚀**

