export function generateCaptchaText(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let captchaText = '';
    for (let i = 0; i < length; i++) {
      captchaText += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    console.log('executed');
    return captchaText;
  }
