# Coding Standards

## Table of Contents

1. [Naming Convention](#naming-convention)
1. [Import](#import)

---

## Naming Convention

### Format Options[^1]

1. `camelCase` : standard `camelCase` format - no underscores are allowed between characters, and consecutive capitals are allowed (i.e. both `myID` and `myId` - are valid).
1. `PascalCase` : same as `camelCase`, except the first character must be upper-case.
1. `snake_case` : standard `snake_case` format - all characters must be lower-case, and underscores are allowed.
1. `strictCamelCase` : same as `camelCase`, but consecutive capitals are not allowed (i.e. `myId` is valid, but `myID` is not).
1. `StrictPascalCase` : same as `strictCamelCase`, except the first character must be upper-case.
1. `UPPER_CASE` : same as `snake_case`, except all characters must be upper-case.

### Format of Names

#### General

|   Name Of | Format       | Prefix               |
| --------: | :----------- | -------------------- |
|    Classe | `PascalCase` |                      |
|  Variable | `camelCase`  |                      |
|  Function | `camelCase`  |                      |
|      File | `camelCase`  | (component name)[^2] |
| Directory | `camelCase`  |                      |
|  Constant | `UPPER_CASE` |                      |

##### Files for React Component

1. Prefix with component name
1. Postfix with utility
1. Use **singular** form for `type` and `state` files
1. Postfix view-file with import-name of the `View` component
1. Extension should be `tsx` only when `react` element is exported
1. Example:
   - `compInteractor.ts`
   - `compPresenter.tsx`
   - `compViewInput.tsx`
   - `compState.ts`
   - `compType.ts`

#### React Variables

|   Name Of | Format       | Prefix |
| --------: | :----------- | ------ |
| Component | `PascalCase` |        |
|      Type | `PascalCase` |        |
| Interface | `PascalCase` |        |
|     State | `camelCase`  |        |
|      Hook | `camelCase`  | `use`  |
|       URL | `UPPER_CASE` |        |

## Import

### Local

1. Import local states as `mState` and use them with dot notation
1. Import local types as `mType` and use them with dot notation
1. Import example:
   - State : `import * as mState from './compState';`
   - Type : `import * as mType from './compType';`
1. Usage example:
   - State : `const inputValue = useAtom(mState.inputValue);`
   - Type :`const inputValue : mType.InputValue = {};`

### Global

1. Import global states as `gState` and use them with dot notation
1. Import global types as `gType` and use them with dot notation
1. Import example:
   - State : `import * as gState from '../../controller/data/states';`
   - Type : `import * as gType from '../../controller/data/types';`
1. Usage example:
   - State : `const inputValue = useAtom(gState.inputValue);`
   - Type :`const inputValue : gType.InputValue = {};`

[^1]: <https://typescript-eslint.io/rules/naming-convention/#format-options>

[^2]: `( )` means "if applicable"
