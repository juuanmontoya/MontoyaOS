"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { CheckCircle2 } from "lucide-react";

import { cn } from "@/lib/utils";

type ToastContextValue = {
  showToast: (message: string) => void;
};

const ToastContext = createContext<ToastContextValue | null>(null);

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within ToastProvider");
  }
  return context;
}

type ToastState = {
  message: string;
  visible: boolean;
};

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toast, setToast] = useState<ToastState | null>(null);

  const showToast = useCallback((message: string) => {
    setToast({ message, visible: true });

    window.setTimeout(() => {
      setToast((current) =>
        current ? { ...current, visible: false } : null,
      );
    }, 3200);

    window.setTimeout(() => {
      setToast(null);
    }, 3600);
  }, []);

  const value = useMemo(() => ({ showToast }), [showToast]);

  return (
    <ToastContext.Provider value={value}>
      {children}
      {toast ? (
        <div
          role="status"
          aria-live="polite"
          className={cn(
            "pointer-events-none fixed bottom-8 left-1/2 z-[100] -translate-x-1/2 px-4",
            "transition-all duration-500 ease-out",
            toast.visible
              ? "translate-y-0 opacity-100"
              : "translate-y-3 opacity-0",
          )}
        >
          <div className="flex items-center gap-3 rounded-2xl border border-border/60 bg-background/95 px-5 py-4 shadow-[0_8px_32px_rgba(0,0,0,0.12)] backdrop-blur-xl dark:border-white/[0.08] dark:bg-background/90 dark:shadow-[0_8px_32px_rgba(0,0,0,0.45)]">
            <CheckCircle2
              className="h-5 w-5 shrink-0 text-emerald-600 dark:text-emerald-400"
              strokeWidth={1.75}
            />
            <p className="text-sm font-medium tracking-tight">{toast.message}</p>
          </div>
        </div>
      ) : null}
    </ToastContext.Provider>
  );
}
