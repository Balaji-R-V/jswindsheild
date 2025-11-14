# Insurance Forms Setup Instructions

## 📋 Overview

This folder structure is set up for organizing insurance claim forms and satisfaction vouchers. The forms are currently stored in `images/Insurance Docs/` and linked directly from there.

## 📁 Current Structure

```
insurance-forms/
├── claim-forms/          # For claim forms (optional - currently using images/Insurance Docs/)
├── satisfaction-vouchers/ # For satisfaction vouchers (optional)
├── README.md            # Documentation
└── SETUP_INSTRUCTIONS.md # This file
```

## ✅ What's Already Done

1. ✅ HTML updated to use downloadable PDFs instead of external redirects
2. ✅ Forms linked from `images/Insurance Docs/` folder
3. ✅ Download buttons with proper styling
4. ✅ Professional download indicators

## 📝 Available Forms (Currently Linked)

The following forms are already linked and downloadable:

1. ✅ **United India Insurance** - Claim Form
2. ✅ **HDFC ERGO** - Claim Form
3. ✅ **Reliance General** - Claim Form
4. ✅ **Shriram General** - Claim Form
5. ✅ **Cholamandalam** - Claim Form
6. ✅ **SBI General** - Claim Form
7. ✅ **Royal Sundaram** - Claim Form
8. ✅ **Generali Central** - Claim Form
9. ✅ **Tata AIG** - Claim Form (external link)
10. ✅ **Universal Sompo** - Claim Form
11. ✅ **Magma HDI** - Claim Form
12. ✅ **Liberty General** - Claim Form
13. ✅ **Kotak Mahindra** - Claim Form

## 📋 Forms Still Needed

These insurance companies show "Form Coming Soon":
- Oriental Insurance
- New India Insurance
- ICICI Lombard
- Go Digit
- Raheja QBE

## 🔄 Optional: Move Forms to This Folder

If you want to organize forms in this folder instead:

### Step 1: Copy PDFs
Copy PDFs from `images/Insurance Docs/` to `insurance-forms/claim-forms/`

### Step 2: Rename Files (Optional)
Use clean, consistent names:
- `united-india-claim-form.pdf`
- `hdfc-ergo-claim-form.pdf`
- `reliance-claim-form.pdf`
- etc.

### Step 3: Update HTML Links
Change links in `index.html` from:
```html
href="images/Insurance Docs/UNITEDMotor claim form .pdf"
```
To:
```html
href="insurance-forms/claim-forms/united-india-claim-form.pdf"
```

## 📊 Satisfaction Vouchers

Available satisfaction vouchers:
- United India - Satisfaction Note
- Cholamandalam - Satisfaction Voucher
- Royal Sundaram - Satisfaction Voucher
- Generali Central - Satisfaction Voucher
- Universal Sompo - Satisfaction Voucher

These can be added as additional download options if needed.

## ✅ Current Status

- ✅ Download functionality working
- ✅ Professional download buttons
- ✅ Forms accessible from website
- ✅ No external redirects (except Tata AIG)
- ⚠️ Some forms still need to be added

## 🎯 Next Steps

1. Add missing forms for:
   - Oriental Insurance
   - New India Insurance
   - ICICI Lombard
   - Go Digit
   - Raheja QBE

2. (Optional) Add satisfaction vouchers as separate downloads

3. Test all download links to ensure they work

## 📝 File Naming Convention

When adding new forms, use this naming:
- `[insurance-name]-claim-form.pdf`
- `[insurance-name]-satisfaction-voucher.pdf`

Examples:
- `united-india-claim-form.pdf`
- `hdfc-ergo-claim-form.pdf`
- `royal-sundaram-satisfaction-voucher.pdf`

