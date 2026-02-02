# Popunch

A vibrant, Pop Art styled web application that transforms your thoughts and photos into dramatic comic book panels using AI.

## Features

- **Comic Panel Generator** - Transform text and images into pop art style comic panels
- **Blog** - Integrated blog powered by Sanity CMS
- **Pop Art Aesthetic** - Ben-Day dots, bold colors, comic typography

## Tech Stack

- React 19
- Vite
- Tailwind CSS v4
- Sanity CMS
- Google Gemini AI

## Run Locally

**Prerequisites:** Node.js

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set the `GEMINI_API_KEY` in `.env.local` to your Gemini API key

3. Run the app:
   ```bash
   npm run dev
   ```

## Sanity Studio

The blog content is managed via Sanity Studio located at `../studio-pixdyne`.

```bash
cd ../studio-pixdyne
npm install
npm run dev
```

## Author

Developed by [Felix Yu](https://felixyu.net) at [Pixdyne](https://pixdyne.com)

## License

MIT
