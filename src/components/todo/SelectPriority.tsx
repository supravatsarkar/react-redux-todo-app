/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
type TSelectPriorityProps = {
  id: string;
  handleSelectPriority: any;
  defaultValue: string;
};

export default function SelectPriority({
  id,
  handleSelectPriority,
  defaultValue,
}: TSelectPriorityProps) {
  return (
    <Select
      onValueChange={(value) => handleSelectPriority(value)}
      defaultValue={defaultValue}
    >
      <SelectTrigger id={id} className="w-[180px]">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="Low">Low</SelectItem>
        <SelectItem value="Medium">Medium</SelectItem>
        <SelectItem value="High">High</SelectItem>
      </SelectContent>
    </Select>
  );
}
