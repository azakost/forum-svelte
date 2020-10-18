# Create SPA-routes

Bash script to create routes faster

```bash
function spa-route() {
    # Create files and dirs if not exist
    touch $PWD/src/router.js
    mkdir -p $PWD/src/routes
    touch $PWD/src/routes/${1,,}.svelte
    echo $1 >>$PWD/src/routes/${1,,}.svelte
    sed -i '1s/^/import '${1^}' from "\.\/routes\/'${1,,}'\.svelte"\;\n/' $PWD/src/router.js
    sed -i -e '$aroutes.set\(\"'${2,,}'\"\, '${1^}')\;\n' $PWD/src/router.js
}
```
