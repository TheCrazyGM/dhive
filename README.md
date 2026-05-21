# [dhive](https://github.com/openhive-network/dhive)

Robust and modernized Hive client library that runs in both node.js and the browser.

**Secured and Audited:** This version of dhive has been modernized to use the `@noble` cryptographic suite, resolving all known critical vulnerabilities in the core engine.

---

**note** As of version 0.7.0 WebSocket support has been removed. The only transport provided now is HTTP(2). For most users the only change required is to swap `wss://` to `https://` in the address. If you run your own full node make sure to set the proper [CORS headers](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing) if you plan to access it from a browser.

---

## Browser compatibility

Modernized to work with latest browsers and bundlers.

## Installation

### Via npm

For node.js or the browser with modern bundlers like [Vite](https://vitejs.dev/), [esbuild](https://esbuild.github.io/), or [Webpack](https://webpack.js.org/).

```bash
npm install @hiveio/dhive
```

### From cdn or self-hosted script

Grab `dist/dhive.js` from git and include in your html:

```html
<script src="@hiveio/dhive.js"></script>
```

Or from the [unpkg](https://unpkg.com) cdn:

```html
<script src="https://unpkg.com/@hiveio/dhive@latest/dist/dhive.js"></script>
```

## Usage

### In the browser

```html
<script src="https://unpkg.com/@hiveio/dhive@latest/dist/dhive.js"></script>
<script>
  var client = new dhive.Client(["https://api.hive.blog", "https://api.openhive.network"]);
  client.database
    .getDiscussions("trending", { tag: "writing", limit: 1 })
    .then(function(discussions) {
      document.body.innerHTML += "<h1>" + discussions[0].title + "</h1>";
      document.body.innerHTML += "<h2>by " + discussions[0].author + "</h2>";
      document.body.innerHTML +=
        '<pre style="white-space: pre-wrap">' + discussions[0].body + "</pre>";
    });
</script>
```

### In node.js

With TypeScript:

```typescript
import { Client } from "@hiveio/dhive";

const client = new Client(["https://api.hive.blog", "https://api.openhive.network"]);

for await (const block of client.blockchain.getBlocks()) {
  console.log(`New block, id: ${block.block_id}`);
}
```

With JavaScript (CommonJS):

```javascript
const dhive = require("@hiveio/dhive");

const client = new dhive.Client(["https://api.hive.blog", "https://api.openhive.network"]);
const key = dhive.PrivateKey.fromLogin("username", "password", "posting");

client.broadcast
  .vote(
    {
      voter: "username",
      author: "almost-digital",
      permlink: "dhive-is-the-best",
      weight: 10000
    },
    key
  )
  .then(
    function(result) {
      console.log("Included in block: " + result.block_num);
    },
    function(error) {
      console.error(error);
    }
  );
```

### Async/Await (node.js 12+)

```javascript
const { Client } = require("@hiveio/dhive");

const client = new Client(["https://api.hive.blog", "https://api.openhive.network"]);

async function main() {
  const props = await client.database.getChainProperties();
  console.log(`Maximum blocksize consensus: ${props.maximum_block_size} bytes`);
  client.disconnect();
}

main().catch(console.error);
```

## Bundling

The easiest way to bundle dhive (with Vite, Webpack, etc.) is to just `npm install @hiveio/dhive` and `import { Client } from '@hiveio/dhive'`. 

If you are bundling for the browser, `dhive` now includes a pre-bundled and minified version using **esbuild**, ensuring high performance and security.

---

_Share and Enjoy!_
