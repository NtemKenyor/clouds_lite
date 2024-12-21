// fetchMetadata.js
const { Connection, PublicKey } = require("@solana/web3.js");
const { deserialize } = require("borsh");
require('dotenv').config();

// // 7sGT7oBKSetii8mspduzWR8EeYq86z51v9BdwfkEW2Wr
const programId = new PublicKey("7sGT7oBKSetii8mspduzWR8EeYq86z51v9BdwfkEW2Wr");


class PostMetadata {
    constructor({ title, content, image_url, author, date, others }) {
        this.title = title;
        this.content = content;
        this.image_url = image_url;
        this.author = author;
        this.date = date;
        this.others = others;
    }
}

const postMetadataSchema = new Map([
    [PostMetadata, { kind: "struct", fields: [
        ["title", "string"],
        ["content", "string"],
        ["image_url", "string"],
        ["author", "string"],
        ["date", "string"],
        ["others", "string"]
    ]}],
]);

async function fetchMetadataForAccounts(network="production") {
    const accountMetadata = [];

    const connection = (network === "localhost" || network === "developmet") 
        ? new Connection("http://127.0.0.1:8899", "confirmed")
        : new Connection("https://spring-quick-surf.solana-devnet.quiknode.pro/016ff48f0f7c3f1520e515c01dca9a83ef528317 ", "confirmed");


    try {
        const programAccounts = await connection.getProgramAccounts(programId, {
            commitment: "confirmed",
            encoding: "base64",
        });

        for (const account of programAccounts) {
            const metadata = deserialize(postMetadataSchema, PostMetadata, Buffer.from(account.account.data, 'base64'));
            accountMetadata.push({
                pubkey: account.pubkey.toString(),
                metadata,
            });
        }

        return accountMetadata;

    } catch (err) {
        console.error("Error fetching account metadata:", err);
        return [];
    }
}

module.exports = { fetchMetadataForAccounts };
