# Documentação de Arquitetura - Projeto Frontend React

## Stack Tecnológica

- React 19
- Redux 9.2.0 / Redux Toolkit
- Vite 6.3.1
- TypeScript 5.7.2
- Bootstrap 5.3.5
- Sass 1.87.0
- ESLint + Prettier

## Estrutura do Projeto

```
src/
├── features/ # Funcionalidades organizadas por domínio
│ ├── auth/ # Exemplo: Feature de autenticação
│ │ ├── components/ # Componentes específicos da feature
│ │ ├── hooks/ # Hooks específicos da feature
│ │ ├── services/ # Serviços de API
│ │ ├── types/ # Tipos TypeScript
│ │ └── index.ts # Exportações públicas
│ └── [outras-features]/
│
├── shared/ # Recursos compartilhados entre features
│ ├── components/ # Componentes UI reutilizáveis
│ ├── hooks/ # Hooks reutilizáveis
│ ├── utils/ # Funções utilitárias
│ └── types/ # Tipos compartilhados
│
├── core/ # Configurações centrais da aplicação
│ ├── api/ # Cliente API
│ ├── router/ # Configuração de rotas
│ └── store/ # Gerenciamento de estado global (Redux)
│    ├── index.ts # Configuração da store
│    ├── rootReducer.ts # Combinador de reducers
│    ├── hooks.ts # Hooks tipados (useAppDispatch, useAppSelector)
│    └── slices/ # Slices do Redux Toolkit
│       └── counterSlice.ts # Exemplo de slice
│
├── styles/ # Estilos globais e Bootstrap
│ ├── bootstrap-custom.scss # Configuração personalizada do Bootstrap
│ ├── variables.scss # Variáveis SCSS
│ └── global.css # Estilos globais básicos
│
├── assets/ # Recursos estáticos
├── App.tsx # Componente raiz
└── main.tsx # Ponto de entrada
```

## Estrutura de um Componente

```
Button/
├── Button.tsx # Implementação
├── Button.test.tsx # Testes
├── Button.module.scss # Estilos (opcional)
└── index.ts # Exportação
```

## Gerenciamento de Estado com Redux Toolkit

### Configuração da Store

O projeto utiliza Redux Toolkit para simplificar o gerenciamento de estado global. A configuração da store centraliza todos os reducers e habilita o Redux DevTools em ambiente de desenvolvimento.

```typescript
// src/core/store/index.ts
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './rootReducer'

export const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production'
})

// Tipos para usar com useSelector e useDispatch
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
```

### Combinação de Reducers

O arquivo rootReducer.ts combina todos os reducers da aplicação, facilitando a organização à medida que o projeto cresce.

```typescript
// src/core/store/rootReducer.ts
import { combineReducers } from '@reduxjs/toolkit'
import counterReducer from './slices/counterSlice'
// Importe seus reducers aqui

const rootReducer = combineReducers({
    counter: counterReducer
    // Adicione seus reducers aqui
})

export default rootReducer
```

### Hooks Tipados

Para garantir tipagem correta ao usar Redux com TypeScript, o projeto fornece hooks personalizados que já incluem as tipagens necessárias.

```typescript
// src/core/store/hooks.ts
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from './index'

// Use em vez de useDispatch e useSelector comuns
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
```

### Slices do Redux Toolkit

Os slices encapsulam o estado e os reducers relacionados em um único arquivo, seguindo o padrão "ducks".

```typescript
// src/core/store/slices/counterSlice.ts
import { createSlice } from '@reduxjs/toolkit'

interface CounterState {
    value: number
}

const initialState: CounterState = {
    value: 0
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state) {
            state.value++
        }
        // Adicione outras actions aqui
    }
})

export const { increment } = counterSlice.actions
export default counterSlice.reducer
```

### Uso nos Componentes

Para usar o estado Redux em um componente:

```typescript
import { useAppDispatch, useAppSelector } from '@core/store/hooks'
import { increment } from '@core/store/slices/counterSlice'

function CounterComponent() {
  // Acessar estado
  const count = useAppSelector((state) => state.counter.value)
  // Despachar ações
  const dispatch = useAppDispatch()

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
    </div>
  )
}
```

## Princípios Chave

1. **Organização por Features**: Cada funcionalidade do negócio tem seu próprio módulo autocontido
2. **Recursos Compartilhados**: Componentes e lógica reutilizável ficam em `shared/`
3. **Configuração Central**: Configurações globais ficam em `core/`
4. **Redux Modularizado**: Estado global dividido em slices por domínio
5. **Importações Simplificadas**: Use aliases e arquivos barrel (index.ts)

## Aliases de TypeScript Recomendados

```json
{
    "compilerOptions": {
        "paths": {
            "@/*": ["src/*"],
            "@features/*": ["src/features/*"],
            "@shared/*": ["src/shared/*"],
            "@core/*": ["src/core/*"]
        }
    }
}
```

## Integração do Bootstrap

```scss
// src/styles/bootstrap-custom.scss
$primary: #sua-cor-primaria;
@import 'bootstrap/scss/bootstrap';
```

```typescript
// main.tsx
import './styles/bootstrap-custom.scss'
```

## Adicionando Novas Features

1. Crie um diretório em `src/features/`
2. Adicione subdiretorios necessários (components, hooks, etc.)
3. Crie um `index.ts` exportando a API pública
4. Registre rotas em `core/router` se necessário
5. Se necessário, crie slices Redux em `core/store/slices/`

## Adicionando Novos Slices Redux

1. Crie um arquivo em `src/core/store/slices/`
2. Defina o estado inicial e os reducers usando `createSlice`
3. Exporte as actions e o reducer
4. Adicione o reducer ao `rootReducer.ts`

## Boas Práticas Redux

1. Use o Redux DevTools para depurar estados e actions
2. Mantenha o estado normalizado para evitar duplicação
3. Use `createAsyncThunk` para operações assíncronas
4. Prefira múltiplos slices pequenos a um slice grande
5. Utilize seletores para acessar o estado de forma consistente

## Benefícios da Estrutura

- **Escalabilidade**: Fácil adicionar novas features
- **Manutenibilidade**: Código relacionado fica agrupado
- **Colaboração**: Equipes diferentes podem trabalhar em features separadas
- **Reutilização**: Componentes compartilhados são fáceis de identificar
- **Clareza**: Estrutura intuitiva para novos desenvolvedores
- **Previsibilidade**: Fluxo de dados unidirecional com Redux
