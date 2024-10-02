import { Resource } from "sst";
import { SESv2Client, SendEmailCommand } from "@aws-sdk/client-sesv2";

const client = new SESv2Client();

// await client.send(
//   new SendEmailCommand({
//     FromEmailAddress: Resource.EmailForm.sender,
//     Destination: {
//       ToAddresses: [process.env.FORM_TO_ADDRESS],
//     },
//     Content: {
//       Simple: {
//         Subject: { Data: "Hello World!" },
//         Body: { Text: { Data: "Sent from my SST app." } },
//       },
//     },
//   }),
// );
