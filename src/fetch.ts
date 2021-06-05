const [url] = Deno.args;
const getUrl = await fetch(`http://${url}`);

const body = new Uint8Array(await getUrl.arrayBuffer());
await Deno.stdout.write(body);