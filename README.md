# LatePenalty – Technical Interview Exercise

Welcome, and thanks for joining us for this round! 👋

In this session you'll pick up a bug ticket from a mock team and work on it the way you would on a normal day.

There's no trick to "passing". We're interested in **how you think**: how you read a ticket, how you investigate, how you use your tools, and how you talk to your team.

> Please **don't start working on the exercise before the interview**. We'd like to see your approach from the beginning.

---

## Before the interview

Please check that:

- [ ] **Node.js 18 or later** is installed (`node --version`)
- [ ] You can **clone this repo** and run the tests (see below)
- [ ] Your usual **AI tools** are installed and signed in, if you use any (Copilot, ChatGPT, Claude, Cursor, etc.)
- [ ] **Screen sharing** works on your video call app

The session is **30 minutes**, so getting set up beforehand gives you more time for the interesting part.

### Getting set up

```bash
git clone https://github.com/Kesthecat/LatePenalty.git
cd LatePenalty/gradebook-late-penalty
npm test
```

The tests should pass. There are no dependencies to install.

---

## During the interview

### What you'll work on

| File | What it is |
|---|---|
| [`GRADE-412.md`](PenaltyProblem/GRADE-412.md) | The Jira ticket. **Start here.** |
| [`gradebook-late-penalty/`](PenaltyProblem/gradebook-late-penalty) | The service the ticket is about: code, tests, and the data Support attached to the ticket. |

### How it works

- **Think aloud.** Tell us what you're reading, what you believe, and why. This matters more to us than finishing.
- **Work the way you normally do.** Use any tools you like, including AI assistants, search and docs. There are no restrictions. Please keep your whole screen shared, including any AI chat windows.
- **Ask questions.** Ask anything you'd ask a PO or anyone on a real team.
- **You don't need to finish.** Describing your fix and how you'd test it is fine. Writing working code is a bonus, not a requirement.

### Roughly how we'll spend the 30 minutes

1. Reading and talking through the ticket
2. Investigating the bug
3. Your fix and how you'd check it
4. A quick question about how you'd communicate with the team
5. Time for your questions

---

Good luck, and enjoy it! 🙂
