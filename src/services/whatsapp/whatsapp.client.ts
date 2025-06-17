
// whatsapp/whatsapp.client.ts
import { Client, LocalAuth } from 'whatsapp-web.js';
import qrcode from 'qrcode-terminal';
import { telegramService } from '../telegram';

const client = new Client({
  authStrategy: new LocalAuth(),
  puppeteer: { headless: true }
});

client.on('qr', (qr) => {
  qrcode.generate(qr, { small: true });
  telegramService.sendMessage(`📱 <b>رمز QR لتسجيل الدخول إلى WhatsApp:</b>\n<code>${qr}</code>`);
});

client.on('ready', () => {
  console.log('✅ WhatsApp client is ready');
  telegramService.sendMessage('✅ WhatsApp client is ready. يمكنك الآن إرسال الرسائل للعملاء.');
});

client.on('authenticated', () => {
  console.log('🔐 WhatsApp authenticated');
});

client.on('auth_failure', msg => {
  console.error('❌ Authentication failure:', msg);
});

client.initialize();

export { client };