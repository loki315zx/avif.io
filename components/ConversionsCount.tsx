import { useEffect, useState } from "react";
import { getConversionsCount } from "../src/conversionCounter";

export default function ConversionsCounter() {
  const [conversionsCount, setConversionsCount] = useState<number>();

  useEffect(() => setConversionsCount(getConversionsCount()), []);

  return <h2>{conversionsCount}</h2>;
}
