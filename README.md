# Cake City WhatsApp Campaign Landing Page

A focused paid-ad landing page that routes customers to the correct Cake City branch on WhatsApp.

```powershell
npm.cmd install
npm.cmd run dev
```

Open http://127.0.0.1:3200.

## Meta Ads tracking

Set `NEXT_PUBLIC_META_PIXEL_ID` in Vercel to the Meta Pixel ID for the ad account. The integration sends `PageView`, `ViewContent`, `Search`, and `Contact` standard events, plus Cake City custom events for branch CTAs, catalogue opens, WhatsApp chats, phone taps, and search clearing. UTM parameters are attached to interaction events and every event is also pushed to `window.dataLayer`.

## cPanel static export

Run `npm.cmd run build:cpanel`, then upload the contents of `out` into `public_html/order`. The resulting routes are `/order/` and `/order/branches/`. Set `NEXT_PUBLIC_META_PIXEL_ID` before building if Meta Pixel tracking should be embedded in the static export.
