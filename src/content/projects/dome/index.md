---
title: "DOME - Data Obfuscation & Management Engine"
description: "A secure, lightweight password manager written in Rust."
date: "Apr 2 2026"
demoURL: ""
repoURL: "https://github.com/GuillermoEJ/dome"
---

# DOME - Data Obfuscation & Management Engine

A production-ready password manager written in Rust that prioritizes security, performance, and simplicity. Rather than being yet another web-based vault, I made DOME as a native CLI tool that runs locally with zero network dependencies.

## The Philosophy

Most password managers ask users to trust their infrastructure. DOME instead gives users complete control: the entire application compiles to a single binary with all cryptographic operations performed locally. There's no cloud sync, no account registration, no risk of data breaches in someone else's database.

## Security Architecture

The application uses industry-standard cryptography at every layer:

- AES-256 in CFB mode with cryptographically random IVs for password storage
- PBKDF2-SHA256 key derivation to slow down brute-force attacks
- Zlib compression before encryption for storage efficiency
- SHA-256 hashing for vault integrity verification
- Secure random number generation from the operating system for password generation

Critically, DOME has zero unsafe code blocks. All cryptographic operations delegate to well-tested, peer-reviewed libraries. The memory safety guarantees provided by Rust itself eliminate entire categories of vulnerabilities that plague C/C++ password managers.

## Technical Design

The codebase follows modular architecture principles:

- Separate concerns between crypto operations, vault logic, CLI interface, and file persistence
- Type-safe abstractions that prevent common programming errors at compile time
- Async-ready foundation using Tokio for eventual feature expansion
- Cross-platform compatibility (Windows, macOS, Linux, ARM)

The single-binary delivery eliminates dependency hell. Existing password managers require runtime environments, language interpreters, or bundled libraries. DOME just works: one executable, no setup.

## Engineering Lessons

Building DOME in Rust taught me:

- How low-level cryptographic primitives combine into secure systems
- Trade-offs between interface simplicity and underlying complexity
- The value of compile-time guarantees in security-critical code
- Performance implications of different encryption modes and key derivation functions
- Cross-platform development and managing platform-specific behavior

## Why Rust Was The Right Choice

This application absolutely demands memory safety. Libraries written in C for cryptography are everywhere, and even small buffer overflow vulnerabilities in password management code can have catastrophic consequences. Rust's ownership system eliminates this entire class of bugs at compile time.

The performance is also unmatched. As a native binary, DOME starts instantly and uses minimal system resources. There's no JVM warmup, no import overhead, no garbage collection pauses.

## Technology Stack

- Rust 1.75+
- RustCrypto suite for all cryptographic operations
- Tokio for async runtime
- Serde for structured data serialization
- Zlib for compression
