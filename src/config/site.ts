// ✏️ عدّل كل بيانات الموقع من هذا الملف فقط. القيم الحالية Placeholder.
export const site = {
  name: 'YourName',
  handle: '@your-username',
  avatar: `${import.meta.env.BASE_URL}avatar.svg`,
  tagline: ['Developer', 'Discord Enthusiast', 'Digital Creator'],
  bio: 'Short bio about you. Replace this text with your own.',
  status: 'Online',
  email: 'you@example.com',
  discordUsername: 'your_discord_name',
  siteUrl: '', // اتركه فارغًا لاستخدام رابط الموقع الحالي عند النسخ
  colors: { c1: '#8b5cf6', c2: '#3b82f6' },
  // icon: discord | instagram | facebook | tiktok | youtube | telegram | github | x | twitch | link
  socials: [
    { name: 'Discord', icon: 'discord', user: 'your_discord_name', url: 'https://discord.com/users/YOUR_ID' },
    { name: 'GitHub', icon: 'github', user: '@your-username', url: 'https://github.com/your-username' },
    { name: 'X', icon: 'x', user: '@your-username', url: 'https://x.com/your-username' },
    { name: 'YouTube', icon: 'youtube', user: 'Your Channel', url: 'https://youtube.com/@your-channel' },
    { name: 'Twitch', icon: 'twitch', user: 'your-channel', url: 'https://twitch.tv/your-channel' },
    { name: 'Telegram', icon: 'telegram', user: '@your-username', url: 'https://t.me/your-username' },
    { name: 'Instagram', icon: 'instagram', user: '@your-username', url: 'https://instagram.com/your-username' },
    { name: 'TikTok', icon: 'tiktok', user: '@your-username', url: 'https://tiktok.com/@your-username' },
    { name: 'Facebook', icon: 'facebook', user: 'Your Name', url: 'https://facebook.com/your-username' },
  ],
  about: {
    text: 'Write a few lines about yourself here: who you are, what you build, and what drives you.',
    interests: ['Web development', 'Gaming', 'Discord communities', 'Content creation'],
    skills: ['TypeScript', 'React', 'Node.js', 'UI Design', 'Git'],
    working: ['Placeholder: a project you are building now', 'Placeholder: something you are learning'],
  },
  projects: [
    { name: 'Sample Project One', desc: 'Placeholder description. Edit or delete this project in config/site.ts.', tech: ['React', 'TypeScript'], link: '', github: '', hue: 265 },
    { name: 'Sample Project Two', desc: 'Another placeholder project to show the layout.', tech: ['Node.js', 'Discord.js'], link: '', github: '', hue: 215 },
    { name: 'Sample Project Three', desc: 'Leave link/github empty and the buttons are hidden automatically.', tech: ['Vite', 'Tailwind'], link: '', github: '', hue: 190 },
  ],
}
