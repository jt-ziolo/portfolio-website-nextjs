/// <reference path="./.sst/platform/config.d.ts" />
// See below for price class options
// https://docs.aws.amazon.com/pt_br/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distribution-distributionconfig.html
const cdnDistPriceClass = "PriceClass_100";
export default $config({
  app(input) {
    return {
      name: "ziolojt-portfolio-website",
      removal: "remove", // wipe
      providers: {
        aws: {
          profile:
            // Resolves to TelomericSoftware-production
            input.stage === "production" ? undefined : "TelomericSoftware-dev",
        },
        cloudflare: "5.41.0",
      },
      home: "aws",
    };
  },
  async run() {
    new sst.aws.Nextjs("JTZioloPortfolioWebsite", {
      domain: {
        name: "ziolojt.com",
        aliases: ["www.ziolojt.com"],
        dns: sst.cloudflare.dns({
          override: true,
        }),
      },
      transform: {
        cdn: (args) => {
          args.transform = {
            distribution: (distArgs) => {
              distArgs.priceClass = cdnDistPriceClass;
            },
          };
        },
      },
    });
    // new sst.aws.Email("EmailForm", {
    //   sender: "ziolojt.com",
    //   dmarc: "v=DMARC1; p=none; adkim=s; aspf=s;",
    //   dns: false,
    // });
  },
});
