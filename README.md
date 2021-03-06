# deno first try.

Deno is a typescript runtime for backend development. Created by the founder of
node.

### Install deno

```bash
deno completions bash > /usr/local/etc/bash_completion.d/deno.bash
source /usr/local/etc/bash_completion.d/deno.bash
```

Note follow prompts and add deno to your environment variables so you can call
it. https://deno.land/manual@v1.10.3/getting_started/setup_your_environment

## Run samples

### Log a message.

```
deno run ./src/log.ts 'A handwritten message from me'
```

This simple program grabs the first argument passed in the cli and logs it to
the terminal.

### Fetch data and log output

```
deno run --allow-net src/fetch.ts www.google.com
```

This program takes the argument after the file and fetches the page, it stores
it in a variable and logs it on the screen like a curl

### Run small http server

```
deno run --allow-net src/server.ts
```

Starts up a small http server that returns as a response Hello

### Run test

```
deno run src/test.ts
```

Runs test with a native assert library.

### Run Unix CAT command

```
deno run --allow-read ./src/cat.ts ./src/app.ts 
```

This reads a file and shows it on stout

### Complile targets for programs

```
deno compile --unstable --allow-net --target x86_64-unknown-linux-gnu --output curlClone https://raw.githubusercontent.com/cortesben/deno-test/main/src/fetch.ts
```

--target [possible values: x86_64-unknown-linux-gnu, x86_64-pc-windows-msvc,
x86_64-apple-darwin, aarch64-apple-darwin]
