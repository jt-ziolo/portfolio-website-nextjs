/// <reference path="./.sst/platform/config.d.ts" />
export default $config({
  app(input) {
    return {
      name: "ziolojt-portfolio-website",
      providers: {
        aws: {
          profile:
            input.stage === "production"
              ? undefined
              : "TelomericSoftware-dev",
        },
      },
      home: "aws",
    };
  },
  async run() {
    new sst.aws.Nextjs("JTZioloPortfolioWebsite", {
      domain: {
        name: "ziolojt.com",
        dns: false,
        cert: process.env.CERT_ARN,
      },
    });
    // new sst.aws.Email("EmailForm", {
    //   sender: "forms.ziolojt.com",
    //   dmarc: "v=DMARC1; p=none; adkim=s; aspf=s;",
    //   dns: sst.cloudflare.dns(),
    // });
  },
});
