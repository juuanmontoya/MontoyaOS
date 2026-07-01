"use client";

import { createClient } from "@/lib/supabase/client";
import { useEffect, useState } from "react";

import { CurrencyInput } from "@/components/expenses/currency-input";
import {
  EXPENSE_CATEGORIES,
  PAYMENT_METHODS,
  type ExpenseCategory,
  type PaymentMethod,
} from "@/components/expenses/constants";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/toast-provider";
import { cn } from "@/lib/utils";

type IncomeModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

type FormErrors = {
  amount?: string;
  category?: string;
};

const initialFormState = {
  amount: 0,
  category: "" as ExpenseCategory | "",
  paymentMethod: "Efectivo" as PaymentMethod,
  description: "",
};

const CATEGORY_IDS: Record<string, string> = {
  "Alimentación": "0e46a1bc-e319-4cb2-8885-120d73c515f3",
  Familia: "323eba62-80e4-4ded-b43d-5c260e9c1b1d",
  Viajes: "39ae39c1-19b0-41c3-95e8-adeb6ee95758",
  Personal: "3b07f8e2-c28e-4659-a57d-c363a467c432",
  Iglesia: "6bb8a72e-364d-4fe9-ba8f-faca8a96f72c",
  Trabajo: "7f732ce6-2355-47eb-9ba5-9090ecb38d24",
  Otros: "8b6eda7d-cfcd-440b-8a09-b8f5c40efd0a",
  Hogar: "c63cccfc-39d8-49ea-a85b-de217a38fbcf",
  Regalos: "f5c11d88-a44c-4b65-a744-7023500d9476",
  Transporte: "fb4462ca-e0d2-4be0-94f5-cb50c796b5b9",
};

const ACCOUNT_ID = "f44fa376-074a-4cef-9c64-8bafb04a6f4a";

export function IncomeModal({ open, onOpenChange }: IncomeModalProps) {
  const { showToast } = useToast();
  const [form, setForm] = useState(initialFormState);
  const [errors, setErrors] = useState<FormErrors>({});

  useEffect(() => {
    if (!open) {
      setForm(initialFormState);
      setErrors({});
    }
  }, [open]);

  function validate(): FormErrors {
    const nextErrors: FormErrors = {};

    if (!form.amount || form.amount <= 0) {
      nextErrors.amount = "Ingresa un valor válido.";
    }

    if (!form.category) {
      nextErrors.category = "Selecciona una categoría.";
    }

    return nextErrors;
  }

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
      console.log("🚀 Entró a handleSubmit");
    
      event.preventDefault();
    
      const nextErrors = validate();
      setErrors(nextErrors);
    
      if (Object.keys(nextErrors).length > 0) {
        return;
      }
    
      const supabase = createClient();
    
      const result = await supabase
        .from("transactions")
        .insert({
          type: "income",
          amount: form.amount,
          category_id: CATEGORY_IDS[form.category],
          account_id: ACCOUNT_ID,
          description: form.description,
          transaction_date: new Date().toISOString(),
        })
        .select();
    
      console.log("RESULTADO:", result);
    
      if (result.error) {
        console.error(result.error);
        showToast(result.error.message);
        return;
      }
    
      console.log("✅ Transacción guardada:", result.data);
    
      onOpenChange(false);
      showToast("Ingreso registrado correctamente.");
    }
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-[480px]">
        <DialogHeader className="px-8 pt-8">
        <DialogTitle>Registrar ingreso</DialogTitle>
        <DialogDescription>¿Qué ingreso recibiste?</DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 px-8 py-6">
          <div className="space-y-2">
            <Label htmlFor="expense-amount">Valor</Label>
            <CurrencyInput
              id="expense-amount"
              value={form.amount}
              onValueChange={(amount) => {
                setForm((current) => ({ ...current, amount }));
                if (errors.amount) {
                  setErrors((current) => ({ ...current, amount: undefined }));
                }
              }}
              aria-invalid={Boolean(errors.amount)}
              className={cn(errors.amount && "border-destructive ring-destructive")}
            />
            {errors.amount ? (
              <p className="text-sm text-destructive">{errors.amount}</p>
            ) : null}
          </div>

          <div className="space-y-2">
            <Label htmlFor="expense-category">Categoría</Label>
            <Select
              value={form.category}
              onValueChange={(category: ExpenseCategory) => {
                setForm((current) => ({ ...current, category }));
                if (errors.category) {
                  setErrors((current) => ({ ...current, category: undefined }));
                }
              }}
            >
              <SelectTrigger
                id="expense-category"
                aria-invalid={Boolean(errors.category)}
                className={cn(
                  errors.category && "border-destructive ring-destructive",
                )}
              >
                <SelectValue placeholder="Selecciona una categoría" />
              </SelectTrigger>
              <SelectContent>
                {EXPENSE_CATEGORIES.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.category ? (
              <p className="text-sm text-destructive">{errors.category}</p>
            ) : null}
          </div>

          <div className="space-y-2">
            <Label htmlFor="expense-payment">Método de pago</Label>
            <Select
              value={form.paymentMethod}
              onValueChange={(paymentMethod: PaymentMethod) =>
                setForm((current) => ({ ...current, paymentMethod }))
              }
            >
              <SelectTrigger id="expense-payment">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {PAYMENT_METHODS.map((method) => (
                  <SelectItem key={method} value={method}>
                    {method}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="expense-description">
              Descripción{" "}
              <span className="font-normal text-muted-foreground">
                (opcional)
              </span>
            </Label>
            <Textarea
              id="expense-description"
              value={form.description}
              onChange={(event) =>
                setForm((current) => ({
                  ...current,
                  description: event.target.value,
                }))
              }
              placeholder="Ej. Almuerzo en el centro"
            />
          </div>

          <DialogFooter className="px-0 pb-0 pt-2 sm:justify-between">
            <Button
              type="button"
              variant="ghost"
              className="rounded-xl px-6"
              onClick={() => onOpenChange(false)}
            >
              Cancelar
            </Button>
            <Button type="submit" className="rounded-xl px-6">
            Guardar ingreso
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
