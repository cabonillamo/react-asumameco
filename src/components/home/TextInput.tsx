import { forwardRef } from "react";

interface TextInputProps {
  type?: string;
  placeholder?: string;
  styles?: string;
  label?: string;
  labelStyles?: string;
  register?: any;
  name?: string;
  error?: any;
}

const TextInput = forwardRef(
  (
    {
      type,
      placeholder,
      styles,
      label,
      labelStyles,
      register,
      name,
      error,
    }: TextInputProps,
    ref
  ) => {
    return (
      <div className="w-full flex flex-col mt-2">
        {label && (
          <p className={`text-ascent-2 text-sm mb-2 ${labelStyles}`}>{label}</p>
        )}

        <div>
          <input
            type={type}
            name={name}
            placeholder={placeholder}
            ref={ref}
            className={`bg-secondary rounded border border-[#66666690] outline-none text-sm text-ascent-1 px-4 py-3 placeholder:text-[#66666690] ${styles}
            `}
            {...register}
            aria-invalid={error ? "true" : "false"}
          />
        </div>
        <span className="text-sm text-[#f64949fe] mt-0.5">{error}</span>
      </div>
    );
  }
);

export default TextInput;
