# Práctica de consumo de estado global por medio de useReducer


## Qué es el useReducer?

El Hook useReducer es un Hook que nos permite manipular el state de nuestros componentes funcionales, esto se logra a través de: Una función reducer. Y un función de retorno llamada dispatch con la cual podemos combinar o emparejar el state.

### `Ventajas`
* Permite actualizar el state a partir de un estado anterior.
* La lógica de la actualización de subatributos de nuestro state, es más fácil de comprender.

### `Desventajas`
* De entrada, debes escribir mucho más código que si utilizarás useState.
* Debes de aprender nuevos conceptos, como lo es el: reducer y dispatch.

## Cómo se declara un Reducer de
En forma general podemos declarar a este Hook de la siguiente forma.

<code>`const [state, dispatch] = useReducer(reducer, initialArg, init);`</code>

- `reducer`: Objeto Reducer o combinación de reducers que llamaremos por medio del dispatch para administrar el estado.
- `initialArg`: Estado del componente.
- `init`: Función que altera el estado inicial del reduer.

