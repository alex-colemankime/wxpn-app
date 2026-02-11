import { useState } from "react";

const C = {
  bg: "#12100E",
  card: "#1A1714",
  surface: "#201D19",
  surfaceHi: "#2A2520",
  accent: "#D54E1B",
  accentDim: "#E7732F",
  accentSoft: "#E8C9A0",
  accentGlow: "rgba(213,78,27,0.10)",
  accentBorder: "rgba(213,78,27,0.35)",
  accentLine: "rgba(213,78,27,0.15)",
  heroA: "#1A1C16",
  heroB: "#252118",
  cream: "#F0EAE0",
  peach: "#E8C9A0",
  text: "#E5DED4",
  textSec: "#CFC5B8",
  textMut: "#9C9285",
  textDim: "#6B6258",
  divider: "#2A2520",
  donate: "#C8962E",
  green: "#3A5A3A",
  greenDim: "rgba(58,90,58,0.18)",
  greenLine: "rgba(58,90,58,0.25)",
  white: "#fff",
};
const F = {
  body: "'Manrope','Space Grotesk',sans-serif",
  display: "'Space Grotesk','Manrope',sans-serif",
  mono: "'IBM Plex Mono','SF Mono',monospace",
};

// SVG icons
const ic = {
  play: (s,c="#fff") => <svg width={s} height={s} viewBox="0 0 24 24" fill={c}><path d="M8 5v14l11-7-11-7z"/></svg>,
  pause: (s,c="#fff") => <svg width={s} height={s} viewBox="0 0 24 24" fill={c}><rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/></svg>,
  heart: (s,c=C.accent) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>,
  heartF: (s,c=C.accent) => <svg width={s} height={s} viewBox="0 0 24 24" fill={c}><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>,
  share: (s,c=C.accent) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round"><path d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8M16 6l-4-4-4 4M12 2v13"/></svg>,
  shareAlt: (s,c=C.textMut) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>,
  chev: (s,c=C.accent) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round"><path d="M9 18l6-6-6-6"/></svg>,
  chevD: (s=16,c=C.textMut) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round"><path d="M6 9l6 6 6-6"/></svg>,
  back: (s,c=C.accent) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round"><path d="M15 18l-6-6 6-6"/></svg>,
  mail: (s,c=C.cream) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 4l-10 7L2 4"/></svg>,
  chat: (s,c=C.cream) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 5h16a2 2 0 012 2v7a2 2 0 01-2 2H9l-5 4v-4H4a2 2 0 01-2-2V7a2 2 0 012-2z"/><path d="M8 10h8"/><path d="M8 13h5"/></svg>,
  cast: (s,c=C.textMut) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round"><path d="M2 16.1A5 5 0 015.9 20M2 12.05A9 9 0 019.95 20M2 8V6a2 2 0 012-2h16a2 2 0 012 2v12a2 2 0 01-2 2h-6"/><line x1="2" y1="20" x2="2.01" y2="20" strokeWidth="3"/></svg>,
  menu: (s,c=C.cream) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round"><path d="M4 7h16"/><path d="M4 12h16"/><path d="M4 17h16"/></svg>,
  close: (s,c=C.cream) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round"><path d="M6 6l12 12"/><path d="M18 6l-12 12"/></svg>,
  // Outlined gear for main header
  gearOut: (s,c=C.accent) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.6" strokeLinecap="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></svg>,
  // Filled gear for settings header
  gearFill: (s,c=C.bg) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.6" strokeLinecap="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></svg>,
  // Nav
  navLive: (s,c) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="2.5" fill={c}/><path d="M16.24 7.76a6 6 0 010 8.49M7.76 16.24a6 6 0 010-8.49"/><path d="M19.07 4.93a10 10 0 010 14.14M4.93 19.07a10 10 0 010-14.14"/></svg>,
  navShows: (s,c) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round"><rect x="3" y="3" width="7" height="9" rx="1"/><rect x="14" y="3" width="7" height="5" rx="1"/><rect x="3" y="16" width="7" height="5" rx="1"/><rect x="14" y="12" width="7" height="9" rx="1"/></svg>,
  navFav: (s,c) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/><path d="M9 12l2 2 4-4" stroke={c} strokeWidth="1.5" fill="none"/></svg>,
  skipBack: (s,c=C.textSec) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round"><path d="M1 4v6h6"/><path d="M3.51 15a9 9 0 105.64-8.36L1 10"/><text x="12" y="16" textAnchor="middle" fill={c} stroke="none" fontSize="8" fontWeight="700" fontFamily="sans-serif">15</text></svg>,
  skipFwd: (s,c=C.textSec) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round"><path d="M23 4v6h-6"/><path d="M20.49 15a9 9 0 11-5.64-8.36L23 10"/><text x="12" y="16" textAnchor="middle" fill={c} stroke="none" fontSize="8" fontWeight="700" fontFamily="sans-serif">30</text></svg>,
};

