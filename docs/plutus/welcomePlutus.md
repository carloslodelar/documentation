Plutus Core and Plutus Tx user guide
==================================================

Plutus Core
---------------------

The Plutus project consists of Plutus Core, the programming language used for
scripts on Cardano; tooling and compilers for compiling various intermediate
languages into Plutus Core; and Plutus Tx, the compiler that compiles the Haskell
source code into Plutus Core to form the on-chain part of a contract application.
All of this is used in combination to write Plutus Core scripts that run on the
Cardano blockchain.

This documentation introduces the Plutus Core programming language and programming
with Plutus Tx. It includes explanations, tutorials, how-to instructions,
troubleshooting, and reference information.

The intended audience of this documentation includes people who want to implement
smart contracts on the Cardano blockchain. This involves using Plutus Tx to write
scripts, requiring some knowledge of the Haskell programming language.

This guide is also meant for certification companies, certification auditors,
and people who need an accurate specification. See, for example:

* the [Cardano Ledger Specification](https://github.com/IntersectMBO/cardano-ledger#cardano-ledger) and
* the [Plutus Core Specification](https://github.com/IntersectMBO/plutus#specifications-and-design)

The Plutus repository
----------------------------------

The Plutus repository https://github.com/IntersectMBO/plutus contains
the implementation, specification, and mechanized metatheory of Plutus Core.
It also contains the Plutus Tx compiler and the libraries, such as ``PlutusTx.List``,
for writing Haskell code that can be compiled to Plutus Core.

## Explore Plutus

- Explanations
    - What is the Plutus Platform?
    - What is a ledger?
    - What is Plutus Foundation?
    - What are Plutus language versions?

- Simple example
    - Plutus script for an auction smart contract
    - The EUTXO model, datum, redeemer and script context
    - Auction properties
    - Plutus Tx code
    - Life cycle of the auction smart contract
    - Libraries for writing Plutus Tx scripts
    - Alternatives to Plutus Tx
    - Off-chain code
    - Further reading

- Quick Start
    - Writing the On-Chain Validator
    - Creating and Submitting Transactions using an Off-Chain Framework
    - Interfacing between Plutus Tx and Off-Chain Frameworks

- GHC Extensions, Flags and Pragmas
- Extensions
- Flags
- Pragmas

- Tutorials
    - Using Plutus Tx
    - Writing basic validator scripts
    - Writing basic minting policies

- How-to guides
    - How to export scripts, datums and redeemers
    - How to profile the budget usage of Plutus scripts

- Troubleshooting
    - Plugin errors
    - Haskell Language Server issues
    - Error codes

## Architectural decision records

- Architectural decision records

## Reference

Reference
Writing scripts
Plutus on Cardano
Glossary
Bibliography