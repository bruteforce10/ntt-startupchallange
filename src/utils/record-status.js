const THREE_DAYS_MS = 3 * 24 * 60 * 60 * 1000;

export function getRecordStatus(row) {
  if (!row?.created || !row?.updated) return "";

  const created = new Date(row.created).getTime();
  const updated = new Date(row.updated).getTime();
  const now = Date.now();

  const isModified = updated - created > 1000;

  if (!isModified && now - created < THREE_DAYS_MS) return "new";
  if (isModified && now - updated < THREE_DAYS_MS) return "updated";
  return "";
}

export function formatUpdatedDate(value) {
  if (!value) return "";
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}
