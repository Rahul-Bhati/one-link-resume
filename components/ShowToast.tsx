import { useSonner } from "sonner";

export default function ShowToast({ message, type }: { message: string; type: "success" | "error" | "warning" | "info" }) {
    const { toasts } = useSonner();

    toasts.push({
        title: message,
        type,
        id: Date.now().toString(),
    });

    return null;
}
    