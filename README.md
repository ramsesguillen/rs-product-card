# RS-Product-Card


Este es un paquete de pruebas de despliegue en npm

### Ramses Salinas

## Ejemplo

```
import { ProductCard } from "../components"
import { ProductButtons, ProductImage, ProductTitle } from "../components"
```

```
<ProductCard
  product={ product }
  initialValues={{
    count: 4,
    maxCount: 10
  }}
>
  {
    ( { reset, count, increaseBy, maxCount, isMaxCountReached } ) => (
      <>
        <ProductImage />
        <ProductTitle />
        <ProductButtons />
      </>
    )
  }
</ProductCard>

```