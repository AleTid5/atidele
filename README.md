<p>
<a href='https://atidele.dev'>
    <img src="_data/docs/images/banner.webp" alt="Main banner"/>
</a>
</p>

![][next-badge]
![][react-badge]
![][typescript-badge]
![][tailwind-badge]

[next-badge]: https://img.shields.io/badge/NextJs-14-black?logo=vercel
[react-badge]: https://img.shields.io/badge/React-18-58c4dc?logo=react
[typescript-badge]: https://img.shields.io/badge/TypeScript-5-3078c6?logo=typescript
[tailwind-badge]: https://img.shields.io/badge/Tailwind-4-38f9ca?logo=tailwindcss

### Scan me! 📸

<img src="_data/docs/images/qr.svg" width="150" alt="QR Code"/>

## Running the App

```bash
# Using bun
bun install
bun dev
```

## Jobs (Prebuild)

> The prebuild process reads all the **jobs** from the folder and
> converts them into a readable JSON. This makes it easier to
> scale the data without needing to store it outside the repository.
> Furthermore, this script is automatically launched by Vercel, so
> no changes are required on the DevOps platform.

To run the app locally the prebuild command needs to be executed

```bash
# Using bun
bun install
bun prebuild:local
```
