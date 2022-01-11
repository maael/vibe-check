# Vibe Check

Site for finding Twitch collab partners via stream info and short bios.

Potential URLs:

- [vibecheck.stream](https://vibecheck.stream)

## Flow

User signs up with their Twitch login via Oauth, allowing us to get information for matching.

User then fills out some short questions, such as preferred streaming times, maybe creates a short highlights/portfolio page, and provides contact details (or have contact in Vibe Check?).

System will then give them a list of "potential matches" based on provided info and Twitch info, that they can swipe through Tinder style to mark if they're interested in collaborating or not.

A pair of two individuals will eventually be shown to each other, and if both mark each other as interested, they will be marked as "matches", and contact details for each other will be provided.

Will need a system to mark/feedback quality of collaboration/contact to account for any abuse, and make better "potential matches".

Can also generate links to get feedback from chat about the collab sessions.

## Pages

- Landing Page - Login/Sell
- User Page - View Twitch info, as well as questions and contact info
- Potential Matches Page - View and Swipe through potentials
- Matches Page - Mutually interested individuals
- Collab highlights Page - Highlight and showcase collaborations that came about due to the platform
- Collab Feedback Form - Can be posted in chat after/during collabs to get feedback from viewers
- Collab Feedback Details - View the feedback for a collab pairing collected via the Collab Feedback Form

## Outstanding Problems

- How to do initial population of users?
  - If no users are on the platform, matching won't occur, meaning no value. Needs minimal set of willing users to gain traction.
  - Outreach/onboarding of users willing to collaborate while knowing platform won't work until some size is achieved?

## Architecture

### Tech

- Next.js
- Tailwind CSS
- MongoDB
- Next Auth

### DB Objects

#### User Architecture

```js
const User = {
    _id: ID,
    twitchId: string,
    twitchUser: string,
    twitchPicture: string,
    twitchAPIKey: string,
    twitchMeta: object,
    enabled: boolean,
    matchingInfo: {
        shortBio: string,
        highlights: string[],
    },
    timezone: TZ,
    streamingTimes: {
        monday: {
            start: Time,
            end: Time
        } | null,
        tuesday: {
            start: Time,
            end: Time
        } | null,
        wednesday: {
            start: Time,
            end: Time
        } | null,
        thursday: {
            start: Time,
            end: Time
        } | null,
        friday: {
            start: Time,
            end: Time
        } | null,
        saturday: {
            start: Time,
            end: Time
        } | null,
        sunday: {
            start: Time,
            end: Time
        } | null,
    },
    ratings: {
        overall: {
            up: number,
            down: number,
        },
        funny: {
            up: number,
            down: number,
        },
        skilled: {
            up: number,
            down: number,
        },
    },
}
```

#### Matching Architecture

```js
const PotentialMatch = {
  _id: ID,
  user1: User,
  user2: User,
  user1Confirm: boolean | null,
  user2Confirm: boolean | null,
}
```

#### Collab Highlights

```js
const CollabHighlight = {
  _id: ID,
  user1: User,
  user2: User,
  title: string,
  description: string,
  thumbnail: string,
  vod: string,
}
```

#### Collab Feedback

```js
const CollabFeedbackSession = {
    _id: ID,
    createdAt: TimestampTZ,
    lastFeedbackAt: TimestampTZ,
    user1: User,
    user2: User,
    feedback: CollabFeedback[],
}
const CollabFeedback = {
    overall: number,
    funny: number,
    skilled: number,
    comment: string,
}
```

### API Routes

- `/api/auth/*` - Handle authentication
- `/api/user` - Handle getting/updating user information
- `/api/user/[user]` - Handles getting other users information or sending ratings from matches
- `/api/matches/potential` - Get list of potential matches, will need to add new matches if none/few exist
- `/api/matches/confirmed` - Get list of confirmed matches
- `/api/feedback` - Gets list of feedback forms for user or creates new feedback form session
- `/api/feedback/[sessionId?]` - View/send feedback on a collaboration
