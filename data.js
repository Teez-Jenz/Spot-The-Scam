// Data for "Can you spot the Scam?" Cyber Detective Academy

const ACADEMY_DATA = {
  levels: [
    { name: "Cyber Rookie", minXp: 0, icon: "🌱", color: "#10B981" },
    { name: "Junior Scout", minXp: 150, icon: "🔍", color: "#3B82F6" },
    { name: "Phish Hunter", minXp: 400, icon: "🎣", color: "#8B5CF6" },
    { name: "Security Inspector", minXp: 750, icon: "🛡️", color: "#EC4899" },
    { name: "Master Cyber Sleuth", minXp: 1200, icon: "👑", color: "#F59E0B" }
  ],

  badges: [
    { id: "badge_first_scan", name: "First Red Flag", icon: "🚩", desc: "Found your very first scam red flag in the simulator!", unlocked: false },
    { id: "badge_phish_pro", name: "Phish Fryer", icon: "🎣", desc: "Completed Module 1: The Phishing Net quiz with high marks.", unlocked: false },
    { id: "badge_social_guard", name: "Influencer Shield", icon: "✨", desc: "Mastered social media DMs and fake giveaway defense.", unlocked: false },
    { id: "badge_smish_master", name: "Text Detective", icon: "📱", desc: "Identified dangerous SMS delivery and bank fraud traps.", unlocked: false },
    { id: "badge_speed_demon", name: "Lightning Reflexes", icon: "⚡", desc: "Achieved a 5+ streak in Rapid Scam Buster mode.", unlocked: false },
    { id: "badge_sleuth_cert", name: "Certified Sleuth", icon: "🎓", desc: "Earned your official Cyber Detective Diploma!", unlocked: false }
  ],

  lessons: [
    {
      id: "phishing",
      title: "1. The Phishing Net: Fake Emails & Links",
      tag: "Email & URLs",
      color: "#6366F1",
      icon: "📧",
      summary: "Scammers send emails pretending to be Netflix, Google, Apple, or your school to steal your passwords and money.",
      readTime: "3 min read",
      fullContent: `
        <h4>🎣 What is Phishing?</h4>
        <p>Phishing is when cyber criminals cast out millions of fake emails like fishing hooks, hoping someone bites. They disguise themselves as well-known companies like Netflix, Apple, Amazon, PayPal, or even your school principal.</p>
        
        <h4>⚠️ The Anatomy of a Phishing Email:</h4>
        <ul>
          <li><strong>1. Look-Alike Sender Address:</strong> Instead of <code>@netflix.com</code>, they use <code>support@netfl1x-billing-verify.com</code>. Always read the domain after the <code>@</code> symbol carefully!</li>
          <li><strong>2. Artificial Panic & Urgency:</strong> "Your account will be PERMANENTLY DELETED in 12 hours!" They want you scared so you click before your brain has time to analyze the danger.</li>
          <li><strong>3. Deceptive Link Text:</strong> The text might show <code>https://paypal.com</code>, but when you hover your mouse, the true destination is <code>http://hackers-fake-login.ru</code>.</li>
          <li><strong>4. Generic Greetings:</strong> "Dear Customer" or "Dear User" instead of your actual name, because the email was sent to 500,000 strangers at once.</li>
        </ul>

        <h4>🛡️ Detective Defense Strategy:</h4>
        <p><strong>The "Zero Click" Rule:</strong> If you receive an urgent account email, NEVER click the links inside it. Open a fresh browser tab, type the official website directly (e.g. <code>netflix.com</code>), and log in there.</p>
      `,
      redFlags: [
        { label: "Spoofed Email Address", desc: "Look closely at the sender: `support@netfl1x-security-billing.com` instead of `@netflix.com`." },
        { label: "Urgent Panic / Fear Tactics", desc: "'YOUR ACCOUNT WILL BE DELETED IN 24 HOURS!' Real companies don't threaten instant deletion." },
        { label: "Hover-Over URL Trick", desc: "The link text says `bank.com`, but hovering over it reveals `evil-hacker-site.ru/steal`." },
        { label: "Generic Greetings & Bad Grammar", desc: "'Dear Valued Customer' or awkward phrasing because it's mass-sent by automated bot nets." }
      ],
      proTip: "💡 **Golden Rule**: Never click password reset links inside an unsolicited email! Open a new tab, go directly to the official website, and log in there.",
      quizId: "quiz_phishing",
      simIndex: 0
    },
    {
      id: "social",
      title: "2. Social Traps: Fake Giveaways & Free Gaming Loot",
      tag: "Social Media & Gaming",
      color: "#EC4899",
      icon: "🎮",
      summary: "Free Robux, free V-Bucks, Discord Nitro generators, and fake influencer giveaways designed to hijack your gaming accounts.",
      readTime: "3 min read",
      fullContent: `
        <h4>🎮 The Free Loot Trap</h4>
        <p>Scammers know gamers love skins, Robux, V-Bucks, and Discord Nitro. They build fake websites that look identical to official Roblox or Discord login pages to capture your username, password, and session tokens.</p>
        
        <h4>⚠️ Most Common Social & Gaming Scams:</h4>
        <ul>
          <li><strong>1. "Free Currency Glitch Generators":</strong> Websites that ask you to "Type your password to generate 50,000 Robux". Once you submit, bots instantly trade away your rare limited items.</li>
          <li><strong>2. The "Vote For My Esports Team" DM:</strong> A friend on Discord or Steam messages you: "Hey, my team is in the finals, can you click this link to vote for us?" (Their account was already hijacked by malware).</li>
          <li><strong>3. 2FA Code Theft ("I Sent It By Mistake"):</strong> A scammer pretends: "I accidentally sent a verification code to your phone, can you read it to me?" Giving them this code gives them full access to reset your account.</li>
        </ul>

        <h4>🛡️ Detective Defense Strategy:</h4>
        <p><strong>Rule of Reality:</strong> There is NO SUCH THING as a free Robux generator. If a friend sends an unusual link or asks for votes, message them on a different app (like SMS or Instagram) to verify before touching any link.</p>
      `,
      redFlags: [
        { label: "Too Good To Be True", desc: "'Generate 50,000 Free Robux instantly! Just enter your password and turn off 2FA!'" },
        { label: "Lookalike Profiles", desc: "A 'friend' messages you: 'Hey, vote for my esports team at this link!' (Their account was already hacked)." },
        { label: "Demanding Your 2FA Code", desc: "'I accidentally sent a verification code to your phone, can you read it to me?' (They are resetting YOUR account)." },
        { label: "Verification Badges Missing", desc: "Celebrity or game company accounts with zero real followers or handles like `@MrBeast_Free_Cash99`." }
      ],
      proTip: "💡 **Golden Rule**: There is NO SUCH THING as a free currency generator. Any site asking for your password for 'free items' will steal your account.",
      quizId: "quiz_social",
      simIndex: 1
    },
    {
      id: "smishing",
      title: "3. Smishing & Robot Calls: SMS Traps",
      tag: "SMS & Mobile",
      color: "#F59E0B",
      icon: "📱",
      summary: "Texts claiming: 'Your package is held at customs! Pay $1.50' or 'USPS alert: Missing address details!'.",
      readTime: "2 min read",
      fullContent: `
        <h4>📱 What is Smishing (SMS Phishing)?</h4>
        <p>Smishing is phishing sent through text messages (SMS). Because text messages feel personal and urgent, people are 3x more likely to click links on their phones without inspecting them.</p>
        
        <h4>⚠️ Top Smishing Scams Targeting Students:</h4>
        <ul>
          <li><strong>1. The "Held Package / Wrong Address" Text:</strong> "USPS Notice: Your parcel #48194 cannot be delivered. Click link to confirm address & pay $0.35 redelivery fee."</li>
          <li><strong>2. The Fake Bank Alert:</strong> "[Chase Bank]: Fraud alert! $490 transaction at Walmart. Reply NO or click link to dispute."</li>
          <li><strong>3. Missed Delivery / Toll Road Fees:</strong> Threatening fines or toll road penalties with shortlinks like <code>tinyurl.com/pay-toll-now</code>.</li>
        </ul>

        <h4>🛡️ Detective Defense Strategy:</h4>
        <p>Postal carriers (USPS, FedEx, DHL) do NOT text you asking for credit card numbers for unpaid postage from random 10-digit phone numbers. Always check your tracking code inside official apps.</p>
      `,
      redFlags: [
        { label: "Random Phone Numbers & Shortlinks", desc: "Texts from random overseas numbers with bit.ly, tinyurl, or odd domains like `usps-track-delivery24.info`." },
        { label: "Delivery Panic When You Didn't Order", desc: "Claiming a mystery package needs immediate fee payment before returning to sender." },
        { label: "Bank Security Alert Texts", desc: "'Wells Fargo: Fraud alert! Did you spend $850? Click here to cancel transaction.' (Leads to a fake login page)." }
      ],
      proTip: "💡 **Golden Rule**: Postal carriers (USPS, FedEx, DHL) do NOT text you asking for card info for unpaid postage. Check tracking directly on their app.",
      quizId: "quiz_smishing",
      simIndex: 2
    },
    {
      id: "malware",
      title: "4. Fake Download Buttons & Trojan Game Mods",
      tag: "Downloads & Malware",
      color: "#10B981",
      icon: "💾",
      summary: "Clicking 'Download Now' on shady websites that download `.exe` or `.scr` virus files disguised as Minecraft mods, cheats, or homework PDFs.",
      readTime: "3 min read",
      fullContent: `
        <h4>💾 The Deceptive Download Trap</h4>
        <p>When searching for game mods, cheats, cracked software, or study guides, malicious sites place 4 or 5 giant flashing green "DOWNLOAD" buttons that are actually adverts delivering malware.</p>
        
        <h4>⚠️ How To Spot Malicious Downloads:</h4>
        <ul>
          <li><strong>1. Double File Extensions:</strong> Files named <code>Minecraft_Cheat_Mod.pdf.exe</code> or <code>StudyGuide.docx.vbs</code>. Windows hides file extensions by default, masking the fact that it's an executable program.</li>
          <li><strong>2. "Disable Your Antivirus" Warning:</strong> Any tutorial that claims: "Turn off Windows Defender before opening, it's a false positive!" is almost certainly distributing trojans or ransomware.</li>
          <li><strong>3. Tiny File Size for Huge Games:</strong> A "Full GTA V Free Download" that is only 4 MB is 100% a malware dropper.</li>
        </ul>

        <h4>🛡️ Detective Defense Strategy:</h4>
        <p>Always inspect the file extension before double clicking. Documents are <code>.pdf</code>, <code>.docx</code>, or <code>.png</code>. They are NEVER <code>.exe</code>, <code>.bat</code>, <code>.scr</code>, or <code>.msi</code>.</p>
      `,
      redFlags: [
        { label: "Multiple Huge 'DOWNLOAD' Buttons", desc: "Websites with 5 giant green flashing download buttons that are actually deceptive ads." },
        { label: "Double File Extensions", desc: "Files named `Minecraft_Cheat_Mod.pdf.exe` or `Free_Roblox_FPS.zip.bat`." },
        { label: "Disable Your Antivirus First", desc: "Install instructions that beg you to disable Windows Defender or antivirus before opening." }
      ],
      proTip: "💡 **Golden Rule**: Look at the file extension! A document or image will never be a `.exe`, `.scr`, `.bat`, or `.msi` file.",
      quizId: "quiz_malware",
      simIndex: 4
    },
    {
      id: "ai_scams",
      title: "5. AI Clones & Emergency Relative Traps",
      tag: "AI & Modern Scams",
      color: "#8B5CF6",
      icon: "🤖",
      summary: "AI voice cloning where a scammer mimics a friend or family member in distress begging for urgent gift cards, crypto, or cash transfers.",
      readTime: "3 min read",
      fullContent: `
        <h4>🤖 The Rise of AI Voice Clones & Deepfakes</h4>
        <p>Using just 3 to 5 seconds of audio from a TikTok, YouTube video, or Instagram story, AI tools can clone someone's exact voice, tone, and breathing patterns.</p>
        
        <h4>⚠️ How The Emergency Phone Scam Works:</h4>
        <ul>
          <li><strong>1. The "Crying Relative" Phone Call:</strong> A caller sounds exactly like a cousin, sibling, or best friend crying: "I was arrested / stranded abroad! Don't tell my parents, please wire $300 right now!"</li>
          <li><strong>2. Untraceable Payment Demands:</strong> Scammers demand payment via Apple Gift Cards, Google Play cards, Steam codes, Zelle, or Bitcoin ATMs because these transactions cannot be reversed by banks.</li>
          <li><strong>3. Deepfake Video Calls:</strong> AI video generators creating fake faces in glitchy low-light video calls.</li>
        </ul>

        <h4>🛡️ Detective Defense Strategy:</h4>
        <p><strong>Create a Family Secret Safe Word:</strong> Agree on a private code word with your family that you only share in person. If anyone calls claiming an emergency, ask for the safe word. AI bots cannot guess it!</p>
      `,
      redFlags: [
        { label: "Unusual Payment Requests", desc: "Demanding payment via Apple Gift Cards, Steam cards, Zelle, or Bitcoin ATMs (untraceable money)." },
        { label: "Extreme Emotional Pressure", desc: "'I got arrested / lost my phone in another country, DO NOT tell mom and dad, send money right now!'" },
        { label: "Background Noise & Robotic Cadence", desc: "Cloned voices might have slight robotic artifacting or refuse to answer specific personal trivia." }
      ],
      proTip: "💡 **Golden Rule**: Establish a secret 'Safe Word' or family passphrase that only real family members know to defeat AI voice clones!",
      quizId: "quiz_ai",
      simIndex: 0
    }
  ],

  // Interactive Simulator Scenarios
  simulatorScenarios: [
    {
      id: "sim_1",
      category: "Email Phishing",
      type: "email",
      title: "Netflix Billing Issue Email",
      difficulty: "Medium",
      isScam: true,
      senderName: "Netflix Support Team",
      senderEmail: "billing-updates@netflix-help-center-security89.com",
      recipient: "student_alex@school.edu",
      subject: "🔴 URGENT: Your Membership is on Hold (Payment Declined)",
      date: "Today, 4:18 PM",
      previewSnippet: "We were unable to process your payment for your next billing cycle...",
      contentHtml: `
        <div class="sim-email-body">
          <div class="sim-brand-header">
            <span class="brand-netflix">NETFLIX</span>
          </div>
          <p>Hi Alexander,</p>
          <p>We are having trouble with your current billing information. We tried to process your membership fee of <strong>$15.99</strong>, but your bank declined the request.</p>
          <div class="sim-warning-box">
            ⚠️ <strong>Action Required:</strong> If you do not update your payment details within <strong>12 hours</strong>, your account and watch history will be permanently terminated.
          </div>
          <div class="sim-cta-wrap">
            <button class="sim-fake-btn" data-hover-url="http://netflix-billing-account-update.xyz/login?id=alex99">UPDATE PAYMENT NOW</button>
          </div>
          <p class="sim-footer-note">Need help? Visit our Help Center at support.netflix.com (Terms of Service apply).</p>
        </div>
      `,
      hotspots: [
        {
          id: "spot_sender",
          selector: ".sim-sender-tag",
          title: "Suspicious Sender Address",
          explanation: "Look at the domain: `@netflix-help-center-security89.com`. Legitimate emails from Netflix only come from `@netflix.com` or `@mailer.netflix.com`!",
          isRedFlag: true
        },
        {
          id: "spot_urgency",
          selector: ".sim-warning-box",
          title: "Extreme Artificial Urgency",
          explanation: "Scammers use '12 hour termination' panic triggers so you react out of fear without thinking critically.",
          isRedFlag: true
        },
        {
          id: "spot_link",
          selector: ".sim-fake-btn",
          title: "Fake Target URL",
          explanation: "Hovering over the button reveals `netflix-billing-account-update.xyz`! Notice the `.xyz` domain and weird subdomain.",
          isRedFlag: true
        }
      ],
      verdictReason: "This is a classic Phishing Scam! Fake sender domain, aggressive countdown threat, and a phishing URL designed to steal credit card info."
    },
    {
      id: "sim_2",
      category: "Social Media DM",
      type: "dm",
      title: "Discord / Instagram Free Nitro / Robux DM",
      difficulty: "Easy",
      isScam: true,
      senderName: "xX_GamerFriend_Xx",
      senderHandle: "@gamer_friend_official_giveaway",
      avatarIcon: "👾",
      date: "Just now",
      contentHtml: `
        <div class="sim-chat-window">
          <div class="sim-chat-msg incoming">
            <div class="msg-bubble">
              Yo bro! You still play Roblox & Valorant? 🎮
            </div>
          </div>
          <div class="sim-chat-msg incoming">
            <div class="msg-bubble">
              I just found this crazy glitch promo from Discord & Steam!! They are giving 1 Year Discord Nitro + 10,000 Robux for the first 500 people! 🎁🔥
            </div>
          </div>
          <div class="sim-chat-msg incoming">
            <div class="msg-bubble">
              I already claimed mine, here is the secret link before it gets patched: 
              <span class="sim-chat-link" data-hover-url="https://dlscord-nitro-gift-generator.free.ru/claim">https://discord.gift/nitro-promo-summer2026</span>
            </div>
          </div>
          <div class="sim-chat-msg incoming">
            <div class="msg-bubble">
              Hurry up, only 14 gifts left!! You just have to log in with your account to verify you're human!
            </div>
          </div>
        </div>
      `,
      hotspots: [
        {
          id: "spot_dm_spoof",
          selector: ".sim-chat-link",
          title: "Deceptive Link Disguise",
          explanation: "The link text says `discord.gift`, but the actual destination is `dlscord-nitro-gift-generator.free.ru` (spelled with an 'L' instead of 'I' and on a Russian `.ru` domain)!",
          isRedFlag: true
        },
        {
          id: "spot_dm_compromised",
          selector: ".sim-chat-window",
          title: "Compromised Friend Account",
          explanation: "When a friend sends strange promotional links or asks you to vote in a random esports tournament, their account has likely been stolen by a session stealer / bot.",
          isRedFlag: true
        }
      ],
      verdictReason: "This is a malicious Account Hijacking Scam! Free Nitro links that ask you to 'log in' are phishing pages that steal your Discord token and passwords."
    },
    {
      id: "sim_3",
      category: "Mobile SMS Smishing",
      type: "sms",
      title: "USPS / Postal Package Delivery Text",
      difficulty: "Medium",
      isScam: true,
      senderName: "+1 (832) 904-8121",
      senderHandle: "Unknown Number",
      avatarIcon: "📦",
      date: "Today, 11:24 AM",
      contentHtml: `
        <div class="sim-sms-screen">
          <div class="sms-bubble">
            [USPS Notification]: Your package #US94001182749 could not be delivered on 08/31 due to an incomplete street address.
          </div>
          <div class="sms-bubble">
            Please update your address information within 24 hours at <span class="sim-sms-link" data-hover-url="https://usps-redelivery-fee-update9.top/track">https://usps-tracking-portal.top/address</span> or your package will be returned to sender. A $0.35 redelivery fee may apply.
          </div>
        </div>
      `,
      hotspots: [
        {
          id: "spot_sms_number",
          selector: ".sim-sms-sender-info",
          title: "Random Personal Phone Number",
          explanation: "Official postal carriers and banks use verified shortcodes (5 or 6 digits, like `28777`), never a random 10-digit cellphone number from Texas.",
          isRedFlag: true
        },
        {
          id: "spot_sms_domain",
          selector: ".sim-sms-link",
          title: "Fake Domain Extension (.top)",
          explanation: "The official United States Postal Service domain is `usps.com`. Scammers use cheap top-level domains like `.top`, `.info`, `.xyz`, or `.club`.",
          isRedFlag: true
        },
        {
          id: "spot_sms_fee",
          selector: ".sim-sms-screen",
          title: "Tiny Fee Credit Card Trap ($0.35)",
          explanation: "Scammers ask for a tiny $0.35 fee so you don't hesitate to type in your full credit card number, CVV, and billing address. Once submitted, they charge hundreds of dollars!",
          isRedFlag: true
        }
      ],
      verdictReason: "This is a Smishing (SMS Phishing) Scam! USPS does not send texts about undeliverable parcels from random phone numbers with credit card fee requests."
    },
    {
      id: "sim_4",
      category: "Legitimate Security Alert",
      type: "email",
      title: "Google Official 2-Step Verification Confirmation",
      difficulty: "Hard",
      isScam: false,
      senderName: "Google",
      senderEmail: "no-reply@accounts.google.com",
      recipient: "student_alex@school.edu",
      subject: "Security alert: 2-Step Verification turned on",
      date: "Yesterday, 3:45 PM",
      previewSnippet: "2-Step Verification was recently turned on for your Google Account...",
      contentHtml: `
        <div class="sim-email-body legit-theme">
          <div class="sim-brand-header">
            <span class="brand-google"><span style="color:#4285F4">G</span><span style="color:#EA4335">o</span><span style="color:#FBBC05">o</span><span style="color:#4285F4">g</span><span style="color:#34A853">l</span><span style="color:#EA4335">e</span></span>
          </div>
          <p style="font-size:18px; font-weight:700; color:#1F2937;">2-Step Verification was turned on</p>
          <p>Hi Alexander,</p>
          <p>2-Step Verification was recently turned on for your Google Account (student_alex@school.edu). If you made this change, you don't need to do anything.</p>
          <div style="background:#F3F4F6; padding:12px 16px; border-radius:8px; margin:16px 0; font-size:14px;">
            <strong>Device:</strong> Windows 11 PC (Chrome)<br>
            <strong>Location:</strong> London, United Kingdom (Approximate)<br>
            <strong>Time:</strong> September 1, 2026, 3:45 PM BST
          </div>
          <p>If you didn't do this, someone may have access to your account. Check your account activity right away:</p>
          <div class="sim-cta-wrap">
            <button class="sim-fake-btn legit-btn" data-hover-url="https://myaccount.google.com/notifications">Check Activity</button>
          </div>
        </div>
      `,
      hotspots: [
        {
          id: "spot_google_sender",
          selector: ".sim-sender-tag",
          title: "Authentic Google Domain",
          explanation: "The sender domain is `@accounts.google.com`, which is an authentic, cryptographically signed Google domain.",
          isRedFlag: false
        },
        {
          id: "spot_google_url",
          selector: ".sim-fake-btn",
          title: "Authentic Destination URL",
          explanation: "The link points cleanly to `https://myaccount.google.com/notifications` without redirect trickery.",
          isRedFlag: false
        }
      ],
      verdictReason: "This is a LEGITIMATE security notification from Google! It contains no panic threats, no request for passwords, and points directly to the real `myaccount.google.com`."
    },
    {
      id: "sim_5",
      category: "Software / Mod Download",
      type: "download",
      title: "Minecraft Shader Mod Download Webpage",
      difficulty: "Medium",
      isScam: true,
      senderName: "ModCraftHub Downloads",
      senderEmail: "https://freeminecraftshaders-download2026.net/optifine",
      recipient: "Web Browser View",
      subject: "Download Ultra Realistic Shaders v4.2 [Free]",
      date: "Web Page",
      contentHtml: `
        <div class="sim-download-page">
          <div class="dl-header">
            <h3>🎮 Ultra Shaders Mod Pack 1.21.1</h3>
            <span class="badge-downloads">⭐ 4.9 (14,200 Downloads)</span>
          </div>
          
          <div class="fake-ad-banner">
            <p class="ad-label">Advertisement</p>
            <div class="sim-fake-btn ad-btn flashing-green" data-hover-url="https://cdn-malware-dropper.biz/setup_downloader.exe">
              ⬇️ START DOWNLOAD NOW (Fast 100MB/s)
            </div>
          </div>

          <div class="real-mod-info">
            <p>Requirements: Java 17+, Fabric or Forge Loader. Includes realistic water reflections and dynamic shadows.</p>
          </div>

          <div class="fake-ad-banner">
            <div class="sim-fake-btn ad-btn big-blue" data-hover-url="https://trojan-installer-engine.xyz/bundle.scr">
              🟢 DOWNLOAD (Installer Required)
            </div>
          </div>

          <div class="actual-small-link">
            <span class="actual-link-target" data-hover-url="https://official-shaderpack-repository.org/shaders_v4.2.zip">Download Shaderpack (.zip file, 24MB)</span>
          </div>
        </div>
      `,
      hotspots: [
        {
          id: "spot_exe_dl",
          selector: ".flashing-green",
          title: "Malicious Ad Disguised as Download",
          explanation: "Huge flashy green download buttons are ad traps! Hovering reveals it downloads `setup_downloader.exe` instead of a `.zip` shaderpack.",
          isRedFlag: true
        },
        {
          id: "spot_scr_dl",
          selector: ".big-blue",
          title: "Dangerous Executable Extension (.scr)",
          explanation: "This button downloads a `.scr` (screensaver / trojan executable) payload. A real Minecraft shader pack is always a `.zip` or `.jar` file.",
          isRedFlag: true
        }
      ],
      verdictReason: "This download page is littered with deceptive malware ads designed to trick users into running executable trojans (.exe/.scr)."
    }
  ],

  // Rapid Scam Buster Mini-Game Flashcards
  rapidScenarios: [
    {
      id: "r1",
      scenario: "Email from `support@steamcommurnity.com` saying your inventory will be banned unless you verify your trade link.",
      isScam: true,
      tip: "Typo in domain: 'steamcommurnity' with an extra 'r'!"
    },
    {
      id: "r2",
      scenario: "Instagram DM from MrBeast saying: 'Congratulations! You won $10,000! Just send $25 processing fee to my CashApp.'",
      isScam: true,
      tip: "Real giveaways never ask you to pay money to claim a prize."
    },
    {
      id: "r3",
      scenario: "SMS from your bank (Shortcode 44556): 'Your card was used at Target for $12.40. Reply YES if authorized, NO if not.'",
      isScam: false,
      tip: "Legit fraud alerts ask for a simple YES/NO reply and never ask for passwords or PINs."
    },
    {
      id: "r4",
      scenario: "Pop-up on movie streaming site: 'VIRUS DETECTED! Windows is locked! Call 1-800-MICROSOFT immediately!'",
      isScam: true,
      tip: "Web pages cannot scan your computer for viruses. This is a fake tech support phone scam."
    },
    {
      id: "r5",
      scenario: "Roblox game chat: 'Type your password backwards in the chat box, Roblox automatically censors it with asterisks: ******'",
      isScam: true,
      tip: "Oldest scam in the book! Roblox does NOT censor passwords and other players will see it."
    },
    {
      id: "r6",
      scenario: "Teacher sends an email from `mrs.smith@lincolnhigh.edu` with Google Docs link for biology homework.",
      isScam: false,
      tip: "Official verified `.edu` school email with standard homework link."
    },
    {
      id: "r7",
      scenario: "Phone call with robot voice: 'This is the IRS. There is a warrant for your arrest unless you buy $500 Target gift cards.'",
      isScam: true,
      tip: "The government and police will never demand payment in retail gift cards."
    },
    {
      id: "r8",
      scenario: "Discord bot sends: 'Claim 3 months free Spotify Premium at spotify-free-gift-codes.cc'",
      isScam: true,
      tip: "Fake unofficial domain `.cc` aiming to steal login credentials."
    },
    {
      id: "r9",
      scenario: "Website file download: `history_project_rubric.pdf` (File type: PDF document, 450 KB).",
      isScam: false,
      tip: "Standard PDF file from a legitimate school source."
    },
    {
      id: "r10",
      scenario: "TikTok DM: 'Join our model agency! Download this photo pack: `model_contract.zip.exe`'",
      isScam: true,
      tip: "Hidden `.exe` double extension executable payload!"
    }
  ],

  // End of Module Quizzes
  quizzes: {
    quiz_phishing: {
      id: "quiz_phishing",
      moduleId: "phishing",
      title: "Module 1 Quiz: Phishing Mastery",
      badgeReward: "badge_phish_pro",
      xpReward: 150,
      questions: [
        {
          question: "You receive an email from 'Apple Support' saying your iCloud is locked. What is the FIRST thing you should check?",
          options: [
            "Click the link immediately so you don't lose photos",
            "Check the sender's full email address and hover over links to see the real domain",
            "Reply with your Apple ID and password to unlock it",
            "Forward it to all your friends"
          ],
          correctIndex: 1,
          explanation: "Always inspect the sender's actual email address and hover over links to inspect the destination domain before clicking anything!"
        },
        {
          question: "Which of the following email addresses is most likely a FAKE phishing address?",
          options: [
            "orders@amazon.com",
            "support@spotify.com",
            "security-team@amazon-account-verify99.info",
            "no-reply@accounts.google.com"
          ],
          correctIndex: 2,
          explanation: "`@amazon-account-verify99.info` is an unauthorized domain using Amazon's name to trick victims. Real Amazon emails end with `@amazon.com`."
        },
        {
          question: "Why do phishing emails frequently use words like 'URGENT', 'ACCOUNT TERMINATION IN 24 HOURS', or 'FINAL NOTICE'?",
          options: [
            "Because customer service representatives are impatient",
            "To trigger panic so you click and submit sensitive data without thinking clearly",
            "Because internet servers delete accounts every 24 hours",
            "It is required by cybersecurity law"
          ],
          correctIndex: 1,
          explanation: "Artificial urgency is the #1 psychological manipulation trick used by scammers to bypass your natural skepticism."
        }
      ]
    },

    quiz_social: {
      id: "quiz_social",
      moduleId: "social",
      title: "Module 2 Quiz: Social & Gaming Traps",
      badgeReward: "badge_social_guard",
      xpReward: 150,
      questions: [
        {
          question: "A website promises to generate 25,000 Robux or V-Bucks if you enter your username and password. What will actually happen?",
          options: [
            "You will get free currency within 10 minutes",
            "Your account password will be stolen and your inventory traded away",
            "Roblox/Epic Games will send you a thank-you badge",
            "Nothing, it just shows ads"
          ],
          correctIndex: 1,
          explanation: "There is no such thing as an online currency generator. Any site asking for your login will steal your account and inventory."
        },
        {
          question: "A friend on Discord suddenly messages you: 'Hey, I entered an art contest, can you vote for me at this link?' What should you do?",
          options: [
            "Click the link and log in with your Discord account",
            "Send them your phone number and 2FA code",
            "Message your friend through another app (like SMS or Instagram) to ask if they were hacked",
            "Download whatever file the website asks you to run"
          ],
          correctIndex: 2,
          explanation: "When friends send out of character contest links or trade requests, their accounts are often compromised. Verify with them on a different channel!"
        },
        {
          question: "What is Two-Factor Authentication (2FA) and why is it essential?",
          options: [
            "It makes your game load twice as fast",
            "It requires a second verification step (like a phone code or authenticator app) so hackers can't log in even if they know your password",
            "It automatically buys items for you",
            "It shares your password with two friends for backup"
          ],
          correctIndex: 1,
          explanation: "2FA is your strongest defense! Even if a phishing site steals your password, they cannot access your account without your physical 2FA device."
        }
      ]
    },

    quiz_smishing: {
      id: "quiz_smishing",
      moduleId: "smishing",
      title: "Module 3 Quiz: SMS & Call Scams",
      badgeReward: "badge_smish_master",
      xpReward: 150,
      questions: [
        {
          question: "You get a text from a random phone number saying a package is delayed and you must click a link to pay $0.50. What should you do?",
          options: [
            "Pay the 50 cents with a debit card",
            "Reply 'STOP' with your credit card number",
            "Ignore, delete, or report the message as spam — legitimate carriers don't text fee links from random mobile numbers",
            "Click the link to see what package it is"
          ],
          correctIndex: 2,
          explanation: "Postal services like USPS or FedEx do not send texts from random numbers requesting small credit card fees."
        },
        {
          question: "A caller claims to be from Microsoft Support saying your computer has a virus and you need to let them remote control your PC. You should:",
          options: [
            "Download TeamViewer or AnyDesk immediately",
            "Hang up immediately! Microsoft will NEVER make unsolicited phone calls about computer viruses",
            "Give them your credit card for antivirus software",
            "Leave the phone on and let them fix it"
          ],
          correctIndex: 1,
          explanation: "Microsoft and Apple will NEVER cold call you about an infected computer. This is a notorious remote access scam."
        }
      ]
    },

    quiz_malware: {
      id: "quiz_malware",
      moduleId: "malware",
      title: "Module 4 Quiz: Malware & Downloads",
      badgeReward: "badge_first_scan",
      xpReward: 150,
      questions: [
        {
          question: "You are downloading a music track or PDF study guide, and the file name is `Biology_Guide.pdf.exe`. Should you run it?",
          options: [
            "Yes, `.exe` just means 'Excellent'",
            "NO! It is an executable program disguised as a document to infect your computer with malware",
            "Yes, if you double click fast",
            "Only if your friends downloaded it too"
          ],
          correctIndex: 1,
          explanation: "Real PDF files end in `.pdf`. If a file has `.exe`, `.bat`, or `.scr` at the end, it is an executable program that could install spyware or ransomware."
        },
        {
          question: "A game mod installation tutorial says: 'Turn off Windows Defender Antivirus before running the installer'. What does this indicate?",
          options: [
            "The installer contains malware that antivirus software will rightly block",
            "Windows Defender is jealous of the game",
            "It will make the game run at 240 FPS",
            "Antivirus always breaks mods"
          ],
          correctIndex: 0,
          explanation: "Legitimate software creators do not ask users to turn off their security protections. If an installer triggers your antivirus, treat it as dangerous malware."
        }
      ]
    },

    quiz_ai: {
      id: "quiz_ai",
      moduleId: "ai_scams",
      title: "Module 5 Quiz: AI Deepfakes & Emergency Scams",
      badgeReward: "badge_sleuth_cert",
      xpReward: 200,
      questions: [
        {
          question: "You receive a phone call that sounds exactly like your cousin crying and saying they are stranded in another city and need $300 in Apple Gift Cards right now. What is the safest action?",
          options: [
            "Rush to the store and buy gift cards immediately",
            "Hang up, call your cousin directly on their saved phone number (or call their parents) to verify",
            "Send Bitcoin to their address",
            "Post on social media about it"
          ],
          correctIndex: 1,
          explanation: "AI voice cloning can replicate anyone's voice with just 5 seconds of audio. Always hang up and call the person directly on their known verified number!"
        },
        {
          question: "What is an effective family defense against AI voice clone scams?",
          options: [
            "Never answering the phone again",
            "Creating a private 'Family Secret Safe Word' that only real family members know",
            "Paying the scammer half the amount",
            "Changing your phone number every week"
          ],
          correctIndex: 1,
          explanation: "A secret family safe word is virtually foolproof against AI impersonators because the scammer's AI bot has no way of knowing your private code word."
        }
      ]
    }
  },

  // What To Do If Scammed Checklist
  emergencyChecklist: [
    {
      title: "1. Don't Panic & Don't Feel Ashamed",
      desc: "Scammers trick millions of people, including cybersecurity experts and adults every single day. Taking fast, calm action is what matters most.",
      action: "Take a deep breath and tell a parent, teacher, or trusted adult immediately."
    },
    {
      title: "2. Change Your Passwords Immediately",
      desc: "If you typed your password into a phishing site, immediately change your password on the REAL website. If you used that same password anywhere else, change those too!",
      action: "Turn on Two-Factor Authentication (2FA) using an Authenticator App (Google Authenticator / Duo)."
    },
    {
      title: "3. Disconnect & Run Antivirus Scan",
      desc: "If you downloaded a suspicious `.exe` or file, disconnect your device from Wi-Fi immediately to stop malware from sending stolen data to the attacker's server.",
      action: "Run a full scan with Windows Defender, Malwarebytes, or your antivirus software."
    },
    {
      title: "4. Contact Your Bank / Card Issuer (If Payment Info Entered)",
      desc: "If credit/debit card numbers or bank info was typed, contact the bank fraud department right away. They can freeze the card and reverse fraudulent charges.",
      action: "Call the number on the back of your physical card."
    },
    {
      title: "5. Report The Scam",
      desc: "Reporting scams protects your classmates and helps takedown malicious domains.",
      action: "Report to Google Safe Browsing (safebrowsing.google.com) and the FTC (reportfraud.ftc.gov)."
    }
  ]
};

if (typeof window !== 'undefined') {
  window.ACADEMY_DATA = ACADEMY_DATA;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = ACADEMY_DATA;
}

