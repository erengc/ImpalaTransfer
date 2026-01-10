'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface DateTimePickerProps {
  value: { date: string; time: string } | null;
  onChange: (date: string, time: string) => void;
  label?: string;
  minDate?: string;
  required?: boolean;
}

export default function DateTimePicker({
  value,
  onChange,
  label,
  minDate,
  required = false,
}: DateTimePickerProps) {
  const [selectedDate, setSelectedDate] = useState(value?.date || '');
  const [selectedHour, setSelectedHour] = useState('');
  const [selectedMinute, setSelectedMinute] = useState('');
  const [showHourPicker, setShowHourPicker] = useState(false);
  const [showMinutePicker, setShowMinutePicker] = useState(false);

  const today = new Date();
  const minDateValue = minDate || today.toISOString().split('T')[0];

  // Saatler (00-23)
  const hours = Array.from({ length: 24 }, (_, i) => 
    i.toString().padStart(2, '0')
  );

  // Dakikalar (00, 15, 30, 45)
  const minutes = ['00', '15', '30', '45'];

  // İlk yüklemede time'ı parse et
  useEffect(() => {
    if (value?.time) {
      const [h, m] = value.time.split(':');
      setSelectedHour(h);
      setSelectedMinute(m);
    }
  }, [value?.time]);

  // Saat ve dakika değiştiğinde parent'a bildir
  useEffect(() => {
    if (selectedDate && selectedHour && selectedMinute) {
      onChange(selectedDate, `${selectedHour}:${selectedMinute}`);
    }
  }, [selectedDate, selectedHour, selectedMinute]);

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(e.target.value);
  };

  const handleHourSelect = (hour: string) => {
    setSelectedHour(hour);
    setShowHourPicker(false);
    // Saat seçilince dakika dropdown'unu otomatik aç
    setTimeout(() => setShowMinutePicker(true), 100);
  };

  const handleMinuteSelect = (minute: string) => {
    setSelectedMinute(minute);
    setShowMinutePicker(false);
  };

  const formatTime = () => {
    if (selectedHour && selectedMinute) {
      return `${selectedHour}:${selectedMinute}`;
    }
    return 'Saat seçin';
  };

  return (
    <div className="relative group">
      {label && (
        <label className="absolute -top-2 left-4 bg-white px-2 text-xs font-bold text-crimson-600 z-10">
          {label}
        </label>
      )}

      <div className="grid grid-cols-2 gap-2">
  {/* SAAT & DAKİKA */}
  <div className="grid grid-cols-2 gap-2 relative">
    {/* SAAT BUTONU */}
    <button
      type="button"
      onClick={() => {
        setShowHourPicker(!showHourPicker);
        setShowMinutePicker(false);
      }}
      className={`px-3 py-4 bg-white border-2 rounded-2xl 
                 text-gray-900 font-semibold transition text-sm md:text-base outline-none
                 flex items-center justify-center
                 ${showHourPicker 
                   ? 'border-crimson-500 ring-4 ring-crimson-100' 
                   : 'border-cream-300 hover:border-cream-400'}`}
    >
      <span className={selectedHour ? 'text-gray-900' : 'text-gray-400'}>
        {selectedHour || '--'}
      </span>
    </button>

    {/* DAKİKA BUTONU */}
    <button
      type="button"
      onClick={() => {
        setShowMinutePicker(!showMinutePicker);
        setShowHourPicker(false);
      }}
      disabled={!selectedHour}
      className={`px-3 py-4 bg-white border-2 rounded-2xl 
                 text-gray-900 font-semibold transition text-sm md:text-base outline-none
                 flex items-center justify-center
                 ${!selectedHour 
                   ? 'opacity-50 cursor-not-allowed border-cream-300'
                   : showMinutePicker 
                     ? 'border-crimson-500 ring-4 ring-crimson-100' 
                     : 'border-cream-300 hover:border-cream-400'
                 }`}
    >
      <span className={selectedMinute ? 'text-gray-900' : 'text-gray-400'}>
        {selectedMinute || '--'}
      </span>
    </button>

    {/* SAAT DROPDOWN - YUKARI AÇILIR */}
    <AnimatePresence>
      {showHourPicker && (
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="absolute bottom-full left-0 mb-2 bg-white rounded-2xl shadow-2xl 
                   border-2 border-cream-300 z-[60] 
                   w-[280px] max-h-64 overflow-y-auto"
        >
          <div className="grid grid-cols-4 gap-2 p-3">
            {hours.map((hour) => (
              <button
                key={hour}
                type="button"
                onClick={() => handleHourSelect(hour)}
                className={`px-3 py-3 rounded-lg text-sm font-bold transition-all
                         ${selectedHour === hour
                           ? 'bg-crimson-500 text-white shadow-lg scale-105'
                           : 'bg-cream-100 text-gray-700 hover:bg-crimson-100 hover:text-crimson-600'
                         }`}
              >
                {hour}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>

    {/* DAKİKA DROPDOWN - YUKARI AÇILIR */}
    <AnimatePresence>
      {showMinutePicker && selectedHour && (
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="absolute bottom-full right-0 mb-2 bg-white rounded-2xl shadow-2xl 
                   border-2 border-cream-300 z-[60] 
                   w-52"
        >
          <div className="grid grid-cols-2 gap-2.5 p-3">
            {minutes.map((minute) => (
              <button
                key={minute}
                type="button"
                onClick={() => handleMinuteSelect(minute)}
                className={`px-5 py-4 rounded-lg text-base font-bold transition-all
                         ${selectedMinute === minute
                           ? 'bg-crimson-500 text-white shadow-lg'
                           : 'bg-cream-100 text-gray-700 hover:bg-crimson-100 hover:text-crimson-600'
                         }`}
              >
                :{minute}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>

  {/* TARİH (Şimdi sağda) */}
  <input
    type="date"
    value={selectedDate}
    onChange={handleDateChange}
    min={minDateValue}
    required={required}
    className="w-full px-4 py-4 bg-white border-2 border-cream-300 rounded-2xl 
             text-gray-900 font-semibold focus:border-crimson-500 focus:ring-4 
             focus:ring-crimson-100 transition text-sm md:text-base outline-none cursor-pointer"
  />
</div>

      {/* SEÇILEN ZAMAN (Altında göster) */}
      {selectedDate && selectedHour && selectedMinute && (
        <div className="mt-2 text-center">
          <span className="text-xs font-semibold text-gray-500">
            {selectedHour}:{selectedMinute}
          </span>
        </div>
      )}
    </div>
  );
}