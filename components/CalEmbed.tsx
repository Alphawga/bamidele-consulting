"use client";

import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";
import Cal from "@calcom/embed-react";

export default function CalEmbed({ calLink }: { calLink: string }) {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi({});
      cal("ui", {
        theme: "light",
        cssVarsPerTheme: {
          light: { "cal-brand": "#C2611B" },
          dark: { "cal-brand": "#C2611B" },
        },
        hideEventTypeDetails: false,
      });
    })();
  }, []);

  if (!calLink) {
    return (
      <div className="rounded-md border border-dashed border-line p-10 text-center">
        <p className="label">Booking</p>
        <p className="mt-3 text-muted">
          [TO FILL: set NEXT_PUBLIC_CAL_LINK to your Cal.com link to show the live calendar.]
        </p>
      </div>
    );
  }

  return (
    <Cal
      calLink={calLink}
      style={{ width: "100%", height: "100%", overflow: "scroll" }}
      config={{ layout: "month_view" }}
    />
  );
}
