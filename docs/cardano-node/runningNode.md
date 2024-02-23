---
title: Run the node
id: running-node
sidebar_position: 4
keywords: [Get-started, run the node, installation, cardano-node, cardano node]
---

# Running the node and connecting to a network

## Public networks
:::tip
Configuration files for the supported networks can be found at [https://book.world.dev.cardano.org/environments.html](https://book.world.dev.cardano.org/environments.html).
:::

| Network | Usage |
| :--- | :--- |
| **Mainnet** | Live Production. Only gets official mainnet releases. |
| **Pre-production** | Testing release candidates and mainnet releases. Forks at approximately same time as mainnet (within an epoch of each other).<br/> Long running. Since this parallels mainnet, if a bug occurs here, it needs fixed properly and can not be respun. |
| **Preview** | Testing release candidates and mainnet releases. Leads mainnet hard forks by at least 4 weeks.<br/> Ideally stays long running. Only if an issue is found after it forks that's breaking should it be respun.<br/> Epoch length of 1 day. Development flags allowed in configuration files. |
| **SanchoNet** | Testing Conway era functionality.<br/> The Sanchonet chain will be rolled back with each new node release for testing new features and fixes.<br/> Epoch length of 1 day. Development flags allowed in configuration files. |

## Getting configuration files for the preview testnet

Create a directory for your node files:

```bash
mkdir preview
cd preview
```

Download the configuration files:

```bash
wget https://book.world.dev.cardano.org/environments/preview/config.json
wget https://book.world.dev.cardano.org/environments/preview/topology.json
wget https://book.world.dev.cardano.org/environments/preview/byron-genesis.json
wget https://book.world.dev.cardano.org/environments/preview/shelley-genesis.json
wget https://book.world.dev.cardano.org/environments/preview/alonzo-genesis.json
wget https://book.world.dev.cardano.org/environments/preview/conway-genesis.json
```

```bash
cardano-node run --help
```

```bash
Usage: cardano-node run [--topology FILEPATH]
                          [--database-path FILEPATH]
                          [--socket-path FILEPATH]
                          [ --tracer-socket-path-accept FILEPATH
                          | --tracer-socket-path-connect FILEPATH
                          ]
                          [--byron-delegation-certificate FILEPATH]
                          [--byron-signing-key FILEPATH]
                          [--shelley-kes-key FILEPATH]
                          [--shelley-vrf-key FILEPATH]
                          [--shelley-operational-certificate FILEPATH]
                          [--bulk-credentials-file FILEPATH]
                          [--host-addr IPV4]
                          [--host-ipv6-addr IPV6]
                          [--port PORT]
                          [--config NODE-CONFIGURATION]
                          [--snapshot-interval SNAPSHOTINTERVAL]
                          [--validate-db]
                          [ --mempool-capacity-override BYTES
                          | --no-mempool-capacity-override
                          ]
```

### Running a passive node on the preview testnet

```bash
cardano-node run --topology topology.json \
--database-path db \
--socket-path node.socket \
--port 3001 \
--config config.json 
```

Open a new terminal and create the CARDANO\_NODE\_SOCKET\_PATH environment variable:

```bash
export CARDANO_NODE_SOCKET_PATH="$HOME/preview/node.socket"
```

Check that the node is syncing:

```bash
cardano-cli query tip --testnet-magic 2
```

### Running a mainnet node

Create a directory for the mainnet node:

```bash
mkdir mainnet
cd mainnet
```

Get the configuration files:

```bash
wget https://book.world.dev.cardano.org/environments/mainnet/config.json
wget https://book.world.dev.cardano.org/environments/mainnet/topology.json
wget https://book.world.dev.cardano.org/environments/mainnet/byron-genesis.json
wget https://book.world.dev.cardano.org/environments/mainnet/shelley-genesis.json
wget https://book.world.dev.cardano.org/environments/mainnet/alonzo-genesis.json
wget https://book.world.dev.cardano.org/environments/mainnet/conway-genesis.json
```

```bash
cardano-node run --topology topology.json \
--database-path db \
--socket-path node.socket \
--port 3001 \
--config config.json 
```

On the new terminal:

```bash
export CARDANO_NODE_SOCKET_PATH="$HOME/mainnet/node.socket"
```
