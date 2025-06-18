require('dotenv').config();
const { Client, LocalAuth } = require('whatsapp-web.js');
const TelegramBot = require('node-telegram-bot-api');
const qrcode = require('qrcode');
const fs = require('fs');
const path = require('path');

const TELEGRAM_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

let lastQR = null;
let isReady = false;

const telegramBot = new TelegramBot(TELEGRAM_TOKEN, { polling: true });
const sessionDir = path.resolve(__dirname, 'whatsapp-session');

function clearSession() {
  if (fs.existsSync(sessionDir)) {
    fs.rmSync(sessionDir, { recursive: true, force: true });
    console.log('✅ تم حذف جلسة واتساب.');
    telegramBot.sendMessage(TELEGRAM_CHAT_ID, '🗑️ تم حذف جلسة واتساب، سيتم إعادة المصادقة عند التشغيل التالي.');
  } else {
    console.log('⚠️ لا توجد جلسة محفوظة للحذف.');
    telegramBot.sendMessage(TELEGRAM_CHAT_ID, '⚠️ لا توجد جلسة محفوظة ليتم حذفها.');
  }
}

let whatsappClient;

function initWhatsApp() {
  whatsappClient = new Client({
    authStrategy: new LocalAuth({ clientId: 'default' }),
    puppeteer: { args: ['--no-sandbox', '--disable-setuid-sandbox'] },
  });

  whatsappClient.on('qr', (qr) => {
    lastQR = qr;
    isReady = false;
    console.log('رمز QR تم استلامه:');
    qrcode.generate(qr, { small: true });
    qrcode.toBuffer(qr, { type: 'png' }, (err, buffer) => {
      if (err) {
        console.error('فشل توليد صورة رمز QR:', err);
        return;
      }
      telegramBot.sendPhoto(TELEGRAM_CHAT_ID, buffer, { caption: '📲 امسح رمز QR في واتساب بيزنس' });
    });
  });

  whatsappClient.on('ready', () => {
    isReady = true;
    lastQR = null;
    console.log('واتساب جاهز!');
    telegramBot.sendMessage(TELEGRAM_CHAT_ID, '✅ تم تسجيل الدخول في واتساب بنجاح.');
  });

  whatsappClient.on('auth_failure', () => {
    isReady = false;
    console.log('فشل في المصادقة في واتساب!');
    telegramBot.sendMessage(TELEGRAM_CHAT_ID, '⚠️ فشل في المصادقة! يرجى حذف الجلسة وإعادة المصادقة.');
  });

  whatsappClient.on('disconnected', (reason) => {
    isReady = false;
    console.log('تم قطع الاتصال: ', reason);
    telegramBot.sendMessage(TELEGRAM_CHAT_ID, `⚠️ تم قطع الاتصال! السبب: ${reason}`);
  });

  whatsappClient.on('message', async msg => {
    console.log(`رسالة من ${msg.from}: ${msg.body}`);
    await msg.reply('تم استلام رسالتك، شكراً!');
  });

  whatsappClient.initialize();
}

initWhatsApp();

telegramBot.on('message', async (msg) => {
  if (msg.chat.id.toString() !== TELEGRAM_CHAT_ID) return;

  const text = msg.text.trim();

  if (text === '/start') {
    telegramBot.sendMessage(TELEGRAM_CHAT_ID, 'مرحباً! بوت واتساب جاهز. الأوامر:\n/getqr\n/status\n/reset');
  } else if (text === '/getqr') {
    if (lastQR) {
      qrcode.toBuffer(lastQR, { type: 'png' }, (err, buffer) => {
        if (err) {
          telegramBot.sendMessage(TELEGRAM_CHAT_ID, 'حدث خطأ في توليد رمز QR.');
          return;
        }
        telegramBot.sendPhoto(TELEGRAM_CHAT_ID, buffer, { caption: '📲 رمز QR الحالي' });
      });
    } else {
      telegramBot.sendMessage(TELEGRAM_CHAT_ID, 'لا يوجد رمز QR حالياً.');
    }
  } else if (text === '/status') {
    telegramBot.sendMessage(TELEGRAM_CHAT_ID, isReady ? '✅ واتساب متصل وجاهز.' : '❌ واتساب غير متصل.');
  } else if (text === '/reset') {
    telegramBot.sendMessage(TELEGRAM_CHAT_ID, '🗑️ جارٍ إعادة تعيين الجلسة...');
    clearSession();
    whatsappClient.destroy().then(() => {
      console.log('تم إنهاء جلسة واتساب القديمة.');
      initWhatsApp();
    });
  } else {
    telegramBot.sendMessage(TELEGRAM_CHAT_ID, 'أمر غير معروف. الأوامر المتاحة:\n/start\n/getqr\n/status\n/reset');
  }
});

console.log('بوت بدأ التشغيل...');
