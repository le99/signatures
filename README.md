# Todo signatures


## User Guide

En `./tx1/tx1.json` se muestra una transaccion sin firmar para crear un ToDo. En `./tx1/tx1signed.json` es la misma transaccion firmada.

* type: Define que es de una transaccion de tipo "todo"
* id: un identificador del todo
* input: es null, lo que indica que se esta creando un nuevo "todo"
* output: es un [Transaction Output como el usado en Bitcoin](https://developer.bitcoin.org/reference/transactions.html). Tambien mirar: [UTXO](https://ethereum.org/en/whitepaper/). Indica la llave publica del dueño, "owner", del Todo y el texto asociado al todo, "Todo1".


En `./tx2/tx2.json` se muestra una transaccion sin firmar para pasar una transaccion de una persona a otra. En `./tx2/tx2signed.json` es la misma transaccion firmada.

* type: Define que es de una transaccion de tipo "todo"
* input: es un Transaction Output que se va usar
* output: es un Transaction Output indica la llave publica del nuevo dueño, "owner", del Todo y el texto asociado al todo, "Todo1".

Esta transaccion solo es valida si el input no se ha consumido (es un UTXO) y el dueño del Input (que representa al todo) es el que firma la transaccion.




## Signature Validation

```bash
npm install

node ./index.js --publicKey 0288b05dcf5adb83f010384808c9433aa41680bd924df097671faef9f9785b6d8c --msg "{\"type\":\"todo\",\"id\":\"7609\",\"input\":null,\"output\":{\"value\":\"Todo1\",\"owner\":\"0288b05dcf5adb83f010384808c9433aa41680bd924df097671faef9f9785b6d8c\"}}" --signature "0xfcc2fc00a6b6a81113697cfb89d49f7e17cca87ffb860e6ac5fb65dfd755a5b607ceddd0e4986f3f14c0bf88ab14a575c56eaba8bc466ef9de68fd0a44123a751c"

```