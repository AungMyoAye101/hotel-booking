
import { z } from "zod";

export const paymentSchema = z.discriminatedUnion("method", [
    z.object({
        method: z.literal("CARD"),
        cardNumber: z.string().regex(/^\d{16}$/),
        expiry: z.string().regex(/^(0[1-9]|1[0-2])\/\d{2}$/),
        cvc: z.string().regex(/^\d{3,4}$/),
    }),

    z.object({
        method: z.literal("MOBILE_BANKING"),
        provider: z.string().min(1),
    }),

    z.object({
        method: z.literal("BANK"),
        name: z.string().min(1),
        cardNumber: z.string().regex(/^\d{16}$/),

    })
]);

export type PaymentInput = z.infer<typeof paymentSchema>;
