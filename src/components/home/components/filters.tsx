import { Button } from "@/components/ui/button/button";
import { Select } from "@/components/ui/select/select";
import { cn } from "@/components/ui/utils";
import { genderValues, statusValues } from "@/modules/character/character";
import { CharacterGender, CharacterStatus } from "@/modules/character/types";

const Filter = ({
  className,
  label,
  selectedValue,
}: {
  className: string;
  label: "Status" | "Gender";
  selectedValue: string;
}) => {
  const name = label.toLowerCase();
  const options = label === "Status" ? statusValues : genderValues;

  return (
    <div
      className={cn(
        "flex flex-col md:flex-row gap-1 md:gap-3 md:items-center",
        className,
      )}
    >
      <label htmlFor={name}>{label}</label>
      <Select name={name} id={name} className="flex-1">
        {options.map((option) => (
          <Select.Option
            key={option}
            value={option}
            selected={option === selectedValue}
          >
            {option}
          </Select.Option>
        ))}
      </Select>
    </div>
  );
};

export const Filters = ({
  className,
  gender,
  status,
  ...props
}: {
  className?: string;
  gender: CharacterGender;
  status: CharacterStatus;
}) => (
  <form
    action=""
    method="GET"
    className={cn("flex flex-col md:flex-row gap-6", className)}
    {...props}
  >
    <Filter label="Status" selectedValue={status} className="flex-1 ml-1" />
    <Filter label="Gender" selectedValue={gender} className="flex-1" />

    <Button>
      <Button.Icon icon="search" />
      Search
    </Button>
  </form>
);
