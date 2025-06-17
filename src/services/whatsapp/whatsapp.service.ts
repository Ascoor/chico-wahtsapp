

// whatsapp/whatsapp.service.ts
import { client } from './whatsapp.client';

export class WhatsAppService {
  async sendMessage(to: string, message: string): Promise<boolean> {
    try {
      const chatId = to.includes('@c.us') ? to : `${to}@c.us`;
      await client.sendMessage(chatId, message);
      return true;
    } catch (err) {
      console.error('WhatsApp message failed:', err);
      return false;
    }
  }
}

export const whatsappService = new WhatsAppService();
