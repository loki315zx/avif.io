import conversionsCount from "@/conversionsCount";
import { formatNumberWithDecimalCommas } from "@/utils";

export default function ConversionsCounter() {
  return (
    <div>
      Already {formatNumberWithDecimalCommas(conversionsCount())} files
      converted, without uploading
    </div>
  );
}
