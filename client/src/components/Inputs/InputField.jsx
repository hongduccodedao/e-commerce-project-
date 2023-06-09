import React, {memo} from "react";

const InputField = ({
  value,
  setValue,
  nameKey,
  type,
  invalidFields,
  setInvalidFields,
  placeholder,
  isHideLabel,
}) => {
  const [focus, setFocus] = React.useState(false);
  return (
    <div>
      <div className="w-full relative">
        {!isHideLabel && (
          <label
            className={` bg-white absolute text-xs -top-2 left-4 px-1 ${
              focus ? "text-primary" : "text-gray-400"
            } `}
          >
            {nameKey.charAt(0).toUpperCase() + nameKey.slice(1)}
          </label>
        )}
        <input
          type={type || "text"}
          className="px-4 py-2 rounded-md outline-none w-full border border-gray-300 focus:border-primary focus:ring-0"
          placeholder={placeholder}
          value={value}
          onChange={(e) =>
            setValue((prev) => ({ ...prev, [nameKey]: e.target.value }))
          }
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
        />
      </div>
      {!focus && invalidFields?.some((item) => item.name === nameKey) && (
        <small className="text-primary">
          {invalidFields.find((item) => item.name === nameKey).message ||
            "Error"}
        </small>
      )}
    </div>
  );
};

export default memo(InputField);
