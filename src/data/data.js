export const automationCommands = [
  // =========================
  // YOUTUBE
  // =========================
  {
    id: "youtube",
    website: "YouTube",
    url: "https://www.youtube.com",
    category: "video",

    commands: [
      {
        id: "youtube-open",
        command: "open youtube",
        aliases: ["open youtube.com", "go to youtube"],
        action: "navigate",
        target: "https://www.youtube.com",
      },

      {
        id: "youtube-search",
        command: "search youtube for {query}",
        aliases: [
          "search {query} on youtube",
          "find {query} on youtube",
          "look for {query} on youtube",
        ],
        action: "search",
        target: "youtube",
        params: ["query"],
      },

      {
        id: "youtube-play",
        command: "play {query} on youtube",
        aliases: [
          "play {query}",
          "find and play {query}",
          "search and play {query}",
        ],
        action: "search_and_play",
        target: "youtube",
        params: ["query"],
      },

      {
        id: "youtube-pause",
        command: "pause youtube",
        aliases: ["pause video", "pause the video"],
        action: "click",
        target: "pause",
      },

      {
        id: "youtube-resume",
        command: "resume youtube",
        aliases: ["resume video", "continue video", "play video"],
        action: "click",
        target: "play",
      },

      {
        id: "youtube-next",
        command: "play next youtube video",
        aliases: ["next video", "skip video"],
        action: "click",
        target: "next",
      },

      {
        id: "youtube-fullscreen",
        command: "make youtube fullscreen",
        aliases: ["fullscreen video", "enter fullscreen"],
        action: "click",
        target: "fullscreen",
      },

      {
        id: "youtube-volume",
        command: "set youtube volume to {value}",
        aliases: ["set volume to {value}", "change youtube volume to {value}"],
        action: "set_volume",
        params: ["value"],
      },

      {
        id: "youtube-mute",
        command: "mute youtube",
        aliases: ["mute video", "mute sound"],
        action: "click",
        target: "mute",
      },

      {
        id: "youtube-subscribe",
        command: "subscribe to {channel}",
        aliases: ["subscribe to {channel} on youtube"],
        action: "subscribe",
        params: ["channel"],
      },
    ],
  },

  // =========================
  // GOOGLE
  // =========================
  {
    id: "google",
    website: "Google",
    url: "https://www.google.com",
    category: "search",

    commands: [
      {
        id: "google-open",
        command: "open google",
        aliases: ["open google.com", "go to google"],
        action: "navigate",
        target: "https://www.google.com",
      },

      {
        id: "google-search",
        command: "search google for {query}",
        aliases: ["google {query}", "search for {query}", "find {query}"],
        action: "search",
        target: "google",
        params: ["query"],
      },

      {
        id: "google-images",
        command: "search google images for {query}",
        aliases: ["find images of {query}", "search images for {query}"],
        action: "image_search",
        params: ["query"],
      },

      {
        id: "google-news",
        command: "search google news for {query}",
        aliases: ["find news about {query}", "search news for {query}"],
        action: "news_search",
        params: ["query"],
      },
    ],
  },

  // =========================
  // GMAIL
  // =========================
  {
    id: "gmail",
    website: "Gmail",
    url: "https://mail.google.com",
    category: "productivity",

    commands: [
      {
        id: "gmail-open",
        command: "open gmail",
        aliases: ["open my gmail", "go to gmail"],
        action: "navigate",
        target: "https://mail.google.com",
      },

      {
        id: "gmail-search",
        command: "search gmail for {query}",
        aliases: [
          "search emails for {query}",
          "find email about {query}",
          "find emails containing {query}",
        ],
        action: "search",
        params: ["query"],
      },

      {
        id: "gmail-compose",
        command: "compose email to {email}",
        aliases: ["write an email to {email}", "send email to {email}"],
        action: "compose_email",
        params: ["email"],
      },

      {
        id: "gmail-open-inbox",
        command: "open gmail inbox",
        aliases: ["show my inbox", "open my inbox"],
        action: "navigate",
        target: "inbox",
      },
    ],
  },

  // =========================
  // GITHUB
  // =========================
  {
    id: "github",
    website: "GitHub",
    url: "https://github.com",
    category: "development",

    commands: [
      {
        id: "github-open",
        command: "open github",
        aliases: ["go to github"],
        action: "navigate",
        target: "https://github.com",
      },

      {
        id: "github-search",
        command: "search github for {query}",
        aliases: [
          "search github repositories for {query}",
          "find github repository {query}",
          "find github projects for {query}",
        ],
        action: "search",
        params: ["query"],
      },

      {
        id: "github-repository",
        command: "open github repository {repository}",
        aliases: [
          "open repository {repository}",
          "open github repo {repository}",
        ],
        action: "navigate",
        params: ["repository"],
      },

      {
        id: "github-profile",
        command: "open github profile {username}",
        aliases: ["open github user {username}"],
        action: "profile",
        params: ["username"],
      },
    ],
  },

  // =========================
  // LINKEDIN
  // =========================
  {
    id: "linkedin",
    website: "LinkedIn",
    url: "https://www.linkedin.com",
    category: "career",

    commands: [
      {
        id: "linkedin-open",
        command: "open linkedin",
        aliases: ["go to linkedin"],
        action: "navigate",
        target: "https://www.linkedin.com",
      },

      {
        id: "linkedin-search",
        command: "search linkedin for {query}",
        aliases: [
          "search people on linkedin for {query}",
          "find {query} on linkedin",
        ],
        action: "search",
        params: ["query"],
      },

      {
        id: "linkedin-jobs",
        command: "find {job} jobs",
        aliases: [
          "search {job} jobs",
          "find jobs for {job} on linkedin",
          "search linkedin jobs for {job}",
        ],
        action: "job_search",
        params: ["job"],
      },

      {
        id: "linkedin-location-jobs",
        command: "find {job} jobs in {location}",
        aliases: [
          "search {job} jobs in {location}",
          "find linkedin jobs in {location}",
        ],
        action: "job_search",
        params: ["job", "location"],
      },
    ],
  },

  // =========================
  // SPOTIFY
  // =========================
  {
    id: "spotify",
    website: "Spotify",
    url: "https://open.spotify.com",
    category: "music",

    commands: [
      {
        id: "spotify-open",
        command: "open spotify",
        aliases: ["go to spotify"],
        action: "navigate",
        target: "https://open.spotify.com",
      },

      {
        id: "spotify-search",
        command: "search spotify for {query}",
        aliases: ["find song {query}", "search spotify {query}"],
        action: "search",
        params: ["query"],
      },

      {
        id: "spotify-play",
        command: "play {query} on spotify",
        aliases: ["play {query}", "play song {query}", "play artist {query}"],
        action: "search_and_play",
        params: ["query"],
      },

      {
        id: "spotify-pause",
        command: "pause spotify",
        aliases: ["pause music"],
        action: "click",
        target: "pause",
      },

      {
        id: "spotify-next",
        command: "next spotify song",
        aliases: ["next song", "skip song"],
        action: "click",
        target: "next",
      },
    ],
  },

  // =========================
  // REDDIT
  // =========================
  {
    id: "reddit",
    website: "Reddit",
    url: "https://www.reddit.com",
    category: "social",

    commands: [
      {
        id: "reddit-open",
        command: "open reddit",
        aliases: ["go to reddit"],
        action: "navigate",
        target: "https://www.reddit.com",
      },

      {
        id: "reddit-search",
        command: "search reddit for {query}",
        aliases: ["find {query} on reddit", "search reddit {query}"],
        action: "search",
        params: ["query"],
      },

      {
        id: "reddit-subreddit",
        command: "open subreddit {subreddit}",
        aliases: ["open r/{subreddit}", "go to subreddit {subreddit}"],
        action: "subreddit",
        params: ["subreddit"],
      },
    ],
  },

  // =========================
  // INSTAGRAM
  // =========================
  {
    id: "instagram",
    website: "Instagram",
    url: "https://www.instagram.com",
    category: "social",

    commands: [
      {
        id: "instagram-open",
        command: "open instagram",
        aliases: ["go to instagram"],
        action: "navigate",
        target: "https://www.instagram.com",
      },

      {
        id: "instagram-search",
        command: "search instagram for {query}",
        aliases: ["find instagram profile {query}", "search instagram {query}"],
        action: "search",
        params: ["query"],
      },

      {
        id: "instagram-profile",
        command: "open instagram profile {username}",
        aliases: ["open instagram user {username}"],
        action: "profile",
        params: ["username"],
      },
    ],
  },

  // =========================
  // AMAZON
  // =========================
  {
    id: "amazon",
    website: "Amazon",
    url: "https://www.amazon.in",
    category: "shopping",

    commands: [
      {
        id: "amazon-open",
        command: "open amazon",
        aliases: ["go to amazon"],
        action: "navigate",
        target: "https://www.amazon.in",
      },

      {
        id: "amazon-search",
        command: "search amazon for {product}",
        aliases: ["find {product} on amazon", "search amazon {product}"],
        action: "search",
        params: ["product"],
      },
    ],
  },

  // =========================
  // FLIPKART
  // =========================
  {
    id: "flipkart",
    website: "Flipkart",
    url: "https://www.flipkart.com",
    category: "shopping",

    commands: [
      {
        id: "flipkart-open",
        command: "open flipkart",
        aliases: ["go to flipkart"],
        action: "navigate",
        target: "https://www.flipkart.com",
      },

      {
        id: "flipkart-search",
        command: "search flipkart for {product}",
        aliases: ["find {product} on flipkart"],
        action: "search",
        params: ["product"],
      },
    ],
  },

  // =========================
  // GOOGLE MAPS
  // =========================
  {
    id: "maps",
    website: "Google Maps",
    url: "https://maps.google.com",
    category: "maps",

    commands: [
      {
        id: "maps-open",
        command: "open google maps",
        aliases: ["open maps", "go to google maps"],
        action: "navigate",
        target: "https://maps.google.com",
      },

      {
        id: "maps-search",
        command: "find {place} on google maps",
        aliases: ["search maps for {place}", "find {place}"],
        action: "search",
        params: ["place"],
      },

      {
        id: "maps-directions",
        command: "get directions from {from} to {to}",
        aliases: [
          "directions from {from} to {to}",
          "navigate from {from} to {to}",
        ],
        action: "directions",
        params: ["from", "to"],
      },
    ],
  },

  // =========================
  // WIKIPEDIA
  // =========================
  {
    id: "wikipedia",
    website: "Wikipedia",
    url: "https://www.wikipedia.org",
    category: "education",

    commands: [
      {
        id: "wiki-search",
        command: "search wikipedia for {query}",
        aliases: [
          "find wikipedia article about {query}",
          "search wikipedia {query}",
        ],
        action: "search",
        params: ["query"],
      },
    ],
  },

  // =========================
  // STACK OVERFLOW
  // =========================
  {
    id: "stackoverflow",
    website: "Stack Overflow",
    url: "https://stackoverflow.com",
    category: "development",

    commands: [
      {
        id: "stackoverflow-search",
        command: "search stack overflow for {query}",
        aliases: [
          "find stack overflow answer for {query}",
          "search programming question {query}",
        ],
        action: "search",
        params: ["query"],
      },
    ],
  },

  // =========================
  // NOTION
  // =========================
  {
    id: "notion",
    website: "Notion",
    url: "https://www.notion.so",
    category: "productivity",

    commands: [
      {
        id: "notion-open",
        command: "open notion",
        aliases: ["go to notion"],
        action: "navigate",
        target: "https://www.notion.so",
      },

      {
        id: "notion-search",
        command: "search notion for {query}",
        aliases: ["find notion page {query}", "search my notion for {query}"],
        action: "search",
        params: ["query"],
      },
    ],
  },

  // =========================
  // NETFLIX
  // =========================
  {
    id: "netflix",
    website: "Netflix",
    url: "https://www.netflix.com",
    category: "entertainment",

    commands: [
      {
        id: "netflix-open",
        command: "open netflix",
        aliases: ["go to netflix"],
        action: "navigate",
        target: "https://www.netflix.com",
      },

      {
        id: "netflix-search",
        command: "search netflix for {query}",
        aliases: ["find movie {query}", "find series {query}"],
        action: "search",
        params: ["query"],
      },

      {
        id: "netflix-play",
        command: "play {query} on netflix",
        aliases: ["watch {query} on netflix"],
        action: "search_and_play",
        params: ["query"],
      },
    ],
  },
];
