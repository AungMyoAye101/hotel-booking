import * as z from "zod"

export const bookingSchema = z.object({
    userId: z.string("user id is required."),
    roomId: z.string("roomId is required."),
    hotelId: z.string("HotelId is required."),
    totalPrice: z.number("Total price is required").positive(),
    quantity: z.number("Quantity is required,").positive(),
    status: z.enum(["PENDING", "CONFIRMED", "STAYED", "CANCELLED", "EXPIRED"]).default("PENDING").optional(),
    checkIn: z.coerce.date().refine((date) => {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        return date >= today;
    }, "Check-in cannot be in the past."),
    checkOut: z.coerce.date()
}).refine((date) => date.checkOut <= date.checkIn, {
    message: "Check out must be at least one day after check-in",
    path: ['checkOut']
})

export type createBookingType = z.infer<typeof bookingSchema>