const ibtn = { width: 36, height: 36, borderRadius: 18, border: "none", background: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", padding: 0 };

const ALBUMS = {
  returning: "https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Returning_to_Myself_%28album%29.jpg/600px-Returning_to_Myself_%28album%29.jpg",
  tigersBlood: "https://coverartarchive.org/release/6217d90e-9517-445c-9396-c7862ed2a143/37729521341-500.jpg",
  romance: "https://coverartarchive.org/release/6e0aa1d9-17ce-4423-87bc-4fec3d0b5f34/38796403938-500.jpg",
  idlha: "https://coverartarchive.org/release/351ba6b9-5b66-489c-b05e-71eff016c752/30629111338-500.jpg",
  nobody: "https://coverartarchive.org/release/f3924e37-1c3d-4d93-be90-dd3aa494b0d5/40857350622-500.jpg",
  jubilee: "https://coverartarchive.org/release/edceeb0b-c5dc-4508-a467-9ae0be4d6815/29955763885-500.jpg",
};
const ART = ALBUMS.returning;
const ARTIST = "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop&q=80";
const TRACK = "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=100&h=100&fit=crop&q=60";

const HOSTS = [
  { group: true, show: "Morning Show", time: "Weekdays 6–10a", hosts: [
    { name: "Kristen Kurtis", img: "https://backend.xpn.org/app/uploads/2022/01/Kristen_Portrait-350x350.jpg" },
    { name: "Bob Bumbera", img: "https://backend.xpn.org/app/uploads/2022/01/Bob_Portrait-350x350.jpg" },
  ]},
  { name: "Mike Vasilikos", show: "WXPN Middays", time: "Weekdays 10a–2p", img: "https://backend.xpn.org/app/uploads/2022/01/DSC1315-350x350.jpg" },
  { name: "Raina Douris", show: "World Cafe", time: "Weekdays 2–4p", img: "https://backend.xpn.org/app/uploads/2022/01/Raina_Portrait-350x350.jpg" },
  { name: "Dan Reed", show: "WXPN Afternoons", time: "Weekdays 4–7p", img: "https://backend.xpn.org/app/uploads/2022/01/Dan_Portrait-350x350.jpg" },
  { name: "Robert Drake", show: "Funky Friday", time: "Fridays 8–11p", img: "https://backend.xpn.org/app/uploads/2022/01/Robert_Portrait-350x350.jpg" },
  { name: "Jim McGuinn", show: "Program Director", time: "", img: "https://backend.xpn.org/app/uploads/2023/02/Jim_Portrait2-350x350.jpg" },
  { name: "Bruce Warren", show: "Exec. Producer, World Cafe", time: "", img: "https://backend.xpn.org/app/uploads/2022/01/DSC1063-350x350.jpg" },
  { name: "David Dye", show: "World Cafe (emeritus)", time: "", img: "https://backend.xpn.org/app/uploads/2022/01/David_Dye_credit_Joe_del_Tufo-350x350.jpg" },
  { name: "Kathy O'Connell", show: "Kids Corner", time: "Weekdays 7–8p", img: "https://backend.xpn.org/app/uploads/2022/01/Kathy_Portrait2-350x350.jpg" },
  { name: "John Diliberto", show: "Echoes", time: "Weeknights 10p–12a", img: "https://backend.xpn.org/app/uploads/2022/01/John_Diliberto_credit_Joe_del_Tufo-350x350.jpg" },
];

const SHOWS = {
  middays: {
    id: "middays",
    name: "WXPN Middays",
    host: "Mike Vasilikos",
    time: "Weekdays • 10a–2p",
    img: "https://backend.xpn.org/app/uploads/2022/03/Middays-350x350.jpg",
    desc: "A midday blend of new releases, staples, and local favorites with a relaxed, curious pace.",
    episodes: [
      { title: "New Music Tuesday", date: "Feb 11", dur: "4 hr", img: "https://backend.xpn.org/app/uploads/2022/03/Middays-350x350.jpg" },
      { title: "Midday Mix", date: "Feb 10", dur: "4 hr", img: "https://backend.xpn.org/app/uploads/2022/03/Middays-350x350.jpg" },
      { title: "Listener Request Hour", date: "Feb 7", dur: "4 hr", img: "https://backend.xpn.org/app/uploads/2022/03/Middays-350x350.jpg" },
    ],
  },
  morning: {
    id: "morning",
    name: "WXPN Morning Show",
    host: "Kristen Kurtis & Bob Bumbera",
    time: "Weekdays • 6–10a",
    img: "https://backend.xpn.org/app/uploads/2021/11/morning_show_sq-350x350.jpg",
    desc: "Start the day with a bright mix of music discovery, context, and the latest from the region.",
    episodes: [
      { title: "Tuesday Morning", date: "Feb 11", dur: "4 hr", img: "https://backend.xpn.org/app/uploads/2021/11/morning_show_sq-350x350.jpg" },
      { title: "Monday Morning", date: "Feb 10", dur: "4 hr", img: "https://backend.xpn.org/app/uploads/2021/11/morning_show_sq-350x350.jpg" },
      { title: "Friday Morning", date: "Feb 7", dur: "4 hr", img: "https://backend.xpn.org/app/uploads/2021/11/morning_show_sq-350x350.jpg" },
    ],
  },
  worldcafe: {
    id: "worldcafe",
    name: "World Cafe",
    host: "Raina Douris",
    time: "Weekdays • 2–4p",
    img: "https://backend.xpn.org/app/uploads/2022/01/wc_npr_logo_og_image-350x350.jpg",
    desc: "Live sessions, deep interviews, and a daily look at artists shaping the sound of now.",
    episodes: [
      { title: "Guerilla Toss Session", date: "Feb 9", dur: "52 min", img: "https://npr.brightspotcdn.com/dims3/default/strip/false/crop/960x540+0+0/resize/800/quality/85/format/jpeg/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2Ffb%2F91%2F54f754ff4d53aebbc8b3d060b500%2Fguerillatoss-2025-promo-01-ebruyildiz-2500x1667-300.jpg" },
      { title: "This Is Lorelei on Holo Boy", date: "Feb 5", dur: "48 min", img: "https://npr.brightspotcdn.com/dims3/default/strip/false/crop/3600x2025+0+0/resize/800/quality/85/format/jpeg/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2Fa1%2F38%2Fb27fa7f24f8e995f5eb0485d6888%2F709a40e4-6607-4373-9f1b-671bc6ea6465.jpg" },
      { title: "Call and Response in Black Music", date: "Feb 4", dur: "55 min", img: "https://npr.brightspotcdn.com/dims3/default/strip/false/crop/3600x2025+0+0/resize/800/quality/85/format/jpeg/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F24%2F8c%2F3ee43b634fdaabb9fb97ddd25c60%2F5baafa8f-8a56-4f54-8927-87e6bc91a3ff.jpg" },
      { title: "The Rise of Baltimore Club Music", date: "Feb 3", dur: "44 min", img: "https://npr.brightspotcdn.com/dims3/default/strip/false/crop/3360x1890+0+0/resize/800/quality/85/format/jpeg/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2Fc6%2Fa8%2F4fa8473742b4aad18fcee0600c4c%2F2c3db3ea-2201-4b87-be2d-bd12dafc75e3.jpg" },
      { title: "Dan Deacon on Baltimore", date: "Jan 30", dur: "50 min", img: "https://npr.brightspotcdn.com/dims3/default/strip/false/crop/3360x1890+0+0/resize/800/quality/85/format/jpeg/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F75%2Fbe%2Fdd77c6d344b2bd1cf6df899b677e%2Fd90ed12a-7d4f-4fca-916f-1ee4fe4878d4.jpg" },
    ],
  },
  afternoons: {
    id: "afternoons",
    name: "WXPN Afternoons",
    host: "Dan Reed",
    time: "Weekdays • 4–7p",
    img: "https://backend.xpn.org/app/uploads/2022/03/Afternoons-350x350.jpg",
    desc: "A smart, energetic soundtrack for the drive home with daily features and context.",
    episodes: [
      { title: "Tuesday Drive", date: "Feb 11", dur: "3 hr", img: "https://backend.xpn.org/app/uploads/2022/03/Afternoons-350x350.jpg" },
      { title: "Monday Drive", date: "Feb 10", dur: "3 hr", img: "https://backend.xpn.org/app/uploads/2022/03/Afternoons-350x350.jpg" },
      { title: "Friday Drive", date: "Feb 7", dur: "3 hr", img: "https://backend.xpn.org/app/uploads/2022/03/Afternoons-350x350.jpg" },
    ],
  },
  funky: {
    id: "funky",
    name: "Funky Friday",
    host: "Robert Drake",
    time: "Fridays • 8–11p",
    img: "https://backend.xpn.org/app/uploads/2022/01/funky_friday_logo_screen-350x350.jpg",
    desc: "Grooves, deep cuts, and dance-floor energy to kick off the weekend.",
    episodes: [
      { title: "Funk & Soul Classics", date: "Feb 7", dur: "3 hr", img: "https://backend.xpn.org/app/uploads/2022/01/funky_friday_logo_screen-350x350.jpg" },
      { title: "Disco Revival Night", date: "Jan 31", dur: "3 hr", img: "https://backend.xpn.org/app/uploads/2022/01/funky_friday_logo_screen-350x350.jpg" },
      { title: "New Funk Friday", date: "Jan 24", dur: "3 hr", img: "https://backend.xpn.org/app/uploads/2022/01/funky_friday_logo_screen-350x350.jpg" },
    ],
  },
  freeatnoon: {
    id: "freeatnoon",
    name: "Free At Noon",
    host: "WXPN Live",
    time: "Fridays • Noon",
    img: "https://backend.xpn.org/app/uploads/2025/01/FAN_logo-green_sans-XPN-1-e1737491524361.png",
    desc: "Weekly live sessions recorded at WXPN with standout artists and special guests.",
    episodes: [
      { title: "Iron & Wine", date: "Feb 7", dur: "45 min", img: "https://backend.xpn.org/app/uploads/2025/01/FAN_logo-green_sans-XPN-1-e1737491524361.png" },
      { title: "Kashus Culpepper", date: "Jan 31", dur: "40 min", img: "https://backend.xpn.org/app/uploads/2025/01/FAN_logo-green_sans-XPN-1-e1737491524361.png" },
      { title: "Gigi Perez", date: "Jan 24", dur: "42 min", img: "https://backend.xpn.org/app/uploads/2025/01/FAN_logo-green_sans-XPN-1-e1737491524361.png" },
    ],
  },
};

const Phone = ({ children }) => (
  <div style={{
    width: 375, height: 812, borderRadius: 48, overflow: "hidden",
    background: `radial-gradient(120% 90% at 50% -10%, ${C.accentGlow} 0%, rgba(18,16,14,0) 60%), radial-gradient(80% 60% at 80% 100%, ${C.greenDim} 0%, transparent 70%), linear-gradient(180deg, ${C.bg} 0%, #0D0B09 100%)`,
    position: "relative",
    boxShadow: "0 40px 100px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.03)",
    fontFamily: F.body, color: C.text,
  }}>
    <div style={{
      position: "absolute", top: 0, left: 0, right: 0, height: 50, zIndex: 100,
      display: "flex", alignItems: "center", justifyContent: "center", paddingTop: 8,
    }}>
      <div style={{ width: 126, height: 34, borderRadius: 17, background: "#000" }} />
    </div>
    <div style={{ height: "100%", overflow: "hidden", display: "flex", flexDirection: "column" }}>
      {children}
    </div>
  </div>
);

/* ─── HEADER — outlined gear on normal, filled on settings ─── */
const Header = ({ showBack, onBack, onMenu }) => (
  <div style={{
    padding: "64px 16px 14px", background: "rgba(18,16,14,0.88)", flexShrink: 0, backdropFilter: "blur(6px)",
  }}>
    <div style={{
      position: "relative", display: "flex", alignItems: "center", justifyContent: "space-between",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 6, width: 72 }}>
        {showBack && (
          <button
            onClick={onBack}
            style={{
              background: "none", border: "none", cursor: "pointer", padding: 6,
              width: 34, height: 34, display: "flex", alignItems: "center", justifyContent: "center",
            }}
          >
            {ic.back(22, C.accent)}
          </button>
        )}
        <button
          onClick={onMenu}
          style={{
            background: "none", border: "none", cursor: "pointer", padding: 6,
            width: 34, height: 34, display: "flex", alignItems: "center", justifyContent: "center",
          }}
        >
          {ic.menu(22, C.cream)}
        </button>
      </div>
      {/* WXPN logo */}
      <div style={{ position: "absolute", left: "50%", transform: "translateX(-50%)", textAlign: "center" }}>
        <div style={{ fontSize: 23, fontWeight: 800, color: C.cream, letterSpacing: "0.16em", fontFamily: F.display, lineHeight: 1 }}>
          WXPN
        </div>
        <div style={{ fontSize: 10, color: C.textDim, letterSpacing: "0.22em", fontFamily: F.mono, marginTop: 6 }}>
          88.5 FM  PHILADELPHIA
        </div>
        <div style={{ height: 2, width: 52, background: C.accentSoft, borderRadius: 2, margin: "8px auto 0", opacity: 0.5 }} />
      </div>
      <div style={{ width: 72 }} />
    </div>
  </div>
);

/* ─── BOTTOM NAV — 3 tabs, pill active ─── */
const Nav = ({ active, onNav }) => {
  const tabs = [
    { id: "live", label: "Live", icon: ic.navLive },
    { id: "shows", label: "Shows", icon: ic.navShows },
    { id: "favorites", label: "Favorites", icon: ic.navFav },
  ];
  return (
    <div style={{
      display: "flex", justifyContent: "space-around", alignItems: "center",
      padding: "8px 10px 34px",
      background: "linear-gradient(180deg, rgba(18,16,14,0.35) 0%, rgba(18,16,14,0.95) 100%)",
      borderImage: `linear-gradient(90deg, ${C.greenLine}, ${C.accentLine}, ${C.greenLine}) 1`, borderTopWidth: 1, borderTopStyle: "solid", flexShrink: 0, backdropFilter: "blur(8px)",
    }}>
      {tabs.map(t => {
        const on = active === t.id;
        return (
          <button key={t.id} onClick={() => onNav(t.id)} style={{
            background: on ? C.accentGlow : "none",
            border: on ? `1.5px solid ${C.accentBorder}` : "1.5px solid transparent",
            borderRadius: 24, cursor: "pointer", display: "flex",
            alignItems: "center", gap: 6, padding: "8px 18px",
          }}>
            {t.icon(22, on ? C.accent : C.textDim)}
            <span style={{ fontSize: 14, fontWeight: on ? 600 : 400, color: on ? C.accent : C.textDim }}>{t.label}</span>
          </button>
        );
      })}
    </div>
  );
};

/* ─── HAMBURGER MENU ─── */
const MenuDrawer = ({ open, onClose, items }) => (
  <div style={{
    position: "absolute", inset: 0, zIndex: 200,
    pointerEvents: open ? "auto" : "none",
  }}>
    <div
      onClick={onClose}
      style={{
        position: "absolute", inset: 0,
        background: "rgba(14,12,10,0.55)",
        opacity: open ? 1 : 0,
        transition: "opacity 0.2s ease",
      }}
    />
    <div style={{
      position: "absolute", top: 0, left: 0, height: "100%", width: 280,
      background: C.card,
      transform: open ? "translateX(0)" : "translateX(-100%)",
      transition: "transform 0.25s ease",
      boxShadow: "16px 0 40px rgba(0,0,0,0.45)",
      borderRight: `1px solid ${C.divider}`,
      display: "flex", flexDirection: "column",
    }}>
      <div style={{
        padding: "22px 18px 16px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        borderBottom: `1px solid ${C.divider}`,
      }}>
        <div>
          <div style={{ fontSize: 13, color: C.textDim, letterSpacing: "0.14em", fontWeight: 700, fontFamily: F.display }}>MENU</div>
          <div style={{ fontSize: 20, fontWeight: 700, color: C.cream, marginTop: 2, fontFamily: F.display }}>WXPN</div>
        </div>
        <button onClick={onClose} style={{ background: "none", border: "none", cursor: "pointer", padding: 6 }}>
          {ic.close(22, C.cream)}
        </button>
      </div>
      <div style={{ padding: "6px 0", overflow: "auto" }}>
        {items.map((item, i) => (
          <button
            key={`${item.label}-${i}`}
            onClick={() => { item.action?.(); onClose(); }}
            style={{
              width: "100%", background: "none", border: "none", cursor: "pointer",
              padding: "16px 18px", display: "flex", alignItems: "center", justifyContent: "space-between",
              color: C.cream, fontSize: 18, fontWeight: 500, textAlign: "left", fontFamily: F.display,
              borderBottom: `1px solid ${C.divider}`,
            }}
          >
            <span>{item.label}</span>
            {item.note && <span style={{ fontSize: 11, color: C.textDim, letterSpacing: "0.14em", fontFamily: F.mono }}>{item.note}</span>}
          </button>
        ))}
      </div>
    </div>
  </div>
);

/* ─── MINI PLAYER ─── */
const Mini = ({ onTap, playing }) => (
  <div style={{
    margin: "0 8px 4px", padding: "8px 10px 8px 8px", borderRadius: 14,
    background: C.surface, display: "flex", alignItems: "center", gap: 10,
    border: `1px solid ${C.accentLine}`, flexShrink: 0,
  }}>
    <img onClick={onTap} src={ART} alt="" style={{ width: 48, height: 48, borderRadius: 6, objectFit: "cover", cursor: "pointer" }} />
    <div onClick={onTap} style={{ flex: 1, minWidth: 0, cursor: "pointer" }}>
      <div style={{ fontSize: 12, fontWeight: 700, color: C.accentSoft, letterSpacing: "0.08em", fontFamily: F.display }}>LIVE</div>
      <div style={{ fontSize: 15, fontWeight: 500, color: C.cream, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>Returning to Myself</div>
      <div style={{ fontSize: 14, color: C.textMut }}>Brandi Carlile</div>
    </div>
    <button style={{
      width: 44, height: 44, borderRadius: 22, border: `1px solid ${C.divider}`, background: C.card,
      cursor: "pointer",
    }}>
      {ic.cast(22, C.textMut)}
    </button>
    <button style={{
      width: 44, height: 44, borderRadius: 22, border: "none", cursor: "pointer",
      background: C.accent, display: "flex", alignItems: "center", justifyContent: "center",
      boxShadow: "0 2px 12px rgba(217,64,0,0.25)",
    }}>{playing ? ic.pause(22, C.bg) : ic.play(22, C.bg)}</button>
  </div>
);

/* ═══════════════ LIVE SCREEN ═══════════════ */
const LiveScreen = ({ playing, setPlaying, onExpand }) => {
  const tracks = [
    { title: "Returning to Myself", artist: "Brandi Carlile", time: "2:34 PM", img: ALBUMS.returning },
    { title: "Right Back to It", artist: "Waxahatchee", time: "2:30 PM", img: ALBUMS.tigersBlood },
    { title: "Favourite", artist: "Fontaines D.C.", time: "2:26 PM", img: ALBUMS.romance },
    { title: "Oceans of Darkness", artist: "The War on Drugs", time: "2:22 PM", img: ALBUMS.idlha },
    { title: "Coast", artist: "Kim Deal", time: "2:17 PM", img: ALBUMS.nobody },
  ];
  const onAir = SHOWS.middays;
  return (
    <div style={{ flex: 1, overflow: "auto" }}>
      {/* ── Donate banner ── */}
      <div style={{ padding: "10px 12px 0" }}>
        <button style={{
          width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
          padding: "11px 16px", borderRadius: 12, cursor: "pointer",
          background: "linear-gradient(135deg, rgba(213,78,27,0.14) 0%, rgba(58,90,58,0.08) 100%)",
          border: `1px solid rgba(213,78,27,0.25)`,
        }}>
          {ic.heartF(16, C.accent)}
          <span style={{ fontSize: 13, fontWeight: 700, color: C.accent, letterSpacing: "0.1em", fontFamily: F.display }}>SUPPORT WXPN</span>
          <span style={{ fontSize: 13, color: C.textDim }}>—</span>
          <span style={{ fontSize: 13, color: C.cream, fontWeight: 500 }}>Donate Now</span>
          {ic.chev(16, C.accentDim)}
        </button>
      </div>

      {/* ── On Air card ── */}
      <div style={{ padding: "12px 12px 0" }}>
        <div style={{
          background: `linear-gradient(135deg, ${C.heroA} 0%, ${C.heroB} 100%)`,
          padding: "14px",
          borderRadius: 16,
          display: "flex", alignItems: "center", gap: 12,
          border: `1px solid rgba(255,255,255,0.05)`,
        }}>
          <img src={onAir.img} alt="" style={{
            width: 60, height: 60, borderRadius: 12, objectFit: "cover",
            border: "1px solid rgba(255,255,255,0.12)",
          }} />
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: C.accentSoft, letterSpacing: "0.18em", fontFamily: F.display }}>ON AIR</div>
            <div style={{ fontSize: 18, fontWeight: 700, color: C.cream, lineHeight: 1.2, fontFamily: F.display }}>{onAir.name}</div>
            <div style={{ fontSize: 14, color: "rgba(242,237,230,0.82)" }}>{onAir.host}</div>
            <div style={{ fontSize: 12, color: C.textDim, fontFamily: F.mono, marginTop: 4 }}>{onAir.time}</div>
          </div>
          <button style={{
            width: 40, height: 40, borderRadius: 20, flexShrink: 0,
            background: "rgba(0,0,0,0.25)",
            border: `1px solid rgba(255,255,255,0.12)`,
            cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            {ic.chat(20, C.cream)}
          </button>
        </div>
      </div>

      {/* ── Now Playing card ── */}
      <div style={{ padding: "12px" }}>
        <div style={{
          borderRadius: 16, overflow: "hidden",
          background: C.card, border: `1px solid ${C.divider}`,
          padding: "12px",
        }}>
          <div onClick={onExpand} style={{ display: "flex", alignItems: "center", gap: 12, cursor: "pointer" }}>
            <img src={ART} alt="" style={{ width: 90, height: 90, borderRadius: 12, objectFit: "cover" }} />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: C.accentSoft, letterSpacing: "0.18em", fontFamily: F.display, marginBottom: 6 }}>NOW PLAYING</div>
              <div style={{ fontSize: 20, fontWeight: 600, color: C.cream, lineHeight: 1.15, fontFamily: F.display }}>Returning to Myself</div>
              <div style={{ fontSize: 15, color: C.peach, marginTop: 2 }}>Brandi Carlile</div>
              <div style={{ fontSize: 13, color: C.textDim, marginTop: 4 }}>Returning to Myself — 2025</div>
            </div>
          </div>
          {/* Action bar */}
          <div style={{
            display: "flex", alignItems: "center", gap: 8,
            marginTop: 12, paddingTop: 10,
            borderTop: `1px solid ${C.divider}`,
          }}>
            <button style={{
              flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
              height: 38, borderRadius: 10,
              border: `1px solid ${C.divider}`, background: C.surface, cursor: "pointer",
            }}>
              {ic.heart(16, C.accent)}
              <span style={{ fontSize: 13, color: C.accent, fontWeight: 500 }}>Save</span>
            </button>
            <button style={{
              flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
              height: 38, borderRadius: 10,
              border: `1px solid ${C.divider}`, background: C.surface, cursor: "pointer",
            }}>
              {ic.share(16, C.accent)}
              <span style={{ fontSize: 13, color: C.accent, fontWeight: 500 }}>Share</span>
            </button>
            <button style={{
              flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
              height: 38, borderRadius: 10,
              border: `1px solid ${C.divider}`, background: C.surface, cursor: "pointer",
            }}>
              {ic.chev(16, C.accent)}
              <span style={{ fontSize: 13, color: C.accent, fontWeight: 500 }}>Details</span>
            </button>
          </div>
        </div>
      </div>

      {/* ── Listen Live controls ── */}
      <div style={{ padding: "0 12px 14px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <button onClick={() => setPlaying(!playing)} style={{
            flex: 1,
            display: "flex", alignItems: "center", justifyContent: "center", gap: 12,
            background: C.accent,
            border: "none", borderRadius: 22,
            padding: "12px 18px", cursor: "pointer",
            minHeight: 48,
            boxShadow: "0 6px 16px rgba(217,64,0,0.3)",
          }}>
            {playing ? ic.pause(22, C.bg) : ic.play(22, C.bg)}
            <span style={{ fontSize: 17, fontWeight: 700, color: C.bg, fontFamily: F.display, letterSpacing: "0.01em" }}>{playing ? "Listening" : "Listen Live"}</span>
          </button>
          <button style={{
            width: 48, height: 48, borderRadius: 24, flexShrink: 0,
            border: `1px solid ${C.divider}`, background: C.card, cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            {ic.cast(22, C.textMut)}
          </button>
        </div>
      </div>

      {/* ── Divider ── */}
      <div style={{ height: 1, background: C.divider, margin: "0 16px" }} />

      {/* ── Recently Played ── */}
      <div style={{ padding: "18px 16px 6px" }}>
        <div style={{ fontSize: 20, fontWeight: 500, color: C.cream, fontFamily: F.display }}>Recently Played</div>
      </div>
      {tracks.map((t, i) => (
        <div key={i} style={{
          margin: "8px 12px", padding: "12px",
          borderRadius: 12, background: C.card, border: `1px solid ${C.divider}`,
          display: "flex", alignItems: "center", gap: 12,
        }}>
          <img src={t.img || TRACK} alt="" style={{ width: 56, height: 56, borderRadius: 6, objectFit: "cover", flexShrink: 0 }} />
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 17, fontWeight: 600, color: C.cream, lineHeight: 1.3, fontFamily: F.display }}>{t.title}</div>
            <div style={{ fontSize: 15, color: C.textMut, fontWeight: 400 }}>{t.artist}</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 8, flexShrink: 0 }}>
            <span style={{ fontSize: 13, color: C.textDim, fontFamily: F.mono }}>{t.time}</span>
            <div style={{ display: "flex", gap: 4 }}>
              <button style={ibtn}>{ic.heart(20, C.accent)}</button>
              <button style={ibtn}>{ic.chev(20, C.accent)}</button>
            </div>
          </div>
        </div>
      ))}
      <div style={{ height: 24 }} />
    </div>
  );
};

