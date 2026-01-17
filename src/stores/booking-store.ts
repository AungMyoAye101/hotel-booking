import { create } from "zustand";


type stageType = 1 | 2 | 3;

type BookingStore = {
    stage: stageType,
    bookingId: string | null,
    paymentId: string | null,
    isPaid: boolean,

    setStage: (stage: stageType) => void,
    setBookingId: (id: string) => void,
    setPaymentId: (id: string) => void,
    confirmPayment: (status: boolean) => void,
    reset: () => void

}

export const useBookingStore = create<BookingStore>((set) => ({
    stage: 1,
    bookingId: null,
    paymentId: null,
    isPaid: false,

    setStage: (stage: stageType) => set({ stage }),
    setBookingId: (id: string) => set({ bookingId: id }),
    setPaymentId: (id: string) => set({ paymentId: id }),
    confirmPayment: (status: boolean) => set({ isPaid: true }),
    reset: () => set({
        stage: 1,
        bookingId: null,
        paymentId: null,
        isPaid: false,
    })
}))