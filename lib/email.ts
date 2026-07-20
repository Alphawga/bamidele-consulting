function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

type EmailRow = { label: string; value: string };

type BadgeTone = "oxblood" | "forest" | "gold";

const TONE_COLORS: Record<BadgeTone, string> = {
  oxblood: "#8e2c48",
  forest: "#2e4a3b",
  gold: "#a3782a",
};

type NotificationEmailOptions = {
  eyebrow: string;
  title: string;
  badge?: { label: string; value: string; tone?: BadgeTone };
  rows: EmailRow[];
  longRows?: EmailRow[];
  footerNote?: string;
};

export function buildNotificationEmail({
  eyebrow,
  title,
  badge,
  rows,
  longRows,
  footerNote,
}: NotificationEmailOptions): string {
  const toneColor = TONE_COLORS[badge?.tone ?? "oxblood"];

  const rowsHtml = rows
    .map(
      (row) => `
        <tr>
          <td style="padding:10px 0;border-bottom:1px solid #e4dcc8;font-family:Georgia,'Times New Roman',serif;font-size:13px;color:#7d7361;width:150px;vertical-align:top;">${escapeHtml(row.label)}</td>
          <td style="padding:10px 0;border-bottom:1px solid #e4dcc8;font-family:'SFMono-Regular',Consolas,Menlo,monospace;font-size:14px;color:#1c1916;vertical-align:top;">${escapeHtml(row.value)}</td>
        </tr>`
    )
    .join("");

  const longRowsHtml =
    longRows && longRows.length
      ? `
      <tr>
        <td colspan="2" style="padding:24px 0 8px;">
          <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:12px;letter-spacing:0.08em;text-transform:uppercase;color:#a3782a;">Answers</p>
        </td>
      </tr>
      ${longRows
        .map(
          (row) => `
      <tr>
        <td colspan="2" style="padding:10px 0;border-bottom:1px solid #e4dcc8;">
          <p style="margin:0 0 4px;font-family:Arial,Helvetica,sans-serif;font-size:13px;color:#463f33;font-weight:bold;">${escapeHtml(row.label)}</p>
          <p style="margin:0;font-family:'SFMono-Regular',Consolas,Menlo,monospace;font-size:14px;color:#1c1916;">${escapeHtml(row.value)}</p>
        </td>
      </tr>`
        )
        .join("")}`
      : "";

  const badgeHtml = badge
    ? `
      <tr>
        <td colspan="2" style="padding:0 0 24px;">
          <table role="presentation" cellpadding="0" cellspacing="0" style="border:1px solid ${toneColor};background:#faf7ef;">
            <tr>
              <td style="padding:12px 18px;">
                <p style="margin:0 0 2px;font-family:Arial,Helvetica,sans-serif;font-size:11px;letter-spacing:0.08em;text-transform:uppercase;color:${toneColor};">${escapeHtml(badge.label)}</p>
                <p style="margin:0;font-family:'SFMono-Regular',Consolas,Menlo,monospace;font-size:20px;color:#1c1916;">${escapeHtml(badge.value)}</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>`
    : "";

  return `<!doctype html>
<html>
  <body style="margin:0;padding:0;background:#e4dcc8;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#e4dcc8;padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#faf7ef;">
            <tr><td style="height:8px;background:#8e2c48;font-size:0;line-height:0;">&nbsp;</td></tr>
            <tr><td style="height:4px;background:#c79a3b;font-size:0;line-height:0;">&nbsp;</td></tr>
            <tr><td style="height:4px;background:#2e4a3b;font-size:0;line-height:0;">&nbsp;</td></tr>
            <tr>
              <td style="padding:32px 32px 8px;">
                <p style="margin:0 0 8px;font-family:Arial,Helvetica,sans-serif;font-size:12px;letter-spacing:0.1em;text-transform:uppercase;color:#7d7361;">${escapeHtml(eyebrow)}</p>
                <h1 style="margin:0 0 24px;font-family:Georgia,'Times New Roman',serif;font-size:24px;color:#1c1916;">${escapeHtml(title)}</h1>
              </td>
            </tr>
            <tr>
              <td style="padding:0 32px 32px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  ${badgeHtml}
                  ${rowsHtml}
                  ${longRowsHtml}
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:16px 32px;background:#f2ecdf;border-top:1px solid #ddd4bf;">
                <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:11px;color:#9a8f7c;">${escapeHtml(footerNote ?? "alphawga.com")}</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}
