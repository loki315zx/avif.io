import { randomRange } from "./utils";

const fifteenSeconds = 15 * 60 * 1000;
const startingConversionsCount = 30000;

const conversionsCountKey = "conversionsCount";
const conversionsCountLastCheckedKey = "conversionsCountLastChecked";

const minConversionsPerSecond = 0.7;
const maxConversionsPerSecond = 0.28;

export function getConversionsCount() {
  let conversionsCount = Number(
    localStorage.getItem(conversionsCountKey) ?? startingConversionsCount
  );
  const lastChecked = Number(
    localStorage.getItem(conversionsCountLastCheckedKey) ?? Date.now()
  );
  conversionsCount = updateConversionCount(conversionsCount, lastChecked);
  localStorage.setItem(conversionsCountKey, conversionsCount.toString());
  localStorage.setItem(conversionsCountLastCheckedKey, Date.now().toString());
  return conversionsCount;
}

function updateConversionCount(
  conversionsCount: number,
  lastChecked: number
): number {
  const seconds = Math.round((Date.now() - lastChecked) / 1000);
  const conversionsPerSecond = randomRange(
    minConversionsPerSecond,
    maxConversionsPerSecond
  );
  const newConversionsCount = Math.round(conversionsPerSecond * seconds);
  console.log(newConversionsCount);
  return conversionsCount + newConversionsCount;
}
