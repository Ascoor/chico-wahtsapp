
// telegram/telegram.service.ts
export class TelegramService {
  constructor(private botToken: string, private chatId: string) {
    this.sendMessage('🤖 تم تفعيل البوت. مرحباً بك في لوحة الإشعارات.');
  }

  async sendMessage(message: string): Promise<boolean> {
    try {
      const res = await fetch(`https://api.telegram.org/bot${this.botToken}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: this.chatId, text: message, parse_mode: 'HTML' })
      });
      return res.ok;
    } catch (err) {
      console.error('Telegram message failed:', err);
      return false;
    }
  }
}
