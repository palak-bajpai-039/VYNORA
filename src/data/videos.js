const BUCKET = 'https://storage.googleapis.com/gtv-videos-bucket/sample/'

const clips = [
  'BigBuckBunny.mp4',
  'ElephantsDream.mp4',
  'ForBiggerBlazes.mp4',
  'ForBiggerEscapes.mp4',
  'ForBiggerFun.mp4',
  'ForBiggerJoyrides.mp4',
  'ForBiggerMeltdowns.mp4',
  'Sintel.mp4',
  'SubaruOutbackOnStreetAndDirt.mp4',
  'TearsOfSteel.mp4',
  'VolkswagenGTIReview.mp4',
  'WeAreGoingOnBullrun.mp4',
  'WhatCarCanYouGetForAGrand.mp4'
]

export const categories = [
  'All',
  'Music',
  'Gaming',
  'News',
  'Movies',
  'Live',
  'Learning',
  'Sports',
  'Comedy',
  'Tech',
  'Travel',
  'Food',
  'Podcasts'
]

export const channels = [
  { id: 'nova-beats', name: 'Nova Beats', handle: '@novabeats', subscribers: '2.4M', avatar: 'novabeats', verified: true },
  { id: 'pixel-forge', name: 'Pixel Forge', handle: '@pixelforge', subscribers: '1.1M', avatar: 'pixelforge', verified: true },
  { id: 'daily-signal', name: 'The Daily Signal', handle: '@dailysignal', subscribers: '3.8M', avatar: 'signal', verified: true },
  { id: 'cineclub', name: 'CineClub', handle: '@cineclub', subscribers: '890K', avatar: 'cineclub', verified: true },
  { id: 'deep-dive', name: 'Deep Dive', handle: '@deepdive', subscribers: '1.7M', avatar: 'deepdive', verified: true },
  { id: 'peak-performance', name: 'Peak Performance', handle: '@peakperformance', subscribers: '640K', avatar: 'peak', verified: false },
  { id: 'byte-size', name: 'Byte Size', handle: '@bytesize', subscribers: '2.1M', avatar: 'bytesize', verified: true },
  { id: 'wander-lens', name: 'Wander Lens', handle: '@wanderlens', subscribers: '920K', avatar: 'wander', verified: true },
  { id: 'kitchen-lab', name: 'The Kitchen Lab', handle: '@kitchenlab', subscribers: '1.3M', avatar: 'kitchenlab', verified: true },
  { id: 'laugh-track', name: 'Laugh Track', handle: '@laughtrack', subscribers: '4.6M', avatar: 'laughtrack', verified: true },
  { id: 'stadium', name: 'Stadium', handle: '@stadium', subscribers: '2.9M', avatar: 'stadium', verified: true },
  { id: 'after-hours', name: 'After Hours', handle: '@afterhours', subscribers: '510K', avatar: 'afterhours', verified: false }
]

