import { useToast as useNuxtToast } from "@/components/ui/toast";

export const useToast = () => {
  const toast = useNuxtToast();

  return {
    success: (message: string) => toast.add({ title: message, color: "green" }),
    error: (message: string) => toast.add({ title: message, color: "red" }),
    warning: (message: string) =>
      toast.add({ title: message, color: "yellow" }),
    info: (message: string) => toast.add({ title: message, color: "blue" }),
  };
};
