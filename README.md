# Cake City WhatsApp Campaign Landing Page

A focused paid-ad landing page that routes customers to the correct Cake City branch on WhatsApp.

```powershell
npm.cmd install
npm.cmd run dev
```

Open http://127.0.0.1:3200.

## Meta Ads tracking

Set `NEXT_PUBLIC_META_PIXEL_ID` in Vercel to the Meta Pixel ID for the ad account. The integration sends `PageView`, `ViewContent`, `Search`, and `Contact` standard events, plus Cake City custom events for branch CTAs, catalogue opens, WhatsApp chats, phone taps, and search clearing. UTM parameters are attached to interaction events and every event is also pushed to `window.dataLayer`.
