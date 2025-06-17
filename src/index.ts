

// index.ts (entry point)
import './services/whatsapp/whatsapp.client';
import { notifyBookingCreated } from './bookings/booking-events';

// Mock trigger for demo
notifyBookingCreated({
  name: 'أحمد',
  activity: 'سباحة',
  date: '2025-06-18',
  phone: '966500000000'
});

console.log('✅ Notification system initialized');
