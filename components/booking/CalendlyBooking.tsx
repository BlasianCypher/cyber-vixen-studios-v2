"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, X } from "lucide-react";
import {
  PopupModal,
  useCalendlyEventListener,
  type EventScheduledEvent,
} from "react-calendly";

const CALENDLY_URL = "https://calendly.com/cybervixenstudios/30min";

type BookingContextValue = {
  openBooking: () => void;
};

const BookingContext = createContext<BookingContextValue | null>(null);

function trackConsultationBooked(event: EventScheduledEvent) {
  const bookingEvent = {
    event: "consultation_booked",
    calendlyEvent: event.data.payload.event,
    calendlyInvitee: event.data.payload.invitee,
  };

  const analyticsWindow = window as Window & {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  };

  analyticsWindow.dataLayer = analyticsWindow.dataLayer || [];
  analyticsWindow.dataLayer.push(bookingEvent);
  analyticsWindow.gtag?.("event", "consultation_booked", {
    event_category: "booking",
    event_label: "Calendly consultation",
  });
}

export function CalendlyBookingProvider({ children }: { children: React.ReactNode }) {
  const [rootElement, setRootElement] = useState<HTMLElement | null>(null);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);

  useEffect(() => {
    setRootElement(document.body);
  }, []);

  useCalendlyEventListener({
    onEventScheduled: (event) => {
      trackConsultationBooked(event);
      setBookingOpen(false);
      window.setTimeout(() => setSuccessOpen(true), 250);
    },
  });

  const openBooking = useCallback(() => {
    setSuccessOpen(false);
    setBookingOpen(true);
  }, []);

  const value = useMemo(() => ({ openBooking }), [openBooking]);

  return (
    <BookingContext.Provider value={value}>
      {children}
      {rootElement && (
        <PopupModal
          url={CALENDLY_URL}
          rootElement={rootElement}
          open={bookingOpen}
          onModalClose={() => setBookingOpen(false)}
          pageSettings={{
            backgroundColor: "ffffff",
            hideEventTypeDetails: false,
            hideLandingPageDetails: false,
            primaryColor: "8B5CF6",
            textColor: "111111",
          }}
        />
      )}
      <SuccessModal open={successOpen} onClose={() => setSuccessOpen(false)} />
    </BookingContext.Provider>
  );
}

export function CalendlyButton({
  children = "Book Consultation",
  className = "btn-gradient",
  onClick,
}: {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  const context = useContext(BookingContext);

  return (
    <button
      type="button"
      className={className}
      onClick={() => {
        onClick?.();
        context?.openBooking();
      }}
    >
      {children}
    </button>
  );
}

function SuccessModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#111111]/30 px-4 backdrop-blur-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="booking-success-title"
        >
          <motion.div
            className="relative w-full max-w-xl overflow-hidden rounded-[32px] border border-white/70 bg-white/95 p-8 shadow-[0_32px_110px_-38px_rgba(17,17,17,0.55)] backdrop-blur-2xl md:p-10"
            initial={{ opacity: 0, scale: 0.94, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 10 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
          >
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-purple/20 blur-3xl" aria-hidden />
            <div className="pointer-events-none absolute -bottom-20 left-10 h-48 w-48 rounded-full bg-electric-blue/20 blur-3xl" aria-hidden />
            <button
              type="button"
              onClick={onClose}
              className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-black/[0.04] text-gray transition-colors hover:bg-black/[0.07] hover:text-[#111111]"
              aria-label="Close booking success message"
            >
              <X className="h-4 w-4" aria-hidden />
            </button>

            <div className="relative">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-neon-green/15 shadow-[0_0_32px_rgba(57,255,20,0.18)]">
                <CheckCircle2 className="h-7 w-7 text-green-500" aria-hidden />
              </div>
              <h2 id="booking-success-title" className="font-display text-3xl font-semibold tracking-[-0.04em] text-[#111111] md:text-4xl">
                🎉 Consultation Scheduled Successfully
              </h2>
              <div className="mt-5 space-y-4 text-base leading-7 text-gray">
                <p>Thank you for booking a consultation with Cyber Vixen Studios.</p>
                <p>Your appointment has been received and added to our calendar.</p>
                <p>
                  We will send you a consultation preparation email with important information to help you get the most out of our meeting.
                </p>
                <p>
                  We look forward to learning more about your project and helping bring your vision to life.
                </p>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="btn-gradient mt-8"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
