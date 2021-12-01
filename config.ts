import { config } from "dotenv";

config();

export const CONFIG = {
    BOT_TOKEN: process.env.BOT_TOKEN as string,
    MONGODB_URI: "mongodb+srv://thewolyoxd:thewolyoxd@thewolyoxd.u92ds.mongodb.net/thewolyoxd?retryWrites=true&w=majority",
    REWARD_CHANNEL: "915626135012929597",
    LEADERBOARDS_CHANNEL: "915626106391003227",
    LEADERBOARDS_MESSAGE_TEXT: "915627486782558208",
    LEADERBOARDS_MESSAGE_VOICE: "915627422966218762",
    GUILD_ID: "915554557461950475",
    VOICE_REWARDS: [
        {
            rank: 1000 * 60 * 60 * 24 * 4,
            role: "915576643723075584"
        },
        {
            rank: 1000 * 60 * 60 * 24 * 10,
            role: "915576642796154900"
        },
        {
            rank: 1000 * 60 * 60 * 24 * 20,
            role: "915576641600753705"
        },
        {
            rank: 1000 * 60 * 60 * 24 * 54,
            role: "915576641386844170"
        }
    ],
    TEXT_REWARDS: [
        {
            rank: 1000,
            role: "915576653810376736"
        },
        
        {
            rank: 5000,
            role: "915576653223174195"
        },
        {
            rank: 50000,
            role: "915576653193838592"
        },
        {
            rank: 100000,
            role: "915576651755184189"
        }
    ]
}
