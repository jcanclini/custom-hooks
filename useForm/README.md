# useForm

Example:

```
  const initialForm = {
    name: '',
    age: 0,
    email: ''
  }

  const [ fromValues, handleInputChange, reset ] = useForm( initialForm );
```