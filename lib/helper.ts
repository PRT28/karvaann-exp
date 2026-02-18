export function normalizeImageUrl(url: string): string {
  if (!url) return url;

  try {
    const parsedUrl = new URL(url);

    // Check if it's a Google Drive link
    const isGoogleDrive =
      parsedUrl.hostname.includes("drive.google.com");

    if (!isGoogleDrive) return url;

    let fileId: string | null = null;

    // Format 1: /file/d/FILE_ID/view
    const filePathMatch = parsedUrl.pathname.match(/\/file\/d\/([^/]+)/);
    if (filePathMatch) {
      fileId = filePathMatch[1];
    }

    // Format 2: open?id=FILE_ID
    if (!fileId) {
      fileId = parsedUrl.searchParams.get("id");
    }

    if (!fileId) return url;

    // Return direct renderable link
    return `https://drive.google.com/uc?export=view&id=${fileId}`;
  } catch (error) {
    return url; // fallback if invalid URL
  }
}
