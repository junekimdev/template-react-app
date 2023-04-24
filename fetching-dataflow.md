# Fetching Dataflow

- `State Layer` **stores & manages** data
- `Event Layer` **writes** data
- `Display Layer` **reads** data

```mermaid
sequenceDiagram
  participant B as Backend

  box rgb(50,50,255) State/Event Layer
  participant Q as React-Query
  participant I as Interactor
  end

  box rgb(50,50,255) Display Layer
  participant P as Presenter
  participant V as View
  end

  Note over I: Loading
  I->>Q: useQuery()
  Q->>+B: fetch()
  B->>-Q: {Data}
  Q->>I: Data
  Note over I: Store
  I->>P: useContext()
  I->>V: useContext()
```

> In this diagram, state layer and event layer are combined
>
> `Interactor` manages both UI-states and events
>
> `React-Query` manages Network-states