/* ═══════════════ SHOWS ═══════════════ */
const ShowsScreen = ({ onShow }) => {
  const [tab, setTab] = useState("archive");
  const tabs = ["Archive", "Hosts", "Schedule"];
  const shows = [
    { ...SHOWS.morning, meta: SHOWS.morning.time },
    { ...SHOWS.middays, meta: SHOWS.middays.time },
    { ...SHOWS.worldcafe, meta: SHOWS.worldcafe.time },
    { ...SHOWS.afternoons, meta: SHOWS.afternoons.time },
  ];
  const sched = [
    { time: "6–10a", show: SHOWS.morning },
    { time: "10a–2p", show: SHOWS.middays, on: true },
    { time: "2–4p", show: SHOWS.worldcafe },
    { time: "4–7p", show: SHOWS.afternoons },
    { time: "8–11p", show: SHOWS.funky, note: "Fri" },
  ];
  return (
    <div style={{ flex: 1, overflow: "auto" }}>
      {/* Sub-tabs */}
      <div style={{ display: "flex", borderBottom: `2px solid ${C.divider}` }}>
        {tabs.map(t => {
          const k = t.toLowerCase();
          const on = tab === k;
          return (
            <button key={t} onClick={() => setTab(k)} style={{
              flex: 1, padding: "13px 0", fontSize: 16, fontWeight: on ? 600 : 400,
              cursor: "pointer", background: "none", fontFamily: F.body, textAlign: "center",
              color: on ? C.cream : C.textMut,
              borderBottom: on ? `3px solid ${C.accent}` : "3px solid transparent",
              borderTop: "none", borderLeft: "none", borderRight: "none", marginBottom: -2,
            }}>{t}</button>
          );
        })}
      </div>

      {tab === "schedule" ? (
        /* Schedule view */
        <div style={{ padding: "8px 0" }}>
          {sched.map((s, i) => (
            <div key={i} onClick={() => s.on && onShow?.(s.show)} style={{
              display: "flex", alignItems: "center", gap: 12, padding: "14px 16px",
              borderBottom: `1px solid ${C.divider}`, cursor: s.on ? "pointer" : "default",
              background: s.on ? C.accentGlow : "transparent",
            }}>
              <div style={{ width: 70, flexShrink: 0 }}>
                <span style={{ fontSize: 13, fontFamily: F.mono, color: s.on ? C.accent : C.textDim }}>{s.time}</span>
                {s.note && <div style={{ fontSize: 11, color: C.textDim, marginTop: 2 }}>{s.note}</div>}
              </div>
              <img src={s.show.img} alt="" style={{ width: 42, height: 42, borderRadius: 8, objectFit: "cover" }} />
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 17, fontWeight: 600, color: s.on ? C.cream : C.text, fontFamily: F.display }}>{s.show.name}</div>
                <div style={{ fontSize: 14, color: C.textMut }}>{s.show.host}</div>
              </div>
            </div>
          ))}
        </div>
      ) : tab === "hosts" ? (
        /* Hosts view */
        <div style={{ padding: "8px 0" }}>
          {HOSTS.map((h, i) => h.group ? (
            <div key={i} style={{
              margin: "8px 12px", borderRadius: 14, background: C.card,
              border: `1px solid ${C.divider}`,
            }}>
              <div style={{ padding: "14px", display: "flex", flexDirection: "column", gap: 12 }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div>
                    <div style={{ fontSize: 14, color: C.accent }}>{h.show}</div>
                    {h.time && <div style={{ fontSize: 12, color: C.textDim, fontFamily: F.mono, marginTop: 3 }}>{h.time}</div>}
                  </div>
                  <button style={ibtn}>{ic.chev(20, C.accent)}</button>
                </div>
                <div style={{ display: "flex", gap: 14 }}>
                  {h.hosts.map((co, j) => (
                    <div key={j} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <img src={co.img} alt="" style={{ width: 48, height: 48, borderRadius: 24, objectFit: "cover", border: `2px solid ${C.divider}` }} />
                      <div style={{ fontSize: 15, fontWeight: 600, color: C.cream, fontFamily: F.display }}>{co.name}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div key={i} style={{
              margin: "8px 12px", borderRadius: 14, background: C.card,
              border: `1px solid ${C.divider}`,
            }}>
              <div style={{
                display: "flex", alignItems: "center", gap: 14, padding: "14px",
              }}>
                <img src={h.img} alt="" style={{ width: 58, height: 58, borderRadius: 29, objectFit: "cover", flexShrink: 0, border: `2px solid ${C.divider}` }} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 17, fontWeight: 600, color: C.cream, fontFamily: F.display }}>{h.name}</div>
                  <div style={{ fontSize: 14, color: C.accent }}>{h.show}</div>
                  {h.time && <div style={{ fontSize: 12, color: C.textDim, fontFamily: F.mono, marginTop: 3 }}>{h.time}</div>}
                </div>
                <button style={ibtn}>{ic.chev(20, C.accent)}</button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <>
          {/* Sort dropdown */}
          <div style={{
            margin: "14px 14px 6px", padding: "13px 14px", borderRadius: 8,
            background: C.surface, display: "flex", alignItems: "center", justifyContent: "space-between",
          }}>
            <span style={{ fontSize: 16, color: C.textMut }}>Alphabetical by show (A-Z)</span>
            {ic.chevD(18, C.textMut)}
          </div>

          {/* Show list */}
          {shows.map((s, i) => (
            <div key={i} style={{
              margin: "10px 12px", borderRadius: 14, background: C.card,
              border: `1px solid ${C.divider}`,
            }}>
              <div onClick={() => onShow?.(s)} style={{
                display: "flex", alignItems: "center", gap: 16, padding: "16px",
                cursor: "pointer",
              }}>
                <img src={s.img} alt="" style={{ width: 74, height: 74, borderRadius: 10, objectFit: "cover", flexShrink: 0 }} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 18, fontWeight: 600, color: C.cream, marginBottom: 4, fontFamily: F.display }}>{s.name}</div>
                  <div style={{ fontSize: 15, color: C.textMut }}>{s.host}</div>
                  <div style={{ fontSize: 13, color: C.textDim, marginTop: 6, fontFamily: F.mono }}>{s.meta}</div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 6 }}>
                  <button style={ibtn}>{ic.heart(22, C.accent)}</button>
                  <button style={ibtn}>{ic.chev(22, C.accent)}</button>
                </div>
              </div>
            </div>
          ))}
        </>
      )}
      <div style={{ height: 24 }} />
    </div>
  );
};

