# deno first try.
Deno is a typescript runtime for backend development. Created by the founder of node.

### Install deno

``` bash
deno completions bash > /usr/local/etc/bash_completion.d/deno.bash
source /usr/local/etc/bash_completion.d/deno.bash
```

Note follow prompts and add deno to your environment variables so you can call it.
https://deno.land/manual@v1.10.3/getting_started/setup_your_environment

### run samples
Run a sample log. This simple program grabs the first argument passed in the cli and prints it.
```
deno run ./src/log.ts 'A handwritten message from me'
Input from user: 
A handwritten message from me
```

