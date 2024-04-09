const { bootstrap } = require("global-agent");
const { downloadArtifact } = require("@electron/get");

setImmediate(async () => {

  console.log(process.env.http_proxy);
  process.env.http_proxy && (process.env.GLOBAL_AGENT_HTTP_PROXY = process.env.http_proxy);
  console.log(process.env.https_proxy);
  process.env.https_proxy && (process.env.GLOBAL_AGENT_HTTPS_PROXY = process.env.https_proxy);
  bootstrap();

  const zipFilePath = await downloadArtifact({
    version: '24.3.0',
    platform: 'darwin',
    artifactName: 'electron',
    artifactSuffix: 'symbols',
    arch: 'x64',
  });

  console.log("zipFilePath", zipFilePath);
});
