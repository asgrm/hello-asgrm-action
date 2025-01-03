# hello-asgrm-action

This action prints "Hello asgrm" or "Hello" + the name of a person to greet to the log.

## Inputs

### `name`

**Required** The name of the person to greet. Default `"asgrm"`.

## Outputs

### `greeting`

Greeting message

## Example usage

```yaml
uses: actions/hello-asgrm-action
with:
  name: 'Mona the Octocat'
```