/* ═══════════════ SHOW DETAIL ═══════════════ */
const ShowDetail = ({ show, onBack, onEp }) => {
  const s = show || SHOWS.worldcafe;
  return (
    <div style={{ flex: 1, overflow: "auto" }}>
      <div style={{ position: "relative", height: 170, overflow: "hidden" }}>
        <img src={s.img} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.35)" }} />
        <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to bottom, transparent 20%, ${C.bg})` }} />
        <div style={{ position: "absolute", bottom: 14, left: 16, display: "flex", gap: 14, alignItems: "flex-end" }}>
          <img src={s.img} alt="" style={{ width: 78, height: 78, borderRadius: 10, objectFit: "cover", border: `2px solid ${C.bg}` }} />
          <div>
            <div style={{ fontSize: 24, fontWeight: 700, color: C.cream, fontFamily: F.display, letterSpacing: "0.01em" }}>{s.name}</div>
            <div style={{ fontSize: 16, color: C.accent }}>{s.host}</div>
            <div style={{ fontSize: 13, color: C.textDim, fontFamily: F.mono, marginTop: 4 }}>{s.time}</div>
          </div>
        </div>
      </div>
      <div style={{ padding: "14px 16px" }}>
        <p style={{ fontSize: 16, color: C.textMut, lineHeight: 1.6, margin: 0 }}>
          {s.desc}
        </p>
      </div>
      {/* Action buttons */}
      <div style={{ display: "flex", gap: 10, padding: "0 16px 14px" }}>
        <button onClick={() => onEp?.()} style={{
          flex: 1,
          display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
          background: C.accent, border: "none", borderRadius: 22,
          padding: "10px 16px", cursor: "pointer", minHeight: 44,
          boxShadow: "0 4px 12px rgba(217,64,0,0.25)",
        }}>
          {ic.play(18, C.bg)}
          <span style={{ fontSize: 15, fontWeight: 700, color: C.bg, fontFamily: F.display }}>Play Latest</span>
        </button>
        <button style={{
          display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
          background: "none",
          border: `1.5px solid ${C.accent}`,
          borderRadius: 22,
          padding: "10px 20px", cursor: "pointer", minHeight: 44,
        }}>
          {ic.heart(18, C.accent)}
          <span style={{ fontSize: 15, fontWeight: 600, color: C.accent, fontFamily: F.display }}>Follow</span>
        </button>
      </div>
      <div style={{ height: 1, background: C.divider, margin: "0 16px" }} />
      {(s.episodes || []).map((ep, i) => (
        <div key={i} style={{ margin: "8px 12px", borderRadius: 12, background: C.card, border: `1px solid ${C.divider}` }}>
          <div onClick={() => onEp?.()} style={{
            display: "flex", alignItems: "center", gap: 14, padding: "14px", cursor: "pointer",
          }}>
            <img src={ep.img || s.img} alt="" style={{ width: 56, height: 56, borderRadius: 8, objectFit: "cover", flexShrink: 0 }} />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 17, fontWeight: 500, color: C.cream }}>{ep.title}</div>
              <div style={{ fontSize: 14, color: C.textMut }}>{ep.date} — {ep.dur}</div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 4 }}>
              <button style={ibtn}>{ic.heart(20, C.accent)}</button>
              <button style={ibtn}>{ic.chev(20, C.accent)}</button>
            </div>
          </div>
        </div>
      ))}
      <div style={{ height: 12 }} />
    </div>
  );
};

/* ═══════════════ ARCHIVE PLAYER ═══════════════ */
const ArchivePlayer = ({ show }) => {
  const s = show || SHOWS.worldcafe;
  return (
    <div style={{ flex: 1, overflow: "auto" }}>
      <div style={{ display: "flex", justifyContent: "center", padding: "14px 16px 22px" }}>
        <div style={{ width: 220, height: 220, borderRadius: 8, overflow: "hidden", boxShadow: "0 12px 40px rgba(0,0,0,0.5)" }}>
          <img src={ARTIST} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
      </div>
      <div style={{ textAlign: "center", padding: "0 24px 20px" }}>
        <div style={{ fontSize: 24, fontWeight: 500, color: C.cream, fontFamily: F.display }}>Adia Victoria Session</div>
        <div style={{ fontSize: 17, color: C.peach, marginTop: 4 }}>{s.name}</div>
        <div style={{ fontSize: 15, color: C.textMut, marginTop: 2 }}>Feb 9, 2026 — 52 min</div>
      </div>
    <div style={{ padding: "0 28px 10px" }}>
      <div style={{ height: 6, borderRadius: 3, background: C.surface, position: "relative", cursor: "pointer" }}>
        <div style={{ width: "35%", height: "100%", borderRadius: 3, background: C.accent }} />
        <div style={{ width: 16, height: 16, borderRadius: 8, background: C.cream, position: "absolute", top: "50%", left: "35%", transform: "translate(-50%, -50%)", boxShadow: "0 0 8px rgba(242,237,230,0.2)" }} />
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8 }}>
        <span style={{ fontSize: 14, color: C.textMut, fontFamily: F.mono }}>18:12</span>
        <span style={{ fontSize: 14, color: C.textMut, fontFamily: F.mono }}>52:00</span>
      </div>
    </div>
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 18, padding: "12px 24px 22px" }}>
      <button style={{
        width: 44, height: 44, borderRadius: 22,
        background: "none", border: "none", cursor: "pointer",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        {ic.skipBack(28, C.textSec)}
      </button>
      <button style={{
        display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
        background: C.accent,
        border: "none", borderRadius: 28,
        padding: "10px 28px", cursor: "pointer",
        minHeight: 52,
        boxShadow: "0 6px 12px rgba(217,64,0,0.25)",
      }}>
        {ic.pause(26, C.bg)}
        <span style={{ fontSize: 18, fontWeight: 700, color: C.bg, fontFamily: F.display, letterSpacing: "0.01em" }}>Playing</span>
      </button>
      <button style={{
        width: 44, height: 44, borderRadius: 22,
        background: "none", border: "none", cursor: "pointer",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        {ic.skipFwd(28, C.textSec)}
      </button>
      <button style={{
        width: 44, height: 44, borderRadius: 22,
        background: C.card, border: `1px solid ${C.divider}`, cursor: "pointer",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        {ic.cast(22, C.textMut)}
      </button>
    </div>
    <div style={{ height: 1, background: C.divider, margin: "0 16px" }} />
    <div style={{ padding: "16px 16px 6px" }}>
      <div style={{ fontSize: 20, fontWeight: 500, color: C.cream, fontFamily: F.display }}>In This Episode</div>
    </div>
    {[
      { song: "Mean", artist: "Adia Victoria", at: "2:15" },
      { song: "Magnolia Blues", artist: "Adia Victoria", at: "12:30" },
      { song: "Different Kind of Love", artist: "Adia Victoria", at: "24:45" },
    ].map((t, i) => (
      <div key={i} style={{
        margin: "8px 12px", borderRadius: 12, background: C.card,
        border: `1px solid ${C.divider}`,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px" }}>
          <img src={ARTIST} alt="" style={{ width: 54, height: 54, borderRadius: 8, objectFit: "cover" }} />
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 16, fontWeight: 500, color: C.cream }}>{t.song}</div>
            <div style={{ fontSize: 14, color: C.textMut }}>{t.artist}</div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
            <span style={{ fontSize: 13, color: C.textDim, fontFamily: F.mono, marginRight: 4 }}>{t.at}</span>
            <button style={ibtn}>{ic.heart(20, C.accent)}</button>
            <button style={ibtn}>{ic.chev(20, C.accent)}</button>
          </div>
        </div>
      </div>
    ))}
  </div>
);
};

/* ═══════════════ FAVORITES ═══════════════ */
const FavScreen = ({ onShow }) => {
  const [tab, setTab] = useState("songs");
  const songs = [
    {
      title: "Right Back to It",
      artist: "Waxahatchee",
      date: "Feb 9",
      img: ALBUMS.tigersBlood,
    },
    {
      title: "Favourite",
      artist: "Fontaines D.C.",
      date: "Feb 8",
      img: ALBUMS.romance,
    },
    {
      title: "Oceans of Darkness",
      artist: "The War on Drugs",
      date: "Feb 7",
      img: ALBUMS.idlha,
    },
    {
      title: "Coast",
      artist: "Kim Deal",
      date: "Feb 6",
      img: ALBUMS.nobody,
    },
    {
      title: "Savage Good Boy",
      artist: "Japanese Breakfast",
      date: "Feb 5",
      img: ALBUMS.jubilee,
    },
  ];
  const favShows = [SHOWS.worldcafe, SHOWS.funky, SHOWS.morning];
  return (
    <div style={{ flex: 1, overflow: "auto" }}>
      <div style={{ display: "flex", borderBottom: `2px solid ${C.divider}` }}>
        {["Songs", "Shows"].map(t => {
          const on = tab === t.toLowerCase();
          return (
            <button key={t} onClick={() => setTab(t.toLowerCase())} style={{
              flex: 1, padding: "13px 0", fontSize: 16, fontWeight: on ? 600 : 400, cursor: "pointer",
              background: "none", fontFamily: F.body, textAlign: "center",
              color: on ? C.cream : C.textMut,
              borderBottom: on ? `3px solid ${C.accent}` : "3px solid transparent",
              borderTop: "none", borderLeft: "none", borderRight: "none", marginBottom: -2,
            }}>{t}</button>
          );
        })}
      </div>
      {tab === "songs" ? songs.map((t, i) => (
        <div key={i} style={{
          margin: "8px 12px", borderRadius: 12, background: C.card,
          border: `1px solid ${C.divider}`,
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px" }}>
            <img src={t.img || TRACK} alt="" style={{ width: 56, height: 56, borderRadius: 6, objectFit: "cover", flexShrink: 0 }} />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 17, fontWeight: 600, color: C.cream, fontFamily: F.display }}>{t.title}</div>
              <div style={{ fontSize: 15, color: C.textMut }}>{t.artist}</div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 8 }}>
              <span style={{ fontSize: 13, color: C.textDim, fontFamily: F.mono }}>{t.date}</span>
              <div style={{ display: "flex", gap: 4 }}>
                <button style={ibtn}>{ic.heartF(20, C.accent)}</button>
                <button style={ibtn}>{ic.chev(20, C.accent)}</button>
              </div>
            </div>
          </div>
        </div>
      )) : favShows.map((s, i) => (
        <div key={i} style={{
          margin: "10px 12px", borderRadius: 14, background: C.card,
          border: `1px solid ${C.divider}`,
        }}>
          <div onClick={() => onShow?.(s)} style={{ display: "flex", alignItems: "center", gap: 14, padding: "16px", cursor: "pointer" }}>
            <img src={s.img} alt="" style={{ width: 68, height: 68, borderRadius: 10, objectFit: "cover" }} />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 18, fontWeight: 600, color: C.cream, fontFamily: F.display }}>{s.name}</div>
              <div style={{ fontSize: 15, color: C.textMut }}>{s.host}</div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 6 }}>
              <button style={ibtn}>{ic.heartF(22, C.accent)}</button>
              <button style={ibtn}>{ic.chev(22, C.accent)}</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

/* ═══════════════ SETTINGS ═══════════════ */
const SettingsScreen = () => {
  const [q, setQ] = useState("high");
  const [cp, setCp] = useState(false);
  return (
    <div style={{ flex: 1, overflow: "auto" }}>
      <div style={{ padding: "20px 16px 12px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
          <span style={{ fontSize: 18, color: C.cream, fontFamily: F.display }}>Bit Rate</span>
          <div style={{ width: 22, height: 22, borderRadius: 11, border: `1.5px solid ${C.accent}`, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontSize: 12, fontWeight: 700, color: C.accent }}>i</span>
          </div>
        </div>
        <div style={{ display: "flex", borderRadius: 8, overflow: "hidden", border: `1px solid ${C.divider}` }}>
          {[{ id: "low", l: "64kbps", s: "Lower Quality" }, { id: "high", l: "160kbps", s: "Higher Quality" }].map(x => (
            <button key={x.id} onClick={() => setQ(x.id)} style={{
              flex: 1, padding: "14px 0", cursor: "pointer", border: "none",
              background: q === x.id ? C.surfaceHi : "transparent",
              display: "flex", flexDirection: "column", alignItems: "center", gap: 6, fontFamily: F.body,
            }}>
              <span style={{ fontSize: 17, fontWeight: q === x.id ? 600 : 400, color: q === x.id ? C.cream : C.textMut }}>
                {q === x.id ? "✓ " : ""}{x.l}
              </span>
              <span style={{ fontSize: 14, color: C.textDim }}>{x.s}</span>
            </button>
          ))}
        </div>
      </div>
      <div style={{ height: 1, background: C.divider, margin: "0 16px" }} />
      <div style={{ padding: "20px 16px 12px" }}>
        <div style={{ fontSize: 18, color: C.cream, marginBottom: 14, fontFamily: F.display }}>Favorites</div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 0", borderTop: `1px solid ${C.divider}`, borderBottom: `1px solid ${C.divider}` }}>
          <div>
            <div style={{ fontSize: 17, color: C.accent }}>Share Favorites</div>
            <div style={{ fontSize: 15, color: C.textMut }}>Share all Favorites in a text or csv file</div>
          </div>
          {ic.shareAlt(22, C.textMut)}
        </div>
      </div>
      <div style={{ height: 1, background: C.divider, margin: "0 16px" }} />
      <div style={{ padding: "20px 16px 12px" }}>
        <div style={{ fontSize: 18, color: C.cream, marginBottom: 14, fontFamily: F.display }}>CarPlay Settings</div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 0", borderTop: `1px solid ${C.divider}`, borderBottom: `1px solid ${C.divider}` }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div>
              <div style={{ fontSize: 17, color: C.cream }}>Time Skip Controls</div>
              <div style={{ fontSize: 15, color: C.textMut }}>Make visible in CarPlay</div>
            </div>
            <div style={{ width: 22, height: 22, borderRadius: 11, border: `1.5px solid ${C.accent}`, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ fontSize: 12, fontWeight: 700, color: C.accent }}>i</span>
            </div>
          </div>
          <button onClick={() => setCp(!cp)} style={{
            width: 54, height: 32, borderRadius: 16, padding: 2, border: `1px solid ${C.divider}`, cursor: "pointer",
            background: cp ? C.accent : C.surface,
            display: "flex", justifyContent: cp ? "flex-end" : "flex-start", alignItems: "center",
          }}><div style={{ width: 28, height: 28, borderRadius: 14, background: cp ? C.bg : C.textDim, transition: "all 0.2s" }} /></button>
        </div>
      </div>
      <div style={{ height: 1, background: C.divider, margin: "0 16px" }} />
      <div style={{ padding: "20px 16px 12px" }}>
        <div style={{ fontSize: 18, color: C.cream, marginBottom: 10, fontFamily: F.display }}>Contact</div>
        {["Technical Support", "Contact WXPN"].map((item, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 0", borderBottom: `1px solid ${C.divider}` }}>
            <span style={{ fontSize: 17, color: C.textSec }}>{item}</span>
            {ic.chev(20, C.textDim)}
          </div>
        ))}
      </div>
      <div style={{ height: 6, background: C.divider, margin: "8px 0" }} />
      <div style={{ padding: "12px 16px" }}>
        {["About WXPN", "Terms of Use", "Privacy Policy"].map((item, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 0", borderBottom: `1px solid ${C.divider}` }}>
            <span style={{ fontSize: 17, color: C.textSec }}>{item}</span>
            {ic.chev(20, C.textDim)}
          </div>
        ))}
      </div>
      <div style={{ height: 24 }} />
    </div>
  );
};

/* ═══════════════ EXPANDED NOW PLAYING ═══════════════ */
const NowPlaying = ({ open, onClose, playing, setPlaying }) => (
  <div style={{
    position: "absolute", inset: 0, zIndex: 300,
    background: C.bg,
    transform: open ? "translateY(0)" : "translateY(100%)",
    transition: "transform 0.35s cubic-bezier(0.32, 0.72, 0, 1)",
    display: "flex", flexDirection: "column",
    overflow: "hidden",
  }}>
    {/* Drag handle + collapse */}
    <div style={{ padding: "14px 0 0", display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
      <div style={{ width: 36, height: 4, borderRadius: 2, background: C.textDim, opacity: 0.5, marginBottom: 8 }} />
      <button onClick={onClose} style={{
        background: "none", border: "none", cursor: "pointer", padding: 6,
        transform: "rotate(90deg)",
      }}>
        {ic.chev(28, C.textMut)}
      </button>
    </div>

    {/* Album art */}
    <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 32px", gap: 28 }}>
      <div style={{
        width: 240, height: 240, borderRadius: 16, overflow: "hidden",
        boxShadow: "0 20px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04)",
      }}>
        <img src={ART} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </div>

      {/* Track info */}
      <div style={{ textAlign: "center", width: "100%" }}>
        <div style={{ fontSize: 24, fontWeight: 600, color: C.cream, fontFamily: F.display, lineHeight: 1.2 }}>Returning to Myself</div>
        <div style={{ fontSize: 18, color: C.peach, marginTop: 6 }}>Brandi Carlile</div>
        <div style={{ fontSize: 14, color: C.textDim, marginTop: 4 }}>Returning to Myself — 2025</div>
      </div>

      {/* Live indicator */}
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <div style={{ width: 8, height: 8, borderRadius: 4, background: C.accent, boxShadow: "0 0 8px rgba(213,78,27,0.5)" }} />
        <span style={{ fontSize: 13, fontWeight: 700, color: C.accentSoft, letterSpacing: "0.18em", fontFamily: F.display }}>LIVE ON 88.5</span>
      </div>

      {/* Controls */}
      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
        <button style={{
          ...ibtn, width: 48, height: 48, borderRadius: 24,
          background: C.card, border: `1px solid ${C.divider}`,
        }}>
          {ic.heart(22, C.accent)}
        </button>
        <button onClick={() => setPlaying(!playing)} style={{
          width: 72, height: 72, borderRadius: 36,
          background: C.accent, border: "none", cursor: "pointer",
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: "0 8px 24px rgba(213,78,27,0.35)",
        }}>
          {playing ? ic.pause(32, C.bg) : ic.play(32, C.bg)}
        </button>
        <button style={{
          ...ibtn, width: 48, height: 48, borderRadius: 24,
          background: C.card, border: `1px solid ${C.divider}`,
        }}>
          {ic.cast(22, C.textMut)}
        </button>
      </div>
    </div>

    {/* Donate banner at bottom */}
    <div style={{ padding: "12px 20px 44px", flexShrink: 0 }}>
      <button style={{
        width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
        padding: "11px 16px", borderRadius: 12, cursor: "pointer",
        background: "linear-gradient(135deg, rgba(213,78,27,0.14) 0%, rgba(58,90,58,0.08) 100%)",
        border: `1px solid rgba(213,78,27,0.25)`,
      }}>
        {ic.heartF(16, C.accent)}
        <span style={{ fontSize: 13, fontWeight: 700, color: C.accent, letterSpacing: "0.1em", fontFamily: F.display }}>SUPPORT WXPN</span>
        <span style={{ fontSize: 13, color: C.textDim }}>—</span>
        <span style={{ fontSize: 13, color: C.cream, fontWeight: 500 }}>Donate Now</span>
        {ic.chev(16, C.accentDim)}
      </button>
    </div>
  </div>
);

/* ═══════════════ MAIN ═══════════════ */
export default function WXPNApp() {
  const [screen, setScreen] = useState("live");
  const [sub, setSub] = useState(null);
  const [settings, setSettings] = useState(false);
  const [selectedShow, setSelectedShow] = useState(SHOWS.worldcafe);
  const [menuOpen, setMenuOpen] = useState(false);
  const [playing, setPlaying] = useState(true);
  const [npOpen, setNpOpen] = useState(false);

  const nav = id => { setScreen(id); setSub(null); setSettings(false); setNpOpen(false); };
  const showBack = settings || !!sub;
  const showMini = screen !== "live" && sub !== "archive" && !settings;
  const menuItems = [
    { label: "Home", action: () => nav("live") },
    { label: "Playlist", action: () => nav("live") },
    { label: "XPN.org", note: "WEB" },
    { label: "Donate", note: "WEB" },
    { label: "Connect", note: "WEB" },
    { label: "Alarm Clock" },
    { label: "Festival", note: "WEB" },
    { label: "Music News", note: "WEB" },
    { label: "Concert Calendar", note: "WEB" },
    {
      label: "World Cafe",
      action: () => {
        setSettings(false);
        setSelectedShow(SHOWS.worldcafe);
        setScreen("shows");
        setSub("show");
      },
    },
    { label: "Settings", action: () => { setSettings(true); setSub(null); } },
    { label: "Privacy Policy", note: "WEB" },
  ];

  const content = () => {
    if (settings) return <SettingsScreen />;
    if (sub === "show") return <ShowDetail show={selectedShow} onBack={() => setSub(null)} onEp={() => setSub("archive")} />;
    if (sub === "archive") return <ArchivePlayer show={selectedShow} />;
    if (screen === "shows") return <ShowsScreen onShow={(show) => { setSelectedShow(show); setSub("show"); }} />;
    if (screen === "favorites") return <FavScreen onShow={(show) => { setSelectedShow(show); setScreen("shows"); setSub("show"); }} />;
    return <LiveScreen playing={playing} setPlaying={setPlaying} onExpand={() => setNpOpen(true)} />;
  };

  return (
    <div style={{
      minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center",
      justifyContent: "center", padding: "40px 20px", background: "#0D0B09",
    }}>
      <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700;800&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet" />
      <style>{`
        * { -webkit-font-smoothing: antialiased; box-sizing: border-box; }
        button:active { opacity: 0.7; }
        ::-webkit-scrollbar { display: none; }
      `}</style>

      <Phone>
        <MenuDrawer open={menuOpen} onClose={() => setMenuOpen(false)} items={menuItems} />
        <Header
          showBack={showBack}
          onBack={() => {
            if (settings) setSettings(false);
            else if (sub === "archive") setSub("show");
            else setSub(null);
          }}
          onMenu={() => setMenuOpen(true)}
        />
        {content()}
        {showMini && <Mini onTap={() => setNpOpen(true)} playing={playing} />}
        <Nav active={screen} onNav={nav} />
        <NowPlaying open={npOpen} onClose={() => setNpOpen(false)} playing={playing} setPlaying={setPlaying} />
      </Phone>

      <div style={{ marginTop: 20, display: "flex", gap: 6, flexWrap: "wrap", justifyContent: "center", maxWidth: 420 }}>
        {[
          { id: "live", label: "Live" },
          { id: "shows", label: "Shows" },
          { id: "favorites", label: "Favorites" },
          { id: "_s", label: "Settings" },
        ].map((s, i) => {
          const on = s.id === "_s" ? settings : (screen === s.id && !sub && !settings);
          return (
            <button key={i} onClick={() => {
              if (s.id === "_s") { setSettings(true); setSub(null); } else nav(s.id);
            }} style={{
              padding: "7px 18px", borderRadius: 20, fontSize: 13, cursor: "pointer",
              fontFamily: F.body, fontWeight: 500,
              background: on ? C.accent : "rgba(18,16,14,0.92)",
              color: on ? C.bg : C.textMut,
              border: `1px solid ${on ? "transparent" : C.divider}`,
            }}>{s.label}</button>
          );
        })}
      </div>
    </div>
  );
}
