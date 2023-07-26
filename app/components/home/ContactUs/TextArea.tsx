import { motion } from "framer-motion";
import { useState } from "react";

interface InputProps {
  label: string;
  name: string;
  value: string;
  setValue: (value: string) => void;
}

export default function Input({ label, name, value, setValue }: InputProps) {
  const [focused, setFocused] = useState(false);

  return (
    <div className='flex flex-col'>
      <motion.label
        className='h-16 max-w-fit inline-flex items-center pl-7 -mb-16 relative z-4 pointer-events-none text-2xl'
        initial={{
          x: 0,
          y: 0,
          fontSize: "24px",
          color: "var(--text-2)",
        }}
        animate={{
          y: focused || value ? -21 : 0,
          fontSize: focused || value ? "16px" : "24px",
          color: focused || value ? "var(--accent-cyan)" : "var(--text-2)",
        }}
        htmlFor={name}
      >
        {label}
      </motion.label>
      <textarea
        onChange={(e) => {
          setValue(e.target.value);
        }}
        name={name}
        value={value}
        className='text-2xl outline-2 outline-black1 outline rounded-[10px] pb-3 pt-5 pl-7 pr-4 max-w-[879px]'
        onFocus={() => {
          setFocused(true);
        }}
        onBlur={() => {
          setFocused(false);
        }}
      />
    </div>
  );
}
