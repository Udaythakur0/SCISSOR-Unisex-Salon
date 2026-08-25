import React, { useState } from 'react';
import { X, Calendar, Clock, User, Phone, CheckCircle2, MessageSquare, Sparkles, Scissors, FileDown, Check } from 'lucide-react';
import { BEAUTY_SERVICES, MEN_SERVICES, SALON_INFO, ServiceItem } from '../data/salonData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preSelectedService?: ServiceItem | null;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preSelectedService,
}) => {
  const allServices = [...BEAUTY_SERVICES, ...MEN_SERVICES];

  const [selectedServices, setSelectedServices] = useState<string[]>(
    preSelectedService ? [preSelectedService.id] : ['haircuts']
  );
  const [selectedDate, setSelectedDate] = useState<string>(() => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  });
  const [selectedTime, setSelectedTime] = useState<string>('11:00 AM');
  const [selectedStylist, setSelectedStylist] = useState<string>('Any Expert Stylist');
  const [customerName, setCustomerName] = useState<string>('');
  const [customerPhone, setCustomerPhone] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  const [bookingConfirmed, setBookingConfirmed] = useState<boolean>(false);
  const [appointmentId, setAppointmentId] = useState<string>('');

  if (!isOpen) return null;

  const timeSlots = [
    '07:30 AM', '08:30 AM', '09:30 AM', '10:30 AM', '11:30 AM',
    '12:30 PM', '01:30 PM', '02:30 PM', '03:30 PM', '04:30 PM',
    '05:30 PM', '06:30 PM', '07:30 PM'
  ];

  const toggleService = (id: string) => {
    setSelectedServices(prev =>
      prev.includes(id) ? (prev.length > 1 ? prev.filter(s => s !== id) : prev) : [...prev, id]
    );
  };

  const chosenServicesList = allServices.filter(s => selectedServices.includes(s.id));

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomId = 'SCI-' + Math.floor(100000 + Math.random() * 900000);
    setAppointmentId(randomId);
    setBookingConfirmed(true);
  };

  const handleWhatsAppBooking = () => {
    const serviceNames = chosenServicesList.map(s => s.name).join(', ');
    const msg = `*Appointment Request - SCISSOR Unisex Salon*\n\n` +
      `👤 *Name:* ${customerName || 'Valued Client'}\n` +
      `📞 *Phone:* ${customerPhone || 'Not provided'}\n` +
      `✂️ *Services:* ${serviceNames}\n` +
      `📅 *Date:* ${selectedDate}\n` +
      `⏰ *Time Slot:* ${selectedTime}\n` +
      `💈 *Stylist:* ${selectedStylist}\n` +
      (notes ? `📝 *Notes:* ${notes}\n` : '') +
      `\nPlease confirm my slot booking. Thank you!`;

    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/${SALON_INFO.whatsapp}?text=${encoded}`, '_blank');
  };

  const handleReset = () => {
    setBookingConfirmed(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div
        className="relative w-full max-w-2xl max-h-[92vh] flex flex-col bg-[#141418] border border-neutral-800 rounded-2xl shadow-2xl overflow-hidden text-neutral-100"
        id="booking-modal-container"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-neutral-800 bg-[#19191e]">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#B91C1C]/20 border border-[#B91C1C]/50 flex items-center justify-center">
              <Calendar className="w-4 h-4 text-[#B91C1C]" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold font-display text-white">
                Book Your Salon Appointment
              </h3>
              <p className="text-[11px] text-neutral-400">
                SCISSOR Unisex Salon • Kasia, Kushinagar
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-neutral-800/80 hover:bg-neutral-700 text-neutral-300 hover:text-white flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-6">
          {!bookingConfirmed ? (
            <form onSubmit={handleBookingSubmit} className="space-y-6">
              
              {/* Step 1: Select Services */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#dfb776] mb-2.5">
                  1. Select Services
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-2.5">
                  {allServices.map(service => {
                    const isSelected = selectedServices.includes(service.id);
                    return (
                      <button
                        type="button"
                        key={service.id}
                        onClick={() => toggleService(service.id)}
                        className={`flex items-start justify-between p-2.5 rounded-lg border text-left text-xs transition-all ${
                          isSelected
                            ? 'bg-[#B91C1C]/15 border-[#B91C1C] text-white shadow-sm'
                            : 'bg-[#1a1a20] border-neutral-800/90 text-neutral-300 hover:border-neutral-700'
                        }`}
                      >
                        <div className="flex-1 min-w-0 pr-1">
                          <span className="font-semibold block truncate">{service.name}</span>
                          <span className="text-[10px] text-neutral-400 block">{service.duration}</span>
                        </div>
                        <div className={`w-4 h-4 rounded flex items-center justify-center shrink-0 mt-0.5 ${
                          isSelected ? 'bg-[#B91C1C] text-white' : 'border border-neutral-700'
                        }`}>
                          {isSelected && <Check className="w-3 h-3" />}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Date & Time Picker */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#dfb776] mb-2">
                    2. Select Date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      value={selectedDate}
                      min={new Date().toISOString().split('T')[0]}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      required
                      className="w-full bg-[#1b1b22] border border-neutral-700 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-[#dfb776]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#dfb776] mb-2">
                    3. Time Slot
                  </label>
                  <select
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    className="w-full bg-[#1b1b22] border border-neutral-700 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-[#dfb776]"
                  >
                    {timeSlots.map(slot => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Step 3: Stylist Preference */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#dfb776] mb-2">
                  4. Stylist Preference
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {['Any Expert Stylist', 'Senior Hair Stylist', 'Skin & Cosmetologist'].map(stylist => (
                    <button
                      type="button"
                      key={stylist}
                      onClick={() => setSelectedStylist(stylist)}
                      className={`px-3 py-2 rounded-lg border text-xs font-medium text-center transition-all ${
                        selectedStylist === stylist
                          ? 'bg-[#dfb776]/15 border-[#dfb776] text-[#dfb776]'
                          : 'bg-[#1a1a20] border-neutral-800 text-neutral-400 hover:text-neutral-200'
                      }`}
                    >
                      {stylist}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 4: Contact Details */}
              <div className="space-y-3 pt-2 border-t border-neutral-800">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#dfb776]">
                  5. Client Information
                </label>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Full Name *"
                      required
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full bg-[#1b1b22] border border-neutral-700 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#dfb776]"
                    />
                  </div>

                  <div>
                    <input
                      type="tel"
                      placeholder="Phone Number (e.g. 9876543210) *"
                      required
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      className="w-full bg-[#1b1b22] border border-neutral-700 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#dfb776]"
                    />
                  </div>
                </div>

                <input
                  type="text"
                  placeholder="Special requests or hair/skin notes (optional)"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full bg-[#1b1b22] border border-neutral-700 rounded-lg px-3.5 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#dfb776]"
                />
              </div>

              {/* Summary Bar & Action Buttons */}
              <div className="pt-2 border-t border-neutral-800 space-y-3">
                <div className="bg-[#191920] p-3 rounded-lg flex items-center justify-between text-xs">
                  <div className="text-neutral-300">
                    <span className="font-semibold text-white">{chosenServicesList.length} Service(s)</span>
                    <span className="text-neutral-400 block text-[11px]">
                      {chosenServicesList.map(s => s.name).join(', ')}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-neutral-400 block text-[10px]">Estimated Date & Time</span>
                    <span className="text-[#dfb776] font-semibold">{selectedDate} @ {selectedTime}</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#B91C1C] hover:bg-[#a01818] text-white text-xs sm:text-sm font-bold py-3 px-4 rounded-lg shadow-lg cursor-pointer"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>CONFIRM APPOINTMENT</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppBooking}
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#128C7E] hover:bg-[#075E54] text-white text-xs sm:text-sm font-bold py-3 px-4 rounded-lg shadow-lg cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>BOOK VIA WHATSAPP</span>
                  </button>
                </div>
              </div>

            </form>
          ) : (
            /* Confirmation Screen / Digital Ticket */
            <div className="py-4 text-center space-y-6 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/50 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <h3 className="text-2xl font-bold font-display text-white">
                  Appointment Confirmed!
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 mt-1">
                  Thank you, <span className="font-semibold text-white">{customerName || 'Client'}</span>. Your appointment has been booked.
                </p>
              </div>

              {/* Digital Pass / Ticket */}
              <div className="bg-[#1c1c24] border border-[#dfb776]/40 rounded-xl p-5 text-left max-w-md mx-auto shadow-xl space-y-3 relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-[#B91C1C] text-white text-[9px] font-bold px-3 py-1 rounded-bl-lg">
                  CONFIRMED
                </div>

                <div className="border-b border-neutral-700/60 pb-3">
                  <span className="text-[10px] tracking-widest uppercase text-[#dfb776] font-bold block">
                    BOOKING ID: {appointmentId}
                  </span>
                  <h4 className="font-bold text-white text-base">SCISSOR UNISEX SALON</h4>
                  <p className="text-xs text-neutral-400">{SALON_INFO.address}</p>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <span className="text-neutral-400 block text-[10px]">Date</span>
                    <span className="font-semibold text-white">{selectedDate}</span>
                  </div>
                  <div>
                    <span className="text-neutral-400 block text-[10px]">Time Slot</span>
                    <span className="font-semibold text-[#dfb776]">{selectedTime}</span>
                  </div>
                  <div className="col-span-2">
                    <span className="text-neutral-400 block text-[10px]">Selected Services</span>
                    <span className="font-medium text-neutral-200">
                      {chosenServicesList.map(s => s.name).join(' • ')}
                    </span>
                  </div>
                </div>

                <div className="pt-2 border-t border-neutral-700/60 flex items-center justify-between text-[11px] text-neutral-400">
                  <span>Helpline: {SALON_INFO.phone}</span>
                  <span>Sunday Open</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
                <button
                  type="button"
                  onClick={handleWhatsAppBooking}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-black font-bold text-xs py-3 px-4 rounded-lg"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Details to WhatsApp</span>
                </button>

                <button
                  type="button"
                  onClick={handleReset}
                  className="w-full inline-flex items-center justify-center gap-2 bg-neutral-800 hover:bg-neutral-700 text-white font-semibold text-xs py-3 px-4 rounded-lg"
                >
                  <span>Close Window</span>
                </button>
              </div>

            </div>
          )}
        </div>

      </div>
    </div>
  );
};
