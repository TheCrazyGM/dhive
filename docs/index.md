---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Pollen"
  text: "The High-Performance Hive SDK"
  tagline: Modern, secure, and zero-dependency TypeScript library for the Hive blockchain.
  image:
    src: /pollen-logo.svg
    alt: Pollen
  actions:
    - theme: brand
      text: Get Started
      link: /guide/getting-started
    - theme: alt
      text: API Reference
      link: /api/

features:
  - title: Zero Dependencies
    details: Minimal bundle size and maximum security. No legacy bloat.
  - title: Pure ESM
    details: Native module support with strict typing for modern development.
  - title: Native Byte Engine
    details: Powered by Uint8Array and noble cryptography. Fast and reliable.
  - title: High Resilience
    details: Built-in exponential backoff and jitter for stable RPC connections.
---
