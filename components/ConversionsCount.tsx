import { useEffect, useState } from "react";
import { getConversionsCount } from "../src/conversionsCounter";
import { formatNumberWithDecimalCommas } from "../src/utils";

export default function ConversionsCounter() {
  const [conversionsCount, setConversionsCount] = useState<number>();

  useEffect(() => setConversionsCount(getConversionsCount()), []);

  return (
    <h1>
      {conversionsCount && formatNumberWithDecimalCommas(conversionsCount)}
    </h1>
  );
}
