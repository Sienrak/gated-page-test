# Community Compute

A private, password-gated marketing site for **Community Compute** —
community-first renewable development for the AI era.

Built with Vite + React + TypeScript + Tailwind. The landing page presents the
narrative thesis (the opportunity, the two-problems-solve-each-other thesis, the
model, why now, proof, sequencing, and team) with an option to download the
white paper and an option to get in touch.

## Local development

```sh
bun install       # or: npm install
bun run dev       # start the dev server
bun run build     # production build → dist/
```

## Privacy / password gate

The whole site sits behind a lightweight client-side passphrase gate
(`src/components/PasswordGate.tsx`).

- **Default passphrase:** `communitycompute` (case-insensitive).
- Only the SHA-256 **hash** of the passphrase ships in the bundle — the
  plaintext is never included.

> ⚠️ This is a "please don't wander in / don't index this" barrier suitable for a
> pre-launch investor page, **not** server-side security. A determined visitor
> with dev tools could bypass a purely client-side gate, and any file in
> `public/` (including the white paper PDF) is served directly and is not gated.
> If you need real access control, put the site behind hosting-level auth
> (e.g. Netlify/Cloudflare password protection or Basic Auth).

**To change the passphrase**, compute a new hash and paste it into
`PASSWORD_HASH` in `src/components/PasswordGate.tsx`:

```sh
node -e "console.log(require('crypto').createHash('sha256').update('yourpassphrase').digest('hex'))"
```

(Use the lowercased passphrase — the gate lowercases input before hashing.)

## White paper & contact

- **White paper:** `public/community-compute-white-paper.pdf`. Replace this file
  to update the download; the filename/link is defined by `WHITEPAPER_URL` in
  `src/pages/CommunityCompute.tsx`.
- **Contact email:** set by `CONTACT_EMAIL` at the top of
  `src/pages/CommunityCompute.tsx` (currently a `mailto:` link). Swap in a
  company address when one is available.

## Editing content

All copy and section structure live in `src/pages/CommunityCompute.tsx`. The
design system (colors, typography, helper classes) is in `src/index.css` and
`tailwind.config.ts`.
