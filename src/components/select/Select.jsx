import React from "react";
import { default as ReactSelect } from "react-select";

export const Select = ({
  options,
  name,
  className,
  label,
  placeholder,
  isClearable = true,
  onChange,
  components,
}) => {
  return (
    <ReactSelect
      options={options}
      name={name}
      className={className}
      label={label}
      placeholder={placeholder}
      isClearable={isClearable}
      onChange={(item) => onChange(item?.value)}
      classNamePrefix={"react-select"}
      components={components}
    />
  );
};