export const videos = [
  {
    id: 'lofi-beats-live',
    title: 'Lo-fi Beats to Code To — 24/7 Live Radio',
    channelId: 'nova-beats',
    category: 'Music',
    thumbnail: 'lofi-room',
    duration: 'LIVE',
    viewCount: 12400,
    live: true,
    uploaded: 'Streaming now',
    likes: 48200,
    tags: ['lofi', 'chill', 'study', 'focus', 'music'],
    videoUrl: BUCKET + clips[0],
    description:
      'A never-ending stream of warm, dusty lo-fi beats for deep work, studying and late-night coding sessions. Sit back, focus, and let the music carry you. Tracklist in the pinned comment.'
  },
  {
    id: 'pc-recycled-parts',
    title: 'I Built a Gaming PC Using Only Recycled Parts',
    channelId: 'pixel-forge',
    category: 'Gaming',
    thumbnail: 'pcbuild',
    duration: '18:42',
    viewCount: 1400000,
    uploaded: '3 days ago',
    likes: 92300,
    tags: ['gaming', 'pc build', 'budget', 'diy', 'tech'],
    videoUrl: BUCKET + clips[1],
    description:
      'Can a $120 pile of e-waste run modern games? I spent a weekend in the workshop to find out. Benchmarks, thermals, and one very questionable power supply.'
  },
  {
    id: 'moon-landing-story',
    title: 'The Story Nobody Told You About the Moon Landing',
    channelId: 'daily-signal',
    category: 'News',
    thumbnail: 'moon',
    duration: '12:08',
    viewCount: 2100000,
    uploaded: '1 week ago',
    likes: 145000,
    tags: ['space', 'history', 'documentary', 'nasa', 'news'],
    videoUrl: BUCKET + clips[2],
    description:
      'Behind the iconic footage is a team of hundreds and a handful of decisions that could have ended the mission. We spoke to historians and archivists to piece together the untold story.'
  },
  {
    id: 'dune-easter-eggs',
    title: 'Every Easter Egg in Dune: Part Two (Explained)',
    channelId: 'cineclub',
    category: 'Movies',
    thumbnail: 'dune',
    duration: '21:15',
    viewCount: 3400000,
    uploaded: '2 weeks ago',
    likes: 210000,
    tags: ['movies', 'dune', 'easter eggs', 'film', 'breakdown'],
    videoUrl: BUCKET + clips[3],
    description:
      'From hidden symbolism in the costumes to a tiny detail in the throne room, here is every Easter egg we could find in Dune: Part Two. Spoilers ahead — obviously.'
  },
  {
    id: 'how-brain-learns',
    title: 'How Your Brain Actually Learns — Neuroscience Explained',
    channelId: 'deep-dive',
    category: 'Learning',
    thumbnail: 'brain',
    duration: '15:03',
    viewCount: 890000,
    uploaded: '5 days ago',
    likes: 67000,
    tags: ['science', 'brain', 'learning', 'neuroscience', 'education'],
    videoUrl: BUCKET + clips[4],
    description:
      'Forgetting is not a bug — it is a feature. A tour through memory consolidation, spaced repetition, and the surprising science of sleeping on a problem.'
  },
  {
    id: 'full-body-workout',
    title: '20 Minute Full Body Workout (No Equipment)',
    channelId: 'peak-performance',
    category: 'Sports',
    thumbnail: 'workout',
    duration: '21:40',
    viewCount: 780000,
    uploaded: '1 day ago',
    likes: 43000,
    tags: ['fitness', 'workout', 'home workout', 'health'],
    videoUrl: BUCKET + clips[5],
    description:
      'A follow-along full body session you can do in a living room. Warm up, three circuits, cool down. No equipment, no excuses.'
  },
  {
    id: 'react-in-100-seconds',
    title: 'React in 100 Seconds',
    channelId: 'byte-size',
    category: 'Tech',
    thumbnail: 'react',
    duration: '2:14',
    viewCount: 1900000,
    uploaded: '1 month ago',
    likes: 132000,
    tags: ['react', 'javascript', 'web development', 'programming', 'tech'],
    videoUrl: BUCKET + clips[6],
    description:
      'The fastest possible introduction to React: components, JSX, state, and why everyone keeps talking about hooks. Part of the 100 Seconds series.'
  },
  {
    id: '30-days-japan',
    title: "I Spent 30 Days in Japan — Here's What I Learned",
    channelId: 'wander-lens',
    category: 'Travel',
    thumbnail: 'japan',
    duration: '24:18',
    viewCount: 560000,
    uploaded: '4 days ago',
    likes: 38000,
    tags: ['travel', 'japan', 'tokyo', 'documentary', 'vlog'],
    videoUrl: BUCKET + clips[7],
    description:
      'A month of trains, tiny bars, and early mornings. This is not a list of things to do in Tokyo — it is what happens when you stop rushing and start noticing.'
  },
  {
    id: 'perfect-ramen-broth',
    title: 'The Perfect Ramen Broth (3 Ways)',
    channelId: 'kitchen-lab',
    category: 'Food',
    thumbnail: 'ramen',
    duration: '14:52',
    viewCount: 1100000,
    uploaded: '6 days ago',
    likes: 88000,
    tags: ['food', 'ramen', 'cooking', 'recipe', 'japanese'],
    videoUrl: BUCKET + clips[8],
    description:
      'Tonkotsu, shoyu, and a weeknight miso shortcut. We break down the science of a great broth and the three methods we keep coming back to.'
  },
  {
    id: 'try-not-to-laugh',
    title: 'Try Not to Laugh — Ultimate Fails Compilation',
    channelId: 'laugh-track',
    category: 'Comedy',
    thumbnail: 'fails',
    duration: '10:27',
    viewCount: 6200000,
    uploaded: '3 weeks ago',
    likes: 340000,
    tags: ['comedy', 'fails', 'funny', 'compilation', 'laugh'],
    videoUrl: BUCKET + clips[9],
    description:
      'The internet at its most chaotic. Ten minutes of perfectly timed disasters. Warning: do not watch while drinking anything.'
  },
  {
    id: 'final-minute-championship',
    title: 'Final Minute That Changed the Championship',
    channelId: 'stadium',
    category: 'Sports',
    thumbnail: 'championship',
    duration: '8:35',
    viewCount: 4800000,
    uploaded: '2 days ago',
    likes: 290000,
    tags: ['sports', 'football', 'highlights', 'championship'],
    videoUrl: BUCKET + clips[10],
    description:
      'Down by six with sixty seconds left. What happened next will be replayed for decades. Full breakdown with the angles you missed.'
  },
  {
    id: 'art-of-doing-nothing',
    title: 'The Art of Doing Nothing — A Slow Living Podcast',
    channelId: 'after-hours',
    category: 'Podcasts',
    thumbnail: 'slowliving',
    duration: '1:12:44',
    viewCount: 320000,
    uploaded: '1 week ago',
    likes: 21000,
    tags: ['podcast', 'slow living', 'mindfulness', 'conversation'],
    videoUrl: BUCKET + clips[11],
    description:
      'A long, unhurried conversation about boredom, attention, and why doing nothing might be the most productive thing you do all week.'
  },
  {
    id: 'sunset-timelapse',
    title: 'Sunset Timelapse — Cinematic Ambient Music',
    channelId: 'nova-beats',
    category: 'Music',
    thumbnail: 'sunset',
    duration: '1:04:12',
    viewCount: 2700000,
    uploaded: '1 month ago',
    likes: 175000,
    tags: ['music', 'ambient', 'timelapse', 'relax', 'cinematic'],
    videoUrl: BUCKET + clips[12],
    description:
      'An hour of ambient textures paired with a sunset shot across the desert. Best enjoyed with headphones and nowhere to be.'
  },
  {
    id: 'speedrun-never-played',
    title: "Speedrunning a Game I've Never Played",
    channelId: 'pixel-forge',
    category: 'Gaming',
    thumbnail: 'speedrun',
    duration: '32:11',
    viewCount: 950000,
    uploaded: '5 hours ago',
    likes: 74000,
    tags: ['gaming', 'speedrun', 'challenge', 'funny'],
    videoUrl: BUCKET + clips[0],
    description:
      'I have exactly one day to learn this game and beat the world record pace. It goes about as well as you would expect, until it does not.'
  },
  {
    id: 'quantum-computing-explained',
    title: 'Why Everyone Is Talking About Quantum Computing',
    channelId: 'byte-size',
    category: 'Learning',
    thumbnail: 'quantum',
    duration: '11:26',
    viewCount: 1600000,
    uploaded: '8 hours ago',
    likes: 98000,
    tags: ['science', 'quantum', 'technology', 'explained', 'learning'],
    videoUrl: BUCKET + clips[1],
    description:
      'Qubits, superposition, and the one chart that explains why quantum computers are so hard to build. No math required — a little patience helps.'
  },
  {
    id: 'bangkok-street-food',
    title: 'Street Food Tour: Bangkok After Midnight',
    channelId: 'wander-lens',
    category: 'Food',
    thumbnail: 'bangkok',
    duration: '19:33',
    viewCount: 2200000,
    uploaded: '2 weeks ago',
    likes: 158000,
    tags: ['food', 'travel', 'bangkok', 'street food', 'thailand'],
    videoUrl: BUCKET + clips[2],
    description:
      'The city after midnight belongs to the food stalls. We follow one alley from first grill to last bowl, and meet the people who keep it running.'
  }
]

