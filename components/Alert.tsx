// components/Alert.tsx
import { cva, type VariantProps } from "class-variance-authority";

const alertVariants = cva(
  "p-4 rounded-md mb-4 text-sm font-medium",
  {
    variants: {
      variant: {
        success: "bg-green-100 text-green-800 border border-green-300",
        error: "bg-red-100 text-red-800 border border-red-300",
      },
    },
    defaultVariants: {
      variant: "success",
    },
  },
);

interface AlertProps extends VariantProps<typeof alertVariants> {
  message: string;
}

export default function Alert({ message, variant }: AlertProps) {
  return <div className={alertVariants({ variant })}>{message}</div>;
}