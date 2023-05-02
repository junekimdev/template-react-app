# Data-Fetching Flow

- `State Layer` **stores & manages** data
- `Event Layer` **writes** data
- `Display Layer` **reads** data

```mermaid
sequenceDiagram
  participant B as Backend

  box rgb(50,50,255) State Layer
  participant Q as React-Query
  end

  box rgb(50,50,255) Display Layer
  participant P as Presenter
  participant V as View
  end

  Note over P: Loading
  P->>Q: useQuery()
  Q->>+B: fetch()
  B->>-Q: {Data}
  Note over Q: Store
  Q->>P: QueryResult
  P->>V: props
```

> `Interactor` manages events
>
> `React-Query` manages Network-states
>
> `States` manages UI-states