export const starterComments = [
  {
    id: 'c1',
    author: 'Maya Chen',
    avatar: 'maya',
    text: 'The editing on this is absolutely unreal. The way the audio swells right before the reveal — chef’s kiss.',
    time: '2 hours ago',
    likes: 1240
  },
  {
    id: 'c2',
    author: 'Daniel Ortiz',
    avatar: 'daniel',
    text: 'I have watched this three times and I still catch something new. Instantly subscribed.',
    time: '5 hours ago',
    likes: 864
  },
  {
    id: 'c3',
    author: 'Priya Raman',
    avatar: 'priya',
    text: 'Whoever is doing the sound design deserves a raise. Headphones recommended.',
    time: '1 day ago',
    likes: 512
  },
  {
    id: 'c4',
    author: 'Jonas Weber',
    avatar: 'jonas',
    text: 'Came for the thumbnail, stayed for the story. This channel keeps getting better.',
    time: '1 day ago',
    likes: 301
  },
  {
    id: 'c5',
    author: 'Aisha Bello',
    avatar: 'aisha',
    text: 'The part at 7:42 broke my brain a little bit. Can we get a follow-up video on that?',
    time: '2 days ago',
    likes: 188
  },
  {
    id: 'c6',
    author: 'Leo Martins',
    avatar: 'leo',
    text: 'This is the kind of video I send to people who say the internet has nothing good on it anymore.',
    time: '3 days ago',
    likes: 97
  }
]

export function getChannel(id) {
  return channels.find((channel) => channel.id === id)
}

export function getVideo(id) {
  return videos.find((video) => video.id === id)
}

export function formatCount(n) {
  if (n >= 1_000_000_000) return (n / 1_000_000_000).toFixed(1).replace('.0', '') + 'B'
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1).replace('.0', '') + 'M'
  if (n >= 1_000) return (n / 1_000).toFixed(1).replace('.0', '') + 'K'
  return String(n)
}

export function thumbUrl(seed, w = 640, h = 360) {
  return `https://picsum.photos/seed/${seed}/${w}/${h}`
}

export function avatarUrl(seed, size = 100) {
  return `https://picsum.photos/seed/${seed}/${size}/${size}`
}
