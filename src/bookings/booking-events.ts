
// bookings/booking-events.ts
import { telegramService } from '../telegram/telegram.service';
import { whatsappService } from '../whatsapp';

export async function notifyBookingCreated(booking: any) {
  const message = `🛎️ <b>حجز جديد:</b>\n<b>الاسم:</b> ${booking.name}\n<b>النشاط:</b> ${booking.activity}\n<b>التاريخ:</b> ${booking.date}`;

  await telegramService.sendMessage(message);
  await whatsappService.sendMessage(booking.phone, `تم حجزك بنجاح: ${booking.activity} في ${booking.date}`);
}