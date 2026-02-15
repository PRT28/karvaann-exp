This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Lead Capture to Microsoft Excel (Teams/SharePoint)

The forms in `app/customised/page.tsx` and `components/ReadySection.tsx` now submit to `POST /api/leads`, which appends rows to an Excel table using Microsoft Graph.

Set these environment variables (see `.env.example`):

```bash
MS_TENANT_ID=
MS_CLIENT_ID=
MS_CLIENT_SECRET=
MS_EXCEL_DRIVE_ID=
MS_EXCEL_ITEM_ID=
MS_EXCEL_TABLE_NAME=Leads
```

Entra ID mapping:

1. `MS_TENANT_ID`: Directory (tenant) ID
2. `MS_CLIENT_ID`: Application (client) ID (this is the App ID)
3. `MS_CLIENT_SECRET`: Client secret value
4. `MS_EXCEL_DRIVE_ID`: Drive ID of SharePoint/OneDrive library containing the workbook
5. `MS_EXCEL_ITEM_ID`: File ID of the workbook
6. `MS_EXCEL_TABLE_NAME`: Excel table name inside workbook (for example `Leads`)

Note: Entra Object ID is not used in this flow.

Expected Excel table column order:

1. `CreatedAt`
2. `Source`
3. `Page`
4. `Destination`
5. `TravelDate`
6. `WhatsappNumber`
7. `Email`
8. `TripNotes`

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
