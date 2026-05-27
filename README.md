# 🌸 Pollen

**The modern, secure, and zero-dependency TypeScript SDK for the Hive blockchain. Built for production. Made to last.**

`dhive` built the foundation of JavaScript development on Hive — but it carried a decade of legacy: unmaintained cryptography, thousands of transient vulnerabilities, and a build system stuck in the past. **Pollen** is its spiritual successor, rebuilt for security, performance, and the environments developers actually build for today.

If you are building for the web or Node.js on Hive, Pollen is your foundation.

---

**Secured and Native:** Pollen is powered by the **@noble** cryptographic suite and a custom, native **Uint8Array** byte engine. It has zero external dependencies for protocol-level serialization and signing.

---

## Why Pollen?

The Hive ecosystem deserves infrastructure that is safe and fast by default.

### 🔒 Audited Cryptography & Native Engine

Pollen strips out legacy, unmaintained libraries like `secp256k1` (v3), `elliptic`, `ecurve`, and `@ecency/bytebuffer`. In their place:

- **[@noble/curves](https://github.com/paulmillr/noble-curves)**: Audited, zero-dependency implementation of `secp256k1`.
- **[@noble/hashes](https://github.com/paulmillr/noble-hashes)**: Modern, audited implementations of SHA256, RIPEMD160, and SHA512.
- **Native Byte Engine**: High-performance serialization using standard `Uint8Array` and `DataView`, eliminating the need for bulky legacy wrappers.

### ⚡ Blazing Fast Builds & Tests

We replaced the legacy Browserify/Babelify/Mocha pipeline with modern, Rust-backed and esbuild-powered tools:

- **esbuild**: Generates secure browser bundles in ~200ms.
- **Vitest**: Native TypeScript test runner with instant startup and interactive watch mode.
- **oxlint**: Near-instant, Rust-based linting.

### 🔌 Ecosystem Alignment

Pollen is the JavaScript counterpart to **[Nectar](https://github.com/srbde/hive-nectar)** (Python). Together, they form a unified, secure foundation for building cross-platform Hive applications under the **SRBDE** umbrella.

---

## 🚀 Quick Start

Requires Node.js >= 18.

```bash
pnpm add @srbde/pollen
```

### Read account data (TypeScript)

```typescript
import { Client } from "@srbde/pollen";

const client = new Client(["https://api.hive.blog", "https://api.openhive.network"]);

async function main() {
  const account = await client.database.getAccounts(["thecrazygm"]);
  console.log(`HIVE Balance: ${account[0].balance}`);
}

main();
```

### Sign and broadcast (Node.js ESM)

```javascript
import { Client, PrivateKey } from "@srbde/pollen";

const client = new Client(["https://api.hive.blog"]);
const key = PrivateKey.from(process.env.ACTIVE_KEY);

client.broadcast
  .transfer(
    {
      from: "username",
      to: "recipient",
      amount: "0.001 HIVE",
      memo: "Sent with Pollen 🌸",
    },
    key,
  )
  .then(console.log);
```

---

## 🏗️ Building from Source

Pollen uses a modernized, pnpm-based toolchain.

```bash
# Install dependencies
pnpm install

# Build all targets (Node, Browser, Types)
pnpm run build

# Run the 100% Green test suite
pnpm run test
```

---

## 📦 Bundling

The easiest way to bundle Pollen (with Vite, Webpack, etc.) is to just `pnpm add @srbde/pollen` and `import { Client } from '@srbde/pollen'`.

If you are bundling for the browser, Pollen now includes two pre-bundled versions:

- `dist/pollen.js`: A minified IIFE bundle for legacy `<script>` tags.
- `dist/pollen.mjs`: A modern ESM bundle for native browser imports.

---

## 📜 Standing on Shoulders

Pollen is a modernized fork of [dhive](https://github.com/openhive-network/dhive), originally built by Johan Nordberg. His years of work provided the architecture that Pollen has secured and carried into the modern era.

---

## 🌐 Built by SRBDE

**Pollen** is developed and maintained by the **Sustainable Resource and Business Development Enterprise (SRBDE)** — an open-source infrastructure organization building tools and platforms for communities that build things together.

We apply the logic of agricultural sustainability to software: the goal is always to return more to the ecosystem than we extract.

- **Open source is our value, not just our business model.**
- **Our commercial products fund our open-source core. The open work is the mission.**

### Explore the Ecosystem

| Project                                               | Description                       |
| ----------------------------------------------------- | --------------------------------- |
| [Pollen](https://github.com/srbde/pollen)             | The modern Hive TypeScript SDK    |
| [Anther](https://github.com/srbde/anther)             | The modern Hive Go SDK            |
| [Xylem](https://github.com/srbde/xylem)               | The modern Hive Rust SDK          |
| [Nectar](https://github.com/srbde/hive-nectar)        | The modern Hive Python SDK        |
| [nectarengine](https://github.com/srbde/nectarengine) | The Hive-Engine sidechain library |
| [ecoinstats.net](https://ecoinstats.net)              | SRBDE corporate hub               |
| [thecrazygm.com](https://thecrazygm.com)              | Open gaming tools & TTRPGs        |

---

## 🤝 Contributing

Audits, forks, and pull requests are welcome. **Pollen** is built to last for the decade, not the quarter. If you find a security issue, please open a private advisory rather than a public issue.
