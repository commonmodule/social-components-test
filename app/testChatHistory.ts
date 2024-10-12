import { Author, ChatMessageGroup } from "@common-module/social-components";

const testAuthors: Author[] = [
  {
    id: "user1",
    name: "Alice",
    avatarUrl: "/avatars/alice.webp",
  },
  {
    id: "user2",
    name: "Bob",
    avatarUrl: "/avatars/bob.webp",
  },
  {
    id: "user3",
    name: "Charlie",
    avatarUrl: "/avatars/charlie.webp",
  },
];

const testChatHistory: ChatMessageGroup[] = [
  {
    author: testAuthors[0],
    messages: [
      { id: 1, content: "Hey everyone! How's it going?" },
      { id: 2, content: "I hope you're all having a great day!" },
    ],
  },
  {
    author: testAuthors[1],
    messages: [
      { id: 3, content: "Hi Alice! I'm doing well, thanks for asking." },
      { id: 4, content: "How about you?" },
    ],
  },
  {
    author: testAuthors[2],
    messages: [
      { id: 5, content: "Hello Alice and Bob! I'm good too." },
      { id: 6, content: "What are you all up to today?" },
    ],
  },
  {
    author: testAuthors[0],
    messages: [
      { id: 7, content: "I'm glad to hear that you're both doing well!" },
      {
        id: 8,
        content: "I'm actually working on a new project. It's pretty exciting.",
      },
      { id: 9, content: "How about you guys?" },
    ],
  },
  {
    author: testAuthors[1],
    messages: [
      {
        id: 10,
        content: "That sounds interesting, Alice. What kind of project is it?",
      },
      { id: 11, content: "I'm just catching up on some reading today." },
    ],
  },
  {
    author: testAuthors[2],
    messages: [
      { id: 12, content: "A new project? Now I'm curious too!" },
      {
        id: 13,
        content: "I'm planning to go for a hike later this afternoon.",
      },
    ],
  },
  {
    author: testAuthors[0],
    messages: [
      {
        id: 14,
        content:
          "It's a web application for tracking daily habits. I'm still in the early stages, but I'm excited about it.",
      },
      { id: 15, content: "Bob, what are you reading? Anything interesting?" },
      {
        id: 16,
        content:
          "And Charlie, a hike sounds lovely! Where are you planning to go?",
      },
    ],
  },
];

export default testChatHistory;
