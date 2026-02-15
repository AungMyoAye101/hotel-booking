import * as z from "zod"

export const bookingSchema = z.object({
    userId: z
        .string("user id is required."),
    roomId: z
        .string("roomId is required."),
    hotelId: z
        .string("HotelId is required."),
    name: z
        .string()
        .min(3, "Name must be contain 3 characters.")
        .optional(),
    email: z
        .email("Inavlid email")
        .transform(v => v.toLocaleLowerCase())
        .optional(),
    city: z
        .string()
        .min(1, "City is required.")
        .optional(),
    country: z
        .string()
        .min(1, "Country is required.")
        .optional(),
    phone: z
        .string()
        .regex(/^\+\d{1,4}\d{6,12}$/, "Invalid phone number")
        .optional(),
    totalPrice: z
        .number("Total price is required")
        .positive(),
    quantity: z.
        number("Quantity is required,")
        .positive(),
    guest: z
        .number("Guest is required")
        .positive(),
    checkIn: z
        .iso.datetime("CheckIn must be valid date string.")
        .optional(),
    checkOut: z
        .iso.datetime("CheckOut must be valid date string.")
        .optional(),
}).refine((data) => {
    if (data.checkIn && data.checkOut) {
        if (data.checkOut > data.checkIn) {
            return {
                message: "Check out must be at least one day after check-in",
                path: ['checkOut']
            }
        }
    }

})

export type createBookingType = z.infer<typeof bookingSchema>